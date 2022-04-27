'use strict'

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

