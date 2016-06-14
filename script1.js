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


