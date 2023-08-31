function setup() {
  if (typeof window !== 'undefined') {
    window.statsig.initialize("client-LAx5juseYG9kxnB2vHLxFluaFmZVv9aAKPmw1NB8rps", {
      initializeValues: window.statsigConfigSpecs,
    });

    window.statsig.getExperiment({}, "a_a_test");
  }
}

setup();
