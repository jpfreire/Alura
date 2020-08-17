System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(seletor, escapar = true) {
                    this.escapar = escapar;
                    this._elemento = $(seletor);
                }
                update(modelo) {
                    let template = this.template(modelo);
                    if (this.escapar) {
                        template = template.replace(/<script>[\s\S]*?<\/script>/, '');
                    }
                    this._elemento.html(template);
                }
            };
            exports_1("View", View);
        }
    };
});
