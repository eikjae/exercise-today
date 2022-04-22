import { Router } from "express";
import {musicService} from "../services/musicService"
const musicRouter=Router()

musicRouter.get("/musics",
    async function(req,res,next){
        try{
            const musics=await musicService.getMusics()
            res.status(200).json(musics)
        } catch(error){
            next(error)
        }
    }
)

musicRouter.post("/musics/by",
    async function(req,res,next){
        try{
            const  filter=req.body.filter
            const mode=req.body.mode
            const limit=req.body.limit
            const filteredMusics=await musicService.getMusicsBy({filter,mode,limit})
            if (filteredMusics.errorMessage) {
                throw new Error(filteredMusics.errorMessage);
            }
            res.status(200).json(filteredMusics)
        }catch(error){
            next(error)
        }
    }
)

export {musicRouter}