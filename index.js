function rnd(seed)
{
	var x = Math.abs(365.25*Math.pow(Math.round(seed%36525),2.5) % 2 -1);
	return x;
}
var t;
function load()
{
	t = setTimeout(function(){
		var d = document.getElementById("alertAnimation");
		d.style.visibility="visible";
		d.style.textAlign="Center";
		d.style.position="unset";
		},5000);
	//var D = new Date();
	//var a = Math.ceil(rnd(D.getDate()+D.getMonth()*(365.25/12)+D.getFullYear()*365.25)*12);
	//document.body.style.backgroundImage="url('./Background/"+a.toString()+"')";
	//applyCSS(".res::before{background-image: url(./Background/"+a.toString()+");}","glassEffect",false);
	document.body.style.backgroundImage="url('https://raw.githubusercontent.com/l-thoms/Thoms-World/master/NewMap-full.svg')";
	document.body.style.backgroundColor="#FFFFFF";
	applyCSS(".res::before{background-image: url('https://raw.githubusercontent.com/l-thoms/Thoms-World/master/NewMap-full.svg'); background-color:#FFFFFF}","glassEffect",false);
	document.onreadystatechange=ready();
	resize();
	
}
function resize()
{
	var r=document.getElementById('res');
	var dw= document.documentElement.clientWidth.toString();
	var dh= document.documentElement.clientHeight.toString();
	applyCSS(".res::before{"+
	"top:-"+(r.offsetTop/r.offsetHeight*100).toString()+"%;"+
	"left:-"+(r.offsetLeft/r.offsetWidth*100).toString()+"%;"+
	"right:-"+((dw-r.offsetWidth-r.offsetLeft)/r.offsetWidth*100).toString()+"%;"+
	"bottom:-"+((dh-r.offsetHeight-r.offsetTop)/r.offsetHeight*100).toString()+"%;"+
	"background-repeat: no-repeat;background-size: cover;background-attachment:fixed;background-position: center;}",
	"autoSize",true);
	var f = document.getElementById("FFNotice");
	f.style.left=(document.documentElement.offsetWidth/2-f.clientWidth/2).toString()+"px";
	f.style.maxWidth=(document.documentElement.offsetWidth-
	document.getElementById("left_").clientWidth-
	document.getElementById("right_").clientWidth-12).toString()+"px";
	//console.log(document.documentElement.offsetHeight.toString()+"\n" + document.documentElement.scrollTop);
	if(document.documentElement.offsetHeight<=document.documentElement.clientHeight)
	{
		f.style.top = (dh-6-f.clientHeight).toString()+"px";
	}
	else
	{
		f.style.top = (document.documentElement.offsetHeight-document.documentElement.scrollTop
		-6-f.clientHeight).toString()+"px";
	}
	var u = navigator.userAgent;
	if(u.indexOf("Android") > -1||u.indexOf("iPhone") > -1)
	{
		if(window.orientation.toString()=="90"||window.orientation.toString()=="-90")
		{
			applyCSS("body{zoom:1;}","scaleForPhone",true);
		}
		else
		{
			applyCSS("body{zoom:2.5;}","scaleForPhone",true);
		}
	}
}
function applyCSS(t,id,isremoved)
{
	var s=document.createElement('style');
	s.innerText=t;
	s.id=id;
	if(isremoved==true)
	{
		try
		{
			var e=document.getElementById(id);
			e.remove();
		}
		catch(er){};
	}
	document.body.appendChild(s);
}
function ready()
{
	if (document.readyState=="complete")
	{
		var r=document.getElementById('res');
		r.style.animationPlayState="running";
		applyCSS(".res::before{animation-play-state: running;}","",false);
		applyCSS(".res::after{animation-play-state: running;}","",false);
		var r=document.getElementById('res-content');
		r.style.animationPlayState="running";
		var d = document.getElementById('dyn');
		dyn.style.animationPlayState="running";
		clearTimeout(t);
	}
	r.addEventListener("animationend",function next()
	{
		var rc=document.getElementById('left');
		rc.style.animationPlayState="running";
		var rc=document.getElementById('left_');
		rc.style.animationPlayState="running";
		var rc=document.getElementById('right');
		rc.style.animationPlayState="running";
		var rc=document.getElementById('right_');
		rc.style.animationPlayState="running";
		var rc=document.getElementById('dyn');
		rc.style.animationPlayState="running";
		var rc=document.getElementById('dyn-content');
		rc.style.animationPlayState="running";
		var rc=document.getElementById('FFNotice');
		rc.style.animationPlayState="running";
		var a = Math.ceil(Math.random()*100);
		if(a>95) 
		{
			var i = document.getElementById("icon");
			i.style.display="inherit";
			i.style.animationPlayState="running";
		}
		});
}
function stopLoading()
{
	var r=document.getElementById('res');
	r.style.animationPlayState="running";
	applyCSS(".res::before{animation-play-state: running;}","",false);
	applyCSS(".res::after{animation-play-state: running;}","",false);
	var r=document.getElementById('res-content');
	r.style.animationPlayState="running";
	var d = document.getElementById('dyn');
	dyn.style.animationPlayState="running";
	r.addEventListener("animationend",function next()
	{
		var r=document.getElementById('left');
		r.style.animationPlayState="running";
		var r=document.getElementById('left_');
		r.style.animationPlayState="running";
		var r=document.getElementById('right');
		r.style.animationPlayState="running";
		var r=document.getElementById('right_');
		r.style.animationPlayState="running";
		var r=document.getElementById('dyn');
		r.style.animationPlayState="running";
		var r=document.getElementById('dyn-content');
		r.style.animationPlayState="running";
		var r=document.getElementById('FFNotice');
		r.style.animationPlayState="running";
	});
	var d = document.getElementById("alertAnimation");
	d.style.visibility="hidden";
	d.style.position="fixed";
}