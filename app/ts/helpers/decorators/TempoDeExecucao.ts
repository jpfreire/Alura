const AZUL = 'background-color:white;color:blue';
const VERMELHO = 'background-color:white;color:red';
const AMARELO = 'background-color:yellow;color:black';

export function logarTempoDeExecucao(emSegundos:boolean=false){
    return function(target:any, propertyKey:string, descriptor:PropertyDescriptor){
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args:any[]){

            let unidade = 'ms';
            let divisor = 1;
            if(emSegundos){
                unidade = 's';
                divisor = 1000;
            }

            let label = `%c tempo de execucao para %c  ${propertyKey}`;
            console.info(target);
            //@ts-ignore
            console.group(label,AZUL,AMARELO);
            console.info(`parâmetros: ${JSON.stringify(args)}`);
            let t1 = performance.now();
            const retorno = metodoOriginal.apply(this,args);
            let t2 = performance.now();
            console.info(`rodou em ${(t2-t1)/divisor} ${unidade}`);
            console.info(`retorno: %c ${JSON.stringify(retorno)}`, VERMELHO);
            //@ts-ignore
            console.groupEnd(label);
            return retorno;
        }
        return descriptor;
    };
}