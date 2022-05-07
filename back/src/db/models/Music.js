import { MusicModel } from "../schemas/music";

class Music {
  static async findById({ music_id }) {
    const music = await MusicModel.findOne(
      { id: music_id },
      {
        _id: false,
        musicId: true,
        title: true,
        artists: true,
        artist_ids: true,
        year: true,
        image_link: true,
      }
    );
    return music;
  }

  static async findByFilter({ filter }) {
    const [minTempo, maxTempo] = filter.Tempo;
    const [minDanceability, maxDanceability] = filter.Danceability;
    const [minYear, maxYear] = filter.Year;
    const [minEnergy, maxEnergy] = filter.Energy;

    const filteredMusics = await MusicModel.find(
      {
        $and: [
          { tempo: { $gte: minTempo, $lte: maxTempo } },
          { danceability: { $gte: minDanceability, $lte: maxDanceability } },
          { year: { $gte: minYear, $lte: maxYear } },
          { energy: { $gte: minEnergy, $lte: maxEnergy } },
        ],
      },
      {
        _id: false,
        musicId: true,
        title: true,
        artists: true,
        artist_ids: true,
        year: true,
        image_link: true,
      }
    );
    return filteredMusics;
  }

  static async findAllField() {
    const musics = await MusicModel.find({}).lean();
    return musics;
  }
  static async findAllRequiredField() {
    const musics = await MusicModel.find(
      {},
      {
        _id: false,
        musicId: true,
        title: true,
        artists: true,
        artist_ids: true,
        year: true,
        image_link: true,
      }
    );
    return musics;
  }

  static async findByMusicId({ musicId }) {
    const music = await MusicModel.findOne({ musicId });
    return music;
  }
}

export { Music };
