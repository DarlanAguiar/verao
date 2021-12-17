

window.onload = () => {
    let animaCards = new Cards();

    document.addEventListener("scroll", animaCards.calculoScroll.bind(animaCards));

    const icones = new Icones();

    icones.animaIcone();

    const turbulencia = new Footer();

    turbulencia.efeitoOnda();
}

