function rnd(seed)
{
	var x = Math.abs(365.25*Math.pow(Math.round(seed%36525),2.5) % 2 -1);
	return x;
}
var t;
function load()
{
	request();
	t = setTimeout(function(){
		var d = document.getElementById("abortAnimation");
		d.style.visibility="visible";
		d.style.textAlign="Center";
		d.style.position="unset";
		},5000);
	document.body.style.backgroundImage="url('https://raw.githubusercontent.com/l-thoms/Thoms-World/master/NewMap-full.svg')";
	document.body.style.backgroundColor="#FFFFFF";
	applyCSS(".res::before{background-image: url('https://raw.githubusercontent.com/l-thoms/Thoms-World/master/NewMap-full.svg'); background-color:#FFFFFF}","glassEffect",false);
	document.onreadystatechange=ready();
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
			case "fontviewer":window.location.href="https://github.com/l-thoms/Fontviewer/raw/master/Fontviewer/bin/x86/Release/Fontviewer.exe";break;
			case "fontviewer.wpf":window.location.href="https://github.com/l-thoms/Fontviewer/raw/master/Fontviewer.wpf/Fontviewer.wpf/bin/x86/Release/Fontviewer.wpf.exe";break;
			case "snake":window.location.href="./resources/Snake.zip";break;
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
	var f = document.getElementById("FFNotice");
	var ff = document.getElementById("FFFooter");
	
	//ff.style.background="#00ffff";

	if(document.documentElement.offsetHeight<=document.documentElement.clientHeight)//页面高度小于视图高度
	{
		ff.style.position = "fixed";
		ff.style.right = "4px";
		ff.style.left = "4px"
		ff.style.bottom = "6px";
	}
	else
	{
		ff.style.position = "relative";
		ff.style.width = "unset";
	}
	if(f.clientWidth>document.documentElement.offsetWidth-document.getElementById("left_").clientWidth-document.getElementById("right_").clientWidth)
	{
		ff.style.marginRight = (document.getElementById("right_").clientWidth).toString()+"px";	
		ff.style.marginLeft = (document.getElementById("left_").clientWidth).toString()+"px";
	}
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
		var a = Math.ceil(Math.random()*100);
		if(a>95) 
		{
			var i = document.getElementById("icon");
			i.style.display="inherit";
			i.style.animationPlayState="running";
		}
	});
}
function animationStopped()//中止动画
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