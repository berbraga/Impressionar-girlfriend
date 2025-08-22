// Adiciona efeito de clique no coração
document.querySelector('.heart').addEventListener('click', function() {
    // Garante que o coração permaneça visível
    this.style.opacity = '1';
    this.style.transform = 'scale(1) rotate(0deg)';
    
    // Aplica um batimento rápido
    this.style.animation = 'heartbeat 0.5s ease-out, heartGlow 3s ease-in-out infinite alternate';
    
    // Restaura as animações normais após o batimento
    setTimeout(() => {
        this.style.animation = 'heartbeat 2s ease-in-out infinite, heartGlow 3s ease-in-out infinite alternate';
    }, 500);
    
    // Cria corações extras temporários
    createExtraHeart();
});

// Cria corações extras quando clicado
function createExtraHeart() {
    const extraHeart = document.createElement('div');
    extraHeart.innerHTML = '💖';
    extraHeart.style.position = 'absolute';
    extraHeart.style.fontSize = '40px';
    extraHeart.style.left = Math.random() * 80 + 10 + '%';
    extraHeart.style.top = Math.random() * 80 + 10 + '%';
    extraHeart.style.animation = 'float 3s ease-out forwards';
    extraHeart.style.pointerEvents = 'none';
    extraHeart.style.zIndex = '1000';
    
    document.querySelector('.container').appendChild(extraHeart);
    
    // Remove o coração extra após a animação e cria fogos de artifício
    setTimeout(() => {
        const heartPosition = extraHeart.getBoundingClientRect();
        createFireworks(heartPosition.left + heartPosition.width/2, heartPosition.top + heartPosition.height/2);
        extraHeart.remove();
    }, 3000);
}

// Cria fogos de artifício
function createFireworks(x, y) {
    const colors = ['#ff6b9d', '#ff8fab', '#ffb3d1', '#e91e63', '#ffd700', '#00ff88', '#ff6b35'];
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.boxShadow = '0 0 6px currentColor';
        
        // Animação de explosão
        const angle = (i / particleCount) * 2 * Math.PI;
        const velocity = 2 + Math.random() * 3;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        particle.animate([
            { 
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            { 
                transform: `translate(${vx * 50}px, ${vy * 50}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 1000 + Math.random() * 500,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        document.body.appendChild(particle);
        
        // Remove a partícula após a animação
        setTimeout(() => {
            particle.remove();
        }, 1500);
    }
    
    // Efeito de brilho central
    const centerGlow = document.createElement('div');
    centerGlow.style.position = 'fixed';
    centerGlow.style.left = (x - 20) + 'px';
    centerGlow.style.top = (y - 20) + 'px';
    centerGlow.style.width = '40px';
    centerGlow.style.height = '40px';
    centerGlow.style.background = 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)';
    centerGlow.style.borderRadius = '50%';
    centerGlow.style.pointerEvents = 'none';
    centerGlow.style.zIndex = '9998';
    
    centerGlow.animate([
        { transform: 'scale(0)', opacity: 1 },
        { transform: 'scale(2)', opacity: 0 }
    ], {
        duration: 800,
        easing: 'ease-out'
    });
    
    document.body.appendChild(centerGlow);
    
    setTimeout(() => {
        centerGlow.remove();
    }, 800);
}

// Adiciona efeito de hover no coração
document.querySelector('.heart').addEventListener('mouseenter', function() {
    this.style.filter = 'brightness(1.2)';
});

document.querySelector('.heart').addEventListener('mouseleave', function() {
    this.style.filter = 'brightness(1)';
});

// Adiciona efeito de tecla pressionada
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        event.preventDefault();
        document.querySelector('.heart').click();
    }
});

// Cria partículas flutuantes no fundo
function createBackgroundParticles() {
    const particleCount = 30;
    const colors = ['rgba(255, 255, 255, 0.3)', 'rgba(255, 182, 193, 0.4)', 'rgba(255, 105, 180, 0.3)'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1';
        particle.style.animation = `particleFloat ${10 + Math.random() * 20}s linear infinite`;
        particle.style.animationDelay = Math.random() * 10 + 's';
        
        document.body.appendChild(particle);
    }
}

// Adiciona mensagem de boas-vindas
window.addEventListener('load', function() {
    // Cria partículas de fundo
    createBackgroundParticles();
    
    setTimeout(() => {
        const welcome = document.createElement('div');
        welcome.innerHTML = '💕 Clique no coração para uma surpresa! 💕';
        welcome.style.position = 'fixed';
        welcome.style.top = '20px';
        welcome.style.left = '50%';
        welcome.style.transform = 'translateX(-50%)';
        welcome.style.color = 'white';
        welcome.style.fontSize = '18px';
        welcome.style.fontWeight = 'bold';
        welcome.style.textShadow = '2px 2px 4px rgba(0,0,0,0.7)';
        welcome.style.zIndex = '1001';
        welcome.style.animation = 'textGlow 2s ease-in-out infinite alternate';
        welcome.style.opacity = '0';
        welcome.style.animation = 'welcomeEntrance 1s ease-out forwards, textGlow 2s ease-in-out infinite alternate 1s';
        
        document.body.appendChild(welcome);
        
        // Remove a mensagem após 8 segundos
        setTimeout(() => {
            welcome.style.animation = 'welcomeExit 1s ease-in forwards';
            setTimeout(() => welcome.remove(), 1000);
        }, 8000);
    }, 1000);
});
