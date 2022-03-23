// MrBukLau's Scriptlets

/**********************/
/* Generic Scriptlets */
/**********************/
/// get-url-param.js
/// alias gup.js
(function() {
    "use strict";
    if (window.location.href.includes("?url=") || window.location.href.includes("&url=")) {
        let urlParams = new URLSearchParams(window.location.search);
        let urlReplacement = urlParams.get("url");
        if (window.location.href.match("url=http")) {
            window.location.replace(urlReplacement);
        } else {
            let newUrl = window.location.protocol + "//" + urlReplacement;
            window.location.replace(newUrl);
        }
    }
})();

/// set-attr.js
/// alias sa.js
(function() {
    "use strict";
    const token = "{{1}}";
    if (token === "" || token === "{{1}}") {
        return;
    }
    const tokens = token.split(/\s*\|\s*/);
    const attrValue = "{{2}}";
    let selector = "{{3}}";
    if (selector === "" || selector === "{{3}}") {
        selector = `[${tokens.join("],[")}]`;
    }
    let timer;
    const behavior = "{{4}}";
    const setattr = () => {
        timer = undefined;
        const nodes = document.querySelectorAll(selector);
        try {
            for (const node of nodes) {
                for (const attr of tokens) {
                    if (attr !== attrValue) {
                        node.setAttribute(attr, attrValue);
                    }
                }
            }
        } catch {}
    };
    const mutationHandler = mutations => {
        if (timer !== undefined) {
            return;
        }
        let skip = true;
        for (let i = 0; i < mutations.length && skip; i++) {
            const {
                type,
                addedNodes,
                removedNodes
            } = mutations[i];
            if (type === "attributes") {
                skip = false;
            }
            for (let j = 0; j < addedNodes.length && skip; j++) {
                if (addedNodes[j].nodeType === 1) {
                    skip = false;
                    break;
                }
            }
            for (let j = 0; j < removedNodes.length && skip; j++) {
                if (removedNodes[j].nodeType === 1) {
                    skip = false;
                    break;
                }
            }
        }
        if (skip) {
            return;
        }
        timer = self.requestIdleCallback(setattr, {
            timeout: 10
        });
    };
    const start = () => {
        setattr();
        if (/\bloop\b/.test(behavior) === false) {
            return;
        }
        const observer = new MutationObserver(mutationHandler);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: tokens,
            childList: true,
            subtree: true,
        });
    };
    if (document.readyState !== "complete" && /\bcomplete\b/.test(behavior)) {
        window.addEventListener("load", start, {
            once: true
        });
    } else if (document.readyState === "loading") {
        window.addEventListener("DOMContentLoaded", start, {
            once: true
        });
    } else {
        start();
    }
})();

/***********************/
/* Specific Scriptlets */
/***********************/
/// apple-music-artwork-format-and-size-changer.js
/// alias amafasc.js
(function() {
    "use strict";
    if (window.location.href.includes(".mzstatic.com/image/thumb/")) {
        if (window.location.href.match("190x190") && window.location.href.match(".webp")) {
            let newUrl1 = window.location.href.replace("190x190", "2000x2000").replace(".webp", ".jpeg");
            window.location.replace(newUrl1);
        } else if (window.location.href.match("200x200") && window.location.href.match(".webp")) {
            let newUrl2 = window.location.href.replace("200x200", "2000x2000").replace(".webp", ".jpeg");
            window.location.replace(newUrl2);
        } else if (window.location.href.match("270x270") && window.location.href.match(".webp")) {
            let newUrl3 = window.location.href.replace("270x270", "2000x2000").replace(".webp", ".jpeg");
            window.location.replace(newUrl3);
        } else if (window.location.href.match("300x300") && window.location.href.match(".webp")) {
            let newUrl4 = window.location.href.replace("300x300", "2000x2000").replace(".webp", ".jpeg");
            window.location.replace(newUrl4);
        } else if (window.location.href.match("305x305") && window.location.href.match(".webp")) {
            let newUrl5 = window.location.href.replace("305x305", "2000x2000").replace(".webp", ".jpeg");
            window.location.replace(newUrl5);
        } else if (window.location.href.match("380x380") && window.location.href.match(".webp")) {
            let newUrl6 = window.location.href.replace("380x380", "2000x2000").replace(".webp", ".jpeg");
            window.location.replace(newUrl6);
        } else if (window.location.href.match("400x400") && window.location.href.match(".webp")) {
            let newUrl7 = window.location.href.replace("400x400", "2000x2000").replace(".webp", ".jpeg");
            window.location.replace(newUrl7);
        } else if (window.location.href.match("500x500") && window.location.href.match(".webp")) {
            let newUrl8 = window.location.href.replace("500x500", "2000x2000").replace(".webp", ".jpeg");
            window.location.replace(newUrl8);
        } else if (window.location.href.match("540x540") && window.location.href.match(".webp")) {
            let newUrl9 = window.location.href.replace("540x540", "2000x2000").replace(".webp", ".jpeg");
            window.location.replace(newUrl9);
        } else if (window.location.href.match("600x600") && window.location.href.match(".webp")) {
            let newUrl10 = window.location.href.replace("600x600", "2000x2000").replace(".webp", ".jpeg");
            window.location.replace(newUrl10);
        } else if (window.location.href.match("610x610") && window.location.href.match(".webp")) {
            let newUrl11 = window.location.href.replace("610x610", "2000x2000").replace(".webp", ".jpeg");
            window.location.replace(newUrl11);
        } else if (window.location.href.match("1000x1000") && window.location.href.match(".webp")) {
            let newUrl12 = window.location.href.replace("1000x1000", "2000x2000").replace(".webp", ".jpeg");
            window.location.replace(newUrl12);
        }
    }
})();

