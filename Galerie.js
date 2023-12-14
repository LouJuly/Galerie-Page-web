
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const images = document.querySelectorAll('.image');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.getAttribute('data-category');

            // Toggle active class on buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Show/hide images based on category
            images.forEach(image => {
                const imageCategory = image.getAttribute('data-category');
                if (category === 'all' || category === imageCategory) {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            });
        });
    });
});
