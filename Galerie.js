
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const images = document.querySelectorAll('.category img');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.getAttribute('data-category');

            // Cette partie rend actif le bouton sélectionné
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // cette partie rend visible ou invisible une image selon que le bouton de sa catégorie soit clické
            images.forEach(image => {
                const imageCategory = image.parentNode.getAttribute('data-category');
                if (category === 'all' || category === imageCategory) {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            });
        });
    });
});