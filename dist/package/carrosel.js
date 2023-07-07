var Carrosel = /** @class */ (function () {
    function Carrosel() {
        this.imagens = [];
    }
    Carrosel.prototype.mudarImagem = function () {
        setInterval(function () {
            console.log("mudando imagem");
        }, 5000);
    };
    return Carrosel;
}());
var carrosel = new Carrosel();
carrosel.mudarImagem();
