import { getActiveRoute } from './routes/url-parser.js';
import routes from './routes/routes.js';

export default class App {
  #content;

  constructor({ content }) {
    this.#content = content;
  }

  async renderPage() {
    const routeName = getActiveRoute();
    const route = routes[routeName];
   
    // Get page instance
    const page = route();
   
    this.#content.innerHTML = await page.render();
    await page.afterRender();

    if(!document.startViewTransition) {
      this.#content.innerHTML = await page.render();
      await page.afterRender();

      return;
    }

        // Update DOM with view transition
        document.startViewTransition(async () => {
          this.#content.innerHTML = await page.render();
          await page.afterRender();
        });

  }
}
