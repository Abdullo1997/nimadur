$(function () {
    $('ul li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').show();
    }, function() {
        $(this).find('.dropdown-menu').hide();
    });
    $('#nav-icon1').click(function(){
        $(this).toggleClass('open');
        $('.navbar-collapse').removeClass('d-none');
        $('.navbar-collapse').toggleClass('d-block show');
        $('.navbar-collapse').addClass('d-none');
    });
});
