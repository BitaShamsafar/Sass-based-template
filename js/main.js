//Caresoul part in displaying OUR WORKS

var tab_num=document.getElementsByClassName('tab').length;
var cal=(document.getElementsByClassName('tab')[0].clientWidth+25)*tab_num;
document.getElementsByClassName('item-wrapper')[0].style.width=cal;

function caresoulReverse(){
    var val=getComputedStyle(document.getElementsByClassName('item-wrapper')[0]).marginLeft;
    val=val.replace('px','');

    if(val<24){
   
    document.getElementById('next').removeAttribute('disabled', 'disabled')
     document.getElementsByClassName('item-wrapper')[0].style.marginLeft= Math.floor(val)+(cal/tab_num) + 'px';     
   
    }
    else{
     document.getElementById('previos').setAttribute('disabled', 'disabled')
    }
 }


function caresoul(){
   var val=getComputedStyle(document.getElementsByClassName('item-wrapper')[0]).marginLeft;
   val=val.replace('px','');

   if(getComputedStyle(document.getElementsByClassName('item-wrapper')[0]).marginRight == '0px'){

    document.getElementById('previos').removeAttribute('disabled', 'disabled')
    document.getElementsByClassName('item-wrapper')[0].style.marginLeft= (val-cal/tab_num) + 'px';     
   }
   else{
    document.getElementById('next').setAttribute('disabled', 'disabled')
   }
}

// Showing Skills Number increasing from 0
function flow(num,k){
    var i=0;
    setInterval(function(){
        if(i<=num){        
        document.getElementsByClassName('number')[k].innerHTML='+'+i;  
        return i++;} 
    },52);
    }
    
  // functions need to fire on scroll 
  // here fire flag is just to allow flow function to run once not with each scroll  

  var fire=0;
 
  document.onscroll=function(){
      if(document.documentElement.scrollTop>50){
          document.getElementById('skills-icon').style.animation="none"
          document.getElementsByTagName('nav')[0].classList.add('fix');
      }
      if(document.documentElement.scrollTop<50){
          document.getElementById('skills-icon').style.animation="bounce infinite 1s linear";
          document.getElementsByTagName('nav')[0].classList.remove('fix');

      }
      if(document.documentElement.scrollTop>document.getElementsByTagName('header')[0].clientHeight-70 && fire==0){
       fire=1;
       for(var j=0;j<4;j++){
       var qnt=document.getElementsByClassName('number')[j].innerHTML;
       flow(qnt,j)
    }
      }
      
  } 
  
  document.getElementsByClassName('cntct-btn')[0].addEventListener('click',function(){
             document.getElementsByClassName('menu')[0].style.display="block"
  });

  document.getElementsByClassName('menu')[0].addEventListener('click',function(){
            document.getElementsByClassName('menu')[0].style.display="none"
  })