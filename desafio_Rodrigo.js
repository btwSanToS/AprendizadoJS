     var numeroInicial = 15;
     var e_Primo = true;
     for (var numeroDivisao = 2; numeroDivisao < numeroInicial; numeroDivisao++){
        if(numeroInicial%numeroDivisao == 0){
            e_Primo = false;
        }

     }

     if(e_Primo){
        console.log("O número é primo!");
     }

     else{
        console.log("O número não é primo!");
     }



        /*Para todos os números de 2 a 1000, faça.
        Verifique se o número atual divisão resto 2 é diferente de 0. Se for, print o número.
        */

    /* Para todas as divisões, deve-se restar diferente de 0, para todas as divisões, que não seja ele mesmo e 1;
    Caso reste 0 em qualquer uma dessas divisões internas, o número não é primo.
    

    Para todos os números de 2 a n-1, faça. 
    Dividir n pelo número atual.
    Caso alguma das divisões tenha resto =0, o número não é primo.
    Caso contrário, o número é primo. 



    1000
    998
    */

