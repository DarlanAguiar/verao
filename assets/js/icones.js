class Icones {
    constructor() {
        this.listaIcones = document.querySelectorAll(".icone")
    }

    animaIcone() {
        TweenMax.to(this.listaIcones, 1, {scale: 1.1, repeat: -1,  yoyo: true})
    }

}