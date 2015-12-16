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

    $('.map').each(function ()  {

        var myMap;

        function init () {
            myMap = new ymaps.Map('map', {
                center: $('.map').attr('data-coord').split(', '),
                zoom: 13
            });
            $.each($('.map'), function(i){
                var curElem = $(this);

                if (curElem.attr('data-coord')) {
                    var coord = curElem.attr('data-coord').split(', ');

                    myMap.geoObjects.add(new ymaps.Placemark(
                        [coord[0], coord[1]],
                        {   hintContent: "Описание",
                            balloonContentBody: curElem.find('span').text() }, {
                            iconLayout: 'default#image'
                        }
                    ));
                }
            });

        }

        ymaps.ready(init);
    });

    if ($('.map1').length) {

        var myMap1;

        function _init () {
            myMap1 = new ymaps.Map('map1', {
                center: $('.map1').attr('data-coord').split(', '),
                zoom: 13
            });
            $.each($('.map1'), function(j){
                var curElem = $(this);

                if (curElem.attr('data-coord')) {
                    var coord = curElem.attr('data-coord').split(', ');

                    myMap1.geoObjects.add(new ymaps.Placemark(
                        [coord[0], coord[1]],
                        {   hintContent: "Описание",
                            balloonContentBody: curElem.find('span').text() }, {
                            iconLayout: 'default#image'
                        }
                    ));
                }
            });
        }

        ymaps.ready(_init);
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

    $('.docs').each(function () {
        $(".fancybox").fancybox({
            padding : 0,
            helpers: {
                overlay: {
                    locked: false
                }
            }
        });
    });

} );
