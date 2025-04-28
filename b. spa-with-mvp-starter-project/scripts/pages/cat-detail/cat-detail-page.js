import { parsePathnameSegments } from '../../routes/url-parser.js'; 
import CatsLocal from '../../data/local/cats.js';
import { generateCatDetailTemplate } from '../../templates.js';

export default class CatDetailPage {
    async render() {
      return `
        <div id="cat-detail"></div>
   
        <p>Oke, sudah cukup. Kita bisa kembali ke <a href="#/">halaman home</a>.</p>
      `;
    }
   
    async afterRender() {
      const pathname = location.hash.replace('#', '') || '/';
      const segments = parsePathnameSegments(pathname);
    
      const id = segments.id;
      const cat = await CatsLocal.getCatById(Number(id));
      const container = document.getElementById('cat-detail');
      container.innerHTML = generateCatDetailTemplate(cat);
    }
  }