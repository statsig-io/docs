async function setup() {
  if (typeof window !== 'undefined') {
    window.addEventListener('load', async function() {
        await window.statsig.initializeAsync("client-LAx5juseYG9kxnB2vHLxFluaFmZVv9aAKPmw1NB8rps");
    
        window.statsig.getExperiment({}, "a_a_test");
    });
    
  }
}

setup();
