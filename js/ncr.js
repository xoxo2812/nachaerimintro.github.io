$(document).ready(function(){
    $(".logo1").on('mousewheel',function(e){ 
        var wheel = e.originalEvent.wheelDelta; 
        if(wheel>0){ 
        $(".logo1").html("<!--나채림-->");
    
        } else { 
        $(".logo1").html("<!--IT'sME-->");
            } 
    });
})