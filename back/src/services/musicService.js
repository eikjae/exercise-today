import {Music} from "../db"

class musicService{
    static async getMusics(){
        const musics=await Music.findAll()

        if (!musics) {
        const errorMessage =
            "노래가 비어있습니다.";
        return { errorMessage };
        }
        console.log(musics)
        const resultMusics=musics.map((music)=>{
            const {id,title,artists,artists_ids}=music
            return {
                id,
                title,
                artists,
                artists_ids
            }
        })
        return {musics:resultMusics }
    }

    static async getMusicsBy({filter,mode}){
        // const filteredmusics=await 
    }
}
export {musicService}