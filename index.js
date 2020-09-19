function rnd(seed)
{
	var x = Math.abs(365.25*Math.pow(Math.round(seed%36525),2.5) % 2 -1);
	return x;
}
var t;
function GetRandom(seed)
{
	var floatSeed = parseFloat(seed);
	return Math.abs(Math.abs(Math.pow(floatSeed*1024,3)-Math.floor(Math.pow(floatSeed*1024,3)))*2-1);
}
function load()
{
	request();
	t = setTimeout(function(){
		var d = document.getElementById("abortAnimation");
		d.style.visibility="visible";
		d.style.textAlign="Center";
		d.style.position="unset";
		},5000);
	//document.body.style.backgroundImage="url('https://raw.githubusercontent.com/l-thoms/Thoms-World/master/NewMap-full.svg')";
	document.body.style.backgroundColor="#FFFFFF";
	document.onreadystatechange=ready();
	var width=0;
	for(var i=0;i<document.getElementsByClassName("menu").length;i++)
	{
		width+=document.getElementsByClassName("menu")[i].clientWidth;
	}
	document.getElementById("MenuContent").style.width = width.toString()+"px";
	var currentDay = (new Date().getFullYear()-1)*365.25+(new Date().getMonth()-1)*(365.25/12)+new Date().getDate();
	var order =parseInt(GetRandom((currentDay/(1969*365.25+1)))*6)+1;
	//alert(order);
	document.body.style.backgroundImage="url('./Resources/Background/"+order.toString()+"')";
	applyCSS(".res::before{background-image:url('./Resources/Background/"+order.toString()+"'); background-color:#FFFFFF}","glassEffect",false);
	resize();
}
function request()
{
	var url = location.search;
	if(url.indexOf("?")!=-1)
	{
		var argument = url.substring(1);
		switch(argument.toLowerCase())
		{
			case "surf":window.location.href="https://surf.jackbuehner.com";break;
			case "fontviewer":window.location.href="./Resources/Fontviewer";break;
			case "snake":window.location.href="./Resources/Snake.zip";break;
			case "yueping":
			case "jyutping":window.location.href="http://www.iso10646hk.net/jp/database/index.jsp";break;
		}
	}
}
function resize()
{
	var r=document.getElementById('res');//调整亚克力效果
	var dw= document.documentElement.clientWidth.toString();
	var dh= document.documentElement.clientHeight.toString();
	applyCSS(".res::before{"+
	"top:-"+(r.offsetTop/r.offsetHeight*100).toString()+"%;"+
	"left:-"+(r.offsetLeft/r.offsetWidth*100).toString()+"%;"+
	"right:-"+((dw-r.offsetWidth-r.offsetLeft)/r.offsetWidth*100).toString()+"%;"+
	"bottom:-"+((dh-r.offsetHeight-r.offsetTop)/r.offsetHeight*100).toString()+"%;"+
	"background-repeat: no-repeat;background-size: cover;background-attachment:fixed;background-position: center;}",
	"autoSize",true);

	var u = navigator.userAgent;
	if(u.indexOf("Android") > -1||u.indexOf("iPhone") > -1)//适配手机页面缩放
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
	document.body.clientWidth<document.getElementById("MenuContent").clientWidth+document.getElementById("Img").clientHeight+16?
	document.getElementById("MenuFloat").style.float="":document.getElementById("MenuFloat").style.float="right";
}
function applyCSS(t,id,isremoved)//添加CSS元素
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
function ready()//文档状态
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
		animationStopped();
		//var a = Math.ceil(Math.random()*100);
		//if(a>95) 
		//{
		//	var i = document.getElementById("icon");
		//	i.style.display="inherit";
		//	i.style.animationPlayState="running";
		//}
	});
}
function animationStopped()//中止动画
{
	var rc=document.getElementById('dyn');
	rc.style.animationPlayState="running";
	var rc=document.getElementById('dyn-content');
	rc.style.animationPlayState="running";
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
		animationStopped();//提前中止动画
	});
	var d = document.getElementById("aabortAnimation");
	d.style.visibility="hidden";
	d.style.position="fixed";
}