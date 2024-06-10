module.exports = {
  whn: [
    {
      type: "doc",
      id: "introduction",
      label: "Getting Started",
    },
    {
      type: "category",
      label: "Guides",
      items: [
        "guides/connect",
        "guides/metric_sources",
        "guides/metrics",
        "guides/assignment_sources",
        "guides/experiments",
        "guides/checklist",
        "guides/sql",
        "guides/pulse",
        "guides/sdks",
        "guides/aatest",
        // "metrics/different-id", // TODO @tore
        "guides/running_a_poc",
      ],
    },
    {
      type: "category",
      label: "Features",
      items: [
        "native-vs-cloud",
        "features/cohort-metrics",
        "features/entity-properties",
        "features/id-resolution",
        "features/funnel-metrics",
        "features/power-analysis",
        "features/monitor-an-experiment",
        "features/freshness",
        // "experiments-plus/stratified-sampling", // TODO @tore
        "features/autotune",
      ],
    },
    {
      type: "category",
      label: "Data Overview",
      items: [
        // "analysis-tools/pulse",
        // "analysis-tools/settings",
        "analysis-tools/data-sources",
        "analysis-tools/data-privacy",
        "analysis-tools/pipeline-overview",
        "guides/best-practices",
      ],
    },
    {
      type: "category",
      label: "Connecting Your Warehouse",
      items: [
        "connecting-your-warehouse/bigquery",
        "connecting-your-warehouse/snowflake",
        "connecting-your-warehouse/databricks",
        "connecting-your-warehouse/redshift",
        "connecting-your-warehouse/athena",
        "connecting-your-warehouse/scheduled-reloads",
      ],
    },
  ]
};
