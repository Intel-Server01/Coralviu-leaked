!function(){const e={triggerBy:"tag",trigger:"psb-accordion",scriptUrl:"https://cdn.jsdelivr.net/gh/kmacoders/psb-cdn@4.1.1/component-psb-accordion.js",styleUrl:"https://cdn.jsdelivr.net/gh/kmacoders/psb-cdn@4.1.1/component-psb-accordion.css"},t={triggerBy:"tag",trigger:"psb-countdown-timer",scriptUrl:"https://cdn.jsdelivr.net/gh/kmacoders/psb-cdn@4.1.1/component-psb-countdown-timer.js",styleUrl:""},s={triggerBy:"tag",trigger:"psb-justified",scriptUrl:"https://cdn.jsdelivr.net/gh/kmacoders/psb-cdn@4.1.1/component-psb-justified.js",styleUrl:"https://cdn.jsdelivr.net/gh/kmacoders/psb-cdn@4.1.1/component-psb-justified.css"},r={triggerBy:"tag",trigger:"psb-masonry",scriptUrl:"https://cdn.jsdelivr.net/gh/kmacoders/psb-cdn@4.1.1/component-psb-masonry.js",styleUrl:""},n={triggerBy:"tag",trigger:"psb-stats",scriptUrl:"https://cdn.jsdelivr.net/gh/kmacoders/psb-cdn@4.1.1/component-psb-stats.js",styleUrl:""},c={triggerBy:"tag",trigger:"psb-swiper",scriptUrl:"https://cdn.jsdelivr.net/gh/kmacoders/psb-cdn@4.1.1/component-psb-swiper.js",styleUrl:"https://cdn.jsdelivr.net/gh/kmacoders/psb-cdn@4.1.1/component-psb-swiper.css"},i={triggerBy:"tag",trigger:"psb-tab",scriptUrl:"https://cdn.jsdelivr.net/gh/kmacoders/psb-cdn@4.1.1/component-psb-tab.js",styleUrl:"https://cdn.jsdelivr.net/gh/kmacoders/psb-cdn@4.1.1/component-psb-tab.css"},o={triggerBy:"tag",trigger:"psb-teleport",scriptUrl:"https://cdn.jsdelivr.net/gh/kmacoders/psb-cdn@4.1.1/component-psb-teleport.js",styleUrl:""},d={triggerBy:"class",trigger:"imghvr-",scriptUrl:"",styleUrl:"https://cdn.jsdelivr.net/gh/kmacoders/psb-cdn@4.1.1/component-psb-imagehover.css"};function p(e){let t=document.querySelector(`${e.trigger}`);t="tag"===e.triggerBy?document.querySelector(`${e.trigger}`):document.querySelector(`[class*=${e.trigger}]`);const s=document.getElementById(`${e.trigger}-unique-id`),r=Boolean(t)&&!Boolean(s);if(r&&Boolean(e.scriptUrl)){const t=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.id=`${e.trigger}-unique-id`,s.defer=!0,s.src=e.scriptUrl,t.appendChild(s)}if(r&&Boolean(e.styleUrl)){const t=document.getElementsByTagName("head")[0],s=document.createElement("link");s.id=`${e.trigger}-unique-id`,s.rel="stylesheet",s.type="text/css",s.href=e.styleUrl,s.media="all",t.appendChild(s)}}function g(){p(e),p(t),p(s),p(r),p(n),p(c),p(i),p(o),p(d)}document.addEventListener("shopify:section:load",(()=>{g()})),g(),console.log("Installed. Version 5Jun2024 v2 !!!")}();