let leftStatus=false;

function pullOut(){

    if (leftStatus===false)
    {
        document.getElementById("left").style.marginLeft="0px";
        leftStatus=true;
    }
    else{
        document.getElementById("left").style.marginLeft="-20%"
        leftStatus=false;
    }
}


let products=[
    {
        id:1,
        name:"Noodles",
        category:"food",
        quantity:100,
        price:30,
        color:"blue"
    },

    {
        id:2,
        name:"Coca Cola",
        category:"drink",
        quantity:90,
        price:20,
        color:"red"
    },

    {
        id:3,
        name:"Awake Water",
        category:"drink",
        quantity:120,
        price:10,
        color:"sea blue"
    },

    {
        id:4,
        name:"Oreo",
        category:"food",
        quantity:40,
        price:42,
        color:"pink"
    },

    {
        id:5,
        name:"Cocoa butter",
        category:"cosmetics",
        quantity:10,
        price:78,
        color:"brown"
    }
]

function displayInfo(arr){

    document.getElementById("data").innerHTML='';

    arr.forEach(function(product,index){
        let row=document.createElement("tr");

        let numberTD=document.createElement("td");
        numberTD.append(index+1);

        let nameTD=document.createElement("td");
        nameTD.append(product.name);

        let categoryTD=document.createElement("td");
        categoryTD.append(product.category);

        let quantityTD=document.createElement("td");
        quantityTD.append(product.quantity);

        let priceTD=document.createElement("td");
        priceTD.append(product.price);

        let colorTD=document.createElement("td");
        colorTD.append(product.color);
        

        row.appendChild(numberTD);
        row.appendChild(nameTD);
        row.appendChild(categoryTD);
        row.appendChild(quantityTD);
        row.appendChild(priceTD);
        row.appendChild(colorTD);

        document.getElementById("data").appendChild(row);


    })

}

displayInfo(products);


let filters={
    category:null,
    quantity:null,
    minPrice:null,
    maxPrice:null
}

function setFilters(property,value){

    if (value!==null)
    {
        filters[property]=value;
    }
    else{
        filters[property]=null;
    }

    // console.log(filters);

}


function filt(){
    let filterData=products;

    if(filters.category!==null)
    {
        filterData=products.filter(function(ele,index){
            return filters.category===ele.category;
        })
    }

    if (filters.quantity!==null){
        filterData=filterData.filter(function(ele,index){
            return ele.quantity>=filters.quantity;
        })
    }

    if (filters.minPrice!==null){
        filterData=filterData.filter(function(ele,index){
            return filters.minPrice <=ele.price;
        })
    }

    if (filters.maxPrice!==null){
        filterData=filterData.filter(function(ele,index){
            return filters.maxPrice >=ele.price;
        })
    }

    displayInfo(filterData);

    // console.log(filterData);
}