var slideThumb = new Swiper('.slide-thumbnail', {
    slidesPerView: 5,
    direction: 'vertical',
    spaceBetween: 20,
    watchSlidesProgress: true
});

new Swiper('.slide-principal', {
    effect: 'fade',
    thumbs: {
        swiper: slideThumb
    },
    autoplay: {
        delay: 5000,
        disabledOnInteraction: false
    }
});

const filters = document.querySelectorAll('.js-nav-games li a');
const tabPaneGames = document.querySelectorAll('.tab-pane-games');

filters.forEach((element, index) => {
    element.addEventListener('click', function(e){
        e.preventDefault();

        filters.forEach(element => {
            element.classList.remove('active');
        });

        tabPaneGames.forEach(element => {
            element.classList.remove('active');
        });

        tabPaneGames[index].classList.add('active');

        element.classList.add('active');
    });
});

const btnOpenModal = document.querySelector('.js-open-modal');

btnOpenModal.addEventListener('click', function(e){
    e.preventDefault();

    document.documentElement.classList.add('show-modal');

    document.querySelector('.modal .close').addEventListener('click', function(e){
        e.preventDefault();

        document.documentElement.classList.remove('show-modal');
    });
});