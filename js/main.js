// Desplazamiento horizontal
document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
        scrollContainer.addEventListener('wheel', (event) => {
            event.preventDefault();
            const scrollSpeed = 13;
            scrollContainer.scrollLeft += event.deltaY * scrollSpeed;
        }, { passive: false });
    }
});

// Formulario de comentarios
document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('commentForm');
    const commentsList = document.getElementById('commentsList');

    if (commentForm) {
        commentForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const comment = document.getElementById('comment').value.trim();

            if (!name || !comment) {
                alert('Llena todos los campos.');
                return;
            }

            const newComment = document.createElement('li');
            newComment.textContent = `${name}: ${comment}`;
            commentsList.appendChild(newComment);

            commentForm.reset();
            alert('Gracias por tu comentario!');
        });
    }
});

// Mensaje de rotación de dispositivo
const rotateMessage = document.querySelector('.rotate-device-message');

function checkOrientation() {
    const message = document.querySelector('.rotate-device-message');
    if (message) {
        message.style.display = (window.innerHeight > window.innerWidth) ? 'block' : 'none';
    }
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('DOMContentLoaded', checkOrientation);

