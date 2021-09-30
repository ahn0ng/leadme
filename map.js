$(function(){

    var $side_menu =$("#side_btn li");
    var $con = $("#side_con > ul > li");
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    var e = 0;
    var f = 0;
    var g = 0;
    var h = 0;
    
    $side_menu.eq(0).click(function(){
    a++;
    b=a%2;
    c=0;
    e=0;
    g=0;
    if(b==1){
            $("#side_con").find($con).stop().animate({"margin-left":"400"},1,"linear")
            $("#menu_box").stop().animate({"right":"-370"},500,"linear")
            $("#side_con").find($con.eq(0)).stop().animate({"margin-left":"0"},500,"linear");
    
    }else{
        $con.stop().animate({"margin-left":"400"},500,"linear");
           
    }

    });

    $side_menu.eq(1).click(function(){
        c++;
        d=c%2;
        a=0;
        e=0;
        g=0;
        if(d==1){
            $("#side_con").find($con).stop().animate({"margin-left":"400"},1,"linear")
            $("#menu_box").stop().animate({"right":"-370"},500,"linear")
            $("#side_con").find($con.eq(1)).stop().animate({"margin-left":"0"},500,"linear");

        }else{
            $con.stop().animate({"margin-left":"400"},500,"linear");
        }
    
        });

    $side_menu.eq(2).click(function(){
        e++;
        f=e%2;
        a=0;
        g=0;
        c=0;
    
        if(f==1){
            $("#side_con").find($con).stop().animate({"margin-left":"400"},1,"linear")
            $("#menu_box").stop().animate({"right":"-370"},500,"linear")
            $("#side_con").find($con.eq(2)).stop().animate({"margin-left":"0"},500,"linear");
         
        }else{
            $con.stop().animate({"margin-left":"400"},500,"linear");
        }
    
        });
        
    $side_menu.eq(3).click(function(){
        g++;
        h=g%2;
        a=0;
        e=0;
        c=0;
        
        if(h==1){
            $("#side_con").find($con).stop().animate({"margin-left":"400"},1,"linear")
            $("#menu_box").stop().animate({"right":"-370"},500,"linear")
            $("#side_con").find($con.eq(3)).stop().animate({"margin-left":"0"},500,"linear");

        }else{
            $con.stop().animate({"margin-left":"400"},500,"linear");
            }
        
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
    newP.innerHTML = '<div id="box_place"><input type="search" class="place2"><span class="more">···</span><span class="m_menu"><span>시간 설정</span><span>즐겨찾기</span><span>삭제</span></span><input type="tel" class="number" value="핸드폰 번호" ><input type="text" class="memo" value="메모"></div>';
    adding.appendChild(newP);
} // onclick="remove(this)"
const remove = (obj) => {
    document.getElementById('place').removeChild(obj.parentNode);
}





// 모달

$(function(){
    $("#drag").click(function(){
        $("#dd").fadeIn();
    });

    $(".close").click(function(){
        $("#dd").fadeOut();

    });

    $("#down").click(function(){
        $("#dw").fadeIn();
    });

    $(".close").click(function(){
        $("#dw").fadeOut();

    });

    $("#open").click(function(){
        $("#op").fadeIn();
    });

    $(".close").click(function(){
        $("#op").fadeOut();

    });

    $("#reset").click(function(){
        $("#rs").fadeIn();
    });

    $(".close").click(function(){
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


$(function(){
    $(".more").click(function(){
        $(".m_menu").css({"opacity":"1"})
    });

   
    $(".m_menu").mouseleave(function(){
        $(".m_menu").css({"opacity":"0"})
    });
    
});