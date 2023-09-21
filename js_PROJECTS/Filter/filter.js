let products=[
    {
        id:1,
        name:"coke",
        caterogy:"food",
        quantity:20,
        price:45,
        image:"C:\Users\PC\Desktop\webdev\js_PROJECTS\Filter\images\coke.png"
    },
    {
        id:2,
        name:"bag",
        caterogy:"school",
        quantity:112,
        price:5,
        image:"C:\Users\PC\Desktop\webdev\js_PROJECTS\Filter\images\bag.png"
    },
    {
        id:3,
        name:"bag2",
        caterogy:"school",
        quantity:54,
        price:62,
        image:"C:\Users\PC\Desktop\webdev\js_PROJECTS\Filter\images\bag2.png"
    },
    {
        id:4,
        name:"book",
        caterogy:"school",
        quantity:78,
        price:89,
        image:"C:\Users\PC\Desktop\webdev\js_PROJECTS\Filter\images\book.png"
    },
    {
        id:5,
        name:"milk",
        caterogy:"food",
        quantity:40,
        price:32,
        image:"C:\Users\PC\Desktop\webdev\js_PROJECTS\Filter\images\milk.png"
    },

]


let filterStatus=false;
function pullOut(){

    if (filterStatus===false){
        document.getElementById("left_box").style.marginLeft="0px";
        filterStatus=true;
    }

    else{
        document.getElementById("left_box").style.marginLeft="-30%";
        filterStatus=false;

    }
}