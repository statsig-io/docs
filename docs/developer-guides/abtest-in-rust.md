---
title: How to run an AB Test in Rust
sidebar_label: First AB Test in Rust
slug: /developer-guides/abtest-in-rust
---

Running a simple A/B experiment in a web page with Rust and the Statsig SDK involves a few distinct steps, including setting up your Rust environment, integrating with Statsig for A/B testing, and configuring the experiment via the Statsig console. Below is a step-by-step guide.

### Step 1: Set Up Your Rust Environment

First, you'll need to set up your Rust environment.

1. **Ensure Rust is Installed**:
    - Ensure Rust is installed on your system. If not, you can download it from the official Rust website.

2. **Add Statsig as a Dependency**:
    - To use the SDK, add Statsig as a dependency in your `Cargo.toml`. The latest version can be found at crates.io/crates/statsig.
      ```toml
      [dependencies]
      statsig = "X.Y.Z" # <- update version
      ```

### Step 2: Integrate Statsig for A/B Testing

1. **Initialize the SDK**:
    - After installation, you will need to initialize the SDK using a Server Secret Key from the Statsig console. Replace `'secret-key'` with your actual Statsig server-side SDK key.
      ```rust
      use statsig::{Statsig};

      Statsig::initialize("secret-key").await;
      ```

2. **Update Your Application for A/B Testing**:
    - Modify your application to use the Statsig SDK. You'll need to initialize Statsig and then use it within your application to determine which content to serve based on the A/B test configuration.
    - Ensure to replace `'your_experiment_name'` with the name of your experiment.
      ```rust
      use statsig::{Statsig, StatsigUser};

      let user = StatsigUser::with_user_id("user123".to_string());  // Customize user info as needed
      let experiment = Statsig::get_experiment(&user, 'your_experiment_name').ok().unwrap();
      let text_to_show = experiment.get_value('text', 'Hello, World!');
      ```

### Step 3: Creating the A/B Test in Statsig Console

1. **Log Into Statsig Console**:
    - Access the Statsig Console and sign in.

2. **Create an Experiment**:
    - Navigate to the "Experiments" section and click "Create New".
    - Fill in the experiment details, including a unique key for `'your_experiment_name'`.

3. **Configure Experiment Variants**:
    - Define your variants, for example, `variant_a` and `variant_b`.
    - Add a parameter called `'text'` for each variant and configure the text you wish to display, such as "This is Control Variant" and "This is Test Variant".

    ![image](https://github.com/statsig-io/.github/assets/74588208/8a667aeb-9189-4e7d-8a22-a42dabcdfe09)

4. **Launch Your Experiment**:
    - After setting up your variants and their parameters, save your configurations and start the experiment.

By following these steps, you've set up a Rust application that utilizes Statsig for running an A/B test, dynamically serving different text content based on the experiment's variant. This setup enables data-driven decisions and iterative improvements based on user interactions.