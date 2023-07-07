class Carrosel {

    bodyElement: HTMLBodyElement;
    // buttonElement: HTMLButtonElement;

    imagens: string[] = [
        "url(static/img/img1.jpg)",
        "url(static/img/img2.jpg)",
        "url(static/img/img3.jpg)"
    ]

    indice: number = 0;

    // teste():void {
    //     this.bodyElement = document.querySelector('body');
    //     this.buttonElement = document.querySelector('button');
        
    //     this.buttonElement.addEventListener("click", ()=>{
    //         console.log("mudando imagem");

    //         this.bodyElement.style.backgroundImage = "url(static/img/img3.jpg)";
    //     })

    // }

    mudarImagem():void {

        this.bodyElement = document.querySelector('body');

        setInterval(()=>{
            console.log("mudando imagem");
            this.indice++

            if(this.indice === 3) {
                this.indice = 0;
            }

            this.bodyElement.style.backgroundImage = this.imagens[this.indice];
        }, 5000);

    }

}

const carrosel = new Carrosel();
carrosel.mudarImagem();
// carrosel.teste();