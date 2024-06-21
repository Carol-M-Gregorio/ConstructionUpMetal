var purecookieTitle = "Cookies",
    purecookieDesc = "Ao utilizar este site, você aceita automaticamente que utilizemos cookies.",
    purecookieLink = '<a href="https://www.cssscript.com/privacy-policy/" target="_blank">Saber Mais</a>',
    purecookieButton = "Ok";

function pureFadeIn(e, o) {
    var i = document.getElementById(e);
    i.style.opacity = 0;
    i.style.display = o || "block";

    (function e() {
        var o = parseFloat(i.style.opacity);
        (o += 0.02) > 1 || (i.style.opacity = o, requestAnimationFrame(e))
    })();
}

function pureFadeOut(e) {
    var o = document.getElementById(e);
    o.style.opacity = 1;

    (function e() {
        (o.style.opacity -= 0.02) < 0 ? o.style.display = "none" : requestAnimationFrame(e)
    })();
}

function setCookie(e, o, i) {
    localStorage.setItem(e, o || '');
}

function getCookie(e) {
    return localStorage.getItem(e);
}

function eraseCookie(e) {
    localStorage.removeItem(e);
}

function cookieConsent() {
    if (!getCookie("purecookieDismiss")) {
        document.body.innerHTML += '<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieTitle"><a>' + purecookieTitle + '</a></div><div class="cookieDesc"><p>' + purecookieDesc + " " + purecookieLink + '</p></div><div class="cookieButton"><a onClick="purecookieDismiss();">' + purecookieButton + "</a></div></div>";
        pureFadeIn("cookieConsentContainer");
    }
}

function purecookieDismiss() {
    setCookie("purecookieDismiss", "1", 7);
    pureFadeOut("cookieConsentContainer");
}

window.onload = function() {
    cookieConsent();
};
