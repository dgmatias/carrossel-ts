class Carrosel {

    body: HTMLBodyElement;
    
    imagens: string[] = [

    ]

    mudarImagem():void {

        setInterval(()=>{
            console.log("mudando imagem");
        }, 5000);

    }

}

const carrosel = new Carrosel();
carrosel.mudarImagem();