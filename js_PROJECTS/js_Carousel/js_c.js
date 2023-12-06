let currentPage=1;

// function to move to next image
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

    reset();


}



// function to move to previous image

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

   reset();
}
let indicators=document.getElementsByClassName("indicator");




// function to open to  image
function Open(slideNum){
    let margin=(slideNum)*100;
    document.getElementById('slider').style.marginLeft=-(margin)+"%";

    // this code disables the buttons from working when a slider is a motion
    document.getElementById("previous").classList.add("disabled");
    document.getElementById("next").classList.add("disabled");

    for (let a=0;a<indicators.length;a++){
        indicators[a].classList.add("disabled");
    }


    setTimeout(function(){
        document.getElementById("previous").classList.remove("disabled");
        document.getElementById("next").classList.remove("disabled");

        for (let a=0;a<indicators.length;a++){
            indicators[a].classList.remove("disabled");
        }

    },700);
    ////////////////////////////////////////////////////

    for(let i=0;i<indicators.length;i++){
        if(slideNum===i+1){
            indicators[i].classList.add("active");
        }
        else{
            indicators[i].classList.remove("active");
        }
    } 
}


// function to move with indicators
function indicate(slideNum){
    if(slideNum >=1 && slideNum <=4)
    {
        Open(slideNum); 
        document.getElementById("slider").style.transition=".0s";
    }
}






let move=setInterval(function(){
    next();
},3000);

function reset(){
    clearInterval(move);
    move=setInterval(function(){
        next();
    },3000);  
}