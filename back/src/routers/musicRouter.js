import { Router } from "express";

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

musicRouter.get("/musics/by",
    async function(req,res,next){
        try{
            filter=req.body.filter
            mode=req.body.mode
            const filteredMusics=await musicService.getMusicsBy({filter,mode})
            res.status(200).json(filteredMusics)
        }catch(error){
            res.status(200)
        }
    }
)

export {musicRouter}