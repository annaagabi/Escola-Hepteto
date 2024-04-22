
function salva(){
    

    //var alunos = []
    var tabelaNova = " ";
    var tabela  = []
    var mediafinal = 9;
    // var cont = 0
    //for(var cont = 0;cont<=5; cont++){
        
            
            // if(cont==5){
            //     mediafinal = somamedia/cont;
            //     document.getElementById('tbody').innerHTML = '<tr>mediafinal</tr>';
                
            // }
       
        var nome = document.getElementById('nome').value;
        var n1 = parseFloat(document.getElementById('n1').value);
        var n2 = parseFloat(document.getElementById('n2').value);
        var n3 = parseFloat(document.getElementById('n3').value);
        var n4 = parseFloat(document.getElementById('n4').value);

        document.getElementById('nome-exibir').innerHTML += nome + '</br>';

        var media = (n1+n2+n3+n4)/4
        var somamedia = 0;
        var situacao = ''
        
        if(media>70){
            situacao = '<p class="g">APROVADO</p>'
            name = `<p class="g">${nome}</p>`
        }
        else if(media>=50 && media <70){
            situacao = '<p class="y">RECUPERAÇÃO</p>'
            name = `<p class="y">${nome}</p>`
        }
        else{
            situacao = '<p class="r">REPRPOVADO</p>'
            name = `<p class="r">${nome}</p>`
        }
        
    

        //var cont = 0
        //while(cont <5){
        for (var l = 0; l < 5; l++){
                    
            tabela[l] = []

            for (var c = 0; c < 8; c++){
                //tabela[l][c] = [nome, n1, n2, n3, n4, media, situacao]
                
                if(c==0){
                    tabela[l][c] = name
                    }
                    if(c==1){
                        tabela[l][c] = n1
                    }
                    if(c==2){
                        tabela[l][c] = n2
                    }
                    if(c==3){
                        tabela[l][c] = n3
                    }
                    if(c==4){
                        tabela[l][c] = n4
                    }
                    if(c==5){
                        tabela[l][c] = media
                        somamedia += media;
                        mediafinal +=somamedia/5
                    }
                    if(c==6){
                        tabela[l][c] = situacao
                    }   
                    if(c==7){
                        tabela[l][c] = mediafinal
                    }
                }
                
                    // var tabelaNova = " ";
                for (var linha = 0; linha < 5; linha++){
                    tabelaNova = '<tr>' 
                    for (var coluna= 0; coluna < 8; coluna++){
                        //tabelaNova +=`<td>${tabela[linha][coluna]}`
                        if(coluna==7){
                            tabelaNova +=`<td>${tabela[linha][coluna]}</td></tr>`
                        }else{
                            tabelaNova +=`<td>${tabela[linha][coluna]}</td>`
                        }
                        //cont++;
                        
                    }
                    //mostrar na tabela
                    
                    document.getElementById('tbody').innerHTML += tabelaNova ;
                    //+ `<td>${somamedia}</td>`
                    
                    
                    //mediafinal = somamedia/5;
                    //document.getElementById('tbody').innerHTML = `<table><tr>${mediafinal}</tr></table>`
                    }
                   
                    this.limpa();
                    
                    //cont++;
                    // if(cont==5){
                    //     break
                    // }
                }
                    
                
        }
        //mediafinal = somamedia/5;
        //document.getElementById('tbody').innerHTML = '<tr>mediafinal</tr>'

        //cont++;
        //this.limpar()
        // if(cont==5){
        //     mediafinal = somamedia/cont;
        //     document.getElementById('tbody').innerHTML = '<tr>mediafinal</tr>';
        //     break;
        // }

    //mediafinal = somamedia/cont;
      
    //mostrar media da turma
    //document.getElementById('tbody').innerHTML = '<tr>mediafinal</tr>';
    



        


function limpar(){
    const limparnome = document.querySelector('#nome');
    limparnome.value = ''
    const limparn1 = document.querySelector('#n1');
    limparn1.value = ''
    const limparn2 = document.querySelector('#n2');
    limparn2.value = ''
    const limparn3 = document.querySelector('#n3');
    limparn3.value = ''
    const limparn4 = document.querySelector('#n4');
    limparn4.value = ''
    
    
}
