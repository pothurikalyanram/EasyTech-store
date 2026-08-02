// ── EasyTech Live Auto-Refresh & Deployment Detector Engine ──
(function () {
    let currentETag = null;

    function checkLiveDeployment() {
        fetch(window.location.href, { method: 'HEAD', cache: 'no-store' })
            .then(response => {
                const etag = response.headers.get('etag') || response.headers.get('last-modified');
                if (etag) {
                    if (currentETag && currentETag !== etag) {
                        console.log('[EasyTech] New live deployment detected! Auto-refreshing page...');
                        window.location.reload(true);
                    } else {
                        currentETag = etag;
                    }
                }
            })
            .catch(err => {
                // Silent catch for offline or network blips
            });
    }

    // Check immediately on page load
    checkLiveDeployment();

    // Silently check every 25 seconds for new live Netlify updates
    setInterval(checkLiveDeployment, 25000);
})();
