import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const SaveIphone = new Schema({
    iphone:{
        type:Number,
        required:true 
    }
})

SaveIphone.index({id:1})

let adminModel;
if(!mongoose.models.save){
    adminModel = mongoose.model('save',SaveIphone);
}else{
     adminModel = mongoose.model('save');
}


export default adminModel;