document.addEventListener('DOMContentLoaded', function() {
    const heroContent = document.querySelector('.hero-content');
    
    const agentsTitle = document.querySelector('.agents-preview h2');
    agentsTitle.classList.add('animate');
    
    const agentCards = document.querySelectorAll('.agent-card');
    agentCards.forEach((card, index) => {
        card.classList.add('animate');
        card.style.transitionDelay = `${index * 0.1 + 0.2}s`;
    });
    
    const mapsTitle = document.querySelector('.maps-section h2');
    mapsTitle.classList.add('animate');
    
    const mapCards = document.querySelectorAll('.map-card');
    mapCards.forEach((card, index) => {
        card.classList.add('animate');
        card.style.transitionDelay = `${index * 0.1 + 0.2}s`;
    });
    
    const newsTitle = document.querySelector('.news-scroll-section h2');
    newsTitle.classList.add('animate');
    
    const newsCards = document.querySelectorAll('.scroll-news-card');
    newsCards.forEach((card, index) => {
        card.classList.add('animate');
        card.style.transitionDelay = `${index * 0.1 + 0.2}s`;
    });
    
    const footerTop = document.querySelector('.footer-top');
    footerTop.classList.add('animate');
    
    const footerSocials = document.querySelector('.footer-socials');
    footerSocials.classList.add('animate');
    
    const footerBottom = document.querySelector('.footer-bottom');
    footerBottom.classList.add('animate');
    
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0
        );
    }
   
    function handleScroll() {
        const animateElements = document.querySelectorAll('.animate');
        animateElements.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('active')) {
                element.classList.add('active');
            }
        });
    }
    
    setTimeout(() => {
        heroContent.classList.add('active');
    }, 300);
    

    window.addEventListener('scroll', handleScroll);

    handleScroll();
    
    agentCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
    
            this.classList.add('hover-active');
            
            const img = this.querySelector('img');
            const name = this.querySelector('h4');
            

            if (img) img.style.animation = 'glowPulse 2s infinite';
            if (name) name.style.animation = 'textGlow 2s infinite';
        });
        
        card.addEventListener('mouseleave', function() {

            this.classList.remove('hover-active');
            
            const img = this.querySelector('img');
            const name = this.querySelector('h4');

            if (img) img.style.animation = '';
            if (name) name.style.animation = '';
        });
    });
    

    mapCards.forEach(card => {
        card.addEventListener('mouseenter', function() {

            this.classList.add('hover-active');

            const img = this.querySelector('img');
            const title = this.querySelector('h4');
            const link = this.querySelector('.map-link');
            
            if (title) title.style.animation = 'textGlow 2s infinite';
            if (link) link.style.animation = 'pulse 1.5s infinite';
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover-active');

            const img = this.querySelector('img');
            const title = this.querySelector('h4');
            const link = this.querySelector('.map-link');

            if (title) title.style.animation = '';
            if (link) link.style.animation = '';
        });
    });
    
    newsCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover-active');
            
            const ripple = document.createElement('div');
            ripple.className = 'ripple-effect';
            ripple.style.position = 'absolute';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.borderRadius = '50%';
            ripple.style.backgroundColor = 'rgba(255, 70, 85, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.8s linear';
            
            if (!document.querySelector('#ripple-keyframes')) {
                const style = document.createElement('style');
                style.id = 'ripple-keyframes';
                style.textContent = `
                    @keyframes ripple {
                        to {
                            transform: scale(15);
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(style);
            }
            
            ripple.style.top = '50%';
            ripple.style.left = '50%';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';
            
            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 800);
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover-active');
        });
    });
    
    const scrollContainer = document.querySelector('.news-scroll-container');
    if (scrollContainer) {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        scrollContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            scrollContainer.style.cursor = 'grabbing';
            startX = e.pageX - scrollContainer.offsetLeft;
            scrollLeft = scrollContainer.scrollLeft;
        });
        
        scrollContainer.addEventListener('mouseleave', () => {
            isDown = false;
            scrollContainer.style.cursor = 'grab';
        });
        
        scrollContainer.addEventListener('mouseup', () => {
            isDown = false;
            scrollContainer.style.cursor = 'grab';
        });
        
        scrollContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scrollContainer.offsetLeft;
            const walk = (x - startX) * 2;
            scrollContainer.scrollLeft = scrollLeft - walk;
        });
    }
    
    const playButton = document.querySelector('.hero-btn');
    if (playButton) {
        playButton.addEventListener('mouseenter', () => {
            playButton.style.animation = 'pulse 1.5s infinite';
            
            const shine = document.createElement('div');
            shine.className = 'button-shine';
            shine.style.position = 'absolute';
            shine.style.top = '0';
            shine.style.left = '-100%';
            shine.style.width = '100%';
            shine.style.height = '100%';
            shine.style.background = 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)';
            shine.style.animation = 'shine 1s';
            
            if (!document.querySelector('#shine-keyframes')) {
                const style = document.createElement('style');
                style.id = 'shine-keyframes';
                style.textContent = `
                    @keyframes shine {
                        to {
                            left: 100%;
                        }
                    }
                `;
                document.head.appendChild(style);
            }
            
            playButton.appendChild(shine);
            
            setTimeout(() => {
                if (shine.parentNode === playButton) {
                    shine.remove();
                }
            }, 1000);
        });
        
        playButton.addEventListener('mouseleave', () => {
            playButton.style.animation = '';
        });
    }
  
    const navLinks = document.querySelectorAll('.nav-links .link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.animation = 'floatUp 0.4s ease';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
    

    const socialIcons = document.querySelectorAll('.footer-socials a');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.animation = 'pulse 1.5s infinite';
            }
        });
        
        icon.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.animation = '';
            }
        });
    });
});