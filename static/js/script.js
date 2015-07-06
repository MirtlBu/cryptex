$(function() {
    String.prototype.times = function(n) {
        return Array.prototype.join.call({length: n+1}, this);
    };
    console.log('init');
    //пример селекта, инициализация и получение данных аджаксом
    var selectpay = $('#select-pay');

    $.ajax({
        url: "/static/js/options.json",
        success: function(data) {
            var options = (JSON.parse(data)).psList;
            $.each(options, function(index, val) {
                selectpay.append('<option value="' + val['PsIdFrom'] + '"data-value="' + val['CurTitle'] + '"data-icon="' + val['FrontIcon'] + '">' + val['Title'] + '</option>');
                selectpay.trigger('update.fs');
            });
             selectpay.fancySelect({
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
        }
    });
    //остальные селекты, инициализация онли
    $.each([$('#select-lang'), $('#select-take'), $('#select-rate1'), $('#select-rate2'), $('#select-rate3')], function(index, val) {
        val.fancySelect();
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

        var from = $(this).data('from');
        $(this)
            .closest('.bookmark__item')
                .find('.exchange-from--active').removeClass('exchange-from--active').end()
                .find('.exchange-to').removeClass('exchange-to--active')
                    .filter('[data-from=' + from + ']').addClass('exchange-to--active').end()
                .end()
                .find('.bookmark__row')
                    .removeClass('bookmark__row--hidden')
                    .filter(function(idx, elem) {
                        return !$(this).find('.exchange-from').data('from')
                            && $(this).find('.exchange-to[data-from=' + from + ']').length === 0;
                    }).addClass('bookmark__row--hidden').end()
                .end()
            .end()
            .addClass('exchange-from--active');

        $(this).closest('.bookmark__item')

    });

    $( "#accordion" ).accordion({
        heightStyle: "content"
    });

    $('.pagination').pagination({
        items: 50,
        itemsOnPage: 5,
        displayedPages: 3,
        edges: 3,
        prevText: 'Предыдущая',
        nextText: 'Следующая'
    });
});