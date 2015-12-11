$(function(){

    if($('.swiper-container').length){
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 3,
            centeredSlides: true,
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 0,
            loop: true,
            speed: 600,
            autoplay: 5000
        });
    }
    if ($('.map').length) {

        var myMap;

        function init () {
            myMap = new ymaps.Map('map', {
                center: $('.map').attr('data-coord').split(', '),
                zoom: 12
            });

            myMap.controls
                .add('zoomControl', { left: 5, top: 5 })
                .add('typeSelector')
                .add('mapTools', { left: 35, top: 5 });

        }

        ymaps.ready(init);
    }
    if ($('.map1').length) {

        var myMap1;

        function init1 () {
            myMap1 = new ymaps.Map('map1', {
                center: $('.map').attr('data-coord').split(', '),
                zoom: 12
            });

            myMap1.controls
                .add('zoomControl', { left: 5, top: 5 })
                .add('typeSelector')
                .add('mapTools', { left: 35, top: 5 });

        }

        ymaps.ready(init1);
    }

    $(".site__header-call").on({
        'click': function(){
            var curElem = $('.popup');

            curElem.fadeIn(300);
            return false;
        }
    });

    $('.popup, .popup-close').on({
        'click': function(){
            var curElem = $('.popup');

            curElem.fadeOut(300);
        }
    });

    $(".popup__wrap").on({
        'click': function(event){
            event = event || window.event

            if (event.stopPropagation) {
                event.stopPropagation()
            } else {
                event.cancelBubble = true
            }

        }
    });

} );
