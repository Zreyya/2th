const heartsContainer = document.querySelector('.hearts');

// Fungsi untuk membuat hati
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw'; // Posisi horizontal acak
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Durasi animasi acak
    heartsContainer.appendChild(heart);

    // Hapus hati setelah animasi selesai
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Interval untuk membuat hati secara berkala
setInterval(createHeart, 300);
