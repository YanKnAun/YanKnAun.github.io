(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{338:function(t,e,r){var content=r(347);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("7a203bcc",content,!0,{sourceMap:!1})},339:function(t,e,r){var content=r(349);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("74ba3df1",content,!0,{sourceMap:!1})},345:function(t,e,r){var content=r(555);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("70ce2da0",content,!0,{sourceMap:!1})},346:function(t,e,r){"use strict";var n=r(338);r.n(n).a},347:function(t,e,r){(t.exports=r(14)(!1)).push([t.i,".about[data-v-07ad329c]{cursor:default;margin-bottom:15px}.about-contact[data-v-07ad329c]{color:#909399;margin-bottom:10px}.about-contact a[data-v-07ad329c]{text-decoration:none;color:#909399}.about-right[data-v-07ad329c]{color:#909399}",""])},348:function(t,e,r){"use strict";var n=r(339);r.n(n).a},349:function(t,e,r){(t.exports=r(14)(!1)).push([t.i,".skeleton[data-v-e2b32d5a]{width:100%;max-width:935px;margin:0 auto}.skeleton-article[data-v-e2b32d5a]{padding-top:45px}.skeleton-article h1[data-v-e2b32d5a]{height:4rem;background:#f6f6f6}.skeleton-article span[data-v-e2b32d5a]{height:1rem;display:inline-block;width:6rem;background:#f6f6f6;margin-right:10px}.skeleton-article p[data-v-e2b32d5a]{height:2rem;background:#f6f6f6}.skeleton-preview section[data-v-e2b32d5a]{padding:15px;margin-bottom:30px}.skeleton-preview section div[data-v-e2b32d5a]{background:#f6f6f6;height:20vh}.skeleton-preview section span[data-v-e2b32d5a]{height:1rem;display:inline-block;width:6rem;background:#f6f6f6;margin:10px 0}.skeleton-preview section p[data-v-e2b32d5a]{height:1rem;background:#f6f6f6;margin-top:0}",""])},350:function(t,e,r){var content=r(557);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("3990251a",content,!0,{sourceMap:!1})},357:function(t,e,r){"use strict";var n={props:["type"]},o=(r(348),r(16)),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"skeleton"},["article"===t.type?r("div",{staticClass:"skeleton-article"},[r("h1"),t._v(" "),t._l(2,function(t){return r("span",{key:"span"+t})}),t._v(" "),t._l(20,function(t){return r("p",{key:"p"+t})})],2):t._e(),t._v(" "),"preview"===t.type?r("div",{staticClass:"skeleton-preview"},t._l(4,function(e){return r("section",{key:"preview"+e,staticClass:"border"},[r("div"),t._v(" "),r("span"),t._v(" "),t._l(2,function(t){return r("p",{key:"p"+t})})],2)}),0):t._e()])},[],!1,null,"e2b32d5a",null);e.a=component.exports},358:function(t,e,r){"use strict";r(346);var n=r(16),component=Object(n.a)({},function(){var t=this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("section",{staticClass:"about-contact"},[r("a",{attrs:{href:"https://github.com/jrainlau"}},[t._v("Github")]),t._v("\n    ·\n    "),r("a",{attrs:{href:"mailto:jrainlau@gmail.com"}},[t._v("Email")]),t._v("\n    ·\n    "),r("a",{attrs:{href:"https://www.instagram.com/jrainlau/"}},[t._v("Instagram")]),t._v("\n    ·\n    懶得備案\n  ")]),t._v(" "),r("section",{staticClass:"about-right"},[t._v("\n    © 2019 JRAIN LAU\n  ")])])}],!1,null,"07ad329c",null);e.a=component.exports},363:function(t,e,r){"use strict";var n=r(4),o=r(31),c=r(39),l=r(185),m=r(88),d=r(18),f=r(60).f,h=r(89).f,v=r(12).f,x=r(364).trim,y=n.Number,_=y,w=y.prototype,k="Number"==c(r(126)(w)),C="trim"in String.prototype,O=function(t){var e=m(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,c=(e=C?e.trim():x(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,d=l.length;i<d;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,n)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof y&&(k?d(function(){w.valueOf.call(r)}):"Number"!=c(r))?l(new _(O(e)),r,y):O(e)};for(var N,I=r(10)?f(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;I.length>j;j++)o(_,N=I[j])&&!o(y,N)&&v(y,N,h(_,N));y.prototype=w,w.constructor=y,r(20)(n,"Number",y)}},364:function(t,e,r){var n=r(9),o=r(38),c=r(18),l=r(365),m="["+l+"]",d=RegExp("^"+m+m+"*"),f=RegExp(m+m+"*$"),h=function(t,e,r){var o={},m=c(function(){return!!l[t]()||"​"!="​"[t]()}),d=o[t]=m?e(v):l[t];r&&(o[r]=d),n(n.P+n.F*m,"String",o)},v=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(f,"")),t};t.exports=h},365:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},366:function(t,e,r){"use strict";r(367)("link",function(t){return function(e){return t(this,"a","href",e)}})},367:function(t,e,r){var n=r(9),o=r(18),c=r(38),l=/"/g,m=function(t,e,r,n){var o=String(c(t)),m="<"+e;return""!==r&&(m+=" "+r+'="'+String(n).replace(l,"&quot;")+'"'),m+">"+o+"</"+e+">"};t.exports=function(t,e){var r={};r[t]=e(m),n(n.P+n.F*o(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",r)}},554:function(t,e,r){"use strict";var n=r(345);r.n(n).a},555:function(t,e,r){(t.exports=r(14)(!1)).push([t.i,".comments[data-v-64c254c2]{padding:15px 0}.comments-header[data-v-64c254c2]{margin-bottom:15px}.comments-header h1[data-v-64c254c2]{margin:0;font-weight:400}.comments-auth[data-v-64c254c2],.comments-operation[data-v-64c254c2]{margin-bottom:15px;padding:15px}.comments-operation-user[data-v-64c254c2]{display:flex;align-items:center;margin-bottom:15px;color:#909399}.comments-operation-user .avatar[data-v-64c254c2]{width:36px;height:36px;border-radius:36px;overflow:hidden;margin-right:10px}.comments-operation-user .avatar img[data-v-64c254c2]{width:100%;height:100%}.comments-operation-textarea[data-v-64c254c2]{width:100%;margin-bottom:15px}.comments-operation-textarea textarea[data-v-64c254c2]{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;box-sizing:border-box;padding:5px 10px;outline:none;resize:none;color:#333}.comments-operation-textarea textarea[data-v-64c254c2]:focus{border-color:#8e24aa}.comments-list[data-v-64c254c2]{margin-bottom:15px}.comments-list-item[data-v-64c254c2]{position:relative;padding:15px 15px 0;border-bottom:1px solid #e4e7ed}.comments-list-item .reply[data-v-64c254c2]{position:absolute;top:15px;right:15px;cursor:pointer;color:#8e24aa}.comments-list-item .user[data-v-64c254c2]{display:flex;margin-bottom:15px;position:relative}.comments-list-item .user-avatar[data-v-64c254c2]{width:36px;height:36px;border-radius:36px;overflow:hidden}.comments-list-item .user-avatar img[data-v-64c254c2]{width:100%;height:100%}.comments-list-item .user-info[data-v-64c254c2]{margin-left:10px;display:flex;flex-direction:column;justify-content:space-between}.comments-list-item .user-info p[data-v-64c254c2]{margin:0}.comments-list-item .user-info-date[data-v-64c254c2],.comments-list-item .user-info-name[data-v-64c254c2]{color:#909399}",""])},556:function(t,e,r){"use strict";var n=r(350);r.n(n).a},557:function(t,e,r){(t.exports=r(14)(!1)).push([t.i,".article[data-v-91e69a8e]{width:100%;max-width:935px;margin:0 auto;display:flex;flex-direction:column;align-items:center;padding:45px 0 15px;box-sizing:border-box;background:#fff}.article-title[data-v-91e69a8e]{margin-bottom:15px;width:100%}.article-title h1[data-v-91e69a8e]{font-size:2.5rem;border:none;margin-top:0;margin-bottom:15px}.article-title div[data-v-91e69a8e]{font-size:1.2rem;margin:0;color:#909399}.article-title div i[data-v-91e69a8e]{margin-right:10px}.article-title .label[data-v-91e69a8e]{font-size:1rem;padding:2px 8px;border-radius:4px;margin-left:10px;color:#fff}.article-content[data-v-91e69a8e]{width:100%;line-height:1.5}.article-comments[data-v-91e69a8e]{width:100%;border-top:1px dashed #e4e7ed;padding-top:45px;margin-top:45px}.article-comments-reactions[data-v-91e69a8e]{color:#909399;padding:15px;font-size:1.8rem;position:relative}.article-comments-reactions .praised[data-v-91e69a8e]{color:#fcec0e}.article-comments-reactions .liked[data-v-91e69a8e]{color:#f56c6c}.article-comments-reactions .tools[data-v-91e69a8e]{position:absolute;top:0;right:15px;height:100%;display:flex;align-items:center}.article-comments-reactions .tools i[data-v-91e69a8e]{margin-left:15px;cursor:pointer}.article-comments-reactions .tools-qr[data-v-91e69a8e]{position:absolute;width:150px;height:150px;top:-160px;right:0;background:#fff}.article-comments-reactions .tools-qr img[data-v-91e69a8e]{width:100%}@media only screen and (max-width:768px){.article[data-v-91e69a8e]{padding:45px 15px 15px}.article-content[data-v-91e69a8e]{font-size:1.2rem}.article #page-url[data-v-91e69a8e],.article .tools[data-v-91e69a8e]{display:none}}",""])},588:function(t,e,r){"use strict";r.r(e);r(29),r(19),r(17),r(8),r(23),r(125),r(87),r(28);var n=r(2),o=(r(363),r(6)),c=(r(366),r(13)),l=r(343),m=r.n(l),d=r(344),f=r.n(d),h=(r(59),r(61)),v=r.n(h);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,r)}return e}m.a.setOptions({highlight:function(code,t){var e=code;return t&&(e=f.a.highlight(t,code).value),e},sanitize:!0});var y,_={props:["comments","articleNumber","userInfo"],filters:{dateFormat:function(t){var e=new Date(t),r=e.toLocaleDateString("zh").replace(/\//g,"-"),n=e.getHours(),o=e.getMinutes(),c=n<10?"0"+n:n,l=o<10?"0"+o:o;return"".concat(r," ").concat(c,":").concat(l)},markify:function(t){return m()(t)}},data:function(){return{isLogin:!1,commentContent:"",showCommentList:!1}},mounted:function(){this.checkIsLogin()},watch:{userInfo:{deep:!0,handler:function(t){this.checkIsLogin()}}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(source,!0).forEach(function(e){Object(o.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(c.b)(["getUserInfo","getComments","createComment","deleteComment"]),{checkIsLogin:function(){this.isLogin=!!this.userInfo.login},toLogin:function(){document.querySelector("#header-menu-btn").click()},submitComment:(y=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.commentContent,this.commentContent="",t.next=4,this.createComment({articleNumber:this.articleNumber,comment:e});case 4:if(r=t.sent,!(r.status<400)){t.next=14;break}return t.next=9,this.getComments(this.articleNumber);case 9:n=t.sent,this.$emit("updateComments",n),v.a.fire({toast:!0,title:"Commet successed!",type:"success",showConfirmButton:!1,timer:2e3}),t.next=15;break;case 14:v.a.fire({toast:!0,title:"Commet failed!",type:"error",showConfirmButton:!1,timer:2e3});case 15:case"end":return t.stop()}},t,this)})),function(){return y.apply(this,arguments)}),reply:function(t){var e=document.querySelector(".view");e.scrollTop=e.scrollHeight;var r=this.$refs.commentArea;this.commentContent="> ".concat(t.body,"\n\n@").concat(t.user.login," "),r.focus(),this.$nextTick(function(){r.scrollTop=r.scrollHeight})}})},w=(r(554),r(16)),k=Object(w.a)(_,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"comments"},[t.isLogin?t._e():r("div",{staticClass:"comments-auth border"},[r("button",{on:{click:t.toLogin}},[t._v("Login with Github to comment")])]),t._v(" "),t.comments&&t.comments.length?r("div",{staticClass:"comments-list border"},t._l(t.comments,function(e,i){return r("div",{key:i,staticClass:"comments-list-item"},[r("div",{staticClass:"user"},[r("a",{staticClass:"user-avatar",attrs:{href:e.user.html_url,target:"_blank"}},[r("img",{attrs:{src:e.user.avatar_url,alt:""}})]),t._v(" "),r("div",{staticClass:"user-info"},[r("p",{staticClass:"user-info-name"},[t._v(t._s(e.user.login))]),t._v(" "),r("p",{staticClass:"user-info-date"},[t._v(t._s(t._f("dateFormat")(e.created_at)))])])]),t._v(" "),t.isLogin?r("i",{staticClass:"fas fa-reply reply",on:{click:function(r){return t.reply(e)}}}):t._e(),t._v(" "),r("div",{staticClass:"content markdown",domProps:{innerHTML:t._s(t.$options.filters.markify(e.body))}})])}),0):t._e(),t._v(" "),t.isLogin?r("div",{staticClass:"comments-operation border"},[r("div",{staticClass:"comments-operation-user"},[r("div",{staticClass:"avatar"},[r("img",{attrs:{src:t.userInfo.avatarUrl,alt:""}})]),t._v(" "),r("div",{staticClass:"name"},[t._v(t._s(t.userInfo.login))])]),t._v(" "),r("div",{staticClass:"comments-operation-textarea"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentContent,expression:"commentContent"}],ref:"commentArea",staticClass:"border",attrs:{rows:"5"},domProps:{value:t.commentContent},on:{input:function(e){e.target.composing||(t.commentContent=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"comments-operation-button"},[r("button",{attrs:{disabled:!t.commentContent.length},on:{click:t.submitComment}},[t._v("Comment")])])]):t._e()])},[],!1,null,"64c254c2",null).exports,C=r(358),O=r(357);function N(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,r)}return e}function I(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?N(source,!0).forEach(function(e){Object(o.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):N(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}var j=new m.a.Renderer;j.link=function(t,title,text){return'<a target="_blank" href="'.concat(t,'" title="').concat(title,'">').concat(text,"</a>")},j.image=function(t,title,text){return'<a target="_blank" href="'.concat(t,'" title="').concat(title,'"><image src="').concat(t,'" /></a>')},m.a.setOptions({highlight:function(code,t){var e=code;return t&&(e=f.a.highlight(t,code).value),e},sanitize:!0});var R,A,L={components:{Comments:k,About:C.a,Skeleton:O.a},filters:{markify:function(t){return m()(t,{renderer:j})}},data:function(){return{QR:"",articleNumber:"",comments:[],praise:[]}},computed:I({},Object(c.e)(["articles","userInfo"]),{article:function(){var t=Number(this.$route.query.number);return this.articles.filter(function(e){return e.number===t})[0]},hasPraised:function(){var t=this;return this.article.praise.some(function(e){return e.user.login===t.userInfo.login})},pageUrl:function(){return location.href}}),mounted:(A=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(document.title=this.$route.query.title?this.$route.query.title+" | JRAIN:BLOG":"JRAIN:BLOG",this.articleNumber=this.$route.query.number,this.article){t.next=8;break}return t.next=5,this.getArticlByNumber(this.articleNumber);case 5:e=t.sent,r=location.search.split("code=")[1],e.status&&!r&&v.a.fire({type:"error",title:e.status,text:e.data.message,confirmButtonText:"To auth"}).then(function(t){t.value&&document.querySelector("#header-menu-btn").click()});case 8:return t.next=10,this.getReactions({number:this.articleNumber,autoCommit:!0});case 10:return t.next=12,this.getComments(this.articleNumber);case 12:this.comments=t.sent,this.$nextTick(function(){if(n.$route.query.comment){var t=document.querySelector(".view");t.scrollTop=t.scrollHeight}});case 14:case"end":return t.stop()}},t,this)})),function(){return A.apply(this,arguments)}),methods:I({},Object(c.b)(["getArticlByNumber","getComments","getReactions","deleteAnReaction","createAnReaction"]),{getArticleComments:function(){var t=this.$route.query.number;this.getComments(t)},checkLogin:function(){var t=!1;return this.userInfo.login?t=!0:document.querySelector("#header-menu-btn").click(),t},likeArticle:function(){if(this.checkLogin())if(this.hasLiked.length){var t=this.hasLiked[0].id;this.deleteAnReaction({number:this.article.number,id:t})}else this.createAnReaction({number:this.article.number,content:"heart"})},praiseArticle:function(){this.checkLogin()&&this.createAnReaction({number:this.article.number,content:"+1"})},showQR:(R=Object(n.a)(regeneratorRuntime.mark(function t(){var e,n,o,c=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.e(7).then(r.t.bind(null,586,7));case 2:return e=t.sent,t.next=5,e.toDataURL(this.pageUrl);case 5:n=t.sent,this.QR?this.QR="":this.QR=n,o=function t(e){e.target.classList.contains("qrcode")||(c.QR="",document.body.removeEventListener("click",t))},document.body.addEventListener("click",o);case 9:case"end":return t.stop()}},t,this)})),function(){return R.apply(this,arguments)}),copyUrl:function(){this.$refs.pageUrl.select(),document.execCommand("copy"),v.a.fire({toast:!0,title:"Article url has been copied to your clipboard",type:"success",showConfirmButton:!1,timer:2e3})},updateComments:function(t){var view=document.querySelector(".view");view.scrollTop=view.scrollHeight,this.comments=t}})},E=(r(556),Object(w.a)(L,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"view"},[t.article?t._e():r("Skeleton",{attrs:{type:"article"}}),t._v(" "),t.article?r("div",{staticClass:"article"},[r("section",{staticClass:"article-title"},[r("h1",[t._v(t._s(t.article.title))]),t._v(" "),r("div",[r("i",{staticClass:"fas fa-feather-alt"}),t._v(" "),r("span",[t._v(t._s(t.article.date))]),t._v(" "),t._l(t.article.labels,function(label,i){return r("span",{key:i,staticClass:"label",style:"background: #"+label.color},[t._v(t._s(label.name))])})],2)]),t._v(" "),r("section",{staticClass:"article-content markdown",domProps:{innerHTML:t._s(t.$options.filters.markify(t.article.content))}}),t._v(" "),r("section",{staticClass:"article-comments"},[r("div",{staticClass:"article-comments-reactions border"},[t.article.praise?r("div",[r("i",{staticClass:"far fa-thumbs-up",class:{"fas praised":t.hasPraised},on:{click:t.praiseArticle}}),t._v("\n          "+t._s(t.article.praise.length)+"\n        ")]):t._e(),t._v(" "),r("div",{staticClass:"tools"},[r("i",{staticClass:"fas fa-qrcode qrcode",on:{click:t.showQR}}),t._v(" "),r("i",{staticClass:"far fa-copy",on:{click:t.copyUrl}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.QR,expression:"QR"}],staticClass:"tools-qr border"},[r("img",{attrs:{src:t.QR,alt:""}})])])]),t._v(" "),r("Comments",{attrs:{comments:t.comments,articleNumber:t.articleNumber,userInfo:t.userInfo},on:{updateComments:t.updateComments}}),t._v(" "),r("About")],1)]):t._e(),t._v(" "),r("input",{ref:"pageUrl",staticStyle:{position:"absolute",opacity:"0",top:"0","z-index":"-9999"},attrs:{type:"text",id:"page-url"},domProps:{value:t.pageUrl}})],1)},[],!1,null,"91e69a8e",null));e.default=E.exports}}]);