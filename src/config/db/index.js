const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/NTN_F8_dev');
    console.log('Connect successful')
    } catch (error){
        console.log('cf')
    }

}

module.exports={connect};