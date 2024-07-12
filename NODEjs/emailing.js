const nodemailer=require("nodemailer");

let transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"maryturneru42@gmail.com",
        pass:"moee wepa malx eknx",
    }
})

let mailbody={
    from:"maryturneru42@gmail.com",
    to:"donnahaytempleton1230@gmail.com , marycodes22@gmail.com",
    subject:"testing email",
    text:"This is a testing email logics and functionality"
}

transporter.sendMail(mailbody,function(err,info){
    if(err===null){
        console.log(info);
    }
})