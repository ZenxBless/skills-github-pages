function createHearts() {
    for (let i = 0; i < 30; i++) {
        let heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (5 + Math.random() * 5) + 's';
        document.body.appendChild(heart);
    }
}

createHearts();
