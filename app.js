var offsetY = 0;
$(document).ready( function() {
   alert("Page ready");
    $("#page").on("wheel", function(event){
        console.log(event.originalEvent);
        if (offsetY == 0 || offsetY <=-20)
        {
            offsetY -= event.originalEvent.deltaY;
        }
        else if(offsetY > 0)
        {
            offsetY = 0;
        }
        $("#page").css("top",`${offsetY}px`);
    } );
    $(document).keydown(function(event){
        var key = event.which;
        console.log(key);
        if(key === 40)
        {
            offsetY -= 20;
        }
        else if(key === 38)
        {
            if (offsetY < 0)
            {
                offsetY += 20;
            }
            else
            {
                offsetY = 0;
            }
        }
        $("#page").css("top",`${offsetY}px`);
    })

}
)