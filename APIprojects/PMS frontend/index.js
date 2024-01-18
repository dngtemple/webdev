let allproducts=[];

function getData(){

    fetch("http://localhost:8000/products",{
        method:"GET"
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        allproducts=data;
        console.log(allproducts);

        displayData(allproducts);
    })
    .catch(function(err){
        console.log(err);
    })

}



function displayData(data){

    document.getElementById("add").innerHTML="";
    
    data.forEach(function(product,index){

            let tr=document.createElement("tr");

            let serialTD=document.createElement("td");
            serialTD.append(index+1)
            tr.appendChild(serialTD);

            let nameTD=document.createElement("td");
            nameTD.append(product.name);
            tr.appendChild(nameTD);

            let priceTD=document.createElement("td");
            priceTD.append(product.price);
            tr.appendChild(priceTD);

            let quantityTD=document.createElement("td");
            quantityTD.append(product.quantity);
            tr.appendChild(quantityTD);


            let actionTd=document.createElement("td");

            let upIcon=document.createElement("i");
            upIcon.classList.add("fa-regular");
            upIcon.classList.add("fa-pen-to-square");
            upIcon.onclick=function(){
                setupdate(Number(product.id));
            };
            actionTd.appendChild(upIcon);

            let delIcon=document.createElement("i");
            delIcon.classList.add("fa-solid");
            delIcon.classList.add("fa-trash");
            delIcon.onclick=(function(){
                deleteData(Number(product.id));
            });
            actionTd.appendChild(delIcon);

            tr.appendChild(actionTd);


            document.getElementById("add").append(tr);

            console.log(product);
        })
   
};
getData();

// function to delete product
function deleteData(id){
    fetch(`http://localhost:8000/products?id=${id}`,{
        method:"DELETE",
    })
    .then(function(response){
        return response;
    })
    .then(function(message){
        console.log(message);
        let index=allproducts.findIndex(function(product,index){
            return Number(product.id)===Number(id);
        })
        console.log(index);
        console.log(id);

        if(index !== -1){
            (allproducts).splice(index,1);
             displayData(allproducts);
        }

        
    })
    .catch(function(err){
        console.log(err);
    })

}


// function to add

function adddata(){
    let product={};

    product.id=document.getElementById("id").value;
    product.name=document.getElementById("name").value;
    product.price=document.getElementById("price").value;
    product.quantity=document.getElementById("quantity").value;

    console.log(product);


    fetch("http://localhost:8000/products",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(product),

    })
    .then(function(response){
        return response.json();
    })
    .then(function(message){
        console.log(message);
    })
    .catch(function(err){
        console.log(err);
    })


}


let productUpdate;
function setupdate(id) {
    let product=allproducts.find(function(ele,ind){
        return Number(ele.id)===Number(id);
    })
    productUpdate=product.id;
    document.getElementById("up_id").value=product.id;
    document.getElementById("up_name").value=product.name;
    document.getElementById("up_price").value=product.price;
    document.getElementById("up_quantity").value=product.quantity;

    console.log(product);
    console.log(productUpdate);
}

function update(){
    let product={};

    product.id=document.getElementById("up_id").value;
    product.name=document.getElementById("up_name").value;
    product.price=document.getElementById("up_price").value;
    product.quantity=document.getElementById("up_quantity").value;

    console.log(product);

    fetch(`http://localhost:8000/products?id=${productUpdate}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(product),

    })
    .then(function(response){
        return response.json();
    })
    .then(function(message){
        console.log(message);
    })
    .catch(function(err){
        console.log(err);
    })

}