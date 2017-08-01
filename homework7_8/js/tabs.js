$(function () {

    $('.help').css('opacity', 'hide');

    $('.tabs li a').on('click', function (e) {
        e.preventDefault();

        var targetLink = e.target;

        $('.tabs li a').removeClass('selected');
        $(targetLink).addClass('selected');

        $('.content > div').css('display', 'none');
        $('#' + targetLink.getAttribute('data-tab-id')).css('display', 'block');
    });

    $('.hover-help').hover(
        function () {
          if($(this).attr('title').length > 0){
              var inpTitle =  $(this).attr('title');
              $(this).attr('title','');
              $(this).next('.help').text(inpTitle);
              console.log(inpTitle);
          }

                $(this).next('.help').animate({opacity: 'show', left: '400'}, 'fast');

        }, function () {
            $(this).next('.help').animate({opacity: 'hide', left: '420'}, 'fast');
        });

    $('#show-help').on('click', function () {
        $('.help').animate({opacity: 'show', left: '400'}, 'fast');
    })
});
