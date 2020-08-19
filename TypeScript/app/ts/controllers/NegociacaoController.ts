import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao, NegociacaoParcial } from '../models/index';
import { domInject, meuDecoratorDeClasse, throttle } from '../helpers/decorators/index';
import { NegociacaoService } from '../services/index';
import { imprime } from '../helpers/Imprime';
@meuDecoratorDeClasse()
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
    private _negociacaoService = new NegociacaoService()

    constructor(){
        this._negociacoesView.update(this._negociacoes);
    }

    @throttle()
    adiciona(){
    
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
        imprime(negociacao, this._negociacoes);

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Item adicionado com sucesso');
    }

    private _ehDiaUtil(dia:Date):boolean{
        return dia.getDay()!=DiaDaSemana.Sabado && 
                dia.getDay()!=DiaDaSemana.Domingo;
    }

    @throttle()
    async importarDados(){
        try {
            const negociacoes = await this._negociacaoService.obterNegociacoes();

        negociacoes
            .filter((negociacao)=>!this._negociacoes.contem(negociacao))
            .forEach(dado=>this._negociacoes.adiciona(dado));
        this._negociacoesView.update(this._negociacoes);
        } catch (error) {
            this._mensagemView.update(error.message);
        }
        
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