---
title: Count Distinct Metrics
sidebar_label: Count Distinct Metrics
slug: /metrics/count_distinct_metric_type
keywords:
  - owner:Aamodit 
last_update:
  date: 2025-08-22

---

# Count Distinct Metrics

## Purpose of count_distinct

The `count_distinct` metric reports the number of unique values in a dataset. Computing exact distinct counts at large scale requires storing all values or all hashes, which can be expensive in terms of memory and processing time. HyperLogLog++ (HLL++) sketches offer a probabilistic alternative that uses fixed or sublinear space to produce approximate distinct counts with a tight bound on relative error.

:::warning
Sketch-based count distinct metrics are in beta. Please reach out to learn more and join our beta testing! 
:::

## For context, what are sketches?

Sketches are a probabilistic summary of a large dataset that lets us answer certain queries "approximately" but very quickly and using little memory.  It does this all while using very little memory (often a fixed-size or sublinear footprint, like O(log n) or even constant space regardless of dataset size).

## Core Principles of HLL++

1. **Hashing and Leading Zeros**
    - Each input is hashed uniformly into a 64-bit integer.
    - The position of the first 1-bit in the hash (the "rank") provides an estimate of how many distinct items precede that hash in sorted order.
2. **Register Array**
    - The algorithm allocates *m* registers, where *m* = 2^p and *p* is the precision parameter.
    - Each hashed value maps to one register. The register stores the maximum rank seen so far for values mapped to it.
3. **Sparse and Dense Modes**
    - **Sparse mode** is used when the number of distinct items is below 2^(p+5). It keeps an exact list of non-zero registers in a compact form. This yields near-zero error for small cardinalities.
    - **Dense mode** is used when the count exceeds the sparse limit. The sketch is represented as a fixed array of *m* registers, each one byte in size. Error increases slightly but remains tightly bounded.
4. **Estimation and Bias Correction**
    - The raw estimate is computed as the harmonic mean of 2^(–register_value) across all registers, multiplied by a constant factor (alpha_m).
    - BigQuery applies empirical bias corrections and the HIP (historic inverse probability) estimator to reduce variance and worst-case error.

## Precision, Memory, and Error Relationship

The precision parameter *p* controls the number of registers *m* and thus the sketch's size and accuracy:

| Precision p | Registers m = 2^p | Memory per Sketch | Approximate Relative Standard Error (1 sigma) |
| --- | --- | --- | --- |
| 10 | 1,024 | ~1 KB | 0.83 / sqrt(1,024) ≈ 2.6 % |
| 12 | 4,096 | ~4 KB | 0.83 / sqrt(4,096) ≈ 1.3 % |
| 13 | 8,192 | ~8 KB | 0.83 / sqrt(8,192) ≈ 0.92 % |
| 15 | 32,768 | ~32 KB | 0.83 / sqrt(32,768) ≈ 0.46 % |
- Memory used grows linearly with *m*.
- Error decreases as the inverse square root of *m*.
- To halve the error, we must quadruple the number of registers.

**Examples of thresholds and steady‑state for common precisions:**

- **p = 10** (*m* = 1,024 registers, ~1 KB):
    - Sparse limit: 2^(10+5) = 32,768 distincts (error ≈ 0%).
    - Plateau begins at ~5·m = 5,120 distincts.
    - Steady‑state error: 0.83/√1,024 ≈ 2.6%.
- **p = 12** (*m* = 4,096 registers, ~4 KB):
    - Sparse limit: 2^(12+5) = 131,072 distincts.
    - Plateau begins at ~5·m = 20,480 distincts.
    - Steady‑state error: 0.83/√4,096 ≈ 1.3%.
- **p = 15** (*m* = 32,768 registers, ~32 KB):
    - Sparse limit: 2^(15+5) = 1,048,576 distincts.
    - Plateau begins at ~5·m = 163,840 distincts.
    - Steady‑state error: 0.83/√32,768 ≈ 0.46%.

## Error Behavior Over Cardinality

The relative error of an HLL++ sketch evolves through three phases:

- **Exact Counting Phase**
    - Cardinality ≤ 2^(p+5). The sketch operates in sparse mode with error close to 0%.
- **Bias Ramp Phase**
    - Cardinality between 2^(p+5) and approximately 5·m. The sketch is in dense mode. Systematic bias increases gradually from near 0 up to the maximum bound.
- **Steady-State Phase**
    - Cardinality ≥ 5·m. Relative error stabilizes at the theoretical bound of 0.83 / sqrt(m). Once in this phase, adding more distinct items does not change the sketch's register distribution shape—so the error remains effectively constant. In other words, after enough uniques, the sketch "plateaus," and error fluctuations are limited to the estimator's minimal random variance around that fixed bound.

### Example for p = 15 (m = 32,768)

