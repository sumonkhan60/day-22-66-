$(window).scroll(function (){
   var windowScrollPosition = $(window).scrollTop();
   var stickyDiv = $('#stickyDiv').position();
   if (windowScrollPosition >= stickyDiv.top){
      $('#stickyDiv').css({
         'position': 'fixed',
         'top':  '0px'
      });
   }else {
      $('#stickyDiv').css({
         'position': 'relative',
         'top':  '0px'
      });
   }
});



// var scrollDivPosition = $('#scrollDiv').position();
// alert(scrollDivPosition.left);

// var firstScrollPosition = 0;
//
// $('#scrollDiv').scroll(function (){
//     var scrollPosition = $('#scrollDiv').scrollTop();
//     if(scrollPosition > firstScrollPosition){
//         $('#h2').text('You are scrolling down');
//     }else {
//         $('#h2').text('You are scrolling up');
//     }
//     firstScrollPosition = scrollPosition;
//     // $('#h2').text(scrollPosition);
//     // $('#h2').css('display', 'block').fadeOut(1000);
// });



// $('#firstName').keyup(function (){
//     var firstName = $('#firstName').val();
//     $('#res1').text(firstName);
// });
//
// $('#lastName').keyup(function (){
//     var lastName = $('#lastName').val();
//     $('#res2').text(lastName);
// });
//
// $('#lastName').blur(function (){
//     var firstName = $('#firstName').val();
//     var lastName = $('#lastName').val();
//     var fullName = firstName+' '+lastName;
//     $('#res3').text(fullName);
// });
//
//
//
//
// $('#btn').click(function (){
//     var firstName = $('#firstName').val();
//     var lastName = $('#lastName').val();
//
//     var fullName = firstName +' '+lastName;
//     $('#fullName').val(fullName);
// });