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
        image:"C:\Users\PC\Desktop\webdev\js_PROJECTS\Filter\images\milk.png",
    }

]



function displayData(){

    products.forEach(function(product,index){
        let row=document.createElement("tr");

        let idTD=document.createElement("td");
        idTD.append(product.id);

        let nameTD=document.createElement("td");
        nameTD.append(product.name);

        let caterogyTD=document.createElement("td");
        caterogyTD.append(product.caterogy);

        let quantityTD=document.createElement("td");
        quantityTD.append(product.quantity);

        let priceTD=document.createElement("td");
        priceTD.append(product.price);

        let imageTD=document.createElement("td");
        let pictureTD=document.createElement("img");
        pictureTD.setAttribute("src",product.image);
        imageTD.appendChild(pictureTD);

        row.appendChild(idTD);
        row.appendChild(nameTD);
        row.appendChild(caterogyTD);
        row.appendChild(quantityTD);
        row.appendChild(priceTD);
        row.appendChild(imageTD);

        document.getElementById("data").appendChild(row);

    })
}

displayData();


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


let filters={
    caterogy:null,
    quantity:null,
    minPrice:null,
    maxPrice:null
}

// function setFilters(property,value){
    
//     let caterogy=document.getElementById("cat").value;
//     console.log(caterogy);

//     let quantity=document.getElementById("quantity").value;
//     console.log(quantity);


//     let miPrice=document.getElementById("minPrice").value;
//     console.log(miPrice)

//     let mPrice=document.getElementById("maxPrice").value;
//     console.log(mPrice);
// }

// setFilters();


function setFilters(property,value){
    if(value !==""){
        filters[property]=value;
    }
    else{
        filters[property]=null;
    }

    console.log(filters);

}

