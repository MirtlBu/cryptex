$(function() {
    String.prototype.times = function(n) {
        return Array.prototype.join.call({length: n+1}, this);
    };
    console.log('init');
    //пример селекта, инициализация и получение данных аджаксом
    var selectpay = $('#select-pay');

    var exchange = {
        webmoney:["qiwi", "perfectmoney", "western union", "sberbank"],
        perfectmoney:["okpay", "webmoney", "paypal", "sberbank"],
        paypal:["western union", "webmoney", "qiwi", "perfectmoney", "sberbank", "vtb24"],
        sberbank:["qiwi", "okpay", "webmoney", "western union", "perfectmoney", "paypal"]
    };

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
        var dataVal = $(this).attr('data-nav');
        $('.bookmark__item--active').removeClass('bookmark__item--active');
        $('[data-tab=' + dataVal + ']').addClass('bookmark__item--active');
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