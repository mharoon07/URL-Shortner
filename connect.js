const mongoose = require("mongoose");

async function ConnecttoDB(Url)
{
   try {
    await  mongoose.connect(Url);
    
   } catch (error) {
    console.error(error);
   }
    

}
module.exports = {
    ConnecttoDB,
}


