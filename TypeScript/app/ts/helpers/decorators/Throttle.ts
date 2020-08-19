export function throttle(tempoMilli:number=500){
    let idTimeout = 0;
    return function(target:any, key:string, desc:PropertyDescriptor){
        const funcOriginal = desc.value;
        desc.value = function(...args:any[]) {
            if (event) event.preventDefault();
            clearTimeout(idTimeout);
            idTimeout=setTimeout(() => {
                funcOriginal.apply(this,args);
            }, tempoMilli);
        }
        return desc;
    }
}