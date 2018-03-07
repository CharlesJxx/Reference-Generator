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
        if(b=="专著"){
            document.getElementById("type1").value="M";
        }else if(b=="论文集"){
            document.getElementById("type1").value="C";
        }else if(b=="学位论文"){
            document.getElementById("type1").value="D";
        }else{
            document.getElementById("type1").value="R";
        }
    }

    if(b=="期刊文章"){
        document.getElementById("N1").style.display="none";
        document.getElementById("N2").style.display="block";
        document.getElementById("N3").style.display="none";
        document.getElementById("N4").style.display="none";
        document.getElementById("N5").style.display="none";
        document.getElementById("N6").style.display="none";
        document.getElementById("N7").style.display="none";
        document.getElementById("type2").value="J";
    }

    if(b=="报纸文章"){
        document.getElementById("N1").style.display="none";
        document.getElementById("N2").style.display="none";
        document.getElementById("N3").style.display="block";
        document.getElementById("N4").style.display="none";
        document.getElementById("N5").style.display="none";
        document.getElementById("N6").style.display="none";
        document.getElementById("N7").style.display="none";
        document.getElementById("type3").value="N";
    }

    if(b=="国际、国家标准"){
        document.getElementById("N1").style.display="none";
        document.getElementById("N2").style.display="none";
        document.getElementById("N3").style.display="none";
        document.getElementById("N4").style.display="block";
        document.getElementById("N5").style.display="none";
        document.getElementById("N6").style.display="none";
        document.getElementById("N7").style.display="none";
        document.getElementById("type4").value="S";
    }

    if(b=="专利"){
        document.getElementById("N1").style.display="none";
        document.getElementById("N2").style.display="none";
        document.getElementById("N3").style.display="none";
        document.getElementById("N4").style.display="none";
        document.getElementById("N5").style.display="block";
        document.getElementById("N6").style.display="none";
        document.getElementById("N7").style.display="none";
        document.getElementById("type5").value="P";
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
        document.getElementById("type7").value="Z";
    }
}

function generateS(){
        var N1 = document.getElementById("N1");
        var d= document.getElementById("r");
        if(N1.style.display=="block"){
            var zz1=document.getElementById("Author1").value;
            var bt1=document.getElementById("Title1").value;
            var lx1=document.getElementById("type1").value;
            var gj1=document.getElementById("Country1").value;
            var cb1=document.getElementById("Publisher1").value;
            var nf1=document.getElementById("PublishYear1").value;
            var ks1=document.getElementById("BookStartPage1").value;
            var js1=document.getElementById("BookEndPage1").value;
            d.innerHTML="[1]"+zz1+"."+bt1+"["+lx1+"]"+gj1+":"+cb1+","+nf1+"."+ks1+"-"+js1;
        }

        var N2 = document.getElementById("N2");
        if(N2.style.display=="block"){
            var zz2=document.getElementById("Author2").value;
            var bt2=document.getElementById("Title2").value;
            var lx2=document.getElementById("type2").value;
            var km2=document.getElementById("Kanming2").value;
            var nf2=document.getElementById("PublishYear2").value;
            var j2=document.getElementById("Volume2").value;
            var q2=document.getElementById("Term2").value;
            var ks2=document.getElementById("BookStartPage2").value;
            var js2=document.getElementById("BookEndPage2").value;
            d.innerHTML="[1]"+zz2+"."+bt2+"["+lx2+"]"+"."+km2+","+nf2+","+j2+"("+q2+")"+":"+ks2+"-"+js2;
        }

        var N3 = document.getElementById("N3");
        if(N3.style.display=="block"){
            var zz3=document.getElementById("Author3").value;
            var bt3=document.getElementById("Title3").value;
            var lx3=document.getElementById("type3").value;
            var bzm3=document.getElementById("PaperName3").value;
            var nf3=document.getElementById("PublishYear3").value;
            var bc3=document.getElementById("Edition3").value;
            d.innerHTML="[1]"+zz3+"."+bt3+"["+lx3+"]"+"."+bzm3+","+nf3+"("+bc3+")";
        }

        var N4 = document.getElementById("N4");
        if(N4.style.display=="block"){
            var bzbh4=document.getElementById("StandardNumber4").value;
            var bzmc4=document.getElementById("StandardName4").value;
            var lx4=document.getElementById("type4").value;
            d.innerHTML="[1]"+bzbh4+","+bzmc4+"["+lx4+"]"+".";
        }

        var N5 = document.getElementById("N5");
        if(N5.style.display=="block"){
            var zz5=document.getElementById("Author5").value;
            var bt5=document.getElementById("Title5").value;
            var lx5=document.getElementById("type5").value;
            var gj5=document.getElementById("Country5").value;
            var zlh5=document.getElementById("PatentNo5").value;
            var nf5=document.getElementById("PublishYear5").value;
            d.innerHTML="[1]"+zz5+"."+bt5+"["+lx5+"]"+"."+gj5+":"+zlh5+","+nf5;
        }

        var N7 = document.getElementById("N7");
        if(N7.style.display=="block"){
            var zz7=document.getElementById("Author7").value;
            var bt7=document.getElementById("Title7").value;
            var lx7=document.getElementById("type7").value;
            var gj7=document.getElementById("Country7").value;
            var cb7=document.getElementById("Publisher7").value;
            var nf7=document.getElementById("PublishYear7").value;
            d.innerHTML="[1]"+zz7+"."+bt7+"["+lx7+"]"+"."+gj7+":"+cb7+","+nf7;
        }

}