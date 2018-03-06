function selectS(){
    var a=document.getElementById("wenxian").selectedIndex;
    var b=document.getElementsByTagName("option")[a].value;
    if(b=="专著" || b=="论文集" || b=="学位论文" || b=="报告"){
        document.getElementById("N1").style.display="block";
        document.getElementById("N2").style.display="none";
        document.getElementById("N3").style.display="none";
        document.getElementById("N4").style.display="none";
        document.getElementById("N5").style.display="none";
        document.getElementById("N6").style.display="none";
        document.getElementById("N7").style.display="none";
    }

    if(b=="期刊文章"){
        document.getElementById("N1").style.display="none";
        document.getElementById("N2").style.display="block";
        document.getElementById("N3").style.display="none";
        document.getElementById("N4").style.display="none";
        document.getElementById("N5").style.display="none";
        document.getElementById("N6").style.display="none";
        document.getElementById("N7").style.display="none";
    }

    if(b=="报纸文章"){
        document.getElementById("N1").style.display="none";
        document.getElementById("N2").style.display="none";
        document.getElementById("N3").style.display="block";
        document.getElementById("N4").style.display="none";
        document.getElementById("N5").style.display="none";
        document.getElementById("N6").style.display="none";
        document.getElementById("N7").style.display="none";
    }

    if(b=="国际、国家标准"){
        document.getElementById("N1").style.display="none";
        document.getElementById("N2").style.display="none";
        document.getElementById("N3").style.display="none";
        document.getElementById("N4").style.display="block";
        document.getElementById("N5").style.display="none";
        document.getElementById("N6").style.display="none";
        document.getElementById("N7").style.display="none";
    }

    if(b=="专利"){
        document.getElementById("N1").style.display="none";
        document.getElementById("N2").style.display="none";
        document.getElementById("N3").style.display="none";
        document.getElementById("N4").style.display="none";
        document.getElementById("N5").style.display="block";
        document.getElementById("N6").style.display="none";
        document.getElementById("N7").style.display="none";
    }

    if(b=="电子文献"){
        document.getElementById("N1").style.display="none";
        document.getElementById("N2").style.display="none";
        document.getElementById("N3").style.display="none";
        document.getElementById("N4").style.display="none";
        document.getElementById("N5").style.display="none";
        document.getElementById("N6").style.display="block";
        document.getElementById("N7").style.display="none";
    }

    if(b=="各种未定义类型的文献"){
        document.getElementById("N1").style.display="none";
        document.getElementById("N2").style.display="none";
        document.getElementById("N3").style.display="none";
        document.getElementById("N4").style.display="none";
        document.getElementById("N5").style.display="none";
        document.getElementById("N6").style.display="none";
        document.getElementById("N7").style.display="block";
    }
}