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
    newP.innerHTML = '<input type="search" class="place2"><span id="delete" onclick="remove(this)">-</span><input type="tel" class="number" value="핸드폰 번호" ><input type="text" class="memo" value="메모">';
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




$(function(){

var button = document.getElementById('button');
var input = document.getElementById('input');
var list = document.getElementById('id_list');

var cnt = 1;

button.addEventListener('click', clickButton);

function clickButton() {
  var temp = document.createElement('span');
  temp.setAttribute("class", "list-group-item");
  temp.setAttribute("id", "span"+cnt);
  temp.innerHTML = input.value;
//   temp.innerHTML += "<button style='float: right;' class='btn btn-outline-secondary' type='button' onclick='remove("+cnt+")'>-</button>";
  list.appendChild(temp);
  
  cnt++;
}

// function remove(cnt) {
//   //window.alert(cnt);
//   var li = document.getElementById("span"+cnt);
//   list.removeChild(li);
// }


});

//test

$(function(){

    var button = document.getElementById('button');
    var input = document.getElementById('input');
    var list = document.getElementById('id_list2');
    
    var cnt = 1;
    
    button.addEventListener('click', clickButton);
    
    function clickButton() {
      var temp = document.createElement('span');
      temp.setAttribute("class", "list-group-item");
      temp.setAttribute("id", "span"+cnt);
      temp.innerHTML = input.value;
    //   temp.innerHTML += "<button style='float: right;' class='btn btn-outline-secondary' type='button' onclick='remove("+cnt+")'>-</button>";
      list.appendChild(temp);
      
      cnt++;
    }
});