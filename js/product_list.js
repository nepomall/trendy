$(function(){
    priceBtn();
    selectLayout();
});

// 가격순 클릭
function priceBtn(){
    $('.price_wrap button').click(function(){
        $('.price_wrap button').removeClass('active');
        $(this).addClass('active');
    });
}

function selectLayout(){

    const selectBox = $('.product_list_form .search_box');
    const selectNum = selectBox.length;
    const vw = $(window).width();
    console.log(selectNum);

    if(vw >= 1401){
        if(selectNum == 4){
            selectBox.css('width','290px');
        }else if(selectNum == 3){
            selectBox.css('width','390px');
        }else if(selectNum == 2){
            selectBox.css('width','590px');
        }; 
    }else if(vw >= 901){
        if(selectNum == 4){
            selectBox.css('width','calc(100vw*(290/1400))');
        }else if(selectNum == 3){
            selectBox.css('width','calc(100vw*(390/1400))');
        }else if(selectNum == 2){
            selectBox.css('width','calc(100vw*(590/1400))');
        }; 
    }else if(vw <=900){
        if(selectNum == 4){
            selectBox.css('width','calc(calc(100vw*(184/428)))');
        }else if(selectNum == 3){
            selectBox.css('width','calc(calc(100vw*(184/428)))');
        }else if(selectNum == 2){
            selectBox.css('width','calc(calc(100vw*(184/428)))');
        };
    };

    $(window).resize(function(){
        const vw = $(window).width();
        if(vw >= 1401){
            if(selectNum == 4){
                selectBox.css('width','290px');
            }else if(selectNum == 3){
                selectBox.css('width','390px');
            }else if(selectNum == 2){
                selectBox.css('width','590px');
            }; 
        }else if(vw >= 901){
            if(selectNum == 4){
                selectBox.css('width','calc(100vw*(290/1400))');
            }else if(selectNum == 3){
                selectBox.css('width','calc(100vw*(390/1400))');
            }else if(selectNum == 2){
                selectBox.css('width','calc(100vw*(590/1400))');
            };
        }else{
            if(selectNum == 4){
                selectBox.css('width','calc(calc(100vw*(184/428)))');
            }else if(selectNum == 3){
                selectBox.css('width','calc(calc(100vw*(184/428)))');
            }else if(selectNum == 2){
                selectBox.css('width','calc(calc(100vw*(184/428)))');
            };
        };
    });
};