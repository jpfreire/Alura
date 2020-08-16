class MensagemView {


    private _elemento:Element;

    constructor(seletor:string){
        this._elemento = document.querySelector(seletor);
    }

    update(mensagem:string):void{
        this._elemento.innerHTML = this.template(mensagem);
    }

    template(mensagem:string): string {

        return `<p class="alert alert-info">${mensagem}</p>`
    }
}
