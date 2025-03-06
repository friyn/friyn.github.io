document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.checked = savedTheme === 'dark';

    themeToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });

    document.getElementById('play-button').addEventListener('click', function() {
    var audio = document.getElementById('background-music');
    if (audio.paused) {
        audio.play();
        this.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
       this.innerHTML = '<i class="fas fa-play"></i>';
    }
    });
}); 