import { MusicModel } from "../schemas/music";

class Music {
  static async findById({ music_id }) {
    const music = await MusicModel.findOne({ id: music_id });
    return music;
  }

  static async findByFilter({ filter }) {
    const [minTempo, maxTempo] = filter.Tempo;
    const [minDanceability, maxDanceability] = filter.Danceability;
    const [minYear, maxYear] = filter.Year;
    const [minEnergy, maxEnergy] = filter.Energy;

    const filteredMusics = await MusicModel.find({
      $and: [
        { tempo: { $gte: minTempo, $lte: maxTempo } },
        { danceability: { $gte: minDanceability, $lte: maxDanceability } },
        { year: { $gte: minYear, $lte: maxYear } },
        { energy: { $gte: minEnergy, $lte: maxEnergy } },
      ],
    });
    return filteredMusics;
  }

  static async findAll() {
    const musics = await MusicModel.find({});
    return musics;
  }
}

export { Music };
