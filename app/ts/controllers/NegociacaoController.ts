import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao } from '../models/index';
import { domInject } from '../helpers/decorators/index';
export class NegociacaoController{

    public momentoCriacao = performance.now();

    @domInject('#data')
    private _inputData:JQuery;

    @domInject('#quantidade')
    private _inputQuantidade:JQuery;
    
    @domInject('#valor')
    private _inputValor:JQuery;

    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor(){
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event:Event){
        event.preventDefault();
        let dia = new Date(this._inputData.val().replace(/-/g,','));
        if (!this._ehDiaUtil(dia)){
            this._mensagemView.update('Favor incluir apenas dias úteis');
            return
        }
        let negociacao = new Negociacao(
                                dia, 
                                parseInt(this._inputQuantidade.val()), 
                                parseFloat(this._inputValor.val()));

        this._negociacoes.adiciona(negociacao);
        
        this._negociacoes.paraArray().forEach(negociacao => {
            console.log(negociacao);
        })
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Item adicionado com sucesso');
    }

    private _ehDiaUtil(dia:Date):boolean{
        return dia.getDay()!=DiaDaSemana.Sabado && 
                dia.getDay()!=DiaDaSemana.Domingo;
    }

}
enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}