/*! Picturefill - Responsive Images that work today. (and mimic the proposed Picture element with span elements). Author: Scott Jehl, Filament Group, 2012 | License: MIT/GPLv2 */
!function(e){"use strict";e.picturefill=function(){for(var t=e.document.getElementsByTagName("span"),a=0,i=t.length;a<i;a++)if(null!==t[a].getAttribute("data-picture")){for(var n=t[a].getElementsByTagName("span"),r=[],d=0,l=n.length;d<l;d++){var o=n[d].getAttribute("data-media");(!o||e.matchMedia&&e.matchMedia(o).matches)&&r.push(n[d])}var c=t[a].getElementsByTagName("img")[0];if(r.length){var u=r.pop();if(c&&"NOSCRIPT"!==c.parentNode.nodeName){if(u===c.parentNode)continue}else c=e.document.createElement("img"),c.alt=t[a].getAttribute("data-alt");c.src=u.getAttribute("data-src"),u.appendChild(c),c.removeAttribute("width"),c.removeAttribute("height")}else c&&c.parentNode.removeChild(c)}},e.addEventListener?(e.addEventListener("resize",e.picturefill,!1),e.addEventListener("DOMContentLoaded",function(){e.picturefill(),e.removeEventListener("load",e.picturefill,!1)},!1),e.addEventListener("load",e.picturefill,!1)):e.attachEvent&&e.attachEvent("onload",e.picturefill)}(this);