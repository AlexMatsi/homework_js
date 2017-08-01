$(function () {

    $('.dropdown').hover(
        function () {
            $(this).children('.submenu').slideToggle(400);
        }),
        function () {
            $(this).children('.submenu').slideToggle(400);
        };


    $('.jcarousel').jcarousel({wrap: 'circular'});

    $('.jcarousel-control-prev').on('click',function(){
        $('.jcarousel').jcarousel('scroll', '-=1');
    })

    $('.jcarousel-control-next').on('click',function(){
        $('.jcarousel').jcarousel('scroll', '+=1');

    })

    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function () {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function () {
            $(this).removeClass('active');
        })
        .jcarouselPagination();

$('select').selectBox({
    mobile: true,
    menuSpeed: 'fast'
});
$('.bootstrap-checkbox').css({
    position: 'relative',
    top: '5px',
    padding: '7px',
    background: 'rgb(255, 255, 255)',
    appearance: 'none',
    '-webkit-appearance':'none',
    border: '1px solid rgb(153, 153, 153)'
})
});
