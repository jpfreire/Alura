var Views;
(function (Views) {
    class View {
        constructor(seletor) {
            this._elemento = $(seletor);
        }
        update(modelo) {
            this._elemento.html(this.template(modelo));
        }
    }
    Views.View = View;
})(Views || (Views = {}));
