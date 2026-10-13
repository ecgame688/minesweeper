(function () {
    'use strict';
    var ua = navigator.userAgent || navigator.vendor || '';
    var isIOS = /iPad|iPhone|iPod/i.test(ua) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    var isAndroid = /android/i.test(ua);
    var store = isIOS ? 'astore' : isAndroid ? 'gplay' : null;
    if (!store) return;
    var target = document.getElementById(store).href;
    var status = document.getElementById('status');
    status.textContent = isIOS ? window.installMessages.openingIOS : window.installMessages.opening;
    window.location.replace(target);
    // Keep both store buttons usable if an in-app browser blocks navigation.
    window.setTimeout(function () {
        status.textContent = window.installMessages.fallback;
    }, 1200);
}());
