import { Music } from '../db';
import {
    filterAuth,
    titleMerge,
    titleMergeSort,
    yearMerge,
    yearMergeSort,
    randomize,
    deepCopy,
    nAuth,
    returnNarr,
    modeAuth,
} from '../utils/music';

class musicService {
    static async getMusics() {
        const musics = await Music.findAll();

        if (!musics) {
            const errorMessage = '노래가 비어있습니다.';
            return { errorMessage };
        }

        const resultMusics = musics.map((music) => {
            const { id, title, artists, artists_ids } = music;
            return {
                id,
                title,
                artists,
                artists_ids,
            };
        });
        return { musics: resultMusics };
    }

    static async getMusicsBy({ filter, mode, limit }) {
        limit = Math.ceil(limit);
        if (!filterAuth(filter)) {
            const errorMessage =
                'filter의 설정값이 잘못되었거나 필수 설정값들이 없습니다.';
            return { errorMessage };
        }

        if (!modeAuth(mode)) {
            const errorMessage = '존재하지 않는 mode값입니다.';
            return { errorMessage };
        }
        if (!nAuth(limit)) {
            const errorMessage = 'limit 값이 유효하지 않습니다.';
            return { errorMessage };
        }
        const filteredMusics = await Music.findByFilter({ filter });

        let result = titleMergeSort(filteredMusics);

        return filteredMusics;
    }
}
export { musicService };
