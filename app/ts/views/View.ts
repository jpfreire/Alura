import {logarTempoDeExecucao} from '../helpers/decorators/index';
export abstract class View<T> {

    private _elemento:JQuery;

    constructor(seletor:string, private escapar:boolean = true){
        this._elemento = $(seletor);
    }

    @logarTempoDeExecucao()
    update(modelo:T):void {
        let t1 = performance.now();
        let template = this.template(modelo);
        if (this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this._elemento.html(template);
        let t2 = performance.now();
        console.log(`update rodou em ${t2-t1}ms`);
    }

    abstract template(modelo:T): string;
}