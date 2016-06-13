var count = 0;
for (i = count+1; i < $("img").length; i++) {
      $("img").eq(i).hide(); //hides all images and the only image will take the top spot
};
$("#backkk").on('mouseover',function(e){    
    e.preventDefault() 
    for (i = count; i < $("img").length; i++) {
      $("img").eq(i).hide(); //hides the image
    };
    count = (count+1)%($("img").length);
    $("img").eq(count).toggle(1200);//only image so it will take the top spot


   
  });


// var $group = $('.slide-group');
// var $slides = $('.slide');
// var currentIndex = 0;
// var timeout;

// function move(newIndex){
//   advance();
//   $slides.eq(currentIndex).fadeOut();
//   $slides.eq(newIndex).fadeIn();
//   currentIndex = newIndex;
// }


// function advance() {                     // Used to set 
//   clearInterval(timeout);                 // Clear previous timeout
//   timeout = setInterval(function() {      // Set new timer
//     if (currentIndex < ($slides.length - 1)) { // If slide < total slides
//       move(currentIndex + 1);            // Move to next slide
//     } else {                             // Otherwise
//       move(0);                           // Move to the first slide
//     }
//   }, 4000);                              // Milliseconds timer will wait
// }



// advance();