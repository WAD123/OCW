const crypto=require('crypto');
// const salt="8L2ISD3PFa";
const salt="eCwWELxi"; //test
// const salt="8L2ISD3PFa";
// const key=
var hashSequence="key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5|udf6|udf7|udf8|udf9|udf10";

module.exports = {
    generate: function(paymentFields,callback){
        var hashString='';
        var tmpArr=hashSequence.split("|");
        for(var i=0;i<tmpArr.length;i++){
            var tmpVal=paymentFields[tmpArr[i]]
            if(tmpVal){
                hashString+=tmpVal;
            }
            hashString+="|";
        }
        hashString+=salt;
        // var hash=crypto.createHmac('sha512', hashString);
        console.log(crypto.getHashes());
        var hash=crypto.createHmac('sha512', hashString).digest('hex');
        paymentFields['hash']=hash;
        paymentFields['hash_string']=hashSequence;
        console.log(paymentFields);
        callback(paymentFields);
    }
}
