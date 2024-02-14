(() => {
  // Datadog RUM
  (function (h, o, u, n, d) {
    h = h[d] = h[d] || {
      q: [],
      onReady: function (c) {
        h.q.push(c);
      },
    };
    d = o.createElement(u);
    d.async = 1;
    d.src = n;
    n = o.getElementsByTagName(u)[0];
    n.parentNode.insertBefore(d, n);
  })(
    window,
    document,
    "script",
    "https://www.datadoghq-browser-agent.com/us1/v4/datadog-rum.js",
    "DD_RUM"
  );
  window.DD_RUM.onReady(function () {
    window.DD_RUM.init({
      clientToken: "pubbd3279b85c1195b179a28ec2c83020c9",
      applicationId: "8683a2ed-1095-448e-a4b8-93b303ca43db",
      site: "datadoghq.com",
      service: "statsig-docs",
      sessionSampleRate: 100,
      sessionReplaySampleRate: 20,
      trackUserInteractions: true,
      trackResources: true,
      trackLongTasks: true,
      defaultPrivacyLevel: "mask-user-input",
    });

    window.DD_RUM.startSessionReplayRecording();
  });
})();
