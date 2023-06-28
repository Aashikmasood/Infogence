

// $(".toggle-password").click(function() {

//   $(this).toggleClass("fa-eye fa-eye-slash");
//   var input = $($(this).attr("toggle"));
//   if (input.attr("type") == "password") {
//     input.attr("type", "text");
//   } else {
//     input.attr("type", "password");
//   }
// });


// password 


$(document).ready(function(){  
    $('.eye-icon').click(function(){
      if($(this).prev().attr('type')== 'password'){
          $(this).prev().attr('type','text');
          $(this).find('#pw-close').hide();
          $(this).find('#pw-open').show();
      }
      else{
          $(this).prev().attr('type','password');
          $(this).find('#pw-close').show();
          $(this).find('#pw-open').hide();
      }        
   });
  
  });



// sidemenu

$(document).ready(function(){
  $('.menu-ico-g').click(function(){
  $('.page-wrapper').toggleClass('hide');
      });

      $('.menu-ico-g').click(function(){
          if($(this).hasClass('mb-ic')) {
          $(this).removeClass('mb-ic');
          }
          else{
              $(this).addClass('mb-ic');
          }
          
      });


 });
 $('thead input').change(function(){
  if($(this).prop('checked')){
  $('tbody input').prop('checked',true);
  }
  else{
  $('tbody input').prop('checked',false);
  }
  });
  $('tbody input').change(function(){
  var count = 0;
  for(var i =0; i < $('tbody input').length; i++ ){
  //$('.chk:eq(1)')
  if($('tbody input:eq('+i+')').prop('checked') == true){
  count++;
  }
  }
  if(count==$('tbody input').length){
  $('thead input').prop('checked',true);
  }
  else{
  $('thead input').prop('checked',false);
  }
  });