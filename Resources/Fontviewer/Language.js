function InitLanguage()
{
    //alert(window.navigator.language);
    var lang = window.navigator.language.toLowerCase();
    if(lang.indexOf("cn")>-1)return;
    else if (lang.indexOf("tw")>-1||lang.indexOf("hk")>-1) ChineseTraditional();
    else English();
}

function ChineseTraditional()
{
    LaMain.innerText = "字形";
    LangRightBtn = "按右鍵查看更多選項";
    BuSelect.value = "選擇字形";
    LaUnderLine.innerText = "下劃線";
    LaTopLine.innerText = "頂線";
    LaThrough.innerText = "刪除線";
    LaWeight.innerText = "粗細：";
    LaStyle.innerText = "傾斜：";
    BuSelectClose.innerText = "関閉";
    FontFamilyHint.innerText = "請直接輸入字形名稱";
    ItBGCl.innerText = "純色"
    ItBGPh.innerText = "圖片";
    ItCl.innerText = "顏色";
    ItFi.innerText = "從文件中選擇字形";
}

function English()
{
    LaMain.innerText = "Fontviewer";
    LangRightBtn = "Right click to show more options";
    BuSelect.value = "Select font";
    LaUnderLine.innerText = "Underline";
    LaTopLine.innerText = "Topline";
    LaThrough.innerText = "Line-through";
    LaSize.innerText = "Size:";
    LaWeight.innerText = "Weight:";
    LaStyle.innerText = "Style:";
    LaStretch.innerText = "Stretch:";
    BuSelectClose.innerText = "Close";
    BuLongOK.value = "OK";
    FontFamilyHint.innerText = "Type the font family name here";
    ItBGTitle.innerText = "Background";
    ItBGCl.innerText = "Soild"
    ItBGPh.innerText = "Picture";
    ItCl.innerText = "Color";
    ItFi.innerText = "Choose a font from file";
    StrTextRendering = "Text rendering: ";
    StrSubPixel = "Subpixel";
    StrGrayScale = "Grayscale";
    StrSpOrGs = "Subpixel or grayscale";
    StrSubPixel2 = "The second subpixel";
    StrGrayScale2 = "The second grayscale";
}