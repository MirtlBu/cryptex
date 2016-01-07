$(function() {

    var hashNum = parseInt(location.hash.match(/\d+/));

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

    $.each([$('#select-lang'), $('#select-rate1'), $('#select-rate2'), $('#select-rate3')], function(index, val) {
        val.fancySelect({});
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
        return hashNum - 1 || 0;
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
});