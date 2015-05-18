$(function() {
    console.log('init');
    $('#select-pay').selectbox();
    $('#select-take').selectbox();
    var content = '<span class="option-text data-ico"><span class="data-ico-img" style="background-image:url(/static/images/icon-bank.png);"></span>Perfect Money <span class="option-value">(USD)</span></span>';
    $(content).appendTo('.jquery-selectbox-currentItem');
    $('.jquery-selectbox-item').each(function() {
        $(content).appendTo(this);
    });
});