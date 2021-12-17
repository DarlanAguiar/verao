class Cards {

    constructor(){
        this.posicaoSectionDicas = document.getElementById("section-dicas");
        this.cardEsq = document.querySelector('.card-esq');
        this.cardDir = document.querySelector('.card-dir');

    }



    calculoScroll(){
       const posicao = this.posicaoSectionDicas.getBoundingClientRect()["y"];
      
      
       
       if(posicao >= -20){
           

            this.cardEsq.style.transform = `translate(${((-posicao))/12}%)`
            this.cardDir.style.transform = `translate(${((posicao))/12}%)`
            
        }else{
            this.cardEsq.style.transform = `translate(0)`
            this.cardDir.style.transform = `translate(0)`
        }
        


    }
}