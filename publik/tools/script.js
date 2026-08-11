<!DOCTYPE html>
<html lang="en">
<head>
    <title>Puter</title>
    <link rel="preconnect" href="https://js.sentry-cdn.com" crossorigin="anonymous"><link rel="preconnect" href="https://browser.sentry-cdn.com" crossorigin="anonymous"><link rel="preconnect" href="https://plausible.io" crossorigin="anonymous">

    <link rel="preload" href="https://gui-cdn.puter.com/bundle.min.js" as="script" />
    <link rel="preload" href="https://js.puter.com/v2/" as="script">

    <meta name="author" content="Puter Technologies Inc.">
    <meta name="description" content="">
    <meta name="facebook-domain-verification" content="e29w3hjbnnnypf4kzk2cewcdaxym1y" />
    <link rel="canonical" href="https://puter.com/">

    <meta property="og:url" content="https://puter.com/">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Puter">
    <meta property="og:description" content="">
    <meta property="og:image" content="/dist/images/screenshot.png">

    <meta name="twitter:card" content="summary_large_image">
    <meta property="twitter:domain" content="puter.com">
    <meta property="twitter:url" content="https://puter.com/">
    <meta name="twitter:title" content="Puter">
    <meta name="twitter:description" content="">
    <meta name="twitter:image" content="/dist/images/screenshot.png">

    <link rel="apple-touch-icon" sizes="57x57" href="/dist/favicons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/dist/favicons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/dist/favicons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/dist/favicons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/dist/favicons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/dist/favicons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/dist/favicons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/dist/favicons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/dist/favicons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/dist/favicons/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/dist/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/dist/favicons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/dist/favicons/favicon-16x16.png">
    <link rel="manifest" href="/dist/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/dist/favicons/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" href="https://gui-cdn.puter.com/bundle.min.css">

    <link rel="preload" as="image" href="https://puter-assets.b-cdn.net/wallpaper.webp">

    <script>
        if ( ! window.service_script ) {
            window.service_script_api_promise = (() => {
                let resolve, reject;
                const promise = new Promise((res, rej) => { resolve = res; reject = rej; });
                promise.resolve = resolve;
                promise.reject = reject;
                return promise;
            })();
            window.service_script = async fn => {
                try { await fn(await window.service_script_api_promise); }
                catch (e) { console.error('service_script(ERROR)', e); }
            };
        }
    </script>

    

    <script src="https://js.sentry-cdn.com/4753503fdf9844755d3142e2992ee7d4.min.js" crossorigin="anonymous"></script>
<script>
    Sentry.onLoad(function() {
        Sentry.init({
            // Automatic instrumentation for browser navigation + XHR/fetch.
            integrations: [Sentry.browserTracingIntegration()],
            // 100% trace sample — tune down if cost grows.
            tracesSampleRate: 1.0,
        });
    });
</script><script async src="https://plausible.io/js/pa-mY9tcF8DhWIXnKuuHBvac.js"></script>  <script>
                                window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
                                plausible.init()
                            </script>
</head>
<body>
    
    <script>window.puter_gui_enabled = true;</script>
    <script>window.gui_env = 'prod';</script>

    <script src="https://gui-cdn.puter.com/bundle.min.js"></script>
    <script type="module">
    window.addEventListener('load', function() {
        gui({"stripe_publishable_key":"pk_live_51LX7wsADHjrVFvnFsOt4zvbmUOoD0eXOx8wfNs8B9pjaszrIJQF7jePd4M0nWozYNgE4qpS6JhyWSJHQuEG9SYfe00hUfjD8mt","turnstileSiteKey":"0x4AAAAAABvMyOLo9EwjFVzC","preludeSdkKey":"sdk_mAgSax8mzuDxFzech8gvsqgvB5Kb2ljhNH9G","disable_temp_users":false,"domain":"puter.com","env":"prod","api_base_url":"https://api.puter.com","api_origin":"https://api.puter.com","app_origin":"https://puter.com","gui_origin":"https://puter.com","hosting_domain":"puter.site","asset_dir":"/dist","captchaRequired":{"login":false,"signup":false},"title":"Puter","description":"","short_description":"","company":"Puter Technologies Inc.","canonical_url":"https://puter.com/","social_media_image":"","launch_options":{}});
    });
    </script>
    
    <div id="templates" style="display: none;"></div>

    
</body>
</html>