/// apple-music-english-translation-enabler.js
/// alias amete.js
(function() {
    "use strict";
    if (window.location.href.includes("/music.apple.com/")) {
        let oldUrlSearch = window.location.search;
        if ((oldUrlSearch.indexOf("?") > -1) && (oldUrlSearch.indexOf("?l=") === -1)) {
            if (!/\&l=en$/.test(oldUrlSearch)) {
                let newUrlWithAddedParameter = window.location.protocol + "//" + window.location.host + window.location.pathname + oldUrlSearch + "&l=en" + window.location.hash;
                window.location.replace(newUrlWithAddedParameter);
            }
        } else {
            if (!/\?l=en$/.test(oldUrlSearch)) {
                let newUrlWithNewParameter = window.location.protocol + "//" + window.location.host + window.location.pathname + oldUrlSearch + "?l=en" + window.location.hash;
                window.location.replace(newUrlWithNewParameter);
            }
        }
    }
})();

/// hikarinoakariost-bypasser.js
/// alias hnab.js
(function() {
    "use strict";
    if (window.location.href.includes("/hikarinoakari.com/out/")) {
        setTimeout(function() {
            document.querySelector("a[class='link']").click();
        }, 750);
    }
})();

/// icelz-onclick-attribute-remover.js
/// alias ioar.js
(function() {
    "use strict";
    window.addEventListener("load", function() {
        if (window.location.href.includes("/icelz.newsrade.com/")) {
            let anchor = document.querySelectorAll("a[class='channel-link'][href]");
            for (let i = 0; i < anchor.length; i++) {
                anchor[i].removeAttribute("onclick");
            }
        }
    });
})();

/// itdmusic-bypasser.js
/// alias itdmb.js
(function() {
    "use strict";
    window.addEventListener("load", function() {
        if (window.location.href.includes("/itdmusic.top/")) {
            let firstButton = document.getElementsByClassName("btn btn-primary btn-captcha");
            if (firstButton.length > 0) {
                document.querySelector("button[class='btn btn-primary btn-captcha']").click();
            }
            let secondButton = document.getElementsByClassName("skip-ad");
            if (secondButton.length > 0) {
                let targetLink = $("a:contains('Skip Ad')");
                if (targetLink && targetLink.length) {
                    setTimeout(function() {
                        let newUrl = targetLink[0].href;
                        window.location.replace(newUrl);
                    }, 750);
                }
            }
        }
    });
})();

/// old-reddit-outbound-click-tracking-blocker.js
/// alias oroctb.js
(function() {
    "use strict";
    window.addEventListener("load", function() {
        if (window.location.href.includes("/old.reddit.com/")) {
            let aCol = document.getElementsByTagName("a");
            let a, actualUrl;
            for (let i = 0; i < aCol.length; i++) {
                a = aCol[i];
                actualUrl = a.getAttribute("data-href-url");
                if (actualUrl) {
                    a.setAttribute("data-outbound-url", actualUrl);
                }
            }
        }
    });
})();

/// old-reddit-redirection-enabler.js
/// alias orre.js
(function() {
    "use strict";
    if (window.location.href.includes("/www.reddit.com/") && !window.location.href.includes("/www.reddit.com/poll/")) {
        let newUrl = window.location.href.replace("/www.reddit.com/", "/old.reddit.com/");
        window.location.replace(newUrl);
    }
})();

/// ouo-io-bypasser.js
/// alias oib.js
(function() {
    "use strict";
    window.addEventListener("load", function() {
        if (window.location.href.includes("/ouo.io/") || window.location.href.includes("/ouo.press/")) {
            if (document.getElementById("form-captcha") === null) {
                document.getElementsByTagName("form")[0].submit();
            }
            if (document.getElementById("form-captcha").click) {
                document.getElementsByTagName("form")[0].submit();
            }
        }
    });
})();

/// tinyurl-is-bypasser.js
/// alias tuib.js
(function() {
    "use strict";
    window.addEventListener("load", function() {
        if (window.location.href.includes("/tinyurl.is/")) {
            let targetLink = $("a:contains('Click Here to Watch')");
            if (targetLink && targetLink.length) {
                let newUrl = targetLink[0].href;
                window.location.replace(newUrl);
            }
        }
    });
})();

/// youtube-shorts-disabler.js
/// alias ysd.js
(function() {
    "use strict";
    let oldHref = document.location.href;
    if (window.location.href.indexOf("youtube.com/shorts") > -1) {
        window.location.replace(window.location.toString().replace(/shorts/, "/watch/"));
    }
    window.onload = function() {
        let bodyList = document.querySelector("body");
        let observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (oldHref !== document.location.href) {
                    oldHref = document.location.href;
                    if (window.location.href.indexOf("youtube.com/shorts") > -1) {
                        window.location.replace(window.location.toString().replace(/shorts/, "/watch/"));
                    }
                }
            });
        });
        let config = {
            childList: true,
            subtree: true
        };
        observer.observe(bodyList, config);
    };
})();
