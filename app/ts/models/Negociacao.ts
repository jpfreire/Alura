import { Imprimivel } from "./Imprimivel";
import { Igualavel } from "./Igualavel";

export class Negociacao implements Imprimivel, Igualavel<Negociacao>{

    // declaração das propriedades de classe
    

    constructor(readonly data: Date,
                readonly quantidade: number,
                readonly valor: number) {

    }

    get volume() {

        return this.quantidade * this.valor;
    }

    paraTexto(): void {
        console.log('-- paraTexto --');
        console.log(
            `Data: ${this.data}
            Quantidade: ${this.quantidade}, 
            Valor: ${this.valor}, 
            Volume: ${this.volume}`
        );
    }

    ehIgual(obj:Negociacao):boolean{
        return this.data.getDate() == obj.data.getDate()
                && this.data.getMonth() == obj.data.getMonth() 
                && this.data.getFullYear() == obj.data.getFullYear() 
                && this.quantidade == obj.quantidade
                && this.valor == obj.valor;
    }
}
