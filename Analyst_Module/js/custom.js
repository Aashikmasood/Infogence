

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





// doughnut chart

window.onload=function(){/*  ww  w  .j a va2s . com*/
var data = [{
data: [30, 10, 40, 10, 10],
labels: ["India", "China", "US", "Canada",],
backgroundColor: [
 "#ffac00",
 "#71ad23",
 "#f23838",
 "#58b5ab",
 "#087891",
],
borderColor: "#fff"
}];
var options = {
tooltips: {
 enabled: false
},
plugins: {
 datalabels: {
   formatter: (value, ctx) => {
     let datasets = ctx.chart.data.datasets;
     if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
       let sum = datasets[0].data.reduce((a, b) => a + b, 0);
       let percentage = Math.round((value / sum) * 100) + '%';
       return percentage;
     } else {
       return percentage;
     }
   },
   color: '#fff',
 }
}
};
var ctx = document.getElementById("pie-chart").getContext('2d');
var myChart = new Chart(ctx, {
type: 'doughnut',
data: {
 datasets: data
},
options: options
});
}



$(".table_scroll").click(function(){
if($(this).hasClass("toggled")){
$('body').addClass('intro');
}
});








//TOGGLING NESTED ul
$(".drop-down .selected a").click(function() {
  $(".drop-down .options ul").toggle();
});

//SELECT OPTIONS AND HIDE OPTION AFTER SELECTION
$(".drop-down .options ul li a").click(function() {
  var text = $(this).html();
  $(".drop-down .selected a span").html(text);
  $(".drop-down .options ul").hide();
}); 


//HIDE OPTIONS IF CLICKED ANYWHERE ELSE ON PAGE
$(document).bind('click', function(e) {
  var $clicked = $(e.target);
  if (! $clicked.parents().hasClass("drop-down"))
      $(".drop-down .options ul").hide();
});