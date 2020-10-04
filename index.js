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
var Scroll = 0;
var MenuItems;
var Width=0;
var Order;
function load()
{
	request();
	document.body.style.display="";
	t = setTimeout(function(){
		var d = document.getElementById("abortAnimation");
		d.style.visibility="visible";
		d.style.textAlign="Center";
		d.style.position="unset";
		},5000);
	document.body.style.backgroundColor="#FFFFFF";
	document.onreadystatechange=ready();
	for(var i=0;i<document.getElementsByClassName("menu").length;i++)
	{
		Width+=document.getElementsByClassName("menu")[i].clientWidth;
	}
	var currentDay = (new Date().getFullYear()-1)*365.25+(new Date().getMonth()-1)*(365.25/12)+new Date().getDate();
	Order =parseInt(GetRandom((currentDay/(1969*365.25+1)))*9)+1;
	document.body.style.backgroundImage="url('./Resources/Background/"+Order.toString()+"')";
	MenuItems = document.getElementsByClassName("menu");
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
	var autosizeText = ".res::before{"+
	"top:"+-(r.offsetTop/r.offsetHeight*100).toString()+"%;"+
	"left:"+-(r.offsetLeft/r.offsetWidth*100).toString()+"%;right:0%;bottom:0%;"+
	"background-repeat: no-repeat;background-size: cover;background-attachment:fixed;background-position: center;}";
	document.getElementById("AutoSize").innerHTML=autosizeText;
	document.getElementById("AutoSize").innerHTML+=autosizeText.replace("res::","rtt::");

	if(document.body.clientWidth<Width+document.getElementById("Img").width)
	{
		document.getElementById("MenuFloat").style.float="";
		document.getElementById("MenuSide").appendChild(document.getElementById("MenuFloat"));
		document.getElementById("MenuExplander").style.display="";
		for(var i =0;i<document.getElementsByClassName("menu").length;i++)
		{
			document.getElementsByClassName("menu")[i].style.float="none";
			document.getElementsByClassName("menu")[i].style.justifyContent="left";
			document.getElementsByClassName("menu")[i].style.width="auto";
		}
	}
	else
	{
		document.getElementById("MenuFloat").style.float="right";
		document.getElementById("Menu").appendChild(document.getElementById("MenuFloat"));
		document.getElementById("MenuExplander").style.display="none";
		for(var i =0;i<document.getElementsByClassName("menu").length;i++)
		{
			document.getElementsByClassName("menu")[i].style.float="left";
			document.getElementsByClassName("menu")[i].style.justifyContent="";
			document.getElementsByClassName("menu")[i].style.width="";
		}
		closeMenu();
	}

	var scrollstate = 0,uscrollstate=0;
	if(Scroll!=document.documentElement.scrollTop)
		Scroll<document.documentElement.scrollTop?scrollstate=1:scrollstate=-1;
	else
		scrollstate = 0;
	if(uscrollstate!=scrollstate)
	{
		if(Scroll<document.documentElement.scrollTop)
		{
			document.getElementById("Menu").style.transform = "scale(0.75) translateX(calc(-100% / 6)) translateY(calc(-16px * 0.75))";
			document.getElementById("Menu").style.width = "calc(100% / 0.75)";
			document.getElementById("ReturnToTop").style.visibility = "visible";
			document.getElementById("ReturnToTop").style.opacity = "1";
			document.getElementById("ReturnToTop").style.transform="translateY(0px)";
		}
		else
		{
			document.getElementById("Menu").style.transform = "";
			document.getElementById("Menu").style.width = "100%";
			document.getElementById("ReturnToTop").style.opacity = "0";
			document.getElementById("ReturnToTop").ontransitionend = function(){
				if(document.getElementById("ReturnToTop").style.opacity=="0")
					document.getElementById("ReturnToTop").style.visibility = "hidden";
			}
			document.getElementById("ReturnToTop").style.transform="translateY(calc(100% + 32px))";
		}
	}
	Scroll = document.documentElement.scrollTop;
	uscrollstate = scrollstate;
	document.getElementById("GlassEffect").innerHTML= ".res::before,.rtt::before{background-image:url('./Resources/Background/"+Order.toString()+"'); background-color:#FFFFFF;"+
	"filter:blur("+(document.getElementById("res").clientWidth/640*12).toString()+"px) saturate(2);}";
}
var IsExpanded = false;
function closeMenu()
{
	IsExpanded = true;
	expandMenu();
}
function expandMenu()
{
	if(!IsExpanded)
	{
		document.getElementById("MenuSide").style.visibility="";
		document.getElementById("MenuSide").style.transform="translateX(0%)";
		document.getElementById("MenuSide").style.transition= "0.25s cubic-bezier(0, 0, 0, 1)";
		document.getElementById("MenuSideBack").style.transition = "opacity 0.25s cubic-bezier(0,0,0,1)";
		document.getElementById("MenuSideBack").style.opacity ="1";
		document.getElementById("MenuSideBack").style.visibility ="";
		document.getElementById("MenuSide").style.pointerEvents="";
		document.getElementById("MenuSideBack").style.pointerEvents="";
	}
	else
	{
		document.getElementById("MenuSide").style.visibility="hidden";
		document.getElementById("MenuSide").style.transform="translateX(100%)";
		document.getElementById("MenuSide").style.transition= "";
		document.getElementById("MenuSideBack").style.transition = "opacity 0.125s linear";
		document.getElementById("MenuSideBack").style.opacity ="0";
		document.getElementById("MenuSideBack").ontransitionend = function(){
			if(document.getElementById("MenuSideBack").style.opacity=="0")
				document.getElementById("MenuSideBack").style.visibility ="hidden";
		}
		document.getElementById("MenuSide").style.pointerEvents="none";
		document.getElementById("MenuSideBack").style.pointerEvents="none";
	}
	IsExpanded = !IsExpanded;
}
var ResizeClock = setInterval(function(){
	resize();
},0);
function topClick()
{
	window.scrollTo(0,0);
}
function ready()//文档状态
{
	var r=document.getElementById('res');
	if (document.readyState=="complete")
	{
		animated();
		clearTimeout(t);
	}
	r.addEventListener("animationend",function next()
	{
		animationStopped();
		clearTimeout(ResizeClock);
	});
}
function animationStopped()//中止动画
{
	var rc=document.getElementById('dyn');
	rc.style.animationPlayState="running";
	var rc=document.getElementById('dyn-content');
	rc.style.animationPlayState="running";
}
function animated()
{
	var r=document.getElementById('res');
	r.style.animationPlayState="running";
	document.getElementById("CustomCSS").innerHTML=".res::before{animation-play-state: running;}";
	document.getElementById("CustomCSS").innerHTML+=".res::after{animation-play-state: running;}";
	var r=document.getElementById('res-content');
	r.style.animationPlayState="running";
	var dyn = document.getElementById('dyn');
	dyn.style.animationPlayState="running";
}
function stopLoading()
{
	var r=document.getElementById('res');
	animated();
	r.addEventListener("animationend",function next()
	{
		animationStopped();//提前中止动画
	});
	var d = document.getElementById("aabortAnimation");
	d.style.visibility="hidden";
	d.style.position="fixed";
}