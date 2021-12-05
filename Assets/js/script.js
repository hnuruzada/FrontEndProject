$(document).ready(function () {
    $("#categoryEvent .all").click(function () {
        let category = $(this).attr("id")
        if (category == "All") {
            $(".card").addClass("hide")
            setTimeout(function () {
                $(".card").removeClass("hide")
            }, 250)
        } else {
            $(".card").addClass("hide")
            setTimeout(function () {
                $("." + category).removeClass("hide")
            }, 250)
        }
    })
    let image = document.getElementById('loop')

    let images = ['./Assets/images/h3-slider-background.jpg', './Assets/images/h3-slider-background-2.jpg', './Assets/images/h3-slider-background-3.jpg']

    $(image).css("opacity", "100")




    setInterval(function () {
        let random = Math.floor(Math.random() * 3);
        image.src = images[random]


    }, 3000);

    $(".clickright").click(function () {
        let random = Math.floor(Math.random() * 3);
        image.src = images[random]
    })
    $(".clickleft").click(function () {
        let random = Math.floor(Math.random() * 3);
        image.src = images[random]
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