function displayMessage(event){

    let value=event.target.value;
    let input_id=event.target.id;

    let name_reg=new RegExp('[A-Za-z\\s]+$');

    let valid=true;


    if(input_id==='name'){
        if(value===""){
            document.getElementById("name_msg").innerText="This feild cannot be blank"
            document.getElementById("name_msg").style.display="flex";
            valid=false;
        }
        else{
            if(name_reg.test(value) !==true){
                document.getElementById("name_msg").innerText="This feild cannot contain numbers"
                document.getElementById("name_msg").style.display="flex";
                valid=false;
            }
        }
    }

    if(valid===true){
        document.getElementById("name_msg").style.display="none";
    }
}