document.addEventListener('DOMContentLoaded', () => {
    const animarBtn = document.getElementById('animar-btn');
    const carteiraImage = document.getElementById('carteira-image');
    let isSpinning = false;

    animarBtn.addEventListener('click', () => {
        if (!isSpinning) {
            gsap.to(carteiraImage, {
                rotation: 360, 
                duration: 1, 
                ease: "power2.out",
                onComplete: () => {
                    gsap.to(carteiraImage, {
                        rotation: "+=360", 
                        duration: 2, 
                        repeat: -1, 
                        ease: "none"
                    });
                }
            });
            isSpinning = true;
            animarBtn.innerText = "Parar!";
        } else {
            gsap.killTweensOf(carteiraImage);
            gsap.to(carteiraImage, {
                rotation: 0, 
                duration: 1, 
                ease: "power2.out"
            });
            isSpinning = false;
            animarBtn.innerText = "Girar!";
        }
    });

    // Animação GSAP no título principal
    gsap.from("#main-title", {
        duration: 1.5,
        y: -50,
        opacity: 0,
        ease: "power2.out"
    });
});