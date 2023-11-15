// load-scripts.js

if (typeof jQuery !== 'undefined') {
    // Chargez maugallery.js et scripts.js en async
    var maugalleryScript = document.createElement('script');
    maugalleryScript.src = './assets/maugallery.js';
    maugalleryScript.async = true;
    document.head.appendChild(maugalleryScript);

    var scriptsScript = document.createElement('script');
    scriptsScript.src = './assets/scripts.js';
    scriptsScript.async = true;
    document.head.appendChild(scriptsScript);
} else {
    console.error('jQuery is not defined. Make sure it is loaded before this script.');
}
