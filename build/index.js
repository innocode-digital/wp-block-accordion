!function(){"use strict";var e,n={221:function(){var e=window.wp.blocks,n=window.wp.element,o=window.wp.i18n,r=window.wp.blockEditor;(0,e.registerBlockType)("innocode/wp-block-accordion",{edit:function(){return(0,n.createElement)("p",(0,r.useBlockProps)(),(0,o.__)("Accordion – hello from the editor!","innocode-block-accordion"))},save:function(){return(0,n.createElement)("p",r.useBlockProps.save(),(0,o.__)("Accordion – hello from the saved content!","innocode-block-accordion"))},icon:()=>(0,n.createElement)("svg",{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"M31.4 0H4.6C2 0 0 2 0 4.6V11.4C0 14 2 16 4.6 16H31.4C34 16 36 14 36 11.4V4.6C36 2 34 0 31.4 0ZM33 11.4C33 12.2 32.2 13 31.4 13H4.6C3.8 13 3 12.2 3 11.4V4.6C3 3.8 3.8 3 4.6 3H31.4C32.2 3 33 3.8 33 4.6V11.4Z",fill:"black"}),(0,n.createElement)("path",{d:"M31.4 17H4.6C2 17 0 19 0 21.6V21.4C0 24 2 26 4.6 26H31.4C34 26 36 24 36 21.4V21.6C36 19 34 17 31.4 17ZM33 21.4C33 22.2 32.2 23 31.4 23H4.6C3.8 23 3 22.2 3 21.4V21.6C3 20.8 3.8 20 4.6 20H31.4C32.2 20 33 20.8 33 21.6V21.4Z",fill:"black"}),(0,n.createElement)("path",{d:"M31.4 27H4.6C2 27 0 29 0 31.6V31.4C0 34 2 36 4.6 36H31.4C34 36 36 34 36 31.4V31.6C36 29 34 27 31.4 27ZM33 31.4C33 32.2 32.2 33 31.4 33H4.6C3.8 33 3 32.2 3 31.4V31.6C3 30.8 3.8 30 4.6 30H31.4C32.2 30 33 30.8 33 31.6V31.4Z",fill:"black"}))})}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var c=o[e]={exports:{}};return n[e](c,c.exports,r),c.exports}r.m=n,e=[],r.O=function(n,o,t,c){if(!o){var i=1/0;for(f=0;f<e.length;f++){o=e[f][0],t=e[f][1],c=e[f][2];for(var l=!0,a=0;a<o.length;a++)(!1&c||i>=c)&&Object.keys(r.O).every((function(e){return r.O[e](o[a])}))?o.splice(a--,1):(l=!1,c<i&&(i=c));if(l){e.splice(f--,1);var u=t();void 0!==u&&(n=u)}}return n}c=c||0;for(var f=e.length;f>0&&e[f-1][2]>c;f--)e[f]=e[f-1];e[f]=[o,t,c]},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={826:0,46:0};r.O.j=function(n){return 0===e[n]};var n=function(n,o){var t,c,i=o[0],l=o[1],a=o[2],u=0;if(i.some((function(n){return 0!==e[n]}))){for(t in l)r.o(l,t)&&(r.m[t]=l[t]);if(a)var f=a(r)}for(n&&n(o);u<i.length;u++)c=i[u],r.o(e,c)&&e[c]&&e[c][0](),e[i[u]]=0;return r.O(f)},o=self.webpackChunkwp_block_accordion=self.webpackChunkwp_block_accordion||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var t=r.O(void 0,[46],(function(){return r(221)}));t=r.O(t)}();