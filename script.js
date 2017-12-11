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

        $("#dataForm").validate({
            rules: {
              input: { 
                required: true,
              },
              name: {
                required: true,
                minlength: 6,
              },
              email: {
                required: true,
                email: true
              },
              street: {
                required: true,
                minlength: 4
              },
              city: {
                  required: true,
                  minlength: 4
              },
              address: {
                required: true,
                minlength: 4
              }
            },
            messages: {
              name: "Please enter your firstname and lastname",
              email: "Please enter a valid email address",
              address:  "Please enter your street address",
              city: "Please enter your city and state, separated by a comma"
              }
            }
          );
      });

      $.validator.methods.email = function( value, element ) {
       return this.optional( element ) || /[a-z]+@[a-z]+\.[a-z]+/.test( value );
        };
        
 
      $('#dataForm input').on('change', function() {
        $(this).valid();
        var len = $('#dataForm input').length;

       $('#dataForm input').each(function(){
        if( $(this).val().length ) len -= 1;
        console.log('ddddd', len)
        if(len==0) $('#showDiv1').show('slow');
       }) 
       
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