- **Exact in sparse mode (≤ 1,048,576 items)** - For up to 2^(p+5) = 2^20 = 1,048,576 distinct elements, HLL++ uses a compact "sparse" representation that records individual hashes directly—resulting in an exact count (0% error).
- **Transition to dense mode & rising error** - Beyond 1,048,576 distinct elements, it switches to the full register array of size m = 2^p = 32,768. In this *dense* regime, the Relative Standard Error (RSE) gradually increases from 0% to its theoretical limit.
- **Asymptotic error plateau (≈ 0.46%)** - Once in dense mode, the RSE quickly converges to RSE ≈ 0.83/√m = 0.83/√32,768 ≈ 0.46%, and remains at approximately 0.46% regardless of further increases in distinct count.

## Merging Sketches Over Time or Partitions

To compute distinct counts across multiple segments (for example, daily sketches), we merge sketches by taking the element-wise maximum of their registers. This operation is associative and idempotent. Merged sketches preserve the same error bound as individual sketches and do not add additional error.

## Mathematical Formulation

1. **Raw Estimate**

- *M[i]* is the value of register *i*.
- *alpha_m* is a bias correction constant dependent on *m*.

This is the core HyperLogLog "raw" estimator for the number of distinct elements in a multiset. You take each register value M_i, compute $2^{-M_i}$, sum those values, invert that sum, and multiply by m^2 (where m is the number of registers) to get a harmonic-mean-based estimate. This is then scaled by the bias-correction constant α_m. In effect, this formula transforms the observed distribution of leading-zero counts into an approximate count of unique items.

2. **HIP Estimator**
    - Maintains a running sum of inverse probabilities for each new distinct element.
    - Produces lower variance and a smaller worst-case error constant (0.83 instead of 1.04).
3. **Relative Standard Error (RSE)**

    RSE ≈ 0.83/√m


## Best Practices and Limitations

- Choose precision *p* based on the maximum cardinality we expect and the error tolerance. (This will be done for you so you don't have to worry about it)
- Once a sketch is created with precision *p*, we cannot increase its precision later. We can only merge or downsample to lower precision.
- Long keys or complex objects increase CPU and memory in sparse mode but do not affect dense mode size.
- Plan for a noise floor equal to the sketch's relative error when designing experiments or setting thresholds.
- Please reach out if you believe you require higher precision. 

## Conclusion and Recommendations

HLL++ sketches provide efficient, bounded- error approximations for `count_distinct` queries. They trade a small, predictable error for large savings in memory and compute.

- Memory scales as O(m) rather than O(n).
- Error scales as O(1/√m).
- Merging sketches is exact for unions, with no extra error.

Select the smallest precision *p* that meets your accuracy requirements to minimize storage and computation costs.

## Choosing Precision for Your Cardinality

When you know the maximum number of unique items (cardinality) ahead of time, pick a precision *p* so that **5 · 2^p** exceeds that cardinality. This ensures the sketch is in its steady‑state phase, where the relative error remains at the bound of 0.83/√(2^p).

- **Up to 10,000 uniques**
    - *p* = 12 (m = 4,096 registers) → memory ~4 KB
    - Steady state from ~20,480 distincts (5·m) onward
    - Relative error ≈ 0.83/√4,096 ≈ 1.3 %
- **Up to 50,000 uniques**
    - *p* = 13 (m = 8,192 registers) → memory ~8 KB
    - Steady state from ~40,960 distincts onward
    - Relative error ≈ 0.83/√8,192 ≈ 0.92 %
- **Up to 100,000 uniques**
    - *p* = 15 (m = 32,768 registers) → memory ~32 KB
    - Steady state from ~163,840 distincts onward
    - Relative error ≈ 0.83/√32,768 ≈ 0.46 %
- **Up to 500,000 uniques**
    - *p* = 16 (m = 65,536 registers) → memory ~64 KB
    - Steady state from ~327,680 distincts onward
    - Relative error ≈ 0.83/√65,536 ≈ 0.32 %
- **Up to 1,000,000 uniques**
    - *p* = 17 (m = 131,072 registers) → memory ~128 KB
    - Steady state from ~655,360 distincts onward
    - Relative error ≈ 0.83/√131,072 ≈ 0.23 %
- **General rule**
    1. Compute *m* = 2^p
    2. Ensure **5·m ≥ expected cardinality**
    3. Verify memory footprint (*m* bytes) fits your budget
    4. Confirm relative error (0.83/√m) meets your accuracy target

**If cardinality is uncertain**, add a safety margin (e.g., 20–50 %) when choosing *p*. For example, if you expect up to 80,000 uniques but want headroom to 100,000, choose *p* = 15 rather than 13. This avoids falling into the bias ramp unexpectedly.

**Dynamic Scenarios**

- For ad‑hoc queries with unknown peaks, default to a mid‑range precision (e.g., *p* = 13) to balance 1 % error against ~8 KB per sketch.
- In streaming or multi‑tenant systems, consider parameterizing *p* per stream or customer based on their historical cardinality distribution.

Selecting *p* this way guarantees that once your data surpasses the steady‑state threshold, the sketch's error remains at the advertised bound and does not grow further.
