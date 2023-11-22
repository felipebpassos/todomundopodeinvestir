function showDescription(index) {
    let description = document.querySelectorAll('.slides')[index - 1].querySelector('.description');
    let imagem = document.querySelectorAll('.slides')[index - 1].querySelector('img');

    if (window.innerWidth <= 930) {
        description.style.transform = 'translate(-25%, -50%)';
        imagem.style.transform = 'translateX(-50%)';
    } else {
        description.style.transform = 'translate(20%, -50%)'; // ou qualquer valor padrão para telas maiores
        imagem.style.transform = 'translateX(-50%)'; // ou qualquer valor padrão para telas maiores
    }

    description.style.opacity = '1';
}

function hideDescription(index) {
    let description = document.querySelectorAll('.slides')[index - 1].querySelector('.description');
    let imagem = document.querySelectorAll('.slides')[index - 1].querySelector('img');

    if (window.innerWidth <= 930) {
        description.style.transform = 'translate(-25%, -50%)';
        imagem.style.transform = 'translateX(0)';
    } else {
        description.style.transform = 'translate(-20%, -50%)'; // ou qualquer valor padrão para telas maiores
        imagem.style.transform = 'translateX(0)'; // ou qualquer valor padrão para telas maiores
    }

    description.style.opacity = '0';
}
