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

}