// function displayMessage(event){

//     let value=event.target.value;
//     let input_id=event.target.id;

//     let name_reg=new RegExp('[A-Za-z\\s]+$');

//     let valid=true;


//     if(input_id==='name'){
//         if(value===""){
//             document.getElementById("name_msg").innerText="This feild cannot be blank"
//             document.getElementById("name_msg").style.display="flex";
//             valid=false;
//         }
//         else{
//             if(name_reg.test(value) !==true){
//                 document.getElementById("name_msg").innerText="This feild cannot contain numbers"
//                 document.getElementById("name_msg").style.display="flex";
//                 valid=false;
//             }
//         }
//     }

//     if(valid===true){
//         document.getElementById("name_msg").style.display="none";
//     }
// }

let data=[
    {
        blank:"This feild cannot be blank",
        error:"This feild cannot contain numbers",
        id_msg:"name_msg",
        exp:"[A-Za-z\\s]+$",
        value:null,
        isValid:false,
    },
    {
        blank:"This feild cannot be blank",
        error:"characters followed by an @ sign, followed by more characters, and then a '.'",
        id_msg:"email_msg",
        exp:"[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$",
        value:null,
        isValid:false,
    },
    {
        blank:"This feild cannot be blank",
        error:"Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters",
        id_msg:"password_msg",
        exp:"(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
        value:null,
        isValid:false,
    }
];


// function to display error message
function displayMessage(event){
    let value=event.target.value;
    let feild_id=event.target.id;

    if(feild_id==="name"){ 
        data[0].value=value;
        checkValidation(data[0]);
    }
    else if(feild_id==="email"){
        data[1].value=value
        checkValidation(data[1]);

    }
    else if(feild_id==="password"){
        data[2].value=value;
        checkValidation(data[2]);

    }

    let tempData=data.filter(function(element,index){
        return element.isValid===true;
    })

    if(tempData.length===data.length){
        document.getElementById("btn").disabled=false;
        document.getElementById("btn").style.cursor="pointer";
    }
    else
    {
        document.getElementById("btn").disabled=true;
        document.getElementById("btn").style.cursor="not-allowed";
    }

}


// function to check for validation

function validation(value,exp){

    let pattern=new RegExp(exp);

    if(value===''){
        return 1;
    }
    else if(pattern.test(value) !==true){
        return 2;
    }
    
    return true;

}



function checkValidation(input_Data){
    let status=validation(input_Data.value,input_Data.exp);
    let message=null;

    if(status !==true){
        if(status===1){
            message=input_Data.blank;   
            document.getElementById(input_Data.id_msg).style.display="flex";
            document.getElementById(input_Data.id_msg).innerText=message;
    
        }
        else if(status===2){
            message=input_Data.error;
            document.getElementById(input_Data.id_msg).style.display="flex";
            document.getElementById(input_Data.id_msg).innerText=message;
        }
    }
    else{
        document.getElementById(input_Data.id_msg).style.display="none";
        input_Data.isValid=true;
    }
}


