document.addEventListener('DOMContentLoaded', () => {
    // Função para verificar se é dispositivo móvel
    const isMobile = () => {
        return window.innerWidth <= 768;
    };

    // Função para animar elementos
    const animateElements = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        if (isMobile()) {
            elements.forEach(element => {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            });
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px'
        });

        elements.forEach(element => {
            observer.observe(element);
        });
    };

    // Inicializar animações
    animateElements();

    // Recarregar animações se a janela for redimensionada
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            animateElements();
        }, 250);
    });

    // Efeito parallax suave no hero
    const heroImage = document.querySelector('.hero-image');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    // Animação suave ao clicar no botão do Discord
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mouseenter', () => {
        ctaButton.style.transform = 'scale(1.05)';
    });
    
    ctaButton.addEventListener('mouseleave', () => {
        ctaButton.style.transform = 'scale(1)';
    });
}); 