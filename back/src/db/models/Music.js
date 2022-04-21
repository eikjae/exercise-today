import {MusicModel} from "../schemas/music"

class Music{
    static async findById({music_id}){
        const music=await MusicModel.findOne({id:music_id})
        return music
    }

    static async findByFilter({filters}){
        [minTempo,maxTempo]=filters.Tempo
        [minDanceability,maxDanceability]=filters.Danceability
        [minYear,maxYear]=filters.Year

        const filteredMusics=await MusicModel.find(
            { $and :
                [
                    {"tempo":{$gte : minTempo,$lte :maxTempo}},
                    {"danceability":{$gte : minDanceability,$lte:maxDanceability}},
                    {"year":{$gte:minYear,$lte:minYear}}
                ]
            }
        )
        return filteredMusics
    }

    static async findAll(){
        const musics=await MusicModel.find({})
        return musics
    }
}

export {Music}