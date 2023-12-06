let currentPage=1;


function next(){

    currentPage++;
    document.getElementById("slider").style.transition=".6s";
    Open(currentPage);

    setTimeout(function(){
        if(currentPage > 4){
            currentPage=1;
            document.getElementById("slider").style.transition=".0s";
            Open(currentPage);
        }

    },700);

    let move=setInterval(function(){
        next();
    },3000);
    clearInterval(move);



}

function previous(){
    currentPage--;
    document.getElementById("slider").style.transition=".6s";
    Open(currentPage);

   setTimeout(function(){
    if (currentPage<1){
        currentPage=4;
        document.getElementById("slider").style.transition=".0s";
        Open(currentPage);
    }
   },700);
}

function Open(slideNum){
    let margin=(slideNum)*100;
    document.getElementById('slider').style.marginLeft=-(margin)+"%";


    let indicators=document.getElementsByClassName("indicator");

    for(let i=0;i<indicators.length;i++){
        if(slideNum===i+1){
            indicators[i].classList.add("active");
        }
        else{
            indicators[i].classList.remove("active");
        }
    } 
}

function indicate(slideNum){
    if(slideNum >=1 && slideNum <=4)
    {
        Open(slideNum); 
        document.getElementById("slider").style.transition=".6s";
    }
}

function move(){
    setInterval(function(){
        next();
    },3000);
}
move();