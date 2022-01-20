"use strict";function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function _next(a){asyncGeneratorStep(f,d,e,_next,_throw,"next",a)}function _throw(a){asyncGeneratorStep(f,d,e,_next,_throw,"throw",a)}var f=a.apply(b,c);_next(void 0)})}}function ufrSetNewsPanel(){return _ufrSetNewsPanel.apply(this,arguments)}function _ufrSetNewsPanel(){return _ufrSetNewsPanel=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(a){var b,c,d,e,f,g,h,i,j,k,l,m;return regeneratorRuntime.wrap(function _callee2$(n){for(;;)switch(n.prev=n.next){case 0:return m=function _populateTheList(){var a=document.querySelector("[data-panel='".concat(g,"']")).querySelector(".panel-list");return k&&0!==k.length?void k.forEach(function(c,d){var f,g=c.link,h=c.title,i=c._embedded,j=c.excerpt;if(0===d)return a.innerHTML+="<hr/>";if("most-seen"!==b){var k,l;h=null===(k=h)||void 0===k?void 0:k.rendered,j=null===(l=j)||void 0===l?void 0:l.rendered}var m=e&&j?"\n\t\t\t<div class=\"col-12 excerpt\">\n\t\t\t\t<span>".concat(j,"</span>\n\t\t\t</div>"):"",n={facebook:"https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURI(g)),twitter:"https://twitter.com/intent/tweet?url=".concat(encodeURI(g),"&text=").concat(encodeURI("Veja este interessante artigo: "+h)),whatsapp:"https://api.whatsapp.com/send?text=".concat(encodeURI(h+"\n"+g))},o="\n\t\t\t<div class=\"col-2 btn-col\">\n\t\t\t\t<div class=\"btn_wrap\">\n        \t\t\t<span>Compartilhar</span>\n        \t\t\t<div class=\"container\">\n            \t\t\t<i class=\"fab fa-facebook-f\"\n            \t\t\t   onclick=\"window.open('".concat(n.facebook,"', '_blank')\"\n            \t\t\t   onauxclick=\"window.open('").concat(n.facebook,"', '_blank')\"\n            \t\t\t></i>\n\n            \t\t\t<i class=\"fab fa-twitter\"\n            \t\t\t   onclick=\"window.open('").concat(n.twitter,"', '_blank')\"\n            \t\t\t   onauxclick=\"window.open('").concat(n.twitter,"', '_blank')\"\n            \t\t\t></i>\n\n            \t\t\t<i class=\"fab fa-whatsapp\"\n            \t\t\t   onclick=\"window.open('").concat(n.whatsapp,"', '_blank')\"\n            \t\t\t   onauxclick=\"window.open('").concat(n.whatsapp,"', '_blank')\"\n            \t\t\t></i>\n        \t\t\t</div>\n        \t\t\t<!-- credits: dribbble.com/YancyMin -->\n    \t\t\t</div>\n\t\t\t</div>\n\t\t");a.innerHTML+="\n\t\t\t\t<div class=\"col-12 box\"\n\t\t\t\t\t title=\"Clique para ler mais\"\n\t\t\t\t\t onclick=\"window.open('".concat(g,"', '_self')\"\n\t\t\t\t\t onauxclick=\"window.open('").concat(g,"', '_blank')\"\n\t\t\t\t>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-12 title\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t").concat(null!==(f=h)&&void 0!==f?f:"","\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t").concat(window.ufrGlobals.isMobile?"":o,"\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t").concat(m,"\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<hr />\n\t\t")}):void(a.innerHTML="<div class=\"not-found\">Nenhum post encontrado.</div>")},l=function _populateTheBox(){var a,c,d,h=document.querySelector("[data-panel='".concat(g,"']")).querySelector(".panel-box"),i=h.querySelector(".title"),j=h.querySelector(".excerpt"),l=h.querySelector(".content"),m=h.querySelector(".fa-facebook-f"),n=h.querySelector(".fa-twitter"),o=h.querySelector(".fa-whatsapp");if(!k||0===k.length)return void(h.innerHTML="<div class=\"not-found\">Nenhum post encontrado.</div>");var p=k[0],q=p.link,r=p._embedded,s=p.thumbnail,t=k[0],u=t.excerpt,v=t.title,w=window.ufrGlobals.themeUrl+"/assets/img/logo/ufr-bg.png",x=r?null===(a=r["wp:featuredmedia"])||void 0===a||null===(c=a[0])||void 0===c?void 0:c.source_url:void 0;if(x&&(w=x),s&&(w=s),"most-seen"!==b){var y,z;v=null===(y=v)||void 0===y?void 0:y.rendered,u=null===(z=u)||void 0===z?void 0:z.rendered}var A={facebook:"https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURI(q.replace("&#038;","&"))),twitter:"https://twitter.com/intent/tweet?url=".concat(encodeURI(q.replace("&#038;","&")),"&text=").concat(encodeURI("Veja este interessante artigo: "+v)),whatsapp:"https://api.whatsapp.com/send?text=".concat(encodeURI(v+"\n"+q.replace("&#038;","&")))};h.style.backgroundImage="url(".concat(w,")"),i.innerHTML=null!==(d=v)&&void 0!==d?d:"",j.innerHTML=e&&u?function strip(a){return a?(a=a.replaceAll(/(<p>|<\/p>)/gm,""),a=a.replaceAll(/(&lt;p>|&lt;\/p>)/gm,""),a=a.replaceAll(/\n/gm," "),a):""}(u):"",f&&(m.onclick=function(){return window.open(A.facebook,"_blank")},n.onclick=function(){return window.open(A.twitter,"_blank")},o.onclick=function(){return window.open(A.whatsapp,"_blank")},m.onauxclick=function(){return window.open(A.facebook,"_blank")},n.onauxclick=function(){return window.open(A.twitter,"_blank")},o.onauxclick=function(){return window.open(A.whatsapp,"_blank")}),h.onclick=function(){return window.open(q.replace("&#038;","&"),"_self")},h.onauxclick=function(){return window.open(q.replace("&#038;","&"),"_blank")}},j=function _getPosts3(){return j=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(a,b,c,d){var e;return regeneratorRuntime.wrap(function _callee$(f){for(;;)switch(f.prev=f.next){case 0:e=window.ufrGlobals.siteUrl+"/wp-json/wp/v2/".concat(d,"?_embed=&_locale=user&per_page=5"),f.t0=a,f.next="most-recent"===f.t0?4:"most-seen"===f.t0?7:"category"===f.t0?10:"tag"===f.t0?13:16;break;case 4:return f.next=6,fetch(e);case 6:return f.abrupt("return",f.sent.json());case 7:return f.next=9,fetch(window.ufrGlobals.siteUrl+"/wp-json/ufr/most-seen-posts?quantity=5");case 9:return f.abrupt("return",f.sent.json());case 10:return f.next=12,fetch(e+"&categories=".concat(b));case 12:return f.abrupt("return",f.sent.json());case 13:return f.next=15,fetch(e+"&tags=".concat(c));case 15:return f.abrupt("return",f.sent.json());case 16:case"end":return f.stop();}},_callee)})),j.apply(this,arguments)},i=function _getPosts2(){return j.apply(this,arguments)},b=a.postType,c=a.postCategory,d=a.postTag,e=a.showExcerpt,f=a.showShareBtn,g=a.panelID,h=a.wpPostType,n.next=7,i(b,c,d,h);case 7:k=n.sent,l(),m();case 10:case"end":return n.stop();}},_callee2)})),_ufrSetNewsPanel.apply(this,arguments)}