// ==UserScript==
// @name         小广告移除
// @namespace    ads-remove
// @version      0.0.1
// @description  移除网站里面的小广告
// @author       不知名的程序员
// @match        *://*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// @license      MIT License
// @charset	 UTF-8
// ==/UserScript==

(function () {
    'use strict';
    var ids = ["HMcoupletDivleft", "HMcoupletDivright", "HMRichBox"]
    setInterval(function () {
        for (var i = 0; i < ids.length; i++) {
            var box = document.getElementById(ids[i]);
            if (box) {
                box.remove();
            }
        }
    }, 100);
})();