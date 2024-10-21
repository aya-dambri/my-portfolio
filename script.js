document.addEventListener('DOMContentLoaded', function() {
    const filters = document.querySelectorAll('.filter');
    const cards = document.querySelectorAll('.card');

    filters.forEach(filter => {
        filter.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            filters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');

            cards.forEach(card => {
                if (category === 'all' || card.classList.contains(category)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Show all cards by default
    filters[0].click();
});
