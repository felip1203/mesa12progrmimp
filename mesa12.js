// Exercicio 1

let alice = [23, 82, 46]
let bob = [45,8,32]

function standup (a,b){
    let pontalice = 0
    let pontbob = 0

    for (let i = 0 ; i < a.length; i++){
        if (a[i] > b[i]){
            pontalice++;
        }else {
            pontbob++
        }
    }

    if(pontalice > pontbob){
        console.log('Alice ganhou de '+ pontalice)
    }
    else{
        console.log('Bob ganhou com ' + pontbob)
    }
    }

    standup(alice,bob)


    
    // Exercicio 2
    
    let somarArray = [55,43,12];
    let soma = 0;

    for(let i = 0; i < somarArray.length; i++) {
    soma += somarArray[i];
    }

    console.log(soma);
    
    
    // Exercicio 3

    let juntar = ['O','l','a'] 
    console.log(juntar.join(''))
