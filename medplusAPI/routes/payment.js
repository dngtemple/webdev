const express=require("express");
const router=express.Router();
const cors=require("cors")

router.use(cors());


router.post("/paystack",function(req,res){


     console.log(req.body)
    const https = require('https')

    const params = JSON.stringify({
      "email":req.body.email,
      "amount":req.body.amount
    })
    
    const options = {
      hostname: 'api.paystack.co',
      port: 443,
      path: '/transaction/initialize',
      method: 'POST',
      headers: {
        // Authorization: `Bearer ${secretKey}`,
        'Content-Type': 'application/json'
      }
    }
    
    const payreq = https.request(options, payres => {
      let data = ''
    
      payres.on('data', (chunk) => {
        data += chunk
      });
    
      payres.on('end', () => {
        res.send({success:true,data});
        console.log(JSON.parse(data))
      })
    }).on('error', error => {
      console.error(error)
    })
    
    payreq.write(params)
    payreq.end()
    })



module.exports=router;