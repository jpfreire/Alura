export function logarTempoDeExecucao(){
    return function(target:any, propertyKey:string, descriptor:PropertyDescriptor){
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args:any[]){
            console.log('tempo de execucao')
            const retorno = metodoOriginal.apply(this,args);
            return retorno;
        }
        return descriptor;
    };
}