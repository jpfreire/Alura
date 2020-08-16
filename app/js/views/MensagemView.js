class MensagemView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(mensagem) {
        this._elemento.innerHTML = this.template(mensagem);
    }
    template(mensagem) {
        return `<p class="alert alert-info">${mensagem}</p>`;
    }
}
