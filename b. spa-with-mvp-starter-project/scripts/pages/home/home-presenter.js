import {sleep} from '../../utils.js';

export default class HomePresenter {
    #model;
    #view;
   
    constructor({ model, view }) {
      this.#model = model;
      this.#view = view;
      // this.#view.showLoading();
    }
   
    // async showCats() {
    //   const cats = await this.#model.getAllCats();
    //   this.#view.showCats(cats);
    // }


    async showCats() {
      this.#view.showLoading();
     
      const cats = await this.#model.getAllCats();
      this.#view.showCats(cats);
     
      this.#view.hideLoading();
    }

    async getCats() {
      this.#view.showLoading();
   
      const cats = await this.#model.getAllCats();
      await sleep();
      this.#view.showCats(cats);
   
      this.#view.hideLoading();
    }

  } 