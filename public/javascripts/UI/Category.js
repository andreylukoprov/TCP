/**
 * Created by AndreyLukoprov on 12/29/2014.
 */
function Active(li){
    $(".list-group a").removeClass("active");
    $(li).addClass("active");
}
function GetCategory(){
    return $(".list-group .active")[0].innerHTML;
}
