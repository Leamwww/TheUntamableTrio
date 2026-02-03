const totalPhotos = 12;
const colorGradients = [
    'download-btn-1',
    'download-btn-2',
    'download-btn-3',
    'download-btn-4'
];

function getColorGradient(index) {
    return colorGradients[index % colorGradients.length];
}

function generatePhotosAndDownloadLinks() {
    const gallery = document.getElementById('gallery');
    let photosFound = 0;

    for (let i = 1; i <= totalPhotos; i++) {
        const imagePath = `images/pic${i}.png`;
        const imageCard = document.createElement('div');
        imageCard.className = 'photo-card';

        const gradientClass = getColorGradient(i - 1);

        imageCard.innerHTML = `
            <div class="photo-container">
                <img src="${imagePath}" alt="Foto ${i}" onerror="this.parentElement.parentElement.remove()">
            </div>
            <div class="photo-info">
                <div class="photo-number">Foto ${i}</div>
                <button class="download-btn ${gradientClass}" onclick="descargarFoto('${imagePath}', 'pic${i}')">
                    <i class="fas fa-download"></i> Descargar
                </button>
            </div>
        `;

        gallery.appendChild(imageCard);
    }
}

function descargarFoto(ruta, nombre) {
    const link = document.createElement('a');
    link.href = ruta;
    link.download = nombre + '.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Inicializar la galería cuando cargue la página
window.addEventListener('load', () => {
    generatePhotosAndDownloadLinks();
});

document.addEventListener('DOMContentLoaded', () => {
    generatePhotosAndDownloadLinks();
});
