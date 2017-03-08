/**
 * Created by Administrator on 2016/12/29.
 */
$.ajax({
    url:'data/new.json',
    success:function(data){
        var i=0;
        setInterval(function(){
            i++;
            if(i>2){
                i=0
            }
            $('#tit').html(data[i].tit);
            $('#con').html(data[i].con);
        },5500);
    }
});
function play(){
    $("#temp").prepend($(".play_all .col-md-4:last-child").clone());
    $(".play_all .col-md-4:last-child").remove();
    $("#temp").prepend($(".play_all .col-md-4:last-child").clone());
    $(".play_all .col-md-4:last-child").remove();
    $("#temp").prepend($(".play_all .col-md-4:last-child").clone());
    $(".play_all .col-md-4:last-child").remove();
    $("#temp").slideDown(600, function() {
        $(".play_all").prepend($("#temp").html());
        $("#temp").html('').hide();
    });
}
setInterval(play, 5000);
