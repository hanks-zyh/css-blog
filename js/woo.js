window.onload=function(){
    var downIcon = document.getElementById("down");
	var step = 0;
	setInterval(function(){
		 step++;
	     var t;
		 if(step>=0 && step <10){
		     t = step;
		 }
		 if( step >=10 && step <20){
			 t = 20 - step;
		 }
		 if(step >= 20 ){
		    t = step = 0;
		 }
		downIcon.style.top = t+"px";
	},50);
}


window.onscroll = function(){ 
	var t = document.documentElement.scrollTop || document.body.scrollTop;  
	var navbg = document.getElementById( "navbg" ); 
	if( t > 301 ) { 
		navbg.style.opacity = 1;
	} else { 
		navbg.style.opacity = t/300;
	} 
} 

var m1 = -300;
var m2 = 0;
var width = 300;
var value = 0;

function toggleMenu(){
	if(m1<0){
		openMenu();
	}else{
		closeMenu();
	}
}

function moveToLeft(){
	var menu = document.getElementsByClassName("menu")[0];
	m1 -= 10;
	menu.style.marginLeft = m1+"px";
	if(m1 <= -width){
		clearInterval(value);
		m1 = -width;
	}
	 
}
function moveToRight(){
	var menu = document.getElementsByClassName("menu")[0];
	m1 += 10;
	menu.style.marginLeft = m1+"px";
	if(m1 >= 0){
		clearInterval(value);
		m1 = 0;
	}
	//var main = document.getElementsByClassName("main-wrapper")[0];
}
function closeMenu(){
	clearInterval(value);
	value =  setInterval("moveToLeft()",10);
	var mainLayer = document.getElementById("mainLayer");
	mainLayer.style.opacity = 0;
	mainLayer.style.zIndex = 0;
};
function openMenu(){
	clearInterval(value);
	value =  setInterval("moveToRight()",10);
	var mainLayer = document.getElementById("mainLayer");
	mainLayer.style.zIndex = 1;
	mainLayer.style.opacity = 0.5;
	/*mainLayer.onclick= function(){
		closeMenu();
	};*/
};