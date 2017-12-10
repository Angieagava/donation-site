    //search



    function buttonUp(){
         var valux = $('.sb-search-input').val(); 
            valux = $.trim(valux).length;
            if(valux !== 0){
                $('.sb-search-submit').css('z-index','99');
            } else{
                $('.sb-search-input').val(''); 
                $('.sb-search-submit').css('z-index','-999');
            }
    }
    
    $(document).ready(function(){
        var submitIcon = $('.sb-icon-search');
        var submitInput = $('.sb-search-input');
        var searchBox = $('.sb-search');
        var isOpen = false;
        
        $(document).mouseup(function(){
            if(isOpen === true){
            submitInput.val('');
            $('.sb-search-submit').css('z-index','-999');
            submitIcon.click();
            }
        });
        
        submitIcon.mouseup(function(){
            return false;
        });
        
        searchBox.mouseup(function(){
            return false;
        });
                
        submitIcon.click(function(){
            if(isOpen === false){
                searchBox.addClass('sb-search-open');
                isOpen = true;
            } else {
                searchBox.removeClass('sb-search-open');
                isOpen = false;
            }
    });
         $('#showButton').click(function() {
       $('#showDiv').show('slow');
      }); 




    var connectSlider = document.getElementById('slider-connect');

      noUiSlider.create(connectSlider, {
        start: 39,
        connect: [true, false],
        range: {
          'min': 0,
          'max': 100
        }
      });

      connectSlider.noUiSlider.on('update', function ( values, handle ) {
        var sum = parseInt(values[0]);
        console.log('kkkk', values)
        $(".amount").html('$'+sum)
        $('#value').html(values[0])
        if(sum<20) $("#info").html('will let us to add a few new modules')
        else if(sum<50) $("#info").html('can help us improve this product')
        else if(sum<80) $("#info").html('can help us expand this product to other platforms')
        else if(sum<100) $("#info").html('goes a long way. If you would like to consider becoming a sponsor, please contact us')
      });


});


