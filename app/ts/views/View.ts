declare var $:any;
abstract class View<T> {

    private _elemento:any;

    constructor(seletor:string){
        this._elemento = $(seletor);
    }

    update(modelo:T):void{
        this._elemento.HTML(this.template(modelo));
    }

    abstract template(modelo:T): string;
}
