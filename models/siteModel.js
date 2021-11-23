var mongoose =require ("mongoose");

const siteSchema = new mongoose.Schema({
    homeImage:{type:String,required:"Cannot be emppty"},
    aboutImage:{type:String,required:"Cannot be emppty"},
    aboutText:{type:String,required:"Cannot be emppty"},
    contactImage:{type:String,required:"Cannot be emppty"},
    contactText:{type:String,required:"Cannot be emppty"},
});

module.exports = mongoose.model("Site",siteSchema);