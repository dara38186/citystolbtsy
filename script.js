document.querySelectorAll('#thumbs img').forEach(img => {
    img.addEventListener('click', function() {
        if (this.classList.contains('active')) {
            // Если уже активное — сворачиваем
            this.classList.remove('active');
        } else {
            // Иначе убираем класс active у всех
            document.querySelectorAll('#thumbs img').forEach(i => {
                i.classList.remove('active');
            });
            // И делаем текущее активным
            this.classList.add('active');
        }
    });
});
