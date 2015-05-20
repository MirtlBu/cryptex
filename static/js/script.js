$(function() {
    console.log('init');

    //селекты, инициализация и получение данных аджаксом
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
                    return '<span class="select-img" style="background: url(' + optionEl.data('icon') + ')"></span>' +
                    '<span class="select-title">' + optionEl.text() + '</span>' +
                    '<span class="select-cur">(' + optionEl.data('value') + ')</span>';
                },
                triggerTemplate: function(optionEl) {
                    return '<span class="select-img" style="background: url(' + optionEl.data('icon') + ')"></span>' +
                    '<span class="select-title">' + optionEl.text() + '</span>' +
                    '<span class="select-cur">(' + optionEl.data('value') + ')</span>';
                }
            });
        }
    });

    var selecttake = $('#select-take');
    selecttake.fancySelect();

    var selectlang = $('#select-lang');
    selectlang.fancySelect();

    //
    $('.bookmark').on('click', '.bookmark__navlinks', function() {
        $('.bookmark__navlinks').removeClass('bookmark__navlinks--active');
        $(this).addClass('bookmark__navlinks--active');
    });
});