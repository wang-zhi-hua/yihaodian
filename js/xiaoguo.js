window.onload=function(){
//赋值简易法
      var  box=$(".w15")[0];
      var tex=$("#w555");
//表单获得焦点时，如果value值为默认值，则清空；表单失去焦点时，如果value为空时，则失去焦点值。
       tex.onfocus=function(){
           if(tex.value){
              tex.value=""
           }
       }
       tex.onblur=function(){
             if(tex.value){

             }else{
              tex.value="店铺圣诞节跨年幸福购 5折抢福袋"
             }
       }


//轮播
var img=$(".r11");
var anniu=$(".anniu");
var bannerbox=$(".r")[0];
var bigarr=["#880000","#fbdb78","#2cc2b6","#fb5322","#46c4ed","#ee3231","#103897","#eec700"]
  var num=1;
  function move(){
    if(num==8){
      num=0;
    }
    for(var i=0;i<img.length;i++){
      img[i].style.zIndex=2;
      anniu[i].style.background="#ccc";
    }
    img[num].style.zIndex=3;
    anniu[num].style.background="#FF3C3C";
  bannerbox.style.background=bigarr[num];
    num++;
  }
  var t=setInterval(move,2000);
  for(var i=0;i<anniu.length;i++){
    anniu[i].index=i;
    anniu[i].onmouseover=function(){
      clearInterval(t);
      for(var j=0;j<anniu.length;j++){
        img[j].style.zIndex=2;
        anniu[j].style.background="#ccc";
      }
        img[this.index].style.zIndex=3;
       this.style.background="#ff3c3c";
       bannerbox.style.background=bigarr[this.index];
     
    }
    anniu[i].onmouseout=function(){
      t=setInterval(move,2000);
      num=this.index+1;
    }
  }

//轮播2
      
      var imgbox=$(".o94")[0];
      var leftbtn=$(".o91")[0];
      var rightbtn=$(".o92")[0];
      function moveleft(){
        //第一个放到最后一个后面,实现一个左移//1
        animate(imgbox,{left:-109},600,Tween.Linear,function(){
                //2.把第一个放到最后
                imgbox.appendChild(getFirst(imgbox));
                //3.拉回来
                imgbox.style.left=0;
        });
        
      }

      function moveright(){
        var last=getLast(imgbox);
        imgbox.insertBefore(last,getFirst(imgbox));
            imgbox.style.left=-109+"px";
            animate(imgbox,{left:0},600,Tween.Linear)
      }
      var y=setInterval(moveleft,2000);


      leftbtn.onmouseover=rightbtn.onmouseover=function(){
        clearInterval(y);
      }
      leftbtn.onmouseout=rightbtn.onmouseout=function(){
        y=setInterval(moveleft,2000);
      }

      leftbtn.onclick=function(){
        moveleft();
      }
      rightbtn.onclick=function(){
        moveright();
      }


  //左轮播  
   function luobo1(lou){
    var i20=$(".i20")[lou];
  var i21=$(".i21")[lou];
  var gundong=$(".gundong")[lou];

  var lis=$("li",gundong);
      var num1=1;
    function move1(){
      if(num1==3){
        animate(i21,{left:-330*num1},600,Tween.Linear,function(){
          animate(i21,{left:0},0);
      })
      num1=0;
       } 
       else{
        animate(i21,{left:-330*num1},600,Tween.Linear);
        
      } 
      for(var i1=0;i1<lis.length;i1++){
        lis[i1].style.background="#dddddd";
      }
      lis[num1].style.background="#ff3c3c";
        num1++;
      } 
    var t1=setInterval(move1,2000);

    for(var i1=0;i1<lis.length;i1++){
      lis[i1].index=i1;
      lis[i1].onmouseover=function(){
        clearInterval(t1);
        for(var j1=0;j1<lis.length;j1++){
          lis[j1].style.background="#dddddd";

        }
        animate(i21,{left:-330*this.index},600,Tween.Linear);
        num1=this.index+1;
        this.style.background="#ff3c3c";
      }

      lis[i1].onmouseout=function(){
        t1=setInterval(move1,2000);
      }
    }
 }
  
 for(var i=0;i<8;i++){
    luobo1(i);
 }  

//左菜单
var r3=$(".r3");
var r4=$(".r4");
  for(var i=0;i<r3.length;i++){
    r3[i].index=i;
    r3[i].onmouseover=function(){
    for(var j=0;j<r4.length;j++){
      r4[j].style.display="none";
    }
    r4[this.index].style.display="block";
  }
  r3[i].onmouseout=function(){
    for(var j=0;j<r4.length;j++){
      r4[j].style.display="none";
    }
 
}

}

      

//图片左移

var movel=$(".y3")[0];
   var moveimg=$("img",movel);
   for(var i=0;i<moveimg.length;i++){
    moveimg[i].index=i;
    moveimg[i].onmouseover=function(){
      moveimg[this.index].style.cssText="position:relative;left:-5px;box-shadow:1px 5px 0px rgba(0,0,0,0.1);"
    }
    moveimg[i].onmouseout=function(){
      moveimg[this.index].style.cssText="position:relative;left:0px;box-shadow:1px 0px 0px rgba(0,0,0,0.1);"
    }
   }

//图片左移

var movel1=$(".y6")[0];
   var moveimg1=$("img",movel1);
   for(var i=0;i<moveimg1.length;i++){
    moveimg1[i].index=i;
    moveimg1[i].onmouseover=function(){
      moveimg1[this.index].style.cssText="position:relative;left:-5px;box-shadow:1px 5px 0px rgba(0,0,0,0.1);"
    }
    moveimg1[i].onmouseout=function(){
      moveimg1[this.index].style.cssText="position:relative;left:0px;box-shadow:1px 0px 0px rgba(0,0,0,0.1);"
    }
   }
    
//图片左移

var movel2=$(".y10")[0];
   var moveimg2=$("img",movel2);
   for(var i=0;i<moveimg2.length;i++){
    moveimg2[i].index=i;
    moveimg2[i].onmouseover=function(){
      moveimg2[this.index].style.cssText="position:relative;left:-5px;box-shadow:1px 5px 0px rgba(0,0,0,0.1);"
    }
    moveimg2[i].onmouseout=function(){
      moveimg2[this.index].style.cssText="position:relative;left:0px;box-shadow:1px 0px 0px rgba(0,0,0,0.1);"
    }
   }


//loucengtiaozhuan
  var flagdown=true;
  var flagup=true;
  var btn=$(".btn");
  var floor=$(".floor");
  var fdtu=$(".fdtu")[0];
  var xianshi=$(".xianshi");
  var btnfanhui=$(".btnfanhui")[0];
  var ch=document.documentElement.clientHeight;
  btnfanhui.onclick=function(){
    var obj=document.documentElement.scrollTop?document.documentElement:document.body;
      animate(obj,{scrollTop:0},600,Tween.Linear)
  }
  window.onscroll=function(){
    var scrollT=getScrollT();
  if(scrollT>=580){
      fdtu.style.display="block";
    }else{
      fdtu.style.display="none";
    }
  for(var i=0;i<btn.length;i++){
    btn[i].index=i;
    btn[i].onclick=function(){
      var obj=document.documentElement.scrollTop?document.documentElement:document.body;
      animate(obj,{scrollTop:floor[this.index].offsetTop})
    }
  }

    for(var i=0;i<floor.length;i++){
    if(floor[i].offsetTop<scrollT+400){
      for(var j=0;j<btn.length;j++){
        xianshi[j].style.display="none";
    }
    xianshi[i].style.display="block";
   }

 }

    for(var i=0;i<floor.length;i++){
    if(floor[i].offsetTop<scrollT+ch){
      var imgs=$("img",floor[i]);
      for(var j=0;j<imgs.length;j++){
        imgs[j].src=imgs[j].getAttribute("aa");
    }
   }

 }


  }

   for(var i=0;i<btn.length;i++){
      btn[i].index=i;
      hover(btn[i],function(){
          xianshi[this.index].style.display="block";
        },function(){
        xianshi[this.index].style.display="none";
      })
   
    }
  //顶部下拉
var dlzc=$(".dlzc")[0];
var dlzcxl=$(".dlzcxl")[0];
dlzc.onmouseover=function(){
  dlzcxl.style.display="block";
}
dlzc.onmouseout=function(){
  dlzcxl.style.display="none";
}


var songhuo=$(".songhuo")[0];
var shxl=$(".shxl")[0];
songhuo.onmouseover=function(){
  shxl.style.display="block";
}
songhuo.onmouseout=function(){
  shxl.style.display="none";
}



function xiala(a){
var xialak=$(".xialak")[a];
var erji=$(".erji")[a];
xialak.onmouseover=function(){
  erji.style.display="block";
}
xialak.onmouseout=function(){
  erji.style.display="none";
}
}
xiala(0);
xiala(1);

//图片闪亮
var tupian=$(".fg");
for(var i=0;i<tupian.length;i++){
  tupian[i].index=i;
  tupian[i].onmouseover=function(){
    animate(tupian[this.index],{opacity:0.85},50,function(){
      animate(tupian[this.index],{opacity:1},50)
    })
  }
}


//xiabutupianzhuanhuan
var word=getClass(".teword");
   var conbox=getClass(".teb");
for(var i=0;i<word.length;i++){//给每一个标题添加单击事件
  word[i].index=i;//index保存相应对象i的变化值
  word[i].onclick=function(){
    for(var j=0;j<conbox.length;j++){
      conbox[j].style.display="none";
      word[j].style.fontWeight="normal";
      word[j].style.textDecoration="none";
    }
    //alert(i)
    conbox[this.index].style.display="block";
    this.style.fontWeight="bold";
    this.style.textDecoration="underline";
  }
 }


}