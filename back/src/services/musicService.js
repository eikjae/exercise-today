import { Music } from "../db";
import {
  titleMergeSort,
  yearMergeSort,
  randomize,
  nAuth,
  orderbyAuth,
  getRequiredComponentMusics,
} from "../utils/music";

class musicService {
  static async getMusics() {
    const musics = await Music.findAll();

    if (!musics) {
      const errorMessage = "노래가 비어있습니다.";
      return { errorMessage };
    }
    const resultMusics = getRequiredComponentMusics(musics);
    return { musics: resultMusics };
  }

  static async getMusicsBy({ filter, orderby, limit }) {
    const filteredMusics = await Music.findByFilter({ filter });

    const limitedMusics = filteredMusics.slice(0, limit);
    let orderbyMusics;
    if (orderby === "title") {
      orderbyMusics = titleMergeSort(limitedMusics);
    } else if (orderby === "-title") {
      orderbyMusics = titleMergeSort(limitedMusics).reverse();
    } else if (orderby === "year") {
      orderbyMusics = yearMergeSort(limitedMusics);
    } else if (orderby === "-year") {
      orderbyMusics = yearMergeSort(limitedMusics).reverse();
    } else {
      orderbyMusics = randomize(filteredMusics).slice(0, limit);
    }
    console.log(orderbyMusics);
    const resultMusics = getRequiredComponentMusics(orderbyMusics);

    return { musics: resultMusics };
  }
}
export { musicService };
