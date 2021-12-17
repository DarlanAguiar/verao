class Footer {

    constructor() {
        this.filtroTurbulencia = document.getElementById("filtro-tubulencia")
    }

    efeitoOnda() {
        //biblioteca pega o filtro tubbulencia
                                         //tempo
        TweenMax.to(this.filtroTurbulencia, 20, {
            attr:{//filtro turbulencia tem um atributo base frequency com valor0.05, aqui eu peço para mudar este valor para 0.03 surgindo o efeito.
                baseFrequency: 0.03
            }, 
            repeat: -1,  
            yoyo: true
        })
    }
}