$(function() {

    var hashNum = parseInt(location.hash.slice(1));

    $.each([$('#select-pay'), $('#select-take')], function(index, val) {
        val.fancySelect({
            optionTemplate: function(optionEl) {
                    return '<span class="currency-img" style="background: url(' + optionEl.data('icon') + ')"></span>' +
                    '<span class="select-title">' + optionEl.text() + '</span>' +
                    '<span class="select-cur">(' + optionEl.data('value') + ')</span>';
                },
                triggerTemplate: function(optionEl) {
                    return '<span class="currency-img" style="background: url(' + optionEl.data('icon') + ')"></span>' +
                    '<span class="select-title">' + optionEl.text() + '</span>' +
                    '<span class="select-cur">(' + optionEl.data('value') + ')</span>';
                }
        });
    });

    $.each([$('#select-lang'), $('#select-rate1'), $('#select-rate2'), $('#select-rate3'), $('#select-country'), $('#exp_date_year'), $('#exp_date_month')], function(index, val) {
        val.fancySelect({});
    });

    var select_program = $('#select-program');
    select_program.fancySelect({
        optionTemplate: function(optionEl) {
            return  '<a href="/' + optionEl.data('url') + '">' + optionEl.text() + '</a';
        }
    });

    //переключение табов в меню bookmark
    $('.bookmark').on('click', '.bookmark__navlinks', function() {
        $('.bookmark__navlinks').removeClass('bookmark__navlinks--active');
        $(this).addClass('bookmark__navlinks--active');
        var dataVal = $(this).data('nav');
        $('.bookmark__item--active').removeClass('bookmark__item--active');
        $('.bookmark__item--' + dataVal).addClass('bookmark__item--active');

    });

    $('.bookmark__item--exchange').on('click', '.exchange-from', function() {
        if ($(this).hasClass('exchange-from--active')) {
            return false;
        }
        else {
            $('.exchange-from--active').removeClass('exchange-from--active');
            $(this).addClass('exchange-from--active');
        }

        var from = '.' + $(this).data('from');
        $('.exchange-switch li').addClass('bookmark__body--hidden');
        $('.exchange-switch').find(from).removeClass('bookmark__body--hidden');
    });

    //поведение аккордеона в faq

    function openAccordion() {
        if(isNaN(hashNum)) {
            return 0;
        }
        else {
            return hashNum;
        }
    }

    $('#accordion').accordion({
        heightStyle: 'content',
        active: openAccordion()
    });

    // поведение пагинации
    $('.pagination__link').on('click', function() {
        var $this = $(this);
        if($this.hasClass('pagination__text')) {
            if($this.hasClass('pagination__link--current')) {
                return;
            }
            else {
                var currentIndex = parseInt($('.pagination__link--current:not(".pagination__text")').attr('data-index'));
                $('.pagination__link').removeClass('pagination__link--current');
                if($this.attr('data-index') === 'next') {
                    $('.pagination__link[data-index = ' + (currentIndex + 1) + ']').addClass('pagination__link--current');
                    if(currentIndex + 1 === 6) {
                        $this.addClass('pagination__link--current');
                    }
                }
                else if($this.attr('data-index') === 'prev') {
                    $('.pagination__link[data-index = ' + (currentIndex - 1) + ']').addClass('pagination__link--current');
                    if(currentIndex - 1 === 1) {
                        $this.addClass('pagination__link--current');
                    }
                }
            }
        }
        else {
            $('.pagination__link').removeClass('pagination__link--current');
            $this.addClass('pagination__link--current');
            if($this.attr('data-index') === '1') {
                $('.pagination__link[data-index = "prev"]').addClass('pagination__link--current');
            }
            else if($this.attr('data-index') === '6') {
                $('.pagination__link[data-index = "next"]').addClass('pagination__link--current');
            }
        }
    });
    //выбор адреса
    $('.step2').on('click', '.address-selection__item', function(e) {
        if($(e.target).hasClass('address-selection__remove')) {
            e.stopPropagation();
            $(e.target).closest('.address-selection__item').remove();
        }
        else {
            if($(this).hasClass('address-selection__item--active')) {
                return;
            }
            else {
                $('.address-selection__item').removeClass('address-selection__item--active');
                $(this).addClass('address-selection__item--active');
            }
        }
    });
    //слайдер с адресам
    $('.address-selection__items').slick({
        appendArrows: $('.address-selection__controls'),
        prevArrow: '<span class="slick-prev">',
        nextArrow: '<span class="slick-next">',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        variableWidth: true
    });

    //upload photo
    $('#create_photo').on('click', function() {
        if($('.modal_wrap').hasClass('modal_wrap--visible')) {
            return;
        }
        else {
            $('.modal_wrap').addClass('modal_wrap--visible');
            Webcam.attach('#my_camera');
        }
    });

    function uploadSuccess(context) {
        $(context).closest('.upload_controls')
            .addClass('upload_controls--hidden')
                .next('.verification__status')
                .addClass('verification__status--uploaded ');
    }

    var image;

    $('#take_snapshot').on('click', function() {
        Webcam.snap(function(data_uri) {
            if(data_uri) {
                image = data_uri;
                $('#my_result img').attr('src', image);
                $('#take_snapshot').closest('.modal').find('.button--inactive').removeClass('button--inactive');
            }
        });
    });

    $('#send_snapshot').on('click', function() {
        Webcam.upload(image, 'myscript.php', function(code, text) {
            $('.modal_wrap').removeClass('modal_wrap--visible');
            uploadSuccess($('#uploadcode'));
        });
    });

    $('.modal__close').on('click', function() {
        $('.modal_wrap').removeClass('modal_wrap--visible');
    });

    $('#uploadcode').on('change', function() {
        uploadSuccess($(this));
    });

    $('#uploadphoto').on('change', function() {
        uploadSuccess($(this));
    });

});
