(()=>{
    
    
    const largura = screen.width;
    const altura = screen.height;
    const resolucao = largura*altura;
    const totalestrelas = resolucao*0.001;
    const ceu = document.querySelector("[data-ceu]");
    let constelacao = '';
    let i;

    for(i = 1; i < totalestrelas; i++){
        
        let tamanho = 'tamanho-0';

        if(i%300===0){
            tamanho = 'tamanho-6';
        }
        else if(i%120===0){
            tamanho = 'tamanho-5';
        }
        else if(i%100===0){
            tamanho = 'tamanho-4';
        }
        else if(i%70===0){
            tamanho = 'tamanho-3';
        }
        else if(i%10===0){
            tamanho = 'tamanho-2';
        }
        else if(i%5===0){
            tamanho = 'tamanho-1';
        }
        
        const posicaoX = Math.random()*100;
        const posicaoY = Math.random()*100;

        const estrela = `
                        <div class="estrela ${tamanho}" data-estrela="${i}" style=" top: ${posicaoY}%; left: ${posicaoX}%;">
                            <div class="estrela__principal"></div>
                        </div>
        `;
        

        constelacao += estrela;
        
    }

    const lua = `      <div class="lua"></div>`;

    constelacao += lua;

    const estrelaCadente = `
                        <div class="estrela-cadente" data-estrela-cadente>
                            <div class="estrela-cadente__principal"></div>
                        </div>
        `;
        
    constelacao += estrelaCadente;
    

    ceu.innerHTML = constelacao;

    const index = 1;
    const elementosEstrelas = document.querySelectorAll("[data-estrela] > .estrela__principal");

    //reluzindo
    elementosEstrelas.forEach((cadaEstrela, index)=>{
        i=0;
        setTimeout(() => { 
            cadaEstrela.classList.add("estrela--reluzindo");
        }, 30*index);   
    });
    
    
})();