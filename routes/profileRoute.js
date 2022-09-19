const mongoose =require("mongoose")
const Profile=mongoose.model("profile")

module.exports=(app)=>{
    app.get(`/profile/get`,async(req,res)=>{
        try{
            const profiles=await Profile.find({});
            return res.send(profiles)

        }
        catch(error){
            return res.send(error)

        }
    });
};