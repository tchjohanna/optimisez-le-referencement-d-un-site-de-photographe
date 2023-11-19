
	const images = [
	  {
		tag: "concerts",
		path: "./assets/images/gallery/concerts/aaron-paul-wnX-fXzB6Cw-unsplash", 
	  },
	  {
    	tag: "concerts",
    	path: "./assets/images/gallery/concerts/austin-neill-hgO1wFPXl3I-unsplash",
  	  },
	  {
		tag: "entreprise",
		path: "./assets/images/gallery/entreprise/ali-morshedlou-WMD64tMfc4k-unsplash",
	  },
	  {
		tag: "entreprise",
		path: "assets/images/gallery/entreprise/jason-goodman-tHO1_OuKbg0-unsplash",
	  },
	  {
		tag: "entreprise",
		path: "assets/images/gallery/entreprise/mateus-campos-felipe-Fsgzm8N0hIY-unsplash",
	  },
	  {
		tag: "mariage",
		path: "assets/images/gallery/mariage/hannah-busing-RvF2R_qMpRk-unsplash",
	  },
	  {
		tag: "mariage",
		path: "assets/images/gallery/mariage/jakob-owens-SiniLJkXhMc-unsplash",
	  },
	  {
		tag: "portraits",
		path: "assets/images/gallery/portraits/nino-van-prattenburg--443cl1uR_8-unsplash",
	  },
	  {
		tag: "portraits",
		path: "assets/images/gallery/portraits/ade-tunji-rVkhWWZFAtQ-unsplash",
	  },
	];
	    
	function generateImageTags() {
        const container = document.querySelector('.gallery');
        container.innerHTML = '';

        images.forEach((image) => {
            const img = document.createElement('img');
            img.classList.add('gallery-item', 'img-fluid');
            img.setAttribute('data-gallery-tag', image.tag);
            img.setAttribute('alt', `Image représentant ${image.tag}`);
            
            // Utilisez la nouvelle image 636x636 comme source par défaut
            img.src = `${image.path}-636.webp`; 
            
            // Incluez la nouvelle taille d'image dans le srcset
            img.srcset = `
              ${image.path}-extrasmall.webp 300w,
              ${image.path}-small.webp 600w,
              ${image.path}-636.webp 636w, // Nouvelle taille ajoutée
              ${image.path}-medium.webp 1200w,
              ${image.path}-large.webp 2000w,
              
            `;

            // Assurez-vous que l'attribut sizes correspond aux points d'arrêt réels de votre design
            img.sizes = `
  				(max-width: 300px) 300px,
  				(max-width: 600px) 600px,
  				(max-width: 636px) 636px,
  				(max-width: 900px) 900px,
  				(max-width: 1200px) 1200px,
  				
			`;

            container.appendChild(img);
        });
    }

    document.addEventListener('DOMContentLoaded', generateImageTags);
