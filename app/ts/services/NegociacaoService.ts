import { NegociacaoParcial, Negociacao } from "../models/index";

export interface HandlerFunction {
    (res:Response):Response
}

export class NegociacaoService{

    private static readonly passaAdiante = (dado:any) => dado;

    obterNegociacoes(handler:HandlerFunction=NegociacaoService.passaAdiante) : Promise<Negociacao[]>{
    
        return fetch('http://localhost:8080/dados')
        .then(res=>handler(res))
        .then(res=>res.json())
        .then((dados:NegociacaoParcial[])=>dados.map(dado => new Negociacao(new Date(),dado.vezes,dado.montante)))
    } 
}