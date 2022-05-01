'use strict'
//Valida el rut aceptando puntos y espacios. En caso de que esté ok devuelve el rut en formato limpio (ej: 18425806-7)
//y en caso de no ser valido, que no coincida dv con el algoritmo retorna un false
const validarrut= (rut)=>{
    let run = rut.replace(/ /g,'').replace(/\./g,'').replace('K','k')
    run = run.split('-')
    let factor = [2,3,4,5,6,7,2,3,4,5,6]
    let sum = 0
    let ciclo = 0
    for(let i=run[0].length;i>0;i--){
        sum += run[0][i-1]*factor[ciclo];ciclo++
    }
    sum = (11-sum%11)+''
    if(sum=='10'){sum='k'}
    if(sum==run[1]){
        return run[0]+'-'+run[1]
    }else{
        return false
    }
    
}

//Devuelve la hora en formato texto. Offset es GMT (-4 hora chile invierno) y tipo es 1 para devolver fecha y hora y 2 para solo hora
const calcTime =(offset,tipo)=>{
            let d = new Date();
            let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
            let nd = new Date(utc + (3600000*offset));
            // console.log(nd.toLocaleString())
            // console.log(nd.toLocaleString().substring(11,19))
            let inicia = 0
            if(tipo==2){inicia = 11}
            return nd.toLocaleString().substring(inicia,19)
        }

