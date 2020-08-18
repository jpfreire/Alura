System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function throttle(tempoMilli = 500) {
        let idTimeout = 0;
        return function (target, key, desc) {
            const funcOriginal = desc.value;
            desc.value = function (...args) {
                if (event)
                    event.preventDefault();
                clearTimeout(idTimeout);
                idTimeout = setTimeout(() => {
                    funcOriginal.apply(this, args);
                }, tempoMilli);
            };
            return desc;
        };
    }
    exports_1("throttle", throttle);
    return {
        setters: [],
        execute: function () {
        }
    };
});
