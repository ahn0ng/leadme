$(function(){

    var $side_menu =$("#side_btn li");
    var $con = $("#side_con > ul > li");

    $side_menu.eq(0).click(function(){
    $("#side_con").find($con).stop().animate({"margin-left":"400"},1,"linear")
    $("#menu_box").stop().animate({"right":"-370"},500,"linear")
    $("#side_con").find($con.eq(0)).stop().animate({"margin-left":"0"},500,"linear");
    });

    $side_menu.eq(1).click(function(){
    $("#side_con").find($con).stop().animate({"margin-left":"400"},1,"linear")
    $("#menu_box").stop().animate({"right":"-370"},500,"linear")
    $("#side_con").find($con.eq(1)).stop().animate({"margin-left":"0"},500,"linear");
    });

    $side_menu.eq(2).click(function(){
    $("#side_con").find($con).stop().animate({"margin-left":"400"},1,"linear")
    $("#menu_box").stop().animate({"right":"-370"},500,"linear")
    $("#side_con").find($con.eq(2)).stop().animate({"margin-left":"0"},500,"linear");
    });

    $side_menu.eq(3).click(function(){
    $("#side_con").find($con).stop().animate({"margin-left":"400"},1,"linear")
    $("#menu_box").stop().animate({"right":"-370"},500,"linear")
    $("#side_con").find($con.eq(3)).stop().animate({"margin-left":"0"},500,"linear");
    });

    $(".menu_close").click(function(){
        $con.stop().animate({"margin-left":"400"},500,"linear");
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
    newP.innerHTML = '<div id="box_place"><input type="search" class="place2"><span id="delete" onclick="remove(this)">-</span><input type="tel" class="number" value="핸드폰 번호" ><input type="text" class="memo" value="메모"></div>';
    adding.appendChild(newP);
}
const remove = (obj) => {
    document.getElementById('place').removeChild(obj.parentNode);
}





// 모달

$(function(){
    $("#drag").click(function(){
        $("#dd").fadeIn();
    });

    $("#dd").click(function(){
        $("#dd").fadeOut();

    });

    $("#down").click(function(){
        $("#dw").fadeIn();
    });

    $("#dw").click(function(){
        $("#dw").fadeOut();

    });

    $("#open").click(function(){
        $("#op").fadeIn();
    });

    $("#op").click(function(){
        $("#op").fadeOut();

    });

    $("#reset").click(function(){
        $("#rs").fadeIn();
    });

    $("#rs").click(function(){
        $("#rs").fadeOut();

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



//test

$(document).ready(function(){ var fileTarget = $('.filebox .upload-hidden'); fileTarget.on('change', function(){ 
    if(window.FileReader){ 
    
    var filename = $(this)[0].files[0].name; } else { 
    var filename = $(this).val().split('/').pop().split('\\').pop();} 
    $(this).siblings('.upload-name').val(filename); }); 
});

$(function(){
    var a = 0;
    var b = 0;
    var $con = $("#side_con > ul > li");
    
    $("#menu_btn").click(function(){
    a++;
    b=a%2;

    if(b==1){
        $("#side_con").find($con).stop().animate({"margin-left":"400"},1,"linear")
        $("#menu_box").stop().animate({"right":"70"},500,"linear");
    }else{
        $("#menu_box").stop().animate({"right":"-400"},500,"linear");
    }

    });
});

$(function(){
    var a = 0;
    var b = 0;
    
    $("#menu_btn2").click(function(){
    a++;
    b=a%2;

    if(b==1){
        $("#menu_box2").stop().animate({"right":"0"},500,"linear");
    }else{
        $("#menu_box2").stop().animate({"right":"-400"},500,"linear");
    }

    });
});