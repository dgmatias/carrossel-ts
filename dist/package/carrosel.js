var Carrosel = /** @class */ (function () {
    function Carrosel() {
        // buttonElement: HTMLButtonElement;
        this.imagens = [
            "url(static/img/img1.jpg)",
            "url(static/img/img2.jpg)",
            "url(static/img/img3.jpg)"
        ];
        this.indice = 0;
    }
    // teste():void {
    //     this.bodyElement = document.querySelector('body');
    //     this.buttonElement = document.querySelector('button');
    //     this.buttonElement.addEventListener("click", ()=>{
    //         console.log("mudando imagem");
    //         this.bodyElement.style.backgroundImage = "url(static/img/img3.jpg)";
    //     })
    // }
    Carrosel.prototype.mudarImagem = function () {
        var _this = this;
        this.bodyElement = document.querySelector('body');
        setInterval(function () {
            console.log("mudando imagem");
            _this.indice++;
            if (_this.indice === 3) {
                _this.indice = 0;
            }
            _this.bodyElement.style.backgroundImage = _this.imagens[_this.indice];
        }, 5000);
    };
    return Carrosel;
}());
var carrosel = new Carrosel();
carrosel.mudarImagem();
// carrosel.teste();
