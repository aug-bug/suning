window.onload=function(){
	let dhhz1=document.getElementsByClassName("dhhz1");
	let la=document.getElementsByClassName("la")[0];
    dhhz1[0].onmouseenter=function(){
    	la.style.height="230px";
    	dhhz1[0].style.background="#fff";
    }
    dhhz1[0].onmouseleave=function(){
    	la.style.height="0";
    	dhhz1[0].style.background="none";
    }
	
	let la2=document.getElementsByClassName("la2")[0];
	dhhz1[1].onmouseenter=function(){
		la2.style.height="115px";
		dhhz1[1].style.background="#fff";
	}
	dhhz1[1].onmouseleave=function(){
		la2.style.height="0";
		dhhz1[1].style.background="none";
	}
	
	let la3=document.getElementsByClassName("la3")[0];
	dhhz1[2].onmouseenter=function(){
		la3.style.height="115px";
		dhhz1[2].style.background="#fff";
	}
	dhhz1[2].onmouseleave=function(){
		la3.style.height="0";
		dhhz1[2].style.background="none";
	}
	
	let dhhy1=document.getElementsByClassName("dhhy1");
	let la4=document.getElementsByClassName("la4")[0];
	dhhy1[2].onmouseenter=function(){
		la4.style.height="135px";
		dhhy1[2].style.background="#fff";
	}
	dhhy1[2].onmouseleave=function(){
		la4.style.height="0";
		dhhy1[2].style.background="none";
	}
	
	
	
	
	
	let lbz1=document.getElementsByClassName("lbz1")[0];
	let ul1=lbz1.getElementsByTagName("ul")[0];
	let li1=ul1.getElementsByTagName("li");
	let cexuanx=document.getElementsByClassName("cexuanx");
	for(let i=0;i<li1.length;i++){
		li1[i].onmouseenter=function(){
			for(let j=0;j<cexuanx.length;j++){
				cexuanx[j].style.display="none";
			}
			cexuanx[i].style.display="block";
		}
		li1[i].onmouseleave=function(){
				cexuanx[i].style.display="none";
		}
	}
	
	
//	/轮播图开始
	let lbz2=document.querySelector(".lbz2");
    let lis3=document.querySelectorAll(".lbz2 li");
    let hh=document.querySelectorAll(".hh a");
    let fxy=document.querySelector(".fxy");
    let fxz=document.querySelector(".fxz");
	console.log(hh);
	let index=0;
	lis3[0].style.zIndex="10";
	hh[0].classList.add("hot");
	
	let t=setInterval(move,1500);
	
	function move(){
	     index++;
	     if(index==lis3.length){
	     	index=0;
	     }
	     lis3.forEach(function(v){
	     	v.style.zIndex="5";	     	
	     })
	     lis3[index].style.zIndex="10";
	     hh.forEach(function(v){
	     	v.classList.remove("hot");
	     })
	     hh[index].classList.add("hot");
	}
	function movel(){
		index--;
		if(index<0){
			index=lis3.length-1;
		}
		lis3.forEach(function(v){
			v.style.zIndex="5";
		})
		lis3[index].style.zIndex="10";
		hh.forEach(function(v){
			v.classList.remove("hot");
			
		})
		hh[index].classList.add("hot");
	}
	//鼠标移入
	lbz2.onmouseenter=function(){
		clearInterval(t);
	}
	lbz2.onmouseleave=function(){
		t=setInterval(move,1500);
	}
	//点轮播点
	for(let i=0;i<lis3.length;i++){
		hh[i].onclick=function(){
			hh.forEach(function(v){
				v.classList.remove("hot");
			})
			lis3.forEach(function(v){
				v.style.zIndex="5";
			})
		hh[i].classList.add("hot");
		lis3[i].style.zIndex="10";
		index=i;
	}
	    
	}
	//左右按钮
	fxy.onclick=function(){
		move();
	}
	fxz.onclick=function(){
		movel();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
