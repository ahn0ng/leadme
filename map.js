$(function(){

    var $side_menu =$("#side_btn li");
    var $con = $("#side_con > ul > li");

    $side_menu.eq(0).click(function(){
        $("#side_con").find($con).stop().animate({"margin-left":"400"},1,"linear")
    $("#side_con").find($con.eq(0)).stop().animate({"margin-left":"0"},500,"linear");
    });

$side_menu.eq(1).click(function(){
    $("#side_con").find($con).stop().animate({"margin-left":"400"},1,"linear")
    $("#side_con").find($con.eq(1)).stop().animate({"margin-left":"0"},500,"linear");
    });

$side_menu.eq(2).click(function(){
    $("#side_con").find($con).stop().animate({"margin-left":"400"},1,"linear")
    $("#side_con").find($con.eq(2)).stop().animate({"margin-left":"0"},500,"linear");
    });

$side_menu.eq(3).click(function(){
    $("#side_con").find($con).stop().animate({"margin-left":"400"},1,"linear")
    $("#side_con").find($con.eq(3)).stop().animate({"margin-left":"0"},500,"linear");
    });
});

$(function(){

$("#imp_f").mouseenter(function(){
    
    $("#imp_menu").fadeIn();
})
$("#imp_f").mouseleave(function(){

    $("#imp_menu").fadeOut();
});

});

// 목적지 추가하기

const add_textbox = () => {
    const adding = document.getElementById("place");
    const newP = document.createElement('p');
    newP.innerHTML = '<input type="search" class="place2"><span id="delete" onclick="remove(this)">-</p>';
    adding.appendChild(newP);
}
const remove = (obj) => {
    document.getElementById('place').removeChild(obj.parentNode);
}

// 모달

$(function(){
    $("#drag").click(function(){
        $("#modal_wrap").fadeIn();
    });

    $("#modal_wrap").click(function(){
        $("#modal_wrap").fadeOut();

    });
});