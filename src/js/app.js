import '../scss/main.scss';
import { initGsap } from './modules/gsap';
import { initFullPage } from './modules/fullpage';

document.addEventListener('DOMContentLoaded', () => {
  initGsap();
  initFullPage();
})