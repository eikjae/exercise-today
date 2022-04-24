import { Music } from '../db';
import {
    filterAuth,
    titleMergeSort,
    yearMergeSort,
    randomize,
    nAuth,
    orderbyAuth,
    getRequiredComponentMusics,
} from '../utils/music';

class musicService {
    static async getMusics() {
        const musics = await Music.findAll();

        if (!musics) {
            const errorMessage = '노래가 비어있습니다.';
            return { errorMessage };
        }
        const resultMusics = getRequiredComponentMusics(musics);
        return { musics: resultMusics };
    }

    static async getMusicsBy({ filter, orderby, limit }) {
        limit = Math.ceil(limit);
        if (!filterAuth(filter)) {
            const errorMessage =
                'filter의 설정값이 잘못되었거나 필수 설정값들이 없습니다.';
            return { errorMessage };
        }

        if (!orderbyAuth(orderby)) {
            const errorMessage = 'orderby 값이 유효하지 않습니다.';
            return { errorMessage };
        }
        if (!nAuth(limit)) {
            const errorMessage = 'limit 값이 유효하지 않습니다.';
            return { errorMessage };
        }
        const filteredMusics = await Music.findByFilter({ filter });

        const limitedMusics = filteredMusics.slice(0, limit);
        let orderbyMusics;
        if (orderby === 'title') {
            orderbyMusics = titleMergeSort(limitedMusics);
        } else if (orderby === '-title') {
            orderbyMusics = titleMergeSort(limitedMusics).reverse();
        } else if (orderby === 'year') {
            orderbyMusics = yearMergeSort(limitedMusics);
        } else if (orderby === '-year') {
            orderbyMusics = yearMergeSort(limitedMusics).reverse;
        } else {
            orderbyMusics = randomize(filteredMusics).slice(0, limit);
        }
        console.log(orderbyMusics);
        const resultMusics = getRequiredComponentMusics(orderbyMusics);

        return { musics: resultMusics };
    }
}
export { musicService };
