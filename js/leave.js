$(function (){
    etc();
    done();
});

function etc(){
    $('.leave .list').click(function(){
        $('.leave textarea').removeClass('active');
    });
    $('.etc').click(function(){
        $('.leave textarea').addClass('active');
    });
}

function done(){
    $('.leave .done').click(function(){
        $('.leave_pop').fadeIn(200);

        $('.leave_pop .apply_btn').click(function(){
            $('.leave_pop').fadeOut(200);
            $('.leave_end').fadeIn(200);  
        })
    });
}