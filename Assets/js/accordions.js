$(document).ready(function(){
    $(".card-header").click(function(){
        
     if($(this).next(".card-body").hasClass("active")){
        
       $(this).next(".card-body").removeClass("active").slideUp()
       
      $(this).children("span").removeClass("fa-minus").addClass("fa-plus")	
     }
   else{
     $(".card .card-body").removeClass("active").slideUp()
     $(".card .card-header span").removeClass("fa-minus").addClass("fa-plus");
     $(this).next(".card-body").addClass("active").slideDown()
      $(this).children("span").removeClass("fa-plus").addClass("fa-minus")
    }
    })
    $(".card-header1").click(function(){
        if($(this).next(".card-body1").hasClass("active1")){
          $(this).next(".card-body1").removeClass("active1").slideUp()
         $(this).children("span").removeClass("fa-minus").addClass("fa-plus")	
        }
      else{
        $(".card1 .card-body1").removeClass("active1").slideUp()
        $(".card1 .card-header1 span1").removeClass("fa-minus").addClass("fa-plus");
        $(this).next(".card-body1").addClass("active1").slideDown()
         $(this).children("span").removeClass("fa-plus").addClass("fa-minus")
       }
       })
       $(".card-header2").click(function(){
        
        if($(this).next(".card-body2").hasClass("active2")){
          $(this).next(".card-body2").removeClass("active2").slideUp()
         $(this).children("span").removeClass("fa-minus").addClass("fa-plus")	
        }
      else{
        $(".card2 .card-body2").removeClass("active2").slideUp()
        $(".card2 .card-header2 span").removeClass("fa-minus").addClass("fa-plus");
        $(this).next(".card-body2").addClass("active2").slideDown()
         $(this).children("span").removeClass("fa-plus").addClass("fa-minus")
       }
       })
       $(".card-header3").click(function(){
        
        if($(this).next(".card-body3").hasClass("active3")){
          $(this).next(".card-body3").removeClass("active3").slideUp()
         $(this).children("span").removeClass("fa-minus").addClass("fa-plus")	
        }
      else{
        $(".card3 .card-body3").removeClass("active3").slideUp()
        $(".card3 .card-header3 span").removeClass("fa-minus").addClass("fa-plus");
        $(this).next(".card-body3").addClass("active3").slideDown()
         $(this).children("span").removeClass("fa-plus").addClass("fa-minus")
       }
       })






    $(window).scroll(function () {
        let scrollPx = $(window).scrollTop()
        if (scrollPx > 500) {
            $("#backToTop").fadeIn(450)
            $("#backToTop").css("display", "flex")
        } else {
            $("#backToTop").fadeOut(450)

        }

    })

    $("#backToTop").click(function () {
        $(window).scrollTop(0)
    })
  })