let currentPage=1;

function next(){

    currentPage++;
    Open(currentPage);

    setTimeout(function(){
        if(currentPage > 4){
            currentPage=1;

        }

    },700);
    
}

function previous(){
    currentPage--;
    Open(currentPage);

    if(currentPage < 1){
        currentPage=4;
        Open(currentPage);
    }
}

function Open(slideNum){
    let margin=(slideNum-1)*100;
    document.getElementById('slider').style.marginLeft=-(margin)+"%";
    document.getElementById("slider").style.transition=".6s";

}