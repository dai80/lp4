// アコーディオン
$('.faq__question').on('click', function (e) {
    $(this).toggleClass('open')
    var content = $(this).next();

    content.slideToggle();
});