class MensagemView extends View{

    update(mensagem:string):void{
        this._elemento.innerHTML = this.template(mensagem);
    }

    template(mensagem:string): string {

        return `<p class="alert alert-info">${mensagem}</p>`
    }
}
