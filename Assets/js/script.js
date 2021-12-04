$(document).ready(function(){
    $("#categoryEvent .all").click(function(){
        let category=$(this).attr("id")
        if(category=="All"){
            $(".card").addClass("hide")
            setTimeout(function(){
                $(".card").removeClass("hide")
            },250)
        }else{
            $(".card").addClass("hide")
            setTimeout(function(){
                $("."+ category).removeClass("hide")
            },250)
        }
    })
})