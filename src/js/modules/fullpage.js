import fullpage from "fullpage.js";

export function initFullPage() {
  const fullPageInstance = new fullpage("#fullpage", {
    licenseKey: 'gplv3-license',
    anchors:['01', '02', '03'],
    scrollOverflow: false,
    menu: '.nav_menu',
  });
}
