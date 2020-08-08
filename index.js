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
		var d = document.getElementById("alertAnimation");
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
		switch(argument)
		{
			case "Surf":self.location.href="https://surf.jackbuehner.com";break;
			case "Fontviewer":self.location.href="https://github.com/l-thoms/Fontviewer/raw/master/Fontviewer/bin/x86/Release/Fontviewer.exe";break;
			case "Fontviewer.wpf":self.location.href="https://github.com/l-thoms/Fontviewer/raw/master/Fontviewer.wpf/Fontviewer.wpf/bin/x86/Release/Fontviewer.wpf.exe";break;
			case "Snake":self.location.href="./Snake.zip";break;
		}
	}
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
	var ff = document.getElementById("FFFooter");
	//f.style.maxWidth=(document.documentElement.offsetWidth-
	//document.getElementById("left_").clientWidth-
	//document.getElementById("right_").clientWidth-12).toString()+"px";
	
	if(document.documentElement.offsetHeight<=document.documentElement.clientHeight)
	{
		ff.style.position = "fixed";
		ff.style.width = document.documentElement.offsetWidth.toString()+"px";
		ff.style.left = "0px"
		ff.style.bottom = "6px";
	}
	else
	{
		ff.style.position = "relative";
		ff.style.width = "unset";
	}
	if(f.clientWidth>document.documentElement.offsetWidth-document.getElementById("left_").clientWidth-document.getElementById("right_").clientWidth)
	{
		ff.style.left = (document.getElementById("left_").clientWidth).toString()+"px";
		ff.style.width = (document.documentElement.offsetWidth-document.getElementById("left_").clientWidth-document.getElementById("right_").clientWidth).toString()+"px";
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