function setupKoala() {
  window.ko = window.ko || [];
  ["identify","track", "removeListeners", "open", "on", "off", "qualify", "ready"].forEach(function(t) {
    ko[t]=function(){var n=[].slice.call(arguments);return n.unshift(t),ko.push(n),ko}
  });
}

setupKoala();
