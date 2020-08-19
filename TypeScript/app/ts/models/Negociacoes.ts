import {Negociacao} from './Negociacao';
import {logarTempoDeExecucao} from '../helpers/decorators/index';
import { Imprimivel } from './Imprimivel';
import { Igualavel } from './Igualavel';
import { MeuObjeto } from './MeuObjeto';

export class Negociacoes implements MeuObjeto<Negociacoes>{

    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao:Negociacao):void{
        this._negociacoes.push(negociacao);
    }

    @logarTempoDeExecucao()
    paraArray():Negociacao[]{
        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    paraTexto(): void {

        console.log('-- paraTexto --');
        console.log(JSON.stringify(this._negociacoes));
    }

    contem(negociacao:Negociacao):boolean{
        
        console.log('negociacao', negociacao);
        let contem = this._negociacoes.some(jaImportado=>{
            
            console.log(' !=', jaImportado);
            return negociacao.ehIgual(jaImportado)
        });
        console.log(`resposta: ${contem}`)
        return contem;
    }

    ehIgual(obj: Negociacoes): boolean {
        return JSON.stringify(this._negociacoes) == JSON.stringify(obj._negociacoes);
    }
    
}