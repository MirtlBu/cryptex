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

    //переключение табов в меню bookamark
    $('.bookmark').on('click', '.bookmark__navlinks', function() {
        $('.bookmark__navlinks').removeClass('bookmark__navlinks--active');
        $(this).addClass('bookmark__navlinks--active');
        var dataVal = $(this).attr('data-val');
        if(dataVal == 'reserve') {
            $('.bookmark__tab').load('bookmark_tab_reserve.php');
        }
        else if(dataVal == 'best') {
            $('.bookmark__tab').load('bookmark_tab_best.php');
        }
        else if(dataVal == 'exchange') {
            $('.bookmark__tab').load('bookmark_tab_exchange.php', function() {
                $('.table__bookmark--exchange tbody .align-right').each(function(i) {
                    $(this).html('<a href="" class="underlined">' + exchange.webmoney[i] + '</a>');
                });
            });
        }
    });

    $('.bookmark').on('click', '.td__bookmark--exchange', function() {
        var dataVal = $(this).attr('data-val');
        var td = $('.table__bookmark--exchange tbody .align-right').get();
        var tr = '<tr><td class="align-left"></td><td class="align-right"></td></tr>';
        var arr = exchange[dataVal];

        $('.td__bookmark--exchange').removeClass('align-left--active');
        $(this).addClass('align-left--active');

        if(arr.length >= td.length) {
            tr = tr.times(arr.length - td.length);
            $('.table__bookmark--exchange').find('tbody').append(tr);
        }
        else {
            $('.table__bookmark--exchange tr').slice(arr.length - td.length).remove();
        }

        $('.table__bookmark--exchange').find('tbody').find('.align-right').each(function(i) {
            $(this).html('<a href="">' + arr[i] + '</a>');
        });
    });

    $( "#accordion" ).accordion({
        heightStyle: "content"
    });
});