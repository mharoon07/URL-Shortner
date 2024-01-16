const mongoose = require('mongoose')

const UrlSchema = new mongoose.Schema({
    shortid:{type:String,
    required:true
},
MainUrl:{
    type:String,
    required:true
}
,
Urlclicks:{
    timestamp:{
    type:Number
}}


},
{timestamps:true
})
const UrlModel = mongoose.model("url_selves",UrlSchema)
module.exports = UrlModel