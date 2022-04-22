import {Schema,model} from "mongoose"

const MusicSchema=new Schema(
    {
        id:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        artists:{
            type:String,
            required:true
        },
        artists_ids:{
            type:String,
            required:true
        },
        danceability:{
            type:Number,
            required:true
        },
        tempo:{
            type:Number,
            required:true
        },
        year:{
            type:Number,
            required:true
        },
        energy:{
            type:Number,
            required:true
        }
    }
)
const MusicModel=model("Music",MusicSchema)

export {MusicModel}

