function animateCircle(element) {
    console.log('Círculo animado'); //
    const circle = element.querySelector('.progress-circle');
    circle.style.animation = 'none'; 
    circle.offsetHeight; 
    circle.style.animation = 'animateStroke 2s ease forwards'; 
}
// no me funciona esta animación, sale cuando recargo la pagina pero no al darle clic, pendiente revisar por qué