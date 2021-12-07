$(document).ready(function(){
    $({
        countNum: $('.bars .bar1 .firstb p').html()
      }).animate({
        countNum: 95
      }, {
        duration: 3000,
        easing: 'linear',
        step: function() {
          $('.bars .bar1 .firstb p').html(Math.floor(this.countNum) + "%");
          $('.bars .bar1 .firstb .mask .loadingBar').css("width", Math.floor(this.countNum) + "%");
        },
        complete: function() {
          $('.bar1 .firstb p').html(this.countNum + "%");
          $('.bars .bar1 .firstb .mask .loadingBar').css("width", this.countNum + "%");
          // alert('finished');
        }
      });
      
      $({
        countNum: $('.bars .bar2 .secondb p').html()
      }).animate({
        countNum: 80
      }, {
        duration: 3000,
        easing: 'linear',
        step: function() {
          $('.bars .bar2 .secondb p').html(Math.floor(this.countNum) + "%");
          $('.bars .bar2 .secondb .mask .loadingBar').css("width", Math.floor(this.countNum) + "%");
        },
        complete: function() {
          $('.bar2 .secondb p').html(this.countNum + "%");
          $('.bars .bar2 .secondb .mask .loadingBar').css("width", this.countNum + "%");
          // alert('finished');
        }
      });
      $({
        countNum: $('.bars .bar3 .thirdb p').html()
      }).animate({
        countNum: 55
      }, {
        duration: 3000,
        easing: 'linear',
        step: function() {
          $('.bars .bar3 .thirdb p').html(Math.floor(this.countNum) + "%");
          $('.bars .bar3 .thirdb .mask .loadingBar').css("width", Math.floor(this.countNum) + "%");
        },
        complete: function() {
          $('.bar3 .thirdb p').html(this.countNum + "%");
          $('.bars .bar3 .thirdb .mask .loadingBar').css("width", this.countNum + "%");
          // alert('finished');
        }
      });
      
      
})



//footerProgressBar
$(document).ready(function(){
    $({
        countNum: $('.barsfooter .barheader .firstb p').html()
      }).animate({
        countNum: 95
      }, {
        duration: 3000,
        easing: 'linear',
        step: function() {
          $('.barsfooter .barheader .firstb p').html(Math.floor(this.countNum) + "%");
          $('.barsfooter .barheader .firstb .mask .loadingBar').css("width", Math.floor(this.countNum) + "%");
        },
        complete: function() {
          $('.barheader .firstb p').html(this.countNum + "%");
          $('.barsfooter .barheader .firstb .mask .loadingBar').css("width", this.countNum + "%");
          // alert('finished');
        }
      });
      
      $({
        countNum: $('.barsfooter .barmain .secondb p').html()
      }).animate({
        countNum: 80
      }, {
        duration: 3000,
        easing: 'linear',
        step: function() {
          $('.barsfooter .barmain .secondb p').html(Math.floor(this.countNum) + "%");
          $('.barsfooter .barmain .secondb .mask .loadingBar').css("width", Math.floor(this.countNum) + "%");
        },
        complete: function() {
          $('.barmain .secondb p').html(this.countNum + "%");
          $('.barsfooter .barmain .secondb .mask .loadingBar').css("width", this.countNum + "%");
          // alert('finished');
        }
      });
      $({
        countNum: $('.barsfooter .barfooter .thirdb p').html()
      }).animate({
        countNum: 55
      }, {
        duration: 3000,
        easing: 'linear',
        step: function() {
          $('.barsfooter .barfooter .thirdb p').html(Math.floor(this.countNum) + "%");
          $('.barsfooter .barfooter .thirdb .mask .loadingBar').css("width", Math.floor(this.countNum) + "%");
        },
        complete: function() {
          $('.barfooter .thirdb p').html(this.countNum + "%");
          $('.barsfooter .barfooter .thirdb .mask .loadingBar').css("width", this.countNum + "%");
          // alert('finished');
        }
      });

     
      
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



