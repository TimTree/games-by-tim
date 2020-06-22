---
title: Wheel of Fortune for PowerPoint update checker
social_media_image: ''

---

<noscript>
<p>JavaScript is disabled. Check for updates manually <a href='/wheel-of-fortune-for-powerpoint/'>on the project page.</a></p>
</noscript>

<p id="needupdate">To check for updates, load this page from Wheel of Fortune for PowerPoint's <strong>Check for Updates</strong> button.</p>

<script>
    // https://gomakethings.com/how-to-get-the-value-of-a-querystring-with-native-javascript/
    var getQueryString = function ( field, url ) {
        var href = url ? url : window.location.href;
        var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
        var string = reg.exec(href);
        return string ? string[1] : null;
    };
    var version = getQueryString('ver');
    if (version=="4.1.2" || version=="4.1.2mac") {
        document.getElementById("needupdate").innerHTML="Your version of Wheel of Fortune for PowerPoint is up to date.";
    }
    else {
        document.getElementById("needupdate").innerHTML="An updated version of Wheel of Fortune for PowerPoint is available. Download it <a href='/wheel-of-fortune-for-powerpoint/'>on the project page</a>.";
    }
</script>