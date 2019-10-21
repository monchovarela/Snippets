(function(Ha,ea){"object"===typeof exports&&"undefined"!==typeof module?module.exports=ea():"function"===typeof define&&define.amd?define(ea):Ha.CodeMirror=ea()})(this,function(){function Ha(a){return new RegExp("(^|\\s)"+a+"(?:$|\\s)\\s*")}function ea(a){for(var b=a.childNodes.length;0<b;--b)a.removeChild(a.firstChild);return a}function aa(a,b){return ea(a).appendChild(b)}function u(a,b,c,d){a=document.createElement(a);c&&(a.className=c);d&&(a.style.cssText=d);if("string"==typeof b)a.appendChild(document.createTextNode(b));
else if(b)for(c=0;c<b.length;++c)a.appendChild(b[c]);return a}function Za(a,b,c,d){a=u(a,b,c,d);a.setAttribute("role","presentation");return a}function ya(a,b){3==b.nodeType&&(b=b.parentNode);if(a.contains)return a.contains(b);do if(11==b.nodeType&&(b=b.host),b==a)return!0;while(b=b.parentNode)}function ta(){try{var a=document.activeElement}catch(b){a=document.body||null}for(;a&&a.shadowRoot&&a.shadowRoot.activeElement;)a=a.shadowRoot.activeElement;return a}function Ia(a,b){var c=a.className;Ha(b).test(c)||
(a.className+=(c?" ":"")+b)}function Pc(a,b){for(var c=a.split(" "),d=0;d<c.length;d++)c[d]&&!Ha(c[d]).test(b)&&(b+=" "+c[d]);return b}function gc(a){var b=Array.prototype.slice.call(arguments,1);return function(){return a.apply(null,b)}}function Ja(a,b,c){b||(b={});for(var d in a)!a.hasOwnProperty(d)||!1===c&&b.hasOwnProperty(d)||(b[d]=a[d]);return b}function fa(a,b,c,d,e){null==b&&(b=a.search(/[^\s\u00a0]/),-1==b&&(b=a.length));d=d||0;for(e=e||0;;){var f=a.indexOf("\t",d);if(0>f||f>=b)return e+
(b-d);e+=f-d;e+=c-e%c;d=f+1}}function Q(a,b){for(var c=0;c<a.length;++c)if(a[c]==b)return c;return-1}function Qc(a,b,c){for(var d=0,e=0;;){var f=a.indexOf("\t",d);-1==f&&(f=a.length);var g=f-d;if(f==a.length||e+g>=b)return d+Math.min(g,b-e);e+=f-d;e+=c-e%c;d=f+1;if(e>=b)return d}}function Rc(a){for(;hc.length<=a;)hc.push(y(hc)+" ");return hc[a]}function y(a){return a[a.length-1]}function ic(a,b){for(var c=[],d=0;d<a.length;d++)c[d]=b(a[d],d);return c}function gg(a,b,c){for(var d=0,e=c(b);d<a.length&&
c(a[d])<=e;)d++;a.splice(d,0,b)}function Xd(){}function Yd(a,b){if(Object.create)var c=Object.create(a);else Xd.prototype=a,c=new Xd;b&&Ja(b,c);return c}function Sc(a){return/\w/.test(a)||"\u0080"<a&&(a.toUpperCase()!=a.toLowerCase()||hg.test(a))}function jc(a,b){return b?-1<b.source.indexOf("\\w")&&Sc(a)?!0:b.test(a):Sc(a)}function Zd(a){for(var b in a)if(a.hasOwnProperty(b)&&a[b])return!1;return!0}function Tc(a){return 768<=a.charCodeAt(0)&&ig.test(a)}function $d(a,b,c){for(;(0>c?0<b:b<a.length)&&
Tc(a.charAt(b));)b+=c;return b}function sb(a,b,c){for(var d=b>c?-1:1;;){if(b==c)return b;var e=(b+c)/2;e=0>d?Math.ceil(e):Math.floor(e);if(e==b)return a(e)?b:c;a(e)?c=e:b=e+d}}function jg(a,b,c,d){if(!a)return d(b,c,"ltr",0);for(var e=!1,f=0;f<a.length;++f){var g=a[f];if(g.from<c&&g.to>b||b==c&&g.to==b)d(Math.max(g.from,b),Math.min(g.to,c),1==g.level?"rtl":"ltr",f),e=!0}e||d(b,c,"ltr")}function tb(a,b,c){var d;ub=null;for(var e=0;e<a.length;++e){var f=a[e];if(f.from<b&&f.to>b)return e;f.to==b&&(f.from!=
f.to&&"before"==c?d=e:ub=e);f.from==b&&(f.from!=f.to&&"before"!=c?d=e:ub=e)}return null!=d?d:ub}function ua(a,b){var c=a.order;null==c&&(c=a.order=kg(a.text,b));return c}function ba(a,b,c){if(a.removeEventListener)a.removeEventListener(b,c,!1);else if(a.detachEvent)a.detachEvent("on"+b,c);else{var d=(a=a._handlers)&&a[b];d&&(c=Q(d,c),-1<c&&(a[b]=d.slice(0,c).concat(d.slice(c+1))))}}function H(a,b){var c=a._handlers&&a._handlers[b]||kc;if(c.length)for(var d=Array.prototype.slice.call(arguments,2),
e=0;e<c.length;++e)c[e].apply(null,d)}function K(a,b,c){"string"==typeof b&&(b={type:b,preventDefault:function(){this.defaultPrevented=!0}});H(a,c||b.type,a,b);return Uc(b)||b.codemirrorIgnore}function ae(a){var b=a._handlers&&a._handlers.cursorActivity;if(b){a=a.curOp.cursorActivityHandlers||(a.curOp.cursorActivityHandlers=[]);for(var c=0;c<b.length;++c)-1==Q(a,b[c])&&a.push(b[c])}}function ha(a,b){return 0<(a._handlers&&a._handlers[b]||kc).length}function $a(a){a.prototype.on=function(a,c){w(this,
a,c)};a.prototype.off=function(a,c){ba(this,a,c)}}function U(a){a.preventDefault?a.preventDefault():a.returnValue=!1}function be(a){a.stopPropagation?a.stopPropagation():a.cancelBubble=!0}function Uc(a){return null!=a.defaultPrevented?a.defaultPrevented:0==a.returnValue}function vb(a){U(a);be(a)}function ce(a){var b=a.which;null==b&&(a.button&1?b=1:a.button&2?b=3:a.button&4&&(b=2));ia&&a.ctrlKey&&1==b&&(b=3);return b}function lg(a){if(null==Vc){var b=u("span","\u200b");aa(a,u("span",[b,document.createTextNode("x")]));
0!=a.firstChild.offsetHeight&&(Vc=1>=b.offsetWidth&&2<b.offsetHeight&&!(z&&8>E))}a=Vc?u("span","\u200b"):u("span","\u00a0",null,"display: inline-block; width: 1px; margin-right: -1px");a.setAttribute("cm-text","");return a}function mg(a,b){2<arguments.length&&(b.dependencies=Array.prototype.slice.call(arguments,2));Wc[a]=b}function lc(a){if("string"==typeof a&&ab.hasOwnProperty(a))a=ab[a];else if(a&&"string"==typeof a.name&&ab.hasOwnProperty(a.name)){var b=ab[a.name];"string"==typeof b&&(b={name:b});
a=Yd(b,a);a.name=b.name}else{if("string"==typeof a&&/^[\w\-]+\/[\w\-]+\+xml$/.test(a))return lc("application/xml");if("string"==typeof a&&/^[\w\-]+\/[\w\-]+\+json$/.test(a))return lc("application/json")}return"string"==typeof a?{name:a}:a||{name:"null"}}function Xc(a,b){b=lc(b);var c=Wc[b.name];if(!c)return Xc(a,"text/plain");c=c(a,b);if(bb.hasOwnProperty(b.name)){var d=bb[b.name],e;for(e in d)d.hasOwnProperty(e)&&(c.hasOwnProperty(e)&&(c["_"+e]=c[e]),c[e]=d[e])}c.name=b.name;b.helperType&&(c.helperType=
b.helperType);if(b.modeProps)for(var f in b.modeProps)c[f]=b.modeProps[f];return c}function ng(a,b){var c=bb.hasOwnProperty(a)?bb[a]:bb[a]={};Ja(b,c)}function Ka(a,b){if(!0===b)return b;if(a.copyState)return a.copyState(b);var c={},d;for(d in b){var e=b[d];e instanceof Array&&(e=e.concat([]));c[d]=e}return c}function Yc(a,b){for(var c;a.innerMode;){c=a.innerMode(b);if(!c||c.mode==a)break;b=c.state;a=c.mode}return c||{mode:a,state:b}}function de(a,b,c){return a.startState?a.startState(b,c):!0}function t(a,
b){b-=a.first;if(0>b||b>=a.size)throw Error("There is no line "+(b+a.first)+" in the document.");for(var c=a;!c.lines;)for(var d=0;;++d){var e=c.children[d],f=e.chunkSize();if(b<f){c=e;break}b-=f}return c.lines[b]}function La(a,b,c){var d=[],e=b.line;a.iter(b.line,c.line+1,function(a){a=a.text;e==c.line&&(a=a.slice(0,c.ch));e==b.line&&(a=a.slice(b.ch));d.push(a);++e});return d}function Zc(a,b,c){var d=[];a.iter(b,c,function(a){d.push(a.text)});return d}function na(a,b){var c=b-a.height;if(c)for(var d=
a;d;d=d.parent)d.height+=c}function C(a){if(null==a.parent)return null;var b=a.parent;a=Q(b.lines,a);for(var c=b.parent;c;b=c,c=c.parent)for(var d=0;c.children[d]!=b;++d)a+=c.children[d].chunkSize();return a+b.first}function Ma(a,b){var c=a.first;a:do{for(var d=0;d<a.children.length;++d){var e=a.children[d],f=e.height;if(b<f){a=e;continue a}b-=f;c+=e.chunkSize()}return c}while(!a.lines);for(d=0;d<a.lines.length;++d){e=a.lines[d].height;if(b<e)break;b-=e}return c+d}function wb(a,b){return b>=a.first&&
b<a.first+a.size}function $c(a,b){return String(a.lineNumberFormatter(b+a.firstLineNumber))}function p(a,b,c){void 0===c&&(c=null);if(!(this instanceof p))return new p(a,b,c);this.line=a;this.ch=b;this.sticky=c}function x(a,b){return a.line-b.line||a.ch-b.ch}function ad(a,b){return a.sticky==b.sticky&&0==x(a,b)}function bd(a){return p(a.line,a.ch)}function mc(a,b){return 0>x(a,b)?b:a}function nc(a,b){return 0>x(a,b)?a:b}function v(a,b){if(b.line<a.first)return p(a.first,0);var c=a.first+a.size-1;
if(b.line>c)return p(c,t(a,c).text.length);c=t(a,b.line).text.length;var d=b.ch;c=null==d||d>c?p(b.line,c):0>d?p(b.line,0):b;return c}function ee(a,b){for(var c=[],d=0;d<b.length;d++)c[d]=v(a,b[d]);return c}function fe(a,b,c,d){var e=[a.state.modeGen],f={};ge(a,b.text,a.doc.mode,c,function(a,b){return e.push(a,b)},f,d);var g=c.state;d=function(d){c.baseTokens=e;var h=a.state.overlays[d],k=1,r=0;c.state=!0;ge(a,b.text,h.mode,c,function(a,b){for(var d=k;r<a;){var c=e[k];c>a&&e.splice(k,1,a,e[k+1],c);
k+=2;r=Math.min(a,c)}if(b)if(h.opaque)e.splice(d,k-d,a,"overlay "+b),k=d+2;else for(;d<k;d+=2)c=e[d+1],e[d+1]=(c?c+" ":"")+"overlay "+b},f);c.state=g;c.baseTokens=null;c.baseTokenPos=1};for(var h=0;h<a.state.overlays.length;++h)d(h);return{styles:e,classes:f.bgClass||f.textClass?f:null}}function he(a,b,c){if(!b.styles||b.styles[0]!=a.state.modeGen){var d=xb(a,C(b)),e=b.text.length>a.options.maxHighlightLength&&Ka(a.doc.mode,d.state),f=fe(a,b,d);e&&(d.state=e);b.stateAfter=d.save(!e);b.styles=f.styles;
f.classes?b.styleClasses=f.classes:b.styleClasses&&(b.styleClasses=null);c===a.doc.highlightFrontier&&(a.doc.modeFrontier=Math.max(a.doc.modeFrontier,++a.doc.highlightFrontier))}return b.styles}function xb(a,b,c){var d=a.doc,e=a.display;if(!d.mode.startState)return new oa(d,!0,b);var f=og(a,b,c),g=f>d.first&&t(d,f-1).stateAfter,h=g?oa.fromSaved(d,g,f):new oa(d,de(d.mode),f);d.iter(f,b,function(d){cd(a,d.text,h);var c=h.line;d.stateAfter=c==b-1||0==c%5||c>=e.viewFrom&&c<e.viewTo?h.save():null;h.nextLine()});
c&&(d.modeFrontier=h.line);return h}function cd(a,b,c,d){var e=a.doc.mode;a=new I(b,a.options.tabSize,c);a.start=a.pos=d||0;for(""==b&&ie(e,c.state);!a.eol();)dd(e,a,c.state),a.start=a.pos}function ie(a,b){if(a.blankLine)return a.blankLine(b);if(a.innerMode){var c=Yc(a,b);if(c.mode.blankLine)return c.mode.blankLine(c.state)}}function dd(a,b,c,d){for(var e=0;10>e;e++){d&&(d[0]=Yc(a,c).mode);var f=a.token(b,c);if(b.pos>b.start)return f}throw Error("Mode "+a.name+" failed to advance stream.");}function je(a,
b,c,d){var e=a.doc,f=e.mode;b=v(e,b);var g=t(e,b.line);c=xb(a,b.line,c);a=new I(g.text,a.options.tabSize,c);var h;for(d&&(h=[]);(d||a.pos<b.ch)&&!a.eol();){a.start=a.pos;var k=dd(f,a,c.state);d&&h.push(new ke(a,k,Ka(e.mode,c.state)))}return d?h:new ke(a,k,c.state)}function le(a,b){if(a)for(;;){var c=a.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!c)break;a=a.slice(0,c.index)+a.slice(c.index+c[0].length);var d=c[1]?"bgClass":"textClass";null==b[d]?b[d]=c[2]:(new RegExp("(?:^|s)"+c[2]+"(?:$|s)")).test(b[d])||
(b[d]+=" "+c[2])}return a}function ge(a,b,c,d,e,f,g){var h=c.flattenSpans;null==h&&(h=a.options.flattenSpans);var k=0,l=null,m=new I(b,a.options.tabSize,d),r=a.options.addModeClass&&[null];for(""==b&&le(ie(c,d.state),f);!m.eol();){if(m.pos>a.options.maxHighlightLength){h=!1;g&&cd(a,b,d,m.pos);m.pos=b.length;var n=null}else n=le(dd(c,m,d.state,r),f);if(r){var q=r[0].name;q&&(n="m-"+(n?q+" "+n:q))}if(!h||l!=n){for(;k<m.start;)k=Math.min(m.start,k+5E3),e(k,l);l=n}m.start=m.pos}for(;k<m.pos;)a=Math.min(m.pos,
k+5E3),e(a,l),k=a}function og(a,b,c){for(var d,e,f=a.doc,g=c?-1:b-(a.doc.mode.innerMode?1E3:100);b>g;--b){if(b<=f.first)return f.first;var h=t(f,b-1),k=h.stateAfter;if(k&&(!c||b+(k instanceof oc?k.lookAhead:0)<=f.modeFrontier))return b;h=fa(h.text,null,a.options.tabSize);if(null==e||d>h)e=b-1,d=h}return e}function pg(a,b){a.modeFrontier=Math.min(a.modeFrontier,b);if(!(a.highlightFrontier<b-10)){for(var c=a.first,d=b-1;d>c;d--){var e=t(a,d).stateAfter;if(e&&(!(e instanceof oc)||d+e.lookAhead<b)){c=
d+1;break}}a.highlightFrontier=Math.min(a.highlightFrontier,c)}}function pc(a,b,c){this.marker=a;this.from=b;this.to=c}function yb(a,b){if(a)for(var c=0;c<a.length;++c){var d=a[c];if(d.marker==b)return d}}function ed(a,b){if(b.full)return null;var c=wb(a,b.from.line)&&t(a,b.from.line).markedSpans,d=wb(a,b.to.line)&&t(a,b.to.line).markedSpans;if(!c&&!d)return null;var e=b.from.ch,f=b.to.ch,g=0==x(b.from,b.to),h;if(c)for(var k=0;k<c.length;++k){var l=c[k],m=l.marker;if(null==l.from||(m.inclusiveLeft?
l.from<=e:l.from<e)||!(l.from!=e||"bookmark"!=m.type||g&&l.marker.insertLeft)){var r=null==l.to||(m.inclusiveRight?l.to>=e:l.to>e);(h||(h=[])).push(new pc(m,l.from,r?null:l.to))}}c=h;var n;if(d)for(h=0;h<d.length;++h)if(k=d[h],l=k.marker,null==k.to||(l.inclusiveRight?k.to>=f:k.to>f)||k.from==f&&"bookmark"==l.type&&(!g||k.marker.insertLeft))m=null==k.from||(l.inclusiveLeft?k.from<=f:k.from<f),(n||(n=[])).push(new pc(l,m?null:k.from-f,null==k.to?null:k.to-f));d=n;f=1==b.text.length;g=y(b.text).length+
(f?e:0);if(c)for(n=0;n<c.length;++n)if(h=c[n],null==h.to)(k=yb(d,h.marker),k)?f&&(h.to=null==k.to?null:k.to+g):h.to=e;if(d)for(e=0;e<d.length;++e)n=d[e],null!=n.to&&(n.to+=g),null==n.from?yb(c,n.marker)||(n.from=g,f&&(c||(c=[])).push(n)):(n.from+=g,f&&(c||(c=[])).push(n));c&&(c=me(c));d&&d!=c&&(d=me(d));e=[c];if(!f){f=b.text.length-2;var q;if(0<f&&c)for(g=0;g<c.length;++g)null==c[g].to&&(q||(q=[])).push(new pc(c[g].marker,null,null));for(c=0;c<f;++c)e.push(q);e.push(d)}return e}function me(a){for(var b=
0;b<a.length;++b){var c=a[b];null!=c.from&&c.from==c.to&&!1!==c.marker.clearWhenEmpty&&a.splice(b--,1)}return a.length?a:null}function qg(a,b,c){var d=null;a.iter(b.line,c.line+1,function(a){if(a.markedSpans)for(var b=0;b<a.markedSpans.length;++b){var c=a.markedSpans[b].marker;!c.readOnly||d&&-1!=Q(d,c)||(d||(d=[])).push(c)}});if(!d)return null;a=[{from:b,to:c}];for(b=0;b<d.length;++b){c=d[b];for(var e=c.find(0),f=0;f<a.length;++f){var g=a[f];if(!(0>x(g.to,e.from)||0<x(g.from,e.to))){var h=[f,1],
k=x(g.from,e.from),l=x(g.to,e.to);(0>k||!c.inclusiveLeft&&!k)&&h.push({from:g.from,to:e.from});(0<l||!c.inclusiveRight&&!l)&&h.push({from:e.to,to:g.to});a.splice.apply(a,h);f+=h.length-3}}}return a}function ne(a){var b=a.markedSpans;if(b){for(var c=0;c<b.length;++c)b[c].marker.detachLine(a);a.markedSpans=null}}function oe(a,b){if(b){for(var c=0;c<b.length;++c)b[c].marker.attachLine(a);a.markedSpans=b}}function fd(a,b){var c=a.lines.length-b.lines.length;if(0!=c)return c;c=a.find();var d=b.find(),
e=x(c.from,d.from)||(a.inclusiveLeft?-1:0)-(b.inclusiveLeft?-1:0);return e?-e:(c=x(c.to,d.to)||(a.inclusiveRight?1:0)-(b.inclusiveRight?1:0))?c:b.id-a.id}function cb(a,b){var c=va&&a.markedSpans;if(c)for(var d,e=0;e<c.length;++e)if(d=c[e],d.marker.collapsed&&null==(b?d.from:d.to)&&(!f||0>fd(f,d.marker)))var f=d.marker;return f}function pe(a,b,c,d,e){a=t(a,b);if(a=va&&a.markedSpans)for(b=0;b<a.length;++b){var f=a[b];if(f.marker.collapsed){var g=f.marker.find(0),h=x(g.from,c)||(f.marker.inclusiveLeft?
-1:0)-(e.inclusiveLeft?-1:0),k=x(g.to,d)||(f.marker.inclusiveRight?1:0)-(e.inclusiveRight?1:0);if(!(0<=h&&0>=k||0>=h&&0<=k)&&(0>=h&&(f.marker.inclusiveRight&&e.inclusiveLeft?0<=x(g.to,c):0<x(g.to,c))||0<=h&&(f.marker.inclusiveRight&&e.inclusiveLeft?0>=x(g.from,d):0>x(g.from,d))))return!0}}}function pa(a){for(var b;b=cb(a,!0);)a=b.find(-1,!0).line;return a}function gd(a,b){var c=t(a,b),d=pa(c);return c==d?b:C(d)}function qe(a,b){if(b>a.lastLine())return b;var c=t(a,b),d;if(!za(a,c))return b;for(;d=
cb(c,!1);)c=d.find(1,!0).line;return C(c)+1}function za(a,b){var c=va&&b.markedSpans;if(c)for(var d,e=0;e<c.length;++e)if(d=c[e],d.marker.collapsed&&(null==d.from||!d.marker.widgetNode&&0==d.from&&d.marker.inclusiveLeft&&hd(a,b,d)))return!0}function hd(a,b,c){if(null==c.to)return b=c.marker.find(1,!0),hd(a,b.line,yb(b.line.markedSpans,c.marker));if(c.marker.inclusiveRight&&c.to==b.text.length)return!0;for(var d,e=0;e<b.markedSpans.length;++e)if(d=b.markedSpans[e],d.marker.collapsed&&!d.marker.widgetNode&&
d.from==c.to&&(null==d.to||d.to!=c.from)&&(d.marker.inclusiveLeft||c.marker.inclusiveRight)&&hd(a,b,d))return!0}function qa(a){a=pa(a);for(var b=0,c=a.parent,d=0;d<c.lines.length;++d){var e=c.lines[d];if(e==a)break;else b+=e.height}for(a=c.parent;a;c=a,a=c.parent)for(d=0;d<a.children.length&&(e=a.children[d],e!=c);++d)b+=e.height;return b}function qc(a){if(0==a.height)return 0;for(var b=a.text.length,c,d=a;c=cb(d,!0);)c=c.find(0,!0),d=c.from.line,b+=c.from.ch-c.to.ch;for(d=a;c=cb(d,!1);)a=c.find(0,
!0),b-=d.text.length-a.from.ch,d=a.to.line,b+=d.text.length-a.to.ch;return b}function id(a){var b=a.display;a=a.doc;b.maxLine=t(a,a.first);b.maxLineLength=qc(b.maxLine);b.maxLineChanged=!0;a.iter(function(a){var d=qc(a);d>b.maxLineLength&&(b.maxLineLength=d,b.maxLine=a)})}function re(a,b){if(!a||/^\s*$/.test(a))return null;var c=b.addModeClass?rg:sg;return c[a]||(c[a]=a.replace(/\S+/g,"cm-$&"))}function se(a,b){var c=Za("span",null,null,R?"padding-right: .1px":null);c={pre:Za("pre",[c],"CodeMirror-line"),
content:c,col:0,pos:0,cm:a,trailingSpace:!1,splitSpaces:a.getOption("lineWrapping")};b.measure={};for(var d=0;d<=(b.rest?b.rest.length:0);d++){var e=d?b.rest[d-1]:b.line,f=void 0;c.pos=0;c.addToken=tg;var g=a.display.measure;if(null!=jd)g=jd;else{var h=aa(g,document.createTextNode("A\u062eA")),k=zb(h,0,1).getBoundingClientRect();h=zb(h,1,2).getBoundingClientRect();ea(g);g=k&&k.left!=k.right?jd=3>h.right-k.right:!1}g&&(f=ua(e,a.doc.direction))&&(c.addToken=ug(c.addToken,f));c.map=[];var l=b!=a.display.externalMeasured&&
C(e);a:{var m=h=k=g=void 0,r=void 0,n=void 0,q=void 0;f=c;l=he(a,e,l);var D=e.markedSpans,p=e.text,t=0;if(D)for(var u=p.length,G=0,w=1,x="",v=0;;){if(v==G){r=m=h=n="";k=g=null;v=Infinity;for(var z=[],X=void 0,A=0;A<D.length;++A){var N=D[A],y=N.marker;if("bookmark"==y.type&&N.from==G&&y.widgetNode)z.push(y);else if(N.from<=G&&(null==N.to||N.to>G||y.collapsed&&N.to==G&&N.from==G)){null!=N.to&&N.to!=G&&v>N.to&&(v=N.to,m="");y.className&&(r+=" "+y.className);y.css&&(n=(n?n+";":"")+y.css);y.startStyle&&
N.from==G&&(h+=" "+y.startStyle);y.endStyle&&N.to==v&&(X||(X=[])).push(y.endStyle,N.to);y.title&&((g||(g={})).title=y.title);if(y.attributes)for(var B in y.attributes)(g||(g={}))[B]=y.attributes[B];y.collapsed&&(!k||0>fd(k.marker,y))&&(k=N)}else N.from>G&&v>N.from&&(v=N.from)}if(X)for(A=0;A<X.length;A+=2)X[A+1]==v&&(m+=" "+X[A]);if(!k||k.from==G)for(X=0;X<z.length;++X)te(f,0,z[X]);if(k&&(k.from||0)==G){te(f,(null==k.to?u+1:k.to)-G,k.marker,null==k.from);if(null==k.to)break a;k.to==G&&(k=!1)}}if(G>=
u)break;for(z=Math.min(u,v);;){if(x){X=G+x.length;k||(A=X>z?x.slice(0,z-G):x,f.addToken(f,A,q?q+r:r,h,G+A.length==v?m:"",n,g));if(X>=z){x=x.slice(z-G);G=z;break}G=X;h=""}x=p.slice(t,t=l[w++]);q=re(l[w++],f.cm.options)}}else for(g=1;g<l.length;g+=2)f.addToken(f,p.slice(t,t=l[g]),re(l[g+1],f.cm.options))}e.styleClasses&&(e.styleClasses.bgClass&&(c.bgClass=Pc(e.styleClasses.bgClass,c.bgClass||"")),e.styleClasses.textClass&&(c.textClass=Pc(e.styleClasses.textClass,c.textClass||"")));0==c.map.length&&
c.map.push(0,0,c.content.appendChild(lg(a.display.measure)));0==d?(b.measure.map=c.map,b.measure.cache={}):((b.measure.maps||(b.measure.maps=[])).push(c.map),(b.measure.caches||(b.measure.caches=[])).push({}))}R&&(B=c.content.lastChild,/\bcm-tab\b/.test(B.className)||B.querySelector&&B.querySelector(".cm-tab"))&&(c.content.className="cm-tab-wrap-hack");H(a,"renderLine",a,b.line,c.pre);c.pre.className&&(c.textClass=Pc(c.pre.className,c.textClass||""));return c}function vg(a){var b=u("span","\u2022",
"cm-invalidchar");b.title="\\u"+a.charCodeAt(0).toString(16);b.setAttribute("aria-label",b.title);return b}function tg(a,b,c,d,e,f,g){if(b){if(a.splitSpaces){var h=a.trailingSpace;if(1<b.length&&!/  /.test(b))h=b;else{for(var k="",l=0;l<b.length;l++){var m=b.charAt(l);" "!=m||!h||l!=b.length-1&&32!=b.charCodeAt(l+1)||(m="\u00a0");k+=m;h=" "==m}h=k}}else h=b;k=h;l=a.cm.state.specialChars;m=!1;if(l.test(b)){h=document.createDocumentFragment();for(var r=0;;){l.lastIndex=r;var n=l.exec(b),q=n?n.index-
r:b.length-r;if(q){var D=document.createTextNode(k.slice(r,r+q));z&&9>E?h.appendChild(u("span",[D])):h.appendChild(D);a.map.push(a.pos,a.pos+q,D);a.col+=q;a.pos+=q}if(!n)break;r+=q+1;"\t"==n[0]?(n=a.cm.options.tabSize,n-=a.col%n,q=h.appendChild(u("span",Rc(n),"cm-tab")),q.setAttribute("role","presentation"),q.setAttribute("cm-text","\t"),a.col+=n):("\r"==n[0]||"\n"==n[0]?(q=h.appendChild(u("span","\r"==n[0]?"\u240d":"\u2424","cm-invalidchar")),q.setAttribute("cm-text",n[0])):(q=a.cm.options.specialCharPlaceholder(n[0]),
q.setAttribute("cm-text",n[0]),z&&9>E?h.appendChild(u("span",[q])):h.appendChild(q)),a.col+=1);a.map.push(a.pos,a.pos+1,q);a.pos++}}else a.col+=b.length,h=document.createTextNode(k),a.map.push(a.pos,a.pos+b.length,h),z&&9>E&&(m=!0),a.pos+=b.length;a.trailingSpace=32==k.charCodeAt(b.length-1);if(c||d||e||m||f){b=c||"";d&&(b+=d);e&&(b+=e);d=u("span",[h],b,f);if(g)for(var p in g)g.hasOwnProperty(p)&&"style"!=p&&"class"!=p&&d.setAttribute(p,g[p]);return a.content.appendChild(d)}a.content.appendChild(h)}}
function ug(a,b){return function(c,d,e,f,g,h,k){e=e?e+" cm-force-border":"cm-force-border";for(var l=c.pos,m=l+d.length;;){for(var r=void 0,n=0;n<b.length&&!(r=b[n],r.to>l&&r.from<=l);n++);if(r.to>=m)return a(c,d,e,f,g,h,k);a(c,d.slice(0,r.to-l),e,f,null,h,k);f=null;d=d.slice(r.to-l);l=r.to}}}function te(a,b,c,d){var e=!d&&c.widgetNode;e&&a.map.push(a.pos,a.pos+b,e);!d&&a.cm.display.input.needsContentAttribute&&(e||(e=a.content.appendChild(document.createElement("span"))),e.setAttribute("cm-marker",
c.id));e&&(a.cm.display.input.setUneditable(e),a.content.appendChild(e));a.pos+=b;a.trailingSpace=!1}function ue(a,b,c){for(var d=this.line=b,e;d=cb(d,!1);)d=d.find(1,!0).line,(e||(e=[])).push(d);this.size=(this.rest=e)?C(y(this.rest))-c+1:1;this.node=this.text=null;this.hidden=za(a,b)}function rc(a,b,c){var d=[],e;for(e=b;e<c;)b=new ue(a.doc,t(a.doc,e),e),e+=b.size,d.push(b);return d}function wg(a,b){var c=a.ownsGroup;if(c)try{var d=c.delayedCallbacks,e=0;do{for(;e<d.length;e++)d[e].call(null);for(var f=
0;f<c.ops.length;f++){var g=c.ops[f];if(g.cursorActivityHandlers)for(;g.cursorActivityCalled<g.cursorActivityHandlers.length;)g.cursorActivityHandlers[g.cursorActivityCalled++].call(null,g.cm)}}while(e<d.length)}finally{db=null,b(c)}}function O(a,b){var c=a._handlers&&a._handlers[b]||kc;if(c.length){var d=Array.prototype.slice.call(arguments,2);if(db)var e=db.delayedCallbacks;else Ab?e=Ab:(e=Ab=[],setTimeout(xg,0));for(var f=function(a){e.push(function(){return c[a].apply(null,d)})},g=0;g<c.length;++g)f(g)}}
function xg(){var a=Ab;Ab=null;for(var b=0;b<a.length;++b)a[b]()}function ve(a,b,c,d){for(var e=0;e<b.changes.length;e++){var f=b.changes[e];if("text"==f){f=a;var g=b,h=g.text.className,k=we(f,g);g.text==g.node&&(g.node=k.pre);g.text.parentNode.replaceChild(k.pre,g.text);g.text=k.pre;k.bgClass!=g.bgClass||k.textClass!=g.textClass?(g.bgClass=k.bgClass,g.textClass=k.textClass,kd(f,g)):h&&(g.text.className=h)}else if("gutter"==f)xe(a,b,c,d);else if("class"==f)kd(a,b);else if("widget"==f){f=a;g=b;h=d;
g.alignable&&(g.alignable=null);k=g.node.firstChild;for(var l;k;k=l)l=k.nextSibling,"CodeMirror-linewidget"==k.className&&g.node.removeChild(k);ye(f,g,h)}}b.changes=null}function Bb(a){a.node==a.text&&(a.node=u("div",null,null,"position: relative"),a.text.parentNode&&a.text.parentNode.replaceChild(a.node,a.text),a.node.appendChild(a.text),z&&8>E&&(a.node.style.zIndex=2));return a.node}function we(a,b){var c=a.display.externalMeasured;return c&&c.line==b.line?(a.display.externalMeasured=null,b.measure=
c.measure,c.built):se(a,b)}function kd(a,b){var c=b.bgClass?b.bgClass+" "+(b.line.bgClass||""):b.line.bgClass;c&&(c+=" CodeMirror-linebackground");if(b.background)c?b.background.className=c:(b.background.parentNode.removeChild(b.background),b.background=null);else if(c){var d=Bb(b);b.background=d.insertBefore(u("div",null,c),d.firstChild);a.display.input.setUneditable(b.background)}b.line.wrapClass?Bb(b).className=b.line.wrapClass:b.node!=b.text&&(b.node.className="");b.text.className=(b.textClass?
b.textClass+" "+(b.line.textClass||""):b.line.textClass)||""}function xe(a,b,c,d){b.gutter&&(b.node.removeChild(b.gutter),b.gutter=null);b.gutterBackground&&(b.node.removeChild(b.gutterBackground),b.gutterBackground=null);if(b.line.gutterClass){var e=Bb(b);b.gutterBackground=u("div",null,"CodeMirror-gutter-background "+b.line.gutterClass,"left: "+(a.options.fixedGutter?d.fixedPos:-d.gutterTotalWidth)+"px; width: "+d.gutterTotalWidth+"px");a.display.input.setUneditable(b.gutterBackground);e.insertBefore(b.gutterBackground,
b.text)}e=b.line.gutterMarkers;if(a.options.lineNumbers||e){var f=Bb(b),g=b.gutter=u("div",null,"CodeMirror-gutter-wrapper","left: "+(a.options.fixedGutter?d.fixedPos:-d.gutterTotalWidth)+"px");a.display.input.setUneditable(g);f.insertBefore(g,b.text);b.line.gutterClass&&(g.className+=" "+b.line.gutterClass);!a.options.lineNumbers||e&&e["CodeMirror-linenumbers"]||(b.lineNumber=g.appendChild(u("div",$c(a.options,c),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+d.gutterLeft["CodeMirror-linenumbers"]+
"px; width: "+a.display.lineNumInnerWidth+"px")));if(e)for(b=0;b<a.display.gutterSpecs.length;++b)c=a.display.gutterSpecs[b].className,(f=e.hasOwnProperty(c)&&e[c])&&g.appendChild(u("div",[f],"CodeMirror-gutter-elt","left: "+d.gutterLeft[c]+"px; width: "+d.gutterWidth[c]+"px"))}}function yg(a,b,c,d){var e=we(a,b);b.text=b.node=e.pre;e.bgClass&&(b.bgClass=e.bgClass);e.textClass&&(b.textClass=e.textClass);kd(a,b);xe(a,b,c,d);ye(a,b,d);return b.node}function ye(a,b,c){ze(a,b.line,b,c,!0);if(b.rest)for(var d=
0;d<b.rest.length;d++)ze(a,b.rest[d],b,c,!1)}function ze(a,b,c,d,e){if(b.widgets){var f=Bb(c),g=0;for(b=b.widgets;g<b.length;++g){var h=b[g],k=u("div",[h.node],"CodeMirror-linewidget");h.handleMouseEvents||k.setAttribute("cm-ignore-events","true");var l=h,m=k,r=d;if(l.noHScroll){(c.alignable||(c.alignable=[])).push(m);var n=r.wrapperWidth;m.style.left=r.fixedPos+"px";l.coverGutter||(n-=r.gutterTotalWidth,m.style.paddingLeft=r.gutterTotalWidth+"px");m.style.width=n+"px"}l.coverGutter&&(m.style.zIndex=
5,m.style.position="relative",l.noHScroll||(m.style.marginLeft=-r.gutterTotalWidth+"px"));a.display.input.setUneditable(k);e&&h.above?f.insertBefore(k,c.gutter||c.text):f.appendChild(k);O(h,"redraw")}}}function Cb(a){if(null!=a.height)return a.height;var b=a.doc.cm;if(!b)return 0;if(!ya(document.body,a.node)){var c="position: relative;";a.coverGutter&&(c+="margin-left: -"+b.display.gutters.offsetWidth+"px;");a.noHScroll&&(c+="width: "+b.display.wrapper.clientWidth+"px;");aa(b.display.measure,u("div",
[a.node],null,c))}return a.height=a.node.parentNode.offsetHeight}function wa(a,b){for(var c=b.target||b.srcElement;c!=a.wrapper;c=c.parentNode)if(!c||1==c.nodeType&&"true"==c.getAttribute("cm-ignore-events")||c.parentNode==a.sizer&&c!=a.mover)return!0}function ld(a){return a.mover.offsetHeight-a.lineSpace.offsetHeight}function Ae(a){if(a.cachedPaddingH)return a.cachedPaddingH;var b=aa(a.measure,u("pre","x","CodeMirror-line-like"));b=window.getComputedStyle?window.getComputedStyle(b):b.currentStyle;
b={left:parseInt(b.paddingLeft),right:parseInt(b.paddingRight)};isNaN(b.left)||isNaN(b.right)||(a.cachedPaddingH=b);return b}function ra(a){return 30-a.display.nativeBarWidth}function Na(a){return a.display.scroller.clientWidth-ra(a)-a.display.barWidth}function md(a){return a.display.scroller.clientHeight-ra(a)-a.display.barHeight}function Be(a,b,c){if(a.line==b)return{map:a.measure.map,cache:a.measure.cache};for(var d=0;d<a.rest.length;d++)if(a.rest[d]==b)return{map:a.measure.maps[d],cache:a.measure.caches[d]};
for(b=0;b<a.rest.length;b++)if(C(a.rest[b])>c)return{map:a.measure.maps[b],cache:a.measure.caches[b],before:!0}}function nd(a,b){if(b>=a.display.viewFrom&&b<a.display.viewTo)return a.display.view[Oa(a,b)];var c=a.display.externalMeasured;if(c&&b>=c.lineN&&b<c.lineN+c.size)return c}function Pa(a,b){var c=C(b),d=nd(a,c);d&&!d.text?d=null:d&&d.changes&&(ve(a,d,c,od(a)),a.curOp.forceUpdate=!0);if(!d){var e=pa(b);d=C(e);e=a.display.externalMeasured=new ue(a.doc,e,d);e.lineN=d;d=e.built=se(a,e);e.text=
d.pre;aa(a.display.lineMeasure,d.pre);d=e}c=Be(d,b,c);return{line:b,view:d,rect:null,map:c.map,cache:c.cache,before:c.before,hasHeights:!1}}function ja(a,b,c,d,e){b.before&&(c=-1);var f=c+(d||"");if(b.cache.hasOwnProperty(f))a=b.cache[f];else{b.rect||(b.rect=b.view.text.getBoundingClientRect());if(!b.hasHeights){var g=b.view,h=b.rect,k=a.options.lineWrapping,l=k&&Na(a);if(!g.measure.heights||k&&g.measure.width!=l){var m=g.measure.heights=[];if(k)for(g.measure.width=l,g=g.text.firstChild.getClientRects(),
k=0;k<g.length-1;k++){l=g[k];var r=g[k+1];2<Math.abs(l.bottom-r.bottom)&&m.push((l.bottom+r.top)/2-h.top)}m.push(h.bottom-h.top)}b.hasHeights=!0}m=d;g=Ce(b.map,c,m);d=g.node;h=g.start;k=g.end;c=g.collapse;if(3==d.nodeType){for(var n=0;4>n;n++){for(;h&&Tc(b.line.text.charAt(g.coverStart+h));)--h;for(;g.coverStart+k<g.coverEnd&&Tc(b.line.text.charAt(g.coverStart+k));)++k;if(z&&9>E&&0==h&&k==g.coverEnd-g.coverStart)var q=d.parentNode.getBoundingClientRect();else{q=zb(d,h,k).getClientRects();k=De;if("left"==
m)for(l=0;l<q.length&&(k=q[l]).left==k.right;l++);else for(l=q.length-1;0<=l&&(k=q[l]).left==k.right;l--);q=k}if(q.left||q.right||0==h)break;k=h;--h;c="right"}z&&11>E&&((n=!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI)||(null!=pd?n=pd:(m=aa(a.display.measure,u("span","x")),n=m.getBoundingClientRect(),m=zb(m,0,1).getBoundingClientRect(),n=pd=1<Math.abs(n.left-m.left)),n=!n),n||(n=screen.logicalXDPI/screen.deviceXDPI,m=screen.logicalYDPI/screen.deviceYDPI,q={left:q.left*
n,right:q.right*n,top:q.top*m,bottom:q.bottom*m}))}else 0<h&&(c=m="right"),q=a.options.lineWrapping&&1<(n=d.getClientRects()).length?n["right"==m?n.length-1:0]:d.getBoundingClientRect();!(z&&9>E)||h||q&&(q.left||q.right)||(q=(q=d.parentNode.getClientRects()[0])?{left:q.left,right:q.left+eb(a.display),top:q.top,bottom:q.bottom}:De);d=q.top-b.rect.top;h=q.bottom-b.rect.top;n=(d+h)/2;m=b.view.measure.heights;for(g=0;g<m.length-1&&!(n<m[g]);g++);c={left:("right"==c?q.right:q.left)-b.rect.left,right:("left"==
c?q.left:q.right)-b.rect.left,top:g?m[g-1]:0,bottom:m[g]};q.left||q.right||(c.bogus=!0);a.options.singleCursorHeightPerLine||(c.rtop=d,c.rbottom=h);a=c;a.bogus||(b.cache[f]=a)}return{left:a.left,right:a.right,top:e?a.rtop:a.top,bottom:e?a.rbottom:a.bottom}}function Ce(a,b,c){for(var d,e,f,g,h,k,l=0;l<a.length;l+=3){h=a[l];k=a[l+1];if(b<h)e=0,f=1,g="left";else if(b<k)e=b-h,f=e+1;else if(l==a.length-3||b==k&&a[l+3]>b)f=k-h,e=f-1,b>=k&&(g="right");if(null!=e){d=a[l+2];h==k&&c==(d.insertLeft?"left":"right")&&
(g=c);if("left"==c&&0==e)for(;l&&a[l-2]==a[l-3]&&a[l-1].insertLeft;)d=a[(l-=3)+2],g="left";if("right"==c&&e==k-h)for(;l<a.length-3&&a[l+3]==a[l+4]&&!a[l+5].insertLeft;)d=a[(l+=3)+2],g="right";break}}return{node:d,start:e,end:f,collapse:g,coverStart:h,coverEnd:k}}function Ee(a){if(a.measure&&(a.measure.cache={},a.measure.heights=null,a.rest))for(var b=0;b<a.rest.length;b++)a.measure.caches[b]={}}function Fe(a){a.display.externalMeasure=null;ea(a.display.lineMeasure);for(var b=0;b<a.display.view.length;b++)Ee(a.display.view[b])}
function Db(a){Fe(a);a.display.cachedCharWidth=a.display.cachedTextHeight=a.display.cachedPaddingH=null;a.options.lineWrapping||(a.display.maxLineChanged=!0);a.display.lineNumChars=null}function Ge(){return sc&&tc?-(document.body.getBoundingClientRect().left-parseInt(getComputedStyle(document.body).marginLeft)):window.pageXOffset||(document.documentElement||document.body).scrollLeft}function He(){return sc&&tc?-(document.body.getBoundingClientRect().top-parseInt(getComputedStyle(document.body).marginTop)):
window.pageYOffset||(document.documentElement||document.body).scrollTop}function qd(a){var b=0;if(a.widgets)for(var c=0;c<a.widgets.length;++c)a.widgets[c].above&&(b+=Cb(a.widgets[c]));return b}function uc(a,b,c,d,e){e||(e=qd(b),c.top+=e,c.bottom+=e);if("line"==d)return c;d||(d="local");b=qa(b);b="local"==d?b+a.display.lineSpace.offsetTop:b-a.display.viewOffset;if("page"==d||"window"==d)a=a.display.lineSpace.getBoundingClientRect(),b+=a.top+("window"==d?0:He()),d=a.left+("window"==d?0:Ge()),c.left+=
d,c.right+=d;c.top+=b;c.bottom+=b;return c}function Ie(a,b,c){if("div"==c)return b;var d=b.left;b=b.top;"page"==c?(d-=Ge(),b-=He()):"local"!=c&&c||(c=a.display.sizer.getBoundingClientRect(),d+=c.left,b+=c.top);a=a.display.lineSpace.getBoundingClientRect();return{left:d-a.left,top:b-a.top}}function rd(a,b,c,d,e){d||(d=t(a.doc,b.line));var f=d;b=b.ch;d=ja(a,Pa(a,d),b,e);return uc(a,f,d,c)}function ka(a,b,c,d,e,f){function g(b,g){var h=ja(a,e,b,g?"right":"left",f);g?h.left=h.right:h.right=h.left;return uc(a,
d,h,c)}function h(a,b,d){return g(d?a-1:a,1==k[b].level!=d)}d=d||t(a.doc,b.line);e||(e=Pa(a,d));var k=ua(d,a.doc.direction),l=b.ch;b=b.sticky;l>=d.text.length?(l=d.text.length,b="before"):0>=l&&(l=0,b="after");if(!k)return g("before"==b?l-1:l,"before"==b);var m=tb(k,l,b),r=ub;m=h(l,m,"before"==b);null!=r&&(m.other=h(l,r,"before"!=b));return m}function Je(a,b){var c=0;b=v(a.doc,b);a.options.lineWrapping||(c=eb(a.display)*b.ch);var d=t(a.doc,b.line),e=qa(d)+a.display.lineSpace.offsetTop;return{left:c,
right:c,top:e,bottom:e+d.height}}function sd(a,b,c,d,e){a=p(a,b,c);a.xRel=e;d&&(a.outside=d);return a}function td(a,b,c){var d=a.doc;c+=a.display.viewOffset;if(0>c)return sd(d.first,0,null,-1,-1);var e=Ma(d,c),f=d.first+d.size-1;if(e>f)return sd(d.first+d.size-1,t(d,f).text.length,null,1,1);0>b&&(b=0);for(var g=t(d,e);;){f=zg(a,g,e,b,c);var h=void 0;var k=f.ch+(0<f.xRel||0<f.outside?1:0);if(g=va&&g.markedSpans)for(var l=0;l<g.length;++l){var m=g[l];m.marker.collapsed&&(null==m.from||m.from<k)&&(null==
m.to||m.to>k)&&(!h||0>fd(h,m.marker))&&(h=m.marker)}if(!h)return f;f=h.find(1);if(f.line==e)return f;g=t(d,e=f.line)}}function Ke(a,b,c,d){d-=qd(b);b=b.text.length;var e=sb(function(b){return ja(a,c,b-1).bottom<=d},b,0);b=sb(function(b){return ja(a,c,b).top>d},e,b);return{begin:e,end:b}}function Le(a,b,c,d){c||(c=Pa(a,b));d=uc(a,b,ja(a,c,d),"line").top;return Ke(a,b,c,d)}function ud(a,b,c,d){return a.bottom<=c?!1:a.top>c?!0:(d?a.left:a.right)>b}function zg(a,b,c,d,e){e-=qa(b);var f=Pa(a,b),g=qd(b),
h=0,k=b.text.length,l=!0,m=ua(b,a.doc.direction);m&&(m=(a.options.lineWrapping?Ag:Bg)(a,b,c,f,m,d,e),h=(l=1!=m.level)?m.from:m.to-1,k=l?m.to:m.from-1);var r=null,n=null;m=sb(function(b){var c=ja(a,f,b);c.top+=g;c.bottom+=g;if(!ud(c,d,e,!1))return!1;c.top<=e&&c.left<=d&&(r=b,n=c);return!0},h,k);var q=!1;n?(h=d-n.left<n.right-d,l=h==l,m=r+(l?0:1),l=l?"after":"before",h=h?n.left:n.right):(l||m!=k&&m!=h||m++,l=0==m?"after":m==b.text.length?"before":ja(a,f,m-(l?1:0)).bottom+g<=e==l?"after":"before",q=
ka(a,p(c,m,l),"line",b,f),h=q.left,q=e<q.top?-1:e>=q.bottom?1:0);m=$d(b.text,m,1);return sd(c,m,l,q,d-h)}function Bg(a,b,c,d,e,f,g){var h=sb(function(h){h=e[h];var k=1!=h.level;return ud(ka(a,p(c,k?h.to:h.from,k?"before":"after"),"line",b,d),f,g,!0)},0,e.length-1),k=e[h];if(0<h){var l=1!=k.level;l=ka(a,p(c,l?k.from:k.to,l?"after":"before"),"line",b,d);ud(l,f,g,!0)&&l.top>g&&(k=e[h-1])}return k}function Ag(a,b,c,d,e,f,g){g=Ke(a,b,d,g);c=g.begin;g=g.end;/\s/.test(b.text.charAt(g-1))&&g--;for(var h=
b=null,k=0;k<e.length;k++){var l=e[k];if(!(l.from>=g||l.to<=c)){var m=ja(a,d,1!=l.level?Math.min(g,l.to)-1:Math.max(c,l.from)).right;m=m<f?f-m+1E9:m-f;if(!b||h>m)b=l,h=m}}b||(b=e[e.length-1]);b.from<c&&(b={from:c,to:b.to,level:b.level});b.to>g&&(b={from:b.from,to:g,level:b.level});return b}function fb(a){if(null!=a.cachedTextHeight)return a.cachedTextHeight;if(null==Qa){Qa=u("pre",null,"CodeMirror-line-like");for(var b=0;49>b;++b)Qa.appendChild(document.createTextNode("x")),Qa.appendChild(u("br"));
Qa.appendChild(document.createTextNode("x"))}aa(a.measure,Qa);b=Qa.offsetHeight/50;3<b&&(a.cachedTextHeight=b);ea(a.measure);return b||1}function eb(a){if(null!=a.cachedCharWidth)return a.cachedCharWidth;var b=u("span","xxxxxxxxxx"),c=u("pre",[b],"CodeMirror-line-like");aa(a.measure,c);b=b.getBoundingClientRect();b=(b.right-b.left)/10;2<b&&(a.cachedCharWidth=b);return b||10}function od(a){for(var b=a.display,c={},d={},e=b.gutters.clientLeft,f=b.gutters.firstChild,g=0;f;f=f.nextSibling,++g){var h=
a.display.gutterSpecs[g].className;c[h]=f.offsetLeft+f.clientLeft+e;d[h]=f.clientWidth}return{fixedPos:vd(b),gutterTotalWidth:b.gutters.offsetWidth,gutterLeft:c,gutterWidth:d,wrapperWidth:b.wrapper.clientWidth}}function vd(a){return a.scroller.getBoundingClientRect().left-a.sizer.getBoundingClientRect().left}function Me(a){var b=fb(a.display),c=a.options.lineWrapping,d=c&&Math.max(5,a.display.scroller.clientWidth/eb(a.display)-3);return function(e){if(za(a.doc,e))return 0;var f=0;if(e.widgets)for(var g=
0;g<e.widgets.length;g++)e.widgets[g].height&&(f+=e.widgets[g].height);return c?f+(Math.ceil(e.text.length/d)||1)*b:f+b}}function wd(a){var b=a.doc,c=Me(a);b.iter(function(a){var b=c(a);b!=a.height&&na(a,b)})}function Ra(a,b,c,d){var e=a.display;if(!c&&"true"==(b.target||b.srcElement).getAttribute("cm-not-content"))return null;c=e.lineSpace.getBoundingClientRect();try{var f=b.clientX-c.left;var g=b.clientY-c.top}catch(k){return null}b=td(a,f,g);var h;d&&1==b.xRel&&(h=t(a.doc,b.line).text).length==
b.ch&&(d=fa(h,h.length,a.options.tabSize)-h.length,b=p(b.line,Math.max(0,Math.round((f-Ae(a.display).left)/eb(a.display))-d)));return b}function Oa(a,b){if(b>=a.display.viewTo)return null;b-=a.display.viewFrom;if(0>b)return null;for(var c=a.display.view,d=0;d<c.length;d++)if(b-=c[d].size,0>b)return d}function V(a,b,c,d){null==b&&(b=a.doc.first);null==c&&(c=a.doc.first+a.doc.size);d||(d=0);var e=a.display;d&&c<e.viewTo&&(null==e.updateLineNumbers||e.updateLineNumbers>b)&&(e.updateLineNumbers=b);a.curOp.viewChanged=
!0;if(b>=e.viewTo)va&&gd(a.doc,b)<e.viewTo&&Aa(a);else if(c<=e.viewFrom)va&&qe(a.doc,c+d)>e.viewFrom?Aa(a):(e.viewFrom+=d,e.viewTo+=d);else if(b<=e.viewFrom&&c>=e.viewTo)Aa(a);else if(b<=e.viewFrom){var f=vc(a,c,c+d,1);f?(e.view=e.view.slice(f.index),e.viewFrom=f.lineN,e.viewTo+=d):Aa(a)}else if(c>=e.viewTo)(f=vc(a,b,b,-1))?(e.view=e.view.slice(0,f.index),e.viewTo=f.lineN):Aa(a);else{f=vc(a,b,b,-1);var g=vc(a,c,c+d,1);f&&g?(e.view=e.view.slice(0,f.index).concat(rc(a,f.lineN,g.lineN)).concat(e.view.slice(g.index)),
e.viewTo+=d):Aa(a)}if(a=e.externalMeasured)c<a.lineN?a.lineN+=d:b<a.lineN+a.size&&(e.externalMeasured=null)}function Ba(a,b,c){a.curOp.viewChanged=!0;var d=a.display,e=a.display.externalMeasured;e&&b>=e.lineN&&b<e.lineN+e.size&&(d.externalMeasured=null);b<d.viewFrom||b>=d.viewTo||(a=d.view[Oa(a,b)],null!=a.node&&(a=a.changes||(a.changes=[]),-1==Q(a,c)&&a.push(c)))}function Aa(a){a.display.viewFrom=a.display.viewTo=a.doc.first;a.display.view=[];a.display.viewOffset=0}function vc(a,b,c,d){var e=Oa(a,
b),f=a.display.view;if(!va||c==a.doc.first+a.doc.size)return{index:e,lineN:c};for(var g=a.display.viewFrom,h=0;h<e;h++)g+=f[h].size;if(g!=b){if(0<d){if(e==f.length-1)return null;b=g+f[e].size-b;e++}else b=g-b;c+=b}for(;gd(a.doc,c)!=c;){if(e==(0>d?0:f.length-1))return null;c+=d*f[e-(0>d?1:0)].size;e+=d}return{index:e,lineN:c}}function Ne(a){a=a.display.view;for(var b=0,c=0;c<a.length;c++){var d=a[c];d.hidden||d.node&&!d.changes||++b}return b}function Eb(a){a.display.input.showSelection(a.display.input.prepareSelection())}
function Oe(a,b){void 0===b&&(b=!0);for(var c=a.doc,d={},e=d.cursors=document.createDocumentFragment(),f=d.selection=document.createDocumentFragment(),g=0;g<c.sel.ranges.length;g++)if(b||g!=c.sel.primIndex){var h=c.sel.ranges[g];if(!(h.from().line>=a.display.viewTo||h.to().line<a.display.viewFrom)){var k=h.empty();(k||a.options.showCursorWhenSelecting)&&Pe(a,h.head,e);k||Cg(a,h,f)}}return d}function Pe(a,b,c){b=ka(a,b,"div",null,null,!a.options.singleCursorHeightPerLine);var d=c.appendChild(u("div",
"\u00a0","CodeMirror-cursor"));d.style.left=b.left+"px";d.style.top=b.top+"px";d.style.height=Math.max(0,b.bottom-b.top)*a.options.cursorHeight+"px";b.other&&(a=c.appendChild(u("div","\u00a0","CodeMirror-cursor CodeMirror-secondarycursor")),a.style.display="",a.style.left=b.other.left+"px",a.style.top=b.other.top+"px",a.style.height=.85*(b.other.bottom-b.other.top)+"px")}function wc(a,b){return a.top-b.top||a.left-b.left}function Cg(a,b,c){function d(a,b,c,d){0>b&&(b=0);b=Math.round(b);d=Math.round(d);
h.appendChild(u("div",null,"CodeMirror-selected","position: absolute; left: "+a+"px;\n                             top: "+b+"px; width: "+(null==c?m-a:c)+"px;\n                             height: "+(d-b)+"px"))}function e(b,c,e){function f(c,d){return rd(a,p(b,c),"div",k,d)}function h(b,c,d){b=Le(a,k,null,b);c="ltr"==c==("after"==d)?"left":"right";d="after"==d?b.begin:b.end-(/\s/.test(k.text.charAt(b.end-1))?2:1);return f(d,c)[c]}var k=t(g,b),n=k.text.length,q,D,u=ua(k,g.direction);jg(u,c||0,null==
e?n:e,function(a,b,g,k){var p="ltr"==g,t=f(a,p?"left":"right"),v=f(b-1,p?"right":"left"),w=null==c&&0==a,x=null==e&&b==n,G=0==k;k=!u||k==u.length-1;3>=v.top-t.top?(b=(r?w:x)&&G?l:(p?t:v).left,d(b,t.top,((r?x:w)&&k?m:(p?v:t).right)-b,t.bottom)):(p?(p=r&&w&&G?l:t.left,w=r?m:h(a,g,"before"),a=r?l:h(b,g,"after"),x=r&&x&&k?m:v.right):(p=r?h(a,g,"before"):l,w=!r&&w&&G?m:t.right,a=!r&&x&&k?l:v.left,x=r?h(b,g,"after"):m),d(p,t.top,w-p,t.bottom),t.bottom<v.top&&d(l,t.bottom,null,v.top),d(a,v.top,x-a,v.bottom));
if(!q||0>wc(t,q))q=t;0>wc(v,q)&&(q=v);if(!D||0>wc(t,D))D=t;0>wc(v,D)&&(D=v)});return{start:q,end:D}}var f=a.display,g=a.doc,h=document.createDocumentFragment(),k=Ae(a.display),l=k.left,m=Math.max(f.sizerWidth,Na(a)-f.sizer.offsetLeft)-k.right,r="ltr"==g.direction;f=b.from();b=b.to();if(f.line==b.line)e(f.line,f.ch,b.ch);else{var n=t(g,f.line);k=t(g,b.line);k=pa(n)==pa(k);f=e(f.line,f.ch,k?n.text.length+1:null).end;b=e(b.line,k?0:null,b.ch).start;k&&(f.top<b.top-2?(d(f.right,f.top,null,f.bottom),d(l,
b.top,b.left,b.bottom)):d(f.right,f.top,b.left-f.right,f.bottom));f.bottom<b.top&&d(l,f.bottom,null,b.top)}c.appendChild(h)}function xd(a){if(a.state.focused){var b=a.display;clearInterval(b.blinker);var c=!0;b.cursorDiv.style.visibility="";0<a.options.cursorBlinkRate?b.blinker=setInterval(function(){return b.cursorDiv.style.visibility=(c=!c)?"":"hidden"},a.options.cursorBlinkRate):0>a.options.cursorBlinkRate&&(b.cursorDiv.style.visibility="hidden")}}function Qe(a){a.state.focused||(a.display.input.focus(),
yd(a))}function Re(a){a.state.delayingBlurEvent=!0;setTimeout(function(){a.state.delayingBlurEvent&&(a.state.delayingBlurEvent=!1,Fb(a))},100)}function yd(a,b){a.state.delayingBlurEvent&&(a.state.delayingBlurEvent=!1);"nocursor"!=a.options.readOnly&&(a.state.focused||(H(a,"focus",a,b),a.state.focused=!0,Ia(a.display.wrapper,"CodeMirror-focused"),a.curOp||a.display.selForContextMenu==a.doc.sel||(a.display.input.reset(),R&&setTimeout(function(){return a.display.input.reset(!0)},20)),a.display.input.receivedFocus()),
xd(a))}function Fb(a,b){a.state.delayingBlurEvent||(a.state.focused&&(H(a,"blur",a,b),a.state.focused=!1,Sa(a.display.wrapper,"CodeMirror-focused")),clearInterval(a.display.blinker),setTimeout(function(){a.state.focused||(a.display.shift=!1)},150))}function xc(a){for(var b=a.display,c=b.lineDiv.offsetTop,d=0;d<b.view.length;d++){var e=b.view[d],f=a.options.lineWrapping,g=0;if(!e.hidden){if(z&&8>E){f=e.node.offsetTop+e.node.offsetHeight;var h=f-c;c=f}else{var k=e.node.getBoundingClientRect();h=k.bottom-
k.top;!f&&e.text.firstChild&&(g=e.text.firstChild.getBoundingClientRect().right-k.left-1)}f=e.line.height-h;if(.005<f||-.005>f)if(na(e.line,h),Se(e.line),e.rest)for(h=0;h<e.rest.length;h++)Se(e.rest[h]);g>a.display.sizerWidth&&(g=Math.ceil(g/eb(a.display)),g>a.display.maxLineLength&&(a.display.maxLineLength=g,a.display.maxLine=e.line,a.display.maxLineChanged=!0))}}}function Se(a){if(a.widgets)for(var b=0;b<a.widgets.length;++b){var c=a.widgets[b],d=c.node.parentNode;d&&(c.height=d.offsetHeight)}}
function zd(a,b,c){var d=c&&null!=c.top?Math.max(0,c.top):a.scroller.scrollTop;d=Math.floor(d-a.lineSpace.offsetTop);var e=c&&null!=c.bottom?c.bottom:d+a.wrapper.clientHeight;d=Ma(b,d);e=Ma(b,e);if(c&&c.ensure){var f=c.ensure.from.line;c=c.ensure.to.line;f<d?(d=f,e=Ma(b,qa(t(b,f))+a.wrapper.clientHeight)):Math.min(c,b.lastLine())>=e&&(d=Ma(b,qa(t(b,c))-a.wrapper.clientHeight),e=c)}return{from:d,to:Math.max(e,d+1)}}function Ad(a,b){var c=a.display,d=fb(a.display);0>b.top&&(b.top=0);var e=a.curOp&&
null!=a.curOp.scrollTop?a.curOp.scrollTop:c.scroller.scrollTop,f=md(a),g={};b.bottom-b.top>f&&(b.bottom=b.top+f);var h=a.doc.height+ld(c),k=b.top<d;d=b.bottom>h-d;b.top<e?g.scrollTop=k?0:b.top:b.bottom>e+f&&(f=Math.min(b.top,(d?h:b.bottom)-f),f!=e&&(g.scrollTop=f));e=a.curOp&&null!=a.curOp.scrollLeft?a.curOp.scrollLeft:c.scroller.scrollLeft;c=Na(a)-(a.options.fixedGutter?c.gutters.offsetWidth:0);if(f=b.right-b.left>c)b.right=b.left+c;10>b.left?g.scrollLeft=0:b.left<e?g.scrollLeft=Math.max(0,b.left-
(f?0:10)):b.right>c+e-3&&(g.scrollLeft=b.right+(f?0:10)-c);return g}function yc(a,b){null!=b&&(zc(a),a.curOp.scrollTop=(null==a.curOp.scrollTop?a.doc.scrollTop:a.curOp.scrollTop)+b)}function gb(a){zc(a);var b=a.getCursor();a.curOp.scrollToPos={from:b,to:b,margin:a.options.cursorScrollMargin}}function Gb(a,b,c){null==b&&null==c||zc(a);null!=b&&(a.curOp.scrollLeft=b);null!=c&&(a.curOp.scrollTop=c)}function zc(a){var b=a.curOp.scrollToPos;if(b){a.curOp.scrollToPos=null;var c=Je(a,b.from),d=Je(a,b.to);
Te(a,c,d,b.margin)}}function Te(a,b,c,d){b=Ad(a,{left:Math.min(b.left,c.left),top:Math.min(b.top,c.top)-d,right:Math.max(b.right,c.right),bottom:Math.max(b.bottom,c.bottom)+d});Gb(a,b.scrollLeft,b.scrollTop)}function Hb(a,b){2>Math.abs(a.doc.scrollTop-b)||(Ca||Bd(a,{top:b}),Ue(a,b,!0),Ca&&Bd(a),Ib(a,100))}function Ue(a,b,c){b=Math.min(a.display.scroller.scrollHeight-a.display.scroller.clientHeight,b);if(a.display.scroller.scrollTop!=b||c)a.doc.scrollTop=b,a.display.scrollbars.setScrollTop(b),a.display.scroller.scrollTop!=
b&&(a.display.scroller.scrollTop=b)}function Ta(a,b,c,d){b=Math.min(b,a.display.scroller.scrollWidth-a.display.scroller.clientWidth);(c?b==a.doc.scrollLeft:2>Math.abs(a.doc.scrollLeft-b))&&!d||(a.doc.scrollLeft=b,Ve(a),a.display.scroller.scrollLeft!=b&&(a.display.scroller.scrollLeft=b),a.display.scrollbars.setScrollLeft(b))}function Jb(a){var b=a.display,c=b.gutters.offsetWidth,d=Math.round(a.doc.height+ld(a.display));return{clientHeight:b.scroller.clientHeight,viewHeight:b.wrapper.clientHeight,scrollWidth:b.scroller.scrollWidth,
clientWidth:b.scroller.clientWidth,viewWidth:b.wrapper.clientWidth,barLeft:a.options.fixedGutter?c:0,docHeight:d,scrollHeight:d+ra(a)+b.barHeight,nativeBarWidth:b.nativeBarWidth,gutterWidth:c}}function hb(a,b){b||(b=Jb(a));var c=a.display.barWidth,d=a.display.barHeight;We(a,b);for(var e=0;4>e&&c!=a.display.barWidth||d!=a.display.barHeight;e++)c!=a.display.barWidth&&a.options.lineWrapping&&xc(a),We(a,Jb(a)),c=a.display.barWidth,d=a.display.barHeight}function We(a,b){var c=a.display,d=c.scrollbars.update(b);
c.sizer.style.paddingRight=(c.barWidth=d.right)+"px";c.sizer.style.paddingBottom=(c.barHeight=d.bottom)+"px";c.heightForcer.style.borderBottom=d.bottom+"px solid transparent";d.right&&d.bottom?(c.scrollbarFiller.style.display="block",c.scrollbarFiller.style.height=d.bottom+"px",c.scrollbarFiller.style.width=d.right+"px"):c.scrollbarFiller.style.display="";d.bottom&&a.options.coverGutterNextToScrollbar&&a.options.fixedGutter?(c.gutterFiller.style.display="block",c.gutterFiller.style.height=d.bottom+
"px",c.gutterFiller.style.width=b.gutterWidth+"px"):c.gutterFiller.style.display=""}function Xe(a){a.display.scrollbars&&(a.display.scrollbars.clear(),a.display.scrollbars.addClass&&Sa(a.display.wrapper,a.display.scrollbars.addClass));a.display.scrollbars=new Ye[a.options.scrollbarStyle](function(b){a.display.wrapper.insertBefore(b,a.display.scrollbarFiller);w(b,"mousedown",function(){a.state.focused&&setTimeout(function(){return a.display.input.focus()},0)});b.setAttribute("cm-not-content","true")},
function(b,c){"horizontal"==c?Ta(a,b):Hb(a,b)},a);a.display.scrollbars.addClass&&Ia(a.display.wrapper,a.display.scrollbars.addClass)}function Ua(a){a.curOp={cm:a,viewChanged:!1,startHeight:a.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++Dg};a=a.curOp;db?db.ops.push(a):a.ownsGroup=db={ops:[a],delayedCallbacks:[]}}function Va(a){(a=
a.curOp)&&wg(a,function(a){for(var b=0;b<a.ops.length;b++)a.ops[b].cm.curOp=null;a=a.ops;for(b=0;b<a.length;b++){var d=a[b],e=d.cm,f=e.display,g=e.display;!g.scrollbarsClipped&&g.scroller.offsetWidth&&(g.nativeBarWidth=g.scroller.offsetWidth-g.scroller.clientWidth,g.heightForcer.style.height=ra(e)+"px",g.sizer.style.marginBottom=-g.nativeBarWidth+"px",g.sizer.style.borderRightWidth=ra(e)+"px",g.scrollbarsClipped=!0);d.updateMaxLine&&id(e);d.mustUpdate=d.viewChanged||d.forceUpdate||null!=d.scrollTop||
d.scrollToPos&&(d.scrollToPos.from.line<f.viewFrom||d.scrollToPos.to.line>=f.viewTo)||f.maxLineChanged&&e.options.lineWrapping;d.update=d.mustUpdate&&new Ac(e,d.mustUpdate&&{top:d.scrollTop,ensure:d.scrollToPos},d.forceUpdate)}for(b=0;b<a.length;b++)d=a[b],d.updatedDisplay=d.mustUpdate&&Cd(d.cm,d.update);for(b=0;b<a.length;b++)if(d=a[b],e=d.cm,f=e.display,d.updatedDisplay&&xc(e),d.barMeasure=Jb(e),f.maxLineChanged&&!e.options.lineWrapping&&(g=f.maxLine.text.length,g=ja(e,Pa(e,f.maxLine),g,void 0),
d.adjustWidthTo=g.left+3,e.display.sizerWidth=d.adjustWidthTo,d.barMeasure.scrollWidth=Math.max(f.scroller.clientWidth,f.sizer.offsetLeft+d.adjustWidthTo+ra(e)+e.display.barWidth),d.maxScrollLeft=Math.max(0,f.sizer.offsetLeft+d.adjustWidthTo-Na(e))),d.updatedDisplay||d.selectionChanged)d.preparedSelection=f.input.prepareSelection();for(b=0;b<a.length;b++)d=a[b],e=d.cm,null!=d.adjustWidthTo&&(e.display.sizer.style.minWidth=d.adjustWidthTo+"px",d.maxScrollLeft<e.doc.scrollLeft&&Ta(e,Math.min(e.display.scroller.scrollLeft,
d.maxScrollLeft),!0),e.display.maxLineChanged=!1),f=d.focus&&d.focus==ta(),d.preparedSelection&&e.display.input.showSelection(d.preparedSelection,f),(d.updatedDisplay||d.startHeight!=e.doc.height)&&hb(e,d.barMeasure),d.updatedDisplay&&Dd(e,d.barMeasure),d.selectionChanged&&xd(e),e.state.focused&&d.updateInput&&e.display.input.reset(d.typing),f&&Qe(d.cm);for(b=0;b<a.length;b++){var h=void 0;d=a[b];e=d.cm;f=e.display;g=e.doc;d.updatedDisplay&&Ze(e,d.update);null==f.wheelStartX||null==d.scrollTop&&null==
d.scrollLeft&&!d.scrollToPos||(f.wheelStartX=f.wheelStartY=null);null!=d.scrollTop&&Ue(e,d.scrollTop,d.forceScroll);null!=d.scrollLeft&&Ta(e,d.scrollLeft,!0,!0);if(d.scrollToPos){var k=v(g,d.scrollToPos.from);var l=v(g,d.scrollToPos.to);var m=d.scrollToPos.margin;null==m&&(m=0);e.options.lineWrapping||k!=l||(k=k.ch?p(k.line,"before"==k.sticky?k.ch-1:k.ch,"after"):k,l="before"==k.sticky?p(k.line,k.ch+1,"before"):k);for(var r=0;5>r;r++){var n=!1;h=ka(e,k);var q=l&&l!=k?ka(e,l):h;h={left:Math.min(h.left,
q.left),top:Math.min(h.top,q.top)-m,right:Math.max(h.left,q.left),bottom:Math.max(h.bottom,q.bottom)+m};q=Ad(e,h);var D=e.doc.scrollTop,t=e.doc.scrollLeft;null!=q.scrollTop&&(Hb(e,q.scrollTop),1<Math.abs(e.doc.scrollTop-D)&&(n=!0));null!=q.scrollLeft&&(Ta(e,q.scrollLeft),1<Math.abs(e.doc.scrollLeft-t)&&(n=!0));if(!n)break}l=h;K(e,"scrollCursorIntoView")||(m=e.display,r=m.sizer.getBoundingClientRect(),k=null,0>l.top+r.top?k=!0:l.bottom+r.top>(window.innerHeight||document.documentElement.clientHeight)&&
(k=!1),null==k||Eg||(l=u("div","\u200b",null,"position: absolute;\n                         top: "+(l.top-m.viewOffset-e.display.lineSpace.offsetTop)+"px;\n                         height: "+(l.bottom-l.top+ra(e)+m.barHeight)+"px;\n                         left: "+l.left+"px; width: "+Math.max(2,l.right-l.left)+"px;"),e.display.lineSpace.appendChild(l),l.scrollIntoView(k),e.display.lineSpace.removeChild(l)))}l=d.maybeHiddenMarkers;k=d.maybeUnhiddenMarkers;if(l)for(m=0;m<l.length;++m)l[m].lines.length||
H(l[m],"hide");if(k)for(l=0;l<k.length;++l)k[l].lines.length&&H(k[l],"unhide");f.wrapper.offsetHeight&&(g.scrollTop=e.display.scroller.scrollTop);d.changeObjs&&H(e,"changes",e,d.changeObjs);d.update&&d.update.finish()}})}function Y(a,b){if(a.curOp)return b();Ua(a);try{return b()}finally{Va(a)}}function L(a,b){return function(){if(a.curOp)return b.apply(a,arguments);Ua(a);try{return b.apply(a,arguments)}finally{Va(a)}}}function S(a){return function(){if(this.curOp)return a.apply(this,arguments);Ua(this);
try{return a.apply(this,arguments)}finally{Va(this)}}}function M(a){return function(){var b=this.cm;if(!b||b.curOp)return a.apply(this,arguments);Ua(b);try{return a.apply(this,arguments)}finally{Va(b)}}}function Ib(a,b){a.doc.highlightFrontier<a.display.viewTo&&a.state.highlight.set(b,gc(Fg,a))}function Fg(a){var b=a.doc;if(!(b.highlightFrontier>=a.display.viewTo)){var c=+new Date+a.options.workTime,d=xb(a,b.highlightFrontier),e=[];b.iter(d.line,Math.min(b.first+b.size,a.display.viewTo+500),function(f){if(d.line>=
a.display.viewFrom){var g=f.styles,h=f.text.length>a.options.maxHighlightLength?Ka(b.mode,d.state):null,k=fe(a,f,d,!0);h&&(d.state=h);f.styles=k.styles;h=f.styleClasses;(k=k.classes)?f.styleClasses=k:h&&(f.styleClasses=null);k=!g||g.length!=f.styles.length||h!=k&&(!h||!k||h.bgClass!=k.bgClass||h.textClass!=k.textClass);for(h=0;!k&&h<g.length;++h)k=g[h]!=f.styles[h];k&&e.push(d.line);f.stateAfter=d.save()}else f.text.length<=a.options.maxHighlightLength&&cd(a,f.text,d),f.stateAfter=0==d.line%5?d.save():
null;d.nextLine();if(+new Date>c)return Ib(a,a.options.workDelay),!0});b.highlightFrontier=d.line;b.modeFrontier=Math.max(b.modeFrontier,d.line);e.length&&Y(a,function(){for(var b=0;b<e.length;b++)Ba(a,e[b],"text")})}}function Cd(a,b){var c=a.display,d=a.doc;if(b.editorIsHidden)return Aa(a),!1;if(!b.force&&b.visible.from>=c.viewFrom&&b.visible.to<=c.viewTo&&(null==c.updateLineNumbers||c.updateLineNumbers>=c.viewTo)&&c.renderedView==c.view&&0==Ne(a))return!1;$e(a)&&(Aa(a),b.dims=od(a));var e=d.first+
d.size,f=Math.max(b.visible.from-a.options.viewportMargin,d.first),g=Math.min(e,b.visible.to+a.options.viewportMargin);c.viewFrom<f&&20>f-c.viewFrom&&(f=Math.max(d.first,c.viewFrom));c.viewTo>g&&20>c.viewTo-g&&(g=Math.min(e,c.viewTo));va&&(f=gd(a.doc,f),g=qe(a.doc,g));d=f!=c.viewFrom||g!=c.viewTo||c.lastWrapHeight!=b.wrapperHeight||c.lastWrapWidth!=b.wrapperWidth;e=a.display;0==e.view.length||f>=e.viewTo||g<=e.viewFrom?(e.view=rc(a,f,g),e.viewFrom=f):(e.viewFrom>f?e.view=rc(a,f,e.viewFrom).concat(e.view):
e.viewFrom<f&&(e.view=e.view.slice(Oa(a,f))),e.viewFrom=f,e.viewTo<g?e.view=e.view.concat(rc(a,e.viewTo,g)):e.viewTo>g&&(e.view=e.view.slice(0,Oa(a,g))));e.viewTo=g;c.viewOffset=qa(t(a.doc,c.viewFrom));a.display.mover.style.top=c.viewOffset+"px";g=Ne(a);if(!d&&0==g&&!b.force&&c.renderedView==c.view&&(null==c.updateLineNumbers||c.updateLineNumbers>=c.viewTo))return!1;a.hasFocus()?f=null:(f=ta())&&ya(a.display.lineDiv,f)?(f={activeElt:f},window.getSelection&&(e=window.getSelection(),e.anchorNode&&e.extend&&
ya(a.display.lineDiv,e.anchorNode)&&(f.anchorNode=e.anchorNode,f.anchorOffset=e.anchorOffset,f.focusNode=e.focusNode,f.focusOffset=e.focusOffset))):f=null;4<g&&(c.lineDiv.style.display="none");Gg(a,c.updateLineNumbers,b.dims);4<g&&(c.lineDiv.style.display="");c.renderedView=c.view;(g=f)&&g.activeElt&&g.activeElt!=ta()&&(g.activeElt.focus(),g.anchorNode&&ya(document.body,g.anchorNode)&&ya(document.body,g.focusNode)&&(f=window.getSelection(),e=document.createRange(),e.setEnd(g.anchorNode,g.anchorOffset),
e.collapse(!1),f.removeAllRanges(),f.addRange(e),f.extend(g.focusNode,g.focusOffset)));ea(c.cursorDiv);ea(c.selectionDiv);c.gutters.style.height=c.sizer.style.minHeight=0;d&&(c.lastWrapHeight=b.wrapperHeight,c.lastWrapWidth=b.wrapperWidth,Ib(a,400));c.updateLineNumbers=null;return!0}function Ze(a,b){for(var c=b.viewport,d=!0;;d=!1){if(!d||!a.options.lineWrapping||b.oldDisplayWidth==Na(a))if(c&&null!=c.top&&(c={top:Math.min(a.doc.height+ld(a.display)-md(a),c.top)}),b.visible=zd(a.display,a.doc,c),
b.visible.from>=a.display.viewFrom&&b.visible.to<=a.display.viewTo)break;if(!Cd(a,b))break;xc(a);d=Jb(a);Eb(a);hb(a,d);Dd(a,d);b.force=!1}b.signal(a,"update",a);if(a.display.viewFrom!=a.display.reportedViewFrom||a.display.viewTo!=a.display.reportedViewTo)b.signal(a,"viewportChange",a,a.display.viewFrom,a.display.viewTo),a.display.reportedViewFrom=a.display.viewFrom,a.display.reportedViewTo=a.display.viewTo}function Bd(a,b){var c=new Ac(a,b);if(Cd(a,c)){xc(a);Ze(a,c);var d=Jb(a);Eb(a);hb(a,d);Dd(a,
d);c.finish()}}function Gg(a,b,c){function d(b){var d=b.nextSibling;R&&ia&&a.display.currentWheelTarget==b?b.style.display="none":b.parentNode.removeChild(b);return d}var e=a.display,f=a.options.lineNumbers,g=e.lineDiv,h=g.firstChild,k=e.view;e=e.viewFrom;for(var l=0;l<k.length;l++){var m=k[l];if(!m.hidden)if(m.node&&m.node.parentNode==g){for(;h!=m.node;)h=d(h);h=f&&null!=b&&b<=e&&m.lineNumber;m.changes&&(-1<Q(m.changes,"gutter")&&(h=!1),ve(a,m,e,c));h&&(ea(m.lineNumber),m.lineNumber.appendChild(document.createTextNode($c(a.options,
e))));h=m.node.nextSibling}else{var r=yg(a,m,e,c);g.insertBefore(r,h)}e+=m.size}for(;h;)h=d(h)}function Ed(a){a.sizer.style.marginLeft=a.gutters.offsetWidth+"px"}function Dd(a,b){a.display.sizer.style.minHeight=b.docHeight+"px";a.display.heightForcer.style.top=b.docHeight+"px";a.display.gutters.style.height=b.docHeight+a.display.barHeight+ra(a)+"px"}function Ve(a){var b=a.display,c=b.view;if(b.alignWidgets||b.gutters.firstChild&&a.options.fixedGutter){for(var d=vd(b)-b.scroller.scrollLeft+a.doc.scrollLeft,
e=b.gutters.offsetWidth,f=d+"px",g=0;g<c.length;g++)if(!c[g].hidden){a.options.fixedGutter&&(c[g].gutter&&(c[g].gutter.style.left=f),c[g].gutterBackground&&(c[g].gutterBackground.style.left=f));var h=c[g].alignable;if(h)for(var k=0;k<h.length;k++)h[k].style.left=f}a.options.fixedGutter&&(b.gutters.style.left=d+e+"px")}}function $e(a){if(!a.options.lineNumbers)return!1;var b=a.doc;b=$c(a.options,b.first+b.size-1);var c=a.display;if(b.length!=c.lineNumChars){var d=c.measure.appendChild(u("div",[u("div",
b)],"CodeMirror-linenumber CodeMirror-gutter-elt")),e=d.firstChild.offsetWidth;d=d.offsetWidth-e;c.lineGutter.style.width="";c.lineNumInnerWidth=Math.max(e,c.lineGutter.offsetWidth-d)+1;c.lineNumWidth=c.lineNumInnerWidth+d;c.lineNumChars=c.lineNumInnerWidth?b.length:-1;c.lineGutter.style.width=c.lineNumWidth+"px";Ed(a.display);return!0}return!1}function Fd(a,b){for(var c=[],d=!1,e=0;e<a.length;e++){var f=a[e],g=null;"string"!=typeof f&&(g=f.style,f=f.className);if("CodeMirror-linenumbers"==f)if(b)d=
!0;else continue;c.push({className:f,style:g})}b&&!d&&c.push({className:"CodeMirror-linenumbers",style:null});return c}function af(a){var b=a.gutters,c=a.gutterSpecs;ea(b);a.lineGutter=null;for(var d=0;d<c.length;++d){var e=c[d],f=e.className;e=e.style;var g=b.appendChild(u("div",null,"CodeMirror-gutter "+f));e&&(g.style.cssText=e);"CodeMirror-linenumbers"==f&&(a.lineGutter=g,g.style.width=(a.lineNumWidth||1)+"px")}b.style.display=c.length?"":"none";Ed(a)}function Kb(a){af(a.display);V(a);Ve(a)}function Hg(a,
b,c,d){this.input=c;this.scrollbarFiller=u("div",null,"CodeMirror-scrollbar-filler");this.scrollbarFiller.setAttribute("cm-not-content","true");this.gutterFiller=u("div",null,"CodeMirror-gutter-filler");this.gutterFiller.setAttribute("cm-not-content","true");this.lineDiv=Za("div",null,"CodeMirror-code");this.selectionDiv=u("div",null,null,"position: relative; z-index: 1");this.cursorDiv=u("div",null,"CodeMirror-cursors");this.measure=u("div",null,"CodeMirror-measure");this.lineMeasure=u("div",null,
"CodeMirror-measure");this.lineSpace=Za("div",[this.measure,this.lineMeasure,this.selectionDiv,this.cursorDiv,this.lineDiv],null,"position: relative; outline: none");var e=Za("div",[this.lineSpace],"CodeMirror-lines");this.mover=u("div",[e],null,"position: relative");this.sizer=u("div",[this.mover],"CodeMirror-sizer");this.sizerWidth=null;this.heightForcer=u("div",null,null,"position: absolute; height: 30px; width: 1px;");this.gutters=u("div",null,"CodeMirror-gutters");this.lineGutter=null;this.scroller=
u("div",[this.sizer,this.heightForcer,this.gutters],"CodeMirror-scroll");this.scroller.setAttribute("tabIndex","-1");this.wrapper=u("div",[this.scrollbarFiller,this.gutterFiller,this.scroller],"CodeMirror");z&&8>E&&(this.gutters.style.zIndex=-1,this.scroller.style.paddingRight=0);R||Ca&&Lb||(this.scroller.draggable=!0);a&&(a.appendChild?a.appendChild(this.wrapper):a(this.wrapper));this.reportedViewFrom=this.reportedViewTo=this.viewFrom=this.viewTo=b.first;this.view=[];this.externalMeasured=this.renderedView=
null;this.lastWrapHeight=this.lastWrapWidth=this.viewOffset=0;this.updateLineNumbers=null;this.nativeBarWidth=this.barHeight=this.barWidth=0;this.scrollbarsClipped=!1;this.lineNumWidth=this.lineNumInnerWidth=this.lineNumChars=null;this.alignWidgets=!1;this.maxLine=this.cachedCharWidth=this.cachedTextHeight=this.cachedPaddingH=null;this.maxLineLength=0;this.maxLineChanged=!1;this.wheelDX=this.wheelDY=this.wheelStartX=this.wheelStartY=null;this.shift=!1;this.activeTouch=this.selForContextMenu=null;
this.gutterSpecs=Fd(d.gutters,d.lineNumbers);af(this);c.init(this)}function bf(a){var b=a.wheelDeltaX,c=a.wheelDeltaY;null==b&&a.detail&&a.axis==a.HORIZONTAL_AXIS&&(b=a.detail);null==c&&a.detail&&a.axis==a.VERTICAL_AXIS?c=a.detail:null==c&&(c=a.wheelDelta);return{x:b,y:c}}function Ig(a){a=bf(a);a.x*=ca;a.y*=ca;return a}function cf(a,b){var c=bf(b),d=c.x;c=c.y;var e=a.display,f=e.scroller,g=f.scrollWidth>f.clientWidth,h=f.scrollHeight>f.clientHeight;if(d&&g||c&&h){if(c&&ia&&R){g=b.target;var k=e.view;
a:for(;g!=f;g=g.parentNode)for(var l=0;l<k.length;l++)if(k[l].node==g){a.display.currentWheelTarget=g;break a}}!d||Ca||la||null==ca?(c&&null!=ca&&(h=c*ca,g=a.doc.scrollTop,k=g+e.wrapper.clientHeight,0>h?g=Math.max(0,g+h-50):k=Math.min(a.doc.height,k+h+50),Bd(a,{top:g,bottom:k})),20>Bc&&(null==e.wheelStartX?(e.wheelStartX=f.scrollLeft,e.wheelStartY=f.scrollTop,e.wheelDX=d,e.wheelDY=c,setTimeout(function(){if(null!=e.wheelStartX){var a=f.scrollLeft-e.wheelStartX,b=f.scrollTop-e.wheelStartY;a=b&&e.wheelDY&&
b/e.wheelDY||a&&e.wheelDX&&a/e.wheelDX;e.wheelStartX=e.wheelStartY=null;a&&(ca=(ca*Bc+a)/(Bc+1),++Bc)}},200)):(e.wheelDX+=d,e.wheelDY+=c))):(c&&h&&Hb(a,Math.max(0,f.scrollTop+c*ca)),Ta(a,Math.max(0,f.scrollLeft+d*ca)),(!c||c&&h)&&U(b),e.wheelStartX=null)}}function ma(a,b,c){a=a&&a.options.selectionsMayTouch;c=b[c];b.sort(function(a,b){return x(a.from(),b.from())});c=Q(b,c);for(var d=1;d<b.length;d++){var e=b[d],f=b[d-1],g=x(f.to(),e.from());if(a&&!e.empty()?0<g:0<=g){g=nc(f.from(),e.from());var h=
mc(f.to(),e.to());e=f.empty()?e.from()==e.head:f.from()==f.head;d<=c&&--c;b.splice(--d,2,new A(e?h:g,e?g:h))}}return new da(b,c)}function xa(a,b){return new da([new A(a,b||a)],0)}function Da(a){return a.text?p(a.from.line+a.text.length-1,y(a.text).length+(1==a.text.length?a.from.ch:0)):a.to}function df(a,b){if(0>x(a,b.from))return a;if(0>=x(a,b.to))return Da(b);var c=a.line+b.text.length-(b.to.line-b.from.line)-1,d=a.ch;a.line==b.to.line&&(d+=Da(b).ch-b.to.ch);return p(c,d)}function Gd(a,b){for(var c=
[],d=0;d<a.sel.ranges.length;d++){var e=a.sel.ranges[d];c.push(new A(df(e.anchor,b),df(e.head,b)))}return ma(a.cm,c,a.sel.primIndex)}function ef(a,b,c){return a.line==b.line?p(c.line,a.ch-b.ch+c.ch):p(c.line+(a.line-b.line),a.ch)}function Hd(a){a.doc.mode=Xc(a.options,a.doc.modeOption);Mb(a)}function Mb(a){a.doc.iter(function(a){a.stateAfter&&(a.stateAfter=null);a.styles&&(a.styles=null)});a.doc.modeFrontier=a.doc.highlightFrontier=a.doc.first;Ib(a,100);a.state.modeGen++;a.curOp&&V(a)}function ff(a,
b){return 0==b.from.ch&&0==b.to.ch&&""==y(b.text)&&(!a.cm||a.cm.options.wholeLineUpdateBefore)}function Id(a,b,c,d){function e(a,c,e){a.text=c;a.stateAfter&&(a.stateAfter=null);a.styles&&(a.styles=null);null!=a.order&&(a.order=null);ne(a);oe(a,e);c=d?d(a):1;c!=a.height&&na(a,c);O(a,"change",a,b)}function f(a,b){for(var e=[],f=a;f<b;++f)e.push(new ib(k[f],c?c[f]:null,d));return e}var g=b.from,h=b.to,k=b.text,l=t(a,g.line),m=t(a,h.line),r=y(k),n=c?c[k.length-1]:null,q=h.line-g.line;b.full?(a.insert(0,
f(0,k.length)),a.remove(k.length,a.size-k.length)):ff(a,b)?(h=f(0,k.length-1),e(m,m.text,n),q&&a.remove(g.line,q),h.length&&a.insert(g.line,h)):l==m?1==k.length?e(l,l.text.slice(0,g.ch)+r+l.text.slice(h.ch),n):(q=f(1,k.length-1),q.push(new ib(r+l.text.slice(h.ch),n,d)),e(l,l.text.slice(0,g.ch)+k[0],c?c[0]:null),a.insert(g.line+1,q)):1==k.length?(e(l,l.text.slice(0,g.ch)+k[0]+m.text.slice(h.ch),c?c[0]:null),a.remove(g.line+1,q)):(e(l,l.text.slice(0,g.ch)+k[0],c?c[0]:null),e(m,r+m.text.slice(h.ch),
n),n=f(1,k.length-1),1<q&&a.remove(g.line+1,q-1),a.insert(g.line+1,n));O(a,"change",a,b)}function Wa(a,b,c){function d(a,f,g){if(a.linked)for(var e=0;e<a.linked.length;++e){var k=a.linked[e];if(k.doc!=f){var l=g&&k.sharedHist;if(!c||l)b(k.doc,l),d(k.doc,a,l)}}}d(a,null,!0)}function gf(a,b){if(b.cm)throw Error("This document is already in use.");a.doc=b;b.cm=a;wd(a);Hd(a);hf(a);a.options.lineWrapping||id(a);a.options.mode=b.modeOption;V(a)}function hf(a){("rtl"==a.doc.direction?Ia:Sa)(a.display.lineDiv,
"CodeMirror-rtl")}function Jg(a){Y(a,function(){hf(a);V(a)})}function Cc(a){this.done=[];this.undone=[];this.undoDepth=Infinity;this.lastModTime=this.lastSelTime=0;this.lastOrigin=this.lastSelOrigin=this.lastOp=this.lastSelOp=null;this.generation=this.maxGeneration=a||1}function Jd(a,b){var c={from:bd(b.from),to:Da(b),text:La(a,b.from,b.to)};jf(a,c,b.from.line,b.to.line+1);Wa(a,function(a){return jf(a,c,b.from.line,b.to.line+1)},!0);return c}function kf(a){for(;a.length;)if(y(a).ranges)a.pop();else break}
function lf(a,b,c,d){var e=a.history;e.undone.length=0;var f=+new Date,g;if(g=e.lastOp==d||e.lastOrigin==b.origin&&b.origin&&("+"==b.origin.charAt(0)&&e.lastModTime>f-(a.cm?a.cm.options.historyEventDelay:500)||"*"==b.origin.charAt(0))){if(e.lastOp==d){kf(e.done);var h=y(e.done)}else e.done.length&&!y(e.done).ranges?h=y(e.done):1<e.done.length&&!e.done[e.done.length-2].ranges?(e.done.pop(),h=y(e.done)):h=void 0;g=h}if(g){var k=y(h.changes);0==x(b.from,b.to)&&0==x(b.from,k.to)?k.to=Da(b):h.changes.push(Jd(a,
b))}else for((h=y(e.done))&&h.ranges||Dc(a.sel,e.done),h={changes:[Jd(a,b)],generation:e.generation},e.done.push(h);e.done.length>e.undoDepth;)e.done.shift(),e.done[0].ranges||e.done.shift();e.done.push(c);e.generation=++e.maxGeneration;e.lastModTime=e.lastSelTime=f;e.lastOp=e.lastSelOp=d;e.lastOrigin=e.lastSelOrigin=b.origin;k||H(a,"historyAdded")}function Dc(a,b){var c=y(b);c&&c.ranges&&c.equals(a)||b.push(a)}function jf(a,b,c,d){var e=b["spans_"+a.id],f=0;a.iter(Math.max(a.first,c),Math.min(a.first+
a.size,d),function(d){d.markedSpans&&((e||(e=b["spans_"+a.id]={}))[f]=d.markedSpans);++f})}function Kg(a){if(!a)return null;for(var b,c=0;c<a.length;++c)a[c].marker.explicitlyCleared?b||(b=a.slice(0,c)):b&&b.push(a[c]);return b?b.length?b:null:a}function mf(a,b){var c;if(c=b["spans_"+a.id]){for(var d=[],e=0;e<b.text.length;++e)d.push(Kg(c[e]));c=d}else c=null;d=ed(a,b);if(!c)return d;if(!d)return c;for(e=0;e<c.length;++e){var f=c[e],g=d[e];if(f&&g){var h=0;a:for(;h<g.length;++h){for(var k=g[h],l=
0;l<f.length;++l)if(f[l].marker==k.marker)continue a;f.push(k)}}else g&&(c[e]=g)}return c}function jb(a,b,c){for(var d=[],e=0;e<a.length;++e){var f=a[e];if(f.ranges)d.push(c?da.prototype.deepCopy.call(f):f);else{f=f.changes;var g=[];d.push({changes:g});for(var h=0;h<f.length;++h){var k=f[h],l;g.push({from:k.from,to:k.to,text:k.text});if(b)for(var m in k)(l=m.match(/^spans_(\d+)$/))&&-1<Q(b,Number(l[1]))&&(y(g)[m]=k[m],delete k[m])}}}return d}function Kd(a,b,c,d){return d?(a=a.anchor,c&&(d=0>x(b,a),
d!=0>x(c,a)?(a=b,b=c):d!=0>x(b,c)&&(b=c)),new A(a,b)):new A(c||b,b)}function Ec(a,b,c,d,e){null==e&&(e=a.cm&&(a.cm.display.shift||a.extend));P(a,new da([Kd(a.sel.primary(),b,c,e)],0),d)}function nf(a,b,c){for(var d=[],e=a.cm&&(a.cm.display.shift||a.extend),f=0;f<a.sel.ranges.length;f++)d[f]=Kd(a.sel.ranges[f],b[f],null,e);b=ma(a.cm,d,a.sel.primIndex);P(a,b,c)}function Ld(a,b,c,d){var e=a.sel.ranges.slice(0);e[b]=c;P(a,ma(a.cm,e,a.sel.primIndex),d)}function Lg(a,b,c){c={ranges:b.ranges,update:function(b){this.ranges=
[];for(var d=0;d<b.length;d++)this.ranges[d]=new A(v(a,b[d].anchor),v(a,b[d].head))},origin:c&&c.origin};H(a,"beforeSelectionChange",a,c);a.cm&&H(a.cm,"beforeSelectionChange",a.cm,c);return c.ranges!=b.ranges?ma(a.cm,c.ranges,c.ranges.length-1):b}function of(a,b,c){var d=a.history.done,e=y(d);e&&e.ranges?(d[d.length-1]=b,Fc(a,b,c)):P(a,b,c)}function P(a,b,c){Fc(a,b,c);b=a.sel;var d=a.cm?a.cm.curOp.id:NaN,e=a.history,f=c&&c.origin,g;if(!(g=d==e.lastSelOp)&&(g=f&&e.lastSelOrigin==f)&&!(g=e.lastModTime==
e.lastSelTime&&e.lastOrigin==f)){g=y(e.done);var h=f.charAt(0);g="*"==h||"+"==h&&g.ranges.length==b.ranges.length&&g.somethingSelected()==b.somethingSelected()&&new Date-a.history.lastSelTime<=(a.cm?a.cm.options.historyEventDelay:500)}g?e.done[e.done.length-1]=b:Dc(b,e.done);e.lastSelTime=+new Date;e.lastSelOrigin=f;e.lastSelOp=d;c&&!1!==c.clearRedo&&kf(e.undone)}function Fc(a,b,c){if(ha(a,"beforeSelectionChange")||a.cm&&ha(a.cm,"beforeSelectionChange"))b=Lg(a,b,c);var d=c&&c.bias||(0>x(b.primary().head,
a.sel.primary().head)?-1:1);pf(a,qf(a,b,d,!0));c&&!1===c.scroll||!a.cm||gb(a.cm)}function pf(a,b){b.equals(a.sel)||(a.sel=b,a.cm&&(a.cm.curOp.updateInput=1,a.cm.curOp.selectionChanged=!0,ae(a.cm)),O(a,"cursorActivity",a))}function rf(a){pf(a,qf(a,a.sel,null,!1))}function qf(a,b,c,d){for(var e,f=0;f<b.ranges.length;f++){var g=b.ranges[f],h=b.ranges.length==a.sel.ranges.length&&a.sel.ranges[f],k=Gc(a,g.anchor,h&&h.anchor,c,d);h=Gc(a,g.head,h&&h.head,c,d);if(e||k!=g.anchor||h!=g.head)e||(e=b.ranges.slice(0,
f)),e[f]=new A(k,h)}return e?ma(a.cm,e,b.primIndex):b}function kb(a,b,c,d,e){var f=t(a,b.line);if(f.markedSpans)for(var g=0;g<f.markedSpans.length;++g){var h=f.markedSpans[g],k=h.marker,l="selectLeft"in k?!k.selectLeft:k.inclusiveLeft,m="selectRight"in k?!k.selectRight:k.inclusiveRight;if((null==h.from||(l?h.from<=b.ch:h.from<b.ch))&&(null==h.to||(m?h.to>=b.ch:h.to>b.ch))){if(e&&(H(k,"beforeCursorEnter"),k.explicitlyCleared))if(f.markedSpans){--g;continue}else break;if(k.atomic){if(c){g=k.find(0>
d?1:-1);h=void 0;if(0>d?m:l)g=sf(a,g,-d,g&&g.line==b.line?f:null);if(g&&g.line==b.line&&(h=x(g,c))&&(0>d?0>h:0<h))return kb(a,g,b,d,e)}c=k.find(0>d?-1:1);if(0>d?l:m)c=sf(a,c,d,c.line==b.line?f:null);return c?kb(a,c,b,d,e):null}}}return b}function Gc(a,b,c,d,e){d=d||1;b=kb(a,b,c,d,e)||!e&&kb(a,b,c,d,!0)||kb(a,b,c,-d,e)||!e&&kb(a,b,c,-d,!0);return b?b:(a.cantEdit=!0,p(a.first,0))}function sf(a,b,c,d){return 0>c&&0==b.ch?b.line>a.first?v(a,p(b.line-1)):null:0<c&&b.ch==(d||t(a,b.line)).text.length?b.line<
a.first+a.size-1?p(b.line+1,0):null:new p(b.line,b.ch+c)}function tf(a){a.setSelection(p(a.firstLine(),0),p(a.lastLine()),sa)}function uf(a,b,c){var d={canceled:!1,from:b.from,to:b.to,text:b.text,origin:b.origin,cancel:function(){return d.canceled=!0}};c&&(d.update=function(b,c,g,h){b&&(d.from=v(a,b));c&&(d.to=v(a,c));g&&(d.text=g);void 0!==h&&(d.origin=h)});H(a,"beforeChange",a,d);a.cm&&H(a.cm,"beforeChange",a.cm,d);return d.canceled?(a.cm&&(a.cm.curOp.updateInput=2),null):{from:d.from,to:d.to,text:d.text,
origin:d.origin}}function lb(a,b,c){if(a.cm){if(!a.cm.curOp)return L(a.cm,lb)(a,b,c);if(a.cm.state.suppressEdits)return}if(ha(a,"beforeChange")||a.cm&&ha(a.cm,"beforeChange"))if(b=uf(a,b,!0),!b)return;if(c=vf&&!c&&qg(a,b.from,b.to))for(var d=c.length-1;0<=d;--d)wf(a,{from:c[d].from,to:c[d].to,text:d?[""]:b.text,origin:b.origin});else wf(a,b)}function wf(a,b){if(1!=b.text.length||""!=b.text[0]||0!=x(b.from,b.to)){var c=Gd(a,b);lf(a,b,c,a.cm?a.cm.curOp.id:NaN);Nb(a,b,c,ed(a,b));var d=[];Wa(a,function(a,
c){c||-1!=Q(d,a.history)||(xf(a.history,b),d.push(a.history));Nb(a,b,null,ed(a,b))})}}function Hc(a,b,c){var d=a.cm&&a.cm.state.suppressEdits;if(!d||c){for(var e=a.history,f,g=a.sel,h="undo"==b?e.done:e.undone,k="undo"==b?e.undone:e.done,l=0;l<h.length&&(f=h[l],c?!f.ranges||f.equals(a.sel):f.ranges);l++);if(l!=h.length){for(e.lastOrigin=e.lastSelOrigin=null;;)if(f=h.pop(),f.ranges){Dc(f,k);if(c&&!f.equals(a.sel)){P(a,f,{clearRedo:!1});return}g=f}else{if(d){h.push(f);return}break}var m=[];Dc(g,k);
k.push({changes:m,generation:e.generation});e.generation=f.generation||++e.maxGeneration;var r=ha(a,"beforeChange")||a.cm&&ha(a.cm,"beforeChange");c=function(d){var c=f.changes[d];c.origin=b;if(r&&!uf(a,c,!1))return h.length=0,{};m.push(Jd(a,c));var e=d?Gd(a,c):y(h);Nb(a,c,e,mf(a,c));!d&&a.cm&&a.cm.scrollIntoView({from:c.from,to:Da(c)});var g=[];Wa(a,function(a,b){b||-1!=Q(g,a.history)||(xf(a.history,c),g.push(a.history));Nb(a,c,null,mf(a,c))})};for(d=f.changes.length-1;0<=d;--d)if(e=c(d))return e.v}}}
function yf(a,b){if(0!=b&&(a.first+=b,a.sel=new da(ic(a.sel.ranges,function(a){return new A(p(a.anchor.line+b,a.anchor.ch),p(a.head.line+b,a.head.ch))}),a.sel.primIndex),a.cm)){V(a.cm,a.first,a.first-b,b);for(var c=a.cm.display,d=c.viewFrom;d<c.viewTo;d++)Ba(a.cm,d,"gutter")}}function Nb(a,b,c,d){if(a.cm&&!a.cm.curOp)return L(a.cm,Nb)(a,b,c,d);if(b.to.line<a.first)yf(a,b.text.length-1-(b.to.line-b.from.line));else if(!(b.from.line>a.lastLine())){if(b.from.line<a.first){var e=b.text.length-1-(a.first-
b.from.line);yf(a,e);b={from:p(a.first,0),to:p(b.to.line+e,b.to.ch),text:[y(b.text)],origin:b.origin}}e=a.lastLine();b.to.line>e&&(b={from:b.from,to:p(e,t(a,e).text.length),text:[b.text[0]],origin:b.origin});b.removed=La(a,b.from,b.to);c||(c=Gd(a,b));a.cm?Mg(a.cm,b,d):Id(a,b,d);Fc(a,c,sa);a.cantEdit&&Gc(a,p(a.firstLine(),0))&&(a.cantEdit=!1)}}function Mg(a,b,c){var d=a.doc,e=a.display,f=b.from,g=b.to,h=!1,k=f.line;a.options.lineWrapping||(k=C(pa(t(d,f.line))),d.iter(k,g.line+1,function(a){if(a==e.maxLine)return h=
!0}));-1<d.sel.contains(b.from,b.to)&&ae(a);Id(d,b,c,Me(a));a.options.lineWrapping||(d.iter(k,f.line+b.text.length,function(a){var b=qc(a);b>e.maxLineLength&&(e.maxLine=a,e.maxLineLength=b,e.maxLineChanged=!0,h=!1)}),h&&(a.curOp.updateMaxLine=!0));pg(d,f.line);Ib(a,400);c=b.text.length-(g.line-f.line)-1;b.full?V(a):f.line!=g.line||1!=b.text.length||ff(a.doc,b)?V(a,f.line,g.line+1,c):Ba(a,f.line,"text");c=ha(a,"changes");if((d=ha(a,"change"))||c)b={from:f,to:g,text:b.text,removed:b.removed,origin:b.origin},
d&&O(a,"change",a,b),c&&(a.curOp.changeObjs||(a.curOp.changeObjs=[])).push(b);a.display.selForContextMenu=null}function mb(a,b,c,d,e){d||(d=c);0>x(d,c)&&(d=[d,c],c=d[0],d=d[1]);"string"==typeof b&&(b=a.splitLines(b));lb(a,{from:c,to:d,text:b,origin:e})}function zf(a,b,c,d){c<a.line?a.line+=d:b<a.line&&(a.line=b,a.ch=0)}function Af(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e],g=!0;if(f.ranges)for(f.copied||(f=a[e]=f.deepCopy(),f.copied=!0),g=0;g<f.ranges.length;g++)zf(f.ranges[g].anchor,b,c,d),
zf(f.ranges[g].head,b,c,d);else{for(var h=0;h<f.changes.length;++h){var k=f.changes[h];if(c<k.from.line)k.from=p(k.from.line+d,k.from.ch),k.to=p(k.to.line+d,k.to.ch);else if(b<=k.to.line){g=!1;break}}g||(a.splice(0,e+1),e=0)}}}function xf(a,b){var c=b.from.line,d=b.to.line,e=b.text.length-(d-c)-1;Af(a.done,c,d,e);Af(a.undone,c,d,e)}function Ob(a,b,c,d){var e=b,f=b;"number"==typeof b?f=t(a,Math.max(a.first,Math.min(b,a.first+a.size-1))):e=C(b);if(null==e)return null;d(f,e)&&a.cm&&Ba(a.cm,e,c);return f}
function Pb(a){this.lines=a;this.parent=null;for(var b=0,c=0;c<a.length;++c)a[c].parent=this,b+=a[c].height;this.height=b}function Qb(a){this.children=a;for(var b=0,c=0,d=0;d<a.length;++d){var e=a[d];b+=e.chunkSize();c+=e.height;e.parent=this}this.size=b;this.height=c;this.parent=null}function Ng(a,b,c,d){var e=new Rb(a,c,d),f=a.cm;f&&e.noHScroll&&(f.display.alignWidgets=!0);Ob(a,b,"widget",function(b){var d=b.widgets||(b.widgets=[]);null==e.insertAt?d.push(e):d.splice(Math.min(d.length-1,Math.max(0,
e.insertAt)),0,e);e.line=b;f&&!za(a,b)&&(d=qa(b)<a.scrollTop,na(b,b.height+Cb(e)),d&&yc(f,e.height),f.curOp.forceUpdate=!0);return!0});f&&O(f,"lineWidgetAdded",f,e,"number"==typeof b?b:C(b));return e}function nb(a,b,c,d,e){if(d&&d.shared)return Og(a,b,c,d,e);if(a.cm&&!a.cm.curOp)return L(a.cm,nb)(a,b,c,d,e);var f=new Ea(a,e);e=x(b,c);d&&Ja(d,f,!1);if(0<e||0==e&&!1!==f.clearWhenEmpty)return f;f.replacedWith&&(f.collapsed=!0,f.widgetNode=Za("span",[f.replacedWith],"CodeMirror-widget"),d.handleMouseEvents||
f.widgetNode.setAttribute("cm-ignore-events","true"),d.insertLeft&&(f.widgetNode.insertLeft=!0));if(f.collapsed){if(pe(a,b.line,b,c,f)||b.line!=c.line&&pe(a,c.line,b,c,f))throw Error("Inserting collapsed marker partially overlapping an existing one");va=!0}f.addToHistory&&lf(a,{from:b,to:c,origin:"markText"},a.sel,NaN);var g=b.line,h=a.cm,k;a.iter(g,c.line+1,function(a){h&&f.collapsed&&!h.options.lineWrapping&&pa(a)==h.display.maxLine&&(k=!0);f.collapsed&&g!=b.line&&na(a,0);var d=new pc(f,g==b.line?
b.ch:null,g==c.line?c.ch:null);a.markedSpans=a.markedSpans?a.markedSpans.concat([d]):[d];d.marker.attachLine(a);++g});f.collapsed&&a.iter(b.line,c.line+1,function(b){za(a,b)&&na(b,0)});f.clearOnEnter&&w(f,"beforeCursorEnter",function(){return f.clear()});f.readOnly&&(vf=!0,(a.history.done.length||a.history.undone.length)&&a.clearHistory());f.collapsed&&(f.id=++Bf,f.atomic=!0);if(h){k&&(h.curOp.updateMaxLine=!0);if(f.collapsed)V(h,b.line,c.line+1);else if(f.className||f.startStyle||f.endStyle||f.css||
f.attributes||f.title)for(d=b.line;d<=c.line;d++)Ba(h,d,"text");f.atomic&&rf(h.doc);O(h,"markerAdded",h,f)}return f}function Og(a,b,c,d,e){d=Ja(d);d.shared=!1;var f=[nb(a,b,c,d,e)],g=f[0],h=d.widgetNode;Wa(a,function(a){h&&(d.widgetNode=h.cloneNode(!0));f.push(nb(a,v(a,b),v(a,c),d,e));for(var k=0;k<a.linked.length;++k)if(a.linked[k].isParent)return;g=y(f)});return new Sb(f,g)}function Cf(a){return a.findMarks(p(a.first,0),a.clipPos(p(a.lastLine())),function(a){return a.parent})}function Pg(a){for(var b=
function(b){b=a[b];var d=[b.primary.doc];Wa(b.primary.doc,function(a){return d.push(a)});for(var c=0;c<b.markers.length;c++){var g=b.markers[c];-1==Q(d,g.doc)&&(g.parent=null,b.markers.splice(c--,1))}},c=0;c<a.length;c++)b(c)}function Qg(a){var b=this;Df(b);if(!K(b,a)&&!wa(b.display,a)){U(a);z&&(Ef=+new Date);var c=Ra(b,a,!0),d=a.dataTransfer.files;if(c&&!b.isReadOnly())if(d&&d.length&&window.FileReader&&window.File)for(var e=d.length,f=Array(e),g=0,h=function(a,d){if(!b.options.allowDropFileTypes||
-1!=Q(b.options.allowDropFileTypes,a.type)){var h=new FileReader;h.onload=L(b,function(){var a=h.result;/[\x00-\x08\x0e-\x1f]{2}/.test(a)&&(a="");f[d]=a;++g==e&&(c=v(b.doc,c),a={from:c,to:c,text:b.doc.splitLines(f.join(b.doc.lineSeparator())),origin:"paste"},lb(b.doc,a),of(b.doc,xa(c,Da(a))))});h.readAsText(a)}},k=0;k<e;++k)h(d[k],k);else if(b.state.draggingText&&-1<b.doc.sel.contains(c))b.state.draggingText(a),setTimeout(function(){return b.display.input.focus()},20);else try{if(h=a.dataTransfer.getData("Text")){b.state.draggingText&&
!b.state.draggingText.copy&&(k=b.listSelections());Fc(b.doc,xa(c,c));if(k)for(d=0;d<k.length;++d)mb(b.doc,"",k[d].anchor,k[d].head,"drag");b.replaceSelection(h,"around","paste");b.display.input.focus()}}catch(l){}}}function Df(a){a.display.dragCursor&&(a.display.lineSpace.removeChild(a.display.dragCursor),a.display.dragCursor=null)}function Ff(a){if(document.getElementsByClassName){for(var b=document.getElementsByClassName("CodeMirror"),c=[],d=0;d<b.length;d++){var e=b[d].CodeMirror;e&&c.push(e)}c.length&&
c[0].operation(function(){for(var b=0;b<c.length;b++)a(c[b])})}}function Rg(){var a;w(window,"resize",function(){null==a&&(a=setTimeout(function(){a=null;Ff(Sg)},100))});w(window,"blur",function(){return Ff(Fb)})}function Sg(a){var b=a.display;b.cachedCharWidth=b.cachedTextHeight=b.cachedPaddingH=null;b.scrollbarsClipped=!1;a.setSize()}function Tg(a){var b=a.split(/-(?!$)/);a=b[b.length-1];for(var c,d,e,f,g=0;g<b.length-1;g++){var h=b[g];if(/^(cmd|meta|m)$/i.test(h))f=!0;else if(/^a(lt)?$/i.test(h))c=
!0;else if(/^(c|ctrl|control)$/i.test(h))d=!0;else if(/^s(hift)?$/i.test(h))e=!0;else throw Error("Unrecognized modifier name: "+h);}c&&(a="Alt-"+a);d&&(a="Ctrl-"+a);f&&(a="Cmd-"+a);e&&(a="Shift-"+a);return a}function Ug(a){var b={},c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!/^(name|fallthrough|(de|at)tach)$/.test(c)){if("..."!=d)for(var e=ic(c.split(" "),Tg),f=0;f<e.length;f++){if(f==e.length-1){var g=e.join(" ");var h=d}else g=e.slice(0,f+1).join(" "),h="...";var k=b[g];if(!k)b[g]=h;else if(k!=
h)throw Error("Inconsistent bindings for "+g);}delete a[c]}}for(var l in b)a[l]=b[l];return a}function ob(a,b,c,d){b=Ic(b);var e=b.call?b.call(a,d):b[a];if(!1===e)return"nothing";if("..."===e)return"multi";if(null!=e&&c(e))return"handled";if(b.fallthrough){if("[object Array]"!=Object.prototype.toString.call(b.fallthrough))return ob(a,b.fallthrough,c,d);for(e=0;e<b.fallthrough.length;e++){var f=ob(a,b.fallthrough[e],c,d);if(f)return f}}}function Gf(a){a="string"==typeof a?a:Fa[a.keyCode];return"Ctrl"==
a||"Alt"==a||"Shift"==a||"Mod"==a}function Hf(a,b,c){var d=a;b.altKey&&"Alt"!=d&&(a="Alt-"+a);(If?b.metaKey:b.ctrlKey)&&"Ctrl"!=d&&(a="Ctrl-"+a);(If?b.ctrlKey:b.metaKey)&&"Cmd"!=d&&(a="Cmd-"+a);!c&&b.shiftKey&&"Shift"!=d&&(a="Shift-"+a);return a}function Jf(a,b){if(la&&34==a.keyCode&&a["char"])return!1;var c=Fa[a.keyCode];if(null==c||a.altGraphKey)return!1;3==a.keyCode&&a.code&&(c=a.code);return Hf(c,a,b)}function Ic(a){return"string"==typeof a?Tb[a]:a}function pb(a,b){for(var c=a.doc.sel.ranges,
d=[],e=0;e<c.length;e++){for(var f=b(c[e]);d.length&&0>=x(f.from,y(d).to);){var g=d.pop();if(0>x(g.from,f.from)){f.from=g.from;break}}d.push(f)}Y(a,function(){for(var b=d.length-1;0<=b;b--)mb(a.doc,"",d[b].from,d[b].to,"+delete");gb(a)})}function Md(a,b,c){b=$d(a.text,b+c,c);return 0>b||b>a.text.length?null:b}function Nd(a,b,c){a=Md(a,b.ch,c);return null==a?null:new p(b.line,a,0>c?"after":"before")}function Od(a,b,c,d,e){if(a&&(a=ua(c,b.doc.direction))){a=0>e?y(a):a[0];var f=0>e==(1==a.level)?"after":
"before";if(0<a.level||"rtl"==b.doc.direction){var g=Pa(b,c);var h=0>e?c.text.length-1:0;var k=ja(b,g,h).top;h=sb(function(a){return ja(b,g,a).top==k},0>e==(1==a.level)?a.from:a.to-1,h);"before"==f&&(h=Md(c,h,1))}else h=0>e?a.to:a.from;return new p(d,h,f)}return new p(d,0>e?c.text.length:0,0>e?"before":"after")}function Vg(a,b,c,d){var e=ua(b,a.doc.direction);if(!e)return Nd(b,c,d);c.ch>=b.text.length?(c.ch=b.text.length,c.sticky="before"):0>=c.ch&&(c.ch=0,c.sticky="after");var f=tb(e,c.ch,c.sticky),
g=e[f];if("ltr"==a.doc.direction&&0==g.level%2&&(0<d?g.to>c.ch:g.from<c.ch))return Nd(b,c,d);var h=function(a,d){return Md(b,a instanceof p?a.ch:a,d)},k,l=function(d){if(!a.options.lineWrapping)return{begin:0,end:b.text.length};k=k||Pa(a,b);return Le(a,b,k,d)},m=l("before"==c.sticky?h(c,-1):c.ch);if("rtl"==a.doc.direction||1==g.level){var r=1==g.level==0>d,n=h(c,r?1:-1);if(null!=n&&(r?n<=g.to&&n<=m.end:n>=g.from&&n>=m.begin))return new p(c.line,n,r?"before":"after")}g=function(a,b,d){for(var f=function(a,
b){return b?new p(c.line,h(a,1),"before"):new p(c.line,a,"after")};0<=a&&a<e.length;a+=b){var g=e[a],k=0<b==(1!=g.level),l=k?d.begin:h(d.end,-1);if(g.from<=l&&l<g.to)return f(l,k);l=k?g.from:h(g.to,-1);if(d.begin<=l&&l<d.end)return f(l,k)}};if(f=g(f+d,d,m))return f;m=0<d?m.end:h(m.begin,-1);return null==m||0<d&&m==b.text.length||!(f=g(0<d?0:e.length-1,d,l(m)))?null:f}function Kf(a,b){var c=t(a.doc,b),d=pa(c);d!=c&&(b=C(d));return Od(!0,a,d,b,1)}function Lf(a,b){var c=Kf(a,b.line),d=t(a.doc,c.line),
e=ua(d,a.doc.direction);return e&&0!=e[0].level?c:(d=Math.max(0,d.text.search(/\S/)),p(c.line,b.line==c.line&&b.ch<=d&&b.ch?0:d,c.sticky))}function Jc(a,b,c){if("string"==typeof b&&(b=Ub[b],!b))return!1;a.display.input.ensurePolled();var d=a.display.shift,e=!1;try{a.isReadOnly()&&(a.state.suppressEdits=!0),c&&(a.display.shift=!1),e=b(a)!=Kc}finally{a.display.shift=d,a.state.suppressEdits=!1}return e}function Vb(a,b,c,d){var e=a.state.keySeq;if(e){if(Gf(b))return"handled";/'$/.test(b)?a.state.keySeq=
null:Wg.set(50,function(){a.state.keySeq==e&&(a.state.keySeq=null,a.display.input.reset())});if(Mf(a,e+" "+b,c,d))return!0}return Mf(a,b,c,d)}function Mf(a,b,c,d){a:{for(var e=0;e<a.state.keyMaps.length;e++){var f=ob(b,a.state.keyMaps[e],d,a);if(f){d=f;break a}}d=a.options.extraKeys&&ob(b,a.options.extraKeys,d,a)||ob(b,a.options.keyMap,d,a)}"multi"==d&&(a.state.keySeq=b);"handled"==d&&O(a,"keyHandled",a,b,c);if("handled"==d||"multi"==d)U(c),xd(a);return!!d}function Nf(a,b){var c=Jf(b,!0);return c?
b.shiftKey&&!a.state.keySeq?Vb(a,"Shift-"+c,b,function(b){return Jc(a,b,!0)})||Vb(a,c,b,function(b){if("string"==typeof b?/^go[A-Z]/.test(b):b.motion)return Jc(a,b)}):Vb(a,c,b,function(b){return Jc(a,b)}):!1}function Xg(a,b,c){return Vb(a,"'"+c+"'",b,function(b){return Jc(a,b,!0)})}function Of(a){this.curOp.focus=ta();if(!K(this,a)){z&&11>E&&27==a.keyCode&&(a.returnValue=!1);var b=a.keyCode;this.display.shift=16==b||a.shiftKey;var c=Nf(this,a);la&&(Pd=c?b:null,!c&&88==b&&!Yg&&(ia?a.metaKey:a.ctrlKey)&&
this.replaceSelection("",null,"cut"));18!=b||/\bCodeMirror-crosshair\b/.test(this.display.lineDiv.className)||Zg(this)}}function Zg(a){function b(a){18!=a.keyCode&&a.altKey||(Sa(c,"CodeMirror-crosshair"),ba(document,"keyup",b),ba(document,"mouseover",b))}var c=a.display.lineDiv;Ia(c,"CodeMirror-crosshair");w(document,"keyup",b);w(document,"mouseover",b)}function Pf(a){16==a.keyCode&&(this.doc.sel.shift=!1);K(this,a)}function Qf(a){if(!(wa(this.display,a)||K(this,a)||a.ctrlKey&&!a.altKey||ia&&a.metaKey)){var b=
a.keyCode,c=a.charCode;if(la&&b==Pd)Pd=null,U(a);else if(!la||a.which&&!(10>a.which)||!Nf(this,a))if(b=String.fromCharCode(null==c?b:c),"\b"!=b&&!Xg(this,a,b))this.display.input.onKeyPress(a)}}function $g(a,b){var c=+new Date;if(Wb&&Wb.compare(c,a,b))return Xb=Wb=null,"triple";if(Xb&&Xb.compare(c,a,b))return Wb=new Qd(c,a,b),Xb=null,"double";Xb=new Qd(c,a,b);Wb=null;return"single"}function Rf(a){var b=this.display;if(!(K(this,a)||b.activeTouch&&b.input.supportsTouch()))if(b.input.ensurePolled(),b.shift=
a.shiftKey,wa(b,a))R||(b.scroller.draggable=!1,setTimeout(function(){return b.scroller.draggable=!0},100));else if(!Lc(this,a,"gutterClick",!0)){var c=Ra(this,a),d=ce(a),e=c?$g(c,d):"single";window.focus();1==d&&this.state.selectingText&&this.state.selectingText(a);if(!c||!ah(this,d,c,e,a))if(1==d)c?bh(this,c,e,a):(a.target||a.srcElement)==b.scroller&&U(a);else if(2==d)c&&Ec(this.doc,c),setTimeout(function(){return b.input.focus()},20);else if(3==d)if(Rd)this.display.input.onContextMenu(a);else Re(this)}}
function ah(a,b,c,d,e){var f="Click";"double"==d?f="Double"+f:"triple"==d&&(f="Triple"+f);return Vb(a,Hf((1==b?"Left":2==b?"Middle":"Right")+f,e),e,function(b){"string"==typeof b&&(b=Ub[b]);if(!b)return!1;var d=!1;try{a.isReadOnly()&&(a.state.suppressEdits=!0),d=b(a,c)!=Kc}finally{a.state.suppressEdits=!1}return d})}function bh(a,b,c,d){z?setTimeout(gc(Qe,a),0):a.curOp.focus=ta();var e=a.getOption("configureMouse");e=e?e(a,c,d):{};null==e.unit&&(e.unit=(ch?d.shiftKey&&d.metaKey:d.altKey)?"rectangle":
"single"==c?"char":"double"==c?"word":"line");if(null==e.extend||a.doc.extend)e.extend=a.doc.extend||d.shiftKey;null==e.addNew&&(e.addNew=ia?d.metaKey:d.ctrlKey);null==e.moveOnDrag&&(e.moveOnDrag=!(ia?d.altKey:d.ctrlKey));var f=a.doc.sel,g;a.options.dragDrop&&dh&&!a.isReadOnly()&&"single"==c&&-1<(g=f.contains(b))&&(0>x((g=f.ranges[g]).from(),b)||0<b.xRel)&&(0<x(g.to(),b)||0>b.xRel)?eh(a,d,b,e):fh(a,d,b,e)}function eh(a,b,c,d){var e=a.display,f=!1,g=L(a,function(b){R&&(e.scroller.draggable=!1);a.state.draggingText=
!1;ba(e.wrapper.ownerDocument,"mouseup",g);ba(e.wrapper.ownerDocument,"mousemove",h);ba(e.scroller,"dragstart",k);ba(e.scroller,"drop",g);f||(U(b),d.addNew||Ec(a.doc,c,null,null,d.extend),R||z&&9==E?setTimeout(function(){e.wrapper.ownerDocument.body.focus();e.input.focus()},20):e.input.focus())}),h=function(a){f=f||10<=Math.abs(b.clientX-a.clientX)+Math.abs(b.clientY-a.clientY)},k=function(){return f=!0};R&&(e.scroller.draggable=!0);a.state.draggingText=g;g.copy=!d.moveOnDrag;e.scroller.dragDrop&&
e.scroller.dragDrop();w(e.wrapper.ownerDocument,"mouseup",g);w(e.wrapper.ownerDocument,"mousemove",h);w(e.scroller,"dragstart",k);w(e.scroller,"drop",g);Re(a);setTimeout(function(){return e.input.focus()},20)}function Sf(a,b,c){if("char"==c)return new A(b,b);if("word"==c)return a.findWordAt(b);if("line"==c)return new A(p(b.line,0),v(a.doc,p(b.line+1,0)));a=c(a,b);return new A(a.from,a.to)}function fh(a,b,c,d){function e(b){if(0!=x(q,b))if(q=b,"rectangle"==d.unit){var e=[],f=a.options.tabSize,g=fa(t(k,
c.line).text,c.ch,f),h=fa(t(k,b.line).text,b.ch,f),m=Math.min(g,h);g=Math.max(g,h);h=Math.min(c.line,b.line);for(var D=Math.min(a.lastLine(),Math.max(c.line,b.line));h<=D;h++){var u=t(k,h).text,w=Qc(u,m,f);m==g?e.push(new A(p(h,w),p(h,w))):u.length>w&&e.push(new A(p(h,w),p(h,Qc(u,g,f))))}e.length||e.push(new A(c,c));P(k,ma(a,l.ranges.slice(0,r).concat(e),r),{origin:"*mouse",scroll:!1});a.scrollIntoView(b)}else e=n,m=Sf(a,b,d.unit),b=e.anchor,0<x(m.anchor,b)?(f=m.head,b=nc(e.from(),m.anchor)):(f=m.anchor,
b=mc(e.to(),m.head)),e=l.ranges.slice(0),e[r]=gh(a,new A(v(k,b),f)),P(k,ma(a,e,r),Sd)}function f(b){var c=++u,g=Ra(a,b,!0,"rectangle"==d.unit);if(g)if(0!=x(g,q)){a.curOp.focus=ta();e(g);var l=zd(h,k);(g.line>=l.to||g.line<l.from)&&setTimeout(L(a,function(){u==c&&f(b)}),150)}else{var m=b.clientY<D.top?-20:b.clientY>D.bottom?20:0;m&&setTimeout(L(a,function(){u==c&&(h.scroller.scrollTop+=m,f(b))}),50)}}function g(b){a.state.selectingText=!1;u=Infinity;b&&(U(b),h.input.focus());ba(h.wrapper.ownerDocument,
"mousemove",y);ba(h.wrapper.ownerDocument,"mouseup",z);k.history.lastSelOrigin=null}var h=a.display,k=a.doc;U(b);var l=k.sel,m=l.ranges;if(d.addNew&&!d.extend){var r=k.sel.contains(c);var n=-1<r?m[r]:new A(c,c)}else n=k.sel.primary(),r=k.sel.primIndex;"rectangle"==d.unit?(d.addNew||(n=new A(c,c)),c=Ra(a,b,!0,!0),r=-1):(b=Sf(a,c,d.unit),n=d.extend?Kd(n,b.anchor,b.head,d.extend):b);d.addNew?-1==r?(r=m.length,P(k,ma(a,m.concat([n]),r),{scroll:!1,origin:"*mouse"})):1<m.length&&m[r].empty()&&"char"==d.unit&&
!d.extend?(P(k,ma(a,m.slice(0,r).concat(m.slice(r+1)),0),{scroll:!1,origin:"*mouse"}),l=k.sel):Ld(k,r,n,Sd):(r=0,P(k,new da([n],0),Sd),l=k.sel);var q=c,D=h.wrapper.getBoundingClientRect(),u=0,y=L(a,function(a){0!==a.buttons&&ce(a)?f(a):g(a)}),z=L(a,g);a.state.selectingText=z;w(h.wrapper.ownerDocument,"mousemove",y);w(h.wrapper.ownerDocument,"mouseup",z)}function gh(a,b){var c=b.anchor,d=b.head,e=t(a.doc,c.line);if(0==x(c,d)&&c.sticky==d.sticky)return b;e=ua(e);if(!e)return b;var f=tb(e,c.ch,c.sticky),
g=e[f];if(g.from!=c.ch&&g.to!=c.ch)return b;var h=f+(g.from==c.ch==(1!=g.level)?0:1);if(0==h||h==e.length)return b;if(d.line!=c.line)var k=0<(d.line-c.line)*("ltr"==a.doc.direction?1:-1);else k=tb(e,d.ch,d.sticky),f=k-f||(d.ch-c.ch)*(1==g.level?-1:1),k=k==h-1||k==h?0>f:0<f;e=e[h+(k?-1:0)];e=(h=k==(1==e.level))?e.from:e.to;h=h?"after":"before";return c.ch==e&&c.sticky==h?b:new A(new p(c.line,e,h),d)}function Lc(a,b,c,d){if(b.touches){var e=b.touches[0].clientX;var f=b.touches[0].clientY}else try{e=
b.clientX,f=b.clientY}catch(k){return!1}if(e>=Math.floor(a.display.gutters.getBoundingClientRect().right))return!1;d&&U(b);d=a.display;var g=d.lineDiv.getBoundingClientRect();if(f>g.bottom||!ha(a,c))return Uc(b);f-=g.top-d.viewOffset;for(g=0;g<a.display.gutterSpecs.length;++g){var h=d.gutters.childNodes[g];if(h&&h.getBoundingClientRect().right>=e)return e=Ma(a.doc,f),H(a,c,a,e,a.display.gutterSpecs[g].className,b),Uc(b)}}function Tf(a){a.display.wrapper.className=a.display.wrapper.className.replace(/\s*cm-s-\S+/g,
"")+a.options.theme.replace(/(^|\s)\s*/g," cm-s-");Db(a)}function hh(a,b,c){!b!=!(c&&c!=qb)&&(c=a.display.dragFunctions,b=b?w:ba,b(a.display.scroller,"dragstart",c.start),b(a.display.scroller,"dragenter",c.enter),b(a.display.scroller,"dragover",c.over),b(a.display.scroller,"dragleave",c.leave),b(a.display.scroller,"drop",c.drop))}function ih(a){a.options.lineWrapping?(Ia(a.display.wrapper,"CodeMirror-wrap"),a.display.sizer.style.minWidth="",a.display.sizerWidth=null):(Sa(a.display.wrapper,"CodeMirror-wrap"),
id(a));wd(a);V(a);Db(a);setTimeout(function(){return hb(a)},100)}function F(a,b){var c=this;if(!(this instanceof F))return new F(a,b);this.options=b=b?Ja(b):{};Ja(Uf,b,!1);var d=b.value;"string"==typeof d?d=new W(d,b.mode,null,b.lineSeparator,b.direction):b.mode&&(d.modeOption=b.mode);this.doc=d;var e=new F.inputStyles[b.inputStyle](this);e=this.display=new Hg(a,d,e,b);e.wrapper.CodeMirror=this;Tf(this);b.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap");Xe(this);this.state={keyMaps:[],
overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new Ga,keySeq:null,specialChars:null};b.autofocus&&!Lb&&e.input.focus();z&&11>E&&setTimeout(function(){return c.display.input.reset(!0)},20);jh(this);Vf||(Rg(),Vf=!0);Ua(this);this.curOp.forceUpdate=!0;gf(this,d);b.autofocus&&!Lb||this.hasFocus()?setTimeout(gc(yd,this),20):Fb(this);for(var f in Mc)if(Mc.hasOwnProperty(f))Mc[f](c,b[f],qb);$e(this);
b.finishInit&&b.finishInit(this);for(d=0;d<Td.length;++d)Td[d](c);Va(this);R&&b.lineWrapping&&"optimizelegibility"==getComputedStyle(e.lineDiv).textRendering&&(e.lineDiv.style.textRendering="auto")}function jh(a){function b(){d.activeTouch&&(e=setTimeout(function(){return d.activeTouch=null},1E3),f=d.activeTouch,f.end=+new Date)}function c(a,b){if(null==b.left)return!0;var d=b.left-a.left,c=b.top-a.top;return 400<d*d+c*c}var d=a.display;w(d.scroller,"mousedown",L(a,Rf));z&&11>E?w(d.scroller,"dblclick",
L(a,function(b){if(!K(a,b)){var d=Ra(a,b);!d||Lc(a,b,"gutterClick",!0)||wa(a.display,b)||(U(b),b=a.findWordAt(d),Ec(a.doc,b.anchor,b.head))}})):w(d.scroller,"dblclick",function(b){return K(a,b)||U(b)});w(d.scroller,"contextmenu",function(b){var d;(d=wa(a.display,b))||(d=ha(a,"gutterContextMenu")?Lc(a,b,"gutterContextMenu",!1):!1);if(!(d||K(a,b,"contextmenu")||Rd))a.display.input.onContextMenu(b)});var e,f={end:0};w(d.scroller,"touchstart",function(b){var c;if(c=!K(a,b))1!=b.touches.length?c=!1:(c=
b.touches[0],c=1>=c.radiusX&&1>=c.radiusY),c=!c;c&&!Lc(a,b,"gutterClick",!0)&&(d.input.ensurePolled(),clearTimeout(e),c=+new Date,d.activeTouch={start:c,moved:!1,prev:300>=c-f.end?f:null},1==b.touches.length&&(d.activeTouch.left=b.touches[0].pageX,d.activeTouch.top=b.touches[0].pageY))});w(d.scroller,"touchmove",function(){d.activeTouch&&(d.activeTouch.moved=!0)});w(d.scroller,"touchend",function(e){var f=d.activeTouch;if(f&&!wa(d,e)&&null!=f.left&&!f.moved&&300>new Date-f.start){var g=a.coordsChar(d.activeTouch,
"page");f=!f.prev||c(f,f.prev)?new A(g,g):!f.prev.prev||c(f,f.prev.prev)?a.findWordAt(g):new A(p(g.line,0),v(a.doc,p(g.line+1,0)));a.setSelection(f.anchor,f.head);a.focus();U(e)}b()});w(d.scroller,"touchcancel",b);w(d.scroller,"scroll",function(){d.scroller.clientHeight&&(Hb(a,d.scroller.scrollTop),Ta(a,d.scroller.scrollLeft,!0),H(a,"scroll",a))});w(d.scroller,"mousewheel",function(b){return cf(a,b)});w(d.scroller,"DOMMouseScroll",function(b){return cf(a,b)});w(d.wrapper,"scroll",function(){return d.wrapper.scrollTop=
d.wrapper.scrollLeft=0});d.dragFunctions={enter:function(b){K(a,b)||vb(b)},over:function(b){if(!K(a,b)){var c=Ra(a,b);if(c){var d=document.createDocumentFragment();Pe(a,c,d);a.display.dragCursor||(a.display.dragCursor=u("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),a.display.lineSpace.insertBefore(a.display.dragCursor,a.display.cursorDiv));aa(a.display.dragCursor,d)}vb(b)}},start:function(b){if(z&&(!a.state.draggingText||100>+new Date-Ef))vb(b);else if(!K(a,b)&&!wa(a.display,b)&&(b.dataTransfer.setData("Text",
a.getSelection()),b.dataTransfer.effectAllowed="copyMove",b.dataTransfer.setDragImage&&!Wf)){var c=u("img",null,null,"position: fixed; left: 0; top: 0;");c.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";la&&(c.width=c.height=1,a.display.wrapper.appendChild(c),c._top=c.offsetTop);b.dataTransfer.setDragImage(c,0,0);la&&c.parentNode.removeChild(c)}},drop:L(a,Qg),leave:function(b){K(a,b)||Df(a)}};var g=d.input.getField();w(g,"keyup",function(b){return Pf.call(a,b)});
w(g,"keydown",L(a,Of));w(g,"keypress",L(a,Qf));w(g,"focus",function(b){return yd(a,b)});w(g,"blur",function(b){return Fb(a,b)})}function Yb(a,b,c,d){var e=a.doc,f;null==c&&(c="add");"smart"==c&&(e.mode.indent?f=xb(a,b).state:c="prev");var g=a.options.tabSize,h=t(e,b),k=fa(h.text,null,g);h.stateAfter&&(h.stateAfter=null);var l=h.text.match(/^\s*/)[0];if(!d&&!/\S/.test(h.text)){var m=0;c="not"}else if("smart"==c&&(m=e.mode.indent(f,h.text.slice(l.length),h.text),m==Kc||150<m)){if(!d)return;c="prev"}"prev"==
c?m=b>e.first?fa(t(e,b-1).text,null,g):0:"add"==c?m=k+a.options.indentUnit:"subtract"==c?m=k-a.options.indentUnit:"number"==typeof c&&(m=k+c);m=Math.max(0,m);c="";d=0;if(a.options.indentWithTabs)for(a=Math.floor(m/g);a;--a)d+=g,c+="\t";d<m&&(c+=Rc(m-d));if(c!=l)return mb(e,c,p(b,0),p(b,l.length),"+input"),h.stateAfter=null,!0;for(g=0;g<e.sel.ranges.length;g++)if(h=e.sel.ranges[g],h.head.line==b&&h.head.ch<l.length){b=p(b,l.length);Ld(e,g,new A(b,b));break}}function Ud(a,b,c,d,e){var f=a.doc;a.display.shift=
!1;d||(d=f.sel);var g=+new Date-200,h="paste"==e||a.state.pasteIncoming>g,k=Vd(b),l=null;if(h&&1<d.ranges.length)if(Z&&Z.text.join("\n")==b){if(0==d.ranges.length%Z.text.length){l=[];for(var m=0;m<Z.text.length;m++)l.push(f.splitLines(Z.text[m]))}}else k.length==d.ranges.length&&a.options.pasteLinesPerSelection&&(l=ic(k,function(a){return[a]}));m=a.curOp.updateInput;for(var r=d.ranges.length-1;0<=r;r--){var n=d.ranges[r],q=n.from(),D=n.to();n.empty()&&(c&&0<c?q=p(q.line,q.ch-c):a.state.overwrite&&
!h?D=p(D.line,Math.min(t(f,D.line).text.length,D.ch+y(k).length)):h&&Z&&Z.lineWise&&Z.text.join("\n")==b&&(q=D=p(q.line,0)));n={from:q,to:D,text:l?l[r%l.length]:k,origin:e||(h?"paste":a.state.cutIncoming>g?"cut":"+input")};lb(a.doc,n);O(a,"inputRead",a,n)}b&&!h&&Xf(a,b);gb(a);2>a.curOp.updateInput&&(a.curOp.updateInput=m);a.curOp.typing=!0;a.state.pasteIncoming=a.state.cutIncoming=-1}function Yf(a,b){var c=a.clipboardData&&a.clipboardData.getData("Text");if(c)return a.preventDefault(),b.isReadOnly()||
b.options.disableInput||Y(b,function(){return Ud(b,c,0,null,"paste")}),!0}function Xf(a,b){if(a.options.electricChars&&a.options.smartIndent)for(var c=a.doc.sel,d=c.ranges.length-1;0<=d;d--){var e=c.ranges[d];if(!(100<e.head.ch||d&&c.ranges[d-1].head.line==e.head.line)){var f=a.getModeAt(e.head),g=!1;if(f.electricChars)for(var h=0;h<f.electricChars.length;h++){if(-1<b.indexOf(f.electricChars.charAt(h))){g=Yb(a,e.head.line,"smart");break}}else f.electricInput&&f.electricInput.test(t(a.doc,e.head.line).text.slice(0,
e.head.ch))&&(g=Yb(a,e.head.line,"smart"));g&&O(a,"electricInput",a,e.head.line)}}}function Zf(a){for(var b=[],c=[],d=0;d<a.doc.sel.ranges.length;d++){var e=a.doc.sel.ranges[d].head.line;e={anchor:p(e,0),head:p(e+1,0)};c.push(e);b.push(a.getRange(e.anchor,e.head))}return{text:b,ranges:c}}function $f(a,b,c,d){a.setAttribute("autocorrect",c?"":"off");a.setAttribute("autocapitalize",d?"":"off");a.setAttribute("spellcheck",!!b)}function ag(){var a=u("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
b=u("div",[a],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");R?a.style.width="1000px":a.setAttribute("wrap","off");Zb&&(a.style.border="1px solid black");$f(a);return b}function Wd(a,b,c,d,e){function f(d){var f=e?Vg(a.cm,k,b,c):Nd(k,b,c);if(null==f){if(d=!d)d=b.line+c,d<a.first||d>=a.first+a.size?d=!1:(b=new p(d,b.ch,b.sticky),d=k=t(a,d));if(d)b=Od(e,a.cm,k,b.line,c);else return!1}else b=f;return!0}var g=b,h=c,k=t(a,b.line);if("char"==d)f();else if("column"==d)f(!0);else if("word"==
d||"group"==d){var l=null;d="group"==d;for(var m=a.cm&&a.cm.getHelper(b,"wordChars"),r=!0;!(0>c)||f(!r);r=!1){var n=k.text.charAt(b.ch)||"\n";n=jc(n,m)?"w":d&&"\n"==n?"n":!d||/\s/.test(n)?null:"p";!d||r||n||(n="s");if(l&&l!=n){0>c&&(c=1,f(),b.sticky="after");break}n&&(l=n);if(0<c&&!f(!r))break}}h=Gc(a,b,g,h,!0);ad(g,h)&&(h.hitSide=!0);return h}function bg(a,b,c,d){var e=a.doc,f=b.left;if("page"==d){var g=Math.max(Math.min(a.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight)-
.5*fb(a.display),3);g=(0<c?b.bottom:b.top)+c*g}else"line"==d&&(g=0<c?b.bottom+3:b.top-3);for(;;){b=td(a,f,g);if(!b.outside)break;if(0>c?0>=g:g>=e.height){b.hitSide=!0;break}g+=5*c}return b}function cg(a,b){var c=nd(a,b.line);if(!c||c.hidden)return null;var d=t(a.doc,b.line);c=Be(c,d,b.line);d=ua(d,a.doc.direction);var e="left";d&&(e=tb(d,b.ch)%2?"right":"left");c=Ce(c.map,b.ch,e);c.offset="right"==c.collapse?c.end:c.start;return c}function kh(a){for(;a;a=a.parentNode)if(/CodeMirror-gutter-wrapper/.test(a.className))return!0;
return!1}function rb(a,b){b&&(a.bad=!0);return a}function lh(a,b,c,d,e){function f(a){return function(b){return b.id==a}}function g(){m&&(l+=r,n&&(l+=r),m=n=!1)}function h(a){a&&(g(),l+=a)}function k(b){if(1==b.nodeType){var c=b.getAttribute("cm-text");if(c)h(c);else{c=b.getAttribute("cm-marker");var l;if(c)b=a.findMarks(p(d,0),p(e+1,0),f(+c)),b.length&&(l=b[0].find(0))&&h(La(a.doc,l.from,l.to).join(r));else if("false"!=b.getAttribute("contenteditable")&&(l=/^(pre|div|p|li|table|br)$/i.test(b.nodeName),
/^br$/i.test(b.nodeName)||0!=b.textContent.length)){l&&g();for(c=0;c<b.childNodes.length;c++)k(b.childNodes[c]);/^(pre|p)$/i.test(b.nodeName)&&(n=!0);l&&(m=!0)}}}else 3==b.nodeType&&h(b.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))}for(var l="",m=!1,r=a.doc.lineSeparator(),n=!1;;){k(b);if(b==c)break;b=b.nextSibling;n=!1}return l}function Nc(a,b,c){if(b==a.display.lineDiv){var d=a.display.lineDiv.childNodes[c];if(!d)return rb(a.clipPos(p(a.display.viewTo-1)),!0);b=null;c=0}else for(d=b;;d=
d.parentNode){if(!d||d==a.display.lineDiv)return null;if(d.parentNode&&d.parentNode==a.display.lineDiv)break}for(var e=0;e<a.display.view.length;e++){var f=a.display.view[e];if(f.node==d)return mh(f,b,c)}}function mh(a,b,c){function d(b,c,d){for(var e=-1;e<(l?l.length:0);e++)for(var f=0>e?k.map:l[e],g=0;g<f.length;g+=3){var h=f[g+2];if(h==b||h==c){c=C(0>e?a.line:a.rest[e]);e=f[g]+d;if(0>d||h!=b)e=f[g+(d?1:0)];return p(c,e)}}}var e=a.text.firstChild,f=!1;if(!b||!ya(e,b))return rb(p(C(a.line),0),!0);
if(b==e&&(f=!0,b=e.childNodes[c],c=0,!b))return c=a.rest?y(a.rest):a.line,rb(p(C(c),c.text.length),f);var g=3==b.nodeType?b:null,h=b;g||1!=b.childNodes.length||3!=b.firstChild.nodeType||(g=b.firstChild,c&&(c=g.nodeValue.length));for(;h.parentNode!=e;)h=h.parentNode;var k=a.measure,l=k.maps;if(b=d(g,h,c))return rb(b,f);e=h.nextSibling;for(g=g?g.nodeValue.length-c:0;e;e=e.nextSibling){if(b=d(e,e.firstChild,0))return rb(p(b.line,b.ch-g),f);g+=e.textContent.length}for(h=h.previousSibling;h;h=h.previousSibling){if(b=
d(h,h.firstChild,-1))return rb(p(b.line,b.ch+c),f);c+=h.textContent.length}}var T=navigator.userAgent,dg=navigator.platform,Ca=/gecko\/\d/i.test(T),eg=/MSIE \d/.test(T),fg=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(T),$b=/Edge\/(\d+)/.exec(T),z=eg||fg||$b,E=z&&(eg?document.documentMode||6:+($b||fg)[1]),R=!$b&&/WebKit\//.test(T),nh=R&&/Qt\/\d+\.\d+/.test(T),sc=!$b&&/Chrome\//.test(T),la=/Opera\//.test(T),Wf=/Apple Computer/.test(navigator.vendor),oh=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(T),Eg=/PhantomJS/.test(T),
Zb=!$b&&/AppleWebKit/.test(T)&&/Mobile\/\w+/.test(T),tc=/Android/.test(T),Lb=Zb||tc||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(T),ia=Zb||/Mac/.test(dg),ch=/\bCrOS\b/.test(T),ph=/win/i.test(dg),Xa=la&&T.match(/Version\/(\d*\.\d*)/);Xa&&(Xa=Number(Xa[1]));Xa&&15<=Xa&&(la=!1,R=!0);var If=ia&&(nh||la&&(null==Xa||12.11>Xa)),Rd=Ca||z&&9<=E,Sa=function(a,b){var c=a.className,d=Ha(b).exec(c);if(d){var e=c.slice(d.index+d[0].length);a.className=c.slice(0,d.index)+(e?d[1]+e:"")}};var zb=document.createRange?
function(a,b,c,d){var e=document.createRange();e.setEnd(d||a,c);e.setStart(a,b);return e}:function(a,b,c){var d=document.body.createTextRange();try{d.moveToElementText(a.parentNode)}catch(e){return d}d.collapse(!0);d.moveEnd("character",c);d.moveStart("character",b);return d};var ac=function(a){a.select()};Zb?ac=function(a){a.selectionStart=0;a.selectionEnd=a.value.length}:z&&(ac=function(a){try{a.select()}catch(b){}});var Ga=function(){this.f=this.id=null;this.time=0;this.handler=gc(this.onTimeout,
this)};Ga.prototype.onTimeout=function(a){a.id=0;a.time<=+new Date?a.f():setTimeout(a.handler,a.time-+new Date)};Ga.prototype.set=function(a,b){this.f=b;var c=+new Date+a;if(!this.id||c<this.time)clearTimeout(this.id),this.id=setTimeout(this.handler,a),this.time=c};var Kc={toString:function(){return"CodeMirror.Pass"}},sa={scroll:!1},Sd={origin:"*mouse"},bc={origin:"+move"},hc=[""],hg=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,ig=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,
ub=null,kg=function(){function a(a){return 247>=a?"bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(a):1424<=a&&1524>=a?"R":1536<=a&&1785>=a?"nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(a-
1536):1774<=a&&2220>=a?"r":8192<=a&&8203>=a?"w":8204==a?"b":"L"}function b(a,b,c){this.level=a;this.from=b;this.to=c}var c=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,d=/[stwN]/,e=/[LRr]/,f=/[Lb1n]/,g=/[1n]/;return function(h,k){var l="ltr"==k?"L":"R";if(0==h.length||"ltr"==k&&!c.test(h))return!1;for(var m=h.length,r=[],n=0;n<m;++n)r.push(a(h.charCodeAt(n)));n=0;for(var q=l;n<m;++n){var p=r[n];"m"==p?r[n]=q:q=p}n=0;for(q=l;n<m;++n)p=r[n],"1"==p&&"r"==q?r[n]="n":e.test(p)&&(q=p,"r"==p&&(r[n]="R"));
n=1;for(q=r[0];n<m-1;++n)p=r[n],"+"==p&&"1"==q&&"1"==r[n+1]?r[n]="1":","!=p||q!=r[n+1]||"1"!=q&&"n"!=q||(r[n]=q),q=p;for(n=0;n<m;++n)if(q=r[n],","==q)r[n]="N";else if("%"==q){for(q=n+1;q<m&&"%"==r[q];++q);for(p=n&&"!"==r[n-1]||q<m&&"1"==r[q]?"1":"N";n<q;++n)r[n]=p;n=q-1}n=0;for(q=l;n<m;++n)p=r[n],"L"==q&&"1"==p?r[n]="L":e.test(p)&&(q=p);for(q=0;q<m;++q)if(d.test(r[q])){for(n=q+1;n<m&&d.test(r[n]);++n);p="L"==(q?r[q-1]:l);for(p=p==("L"==(n<m?r[n]:l))?p?"L":"R":l;q<n;++q)r[q]=p;q=n-1}l=[];var t;for(n=
0;n<m;)if(f.test(r[n])){q=n;for(++n;n<m&&f.test(r[n]);++n);l.push(new b(0,q,n))}else{var u=n;q=l.length;for(++n;n<m&&"L"!=r[n];++n);for(p=u;p<n;)if(g.test(r[p])){u<p&&l.splice(q,0,new b(1,u,p));u=p;for(++p;p<n&&g.test(r[p]);++p);l.splice(q,0,new b(2,u,p));u=p}else++p;u<n&&l.splice(q,0,new b(1,u,n))}"ltr"==k&&(1==l[0].level&&(t=h.match(/^\s+/))&&(l[0].from=t[0].length,l.unshift(new b(0,0,t[0].length))),1==y(l).level&&(t=h.match(/\s+$/))&&(y(l).to-=t[0].length,l.push(new b(0,m-t[0].length,m))));return"rtl"==
k?l.reverse():l}}(),kc=[],w=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):(a=a._handlers||(a._handlers={}),a[b]=(a[b]||kc).concat(c))},dh=function(){if(z&&9>E)return!1;var a=u("div");return"draggable"in a||"dragDrop"in a}(),Vc,jd,Vd=3!="\n\nb".split(/\n/).length?function(a){for(var b=0,c=[],d=a.length;b<=d;){var e=a.indexOf("\n",b);-1==e&&(e=a.length);var f=a.slice(b,"\r"==a.charAt(e-1)?e-1:e),g=f.indexOf("\r");-1!=g?(c.push(f.slice(0,g)),b+=g+
1):(c.push(f),b=e+1)}return c}:function(a){return a.split(/\r\n?|\n/)},qh=window.getSelection?function(a){try{return a.selectionStart!=a.selectionEnd}catch(b){return!1}}:function(a){try{var b=a.ownerDocument.selection.createRange()}catch(c){}return b&&b.parentElement()==a?0!=b.compareEndPoints("StartToEnd",b):!1},Yg=function(){var a=u("div");if("oncopy"in a)return!0;a.setAttribute("oncopy","return;");return"function"==typeof a.oncopy}(),pd=null,Wc={},ab={},bb={},I=function(a,b,c){this.pos=this.start=
0;this.string=a;this.tabSize=b||8;this.lineStart=this.lastColumnPos=this.lastColumnValue=0;this.lineOracle=c};I.prototype.eol=function(){return this.pos>=this.string.length};I.prototype.sol=function(){return this.pos==this.lineStart};I.prototype.peek=function(){return this.string.charAt(this.pos)||void 0};I.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)};I.prototype.eat=function(a){var b=this.string.charAt(this.pos);if("string"==typeof a?b==a:b&&(a.test?
a.test(b):a(b)))return++this.pos,b};I.prototype.eatWhile=function(a){for(var b=this.pos;this.eat(a););return this.pos>b};I.prototype.eatSpace=function(){for(var a=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>a};I.prototype.skipToEnd=function(){this.pos=this.string.length};I.prototype.skipTo=function(a){a=this.string.indexOf(a,this.pos);if(-1<a)return this.pos=a,!0};I.prototype.backUp=function(a){this.pos-=a};I.prototype.column=function(){this.lastColumnPos<
this.start&&(this.lastColumnValue=fa(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start);return this.lastColumnValue-(this.lineStart?fa(this.string,this.lineStart,this.tabSize):0)};I.prototype.indentation=function(){return fa(this.string,null,this.tabSize)-(this.lineStart?fa(this.string,this.lineStart,this.tabSize):0)};I.prototype.match=function(a,b,c){if("string"==typeof a){var d=function(a){return c?a.toLowerCase():a},e=this.string.substr(this.pos,
a.length);if(d(e)==d(a))return!1!==b&&(this.pos+=a.length),!0}else{if((a=this.string.slice(this.pos).match(a))&&0<a.index)return null;a&&!1!==b&&(this.pos+=a[0].length);return a}};I.prototype.current=function(){return this.string.slice(this.start,this.pos)};I.prototype.hideFirstChars=function(a,b){this.lineStart+=a;try{return b()}finally{this.lineStart-=a}};I.prototype.lookAhead=function(a){var b=this.lineOracle;return b&&b.lookAhead(a)};I.prototype.baseToken=function(){var a=this.lineOracle;return a&&
a.baseToken(this.pos)};var oc=function(a,b){this.state=a;this.lookAhead=b},oa=function(a,b,c,d){this.state=b;this.doc=a;this.line=c;this.maxLookAhead=d||0;this.baseTokens=null;this.baseTokenPos=1};oa.prototype.lookAhead=function(a){var b=this.doc.getLine(this.line+a);null!=b&&a>this.maxLookAhead&&(this.maxLookAhead=a);return b};oa.prototype.baseToken=function(a){if(!this.baseTokens)return null;for(;this.baseTokens[this.baseTokenPos]<=a;)this.baseTokenPos+=2;var b=this.baseTokens[this.baseTokenPos+
1];return{type:b&&b.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-a}};oa.prototype.nextLine=function(){this.line++;0<this.maxLookAhead&&this.maxLookAhead--};oa.fromSaved=function(a,b,c){return b instanceof oc?new oa(a,Ka(a.mode,b.state),c,b.lookAhead):new oa(a,Ka(a.mode,b),c)};oa.prototype.save=function(a){a=!1!==a?Ka(this.doc.mode,this.state):this.state;return 0<this.maxLookAhead?new oc(a,this.maxLookAhead):a};var ke=function(a,b,c){this.start=a.start;this.end=a.pos;this.string=
a.current();this.type=b||null;this.state=c},vf=!1,va=!1,ib=function(a,b,c){this.text=a;oe(this,b);this.height=c?c(this):1};ib.prototype.lineNo=function(){return C(this)};$a(ib);var sg={},rg={},db=null,Ab=null,De={left:0,right:0,top:0,bottom:0},Qa,Ya=function(a,b,c){this.cm=c;var d=this.vert=u("div",[u("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),e=this.horiz=u("div",[u("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");d.tabIndex=e.tabIndex=-1;a(d);a(e);w(d,
"scroll",function(){d.clientHeight&&b(d.scrollTop,"vertical")});w(e,"scroll",function(){e.clientWidth&&b(e.scrollLeft,"horizontal")});this.checkedZeroWidth=!1;z&&8>E&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")};Ya.prototype.update=function(a){var b=a.scrollWidth>a.clientWidth+1,c=a.scrollHeight>a.clientHeight+1,d=a.nativeBarWidth;c?(this.vert.style.display="block",this.vert.style.bottom=b?d+"px":"0",this.vert.firstChild.style.height=Math.max(0,a.scrollHeight-a.clientHeight+(a.viewHeight-
(b?d:0)))+"px"):(this.vert.style.display="",this.vert.firstChild.style.height="0");b?(this.horiz.style.display="block",this.horiz.style.right=c?d+"px":"0",this.horiz.style.left=a.barLeft+"px",this.horiz.firstChild.style.width=Math.max(0,a.scrollWidth-a.clientWidth+(a.viewWidth-a.barLeft-(c?d:0)))+"px"):(this.horiz.style.display="",this.horiz.firstChild.style.width="0");!this.checkedZeroWidth&&0<a.clientHeight&&(0==d&&this.zeroWidthHack(),this.checkedZeroWidth=!0);return{right:c?d:0,bottom:b?d:0}};
Ya.prototype.setScrollLeft=function(a){this.horiz.scrollLeft!=a&&(this.horiz.scrollLeft=a);this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")};Ya.prototype.setScrollTop=function(a){this.vert.scrollTop!=a&&(this.vert.scrollTop=a);this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")};Ya.prototype.zeroWidthHack=function(){this.horiz.style.height=this.vert.style.width=ia&&!oh?"12px":"18px";this.horiz.style.pointerEvents=this.vert.style.pointerEvents=
"none";this.disableHoriz=new Ga;this.disableVert=new Ga};Ya.prototype.enableZeroWidthBar=function(a,b,c){function d(){var e=a.getBoundingClientRect();("vert"==c?document.elementFromPoint(e.right-1,(e.top+e.bottom)/2):document.elementFromPoint((e.right+e.left)/2,e.bottom-1))!=a?a.style.pointerEvents="none":b.set(1E3,d)}a.style.pointerEvents="auto";b.set(1E3,d)};Ya.prototype.clear=function(){var a=this.horiz.parentNode;a.removeChild(this.horiz);a.removeChild(this.vert)};var cc=function(){};cc.prototype.update=
function(){return{bottom:0,right:0}};cc.prototype.setScrollLeft=function(){};cc.prototype.setScrollTop=function(){};cc.prototype.clear=function(){};var Ye={"native":Ya,"null":cc},Dg=0,Ac=function(a,b,c){var d=a.display;this.viewport=b;this.visible=zd(d,a.doc,b);this.editorIsHidden=!d.wrapper.offsetWidth;this.wrapperHeight=d.wrapper.clientHeight;this.wrapperWidth=d.wrapper.clientWidth;this.oldDisplayWidth=Na(a);this.force=c;this.dims=od(a);this.events=[]};Ac.prototype.signal=function(a,b){ha(a,b)&&
this.events.push(arguments)};Ac.prototype.finish=function(){for(var a=0;a<this.events.length;a++)H.apply(null,this.events[a])};var Bc=0,ca=null;z?ca=-.53:Ca?ca=15:sc?ca=-.7:Wf&&(ca=-1/3);var da=function(a,b){this.ranges=a;this.primIndex=b};da.prototype.primary=function(){return this.ranges[this.primIndex]};da.prototype.equals=function(a){if(a==this)return!0;if(a.primIndex!=this.primIndex||a.ranges.length!=this.ranges.length)return!1;for(var b=0;b<this.ranges.length;b++){var c=this.ranges[b],d=a.ranges[b];
if(!ad(c.anchor,d.anchor)||!ad(c.head,d.head))return!1}return!0};da.prototype.deepCopy=function(){for(var a=[],b=0;b<this.ranges.length;b++)a[b]=new A(bd(this.ranges[b].anchor),bd(this.ranges[b].head));return new da(a,this.primIndex)};da.prototype.somethingSelected=function(){for(var a=0;a<this.ranges.length;a++)if(!this.ranges[a].empty())return!0;return!1};da.prototype.contains=function(a,b){b||(b=a);for(var c=0;c<this.ranges.length;c++){var d=this.ranges[c];if(0<=x(b,d.from())&&0>=x(a,d.to()))return c}return-1};
var A=function(a,b){this.anchor=a;this.head=b};A.prototype.from=function(){return nc(this.anchor,this.head)};A.prototype.to=function(){return mc(this.anchor,this.head)};A.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch};Pb.prototype={chunkSize:function(){return this.lines.length},removeInner:function(a,b){for(var c=a,d=a+b;c<d;++c){var e=this.lines[c];this.height-=e.height;var f=e;f.parent=null;ne(f);O(e,"delete")}this.lines.splice(a,b)},collapse:function(a){a.push.apply(a,
this.lines)},insertInner:function(a,b,c){this.height+=c;this.lines=this.lines.slice(0,a).concat(b).concat(this.lines.slice(a));for(a=0;a<b.length;++a)b[a].parent=this},iterN:function(a,b,c){for(b=a+b;a<b;++a)if(c(this.lines[a]))return!0}};Qb.prototype={chunkSize:function(){return this.size},removeInner:function(a,b){this.size-=b;for(var c=0;c<this.children.length;++c){var d=this.children[c],e=d.chunkSize();if(a<e){var f=Math.min(b,e-a),g=d.height;d.removeInner(a,f);this.height-=g-d.height;e==f&&(this.children.splice(c--,
1),d.parent=null);if(0==(b-=f))break;a=0}else a-=e}25>this.size-b&&(1<this.children.length||!(this.children[0]instanceof Pb))&&(c=[],this.collapse(c),this.children=[new Pb(c)],this.children[0].parent=this)},collapse:function(a){for(var b=0;b<this.children.length;++b)this.children[b].collapse(a)},insertInner:function(a,b,c){this.size+=b.length;this.height+=c;for(var d=0;d<this.children.length;++d){var e=this.children[d],f=e.chunkSize();if(a<=f){e.insertInner(a,b,c);if(e.lines&&50<e.lines.length){for(b=
a=e.lines.length%25+25;b<e.lines.length;)c=new Pb(e.lines.slice(b,b+=25)),e.height-=c.height,this.children.splice(++d,0,c),c.parent=this;e.lines=e.lines.slice(0,a);this.maybeSpill()}break}a-=f}},maybeSpill:function(){if(!(10>=this.children.length)){var a=this;do{var b=a.children.splice(a.children.length-5,5);b=new Qb(b);if(a.parent){a.size-=b.size;a.height-=b.height;var c=Q(a.parent.children,a);a.parent.children.splice(c+1,0,b)}else c=new Qb(a.children),c.parent=a,a.children=[c,b],a=c;b.parent=a.parent}while(10<
a.children.length);a.parent.maybeSpill()}},iterN:function(a,b,c){for(var d=0;d<this.children.length;++d){var e=this.children[d],f=e.chunkSize();if(a<f){f=Math.min(b,f-a);if(e.iterN(a,f,c))return!0;if(0==(b-=f))break;a=0}else a-=f}}};var Rb=function(a,b,c){if(c)for(var d in c)c.hasOwnProperty(d)&&(this[d]=c[d]);this.doc=a;this.node=b};Rb.prototype.clear=function(){var a=this.doc.cm,b=this.line.widgets,c=this.line,d=C(c);if(null!=d&&b){for(var e=0;e<b.length;++e)b[e]==this&&b.splice(e--,1);b.length||
(c.widgets=null);var f=Cb(this);na(c,Math.max(0,c.height-f));a&&(Y(a,function(){var b=-f;qa(c)<(a.curOp&&a.curOp.scrollTop||a.doc.scrollTop)&&yc(a,b);Ba(a,d,"widget")}),O(a,"lineWidgetCleared",a,this,d))}};Rb.prototype.changed=function(){var a=this,b=this.height,c=this.doc.cm,d=this.line;this.height=null;var e=Cb(this)-b;e&&(za(this.doc,d)||na(d,d.height+e),c&&Y(c,function(){c.curOp.forceUpdate=!0;qa(d)<(c.curOp&&c.curOp.scrollTop||c.doc.scrollTop)&&yc(c,e);O(c,"lineWidgetChanged",c,a,C(d))}))};$a(Rb);
var Bf=0,Ea=function(a,b){this.lines=[];this.type=b;this.doc=a;this.id=++Bf};Ea.prototype.clear=function(){if(!this.explicitlyCleared){var a=this.doc.cm,b=a&&!a.curOp;b&&Ua(a);if(ha(this,"clear")){var c=this.find();c&&O(this,"clear",c.from,c.to)}for(var d=c=null,e=0;e<this.lines.length;++e){var f=this.lines[e],g=yb(f.markedSpans,this);a&&!this.collapsed?Ba(a,C(f),"text"):a&&(null!=g.to&&(d=C(f)),null!=g.from&&(c=C(f)));for(var h=f,k=void 0,l=f.markedSpans,m=g,p=0;p<l.length;++p)l[p]!=m&&(k||(k=[])).push(l[p]);
h.markedSpans=k;null==g.from&&this.collapsed&&!za(this.doc,f)&&a&&na(f,fb(a.display))}if(a&&this.collapsed&&!a.options.lineWrapping)for(e=0;e<this.lines.length;++e)f=pa(this.lines[e]),g=qc(f),g>a.display.maxLineLength&&(a.display.maxLine=f,a.display.maxLineLength=g,a.display.maxLineChanged=!0);null!=c&&a&&this.collapsed&&V(a,c,d+1);this.lines.length=0;this.explicitlyCleared=!0;this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,a&&rf(a.doc));a&&O(a,"markerCleared",a,this,c,d);b&&Va(a);this.parent&&
this.parent.clear()}};Ea.prototype.find=function(a,b){null==a&&"bookmark"==this.type&&(a=1);for(var c,d,e=0;e<this.lines.length;++e){var f=this.lines[e],g=yb(f.markedSpans,this);if(null!=g.from&&(c=p(b?f:C(f),g.from),-1==a))return c;if(null!=g.to&&(d=p(b?f:C(f),g.to),1==a))return d}return c&&{from:c,to:d}};Ea.prototype.changed=function(){var a=this,b=this.find(-1,!0),c=this,d=this.doc.cm;b&&d&&Y(d,function(){var e=b.line,f=C(b.line);if(f=nd(d,f))Ee(f),d.curOp.selectionChanged=d.curOp.forceUpdate=
!0;d.curOp.updateMaxLine=!0;za(c.doc,e)||null==c.height||(f=c.height,c.height=null,(f=Cb(c)-f)&&na(e,e.height+f));O(d,"markerChanged",d,a)})};Ea.prototype.attachLine=function(a){if(!this.lines.length&&this.doc.cm){var b=this.doc.cm.curOp;b.maybeHiddenMarkers&&-1!=Q(b.maybeHiddenMarkers,this)||(b.maybeUnhiddenMarkers||(b.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(a)};Ea.prototype.detachLine=function(a){this.lines.splice(Q(this.lines,a),1);!this.lines.length&&this.doc.cm&&(a=this.doc.cm.curOp,
(a.maybeHiddenMarkers||(a.maybeHiddenMarkers=[])).push(this))};$a(Ea);var Sb=function(a,b){this.markers=a;this.primary=b;for(var c=0;c<a.length;++c)a[c].parent=this};Sb.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var a=0;a<this.markers.length;++a)this.markers[a].clear();O(this,"clear")}};Sb.prototype.find=function(a,b){return this.primary.find(a,b)};$a(Sb);var rh=0,W=function(a,b,c,d,e){if(!(this instanceof W))return new W(a,b,c,d,e);null==c&&(c=0);Qb.call(this,
[new Pb([new ib("",null)])]);this.first=c;this.scrollTop=this.scrollLeft=0;this.cantEdit=!1;this.cleanGeneration=1;this.modeFrontier=this.highlightFrontier=c;c=p(c,0);this.sel=xa(c);this.history=new Cc(null);this.id=++rh;this.modeOption=b;this.lineSep=d;this.direction="rtl"==e?"rtl":"ltr";this.extend=!1;"string"==typeof a&&(a=this.splitLines(a));Id(this,{from:c,to:c,text:a});P(this,xa(c),sa)};W.prototype=Yd(Qb.prototype,{constructor:W,iter:function(a,b,c){c?this.iterN(a-this.first,b-a,c):this.iterN(this.first,
this.first+this.size,a)},insert:function(a,b){for(var c=0,d=0;d<b.length;++d)c+=b[d].height;this.insertInner(a-this.first,b,c)},remove:function(a,b){this.removeInner(a-this.first,b)},getValue:function(a){var b=Zc(this,this.first,this.first+this.size);return!1===a?b:b.join(a||this.lineSeparator())},setValue:M(function(a){var b=p(this.first,0),c=this.first+this.size-1;lb(this,{from:b,to:p(c,t(this,c).text.length),text:this.splitLines(a),origin:"setValue",full:!0},!0);this.cm&&Gb(this.cm,0,0);P(this,
xa(b),sa)}),replaceRange:function(a,b,c,d){b=v(this,b);c=c?v(this,c):b;mb(this,a,b,c,d)},getRange:function(a,b,c){a=La(this,v(this,a),v(this,b));return!1===c?a:a.join(c||this.lineSeparator())},getLine:function(a){return(a=this.getLineHandle(a))&&a.text},getLineHandle:function(a){if(wb(this,a))return t(this,a)},getLineNumber:function(a){return C(a)},getLineHandleVisualStart:function(a){"number"==typeof a&&(a=t(this,a));return pa(a)},lineCount:function(){return this.size},firstLine:function(){return this.first},
lastLine:function(){return this.first+this.size-1},clipPos:function(a){return v(this,a)},getCursor:function(a){var b=this.sel.primary();return null==a||"head"==a?b.head:"anchor"==a?b.anchor:"end"==a||"to"==a||!1===a?b.to():b.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:M(function(a,b,c){a=v(this,"number"==typeof a?p(a,b||0):a);P(this,xa(a,null),c)}),setSelection:M(function(a,b,c){var d=v(this,a);a=v(this,b||a);
P(this,xa(d,a),c)}),extendSelection:M(function(a,b,c){Ec(this,v(this,a),b&&v(this,b),c)}),extendSelections:M(function(a,b){nf(this,ee(this,a),b)}),extendSelectionsBy:M(function(a,b){var c=ic(this.sel.ranges,a);nf(this,ee(this,c),b)}),setSelections:M(function(a,b,c){if(a.length){for(var d=[],e=0;e<a.length;e++)d[e]=new A(v(this,a[e].anchor),v(this,a[e].head));null==b&&(b=Math.min(a.length-1,this.sel.primIndex));P(this,ma(this.cm,d,b),c)}}),addSelection:M(function(a,b,c){var d=this.sel.ranges.slice(0);
d.push(new A(v(this,a),v(this,b||a)));P(this,ma(this.cm,d,d.length-1),c)}),getSelection:function(a){for(var b=this.sel.ranges,c,d=0;d<b.length;d++){var e=La(this,b[d].from(),b[d].to());c=c?c.concat(e):e}return!1===a?c:c.join(a||this.lineSeparator())},getSelections:function(a){for(var b=[],c=this.sel.ranges,d=0;d<c.length;d++){var e=La(this,c[d].from(),c[d].to());!1!==a&&(e=e.join(a||this.lineSeparator()));b[d]=e}return b},replaceSelection:function(a,b,c){for(var d=[],e=0;e<this.sel.ranges.length;e++)d[e]=
a;this.replaceSelections(d,b,c||"+input")},replaceSelections:M(function(a,b,c){for(var d=[],e=this.sel,f=0;f<e.ranges.length;f++){var g=e.ranges[f];d[f]={from:g.from(),to:g.to(),text:this.splitLines(a[f]),origin:c}}if(a=b&&"end"!=b){a=[];e=c=p(this.first,0);for(f=0;f<d.length;f++){var h=d[f];g=ef(h.from,c,e);var k=ef(Da(h),c,e);c=h.to;e=k;"around"==b?(h=this.sel.ranges[f],h=0>x(h.head,h.anchor),a[f]=new A(h?k:g,h?g:k)):a[f]=new A(g,g)}a=new da(a,this.sel.primIndex)}b=a;for(a=d.length-1;0<=a;a--)lb(this,
d[a]);b?of(this,b):this.cm&&gb(this.cm)}),undo:M(function(){Hc(this,"undo")}),redo:M(function(){Hc(this,"redo")}),undoSelection:M(function(){Hc(this,"undo",!0)}),redoSelection:M(function(){Hc(this,"redo",!0)}),setExtending:function(a){this.extend=a},getExtending:function(){return this.extend},historySize:function(){for(var a=this.history,b=0,c=0,d=0;d<a.done.length;d++)a.done[d].ranges||++b;for(d=0;d<a.undone.length;d++)a.undone[d].ranges||++c;return{undo:b,redo:c}},clearHistory:function(){this.history=
new Cc(this.history.maxGeneration)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(a){a&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null);return this.history.generation},isClean:function(a){return this.history.generation==(a||this.cleanGeneration)},getHistory:function(){return{done:jb(this.history.done),undone:jb(this.history.undone)}},setHistory:function(a){var b=this.history=new Cc(this.history.maxGeneration);b.done=jb(a.done.slice(0),
null,!0);b.undone=jb(a.undone.slice(0),null,!0)},setGutterMarker:M(function(a,b,c){return Ob(this,a,"gutter",function(a){var d=a.gutterMarkers||(a.gutterMarkers={});d[b]=c;!c&&Zd(d)&&(a.gutterMarkers=null);return!0})}),clearGutter:M(function(a){var b=this;this.iter(function(c){c.gutterMarkers&&c.gutterMarkers[a]&&Ob(b,c,"gutter",function(){c.gutterMarkers[a]=null;Zd(c.gutterMarkers)&&(c.gutterMarkers=null);return!0})})}),lineInfo:function(a){if("number"==typeof a){if(!wb(this,a))return null;var b=
a;a=t(this,a);if(!a)return null}else if(b=C(a),null==b)return null;return{line:b,handle:a,text:a.text,gutterMarkers:a.gutterMarkers,textClass:a.textClass,bgClass:a.bgClass,wrapClass:a.wrapClass,widgets:a.widgets}},addLineClass:M(function(a,b,c){return Ob(this,a,"gutter"==b?"gutter":"class",function(a){var d="text"==b?"textClass":"background"==b?"bgClass":"gutter"==b?"gutterClass":"wrapClass";if(a[d]){if(Ha(c).test(a[d]))return!1;a[d]+=" "+c}else a[d]=c;return!0})}),removeLineClass:M(function(a,b,
c){return Ob(this,a,"gutter"==b?"gutter":"class",function(a){var d="text"==b?"textClass":"background"==b?"bgClass":"gutter"==b?"gutterClass":"wrapClass",f=a[d];if(f)if(null==c)a[d]=null;else{var g=f.match(Ha(c));if(!g)return!1;var h=g.index+g[0].length;a[d]=f.slice(0,g.index)+(g.index&&h!=f.length?" ":"")+f.slice(h)||null}else return!1;return!0})}),addLineWidget:M(function(a,b,c){return Ng(this,a,b,c)}),removeLineWidget:function(a){a.clear()},markText:function(a,b,c){return nb(this,v(this,a),v(this,
b),c,c&&c.type||"range")},setBookmark:function(a,b){var c={replacedWith:b&&(null==b.nodeType?b.widget:b),insertLeft:b&&b.insertLeft,clearWhenEmpty:!1,shared:b&&b.shared,handleMouseEvents:b&&b.handleMouseEvents};a=v(this,a);return nb(this,a,a,c,"bookmark")},findMarksAt:function(a){a=v(this,a);var b=[],c=t(this,a.line).markedSpans;if(c)for(var d=0;d<c.length;++d){var e=c[d];(null==e.from||e.from<=a.ch)&&(null==e.to||e.to>=a.ch)&&b.push(e.marker.parent||e.marker)}return b},findMarks:function(a,b,c){a=
v(this,a);b=v(this,b);var d=[],e=a.line;this.iter(a.line,b.line+1,function(f){if(f=f.markedSpans)for(var g=0;g<f.length;g++){var h=f[g];null!=h.to&&e==a.line&&a.ch>=h.to||null==h.from&&e!=a.line||null!=h.from&&e==b.line&&h.from>=b.ch||c&&!c(h.marker)||d.push(h.marker.parent||h.marker)}++e});return d},getAllMarks:function(){var a=[];this.iter(function(b){if(b=b.markedSpans)for(var c=0;c<b.length;++c)null!=b[c].from&&a.push(b[c].marker)});return a},posFromIndex:function(a){var b,c=this.first,d=this.lineSeparator().length;
this.iter(function(e){e=e.text.length+d;if(e>a)return b=a,!0;a-=e;++c});return v(this,p(c,b))},indexFromPos:function(a){a=v(this,a);var b=a.ch;if(a.line<this.first||0>a.ch)return 0;var c=this.lineSeparator().length;this.iter(this.first,a.line,function(a){b+=a.text.length+c});return b},copy:function(a){var b=new W(Zc(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);b.scrollTop=this.scrollTop;b.scrollLeft=this.scrollLeft;b.sel=this.sel;b.extend=!1;a&&(b.history.undoDepth=
this.history.undoDepth,b.setHistory(this.getHistory()));return b},linkedDoc:function(a){a||(a={});var b=this.first,c=this.first+this.size;null!=a.from&&a.from>b&&(b=a.from);null!=a.to&&a.to<c&&(c=a.to);b=new W(Zc(this,b,c),a.mode||this.modeOption,b,this.lineSep,this.direction);a.sharedHist&&(b.history=this.history);(this.linked||(this.linked=[])).push({doc:b,sharedHist:a.sharedHist});b.linked=[{doc:this,isParent:!0,sharedHist:a.sharedHist}];a=Cf(this);for(c=0;c<a.length;c++){var d=a[c],e=d.find(),
f=b.clipPos(e.from);e=b.clipPos(e.to);x(f,e)&&(f=nb(b,f,e,d.primary,d.primary.type),d.markers.push(f),f.parent=d)}return b},unlinkDoc:function(a){a instanceof F&&(a=a.doc);if(this.linked)for(var b=0;b<this.linked.length;++b)if(this.linked[b].doc==a){this.linked.splice(b,1);a.unlinkDoc(this);Pg(Cf(this));break}if(a.history==this.history){var c=[a.id];Wa(a,function(a){return c.push(a.id)},!0);a.history=new Cc(null);a.history.done=jb(this.history.done,c);a.history.undone=jb(this.history.undone,c)}},
iterLinkedDocs:function(a){Wa(this,a)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(a){return this.lineSep?a.split(this.lineSep):Vd(a)},lineSeparator:function(){return this.lineSep||"\n"},setDirection:M(function(a){"rtl"!=a&&(a="ltr");a!=this.direction&&(this.direction=a,this.iter(function(a){return a.order=null}),this.cm&&Jg(this.cm))})});W.prototype.eachLine=W.prototype.iter;for(var Ef=0,Vf=!1,Fa={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",
17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",
63302:"Insert"},dc=0;10>dc;dc++)Fa[dc+48]=Fa[dc+96]=String(dc);for(var Oc=65;90>=Oc;Oc++)Fa[Oc]=String.fromCharCode(Oc);for(var ec=1;12>=ec;ec++)Fa[ec+111]=Fa[ec+63235]="F"+ec;var Tb={basic:{Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",
Esc:"singleSelection"},pcDefault:{"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll",
"Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},emacsy:{"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars",
"Ctrl-O":"openLine"},macDefault:{"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace",
"Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]}};Tb["default"]=ia?Tb.macDefault:Tb.pcDefault;var Ub={selectAll:tf,singleSelection:function(a){return a.setSelection(a.getCursor("anchor"),a.getCursor("head"),sa)},killLine:function(a){return pb(a,function(b){if(b.empty()){var c=
t(a.doc,b.head.line).text.length;return b.head.ch==c&&b.head.line<a.lastLine()?{from:b.head,to:p(b.head.line+1,0)}:{from:b.head,to:p(b.head.line,c)}}return{from:b.from(),to:b.to()}})},deleteLine:function(a){return pb(a,function(b){return{from:p(b.from().line,0),to:v(a.doc,p(b.to().line+1,0))}})},delLineLeft:function(a){return pb(a,function(a){return{from:p(a.from().line,0),to:a.from()}})},delWrappedLineLeft:function(a){return pb(a,function(b){var c=a.charCoords(b.head,"div").top+5;return{from:a.coordsChar({left:0,
top:c},"div"),to:b.from()}})},delWrappedLineRight:function(a){return pb(a,function(b){var c=a.charCoords(b.head,"div").top+5;c=a.coordsChar({left:a.display.lineDiv.offsetWidth+100,top:c},"div");return{from:b.from(),to:c}})},undo:function(a){return a.undo()},redo:function(a){return a.redo()},undoSelection:function(a){return a.undoSelection()},redoSelection:function(a){return a.redoSelection()},goDocStart:function(a){return a.extendSelection(p(a.firstLine(),0))},goDocEnd:function(a){return a.extendSelection(p(a.lastLine()))},
goLineStart:function(a){return a.extendSelectionsBy(function(b){return Kf(a,b.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(a){return a.extendSelectionsBy(function(b){return Lf(a,b.head)},{origin:"+move",bias:1})},goLineEnd:function(a){return a.extendSelectionsBy(function(b){b=b.head.line;var c=t(a.doc,b);var d=c;for(var e;e=cb(d,!1);)d=e.find(1,!0).line;d!=c&&(b=C(d));return Od(!0,a,c,b,-1)},{origin:"+move",bias:-1})},goLineRight:function(a){return a.extendSelectionsBy(function(b){b=
a.cursorCoords(b.head,"div").top+5;return a.coordsChar({left:a.display.lineDiv.offsetWidth+100,top:b},"div")},bc)},goLineLeft:function(a){return a.extendSelectionsBy(function(b){b=a.cursorCoords(b.head,"div").top+5;return a.coordsChar({left:0,top:b},"div")},bc)},goLineLeftSmart:function(a){return a.extendSelectionsBy(function(b){var c=a.cursorCoords(b.head,"div").top+5;c=a.coordsChar({left:0,top:c},"div");return c.ch<a.getLine(c.line).search(/\S/)?Lf(a,b.head):c},bc)},goLineUp:function(a){return a.moveV(-1,
"line")},goLineDown:function(a){return a.moveV(1,"line")},goPageUp:function(a){return a.moveV(-1,"page")},goPageDown:function(a){return a.moveV(1,"page")},goCharLeft:function(a){return a.moveH(-1,"char")},goCharRight:function(a){return a.moveH(1,"char")},goColumnLeft:function(a){return a.moveH(-1,"column")},goColumnRight:function(a){return a.moveH(1,"column")},goWordLeft:function(a){return a.moveH(-1,"word")},goGroupRight:function(a){return a.moveH(1,"group")},goGroupLeft:function(a){return a.moveH(-1,
"group")},goWordRight:function(a){return a.moveH(1,"word")},delCharBefore:function(a){return a.deleteH(-1,"char")},delCharAfter:function(a){return a.deleteH(1,"char")},delWordBefore:function(a){return a.deleteH(-1,"word")},delWordAfter:function(a){return a.deleteH(1,"word")},delGroupBefore:function(a){return a.deleteH(-1,"group")},delGroupAfter:function(a){return a.deleteH(1,"group")},indentAuto:function(a){return a.indentSelection("smart")},indentMore:function(a){return a.indentSelection("add")},
indentLess:function(a){return a.indentSelection("subtract")},insertTab:function(a){return a.replaceSelection("\t")},insertSoftTab:function(a){for(var b=[],c=a.listSelections(),d=a.options.tabSize,e=0;e<c.length;e++){var f=c[e].from();f=fa(a.getLine(f.line),f.ch,d);b.push(Rc(d-f%d))}a.replaceSelections(b)},defaultTab:function(a){a.somethingSelected()?a.indentSelection("add"):a.execCommand("insertTab")},transposeChars:function(a){return Y(a,function(){for(var b=a.listSelections(),c=[],d=0;d<b.length;d++)if(b[d].empty()){var e=
b[d].head,f=t(a.doc,e.line).text;if(f)if(e.ch==f.length&&(e=new p(e.line,e.ch-1)),0<e.ch)e=new p(e.line,e.ch+1),a.replaceRange(f.charAt(e.ch-1)+f.charAt(e.ch-2),p(e.line,e.ch-2),e,"+transpose");else if(e.line>a.doc.first){var g=t(a.doc,e.line-1).text;g&&(e=new p(e.line,1),a.replaceRange(f.charAt(0)+a.doc.lineSeparator()+g.charAt(g.length-1),p(e.line-1,g.length-1),e,"+transpose"))}c.push(new A(e,e))}a.setSelections(c)})},newlineAndIndent:function(a){return Y(a,function(){for(var b=a.listSelections(),
c=b.length-1;0<=c;c--)a.replaceRange(a.doc.lineSeparator(),b[c].anchor,b[c].head,"+input");b=a.listSelections();for(c=0;c<b.length;c++)a.indentLine(b[c].from().line,null,!0);gb(a)})},openLine:function(a){return a.replaceSelection("\n","start")},toggleOverwrite:function(a){return a.toggleOverwrite()}},Wg=new Ga,Pd=null,Qd=function(a,b,c){this.time=a;this.pos=b;this.button=c};Qd.prototype.compare=function(a,b,c){return this.time+400>a&&0==x(b,this.pos)&&c==this.button};var Xb,Wb,qb={toString:function(){return"CodeMirror.Init"}},
Uf={},Mc={};F.defaults=Uf;F.optionHandlers=Mc;var Td=[];F.defineInitHook=function(a){return Td.push(a)};var Z=null,B=function(a){this.cm=a;this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null;this.polling=new Ga;this.composing=null;this.gracePeriod=!1;this.readDOMTimeout=null};B.prototype.init=function(a){function b(a){if(!K(e,a)){if(e.somethingSelected())Z={lineWise:!1,text:e.getSelections()},"cut"==a.type&&e.replaceSelection("",null,"cut");else if(e.options.lineWiseCopyCut){var b=
Zf(e);Z={lineWise:!0,text:b.text};"cut"==a.type&&e.operation(function(){e.setSelections(b.ranges,0,sa);e.replaceSelection("",null,"cut")})}else return;if(a.clipboardData){a.clipboardData.clearData();var c=Z.text.join("\n");a.clipboardData.setData("Text",c);if(a.clipboardData.getData("Text")==c){a.preventDefault();return}}var g=ag();a=g.firstChild;e.display.lineSpace.insertBefore(g,e.display.lineSpace.firstChild);a.value=Z.text.join("\n");var m=document.activeElement;ac(a);setTimeout(function(){e.display.lineSpace.removeChild(g);
m.focus();m==f&&d.showPrimarySelection()},50)}}var c=this,d=this,e=d.cm,f=d.div=a.lineDiv;$f(f,e.options.spellcheck,e.options.autocorrect,e.options.autocapitalize);w(f,"paste",function(a){K(e,a)||Yf(a,e)||11>=E&&setTimeout(L(e,function(){return c.updateFromDOM()}),20)});w(f,"compositionstart",function(a){c.composing={data:a.data,done:!1}});w(f,"compositionupdate",function(a){c.composing||(c.composing={data:a.data,done:!1})});w(f,"compositionend",function(a){c.composing&&(a.data!=c.composing.data&&
c.readFromDOMSoon(),c.composing.done=!0)});w(f,"touchstart",function(){return d.forceCompositionEnd()});w(f,"input",function(){c.composing||c.readFromDOMSoon()});w(f,"copy",b);w(f,"cut",b)};B.prototype.prepareSelection=function(){var a=Oe(this.cm,!1);a.focus=this.cm.state.focused;return a};B.prototype.showSelection=function(a,b){a&&this.cm.display.view.length&&((a.focus||b)&&this.showPrimarySelection(),this.showMultipleSelections(a))};B.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()};
B.prototype.showPrimarySelection=function(){var a=this.getSelection(),b=this.cm,c=b.doc.sel.primary(),d=c.from();c=c.to();if(b.display.viewTo==b.display.viewFrom||d.line>=b.display.viewTo||c.line<b.display.viewFrom)a.removeAllRanges();else{var e=Nc(b,a.anchorNode,a.anchorOffset),f=Nc(b,a.focusNode,a.focusOffset);if(!e||e.bad||!f||f.bad||0!=x(nc(e,f),d)||0!=x(mc(e,f),c))if(e=b.display.view,d=d.line>=b.display.viewFrom&&cg(b,d)||{node:e[0].measure.map[2],offset:0},c=c.line<b.display.viewTo&&cg(b,c),
c||(c=e[e.length-1].measure,c=c.maps?c.maps[c.maps.length-1]:c.map,c={node:c[c.length-1],offset:c[c.length-2]-c[c.length-3]}),d&&c){e=a.rangeCount&&a.getRangeAt(0);try{var g=zb(d.node,d.offset,c.offset,c.node)}catch(h){}g&&(!Ca&&b.state.focused?(a.collapse(d.node,d.offset),g.collapsed||(a.removeAllRanges(),a.addRange(g))):(a.removeAllRanges(),a.addRange(g)),e&&null==a.anchorNode?a.addRange(e):Ca&&this.startGracePeriod());this.rememberSelection()}else a.removeAllRanges()}};B.prototype.startGracePeriod=
function(){var a=this;clearTimeout(this.gracePeriod);this.gracePeriod=setTimeout(function(){a.gracePeriod=!1;a.selectionChanged()&&a.cm.operation(function(){return a.cm.curOp.selectionChanged=!0})},20)};B.prototype.showMultipleSelections=function(a){aa(this.cm.display.cursorDiv,a.cursors);aa(this.cm.display.selectionDiv,a.selection)};B.prototype.rememberSelection=function(){var a=this.getSelection();this.lastAnchorNode=a.anchorNode;this.lastAnchorOffset=a.anchorOffset;this.lastFocusNode=a.focusNode;
this.lastFocusOffset=a.focusOffset};B.prototype.selectionInEditor=function(){var a=this.getSelection();if(!a.rangeCount)return!1;a=a.getRangeAt(0).commonAncestorContainer;return ya(this.div,a)};B.prototype.focus=function(){"nocursor"!=this.cm.options.readOnly&&(this.selectionInEditor()||this.showSelection(this.prepareSelection(),!0),this.div.focus())};B.prototype.blur=function(){this.div.blur()};B.prototype.getField=function(){return this.div};B.prototype.supportsTouch=function(){return!0};B.prototype.receivedFocus=
function(){function a(){b.cm.state.focused&&(b.pollSelection(),b.polling.set(b.cm.options.pollInterval,a))}var b=this;this.selectionInEditor()?this.pollSelection():Y(this.cm,function(){return b.cm.curOp.selectionChanged=!0});this.polling.set(this.cm.options.pollInterval,a)};B.prototype.selectionChanged=function(){var a=this.getSelection();return a.anchorNode!=this.lastAnchorNode||a.anchorOffset!=this.lastAnchorOffset||a.focusNode!=this.lastFocusNode||a.focusOffset!=this.lastFocusOffset};B.prototype.pollSelection=
function(){if(null==this.readDOMTimeout&&!this.gracePeriod&&this.selectionChanged()){var a=this.getSelection(),b=this.cm;if(tc&&sc&&this.cm.display.gutterSpecs.length&&kh(a.anchorNode))this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),this.focus();else if(!this.composing){this.rememberSelection();var c=Nc(b,a.anchorNode,a.anchorOffset),d=Nc(b,a.focusNode,a.focusOffset);c&&d&&Y(b,function(){P(b.doc,xa(c,d),sa);if(c.bad||d.bad)b.curOp.selectionChanged=!0})}}};
B.prototype.pollContent=function(){null!=this.readDOMTimeout&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null);var a=this.cm,b=a.display,c=a.doc.sel.primary(),d=c.from(),e=c.to();0==d.ch&&d.line>a.firstLine()&&(d=p(d.line-1,t(a.doc,d.line-1).length));e.ch==t(a.doc,e.line).text.length&&e.line<a.lastLine()&&(e=p(e.line+1,0));if(d.line<b.viewFrom||e.line>b.viewTo-1)return!1;var f;d.line==b.viewFrom||0==(f=Oa(a,d.line))?(c=C(b.view[0].line),f=b.view[0].node):(c=C(b.view[f].line),f=b.view[f-
1].node.nextSibling);var g=Oa(a,e.line);g==b.view.length-1?(e=b.viewTo-1,b=b.lineDiv.lastChild):(e=C(b.view[g+1].line)-1,b=b.view[g+1].node.previousSibling);if(!f)return!1;b=a.doc.splitLines(lh(a,f,b,c,e));for(f=La(a.doc,p(c,0),p(e,t(a.doc,e).text.length));1<b.length&&1<f.length;)if(y(b)==y(f))b.pop(),f.pop(),e--;else if(b[0]==f[0])b.shift(),f.shift(),c++;else break;var h=0;g=0;for(var k=b[0],l=f[0],m=Math.min(k.length,l.length);h<m&&k.charCodeAt(h)==l.charCodeAt(h);)++h;k=y(b);l=y(f);for(m=Math.min(k.length-
(1==b.length?h:0),l.length-(1==f.length?h:0));g<m&&k.charCodeAt(k.length-g-1)==l.charCodeAt(l.length-g-1);)++g;if(1==b.length&&1==f.length&&c==d.line)for(;h&&h>d.ch&&k.charCodeAt(k.length-g-1)==l.charCodeAt(l.length-g-1);)h--,g++;b[b.length-1]=k.slice(0,k.length-g).replace(/^\u200b+/,"");b[0]=b[0].slice(h).replace(/\u200b+$/,"");d=p(c,h);c=p(e,f.length?y(f).length-g:0);if(1<b.length||b[0]||x(d,c))return mb(a.doc,b,d,c,"+input"),!0};B.prototype.ensurePolled=function(){this.forceCompositionEnd()};B.prototype.reset=
function(){this.forceCompositionEnd()};B.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())};B.prototype.readFromDOMSoon=function(){var a=this;null==this.readDOMTimeout&&(this.readDOMTimeout=setTimeout(function(){a.readDOMTimeout=null;if(a.composing)if(a.composing.done)a.composing=null;else return;a.updateFromDOM()},80))};B.prototype.updateFromDOM=function(){var a=this;!this.cm.isReadOnly()&&
this.pollContent()||Y(this.cm,function(){return V(a.cm)})};B.prototype.setUneditable=function(a){a.contentEditable="false"};B.prototype.onKeyPress=function(a){0==a.charCode||this.composing||(a.preventDefault(),this.cm.isReadOnly()||L(this.cm,Ud)(this.cm,String.fromCharCode(null==a.charCode?a.keyCode:a.charCode),0))};B.prototype.readOnlyChanged=function(a){this.div.contentEditable=String("nocursor"!=a)};B.prototype.onContextMenu=function(){};B.prototype.resetPosition=function(){};B.prototype.needsContentAttribute=
!0;var J=function(a){this.cm=a;this.prevInput="";this.pollingFast=!1;this.polling=new Ga;this.hasSelection=!1;this.composing=null};J.prototype.init=function(a){function b(a){if(!K(e,a)){if(e.somethingSelected())Z={lineWise:!1,text:e.getSelections()};else if(e.options.lineWiseCopyCut){var b=Zf(e);Z={lineWise:!0,text:b.text};"cut"==a.type?e.setSelections(b.ranges,null,sa):(d.prevInput="",f.value=b.text.join("\n"),ac(f))}else return;"cut"==a.type&&(e.state.cutIncoming=+new Date)}}var c=this,d=this,e=
this.cm;this.createField(a);var f=this.textarea;a.wrapper.insertBefore(this.wrapper,a.wrapper.firstChild);Zb&&(f.style.width="0px");w(f,"input",function(){z&&9<=E&&c.hasSelection&&(c.hasSelection=null);d.poll()});w(f,"paste",function(a){K(e,a)||Yf(a,e)||(e.state.pasteIncoming=+new Date,d.fastPoll())});w(f,"cut",b);w(f,"copy",b);w(a.scroller,"paste",function(b){if(!wa(a,b)&&!K(e,b))if(f.dispatchEvent){var c=new Event("paste");c.clipboardData=b.clipboardData;f.dispatchEvent(c)}else e.state.pasteIncoming=
+new Date,d.focus()});w(a.lineSpace,"selectstart",function(b){wa(a,b)||U(b)});w(f,"compositionstart",function(){var a=e.getCursor("from");d.composing&&d.composing.range.clear();d.composing={start:a,range:e.markText(a,e.getCursor("to"),{className:"CodeMirror-composing"})}});w(f,"compositionend",function(){d.composing&&(d.poll(),d.composing.range.clear(),d.composing=null)})};J.prototype.createField=function(a){this.wrapper=ag();this.textarea=this.wrapper.firstChild};J.prototype.prepareSelection=function(){var a=
this.cm,b=a.display,c=a.doc,d=Oe(a);if(a.options.moveInputWithCursor){a=ka(a,c.sel.primary().head,"div");c=b.wrapper.getBoundingClientRect();var e=b.lineDiv.getBoundingClientRect();d.teTop=Math.max(0,Math.min(b.wrapper.clientHeight-10,a.top+e.top-c.top));d.teLeft=Math.max(0,Math.min(b.wrapper.clientWidth-10,a.left+e.left-c.left))}return d};J.prototype.showSelection=function(a){var b=this.cm.display;aa(b.cursorDiv,a.cursors);aa(b.selectionDiv,a.selection);null!=a.teTop&&(this.wrapper.style.top=a.teTop+
"px",this.wrapper.style.left=a.teLeft+"px")};J.prototype.reset=function(a){if(!this.contextMenuPending&&!this.composing){var b=this.cm;b.somethingSelected()?(this.prevInput="",a=b.getSelection(),this.textarea.value=a,b.state.focused&&ac(this.textarea),z&&9<=E&&(this.hasSelection=a)):a||(this.prevInput=this.textarea.value="",z&&9<=E&&(this.hasSelection=null))}};J.prototype.getField=function(){return this.textarea};J.prototype.supportsTouch=function(){return!1};J.prototype.focus=function(){if("nocursor"!=
this.cm.options.readOnly&&(!Lb||ta()!=this.textarea))try{this.textarea.focus()}catch(a){}};J.prototype.blur=function(){this.textarea.blur()};J.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0};J.prototype.receivedFocus=function(){this.slowPoll()};J.prototype.slowPoll=function(){var a=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){a.poll();a.cm.state.focused&&a.slowPoll()})};J.prototype.fastPoll=function(){function a(){c.poll()||b?
(c.pollingFast=!1,c.slowPoll()):(b=!0,c.polling.set(60,a))}var b=!1,c=this;c.pollingFast=!0;c.polling.set(20,a)};J.prototype.poll=function(){var a=this,b=this.cm,c=this.textarea,d=this.prevInput;if(this.contextMenuPending||!b.state.focused||qh(c)&&!d&&!this.composing||b.isReadOnly()||b.options.disableInput||b.state.keySeq)return!1;var e=c.value;if(e==d&&!b.somethingSelected())return!1;if(z&&9<=E&&this.hasSelection===e||ia&&/[\uf700-\uf7ff]/.test(e))return b.display.input.reset(),!1;if(b.doc.sel==
b.display.selForContextMenu){var f=e.charCodeAt(0);8203!=f||d||(d="\u200b");if(8666==f)return this.reset(),this.cm.execCommand("undo")}var g=0;for(f=Math.min(d.length,e.length);g<f&&d.charCodeAt(g)==e.charCodeAt(g);)++g;Y(b,function(){Ud(b,e.slice(g),d.length-g,null,a.composing?"*compose":null);1E3<e.length||-1<e.indexOf("\n")?c.value=a.prevInput="":a.prevInput=e;a.composing&&(a.composing.range.clear(),a.composing.range=b.markText(a.composing.start,b.getCursor("to"),{className:"CodeMirror-composing"}))});
return!0};J.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)};J.prototype.onKeyPress=function(){z&&9<=E&&(this.hasSelection=null);this.fastPoll()};J.prototype.onContextMenu=function(a){function b(){if(null!=g.selectionStart){var a=e.somethingSelected(),b="\u200b"+(a?g.value:"");g.value="\u21da";g.value=b;d.prevInput=a?"":"\u200b";g.selectionStart=1;g.selectionEnd=b.length;f.selForContextMenu=e.doc.sel}}function c(){if(d.contextMenuPending==c&&(d.contextMenuPending=
!1,d.wrapper.style.cssText=m,g.style.cssText=l,z&&9>E&&f.scrollbars.setScrollTop(f.scroller.scrollTop=k),null!=g.selectionStart)){(!z||z&&9>E)&&b();var a=0,h=function(){f.selForContextMenu==e.doc.sel&&0==g.selectionStart&&0<g.selectionEnd&&"\u200b"==d.prevInput?L(e,tf)(e):10>a++?f.detectingSelectAll=setTimeout(h,500):(f.selForContextMenu=null,f.input.reset())};f.detectingSelectAll=setTimeout(h,200)}}var d=this,e=d.cm,f=e.display,g=d.textarea;d.contextMenuPending&&d.contextMenuPending();var h=Ra(e,
a),k=f.scroller.scrollTop;if(h&&!la){e.options.resetSelectionOnContextMenu&&-1==e.doc.sel.contains(h)&&L(e,P)(e.doc,xa(h),sa);var l=g.style.cssText,m=d.wrapper.style.cssText;h=d.wrapper.offsetParent.getBoundingClientRect();d.wrapper.style.cssText="position: static";g.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(a.clientY-h.top-5)+"px; left: "+(a.clientX-h.left-5)+"px;\n      z-index: 1000; background: "+(z?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
if(R)var p=window.scrollY;f.input.focus();R&&window.scrollTo(null,p);f.input.reset();e.somethingSelected()||(g.value=d.prevInput=" ");d.contextMenuPending=c;f.selForContextMenu=e.doc.sel;clearTimeout(f.detectingSelectAll);z&&9<=E&&b();if(Rd){vb(a);var n=function(){ba(window,"mouseup",n);setTimeout(c,20)};w(window,"mouseup",n)}else setTimeout(c,50)}};J.prototype.readOnlyChanged=function(a){a||this.reset();this.textarea.disabled="nocursor"==a};J.prototype.setUneditable=function(){};J.prototype.needsContentAttribute=
!1;(function(a){function b(b,e,f,g){a.defaults[b]=e;f&&(c[b]=g?function(a,b,c){c!=qb&&f(a,b,c)}:f)}var c=a.optionHandlers;a.defineOption=b;a.Init=qb;b("value","",function(a,b){return a.setValue(b)},!0);b("mode",null,function(a,b){a.doc.modeOption=b;Hd(a)},!0);b("indentUnit",2,Hd,!0);b("indentWithTabs",!1);b("smartIndent",!0);b("tabSize",4,function(a){Mb(a);Db(a);V(a)},!0);b("lineSeparator",null,function(a,b){if(a.doc.lineSep=b){var c=[],d=a.doc.first;a.doc.iter(function(a){for(var e=0;;){var f=a.text.indexOf(b,
e);if(-1==f)break;e=f+b.length;c.push(p(d,f))}d++});for(var e=c.length-1;0<=e;e--)mb(a.doc,b,c[e],p(c[e].line,c[e].ch+b.length))}});b("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,function(a,b,c){a.state.specialChars=new RegExp(b.source+(b.test("\t")?"":"|\t"),"g");c!=qb&&a.refresh()});b("specialCharPlaceholder",vg,function(a){return a.refresh()},!0);b("electricChars",!0);b("inputStyle",Lb?"contenteditable":"textarea",function(){throw Error("inputStyle can not (yet) be changed in a running editor");
},!0);b("spellcheck",!1,function(a,b){return a.getInputField().spellcheck=b},!0);b("autocorrect",!1,function(a,b){return a.getInputField().autocorrect=b},!0);b("autocapitalize",!1,function(a,b){return a.getInputField().autocapitalize=b},!0);b("rtlMoveVisually",!ph);b("wholeLineUpdateBefore",!0);b("theme","default",function(a){Tf(a);Kb(a)},!0);b("keyMap","default",function(a,b,c){b=Ic(b);(c=c!=qb&&Ic(c))&&c.detach&&c.detach(a,b);b.attach&&b.attach(a,c||null)});b("extraKeys",null);b("configureMouse",
null);b("lineWrapping",!1,ih,!0);b("gutters",[],function(a,b){a.display.gutterSpecs=Fd(b,a.options.lineNumbers);Kb(a)},!0);b("fixedGutter",!0,function(a,b){a.display.gutters.style.left=b?vd(a.display)+"px":"0";a.refresh()},!0);b("coverGutterNextToScrollbar",!1,function(a){return hb(a)},!0);b("scrollbarStyle","native",function(a){Xe(a);hb(a);a.display.scrollbars.setScrollTop(a.doc.scrollTop);a.display.scrollbars.setScrollLeft(a.doc.scrollLeft)},!0);b("lineNumbers",!1,function(a,b){a.display.gutterSpecs=
Fd(a.options.gutters,b);Kb(a)},!0);b("firstLineNumber",1,Kb,!0);b("lineNumberFormatter",function(a){return a},Kb,!0);b("showCursorWhenSelecting",!1,Eb,!0);b("resetSelectionOnContextMenu",!0);b("lineWiseCopyCut",!0);b("pasteLinesPerSelection",!0);b("selectionsMayTouch",!1);b("readOnly",!1,function(a,b){"nocursor"==b&&(Fb(a),a.display.input.blur());a.display.input.readOnlyChanged(b)});b("disableInput",!1,function(a,b){b||a.display.input.reset()},!0);b("dragDrop",!0,hh);b("allowDropFileTypes",null);
b("cursorBlinkRate",530);b("cursorScrollMargin",0);b("cursorHeight",1,Eb,!0);b("singleCursorHeightPerLine",!0,Eb,!0);b("workTime",100);b("workDelay",100);b("flattenSpans",!0,Mb,!0);b("addModeClass",!1,Mb,!0);b("pollInterval",100);b("undoDepth",200,function(a,b){return a.doc.history.undoDepth=b});b("historyEventDelay",1250);b("viewportMargin",10,function(a){return a.refresh()},!0);b("maxHighlightLength",1E4,Mb,!0);b("moveInputWithCursor",!0,function(a,b){b||a.display.input.resetPosition()});b("tabindex",
null,function(a,b){return a.display.input.getField().tabIndex=b||""});b("autofocus",null);b("direction","ltr",function(a,b){return a.doc.setDirection(b)},!0);b("phrases",null)})(F);(function(a){var b=a.optionHandlers,c=a.helpers={};a.prototype={constructor:a,focus:function(){window.focus();this.display.input.focus()},setOption:function(a,c){var d=this.options,e=d[a];if(d[a]!=c||"mode"==a)d[a]=c,b.hasOwnProperty(a)&&L(this,b[a])(this,c,e),H(this,"optionChange",this,a)},getOption:function(a){return this.options[a]},
getDoc:function(){return this.doc},addKeyMap:function(a,b){this.state.keyMaps[b?"push":"unshift"](Ic(a))},removeKeyMap:function(a){for(var b=this.state.keyMaps,c=0;c<b.length;++c)if(b[c]==a||b[c].name==a)return b.splice(c,1),!0},addOverlay:S(function(b,c){var d=b.token?b:a.getMode(this.options,b);if(d.startState)throw Error("Overlays may not be stateful.");gg(this.state.overlays,{mode:d,modeSpec:b,opaque:c&&c.opaque,priority:c&&c.priority||0},function(a){return a.priority});this.state.modeGen++;V(this)}),
removeOverlay:S(function(a){for(var b=this.state.overlays,c=0;c<b.length;++c){var d=b[c].modeSpec;if(d==a||"string"==typeof a&&d.name==a){b.splice(c,1);this.state.modeGen++;V(this);break}}}),indentLine:S(function(a,b,c){"string"!=typeof b&&"number"!=typeof b&&(b=null==b?this.options.smartIndent?"smart":"prev":b?"add":"subtract");wb(this.doc,a)&&Yb(this,a,b,c)}),indentSelection:S(function(a){for(var b=this.doc.sel.ranges,c=-1,d=0;d<b.length;d++){var h=b[d];if(h.empty())h.head.line>c&&(Yb(this,h.head.line,
a,!0),c=h.head.line,d==this.doc.sel.primIndex&&gb(this));else{var k=h.from();h=h.to();var l=Math.max(c,k.line);c=Math.min(this.lastLine(),h.line-(h.ch?0:1))+1;for(h=l;h<c;++h)Yb(this,h,a);h=this.doc.sel.ranges;0==k.ch&&b.length==h.length&&0<h[d].from().ch&&Ld(this.doc,d,new A(k,h[d].to()),sa)}}}),getTokenAt:function(a,b){return je(this,a,b)},getLineTokens:function(a,b){return je(this,p(a),b,!0)},getTokenTypeAt:function(a){a=v(this.doc,a);var b=he(this,t(this.doc,a.line)),c=0,d=(b.length-1)/2;a=a.ch;
if(0==a)b=b[2];else for(;;){var h=c+d>>1;if((h?b[2*h-1]:0)>=a)d=h;else if(b[2*h+1]<a)c=h+1;else{b=b[2*h+2];break}}c=b?b.indexOf("overlay "):-1;return 0>c?b:0==c?null:b.slice(0,c-1)},getModeAt:function(b){var c=this.doc.mode;return c.innerMode?a.innerMode(c,this.getTokenAt(b).state).mode:c},getHelper:function(a,b){return this.getHelpers(a,b)[0]},getHelpers:function(a,b){var d=[];if(!c.hasOwnProperty(b))return d;var e=c[b],h=this.getModeAt(a);if("string"==typeof h[b])e[h[b]]&&d.push(e[h[b]]);else if(h[b])for(var k=
0;k<h[b].length;k++){var l=e[h[b][k]];l&&d.push(l)}else h.helperType&&e[h.helperType]?d.push(e[h.helperType]):e[h.name]&&d.push(e[h.name]);for(k=0;k<e._global.length;k++)l=e._global[k],l.pred(h,this)&&-1==Q(d,l.val)&&d.push(l.val);return d},getStateAfter:function(a,b){var c=this.doc;a=Math.max(c.first,Math.min(null==a?c.first+c.size-1:a,c.first+c.size-1));return xb(this,a+1,b).state},cursorCoords:function(a,b){var c=this.doc.sel.primary();c=null==a?c.head:"object"==typeof a?v(this.doc,a):a?c.from():
c.to();return ka(this,c,b||"page")},charCoords:function(a,b){return rd(this,v(this.doc,a),b||"page")},coordsChar:function(a,b){a=Ie(this,a,b||"page");return td(this,a.left,a.top)},lineAtHeight:function(a,b){a=Ie(this,{top:a,left:0},b||"page").top;return Ma(this.doc,a+this.display.viewOffset)},heightAtLine:function(a,b,c){var d=!1;if("number"==typeof a){var e=this.doc.first+this.doc.size-1;a<this.doc.first?a=this.doc.first:a>e&&(a=e,d=!0);a=t(this.doc,a)}return uc(this,a,{top:0,left:0},b||"page",c||
d).top+(d?this.doc.height-qa(a):0)},defaultTextHeight:function(){return fb(this.display)},defaultCharWidth:function(){return eb(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(a,b,c,g,h){var d=this.display;a=ka(this,v(this.doc,a));var e=a.bottom,f=a.left;b.style.position="absolute";b.setAttribute("cm-ignore-events","true");this.display.input.setUneditable(b);d.sizer.appendChild(b);if("over"==g)e=a.top;else if("above"==g||"near"==
g){var p=Math.max(d.wrapper.clientHeight,this.doc.height),n=Math.max(d.sizer.clientWidth,d.lineSpace.clientWidth);("above"==g||a.bottom+b.offsetHeight>p)&&a.top>b.offsetHeight?e=a.top-b.offsetHeight:a.bottom+b.offsetHeight<=p&&(e=a.bottom);f+b.offsetWidth>n&&(f=n-b.offsetWidth)}b.style.top=e+"px";b.style.left=b.style.right="";"right"==h?(f=d.sizer.clientWidth-b.offsetWidth,b.style.right="0px"):("left"==h?f=0:"middle"==h&&(f=(d.sizer.clientWidth-b.offsetWidth)/2),b.style.left=f+"px");c&&(a=Ad(this,
{left:f,top:e,right:f+b.offsetWidth,bottom:e+b.offsetHeight}),null!=a.scrollTop&&Hb(this,a.scrollTop),null!=a.scrollLeft&&Ta(this,a.scrollLeft))},triggerOnKeyDown:S(Of),triggerOnKeyPress:S(Qf),triggerOnKeyUp:Pf,triggerOnMouseDown:S(Rf),execCommand:function(a){if(Ub.hasOwnProperty(a))return Ub[a].call(null,this)},triggerElectric:S(function(a){Xf(this,a)}),findPosH:function(a,b,c,g){var d=1;0>b&&(d=-1,b=-b);a=v(this.doc,a);for(var e=0;e<b&&(a=Wd(this.doc,a,d,c,g),!a.hitSide);++e);return a},moveH:S(function(a,
b){var c=this;this.extendSelectionsBy(function(d){return c.display.shift||c.doc.extend||d.empty()?Wd(c.doc,d.head,a,b,c.options.rtlMoveVisually):0>a?d.from():d.to()},bc)}),deleteH:S(function(a,b){var c=this.doc;this.doc.sel.somethingSelected()?c.replaceSelection("",null,"+delete"):pb(this,function(d){var e=Wd(c,d.head,a,b,!1);return 0>a?{from:e,to:d.head}:{from:d.head,to:e}})}),findPosV:function(a,b,c,g){var d=1;0>b&&(d=-1,b=-b);var e=v(this.doc,a);for(a=0;a<b&&(e=ka(this,e,"div"),null==g?g=e.left:
e.left=g,e=bg(this,e,d,c),!e.hitSide);++a);return e},moveV:S(function(a,b){var c=this,d=this.doc,e=[],k=!this.display.shift&&!d.extend&&d.sel.somethingSelected();d.extendSelectionsBy(function(f){if(k)return 0>a?f.from():f.to();var g=ka(c,f.head,"div");null!=f.goalColumn&&(g.left=f.goalColumn);e.push(g.left);var h=bg(c,g,a,b);"page"==b&&f==d.sel.primary()&&yc(c,rd(c,h,"div").top-g.top);return h},bc);if(e.length)for(var l=0;l<d.sel.ranges.length;l++)d.sel.ranges[l].goalColumn=e[l]}),findWordAt:function(a){var b=
t(this.doc,a.line).text,c=a.ch,d=a.ch;if(b){var h=this.getHelper(a,"wordChars");"before"!=a.sticky&&d!=b.length||!c?++d:--c;var k=b.charAt(c);for(k=jc(k,h)?function(a){return jc(a,h)}:/\s/.test(k)?function(a){return/\s/.test(a)}:function(a){return!/\s/.test(a)&&!jc(a)};0<c&&k(b.charAt(c-1));)--c;for(;d<b.length&&k(b.charAt(d));)++d}return new A(p(a.line,c),p(a.line,d))},toggleOverwrite:function(a){if(null==a||a!=this.state.overwrite)(this.state.overwrite=!this.state.overwrite)?Ia(this.display.cursorDiv,
"CodeMirror-overwrite"):Sa(this.display.cursorDiv,"CodeMirror-overwrite"),H(this,"overwriteToggle",this,this.state.overwrite)},hasFocus:function(){return this.display.input.getField()==ta()},isReadOnly:function(){return!(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:S(function(a,b){Gb(this,a,b)}),getScrollInfo:function(){var a=this.display.scroller;return{left:a.scrollLeft,top:a.scrollTop,height:a.scrollHeight-ra(this)-this.display.barHeight,width:a.scrollWidth-ra(this)-this.display.barWidth,
clientHeight:md(this),clientWidth:Na(this)}},scrollIntoView:S(function(a,b){null==a?(a={from:this.doc.sel.primary().head,to:null},null==b&&(b=this.options.cursorScrollMargin)):"number"==typeof a?a={from:p(a,0),to:null}:null==a.from&&(a={from:a,to:null});a.to||(a.to=a.from);a.margin=b||0;if(null!=a.from.line){var c=a;zc(this);this.curOp.scrollToPos=c}else Te(this,a.from,a.to,a.margin)}),setSize:S(function(a,b){var c=this,d=function(a){return"number"==typeof a||/^\d+$/.test(String(a))?a+"px":a};null!=
a&&(this.display.wrapper.style.width=d(a));null!=b&&(this.display.wrapper.style.height=d(b));this.options.lineWrapping&&Fe(this);var e=this.display.viewFrom;this.doc.iter(e,this.display.viewTo,function(a){if(a.widgets)for(var b=0;b<a.widgets.length;b++)if(a.widgets[b].noHScroll){Ba(c,e,"widget");break}++e});this.curOp.forceUpdate=!0;H(this,"refresh",this)}),operation:function(a){return Y(this,a)},startOperation:function(){return Ua(this)},endOperation:function(){return Va(this)},refresh:S(function(){var a=
this.display.cachedTextHeight;V(this);this.curOp.forceUpdate=!0;Db(this);Gb(this,this.doc.scrollLeft,this.doc.scrollTop);Ed(this.display);(null==a||.5<Math.abs(a-fb(this.display)))&&wd(this);H(this,"refresh",this)}),swapDoc:S(function(a){var b=this.doc;b.cm=null;this.state.selectingText&&this.state.selectingText();gf(this,a);Db(this);this.display.input.reset();Gb(this,a.scrollLeft,a.scrollTop);this.curOp.forceScroll=!0;O(this,"swapDoc",this,b);return b}),phrase:function(a){var b=this.options.phrases;
return b&&Object.prototype.hasOwnProperty.call(b,a)?b[a]:a},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}};$a(a);a.registerHelper=function(b,e,f){c.hasOwnProperty(b)||(c[b]=a[b]={_global:[]});c[b][e]=f};a.registerGlobalHelper=function(b,e,f,g){a.registerHelper(b,e,g);c[b]._global.push({pred:f,val:g})}})(F);var sh=
"iter insert remove copy getEditor constructor".split(" "),fc;for(fc in W.prototype)W.prototype.hasOwnProperty(fc)&&0>Q(sh,fc)&&(F.prototype[fc]=function(a){return function(){return a.apply(this.doc,arguments)}}(W.prototype[fc]));$a(W);F.inputStyles={textarea:J,contenteditable:B};F.defineMode=function(a){F.defaults.mode||"null"==a||(F.defaults.mode=a);mg.apply(this,arguments)};F.defineMIME=function(a,b){ab[a]=b};F.defineMode("null",function(){return{token:function(a){return a.skipToEnd()}}});F.defineMIME("text/plain",
"null");F.defineExtension=function(a,b){F.prototype[a]=b};F.defineDocExtension=function(a,b){W.prototype[a]=b};F.fromTextArea=function(a,b){function c(){a.value=h.getValue()}b=b?Ja(b):{};b.value=a.value;!b.tabindex&&a.tabIndex&&(b.tabindex=a.tabIndex);!b.placeholder&&a.placeholder&&(b.placeholder=a.placeholder);if(null==b.autofocus){var d=ta();b.autofocus=d==a||null!=a.getAttribute("autofocus")&&d==document.body}if(a.form&&(w(a.form,"submit",c),!b.leaveSubmitMethodAlone)){var e=a.form;var f=e.submit;
try{var g=e.submit=function(){c();e.submit=f;e.submit();e.submit=g}}catch(k){}}b.finishInit=function(d){d.save=c;d.getTextArea=function(){return a};d.toTextArea=function(){d.toTextArea=isNaN;c();a.parentNode.removeChild(d.getWrapperElement());a.style.display="";a.form&&(ba(a.form,"submit",c),b.leaveSubmitMethodAlone||"function"!=typeof a.form.submit||(a.form.submit=f))}};a.style.display="none";var h=F(function(b){return a.parentNode.insertBefore(b,a.nextSibling)},b);return h};(function(a){a.off=ba;
a.on=w;a.wheelEventPixels=Ig;a.Doc=W;a.splitLines=Vd;a.countColumn=fa;a.findColumn=Qc;a.isWordChar=Sc;a.Pass=Kc;a.signal=H;a.Line=ib;a.changeEnd=Da;a.scrollbarModel=Ye;a.Pos=p;a.cmpPos=x;a.modes=Wc;a.mimeModes=ab;a.resolveMode=lc;a.getMode=Xc;a.modeExtensions=bb;a.extendMode=ng;a.copyState=Ka;a.startState=de;a.innerMode=Yc;a.commands=Ub;a.keyMap=Tb;a.keyName=Jf;a.isModifierKey=Gf;a.lookupKey=ob;a.normalizeKeyMap=Ug;a.StringStream=I;a.SharedTextMarker=Sb;a.TextMarker=Ea;a.LineWidget=Rb;a.e_preventDefault=
U;a.e_stopPropagation=be;a.e_stop=vb;a.addClass=Ia;a.contains=ya;a.rmClass=Sa;a.keyNames=Fa})(F);F.version="5.49.1";return F});


// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("../xml/xml"), require("../javascript/javascript"), require("../css/css"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "../xml/xml", "../javascript/javascript", "../css/css"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  var defaultTags = {
    script: [
      ["lang", /(javascript|babel)/i, "javascript"],
      ["type", /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i, "javascript"],
      ["type", /./, "text/plain"],
      [null, null, "javascript"]
    ],
    style:  [
      ["lang", /^css$/i, "css"],
      ["type", /^(text\/)?(x-)?(stylesheet|css)$/i, "css"],
      ["type", /./, "text/plain"],
      [null, null, "css"]
    ]
  };

  function maybeBackup(stream, pat, style) {
    var cur = stream.current(), close = cur.search(pat);
    if (close > -1) {
      stream.backUp(cur.length - close);
    } else if (cur.match(/<\/?$/)) {
      stream.backUp(cur.length);
      if (!stream.match(pat, false)) stream.match(cur);
    }
    return style;
  }

  var attrRegexpCache = {};
  function getAttrRegexp(attr) {
    var regexp = attrRegexpCache[attr];
    if (regexp) return regexp;
    return attrRegexpCache[attr] = new RegExp("\\s+" + attr + "\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*");
  }

  function getAttrValue(text, attr) {
    var match = text.match(getAttrRegexp(attr))
    return match ? /^\s*(.*?)\s*$/.exec(match[2])[1] : ""
  }

  function getTagRegexp(tagName, anchored) {
    return new RegExp((anchored ? "^" : "") + "<\/\s*" + tagName + "\s*>", "i");
  }

  function addTags(from, to) {
    for (var tag in from) {
      var dest = to[tag] || (to[tag] = []);
      var source = from[tag];
      for (var i = source.length - 1; i >= 0; i--)
        dest.unshift(source[i])
    }
  }

  function findMatchingMode(tagInfo, tagText) {
    for (var i = 0; i < tagInfo.length; i++) {
      var spec = tagInfo[i];
      if (!spec[0] || spec[1].test(getAttrValue(tagText, spec[0]))) return spec[2];
    }
  }

  CodeMirror.defineMode("htmlmixed", function (config, parserConfig) {
    var htmlMode = CodeMirror.getMode(config, {
      name: "xml",
      htmlMode: true,
      multilineTagIndentFactor: parserConfig.multilineTagIndentFactor,
      multilineTagIndentPastTag: parserConfig.multilineTagIndentPastTag
    });

    var tags = {};
    var configTags = parserConfig && parserConfig.tags, configScript = parserConfig && parserConfig.scriptTypes;
    addTags(defaultTags, tags);
    if (configTags) addTags(configTags, tags);
    if (configScript) for (var i = configScript.length - 1; i >= 0; i--)
      tags.script.unshift(["type", configScript[i].matches, configScript[i].mode])

    function html(stream, state) {
      var style = htmlMode.token(stream, state.htmlState), tag = /\btag\b/.test(style), tagName
      if (tag && !/[<>\s\/]/.test(stream.current()) &&
          (tagName = state.htmlState.tagName && state.htmlState.tagName.toLowerCase()) &&
          tags.hasOwnProperty(tagName)) {
        state.inTag = tagName + " "
      } else if (state.inTag && tag && />$/.test(stream.current())) {
        var inTag = /^([\S]+) (.*)/.exec(state.inTag)
        state.inTag = null
        var modeSpec = stream.current() == ">" && findMatchingMode(tags[inTag[1]], inTag[2])
        var mode = CodeMirror.getMode(config, modeSpec)
        var endTagA = getTagRegexp(inTag[1], true), endTag = getTagRegexp(inTag[1], false);
        state.token = function (stream, state) {
          if (stream.match(endTagA, false)) {
            state.token = html;
            state.localState = state.localMode = null;
            return null;
          }
          return maybeBackup(stream, endTag, state.localMode.token(stream, state.localState));
        };
        state.localMode = mode;
        state.localState = CodeMirror.startState(mode, htmlMode.indent(state.htmlState, "", ""));
      } else if (state.inTag) {
        state.inTag += stream.current()
        if (stream.eol()) state.inTag += " "
      }
      return style;
    };

    return {
      startState: function () {
        var state = CodeMirror.startState(htmlMode);
        return {token: html, inTag: null, localMode: null, localState: null, htmlState: state};
      },

      copyState: function (state) {
        var local;
        if (state.localState) {
          local = CodeMirror.copyState(state.localMode, state.localState);
        }
        return {token: state.token, inTag: state.inTag,
                localMode: state.localMode, localState: local,
                htmlState: CodeMirror.copyState(htmlMode, state.htmlState)};
      },

      token: function (stream, state) {
        return state.token(stream, state);
      },

      indent: function (state, textAfter, line) {
        if (!state.localMode || /^\s*<\//.test(textAfter))
          return htmlMode.indent(state.htmlState, textAfter, line);
        else if (state.localMode.indent)
          return state.localMode.indent(state.localState, textAfter, line);
        else
          return CodeMirror.Pass;
      },

      innerMode: function (state) {
        return {state: state.localState || state.htmlState, mode: state.localMode || htmlMode};
      }
    };
  }, "xml", "javascript", "css");

  CodeMirror.defineMIME("text/html", "htmlmixed");
});

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

var htmlConfig = {
  autoSelfClosers: {'area': true, 'base': true, 'br': true, 'col': true, 'command': true,
                    'embed': true, 'frame': true, 'hr': true, 'img': true, 'input': true,
                    'keygen': true, 'link': true, 'meta': true, 'param': true, 'source': true,
                    'track': true, 'wbr': true, 'menuitem': true},
  implicitlyClosed: {'dd': true, 'li': true, 'optgroup': true, 'option': true, 'p': true,
                     'rp': true, 'rt': true, 'tbody': true, 'td': true, 'tfoot': true,
                     'th': true, 'tr': true},
  contextGrabbers: {
    'dd': {'dd': true, 'dt': true},
    'dt': {'dd': true, 'dt': true},
    'li': {'li': true},
    'option': {'option': true, 'optgroup': true},
    'optgroup': {'optgroup': true},
    'p': {'address': true, 'article': true, 'aside': true, 'blockquote': true, 'dir': true,
          'div': true, 'dl': true, 'fieldset': true, 'footer': true, 'form': true,
          'h1': true, 'h2': true, 'h3': true, 'h4': true, 'h5': true, 'h6': true,
          'header': true, 'hgroup': true, 'hr': true, 'menu': true, 'nav': true, 'ol': true,
          'p': true, 'pre': true, 'section': true, 'table': true, 'ul': true},
    'rp': {'rp': true, 'rt': true},
    'rt': {'rp': true, 'rt': true},
    'tbody': {'tbody': true, 'tfoot': true},
    'td': {'td': true, 'th': true},
    'tfoot': {'tbody': true},
    'th': {'td': true, 'th': true},
    'thead': {'tbody': true, 'tfoot': true},
    'tr': {'tr': true}
  },
  doNotIndent: {"pre": true},
  allowUnquoted: true,
  allowMissing: true,
  caseFold: true
}

var xmlConfig = {
  autoSelfClosers: {},
  implicitlyClosed: {},
  contextGrabbers: {},
  doNotIndent: {},
  allowUnquoted: false,
  allowMissing: false,
  allowMissingTagName: false,
  caseFold: false
}

CodeMirror.defineMode("xml", function(editorConf, config_) {
  var indentUnit = editorConf.indentUnit
  var config = {}
  var defaults = config_.htmlMode ? htmlConfig : xmlConfig
  for (var prop in defaults) config[prop] = defaults[prop]
  for (var prop in config_) config[prop] = config_[prop]

  // Return variables for tokenizers
  var type, setStyle;

  function inText(stream, state) {
    function chain(parser) {
      state.tokenize = parser;
      return parser(stream, state);
    }

    var ch = stream.next();
    if (ch == "<") {
      if (stream.eat("!")) {
        if (stream.eat("[")) {
          if (stream.match("CDATA[")) return chain(inBlock("atom", "]]>"));
          else return null;
        } else if (stream.match("--")) {
          return chain(inBlock("comment", "-->"));
        } else if (stream.match("DOCTYPE", true, true)) {
          stream.eatWhile(/[\w\._\-]/);
          return chain(doctype(1));
        } else {
          return null;
        }
      } else if (stream.eat("?")) {
        stream.eatWhile(/[\w\._\-]/);
        state.tokenize = inBlock("meta", "?>");
        return "meta";
      } else {
        type = stream.eat("/") ? "closeTag" : "openTag";
        state.tokenize = inTag;
        return "tag bracket";
      }
    } else if (ch == "&") {
      var ok;
      if (stream.eat("#")) {
        if (stream.eat("x")) {
          ok = stream.eatWhile(/[a-fA-F\d]/) && stream.eat(";");
        } else {
          ok = stream.eatWhile(/[\d]/) && stream.eat(";");
        }
      } else {
        ok = stream.eatWhile(/[\w\.\-:]/) && stream.eat(";");
      }
      return ok ? "atom" : "error";
    } else {
      stream.eatWhile(/[^&<]/);
      return null;
    }
  }
  inText.isInText = true;

  function inTag(stream, state) {
    var ch = stream.next();
    if (ch == ">" || (ch == "/" && stream.eat(">"))) {
      state.tokenize = inText;
      type = ch == ">" ? "endTag" : "selfcloseTag";
      return "tag bracket";
    } else if (ch == "=") {
      type = "equals";
      return null;
    } else if (ch == "<") {
      state.tokenize = inText;
      state.state = baseState;
      state.tagName = state.tagStart = null;
      var next = state.tokenize(stream, state);
      return next ? next + " tag error" : "tag error";
    } else if (/[\'\"]/.test(ch)) {
      state.tokenize = inAttribute(ch);
      state.stringStartCol = stream.column();
      return state.tokenize(stream, state);
    } else {
      stream.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/);
      return "word";
    }
  }

  function inAttribute(quote) {
    var closure = function(stream, state) {
      while (!stream.eol()) {
        if (stream.next() == quote) {
          state.tokenize = inTag;
          break;
        }
      }
      return "string";
    };
    closure.isInAttribute = true;
    return closure;
  }

  function inBlock(style, terminator) {
    return function(stream, state) {
      while (!stream.eol()) {
        if (stream.match(terminator)) {
          state.tokenize = inText;
          break;
        }
        stream.next();
      }
      return style;
    }
  }

  function doctype(depth) {
    return function(stream, state) {
      var ch;
      while ((ch = stream.next()) != null) {
        if (ch == "<") {
          state.tokenize = doctype(depth + 1);
          return state.tokenize(stream, state);
        } else if (ch == ">") {
          if (depth == 1) {
            state.tokenize = inText;
            break;
          } else {
            state.tokenize = doctype(depth - 1);
            return state.tokenize(stream, state);
          }
        }
      }
      return "meta";
    };
  }

  function Context(state, tagName, startOfLine) {
    this.prev = state.context;
    this.tagName = tagName;
    this.indent = state.indented;
    this.startOfLine = startOfLine;
    if (config.doNotIndent.hasOwnProperty(tagName) || (state.context && state.context.noIndent))
      this.noIndent = true;
  }
  function popContext(state) {
    if (state.context) state.context = state.context.prev;
  }
  function maybePopContext(state, nextTagName) {
    var parentTagName;
    while (true) {
      if (!state.context) {
        return;
      }
      parentTagName = state.context.tagName;
      if (!config.contextGrabbers.hasOwnProperty(parentTagName) ||
          !config.contextGrabbers[parentTagName].hasOwnProperty(nextTagName)) {
        return;
      }
      popContext(state);
    }
  }

  function baseState(type, stream, state) {
    if (type == "openTag") {
      state.tagStart = stream.column();
      return tagNameState;
    } else if (type == "closeTag") {
      return closeTagNameState;
    } else {
      return baseState;
    }
  }
  function tagNameState(type, stream, state) {
    if (type == "word") {
      state.tagName = stream.current();
      setStyle = "tag";
      return attrState;
    } else if (config.allowMissingTagName && type == "endTag") {
      setStyle = "tag bracket";
      return attrState(type, stream, state);
    } else {
      setStyle = "error";
      return tagNameState;
    }
  }
  function closeTagNameState(type, stream, state) {
    if (type == "word") {
      var tagName = stream.current();
      if (state.context && state.context.tagName != tagName &&
          config.implicitlyClosed.hasOwnProperty(state.context.tagName))
        popContext(state);
      if ((state.context && state.context.tagName == tagName) || config.matchClosing === false) {
        setStyle = "tag";
        return closeState;
      } else {
        setStyle = "tag error";
        return closeStateErr;
      }
    } else if (config.allowMissingTagName && type == "endTag") {
      setStyle = "tag bracket";
      return closeState(type, stream, state);
    } else {
      setStyle = "error";
      return closeStateErr;
    }
  }

  function closeState(type, _stream, state) {
    if (type != "endTag") {
      setStyle = "error";
      return closeState;
    }
    popContext(state);
    return baseState;
  }
  function closeStateErr(type, stream, state) {
    setStyle = "error";
    return closeState(type, stream, state);
  }

  function attrState(type, _stream, state) {
    if (type == "word") {
      setStyle = "attribute";
      return attrEqState;
    } else if (type == "endTag" || type == "selfcloseTag") {
      var tagName = state.tagName, tagStart = state.tagStart;
      state.tagName = state.tagStart = null;
      if (type == "selfcloseTag" ||
          config.autoSelfClosers.hasOwnProperty(tagName)) {
        maybePopContext(state, tagName);
      } else {
        maybePopContext(state, tagName);
        state.context = new Context(state, tagName, tagStart == state.indented);
      }
      return baseState;
    }
    setStyle = "error";
    return attrState;
  }
  function attrEqState(type, stream, state) {
    if (type == "equals") return attrValueState;
    if (!config.allowMissing) setStyle = "error";
    return attrState(type, stream, state);
  }
  function attrValueState(type, stream, state) {
    if (type == "string") return attrContinuedState;
    if (type == "word" && config.allowUnquoted) {setStyle = "string"; return attrState;}
    setStyle = "error";
    return attrState(type, stream, state);
  }
  function attrContinuedState(type, stream, state) {
    if (type == "string") return attrContinuedState;
    return attrState(type, stream, state);
  }

  return {
    startState: function(baseIndent) {
      var state = {tokenize: inText,
                   state: baseState,
                   indented: baseIndent || 0,
                   tagName: null, tagStart: null,
                   context: null}
      if (baseIndent != null) state.baseIndent = baseIndent
      return state
    },

    token: function(stream, state) {
      if (!state.tagName && stream.sol())
        state.indented = stream.indentation();

      if (stream.eatSpace()) return null;
      type = null;
      var style = state.tokenize(stream, state);
      if ((style || type) && style != "comment") {
        setStyle = null;
        state.state = state.state(type || style, stream, state);
        if (setStyle)
          style = setStyle == "error" ? style + " error" : setStyle;
      }
      return style;
    },

    indent: function(state, textAfter, fullLine) {
      var context = state.context;
      // Indent multi-line strings (e.g. css).
      if (state.tokenize.isInAttribute) {
        if (state.tagStart == state.indented)
          return state.stringStartCol + 1;
        else
          return state.indented + indentUnit;
      }
      if (context && context.noIndent) return CodeMirror.Pass;
      if (state.tokenize != inTag && state.tokenize != inText)
        return fullLine ? fullLine.match(/^(\s*)/)[0].length : 0;
      // Indent the starts of attribute names.
      if (state.tagName) {
        if (config.multilineTagIndentPastTag !== false)
          return state.tagStart + state.tagName.length + 2;
        else
          return state.tagStart + indentUnit * (config.multilineTagIndentFactor || 1);
      }
      if (config.alignCDATA && /<!\[CDATA\[/.test(textAfter)) return 0;
      var tagAfter = textAfter && /^<(\/)?([\w_:\.-]*)/.exec(textAfter);
      if (tagAfter && tagAfter[1]) { // Closing tag spotted
        while (context) {
          if (context.tagName == tagAfter[2]) {
            context = context.prev;
            break;
          } else if (config.implicitlyClosed.hasOwnProperty(context.tagName)) {
            context = context.prev;
          } else {
            break;
          }
        }
      } else if (tagAfter) { // Opening tag spotted
        while (context) {
          var grabbers = config.contextGrabbers[context.tagName];
          if (grabbers && grabbers.hasOwnProperty(tagAfter[2]))
            context = context.prev;
          else
            break;
        }
      }
      while (context && context.prev && !context.startOfLine)
        context = context.prev;
      if (context) return context.indent + indentUnit;
      else return state.baseIndent || 0;
    },

    electricInput: /<\/[\s\w:]+>$/,
    blockCommentStart: "<!--",
    blockCommentEnd: "-->",

    configuration: config.htmlMode ? "html" : "xml",
    helperType: config.htmlMode ? "html" : "xml",

    skipAttribute: function(state) {
      if (state.state == attrValueState)
        state.state = attrState
    },

    xmlCurrentTag: function(state) {
      return state.tagName ? {name: state.tagName, close: state.type == "closeTag"} : null
    },

    xmlCurrentContext: function(state) {
      var context = []
      for (var cx = state.context; cx; cx = cx.prev)
        if (cx.tagName) context.push(cx.tagName)
      return context.reverse()
    }
  };
});

CodeMirror.defineMIME("text/xml", "xml");
CodeMirror.defineMIME("application/xml", "xml");
if (!CodeMirror.mimeModes.hasOwnProperty("text/html"))
  CodeMirror.defineMIME("text/html", {name: "xml", htmlMode: true});

});


// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("javascript", function(config, parserConfig) {
  var indentUnit = config.indentUnit;
  var statementIndent = parserConfig.statementIndent;
  var jsonldMode = parserConfig.jsonld;
  var jsonMode = parserConfig.json || jsonldMode;
  var isTS = parserConfig.typescript;
  var wordRE = parserConfig.wordCharacters || /[\w$\xa1-\uffff]/;

  // Tokenizer

  var keywords = function(){
    function kw(type) {return {type: type, style: "keyword"};}
    var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c"), D = kw("keyword d");
    var operator = kw("operator"), atom = {type: "atom", style: "atom"};

    return {
      "if": kw("if"), "while": A, "with": A, "else": B, "do": B, "try": B, "finally": B,
      "return": D, "break": D, "continue": D, "new": kw("new"), "delete": C, "void": C, "throw": C,
      "debugger": kw("debugger"), "var": kw("var"), "const": kw("var"), "let": kw("var"),
      "function": kw("function"), "catch": kw("catch"),
      "for": kw("for"), "switch": kw("switch"), "case": kw("case"), "default": kw("default"),
      "in": operator, "typeof": operator, "instanceof": operator,
      "true": atom, "false": atom, "null": atom, "undefined": atom, "NaN": atom, "Infinity": atom,
      "this": kw("this"), "class": kw("class"), "super": kw("atom"),
      "yield": C, "export": kw("export"), "import": kw("import"), "extends": C,
      "await": C
    };
  }();

  var isOperatorChar = /[+\-*&%=<>!?|~^@]/;
  var isJsonldKeyword = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;

  function readRegexp(stream) {
    var escaped = false, next, inSet = false;
    while ((next = stream.next()) != null) {
      if (!escaped) {
        if (next == "/" && !inSet) return;
        if (next == "[") inSet = true;
        else if (inSet && next == "]") inSet = false;
      }
      escaped = !escaped && next == "\\";
    }
  }

  // Used as scratch variables to communicate multiple values without
  // consing up tons of objects.
  var type, content;
  function ret(tp, style, cont) {
    type = tp; content = cont;
    return style;
  }
  function tokenBase(stream, state) {
    var ch = stream.next();
    if (ch == '"' || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    } else if (ch == "." && stream.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) {
      return ret("number", "number");
    } else if (ch == "." && stream.match("..")) {
      return ret("spread", "meta");
    } else if (/[\[\]{}\(\),;\:\.]/.test(ch)) {
      return ret(ch);
    } else if (ch == "=" && stream.eat(">")) {
      return ret("=>", "operator");
    } else if (ch == "0" && stream.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) {
      return ret("number", "number");
    } else if (/\d/.test(ch)) {
      stream.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/);
      return ret("number", "number");
    } else if (ch == "/") {
      if (stream.eat("*")) {
        state.tokenize = tokenComment;
        return tokenComment(stream, state);
      } else if (stream.eat("/")) {
        stream.skipToEnd();
        return ret("comment", "comment");
      } else if (expressionAllowed(stream, state, 1)) {
        readRegexp(stream);
        stream.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/);
        return ret("regexp", "string-2");
      } else {
        stream.eat("=");
        return ret("operator", "operator", stream.current());
      }
    } else if (ch == "`") {
      state.tokenize = tokenQuasi;
      return tokenQuasi(stream, state);
    } else if (ch == "#") {
      stream.skipToEnd();
      return ret("error", "error");
    } else if (ch == "<" && stream.match("!--") || ch == "-" && stream.match("->")) {
      stream.skipToEnd()
      return ret("comment", "comment")
    } else if (isOperatorChar.test(ch)) {
      if (ch != ">" || !state.lexical || state.lexical.type != ">") {
        if (stream.eat("=")) {
          if (ch == "!" || ch == "=") stream.eat("=")
        } else if (/[<>*+\-]/.test(ch)) {
          stream.eat(ch)
          if (ch == ">") stream.eat(ch)
        }
      }
      return ret("operator", "operator", stream.current());
    } else if (wordRE.test(ch)) {
      stream.eatWhile(wordRE);
      var word = stream.current()
      if (state.lastType != ".") {
        if (keywords.propertyIsEnumerable(word)) {
          var kw = keywords[word]
          return ret(kw.type, kw.style, word)
        }
        if (word == "async" && stream.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/, false))
          return ret("async", "keyword", word)
      }
      return ret("variable", "variable", word)
    }
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, next;
      if (jsonldMode && stream.peek() == "@" && stream.match(isJsonldKeyword)){
        state.tokenize = tokenBase;
        return ret("jsonld-keyword", "meta");
      }
      while ((next = stream.next()) != null) {
        if (next == quote && !escaped) break;
        escaped = !escaped && next == "\\";
      }
      if (!escaped) state.tokenize = tokenBase;
      return ret("string", "string");
    };
  }

  function tokenComment(stream, state) {
    var maybeEnd = false, ch;
    while (ch = stream.next()) {
      if (ch == "/" && maybeEnd) {
        state.tokenize = tokenBase;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ret("comment", "comment");
  }

  function tokenQuasi(stream, state) {
    var escaped = false, next;
    while ((next = stream.next()) != null) {
      if (!escaped && (next == "`" || next == "$" && stream.eat("{"))) {
        state.tokenize = tokenBase;
        break;
      }
      escaped = !escaped && next == "\\";
    }
    return ret("quasi", "string-2", stream.current());
  }

  var brackets = "([{}])";
  // This is a crude lookahead trick to try and notice that we're
  // parsing the argument patterns for a fat-arrow function before we
  // actually hit the arrow token. It only works if the arrow is on
  // the same line as the arguments and there's no strange noise
  // (comments) in between. Fallback is to only notice when we hit the
  // arrow, and not declare the arguments as locals for the arrow
  // body.
  function findFatArrow(stream, state) {
    if (state.fatArrowAt) state.fatArrowAt = null;
    var arrow = stream.string.indexOf("=>", stream.start);
    if (arrow < 0) return;

    if (isTS) { // Try to skip TypeScript return type declarations after the arguments
      var m = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(stream.string.slice(stream.start, arrow))
      if (m) arrow = m.index
    }

    var depth = 0, sawSomething = false;
    for (var pos = arrow - 1; pos >= 0; --pos) {
      var ch = stream.string.charAt(pos);
      var bracket = brackets.indexOf(ch);
      if (bracket >= 0 && bracket < 3) {
        if (!depth) { ++pos; break; }
        if (--depth == 0) { if (ch == "(") sawSomething = true; break; }
      } else if (bracket >= 3 && bracket < 6) {
        ++depth;
      } else if (wordRE.test(ch)) {
        sawSomething = true;
      } else if (/["'\/`]/.test(ch)) {
        for (;; --pos) {
          if (pos == 0) return
          var next = stream.string.charAt(pos - 1)
          if (next == ch && stream.string.charAt(pos - 2) != "\\") { pos--; break }
        }
      } else if (sawSomething && !depth) {
        ++pos;
        break;
      }
    }
    if (sawSomething && !depth) state.fatArrowAt = pos;
  }

  // Parser

  var atomicTypes = {"atom": true, "number": true, "variable": true, "string": true, "regexp": true, "this": true, "jsonld-keyword": true};

  function JSLexical(indented, column, type, align, prev, info) {
    this.indented = indented;
    this.column = column;
    this.type = type;
    this.prev = prev;
    this.info = info;
    if (align != null) this.align = align;
  }

  function inScope(state, varname) {
    for (var v = state.localVars; v; v = v.next)
      if (v.name == varname) return true;
    for (var cx = state.context; cx; cx = cx.prev) {
      for (var v = cx.vars; v; v = v.next)
        if (v.name == varname) return true;
    }
  }

  function parseJS(state, style, type, content, stream) {
    var cc = state.cc;
    // Communicate our context to the combinators.
    // (Less wasteful than consing up a hundred closures on every call.)
    cx.state = state; cx.stream = stream; cx.marked = null, cx.cc = cc; cx.style = style;

    if (!state.lexical.hasOwnProperty("align"))
      state.lexical.align = true;

    while(true) {
      var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
      if (combinator(type, content)) {
        while(cc.length && cc[cc.length - 1].lex)
          cc.pop()();
        if (cx.marked) return cx.marked;
        if (type == "variable" && inScope(state, content)) return "variable-2";
        return style;
      }
    }
  }

  // Combinator utils

  var cx = {state: null, column: null, marked: null, cc: null};
  function pass() {
    for (var i = arguments.length - 1; i >= 0; i--) cx.cc.push(arguments[i]);
  }
  function cont() {
    pass.apply(null, arguments);
    return true;
  }
  function inList(name, list) {
    for (var v = list; v; v = v.next) if (v.name == name) return true
    return false;
  }
  function register(varname) {
    var state = cx.state;
    cx.marked = "def";
    if (state.context) {
      if (state.lexical.info == "var" && state.context && state.context.block) {
        // FIXME function decls are also not block scoped
        var newContext = registerVarScoped(varname, state.context)
        if (newContext != null) {
          state.context = newContext
          return
        }
      } else if (!inList(varname, state.localVars)) {
        state.localVars = new Var(varname, state.localVars)
        return
      }
    }
    // Fall through means this is global
    if (parserConfig.globalVars && !inList(varname, state.globalVars))
      state.globalVars = new Var(varname, state.globalVars)
  }
  function registerVarScoped(varname, context) {
    if (!context) {
      return null
    } else if (context.block) {
      var inner = registerVarScoped(varname, context.prev)
      if (!inner) return null
      if (inner == context.prev) return context
      return new Context(inner, context.vars, true)
    } else if (inList(varname, context.vars)) {
      return context
    } else {
      return new Context(context.prev, new Var(varname, context.vars), false)
    }
  }

  function isModifier(name) {
    return name == "public" || name == "private" || name == "protected" || name == "abstract" || name == "readonly"
  }

  // Combinators

  function Context(prev, vars, block) { this.prev = prev; this.vars = vars; this.block = block }
  function Var(name, next) { this.name = name; this.next = next }

  var defaultVars = new Var("this", new Var("arguments", null))
  function pushcontext() {
    cx.state.context = new Context(cx.state.context, cx.state.localVars, false)
    cx.state.localVars = defaultVars
  }
  function pushblockcontext() {
    cx.state.context = new Context(cx.state.context, cx.state.localVars, true)
    cx.state.localVars = null
  }
  function popcontext() {
    cx.state.localVars = cx.state.context.vars
    cx.state.context = cx.state.context.prev
  }
  popcontext.lex = true
  function pushlex(type, info) {
    var result = function() {
      var state = cx.state, indent = state.indented;
      if (state.lexical.type == "stat") indent = state.lexical.indented;
      else for (var outer = state.lexical; outer && outer.type == ")" && outer.align; outer = outer.prev)
        indent = outer.indented;
      state.lexical = new JSLexical(indent, cx.stream.column(), type, null, state.lexical, info);
    };
    result.lex = true;
    return result;
  }
  function poplex() {
    var state = cx.state;
    if (state.lexical.prev) {
      if (state.lexical.type == ")")
        state.indented = state.lexical.indented;
      state.lexical = state.lexical.prev;
    }
  }
  poplex.lex = true;

  function expect(wanted) {
    function exp(type) {
      if (type == wanted) return cont();
      else if (wanted == ";" || type == "}" || type == ")" || type == "]") return pass();
      else return cont(exp);
    };
    return exp;
  }

  function statement(type, value) {
    if (type == "var") return cont(pushlex("vardef", value), vardef, expect(";"), poplex);
    if (type == "keyword a") return cont(pushlex("form"), parenExpr, statement, poplex);
    if (type == "keyword b") return cont(pushlex("form"), statement, poplex);
    if (type == "keyword d") return cx.stream.match(/^\s*$/, false) ? cont() : cont(pushlex("stat"), maybeexpression, expect(";"), poplex);
    if (type == "debugger") return cont(expect(";"));
    if (type == "{") return cont(pushlex("}"), pushblockcontext, block, poplex, popcontext);
    if (type == ";") return cont();
    if (type == "if") {
      if (cx.state.lexical.info == "else" && cx.state.cc[cx.state.cc.length - 1] == poplex)
        cx.state.cc.pop()();
      return cont(pushlex("form"), parenExpr, statement, poplex, maybeelse);
    }
    if (type == "function") return cont(functiondef);
    if (type == "for") return cont(pushlex("form"), forspec, statement, poplex);
    if (type == "class" || (isTS && value == "interface")) {
      cx.marked = "keyword"
      return cont(pushlex("form", type == "class" ? type : value), className, poplex)
    }
    if (type == "variable") {
      if (isTS && value == "declare") {
        cx.marked = "keyword"
        return cont(statement)
      } else if (isTS && (value == "module" || value == "enum" || value == "type") && cx.stream.match(/^\s*\w/, false)) {
        cx.marked = "keyword"
        if (value == "enum") return cont(enumdef);
        else if (value == "type") return cont(typename, expect("operator"), typeexpr, expect(";"));
        else return cont(pushlex("form"), pattern, expect("{"), pushlex("}"), block, poplex, poplex)
      } else if (isTS && value == "namespace") {
        cx.marked = "keyword"
        return cont(pushlex("form"), expression, statement, poplex)
      } else if (isTS && value == "abstract") {
        cx.marked = "keyword"
        return cont(statement)
      } else {
        return cont(pushlex("stat"), maybelabel);
      }
    }
    if (type == "switch") return cont(pushlex("form"), parenExpr, expect("{"), pushlex("}", "switch"), pushblockcontext,
                                      block, poplex, poplex, popcontext);
    if (type == "case") return cont(expression, expect(":"));
    if (type == "default") return cont(expect(":"));
    if (type == "catch") return cont(pushlex("form"), pushcontext, maybeCatchBinding, statement, poplex, popcontext);
    if (type == "export") return cont(pushlex("stat"), afterExport, poplex);
    if (type == "import") return cont(pushlex("stat"), afterImport, poplex);
    if (type == "async") return cont(statement)
    if (value == "@") return cont(expression, statement)
    return pass(pushlex("stat"), expression, expect(";"), poplex);
  }
  function maybeCatchBinding(type) {
    if (type == "(") return cont(funarg, expect(")"))
  }
  function expression(type, value) {
    return expressionInner(type, value, false);
  }
  function expressionNoComma(type, value) {
    return expressionInner(type, value, true);
  }
  function parenExpr(type) {
    if (type != "(") return pass()
    return cont(pushlex(")"), expression, expect(")"), poplex)
  }
  function expressionInner(type, value, noComma) {
    if (cx.state.fatArrowAt == cx.stream.start) {
      var body = noComma ? arrowBodyNoComma : arrowBody;
      if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, expect("=>"), body, popcontext);
      else if (type == "variable") return pass(pushcontext, pattern, expect("=>"), body, popcontext);
    }

    var maybeop = noComma ? maybeoperatorNoComma : maybeoperatorComma;
    if (atomicTypes.hasOwnProperty(type)) return cont(maybeop);
    if (type == "function") return cont(functiondef, maybeop);
    if (type == "class" || (isTS && value == "interface")) { cx.marked = "keyword"; return cont(pushlex("form"), classExpression, poplex); }
    if (type == "keyword c" || type == "async") return cont(noComma ? expressionNoComma : expression);
    if (type == "(") return cont(pushlex(")"), maybeexpression, expect(")"), poplex, maybeop);
    if (type == "operator" || type == "spread") return cont(noComma ? expressionNoComma : expression);
    if (type == "[") return cont(pushlex("]"), arrayLiteral, poplex, maybeop);
    if (type == "{") return contCommasep(objprop, "}", null, maybeop);
    if (type == "quasi") return pass(quasi, maybeop);
    if (type == "new") return cont(maybeTarget(noComma));
    if (type == "import") return cont(expression);
    return cont();
  }
  function maybeexpression(type) {
    if (type.match(/[;\}\)\],]/)) return pass();
    return pass(expression);
  }

  function maybeoperatorComma(type, value) {
    if (type == ",") return cont(expression);
    return maybeoperatorNoComma(type, value, false);
  }
  function maybeoperatorNoComma(type, value, noComma) {
    var me = noComma == false ? maybeoperatorComma : maybeoperatorNoComma;
    var expr = noComma == false ? expression : expressionNoComma;
    if (type == "=>") return cont(pushcontext, noComma ? arrowBodyNoComma : arrowBody, popcontext);
    if (type == "operator") {
      if (/\+\+|--/.test(value) || isTS && value == "!") return cont(me);
      if (isTS && value == "<" && cx.stream.match(/^([^>]|<.*?>)*>\s*\(/, false))
        return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, me);
      if (value == "?") return cont(expression, expect(":"), expr);
      return cont(expr);
    }
    if (type == "quasi") { return pass(quasi, me); }
    if (type == ";") return;
    if (type == "(") return contCommasep(expressionNoComma, ")", "call", me);
    if (type == ".") return cont(property, me);
    if (type == "[") return cont(pushlex("]"), maybeexpression, expect("]"), poplex, me);
    if (isTS && value == "as") { cx.marked = "keyword"; return cont(typeexpr, me) }
    if (type == "regexp") {
      cx.state.lastType = cx.marked = "operator"
      cx.stream.backUp(cx.stream.pos - cx.stream.start - 1)
      return cont(expr)
    }
  }
  function quasi(type, value) {
    if (type != "quasi") return pass();
    if (value.slice(value.length - 2) != "${") return cont(quasi);
    return cont(expression, continueQuasi);
  }
  function continueQuasi(type) {
    if (type == "}") {
      cx.marked = "string-2";
      cx.state.tokenize = tokenQuasi;
      return cont(quasi);
    }
  }
  function arrowBody(type) {
    findFatArrow(cx.stream, cx.state);
    return pass(type == "{" ? statement : expression);
  }
  function arrowBodyNoComma(type) {
    findFatArrow(cx.stream, cx.state);
    return pass(type == "{" ? statement : expressionNoComma);
  }
  function maybeTarget(noComma) {
    return function(type) {
      if (type == ".") return cont(noComma ? targetNoComma : target);
      else if (type == "variable" && isTS) return cont(maybeTypeArgs, noComma ? maybeoperatorNoComma : maybeoperatorComma)
      else return pass(noComma ? expressionNoComma : expression);
    };
  }
  function target(_, value) {
    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorComma); }
  }
  function targetNoComma(_, value) {
    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorNoComma); }
  }
  function maybelabel(type) {
    if (type == ":") return cont(poplex, statement);
    return pass(maybeoperatorComma, expect(";"), poplex);
  }
  function property(type) {
    if (type == "variable") {cx.marked = "property"; return cont();}
  }
  function objprop(type, value) {
    if (type == "async") {
      cx.marked = "property";
      return cont(objprop);
    } else if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property";
      if (value == "get" || value == "set") return cont(getterSetter);
      var m // Work around fat-arrow-detection complication for detecting typescript typed arrow params
      if (isTS && cx.state.fatArrowAt == cx.stream.start && (m = cx.stream.match(/^\s*:\s*/, false)))
        cx.state.fatArrowAt = cx.stream.pos + m[0].length
      return cont(afterprop);
    } else if (type == "number" || type == "string") {
      cx.marked = jsonldMode ? "property" : (cx.style + " property");
      return cont(afterprop);
    } else if (type == "jsonld-keyword") {
      return cont(afterprop);
    } else if (isTS && isModifier(value)) {
      cx.marked = "keyword"
      return cont(objprop)
    } else if (type == "[") {
      return cont(expression, maybetype, expect("]"), afterprop);
    } else if (type == "spread") {
      return cont(expressionNoComma, afterprop);
    } else if (value == "*") {
      cx.marked = "keyword";
      return cont(objprop);
    } else if (type == ":") {
      return pass(afterprop)
    }
  }
  function getterSetter(type) {
    if (type != "variable") return pass(afterprop);
    cx.marked = "property";
    return cont(functiondef);
  }
  function afterprop(type) {
    if (type == ":") return cont(expressionNoComma);
    if (type == "(") return pass(functiondef);
  }
  function commasep(what, end, sep) {
    function proceed(type, value) {
      if (sep ? sep.indexOf(type) > -1 : type == ",") {
        var lex = cx.state.lexical;
        if (lex.info == "call") lex.pos = (lex.pos || 0) + 1;
        return cont(function(type, value) {
          if (type == end || value == end) return pass()
          return pass(what)
        }, proceed);
      }
      if (type == end || value == end) return cont();
      if (sep && sep.indexOf(";") > -1) return pass(what)
      return cont(expect(end));
    }
    return function(type, value) {
      if (type == end || value == end) return cont();
      return pass(what, proceed);
    };
  }
  function contCommasep(what, end, info) {
    for (var i = 3; i < arguments.length; i++)
      cx.cc.push(arguments[i]);
    return cont(pushlex(end, info), commasep(what, end), poplex);
  }
  function block(type) {
    if (type == "}") return cont();
    return pass(statement, block);
  }
  function maybetype(type, value) {
    if (isTS) {
      if (type == ":") return cont(typeexpr);
      if (value == "?") return cont(maybetype);
    }
  }
  function maybetypeOrIn(type, value) {
    if (isTS && (type == ":" || value == "in")) return cont(typeexpr)
  }
  function mayberettype(type) {
    if (isTS && type == ":") {
      if (cx.stream.match(/^\s*\w+\s+is\b/, false)) return cont(expression, isKW, typeexpr)
      else return cont(typeexpr)
    }
  }
  function isKW(_, value) {
    if (value == "is") {
      cx.marked = "keyword"
      return cont()
    }
  }
  function typeexpr(type, value) {
    if (value == "keyof" || value == "typeof" || value == "infer") {
      cx.marked = "keyword"
      return cont(value == "typeof" ? expressionNoComma : typeexpr)
    }
    if (type == "variable" || value == "void") {
      cx.marked = "type"
      return cont(afterType)
    }
    if (value == "|" || value == "&") return cont(typeexpr)
    if (type == "string" || type == "number" || type == "atom") return cont(afterType);
    if (type == "[") return cont(pushlex("]"), commasep(typeexpr, "]", ","), poplex, afterType)
    if (type == "{") return cont(pushlex("}"), commasep(typeprop, "}", ",;"), poplex, afterType)
    if (type == "(") return cont(commasep(typearg, ")"), maybeReturnType, afterType)
    if (type == "<") return cont(commasep(typeexpr, ">"), typeexpr)
  }
  function maybeReturnType(type) {
    if (type == "=>") return cont(typeexpr)
  }
  function typeprop(type, value) {
    if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property"
      return cont(typeprop)
    } else if (value == "?" || type == "number" || type == "string") {
      return cont(typeprop)
    } else if (type == ":") {
      return cont(typeexpr)
    } else if (type == "[") {
      return cont(expect("variable"), maybetypeOrIn, expect("]"), typeprop)
    } else if (type == "(") {
      return pass(functiondecl, typeprop)
    }
  }
  function typearg(type, value) {
    if (type == "variable" && cx.stream.match(/^\s*[?:]/, false) || value == "?") return cont(typearg)
    if (type == ":") return cont(typeexpr)
    if (type == "spread") return cont(typearg)
    return pass(typeexpr)
  }
  function afterType(type, value) {
    if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType)
    if (value == "|" || type == "." || value == "&") return cont(typeexpr)
    if (type == "[") return cont(typeexpr, expect("]"), afterType)
    if (value == "extends" || value == "implements") { cx.marked = "keyword"; return cont(typeexpr) }
    if (value == "?") return cont(typeexpr, expect(":"), typeexpr)
  }
  function maybeTypeArgs(_, value) {
    if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType)
  }
  function typeparam() {
    return pass(typeexpr, maybeTypeDefault)
  }
  function maybeTypeDefault(_, value) {
    if (value == "=") return cont(typeexpr)
  }
  function vardef(_, value) {
    if (value == "enum") {cx.marked = "keyword"; return cont(enumdef)}
    return pass(pattern, maybetype, maybeAssign, vardefCont);
  }
  function pattern(type, value) {
    if (isTS && isModifier(value)) { cx.marked = "keyword"; return cont(pattern) }
    if (type == "variable") { register(value); return cont(); }
    if (type == "spread") return cont(pattern);
    if (type == "[") return contCommasep(eltpattern, "]");
    if (type == "{") return contCommasep(proppattern, "}");
  }
  function proppattern(type, value) {
    if (type == "variable" && !cx.stream.match(/^\s*:/, false)) {
      register(value);
      return cont(maybeAssign);
    }
    if (type == "variable") cx.marked = "property";
    if (type == "spread") return cont(pattern);
    if (type == "}") return pass();
    if (type == "[") return cont(expression, expect(']'), expect(':'), proppattern);
    return cont(expect(":"), pattern, maybeAssign);
  }
  function eltpattern() {
    return pass(pattern, maybeAssign)
  }
  function maybeAssign(_type, value) {
    if (value == "=") return cont(expressionNoComma);
  }
  function vardefCont(type) {
    if (type == ",") return cont(vardef);
  }
  function maybeelse(type, value) {
    if (type == "keyword b" && value == "else") return cont(pushlex("form", "else"), statement, poplex);
  }
  function forspec(type, value) {
    if (value == "await") return cont(forspec);
    if (type == "(") return cont(pushlex(")"), forspec1, poplex);
  }
  function forspec1(type) {
    if (type == "var") return cont(vardef, forspec2);
    if (type == "variable") return cont(forspec2);
    return pass(forspec2)
  }
  function forspec2(type, value) {
    if (type == ")") return cont()
    if (type == ";") return cont(forspec2)
    if (value == "in" || value == "of") { cx.marked = "keyword"; return cont(expression, forspec2) }
    return pass(expression, forspec2)
  }
  function functiondef(type, value) {
    if (value == "*") {cx.marked = "keyword"; return cont(functiondef);}
    if (type == "variable") {register(value); return cont(functiondef);}
    if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, mayberettype, statement, popcontext);
    if (isTS && value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, functiondef)
  }
  function functiondecl(type, value) {
    if (value == "*") {cx.marked = "keyword"; return cont(functiondecl);}
    if (type == "variable") {register(value); return cont(functiondecl);}
    if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, mayberettype, popcontext);
    if (isTS && value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, functiondecl)
  }
  function typename(type, value) {
    if (type == "keyword" || type == "variable") {
      cx.marked = "type"
      return cont(typename)
    } else if (value == "<") {
      return cont(pushlex(">"), commasep(typeparam, ">"), poplex)
    }
  }
  function funarg(type, value) {
    if (value == "@") cont(expression, funarg)
    if (type == "spread") return cont(funarg);
    if (isTS && isModifier(value)) { cx.marked = "keyword"; return cont(funarg); }
    if (isTS && type == "this") return cont(maybetype, maybeAssign)
    return pass(pattern, maybetype, maybeAssign);
  }
  function classExpression(type, value) {
    // Class expressions may have an optional name.
    if (type == "variable") return className(type, value);
    return classNameAfter(type, value);
  }
  function className(type, value) {
    if (type == "variable") {register(value); return cont(classNameAfter);}
  }
  function classNameAfter(type, value) {
    if (value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, classNameAfter)
    if (value == "extends" || value == "implements" || (isTS && type == ",")) {
      if (value == "implements") cx.marked = "keyword";
      return cont(isTS ? typeexpr : expression, classNameAfter);
    }
    if (type == "{") return cont(pushlex("}"), classBody, poplex);
  }
  function classBody(type, value) {
    if (type == "async" ||
        (type == "variable" &&
         (value == "static" || value == "get" || value == "set" || (isTS && isModifier(value))) &&
         cx.stream.match(/^\s+[\w$\xa1-\uffff]/, false))) {
      cx.marked = "keyword";
      return cont(classBody);
    }
    if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property";
      return cont(isTS ? classfield : functiondef, classBody);
    }
    if (type == "number" || type == "string") return cont(isTS ? classfield : functiondef, classBody);
    if (type == "[")
      return cont(expression, maybetype, expect("]"), isTS ? classfield : functiondef, classBody)
    if (value == "*") {
      cx.marked = "keyword";
      return cont(classBody);
    }
    if (isTS && type == "(") return pass(functiondecl, classBody)
    if (type == ";" || type == ",") return cont(classBody);
    if (type == "}") return cont();
    if (value == "@") return cont(expression, classBody)
  }
  function classfield(type, value) {
    if (value == "?") return cont(classfield)
    if (type == ":") return cont(typeexpr, maybeAssign)
    if (value == "=") return cont(expressionNoComma)
    var context = cx.state.lexical.prev, isInterface = context && context.info == "interface"
    return pass(isInterface ? functiondecl : functiondef)
  }
  function afterExport(type, value) {
    if (value == "*") { cx.marked = "keyword"; return cont(maybeFrom, expect(";")); }
    if (value == "default") { cx.marked = "keyword"; return cont(expression, expect(";")); }
    if (type == "{") return cont(commasep(exportField, "}"), maybeFrom, expect(";"));
    return pass(statement);
  }
  function exportField(type, value) {
    if (value == "as") { cx.marked = "keyword"; return cont(expect("variable")); }
    if (type == "variable") return pass(expressionNoComma, exportField);
  }
  function afterImport(type) {
    if (type == "string") return cont();
    if (type == "(") return pass(expression);
    return pass(importSpec, maybeMoreImports, maybeFrom);
  }
  function importSpec(type, value) {
    if (type == "{") return contCommasep(importSpec, "}");
    if (type == "variable") register(value);
    if (value == "*") cx.marked = "keyword";
    return cont(maybeAs);
  }
  function maybeMoreImports(type) {
    if (type == ",") return cont(importSpec, maybeMoreImports)
  }
  function maybeAs(_type, value) {
    if (value == "as") { cx.marked = "keyword"; return cont(importSpec); }
  }
  function maybeFrom(_type, value) {
    if (value == "from") { cx.marked = "keyword"; return cont(expression); }
  }
  function arrayLiteral(type) {
    if (type == "]") return cont();
    return pass(commasep(expressionNoComma, "]"));
  }
  function enumdef() {
    return pass(pushlex("form"), pattern, expect("{"), pushlex("}"), commasep(enummember, "}"), poplex, poplex)
  }
  function enummember() {
    return pass(pattern, maybeAssign);
  }

  function isContinuedStatement(state, textAfter) {
    return state.lastType == "operator" || state.lastType == "," ||
      isOperatorChar.test(textAfter.charAt(0)) ||
      /[,.]/.test(textAfter.charAt(0));
  }

  function expressionAllowed(stream, state, backUp) {
    return state.tokenize == tokenBase &&
      /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(state.lastType) ||
      (state.lastType == "quasi" && /\{\s*$/.test(stream.string.slice(0, stream.pos - (backUp || 0))))
  }

  // Interface

  return {
    startState: function(basecolumn) {
      var state = {
        tokenize: tokenBase,
        lastType: "sof",
        cc: [],
        lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", false),
        localVars: parserConfig.localVars,
        context: parserConfig.localVars && new Context(null, null, false),
        indented: basecolumn || 0
      };
      if (parserConfig.globalVars && typeof parserConfig.globalVars == "object")
        state.globalVars = parserConfig.globalVars;
      return state;
    },

    token: function(stream, state) {
      if (stream.sol()) {
        if (!state.lexical.hasOwnProperty("align"))
          state.lexical.align = false;
        state.indented = stream.indentation();
        findFatArrow(stream, state);
      }
      if (state.tokenize != tokenComment && stream.eatSpace()) return null;
      var style = state.tokenize(stream, state);
      if (type == "comment") return style;
      state.lastType = type == "operator" && (content == "++" || content == "--") ? "incdec" : type;
      return parseJS(state, style, type, content, stream);
    },

    indent: function(state, textAfter) {
      if (state.tokenize == tokenComment) return CodeMirror.Pass;
      if (state.tokenize != tokenBase) return 0;
      var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical, top
      // Kludge to prevent 'maybelse' from blocking lexical scope pops
      if (!/^\s*else\b/.test(textAfter)) for (var i = state.cc.length - 1; i >= 0; --i) {
        var c = state.cc[i];
        if (c == poplex) lexical = lexical.prev;
        else if (c != maybeelse) break;
      }
      while ((lexical.type == "stat" || lexical.type == "form") &&
             (firstChar == "}" || ((top = state.cc[state.cc.length - 1]) &&
                                   (top == maybeoperatorComma || top == maybeoperatorNoComma) &&
                                   !/^[,\.=+\-*:?[\(]/.test(textAfter))))
        lexical = lexical.prev;
      if (statementIndent && lexical.type == ")" && lexical.prev.type == "stat")
        lexical = lexical.prev;
      var type = lexical.type, closing = firstChar == type;

      if (type == "vardef") return lexical.indented + (state.lastType == "operator" || state.lastType == "," ? lexical.info.length + 1 : 0);
      else if (type == "form" && firstChar == "{") return lexical.indented;
      else if (type == "form") return lexical.indented + indentUnit;
      else if (type == "stat")
        return lexical.indented + (isContinuedStatement(state, textAfter) ? statementIndent || indentUnit : 0);
      else if (lexical.info == "switch" && !closing && parserConfig.doubleIndentSwitch != false)
        return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit);
      else if (lexical.align) return lexical.column + (closing ? 0 : 1);
      else return lexical.indented + (closing ? 0 : indentUnit);
    },

    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
    blockCommentStart: jsonMode ? null : "/*",
    blockCommentEnd: jsonMode ? null : "*/",
    blockCommentContinue: jsonMode ? null : " * ",
    lineComment: jsonMode ? null : "//",
    fold: "brace",
    closeBrackets: "()[]{}''\"\"``",

    helperType: jsonMode ? "json" : "javascript",
    jsonldMode: jsonldMode,
    jsonMode: jsonMode,

    expressionAllowed: expressionAllowed,

    skipExpression: function(state) {
      var top = state.cc[state.cc.length - 1]
      if (top == expression || top == expressionNoComma) state.cc.pop()
    }
  };
});

CodeMirror.registerHelper("wordChars", "javascript", /[\w$]/);

CodeMirror.defineMIME("text/javascript", "javascript");
CodeMirror.defineMIME("text/ecmascript", "javascript");
CodeMirror.defineMIME("application/javascript", "javascript");
CodeMirror.defineMIME("application/x-javascript", "javascript");
CodeMirror.defineMIME("application/ecmascript", "javascript");
CodeMirror.defineMIME("application/json", {name: "javascript", json: true});
CodeMirror.defineMIME("application/x-json", {name: "javascript", json: true});
CodeMirror.defineMIME("application/ld+json", {name: "javascript", jsonld: true});
CodeMirror.defineMIME("text/typescript", { name: "javascript", typescript: true });
CodeMirror.defineMIME("application/typescript", { name: "javascript", typescript: true });

});
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("css", function(config, parserConfig) {
  var inline = parserConfig.inline
  if (!parserConfig.propertyKeywords) parserConfig = CodeMirror.resolveMode("text/css");

  var indentUnit = config.indentUnit,
      tokenHooks = parserConfig.tokenHooks,
      documentTypes = parserConfig.documentTypes || {},
      mediaTypes = parserConfig.mediaTypes || {},
      mediaFeatures = parserConfig.mediaFeatures || {},
      mediaValueKeywords = parserConfig.mediaValueKeywords || {},
      propertyKeywords = parserConfig.propertyKeywords || {},
      nonStandardPropertyKeywords = parserConfig.nonStandardPropertyKeywords || {},
      fontProperties = parserConfig.fontProperties || {},
      counterDescriptors = parserConfig.counterDescriptors || {},
      colorKeywords = parserConfig.colorKeywords || {},
      valueKeywords = parserConfig.valueKeywords || {},
      allowNested = parserConfig.allowNested,
      lineComment = parserConfig.lineComment,
      supportsAtComponent = parserConfig.supportsAtComponent === true;

  var type, override;
  function ret(style, tp) { type = tp; return style; }

  // Tokenizers

  function tokenBase(stream, state) {
    var ch = stream.next();
    if (tokenHooks[ch]) {
      var result = tokenHooks[ch](stream, state);
      if (result !== false) return result;
    }
    if (ch == "@") {
      stream.eatWhile(/[\w\\\-]/);
      return ret("def", stream.current());
    } else if (ch == "=" || (ch == "~" || ch == "|") && stream.eat("=")) {
      return ret(null, "compare");
    } else if (ch == "\"" || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    } else if (ch == "#") {
      stream.eatWhile(/[\w\\\-]/);
      return ret("atom", "hash");
    } else if (ch == "!") {
      stream.match(/^\s*\w*/);
      return ret("keyword", "important");
    } else if (/\d/.test(ch) || ch == "." && stream.eat(/\d/)) {
      stream.eatWhile(/[\w.%]/);
      return ret("number", "unit");
    } else if (ch === "-") {
      if (/[\d.]/.test(stream.peek())) {
        stream.eatWhile(/[\w.%]/);
        return ret("number", "unit");
      } else if (stream.match(/^-[\w\\\-]*/)) {
        stream.eatWhile(/[\w\\\-]/);
        if (stream.match(/^\s*:/, false))
          return ret("variable-2", "variable-definition");
        return ret("variable-2", "variable");
      } else if (stream.match(/^\w+-/)) {
        return ret("meta", "meta");
      }
    } else if (/[,+>*\/]/.test(ch)) {
      return ret(null, "select-op");
    } else if (ch == "." && stream.match(/^-?[_a-z][_a-z0-9-]*/i)) {
      return ret("qualifier", "qualifier");
    } else if (/[:;{}\[\]\(\)]/.test(ch)) {
      return ret(null, ch);
    } else if (stream.match(/[\w-.]+(?=\()/)) {
      if (/^(url(-prefix)?|domain|regexp)$/.test(stream.current().toLowerCase())) {
        state.tokenize = tokenParenthesized;
      }
      return ret("variable callee", "variable");
    } else if (/[\w\\\-]/.test(ch)) {
      stream.eatWhile(/[\w\\\-]/);
      return ret("property", "word");
    } else {
      return ret(null, null);
    }
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, ch;
      while ((ch = stream.next()) != null) {
        if (ch == quote && !escaped) {
          if (quote == ")") stream.backUp(1);
          break;
        }
        escaped = !escaped && ch == "\\";
      }
      if (ch == quote || !escaped && quote != ")") state.tokenize = null;
      return ret("string", "string");
    };
  }

  function tokenParenthesized(stream, state) {
    stream.next(); // Must be '('
    if (!stream.match(/\s*[\"\')]/, false))
      state.tokenize = tokenString(")");
    else
      state.tokenize = null;
    return ret(null, "(");
  }

  // Context management

  function Context(type, indent, prev) {
    this.type = type;
    this.indent = indent;
    this.prev = prev;
  }

  function pushContext(state, stream, type, indent) {
    state.context = new Context(type, stream.indentation() + (indent === false ? 0 : indentUnit), state.context);
    return type;
  }

  function popContext(state) {
    if (state.context.prev)
      state.context = state.context.prev;
    return state.context.type;
  }

  function pass(type, stream, state) {
    return states[state.context.type](type, stream, state);
  }
  function popAndPass(type, stream, state, n) {
    for (var i = n || 1; i > 0; i--)
      state.context = state.context.prev;
    return pass(type, stream, state);
  }

  // Parser

  function wordAsValue(stream) {
    var word = stream.current().toLowerCase();
    if (valueKeywords.hasOwnProperty(word))
      override = "atom";
    else if (colorKeywords.hasOwnProperty(word))
      override = "keyword";
    else
      override = "variable";
  }

  var states = {};

  states.top = function(type, stream, state) {
    if (type == "{") {
      return pushContext(state, stream, "block");
    } else if (type == "}" && state.context.prev) {
      return popContext(state);
    } else if (supportsAtComponent && /@component/i.test(type)) {
      return pushContext(state, stream, "atComponentBlock");
    } else if (/^@(-moz-)?document$/i.test(type)) {
      return pushContext(state, stream, "documentTypes");
    } else if (/^@(media|supports|(-moz-)?document|import)$/i.test(type)) {
      return pushContext(state, stream, "atBlock");
    } else if (/^@(font-face|counter-style)/i.test(type)) {
      state.stateArg = type;
      return "restricted_atBlock_before";
    } else if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(type)) {
      return "keyframes";
    } else if (type && type.charAt(0) == "@") {
      return pushContext(state, stream, "at");
    } else if (type == "hash") {
      override = "builtin";
    } else if (type == "word") {
      override = "tag";
    } else if (type == "variable-definition") {
      return "maybeprop";
    } else if (type == "interpolation") {
      return pushContext(state, stream, "interpolation");
    } else if (type == ":") {
      return "pseudo";
    } else if (allowNested && type == "(") {
      return pushContext(state, stream, "parens");
    }
    return state.context.type;
  };

  states.block = function(type, stream, state) {
    if (type == "word") {
      var word = stream.current().toLowerCase();
      if (propertyKeywords.hasOwnProperty(word)) {
        override = "property";
        return "maybeprop";
      } else if (nonStandardPropertyKeywords.hasOwnProperty(word)) {
        override = "string-2";
        return "maybeprop";
      } else if (allowNested) {
        override = stream.match(/^\s*:(?:\s|$)/, false) ? "property" : "tag";
        return "block";
      } else {
        override += " error";
        return "maybeprop";
      }
    } else if (type == "meta") {
      return "block";
    } else if (!allowNested && (type == "hash" || type == "qualifier")) {
      override = "error";
      return "block";
    } else {
      return states.top(type, stream, state);
    }
  };

  states.maybeprop = function(type, stream, state) {
    if (type == ":") return pushContext(state, stream, "prop");
    return pass(type, stream, state);
  };

  states.prop = function(type, stream, state) {
    if (type == ";") return popContext(state);
    if (type == "{" && allowNested) return pushContext(state, stream, "propBlock");
    if (type == "}" || type == "{") return popAndPass(type, stream, state);
    if (type == "(") return pushContext(state, stream, "parens");

    if (type == "hash" && !/^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(stream.current())) {
      override += " error";
    } else if (type == "word") {
      wordAsValue(stream);
    } else if (type == "interpolation") {
      return pushContext(state, stream, "interpolation");
    }
    return "prop";
  };

  states.propBlock = function(type, _stream, state) {
    if (type == "}") return popContext(state);
    if (type == "word") { override = "property"; return "maybeprop"; }
    return state.context.type;
  };

  states.parens = function(type, stream, state) {
    if (type == "{" || type == "}") return popAndPass(type, stream, state);
    if (type == ")") return popContext(state);
    if (type == "(") return pushContext(state, stream, "parens");
    if (type == "interpolation") return pushContext(state, stream, "interpolation");
    if (type == "word") wordAsValue(stream);
    return "parens";
  };

  states.pseudo = function(type, stream, state) {
    if (type == "meta") return "pseudo";

    if (type == "word") {
      override = "variable-3";
      return state.context.type;
    }
    return pass(type, stream, state);
  };

  states.documentTypes = function(type, stream, state) {
    if (type == "word" && documentTypes.hasOwnProperty(stream.current())) {
      override = "tag";
      return state.context.type;
    } else {
      return states.atBlock(type, stream, state);
    }
  };

  states.atBlock = function(type, stream, state) {
    if (type == "(") return pushContext(state, stream, "atBlock_parens");
    if (type == "}" || type == ";") return popAndPass(type, stream, state);
    if (type == "{") return popContext(state) && pushContext(state, stream, allowNested ? "block" : "top");

    if (type == "interpolation") return pushContext(state, stream, "interpolation");

    if (type == "word") {
      var word = stream.current().toLowerCase();
      if (word == "only" || word == "not" || word == "and" || word == "or")
        override = "keyword";
      else if (mediaTypes.hasOwnProperty(word))
        override = "attribute";
      else if (mediaFeatures.hasOwnProperty(word))
        override = "property";
      else if (mediaValueKeywords.hasOwnProperty(word))
        override = "keyword";
      else if (propertyKeywords.hasOwnProperty(word))
        override = "property";
      else if (nonStandardPropertyKeywords.hasOwnProperty(word))
        override = "string-2";
      else if (valueKeywords.hasOwnProperty(word))
        override = "atom";
      else if (colorKeywords.hasOwnProperty(word))
        override = "keyword";
      else
        override = "error";
    }
    return state.context.type;
  };

  states.atComponentBlock = function(type, stream, state) {
    if (type == "}")
      return popAndPass(type, stream, state);
    if (type == "{")
      return popContext(state) && pushContext(state, stream, allowNested ? "block" : "top", false);
    if (type == "word")
      override = "error";
    return state.context.type;
  };

  states.atBlock_parens = function(type, stream, state) {
    if (type == ")") return popContext(state);
    if (type == "{" || type == "}") return popAndPass(type, stream, state, 2);
    return states.atBlock(type, stream, state);
  };

  states.restricted_atBlock_before = function(type, stream, state) {
    if (type == "{")
      return pushContext(state, stream, "restricted_atBlock");
    if (type == "word" && state.stateArg == "@counter-style") {
      override = "variable";
      return "restricted_atBlock_before";
    }
    return pass(type, stream, state);
  };

  states.restricted_atBlock = function(type, stream, state) {
    if (type == "}") {
      state.stateArg = null;
      return popContext(state);
    }
    if (type == "word") {
      if ((state.stateArg == "@font-face" && !fontProperties.hasOwnProperty(stream.current().toLowerCase())) ||
          (state.stateArg == "@counter-style" && !counterDescriptors.hasOwnProperty(stream.current().toLowerCase())))
        override = "error";
      else
        override = "property";
      return "maybeprop";
    }
    return "restricted_atBlock";
  };

  states.keyframes = function(type, stream, state) {
    if (type == "word") { override = "variable"; return "keyframes"; }
    if (type == "{") return pushContext(state, stream, "top");
    return pass(type, stream, state);
  };

  states.at = function(type, stream, state) {
    if (type == ";") return popContext(state);
    if (type == "{" || type == "}") return popAndPass(type, stream, state);
    if (type == "word") override = "tag";
    else if (type == "hash") override = "builtin";
    return "at";
  };

  states.interpolation = function(type, stream, state) {
    if (type == "}") return popContext(state);
    if (type == "{" || type == ";") return popAndPass(type, stream, state);
    if (type == "word") override = "variable";
    else if (type != "variable" && type != "(" && type != ")") override = "error";
    return "interpolation";
  };

  return {
    startState: function(base) {
      return {tokenize: null,
              state: inline ? "block" : "top",
              stateArg: null,
              context: new Context(inline ? "block" : "top", base || 0, null)};
    },

    token: function(stream, state) {
      if (!state.tokenize && stream.eatSpace()) return null;
      var style = (state.tokenize || tokenBase)(stream, state);
      if (style && typeof style == "object") {
        type = style[1];
        style = style[0];
      }
      override = style;
      if (type != "comment")
        state.state = states[state.state](type, stream, state);
      return override;
    },

    indent: function(state, textAfter) {
      var cx = state.context, ch = textAfter && textAfter.charAt(0);
      var indent = cx.indent;
      if (cx.type == "prop" && (ch == "}" || ch == ")")) cx = cx.prev;
      if (cx.prev) {
        if (ch == "}" && (cx.type == "block" || cx.type == "top" ||
                          cx.type == "interpolation" || cx.type == "restricted_atBlock")) {
          // Resume indentation from parent context.
          cx = cx.prev;
          indent = cx.indent;
        } else if (ch == ")" && (cx.type == "parens" || cx.type == "atBlock_parens") ||
            ch == "{" && (cx.type == "at" || cx.type == "atBlock")) {
          // Dedent relative to current context.
          indent = Math.max(0, cx.indent - indentUnit);
        }
      }
      return indent;
    },

    electricChars: "}",
    blockCommentStart: "/*",
    blockCommentEnd: "*/",
    blockCommentContinue: " * ",
    lineComment: lineComment,
    fold: "brace"
  };
});

  function keySet(array) {
    var keys = {};
    for (var i = 0; i < array.length; ++i) {
      keys[array[i].toLowerCase()] = true;
    }
    return keys;
  }

  var documentTypes_ = [
    "domain", "regexp", "url", "url-prefix"
  ], documentTypes = keySet(documentTypes_);

  var mediaTypes_ = [
    "all", "aural", "braille", "handheld", "print", "projection", "screen",
    "tty", "tv", "embossed"
  ], mediaTypes = keySet(mediaTypes_);

  var mediaFeatures_ = [
    "width", "min-width", "max-width", "height", "min-height", "max-height",
    "device-width", "min-device-width", "max-device-width", "device-height",
    "min-device-height", "max-device-height", "aspect-ratio",
    "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio",
    "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color",
    "max-color", "color-index", "min-color-index", "max-color-index",
    "monochrome", "min-monochrome", "max-monochrome", "resolution",
    "min-resolution", "max-resolution", "scan", "grid", "orientation",
    "device-pixel-ratio", "min-device-pixel-ratio", "max-device-pixel-ratio",
    "pointer", "any-pointer", "hover", "any-hover"
  ], mediaFeatures = keySet(mediaFeatures_);

  var mediaValueKeywords_ = [
    "landscape", "portrait", "none", "coarse", "fine", "on-demand", "hover",
    "interlace", "progressive"
  ], mediaValueKeywords = keySet(mediaValueKeywords_);

  var propertyKeywords_ = [
    "align-content", "align-items", "align-self", "alignment-adjust",
    "alignment-baseline", "anchor-point", "animation", "animation-delay",
    "animation-direction", "animation-duration", "animation-fill-mode",
    "animation-iteration-count", "animation-name", "animation-play-state",
    "animation-timing-function", "appearance", "azimuth", "backface-visibility",
    "background", "background-attachment", "background-blend-mode", "background-clip",
    "background-color", "background-image", "background-origin", "background-position",
    "background-repeat", "background-size", "baseline-shift", "binding",
    "bleed", "bookmark-label", "bookmark-level", "bookmark-state",
    "bookmark-target", "border", "border-bottom", "border-bottom-color",
    "border-bottom-left-radius", "border-bottom-right-radius",
    "border-bottom-style", "border-bottom-width", "border-collapse",
    "border-color", "border-image", "border-image-outset",
    "border-image-repeat", "border-image-slice", "border-image-source",
    "border-image-width", "border-left", "border-left-color",
    "border-left-style", "border-left-width", "border-radius", "border-right",
    "border-right-color", "border-right-style", "border-right-width",
    "border-spacing", "border-style", "border-top", "border-top-color",
    "border-top-left-radius", "border-top-right-radius", "border-top-style",
    "border-top-width", "border-width", "bottom", "box-decoration-break",
    "box-shadow", "box-sizing", "break-after", "break-before", "break-inside",
    "caption-side", "caret-color", "clear", "clip", "color", "color-profile", "column-count",
    "column-fill", "column-gap", "column-rule", "column-rule-color",
    "column-rule-style", "column-rule-width", "column-span", "column-width",
    "columns", "content", "counter-increment", "counter-reset", "crop", "cue",
    "cue-after", "cue-before", "cursor", "direction", "display",
    "dominant-baseline", "drop-initial-after-adjust",
    "drop-initial-after-align", "drop-initial-before-adjust",
    "drop-initial-before-align", "drop-initial-size", "drop-initial-value",
    "elevation", "empty-cells", "fit", "fit-position", "flex", "flex-basis",
    "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap",
    "float", "float-offset", "flow-from", "flow-into", "font", "font-feature-settings",
    "font-family", "font-kerning", "font-language-override", "font-size", "font-size-adjust",
    "font-stretch", "font-style", "font-synthesis", "font-variant",
    "font-variant-alternates", "font-variant-caps", "font-variant-east-asian",
    "font-variant-ligatures", "font-variant-numeric", "font-variant-position",
    "font-weight", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow",
    "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-gap",
    "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-gap",
    "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns",
    "grid-template-rows", "hanging-punctuation", "height", "hyphens",
    "icon", "image-orientation", "image-rendering", "image-resolution",
    "inline-box-align", "justify-content", "justify-items", "justify-self", "left", "letter-spacing",
    "line-break", "line-height", "line-stacking", "line-stacking-ruby",
    "line-stacking-shift", "line-stacking-strategy", "list-style",
    "list-style-image", "list-style-position", "list-style-type", "margin",
    "margin-bottom", "margin-left", "margin-right", "margin-top",
    "marks", "marquee-direction", "marquee-loop",
    "marquee-play-count", "marquee-speed", "marquee-style", "max-height",
    "max-width", "min-height", "min-width", "mix-blend-mode", "move-to", "nav-down", "nav-index",
    "nav-left", "nav-right", "nav-up", "object-fit", "object-position",
    "opacity", "order", "orphans", "outline",
    "outline-color", "outline-offset", "outline-style", "outline-width",
    "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y",
    "padding", "padding-bottom", "padding-left", "padding-right", "padding-top",
    "page", "page-break-after", "page-break-before", "page-break-inside",
    "page-policy", "pause", "pause-after", "pause-before", "perspective",
    "perspective-origin", "pitch", "pitch-range", "place-content", "place-items", "place-self", "play-during", "position",
    "presentation-level", "punctuation-trim", "quotes", "region-break-after",
    "region-break-before", "region-break-inside", "region-fragment",
    "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness",
    "right", "rotation", "rotation-point", "ruby-align", "ruby-overhang",
    "ruby-position", "ruby-span", "shape-image-threshold", "shape-inside", "shape-margin",
    "shape-outside", "size", "speak", "speak-as", "speak-header",
    "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set",
    "tab-size", "table-layout", "target", "target-name", "target-new",
    "target-position", "text-align", "text-align-last", "text-decoration",
    "text-decoration-color", "text-decoration-line", "text-decoration-skip",
    "text-decoration-style", "text-emphasis", "text-emphasis-color",
    "text-emphasis-position", "text-emphasis-style", "text-height",
    "text-indent", "text-justify", "text-outline", "text-overflow", "text-shadow",
    "text-size-adjust", "text-space-collapse", "text-transform", "text-underline-position",
    "text-wrap", "top", "transform", "transform-origin", "transform-style",
    "transition", "transition-delay", "transition-duration",
    "transition-property", "transition-timing-function", "unicode-bidi",
    "user-select", "vertical-align", "visibility", "voice-balance", "voice-duration",
    "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress",
    "voice-volume", "volume", "white-space", "widows", "width", "will-change", "word-break",
    "word-spacing", "word-wrap", "z-index",
    // SVG-specific
    "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color",
    "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events",
    "color-interpolation", "color-interpolation-filters",
    "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering",
    "marker", "marker-end", "marker-mid", "marker-start", "shape-rendering", "stroke",
    "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin",
    "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering",
    "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal",
    "glyph-orientation-vertical", "text-anchor", "writing-mode"
  ], propertyKeywords = keySet(propertyKeywords_);

  var nonStandardPropertyKeywords_ = [
    "scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color",
    "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color",
    "scrollbar-3d-light-color", "scrollbar-track-color", "shape-inside",
    "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button",
    "searchfield-results-decoration", "zoom"
  ], nonStandardPropertyKeywords = keySet(nonStandardPropertyKeywords_);

  var fontProperties_ = [
    "font-family", "src", "unicode-range", "font-variant", "font-feature-settings",
    "font-stretch", "font-weight", "font-style"
  ], fontProperties = keySet(fontProperties_);

  var counterDescriptors_ = [
    "additive-symbols", "fallback", "negative", "pad", "prefix", "range",
    "speak-as", "suffix", "symbols", "system"
  ], counterDescriptors = keySet(counterDescriptors_);

  var colorKeywords_ = [
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige",
    "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown",
    "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue",
    "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod",
    "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen",
    "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen",
    "darkslateblue", "darkslategray", "darkturquoise", "darkviolet",
    "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick",
    "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite",
    "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew",
    "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender",
    "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral",
    "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink",
    "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray",
    "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta",
    "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple",
    "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise",
    "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin",
    "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered",
    "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred",
    "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue",
    "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown",
    "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue",
    "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan",
    "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white",
    "whitesmoke", "yellow", "yellowgreen"
  ], colorKeywords = keySet(colorKeywords_);

  var valueKeywords_ = [
    "above", "absolute", "activeborder", "additive", "activecaption", "afar",
    "after-white-space", "ahead", "alias", "all", "all-scroll", "alphabetic", "alternate",
    "always", "amharic", "amharic-abegede", "antialiased", "appworkspace",
    "arabic-indic", "armenian", "asterisks", "attr", "auto", "auto-flow", "avoid", "avoid-column", "avoid-page",
    "avoid-region", "background", "backwards", "baseline", "below", "bidi-override", "binary",
    "bengali", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box",
    "both", "bottom", "break", "break-all", "break-word", "bullets", "button", "button-bevel",
    "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "calc", "cambodian",
    "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret",
    "cell", "center", "checkbox", "circle", "cjk-decimal", "cjk-earthly-branch",
    "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote",
    "col-resize", "collapse", "color", "color-burn", "color-dodge", "column", "column-reverse",
    "compact", "condensed", "contain", "content", "contents",
    "content-box", "context-menu", "continuous", "copy", "counter", "counters", "cover", "crop",
    "cross", "crosshair", "currentcolor", "cursive", "cyclic", "darken", "dashed", "decimal",
    "decimal-leading-zero", "default", "default-button", "dense", "destination-atop",
    "destination-in", "destination-out", "destination-over", "devanagari", "difference",
    "disc", "discard", "disclosure-closed", "disclosure-open", "document",
    "dot-dash", "dot-dot-dash",
    "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out",
    "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede",
    "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er",
    "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er",
    "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et",
    "ethiopic-halehame-gez", "ethiopic-halehame-om-et",
    "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et",
    "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig",
    "ethiopic-numeric", "ew-resize", "exclusion", "expanded", "extends", "extra-condensed",
    "extra-expanded", "fantasy", "fast", "fill", "fixed", "flat", "flex", "flex-end", "flex-start", "footnotes",
    "forwards", "from", "geometricPrecision", "georgian", "graytext", "grid", "groove",
    "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hard-light", "hebrew",
    "help", "hidden", "hide", "higher", "highlight", "highlighttext",
    "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "hue", "icon", "ignore",
    "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite",
    "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis",
    "inline-block", "inline-flex", "inline-grid", "inline-table", "inset", "inside", "intrinsic", "invert",
    "italic", "japanese-formal", "japanese-informal", "justify", "kannada",
    "katakana", "katakana-iroha", "keep-all", "khmer",
    "korean-hangul-formal", "korean-hanja-formal", "korean-hanja-informal",
    "landscape", "lao", "large", "larger", "left", "level", "lighter", "lighten",
    "line-through", "linear", "linear-gradient", "lines", "list-item", "listbox", "listitem",
    "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian",
    "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian",
    "lower-roman", "lowercase", "ltr", "luminosity", "malayalam", "match", "matrix", "matrix3d",
    "media-controls-background", "media-current-time-display",
    "media-fullscreen-button", "media-mute-button", "media-play-button",
    "media-return-to-realtime-button", "media-rewind-button",
    "media-seek-back-button", "media-seek-forward-button", "media-slider",
    "media-sliderthumb", "media-time-remaining-display", "media-volume-slider",
    "media-volume-slider-container", "media-volume-sliderthumb", "medium",
    "menu", "menulist", "menulist-button", "menulist-text",
    "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic",
    "mix", "mongolian", "monospace", "move", "multiple", "multiply", "myanmar", "n-resize",
    "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop",
    "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap",
    "ns-resize", "numbers", "numeric", "nw-resize", "nwse-resize", "oblique", "octal", "opacity", "open-quote",
    "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset",
    "outside", "outside-shape", "overlay", "overline", "padding", "padding-box",
    "painted", "page", "paused", "persian", "perspective", "plus-darker", "plus-lighter",
    "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d",
    "progress", "push-button", "radial-gradient", "radio", "read-only",
    "read-write", "read-write-plaintext-only", "rectangle", "region",
    "relative", "repeat", "repeating-linear-gradient",
    "repeating-radial-gradient", "repeat-x", "repeat-y", "reset", "reverse",
    "rgb", "rgba", "ridge", "right", "rotate", "rotate3d", "rotateX", "rotateY",
    "rotateZ", "round", "row", "row-resize", "row-reverse", "rtl", "run-in", "running",
    "s-resize", "sans-serif", "saturation", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "screen",
    "scroll", "scrollbar", "scroll-position", "se-resize", "searchfield",
    "searchfield-cancel-button", "searchfield-decoration",
    "searchfield-results-button", "searchfield-results-decoration", "self-start", "self-end",
    "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama",
    "simp-chinese-formal", "simp-chinese-informal", "single",
    "skew", "skewX", "skewY", "skip-white-space", "slide", "slider-horizontal",
    "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow",
    "small", "small-caps", "small-caption", "smaller", "soft-light", "solid", "somali",
    "source-atop", "source-in", "source-out", "source-over", "space", "space-around", "space-between", "space-evenly", "spell-out", "square",
    "square-button", "start", "static", "status-bar", "stretch", "stroke", "sub",
    "subpixel-antialiased", "super", "sw-resize", "symbolic", "symbols", "system-ui", "table",
    "table-caption", "table-cell", "table-column", "table-column-group",
    "table-footer-group", "table-header-group", "table-row", "table-row-group",
    "tamil",
    "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai",
    "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight",
    "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er",
    "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top",
    "trad-chinese-formal", "trad-chinese-informal", "transform",
    "translate", "translate3d", "translateX", "translateY", "translateZ",
    "transparent", "ultra-condensed", "ultra-expanded", "underline", "unset", "up",
    "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal",
    "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url",
    "var", "vertical", "vertical-text", "visible", "visibleFill", "visiblePainted",
    "visibleStroke", "visual", "w-resize", "wait", "wave", "wider",
    "window", "windowframe", "windowtext", "words", "wrap", "wrap-reverse", "x-large", "x-small", "xor",
    "xx-large", "xx-small"
  ], valueKeywords = keySet(valueKeywords_);

  var allWords = documentTypes_.concat(mediaTypes_).concat(mediaFeatures_).concat(mediaValueKeywords_)
    .concat(propertyKeywords_).concat(nonStandardPropertyKeywords_).concat(colorKeywords_)
    .concat(valueKeywords_);
  CodeMirror.registerHelper("hintWords", "css", allWords);

  function tokenCComment(stream, state) {
    var maybeEnd = false, ch;
    while ((ch = stream.next()) != null) {
      if (maybeEnd && ch == "/") {
        state.tokenize = null;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ["comment", "comment"];
  }

  CodeMirror.defineMIME("text/css", {
    documentTypes: documentTypes,
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    mediaValueKeywords: mediaValueKeywords,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    fontProperties: fontProperties,
    counterDescriptors: counterDescriptors,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    tokenHooks: {
      "/": function(stream, state) {
        if (!stream.eat("*")) return false;
        state.tokenize = tokenCComment;
        return tokenCComment(stream, state);
      }
    },
    name: "css"
  });

  CodeMirror.defineMIME("text/x-scss", {
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    mediaValueKeywords: mediaValueKeywords,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    fontProperties: fontProperties,
    allowNested: true,
    lineComment: "//",
    tokenHooks: {
      "/": function(stream, state) {
        if (stream.eat("/")) {
          stream.skipToEnd();
          return ["comment", "comment"];
        } else if (stream.eat("*")) {
          state.tokenize = tokenCComment;
          return tokenCComment(stream, state);
        } else {
          return ["operator", "operator"];
        }
      },
      ":": function(stream) {
        if (stream.match(/\s*\{/, false))
          return [null, null]
        return false;
      },
      "$": function(stream) {
        stream.match(/^[\w-]+/);
        if (stream.match(/^\s*:/, false))
          return ["variable-2", "variable-definition"];
        return ["variable-2", "variable"];
      },
      "#": function(stream) {
        if (!stream.eat("{")) return false;
        return [null, "interpolation"];
      }
    },
    name: "css",
    helperType: "scss"
  });

  CodeMirror.defineMIME("text/x-less", {
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    mediaValueKeywords: mediaValueKeywords,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    fontProperties: fontProperties,
    allowNested: true,
    lineComment: "//",
    tokenHooks: {
      "/": function(stream, state) {
        if (stream.eat("/")) {
          stream.skipToEnd();
          return ["comment", "comment"];
        } else if (stream.eat("*")) {
          state.tokenize = tokenCComment;
          return tokenCComment(stream, state);
        } else {
          return ["operator", "operator"];
        }
      },
      "@": function(stream) {
        if (stream.eat("{")) return [null, "interpolation"];
        if (stream.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i, false)) return false;
        stream.eatWhile(/[\w\\\-]/);
        if (stream.match(/^\s*:/, false))
          return ["variable-2", "variable-definition"];
        return ["variable-2", "variable"];
      },
      "&": function() {
        return ["atom", "atom"];
      }
    },
    name: "css",
    helperType: "less"
  });

  CodeMirror.defineMIME("text/x-gss", {
    documentTypes: documentTypes,
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    fontProperties: fontProperties,
    counterDescriptors: counterDescriptors,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    supportsAtComponent: true,
    tokenHooks: {
      "/": function(stream, state) {
        if (!stream.eat("*")) return false;
        state.tokenize = tokenCComment;
        return tokenCComment(stream, state);
      }
    },
    name: "css",
    helperType: "gss"
  });

});


// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

function Context(indented, column, type, info, align, prev) {
  this.indented = indented;
  this.column = column;
  this.type = type;
  this.info = info;
  this.align = align;
  this.prev = prev;
}
function pushContext(state, col, type, info) {
  var indent = state.indented;
  if (state.context && state.context.type == "statement" && type != "statement")
    indent = state.context.indented;
  return state.context = new Context(indent, col, type, info, null, state.context);
}
function popContext(state) {
  var t = state.context.type;
  if (t == ")" || t == "]" || t == "}")
    state.indented = state.context.indented;
  return state.context = state.context.prev;
}

function typeBefore(stream, state, pos) {
  if (state.prevToken == "variable" || state.prevToken == "type") return true;
  if (/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(stream.string.slice(0, pos))) return true;
  if (state.typeAtEndOfLine && stream.column() == stream.indentation()) return true;
}

function isTopScope(context) {
  for (;;) {
    if (!context || context.type == "top") return true;
    if (context.type == "}" && context.prev.info != "namespace") return false;
    context = context.prev;
  }
}

CodeMirror.defineMode("clike", function(config, parserConfig) {
  var indentUnit = config.indentUnit,
      statementIndentUnit = parserConfig.statementIndentUnit || indentUnit,
      dontAlignCalls = parserConfig.dontAlignCalls,
      keywords = parserConfig.keywords || {},
      types = parserConfig.types || {},
      builtin = parserConfig.builtin || {},
      blockKeywords = parserConfig.blockKeywords || {},
      defKeywords = parserConfig.defKeywords || {},
      atoms = parserConfig.atoms || {},
      hooks = parserConfig.hooks || {},
      multiLineStrings = parserConfig.multiLineStrings,
      indentStatements = parserConfig.indentStatements !== false,
      indentSwitch = parserConfig.indentSwitch !== false,
      namespaceSeparator = parserConfig.namespaceSeparator,
      isPunctuationChar = parserConfig.isPunctuationChar || /[\[\]{}\(\),;\:\.]/,
      numberStart = parserConfig.numberStart || /[\d\.]/,
      number = parserConfig.number || /^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,
      isOperatorChar = parserConfig.isOperatorChar || /[+\-*&%=<>!?|\/]/,
      isIdentifierChar = parserConfig.isIdentifierChar || /[\w\$_\xa1-\uffff]/,
      // An optional function that takes a {string} token and returns true if it
      // should be treated as a builtin.
      isReservedIdentifier = parserConfig.isReservedIdentifier || false;

  var curPunc, isDefKeyword;

  function tokenBase(stream, state) {
    var ch = stream.next();
    if (hooks[ch]) {
      var result = hooks[ch](stream, state);
      if (result !== false) return result;
    }
    if (ch == '"' || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    }
    if (isPunctuationChar.test(ch)) {
      curPunc = ch;
      return null;
    }
    if (numberStart.test(ch)) {
      stream.backUp(1)
      if (stream.match(number)) return "number"
      stream.next()
    }
    if (ch == "/") {
      if (stream.eat("*")) {
        state.tokenize = tokenComment;
        return tokenComment(stream, state);
      }
      if (stream.eat("/")) {
        stream.skipToEnd();
        return "comment";
      }
    }
    if (isOperatorChar.test(ch)) {
      while (!stream.match(/^\/[\/*]/, false) && stream.eat(isOperatorChar)) {}
      return "operator";
    }
    stream.eatWhile(isIdentifierChar);
    if (namespaceSeparator) while (stream.match(namespaceSeparator))
      stream.eatWhile(isIdentifierChar);

    var cur = stream.current();
    if (contains(keywords, cur)) {
      if (contains(blockKeywords, cur)) curPunc = "newstatement";
      if (contains(defKeywords, cur)) isDefKeyword = true;
      return "keyword";
    }
    if (contains(types, cur)) return "type";
    if (contains(builtin, cur)
        || (isReservedIdentifier && isReservedIdentifier(cur))) {
      if (contains(blockKeywords, cur)) curPunc = "newstatement";
      return "builtin";
    }
    if (contains(atoms, cur)) return "atom";
    return "variable";
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, next, end = false;
      while ((next = stream.next()) != null) {
        if (next == quote && !escaped) {end = true; break;}
        escaped = !escaped && next == "\\";
      }
      if (end || !(escaped || multiLineStrings))
        state.tokenize = null;
      return "string";
    };
  }

  function tokenComment(stream, state) {
    var maybeEnd = false, ch;
    while (ch = stream.next()) {
      if (ch == "/" && maybeEnd) {
        state.tokenize = null;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return "comment";
  }

  function maybeEOL(stream, state) {
    if (parserConfig.typeFirstDefinitions && stream.eol() && isTopScope(state.context))
      state.typeAtEndOfLine = typeBefore(stream, state, stream.pos)
  }

  // Interface

  return {
    startState: function(basecolumn) {
      return {
        tokenize: null,
        context: new Context((basecolumn || 0) - indentUnit, 0, "top", null, false),
        indented: 0,
        startOfLine: true,
        prevToken: null
      };
    },

    token: function(stream, state) {
      var ctx = state.context;
      if (stream.sol()) {
        if (ctx.align == null) ctx.align = false;
        state.indented = stream.indentation();
        state.startOfLine = true;
      }
      if (stream.eatSpace()) { maybeEOL(stream, state); return null; }
      curPunc = isDefKeyword = null;
      var style = (state.tokenize || tokenBase)(stream, state);
      if (style == "comment" || style == "meta") return style;
      if (ctx.align == null) ctx.align = true;

      if (curPunc == ";" || curPunc == ":" || (curPunc == "," && stream.match(/^\s*(?:\/\/.*)?$/, false)))
        while (state.context.type == "statement") popContext(state);
      else if (curPunc == "{") pushContext(state, stream.column(), "}");
      else if (curPunc == "[") pushContext(state, stream.column(), "]");
      else if (curPunc == "(") pushContext(state, stream.column(), ")");
      else if (curPunc == "}") {
        while (ctx.type == "statement") ctx = popContext(state);
        if (ctx.type == "}") ctx = popContext(state);
        while (ctx.type == "statement") ctx = popContext(state);
      }
      else if (curPunc == ctx.type) popContext(state);
      else if (indentStatements &&
               (((ctx.type == "}" || ctx.type == "top") && curPunc != ";") ||
                (ctx.type == "statement" && curPunc == "newstatement"))) {
        pushContext(state, stream.column(), "statement", stream.current());
      }

      if (style == "variable" &&
          ((state.prevToken == "def" ||
            (parserConfig.typeFirstDefinitions && typeBefore(stream, state, stream.start) &&
             isTopScope(state.context) && stream.match(/^\s*\(/, false)))))
        style = "def";

      if (hooks.token) {
        var result = hooks.token(stream, state, style);
        if (result !== undefined) style = result;
      }

      if (style == "def" && parserConfig.styleDefs === false) style = "variable";

      state.startOfLine = false;
      state.prevToken = isDefKeyword ? "def" : style || curPunc;
      maybeEOL(stream, state);
      return style;
    },

    indent: function(state, textAfter) {
      if (state.tokenize != tokenBase && state.tokenize != null || state.typeAtEndOfLine) return CodeMirror.Pass;
      var ctx = state.context, firstChar = textAfter && textAfter.charAt(0);
      var closing = firstChar == ctx.type;
      if (ctx.type == "statement" && firstChar == "}") ctx = ctx.prev;
      if (parserConfig.dontIndentStatements)
        while (ctx.type == "statement" && parserConfig.dontIndentStatements.test(ctx.info))
          ctx = ctx.prev
      if (hooks.indent) {
        var hook = hooks.indent(state, ctx, textAfter, indentUnit);
        if (typeof hook == "number") return hook
      }
      var switchBlock = ctx.prev && ctx.prev.info == "switch";
      if (parserConfig.allmanIndentation && /[{(]/.test(firstChar)) {
        while (ctx.type != "top" && ctx.type != "}") ctx = ctx.prev
        return ctx.indented
      }
      if (ctx.type == "statement")
        return ctx.indented + (firstChar == "{" ? 0 : statementIndentUnit);
      if (ctx.align && (!dontAlignCalls || ctx.type != ")"))
        return ctx.column + (closing ? 0 : 1);
      if (ctx.type == ")" && !closing)
        return ctx.indented + statementIndentUnit;

      return ctx.indented + (closing ? 0 : indentUnit) +
        (!closing && switchBlock && !/^(?:case|default)\b/.test(textAfter) ? indentUnit : 0);
    },

    electricInput: indentSwitch ? /^\s*(?:case .*?:|default:|\{\}?|\})$/ : /^\s*[{}]$/,
    blockCommentStart: "/*",
    blockCommentEnd: "*/",
    blockCommentContinue: " * ",
    lineComment: "//",
    fold: "brace"
  };
});

  function words(str) {
    var obj = {}, words = str.split(" ");
    for (var i = 0; i < words.length; ++i) obj[words[i]] = true;
    return obj;
  }
  function contains(words, word) {
    if (typeof words === "function") {
      return words(word);
    } else {
      return words.propertyIsEnumerable(word);
    }
  }
  var cKeywords = "auto if break case register continue return default do sizeof " +
    "static else struct switch extern typedef union for goto while enum const " +
    "volatile inline restrict asm fortran";

  // Keywords from https://en.cppreference.com/w/cpp/keyword includes C++20.
  var cppKeywords = "alignas alignof and and_eq audit axiom bitand bitor catch " +
  "class compl concept constexpr const_cast decltype delete dynamic_cast " +
  "explicit export final friend import module mutable namespace new noexcept " +
  "not not_eq operator or or_eq override private protected public " +
  "reinterpret_cast requires static_assert static_cast template this " +
  "thread_local throw try typeid typename using virtual xor xor_eq";

  var objCKeywords = "bycopy byref in inout oneway out self super atomic nonatomic retain copy " +
  "readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd " +
  "@interface @implementation @end @protocol @encode @property @synthesize @dynamic @class " +
  "@public @package @private @protected @required @optional @try @catch @finally @import " +
  "@selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available";

  var objCBuiltins = "FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION " +
  " NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER " +
  "NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION " +
  "NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT"

  // Do not use this. Use the cTypes function below. This is global just to avoid
  // excessive calls when cTypes is being called multiple times during a parse.
  var basicCTypes = words("int long char short double float unsigned signed " +
    "void bool");

  // Do not use this. Use the objCTypes function below. This is global just to avoid
  // excessive calls when objCTypes is being called multiple times during a parse.
  var basicObjCTypes = words("SEL instancetype id Class Protocol BOOL");

  // Returns true if identifier is a "C" type.
  // C type is defined as those that are reserved by the compiler (basicTypes),
  // and those that end in _t (Reserved by POSIX for types)
  // http://www.gnu.org/software/libc/manual/html_node/Reserved-Names.html
  function cTypes(identifier) {
    return contains(basicCTypes, identifier) || /.+_t$/.test(identifier);
  }

  // Returns true if identifier is a "Objective C" type.
  function objCTypes(identifier) {
    return cTypes(identifier) || contains(basicObjCTypes, identifier);
  }

  var cBlockKeywords = "case do else for if switch while struct enum union";
  var cDefKeywords = "struct enum union";

  function cppHook(stream, state) {
    if (!state.startOfLine) return false
    for (var ch, next = null; ch = stream.peek();) {
      if (ch == "\\" && stream.match(/^.$/)) {
        next = cppHook
        break
      } else if (ch == "/" && stream.match(/^\/[\/\*]/, false)) {
        break
      }
      stream.next()
    }
    state.tokenize = next
    return "meta"
  }

  function pointerHook(_stream, state) {
    if (state.prevToken == "type") return "type";
    return false;
  }

  // For C and C++ (and ObjC): identifiers starting with __
  // or _ followed by a capital letter are reserved for the compiler.
  function cIsReservedIdentifier(token) {
    if (!token || token.length < 2) return false;
    if (token[0] != '_') return false;
    return (token[1] == '_') || (token[1] !== token[1].toLowerCase());
  }

  function cpp14Literal(stream) {
    stream.eatWhile(/[\w\.']/);
    return "number";
  }

  function cpp11StringHook(stream, state) {
    stream.backUp(1);
    // Raw strings.
    if (stream.match(/(R|u8R|uR|UR|LR)/)) {
      var match = stream.match(/"([^\s\\()]{0,16})\(/);
      if (!match) {
        return false;
      }
      state.cpp11RawStringDelim = match[1];
      state.tokenize = tokenRawString;
      return tokenRawString(stream, state);
    }
    // Unicode strings/chars.
    if (stream.match(/(u8|u|U|L)/)) {
      if (stream.match(/["']/, /* eat */ false)) {
        return "string";
      }
      return false;
    }
    // Ignore this hook.
    stream.next();
    return false;
  }

  function cppLooksLikeConstructor(word) {
    var lastTwo = /(\w+)::~?(\w+)$/.exec(word);
    return lastTwo && lastTwo[1] == lastTwo[2];
  }

  // C#-style strings where "" escapes a quote.
  function tokenAtString(stream, state) {
    var next;
    while ((next = stream.next()) != null) {
      if (next == '"' && !stream.eat('"')) {
        state.tokenize = null;
        break;
      }
    }
    return "string";
  }

  // C++11 raw string literal is <prefix>"<delim>( anything )<delim>", where
  // <delim> can be a string up to 16 characters long.
  function tokenRawString(stream, state) {
    // Escape characters that have special regex meanings.
    var delim = state.cpp11RawStringDelim.replace(/[^\w\s]/g, '\\$&');
    var match = stream.match(new RegExp(".*?\\)" + delim + '"'));
    if (match)
      state.tokenize = null;
    else
      stream.skipToEnd();
    return "string";
  }

  function def(mimes, mode) {
    if (typeof mimes == "string") mimes = [mimes];
    var words = [];
    function add(obj) {
      if (obj) for (var prop in obj) if (obj.hasOwnProperty(prop))
        words.push(prop);
    }
    add(mode.keywords);
    add(mode.types);
    add(mode.builtin);
    add(mode.atoms);
    if (words.length) {
      mode.helperType = mimes[0];
      CodeMirror.registerHelper("hintWords", mimes[0], words);
    }

    for (var i = 0; i < mimes.length; ++i)
      CodeMirror.defineMIME(mimes[i], mode);
  }

  def(["text/x-csrc", "text/x-c", "text/x-chdr"], {
    name: "clike",
    keywords: words(cKeywords),
    types: cTypes,
    blockKeywords: words(cBlockKeywords),
    defKeywords: words(cDefKeywords),
    typeFirstDefinitions: true,
    atoms: words("NULL true false"),
    isReservedIdentifier: cIsReservedIdentifier,
    hooks: {
      "#": cppHook,
      "*": pointerHook,
    },
    modeProps: {fold: ["brace", "include"]}
  });

  def(["text/x-c++src", "text/x-c++hdr"], {
    name: "clike",
    keywords: words(cKeywords + " " + cppKeywords),
    types: cTypes,
    blockKeywords: words(cBlockKeywords + " class try catch"),
    defKeywords: words(cDefKeywords + " class namespace"),
    typeFirstDefinitions: true,
    atoms: words("true false NULL nullptr"),
    dontIndentStatements: /^template$/,
    isIdentifierChar: /[\w\$_~\xa1-\uffff]/,
    isReservedIdentifier: cIsReservedIdentifier,
    hooks: {
      "#": cppHook,
      "*": pointerHook,
      "u": cpp11StringHook,
      "U": cpp11StringHook,
      "L": cpp11StringHook,
      "R": cpp11StringHook,
      "0": cpp14Literal,
      "1": cpp14Literal,
      "2": cpp14Literal,
      "3": cpp14Literal,
      "4": cpp14Literal,
      "5": cpp14Literal,
      "6": cpp14Literal,
      "7": cpp14Literal,
      "8": cpp14Literal,
      "9": cpp14Literal,
      token: function(stream, state, style) {
        if (style == "variable" && stream.peek() == "(" &&
            (state.prevToken == ";" || state.prevToken == null ||
             state.prevToken == "}") &&
            cppLooksLikeConstructor(stream.current()))
          return "def";
      }
    },
    namespaceSeparator: "::",
    modeProps: {fold: ["brace", "include"]}
  });

  def("text/x-java", {
    name: "clike",
    keywords: words("abstract assert break case catch class const continue default " +
                    "do else enum extends final finally for goto if implements import " +
                    "instanceof interface native new package private protected public " +
                    "return static strictfp super switch synchronized this throw throws transient " +
                    "try volatile while @interface"),
    types: words("byte short int long float double boolean char void Boolean Byte Character Double Float " +
                 "Integer Long Number Object Short String StringBuffer StringBuilder Void"),
    blockKeywords: words("catch class do else finally for if switch try while"),
    defKeywords: words("class interface enum @interface"),
    typeFirstDefinitions: true,
    atoms: words("true false null"),
    number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
    hooks: {
      "@": function(stream) {
        // Don't match the @interface keyword.
        if (stream.match('interface', false)) return false;

        stream.eatWhile(/[\w\$_]/);
        return "meta";
      }
    },
    modeProps: {fold: ["brace", "import"]}
  });

  def("text/x-csharp", {
    name: "clike",
    keywords: words("abstract as async await base break case catch checked class const continue" +
                    " default delegate do else enum event explicit extern finally fixed for" +
                    " foreach goto if implicit in interface internal is lock namespace new" +
                    " operator out override params private protected public readonly ref return sealed" +
                    " sizeof stackalloc static struct switch this throw try typeof unchecked" +
                    " unsafe using virtual void volatile while add alias ascending descending dynamic from get" +
                    " global group into join let orderby partial remove select set value var yield"),
    types: words("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func" +
                 " Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32" +
                 " UInt64 bool byte char decimal double short int long object"  +
                 " sbyte float string ushort uint ulong"),
    blockKeywords: words("catch class do else finally for foreach if struct switch try while"),
    defKeywords: words("class interface namespace struct var"),
    typeFirstDefinitions: true,
    atoms: words("true false null"),
    hooks: {
      "@": function(stream, state) {
        if (stream.eat('"')) {
          state.tokenize = tokenAtString;
          return tokenAtString(stream, state);
        }
        stream.eatWhile(/[\w\$_]/);
        return "meta";
      }
    }
  });

  function tokenTripleString(stream, state) {
    var escaped = false;
    while (!stream.eol()) {
      if (!escaped && stream.match('"""')) {
        state.tokenize = null;
        break;
      }
      escaped = stream.next() == "\\" && !escaped;
    }
    return "string";
  }

  function tokenNestedComment(depth) {
    return function (stream, state) {
      var ch
      while (ch = stream.next()) {
        if (ch == "*" && stream.eat("/")) {
          if (depth == 1) {
            state.tokenize = null
            break
          } else {
            state.tokenize = tokenNestedComment(depth - 1)
            return state.tokenize(stream, state)
          }
        } else if (ch == "/" && stream.eat("*")) {
          state.tokenize = tokenNestedComment(depth + 1)
          return state.tokenize(stream, state)
        }
      }
      return "comment"
    }
  }

  def("text/x-scala", {
    name: "clike",
    keywords: words(
      /* scala */
      "abstract case catch class def do else extends final finally for forSome if " +
      "implicit import lazy match new null object override package private protected return " +
      "sealed super this throw trait try type val var while with yield _ " +

      /* package scala */
      "assert assume require print println printf readLine readBoolean readByte readShort " +
      "readChar readInt readLong readFloat readDouble"
    ),
    types: words(
      "AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either " +
      "Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable " +
      "Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering " +
      "Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder " +
      "StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector " +

      /* package java.lang */
      "Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable " +
      "Compiler Double Exception Float Integer Long Math Number Object Package Pair Process " +
      "Runtime Runnable SecurityManager Short StackTraceElement StrictMath String " +
      "StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"
    ),
    multiLineStrings: true,
    blockKeywords: words("catch class enum do else finally for forSome if match switch try while"),
    defKeywords: words("class enum def object package trait type val var"),
    atoms: words("true false null"),
    indentStatements: false,
    indentSwitch: false,
    isOperatorChar: /[+\-*&%=<>!?|\/#:@]/,
    hooks: {
      "@": function(stream) {
        stream.eatWhile(/[\w\$_]/);
        return "meta";
      },
      '"': function(stream, state) {
        if (!stream.match('""')) return false;
        state.tokenize = tokenTripleString;
        return state.tokenize(stream, state);
      },
      "'": function(stream) {
        stream.eatWhile(/[\w\$_\xa1-\uffff]/);
        return "atom";
      },
      "=": function(stream, state) {
        var cx = state.context
        if (cx.type == "}" && cx.align && stream.eat(">")) {
          state.context = new Context(cx.indented, cx.column, cx.type, cx.info, null, cx.prev)
          return "operator"
        } else {
          return false
        }
      },

      "/": function(stream, state) {
        if (!stream.eat("*")) return false
        state.tokenize = tokenNestedComment(1)
        return state.tokenize(stream, state)
      }
    },
    modeProps: {closeBrackets: {pairs: '()[]{}""', triples: '"'}}
  });

  function tokenKotlinString(tripleString){
    return function (stream, state) {
      var escaped = false, next, end = false;
      while (!stream.eol()) {
        if (!tripleString && !escaped && stream.match('"') ) {end = true; break;}
        if (tripleString && stream.match('"""')) {end = true; break;}
        next = stream.next();
        if(!escaped && next == "$" && stream.match('{'))
          stream.skipTo("}");
        escaped = !escaped && next == "\\" && !tripleString;
      }
      if (end || !tripleString)
        state.tokenize = null;
      return "string";
    }
  }

  def("text/x-kotlin", {
    name: "clike",
    keywords: words(
      /*keywords*/
      "package as typealias class interface this super val operator " +
      "var fun for is in This throw return annotation " +
      "break continue object if else while do try when !in !is as? " +

      /*soft keywords*/
      "file import where by get set abstract enum open inner override private public internal " +
      "protected catch finally out final vararg reified dynamic companion constructor init " +
      "sealed field property receiver param sparam lateinit data inline noinline tailrec " +
      "external annotation crossinline const operator infix suspend actual expect setparam"
    ),
    types: words(
      /* package java.lang */
      "Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable " +
      "Compiler Double Exception Float Integer Long Math Number Object Package Pair Process " +
      "Runtime Runnable SecurityManager Short StackTraceElement StrictMath String " +
      "StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray " +
      "ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy " +
      "LazyThreadSafetyMode LongArray Nothing ShortArray Unit"
    ),
    intendSwitch: false,
    indentStatements: false,
    multiLineStrings: true,
    number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
    blockKeywords: words("catch class do else finally for if where try while enum"),
    defKeywords: words("class val var object interface fun"),
    atoms: words("true false null this"),
    hooks: {
      "@": function(stream) {
        stream.eatWhile(/[\w\$_]/);
        return "meta";
      },
      '*': function(_stream, state) {
        return state.prevToken == '.' ? 'variable' : 'operator';
      },
      '"': function(stream, state) {
        state.tokenize = tokenKotlinString(stream.match('""'));
        return state.tokenize(stream, state);
      },
      "/": function(stream, state) {
        if (!stream.eat("*")) return false;
        state.tokenize = tokenNestedComment(1);
        return state.tokenize(stream, state)
      },
      indent: function(state, ctx, textAfter, indentUnit) {
        var firstChar = textAfter && textAfter.charAt(0);
        if ((state.prevToken == "}" || state.prevToken == ")") && textAfter == "")
          return state.indented;
        if ((state.prevToken == "operator" && textAfter != "}" && state.context.type != "}") ||
          state.prevToken == "variable" && firstChar == "." ||
          (state.prevToken == "}" || state.prevToken == ")") && firstChar == ".")
          return indentUnit * 2 + ctx.indented;
        if (ctx.align && ctx.type == "}")
          return ctx.indented + (state.context.type == (textAfter || "").charAt(0) ? 0 : indentUnit);
      }
    },
    modeProps: {closeBrackets: {triples: '"'}}
  });

  def(["x-shader/x-vertex", "x-shader/x-fragment"], {
    name: "clike",
    keywords: words("sampler1D sampler2D sampler3D samplerCube " +
                    "sampler1DShadow sampler2DShadow " +
                    "const attribute uniform varying " +
                    "break continue discard return " +
                    "for while do if else struct " +
                    "in out inout"),
    types: words("float int bool void " +
                 "vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 " +
                 "mat2 mat3 mat4"),
    blockKeywords: words("for while do if else struct"),
    builtin: words("radians degrees sin cos tan asin acos atan " +
                    "pow exp log exp2 sqrt inversesqrt " +
                    "abs sign floor ceil fract mod min max clamp mix step smoothstep " +
                    "length distance dot cross normalize ftransform faceforward " +
                    "reflect refract matrixCompMult " +
                    "lessThan lessThanEqual greaterThan greaterThanEqual " +
                    "equal notEqual any all not " +
                    "texture1D texture1DProj texture1DLod texture1DProjLod " +
                    "texture2D texture2DProj texture2DLod texture2DProjLod " +
                    "texture3D texture3DProj texture3DLod texture3DProjLod " +
                    "textureCube textureCubeLod " +
                    "shadow1D shadow2D shadow1DProj shadow2DProj " +
                    "shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod " +
                    "dFdx dFdy fwidth " +
                    "noise1 noise2 noise3 noise4"),
    atoms: words("true false " +
                "gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex " +
                "gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 " +
                "gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 " +
                "gl_FogCoord gl_PointCoord " +
                "gl_Position gl_PointSize gl_ClipVertex " +
                "gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor " +
                "gl_TexCoord gl_FogFragCoord " +
                "gl_FragCoord gl_FrontFacing " +
                "gl_FragData gl_FragDepth " +
                "gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix " +
                "gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse " +
                "gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse " +
                "gl_TexureMatrixTranspose gl_ModelViewMatrixInverseTranspose " +
                "gl_ProjectionMatrixInverseTranspose " +
                "gl_ModelViewProjectionMatrixInverseTranspose " +
                "gl_TextureMatrixInverseTranspose " +
                "gl_NormalScale gl_DepthRange gl_ClipPlane " +
                "gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel " +
                "gl_FrontLightModelProduct gl_BackLightModelProduct " +
                "gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ " +
                "gl_FogParameters " +
                "gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords " +
                "gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats " +
                "gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits " +
                "gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits " +
                "gl_MaxDrawBuffers"),
    indentSwitch: false,
    hooks: {"#": cppHook},
    modeProps: {fold: ["brace", "include"]}
  });

  def("text/x-nesc", {
    name: "clike",
    keywords: words(cKeywords + " as atomic async call command component components configuration event generic " +
                    "implementation includes interface module new norace nx_struct nx_union post provides " +
                    "signal task uses abstract extends"),
    types: cTypes,
    blockKeywords: words(cBlockKeywords),
    atoms: words("null true false"),
    hooks: {"#": cppHook},
    modeProps: {fold: ["brace", "include"]}
  });

  def("text/x-objectivec", {
    name: "clike",
    keywords: words(cKeywords + " " + objCKeywords),
    types: objCTypes,
    builtin: words(objCBuiltins),
    blockKeywords: words(cBlockKeywords + " @synthesize @try @catch @finally @autoreleasepool @synchronized"),
    defKeywords: words(cDefKeywords + " @interface @implementation @protocol @class"),
    dontIndentStatements: /^@.*$/,
    typeFirstDefinitions: true,
    atoms: words("YES NO NULL Nil nil true false nullptr"),
    isReservedIdentifier: cIsReservedIdentifier,
    hooks: {
      "#": cppHook,
      "*": pointerHook,
    },
    modeProps: {fold: ["brace", "include"]}
  });

  def("text/x-objectivec++", {
    name: "clike",
    keywords: words(cKeywords + " " + objCKeywords + " " + cppKeywords),
    types: objCTypes,
    builtin: words(objCBuiltins),
    blockKeywords: words(cBlockKeywords + " @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch"),
    defKeywords: words(cDefKeywords + " @interface @implementation @protocol @class class namespace"),
    dontIndentStatements: /^@.*$|^template$/,
    typeFirstDefinitions: true,
    atoms: words("YES NO NULL Nil nil true false nullptr"),
    isReservedIdentifier: cIsReservedIdentifier,
    hooks: {
      "#": cppHook,
      "*": pointerHook,
      "u": cpp11StringHook,
      "U": cpp11StringHook,
      "L": cpp11StringHook,
      "R": cpp11StringHook,
      "0": cpp14Literal,
      "1": cpp14Literal,
      "2": cpp14Literal,
      "3": cpp14Literal,
      "4": cpp14Literal,
      "5": cpp14Literal,
      "6": cpp14Literal,
      "7": cpp14Literal,
      "8": cpp14Literal,
      "9": cpp14Literal,
      token: function(stream, state, style) {
        if (style == "variable" && stream.peek() == "(" &&
            (state.prevToken == ";" || state.prevToken == null ||
             state.prevToken == "}") &&
            cppLooksLikeConstructor(stream.current()))
          return "def";
      }
    },
    namespaceSeparator: "::",
    modeProps: {fold: ["brace", "include"]}
  });

  def("text/x-squirrel", {
    name: "clike",
    keywords: words("base break clone continue const default delete enum extends function in class" +
                    " foreach local resume return this throw typeof yield constructor instanceof static"),
    types: cTypes,
    blockKeywords: words("case catch class else for foreach if switch try while"),
    defKeywords: words("function local class"),
    typeFirstDefinitions: true,
    atoms: words("true false null"),
    hooks: {"#": cppHook},
    modeProps: {fold: ["brace", "include"]}
  });

  // Ceylon Strings need to deal with interpolation
  var stringTokenizer = null;
  function tokenCeylonString(type) {
    return function(stream, state) {
      var escaped = false, next, end = false;
      while (!stream.eol()) {
        if (!escaped && stream.match('"') &&
              (type == "single" || stream.match('""'))) {
          end = true;
          break;
        }
        if (!escaped && stream.match('``')) {
          stringTokenizer = tokenCeylonString(type);
          end = true;
          break;
        }
        next = stream.next();
        escaped = type == "single" && !escaped && next == "\\";
      }
      if (end)
          state.tokenize = null;
      return "string";
    }
  }

  def("text/x-ceylon", {
    name: "clike",
    keywords: words("abstracts alias assembly assert assign break case catch class continue dynamic else" +
                    " exists extends finally for function given if import in interface is let module new" +
                    " nonempty object of out outer package return satisfies super switch then this throw" +
                    " try value void while"),
    types: function(word) {
        // In Ceylon all identifiers that start with an uppercase are types
        var first = word.charAt(0);
        return (first === first.toUpperCase() && first !== first.toLowerCase());
    },
    blockKeywords: words("case catch class dynamic else finally for function if interface module new object switch try while"),
    defKeywords: words("class dynamic function interface module object package value"),
    builtin: words("abstract actual aliased annotation by default deprecated doc final formal late license" +
                   " native optional sealed see serializable shared suppressWarnings tagged throws variable"),
    isPunctuationChar: /[\[\]{}\(\),;\:\.`]/,
    isOperatorChar: /[+\-*&%=<>!?|^~:\/]/,
    numberStart: /[\d#$]/,
    number: /^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,
    multiLineStrings: true,
    typeFirstDefinitions: true,
    atoms: words("true false null larger smaller equal empty finished"),
    indentSwitch: false,
    styleDefs: false,
    hooks: {
      "@": function(stream) {
        stream.eatWhile(/[\w\$_]/);
        return "meta";
      },
      '"': function(stream, state) {
          state.tokenize = tokenCeylonString(stream.match('""') ? "triple" : "single");
          return state.tokenize(stream, state);
        },
      '`': function(stream, state) {
          if (!stringTokenizer || !stream.match('`')) return false;
          state.tokenize = stringTokenizer;
          stringTokenizer = null;
          return state.tokenize(stream, state);
        },
      "'": function(stream) {
        stream.eatWhile(/[\w\$_\xa1-\uffff]/);
        return "atom";
      },
      token: function(_stream, state, style) {
          if ((style == "variable" || style == "type") &&
              state.prevToken == ".") {
            return "variable-2";
          }
        }
    },
    modeProps: {
        fold: ["brace", "import"],
        closeBrackets: {triples: '"'}
    }
  });

});


// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  function wordRegexp(words) {
    return new RegExp("^((" + words.join(")|(") + "))\\b");
  }

  var wordOperators = wordRegexp(["and", "or", "not", "is"]);
  var commonKeywords = ["as", "assert", "break", "class", "continue",
                        "def", "del", "elif", "else", "except", "finally",
                        "for", "from", "global", "if", "import",
                        "lambda", "pass", "raise", "return",
                        "try", "while", "with", "yield", "in"];
  var commonBuiltins = ["abs", "all", "any", "bin", "bool", "bytearray", "callable", "chr",
                        "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod",
                        "enumerate", "eval", "filter", "float", "format", "frozenset",
                        "getattr", "globals", "hasattr", "hash", "help", "hex", "id",
                        "input", "int", "isinstance", "issubclass", "iter", "len",
                        "list", "locals", "map", "max", "memoryview", "min", "next",
                        "object", "oct", "open", "ord", "pow", "property", "range",
                        "repr", "reversed", "round", "set", "setattr", "slice",
                        "sorted", "staticmethod", "str", "sum", "super", "tuple",
                        "type", "vars", "zip", "__import__", "NotImplemented",
                        "Ellipsis", "__debug__"];
  CodeMirror.registerHelper("hintWords", "python", commonKeywords.concat(commonBuiltins));

  function top(state) {
    return state.scopes[state.scopes.length - 1];
  }

  CodeMirror.defineMode("python", function(conf, parserConf) {
    var ERRORCLASS = "error";

    var delimiters = parserConf.delimiters || parserConf.singleDelimiters || /^[\(\)\[\]\{\}@,:`=;\.\\]/;
    //               (Backwards-compatiblity with old, cumbersome config system)
    var operators = [parserConf.singleOperators, parserConf.doubleOperators, parserConf.doubleDelimiters, parserConf.tripleDelimiters,
                     parserConf.operators || /^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/]
    for (var i = 0; i < operators.length; i++) if (!operators[i]) operators.splice(i--, 1)

    var hangingIndent = parserConf.hangingIndent || conf.indentUnit;

    var myKeywords = commonKeywords, myBuiltins = commonBuiltins;
    if (parserConf.extra_keywords != undefined)
      myKeywords = myKeywords.concat(parserConf.extra_keywords);

    if (parserConf.extra_builtins != undefined)
      myBuiltins = myBuiltins.concat(parserConf.extra_builtins);

    var py3 = !(parserConf.version && Number(parserConf.version) < 3)
    if (py3) {
      // since http://legacy.python.org/dev/peps/pep-0465/ @ is also an operator
      var identifiers = parserConf.identifiers|| /^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;
      myKeywords = myKeywords.concat(["nonlocal", "False", "True", "None", "async", "await"]);
      myBuiltins = myBuiltins.concat(["ascii", "bytes", "exec", "print"]);
      var stringPrefixes = new RegExp("^(([rbuf]|(br)|(fr))?('{3}|\"{3}|['\"]))", "i");
    } else {
      var identifiers = parserConf.identifiers|| /^[_A-Za-z][_A-Za-z0-9]*/;
      myKeywords = myKeywords.concat(["exec", "print"]);
      myBuiltins = myBuiltins.concat(["apply", "basestring", "buffer", "cmp", "coerce", "execfile",
                                      "file", "intern", "long", "raw_input", "reduce", "reload",
                                      "unichr", "unicode", "xrange", "False", "True", "None"]);
      var stringPrefixes = new RegExp("^(([rubf]|(ur)|(br))?('{3}|\"{3}|['\"]))", "i");
    }
    var keywords = wordRegexp(myKeywords);
    var builtins = wordRegexp(myBuiltins);

    // tokenizers
    function tokenBase(stream, state) {
      var sol = stream.sol() && state.lastToken != "\\"
      if (sol) state.indent = stream.indentation()
      // Handle scope changes
      if (sol && top(state).type == "py") {
        var scopeOffset = top(state).offset;
        if (stream.eatSpace()) {
          var lineOffset = stream.indentation();
          if (lineOffset > scopeOffset)
            pushPyScope(state);
          else if (lineOffset < scopeOffset && dedent(stream, state) && stream.peek() != "#")
            state.errorToken = true;
          return null;
        } else {
          var style = tokenBaseInner(stream, state);
          if (scopeOffset > 0 && dedent(stream, state))
            style += " " + ERRORCLASS;
          return style;
        }
      }
      return tokenBaseInner(stream, state);
    }

    function tokenBaseInner(stream, state) {
      if (stream.eatSpace()) return null;

      // Handle Comments
      if (stream.match(/^#.*/)) return "comment";

      // Handle Number Literals
      if (stream.match(/^[0-9\.]/, false)) {
        var floatLiteral = false;
        // Floats
        if (stream.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)) { floatLiteral = true; }
        if (stream.match(/^[\d_]+\.\d*/)) { floatLiteral = true; }
        if (stream.match(/^\.\d+/)) { floatLiteral = true; }
        if (floatLiteral) {
          // Float literals may be "imaginary"
          stream.eat(/J/i);
          return "number";
        }
        // Integers
        var intLiteral = false;
        // Hex
        if (stream.match(/^0x[0-9a-f_]+/i)) intLiteral = true;
        // Binary
        if (stream.match(/^0b[01_]+/i)) intLiteral = true;
        // Octal
        if (stream.match(/^0o[0-7_]+/i)) intLiteral = true;
        // Decimal
        if (stream.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)) {
          // Decimal literals may be "imaginary"
          stream.eat(/J/i);
          // TODO - Can you have imaginary longs?
          intLiteral = true;
        }
        // Zero by itself with no other piece of number.
        if (stream.match(/^0(?![\dx])/i)) intLiteral = true;
        if (intLiteral) {
          // Integer literals may be "long"
          stream.eat(/L/i);
          return "number";
        }
      }

      // Handle Strings
      if (stream.match(stringPrefixes)) {
        var isFmtString = stream.current().toLowerCase().indexOf('f') !== -1;
        if (!isFmtString) {
          state.tokenize = tokenStringFactory(stream.current(), state.tokenize);
          return state.tokenize(stream, state);
        } else {
          state.tokenize = formatStringFactory(stream.current(), state.tokenize);
          return state.tokenize(stream, state);
        }
      }

      for (var i = 0; i < operators.length; i++)
        if (stream.match(operators[i])) return "operator"

      if (stream.match(delimiters)) return "punctuation";

      if (state.lastToken == "." && stream.match(identifiers))
        return "property";

      if (stream.match(keywords) || stream.match(wordOperators))
        return "keyword";

      if (stream.match(builtins))
        return "builtin";

      if (stream.match(/^(self|cls)\b/))
        return "variable-2";

      if (stream.match(identifiers)) {
        if (state.lastToken == "def" || state.lastToken == "class")
          return "def";
        return "variable";
      }

      // Handle non-detected items
      stream.next();
      return ERRORCLASS;
    }

    function formatStringFactory(delimiter, tokenOuter) {
      while ("rubf".indexOf(delimiter.charAt(0).toLowerCase()) >= 0)
        delimiter = delimiter.substr(1);

      var singleline = delimiter.length == 1;
      var OUTCLASS = "string";

      function tokenNestedExpr(depth) {
        return function(stream, state) {
          var inner = tokenBaseInner(stream, state)
          if (inner == "punctuation") {
            if (stream.current() == "{") {
              state.tokenize = tokenNestedExpr(depth + 1)
            } else if (stream.current() == "}") {
              if (depth > 1) state.tokenize = tokenNestedExpr(depth - 1)
              else state.tokenize = tokenString
            }
          }
          return inner
        }
      }

      function tokenString(stream, state) {
        while (!stream.eol()) {
          stream.eatWhile(/[^'"\{\}\\]/);
          if (stream.eat("\\")) {
            stream.next();
            if (singleline && stream.eol())
              return OUTCLASS;
          } else if (stream.match(delimiter)) {
            state.tokenize = tokenOuter;
            return OUTCLASS;
          } else if (stream.match('{{')) {
            // ignore {{ in f-str
            return OUTCLASS;
          } else if (stream.match('{', false)) {
            // switch to nested mode
            state.tokenize = tokenNestedExpr(0)
            if (stream.current()) return OUTCLASS;
            else return state.tokenize(stream, state)
          } else if (stream.match('}}')) {
            return OUTCLASS;
          } else if (stream.match('}')) {
            // single } in f-string is an error
            return ERRORCLASS;
          } else {
            stream.eat(/['"]/);
          }
        }
        if (singleline) {
          if (parserConf.singleLineStringErrors)
            return ERRORCLASS;
          else
            state.tokenize = tokenOuter;
        }
        return OUTCLASS;
      }
      tokenString.isString = true;
      return tokenString;
    }

    function tokenStringFactory(delimiter, tokenOuter) {
      while ("rubf".indexOf(delimiter.charAt(0).toLowerCase()) >= 0)
        delimiter = delimiter.substr(1);

      var singleline = delimiter.length == 1;
      var OUTCLASS = "string";

      function tokenString(stream, state) {
        while (!stream.eol()) {
          stream.eatWhile(/[^'"\\]/);
          if (stream.eat("\\")) {
            stream.next();
            if (singleline && stream.eol())
              return OUTCLASS;
          } else if (stream.match(delimiter)) {
            state.tokenize = tokenOuter;
            return OUTCLASS;
          } else {
            stream.eat(/['"]/);
          }
        }
        if (singleline) {
          if (parserConf.singleLineStringErrors)
            return ERRORCLASS;
          else
            state.tokenize = tokenOuter;
        }
        return OUTCLASS;
      }
      tokenString.isString = true;
      return tokenString;
    }

    function pushPyScope(state) {
      while (top(state).type != "py") state.scopes.pop()
      state.scopes.push({offset: top(state).offset + conf.indentUnit,
                         type: "py",
                         align: null})
    }

    function pushBracketScope(stream, state, type) {
      var align = stream.match(/^([\s\[\{\(]|#.*)*$/, false) ? null : stream.column() + 1
      state.scopes.push({offset: state.indent + hangingIndent,
                         type: type,
                         align: align})
    }

    function dedent(stream, state) {
      var indented = stream.indentation();
      while (state.scopes.length > 1 && top(state).offset > indented) {
        if (top(state).type != "py") return true;
        state.scopes.pop();
      }
      return top(state).offset != indented;
    }

    function tokenLexer(stream, state) {
      if (stream.sol()) state.beginningOfLine = true;

      var style = state.tokenize(stream, state);
      var current = stream.current();

      // Handle decorators
      if (state.beginningOfLine && current == "@")
        return stream.match(identifiers, false) ? "meta" : py3 ? "operator" : ERRORCLASS;

      if (/\S/.test(current)) state.beginningOfLine = false;

      if ((style == "variable" || style == "builtin")
          && state.lastToken == "meta")
        style = "meta";

      // Handle scope changes.
      if (current == "pass" || current == "return")
        state.dedent += 1;

      if (current == "lambda") state.lambda = true;
      if (current == ":" && !state.lambda && top(state).type == "py")
        pushPyScope(state);

      if (current.length == 1 && !/string|comment/.test(style)) {
        var delimiter_index = "[({".indexOf(current);
        if (delimiter_index != -1)
          pushBracketScope(stream, state, "])}".slice(delimiter_index, delimiter_index+1));

        delimiter_index = "])}".indexOf(current);
        if (delimiter_index != -1) {
          if (top(state).type == current) state.indent = state.scopes.pop().offset - hangingIndent
          else return ERRORCLASS;
        }
      }
      if (state.dedent > 0 && stream.eol() && top(state).type == "py") {
        if (state.scopes.length > 1) state.scopes.pop();
        state.dedent -= 1;
      }

      return style;
    }

    var external = {
      startState: function(basecolumn) {
        return {
          tokenize: tokenBase,
          scopes: [{offset: basecolumn || 0, type: "py", align: null}],
          indent: basecolumn || 0,
          lastToken: null,
          lambda: false,
          dedent: 0
        };
      },

      token: function(stream, state) {
        var addErr = state.errorToken;
        if (addErr) state.errorToken = false;
        var style = tokenLexer(stream, state);

        if (style && style != "comment")
          state.lastToken = (style == "keyword" || style == "punctuation") ? stream.current() : style;
        if (style == "punctuation") style = null;

        if (stream.eol() && state.lambda)
          state.lambda = false;
        return addErr ? style + " " + ERRORCLASS : style;
      },

      indent: function(state, textAfter) {
        if (state.tokenize != tokenBase)
          return state.tokenize.isString ? CodeMirror.Pass : 0;

        var scope = top(state), closing = scope.type == textAfter.charAt(0)
        if (scope.align != null)
          return scope.align - (closing ? 1 : 0)
        else
          return scope.offset - (closing ? hangingIndent : 0)
      },

      electricInput: /^\s*[\}\]\)]$/,
      closeBrackets: {triples: "'\""},
      lineComment: "#",
      fold: "indent"
    };
    return external;
  });

  CodeMirror.defineMIME("text/x-python", "python");

  var words = function(str) { return str.split(" "); };

  CodeMirror.defineMIME("text/x-cython", {
    name: "python",
    extra_keywords: words("by cdef cimport cpdef ctypedef enum except "+
                          "extern gil include nogil property public "+
                          "readonly struct union DEF IF ELIF ELSE")
  });

});


// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("../htmlmixed/htmlmixed"), require("../clike/clike"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "../htmlmixed/htmlmixed", "../clike/clike"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  function keywords(str) {
    var obj = {}, words = str.split(" ");
    for (var i = 0; i < words.length; ++i) obj[words[i]] = true;
    return obj;
  }

  // Helper for phpString
  function matchSequence(list, end, escapes) {
    if (list.length == 0) return phpString(end);
    return function (stream, state) {
      var patterns = list[0];
      for (var i = 0; i < patterns.length; i++) if (stream.match(patterns[i][0])) {
        state.tokenize = matchSequence(list.slice(1), end);
        return patterns[i][1];
      }
      state.tokenize = phpString(end, escapes);
      return "string";
    };
  }
  function phpString(closing, escapes) {
    return function(stream, state) { return phpString_(stream, state, closing, escapes); };
  }
  function phpString_(stream, state, closing, escapes) {
    // "Complex" syntax
    if (escapes !== false && stream.match("${", false) || stream.match("{$", false)) {
      state.tokenize = null;
      return "string";
    }

    // Simple syntax
    if (escapes !== false && stream.match(/^\$[a-zA-Z_][a-zA-Z0-9_]*/)) {
      // After the variable name there may appear array or object operator.
      if (stream.match("[", false)) {
        // Match array operator
        state.tokenize = matchSequence([
          [["[", null]],
          [[/\d[\w\.]*/, "number"],
           [/\$[a-zA-Z_][a-zA-Z0-9_]*/, "variable-2"],
           [/[\w\$]+/, "variable"]],
          [["]", null]]
        ], closing, escapes);
      }
      if (stream.match(/\-\>\w/, false)) {
        // Match object operator
        state.tokenize = matchSequence([
          [["->", null]],
          [[/[\w]+/, "variable"]]
        ], closing, escapes);
      }
      return "variable-2";
    }

    var escaped = false;
    // Normal string
    while (!stream.eol() &&
           (escaped || escapes === false ||
            (!stream.match("{$", false) &&
             !stream.match(/^(\$[a-zA-Z_][a-zA-Z0-9_]*|\$\{)/, false)))) {
      if (!escaped && stream.match(closing)) {
        state.tokenize = null;
        state.tokStack.pop(); state.tokStack.pop();
        break;
      }
      escaped = stream.next() == "\\" && !escaped;
    }
    return "string";
  }

  var phpKeywords = "abstract and array as break case catch class clone const continue declare default " +
    "do else elseif enddeclare endfor endforeach endif endswitch endwhile extends final " +
    "for foreach function global goto if implements interface instanceof namespace " +
    "new or private protected public static switch throw trait try use var while xor " +
    "die echo empty exit eval include include_once isset list require require_once return " +
    "print unset __halt_compiler self static parent yield insteadof finally";
  var phpAtoms = "true false null TRUE FALSE NULL __CLASS__ __DIR__ __FILE__ __LINE__ __METHOD__ __FUNCTION__ __NAMESPACE__ __TRAIT__";
  var phpBuiltin = "func_num_args func_get_arg func_get_args strlen strcmp strncmp strcasecmp strncasecmp each error_reporting define defined trigger_error user_error set_error_handler restore_error_handler get_declared_classes get_loaded_extensions extension_loaded get_extension_funcs debug_backtrace constant bin2hex hex2bin sleep usleep time mktime gmmktime strftime gmstrftime strtotime date gmdate getdate localtime checkdate flush wordwrap htmlspecialchars htmlentities html_entity_decode md5 md5_file crc32 getimagesize image_type_to_mime_type phpinfo phpversion phpcredits strnatcmp strnatcasecmp substr_count strspn strcspn strtok strtoupper strtolower strpos strrpos strrev hebrev hebrevc nl2br basename dirname pathinfo stripslashes stripcslashes strstr stristr strrchr str_shuffle str_word_count strcoll substr substr_replace quotemeta ucfirst ucwords strtr addslashes addcslashes rtrim str_replace str_repeat count_chars chunk_split trim ltrim strip_tags similar_text explode implode setlocale localeconv parse_str str_pad chop strchr sprintf printf vprintf vsprintf sscanf fscanf parse_url urlencode urldecode rawurlencode rawurldecode readlink linkinfo link unlink exec system escapeshellcmd escapeshellarg passthru shell_exec proc_open proc_close rand srand getrandmax mt_rand mt_srand mt_getrandmax base64_decode base64_encode abs ceil floor round is_finite is_nan is_infinite bindec hexdec octdec decbin decoct dechex base_convert number_format fmod ip2long long2ip getenv putenv getopt microtime gettimeofday getrusage uniqid quoted_printable_decode set_time_limit get_cfg_var magic_quotes_runtime set_magic_quotes_runtime get_magic_quotes_gpc get_magic_quotes_runtime import_request_variables error_log serialize unserialize memory_get_usage var_dump var_export debug_zval_dump print_r highlight_file show_source highlight_string ini_get ini_get_all ini_set ini_alter ini_restore get_include_path set_include_path restore_include_path setcookie header headers_sent connection_aborted connection_status ignore_user_abort parse_ini_file is_uploaded_file move_uploaded_file intval floatval doubleval strval gettype settype is_null is_resource is_bool is_long is_float is_int is_integer is_double is_real is_numeric is_string is_array is_object is_scalar ereg ereg_replace eregi eregi_replace split spliti join sql_regcase dl pclose popen readfile rewind rmdir umask fclose feof fgetc fgets fgetss fread fopen fpassthru ftruncate fstat fseek ftell fflush fwrite fputs mkdir rename copy tempnam tmpfile file file_get_contents file_put_contents stream_select stream_context_create stream_context_set_params stream_context_set_option stream_context_get_options stream_filter_prepend stream_filter_append fgetcsv flock get_meta_tags stream_set_write_buffer set_file_buffer set_socket_blocking stream_set_blocking socket_set_blocking stream_get_meta_data stream_register_wrapper stream_wrapper_register stream_set_timeout socket_set_timeout socket_get_status realpath fnmatch fsockopen pfsockopen pack unpack get_browser crypt opendir closedir chdir getcwd rewinddir readdir dir glob fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype file_exists is_writable is_writeable is_readable is_executable is_file is_dir is_link stat lstat chown touch clearstatcache mail ob_start ob_flush ob_clean ob_end_flush ob_end_clean ob_get_flush ob_get_clean ob_get_length ob_get_level ob_get_status ob_get_contents ob_implicit_flush ob_list_handlers ksort krsort natsort natcasesort asort arsort sort rsort usort uasort uksort shuffle array_walk count end prev next reset current key min max in_array array_search extract compact array_fill range array_multisort array_push array_pop array_shift array_unshift array_splice array_slice array_merge array_merge_recursive array_keys array_values array_count_values array_reverse array_reduce array_pad array_flip array_change_key_case array_rand array_unique array_intersect array_intersect_assoc array_diff array_diff_assoc array_sum array_filter array_map array_chunk array_key_exists array_intersect_key array_combine array_column pos sizeof key_exists assert assert_options version_compare ftok str_rot13 aggregate session_name session_module_name session_save_path session_id session_regenerate_id session_decode session_register session_unregister session_is_registered session_encode session_start session_destroy session_unset session_set_save_handler session_cache_limiter session_cache_expire session_set_cookie_params session_get_cookie_params session_write_close preg_match preg_match_all preg_replace preg_replace_callback preg_split preg_quote preg_grep overload ctype_alnum ctype_alpha ctype_cntrl ctype_digit ctype_lower ctype_graph ctype_print ctype_punct ctype_space ctype_upper ctype_xdigit virtual apache_request_headers apache_note apache_lookup_uri apache_child_terminate apache_setenv apache_response_headers apache_get_version getallheaders mysql_connect mysql_pconnect mysql_close mysql_select_db mysql_create_db mysql_drop_db mysql_query mysql_unbuffered_query mysql_db_query mysql_list_dbs mysql_list_tables mysql_list_fields mysql_list_processes mysql_error mysql_errno mysql_affected_rows mysql_insert_id mysql_result mysql_num_rows mysql_num_fields mysql_fetch_row mysql_fetch_array mysql_fetch_assoc mysql_fetch_object mysql_data_seek mysql_fetch_lengths mysql_fetch_field mysql_field_seek mysql_free_result mysql_field_name mysql_field_table mysql_field_len mysql_field_type mysql_field_flags mysql_escape_string mysql_real_escape_string mysql_stat mysql_thread_id mysql_client_encoding mysql_get_client_info mysql_get_host_info mysql_get_proto_info mysql_get_server_info mysql_info mysql mysql_fieldname mysql_fieldtable mysql_fieldlen mysql_fieldtype mysql_fieldflags mysql_selectdb mysql_createdb mysql_dropdb mysql_freeresult mysql_numfields mysql_numrows mysql_listdbs mysql_listtables mysql_listfields mysql_db_name mysql_dbname mysql_tablename mysql_table_name pg_connect pg_pconnect pg_close pg_connection_status pg_connection_busy pg_connection_reset pg_host pg_dbname pg_port pg_tty pg_options pg_ping pg_query pg_send_query pg_cancel_query pg_fetch_result pg_fetch_row pg_fetch_assoc pg_fetch_array pg_fetch_object pg_fetch_all pg_affected_rows pg_get_result pg_result_seek pg_result_status pg_free_result pg_last_oid pg_num_rows pg_num_fields pg_field_name pg_field_num pg_field_size pg_field_type pg_field_prtlen pg_field_is_null pg_get_notify pg_get_pid pg_result_error pg_last_error pg_last_notice pg_put_line pg_end_copy pg_copy_to pg_copy_from pg_trace pg_untrace pg_lo_create pg_lo_unlink pg_lo_open pg_lo_close pg_lo_read pg_lo_write pg_lo_read_all pg_lo_import pg_lo_export pg_lo_seek pg_lo_tell pg_escape_string pg_escape_bytea pg_unescape_bytea pg_client_encoding pg_set_client_encoding pg_meta_data pg_convert pg_insert pg_update pg_delete pg_select pg_exec pg_getlastoid pg_cmdtuples pg_errormessage pg_numrows pg_numfields pg_fieldname pg_fieldsize pg_fieldtype pg_fieldnum pg_fieldprtlen pg_fieldisnull pg_freeresult pg_result pg_loreadall pg_locreate pg_lounlink pg_loopen pg_loclose pg_loread pg_lowrite pg_loimport pg_loexport http_response_code get_declared_traits getimagesizefromstring socket_import_stream stream_set_chunk_size trait_exists header_register_callback class_uses session_status session_register_shutdown echo print global static exit array empty eval isset unset die include require include_once require_once json_decode json_encode json_last_error json_last_error_msg curl_close curl_copy_handle curl_errno curl_error curl_escape curl_exec curl_file_create curl_getinfo curl_init curl_multi_add_handle curl_multi_close curl_multi_exec curl_multi_getcontent curl_multi_info_read curl_multi_init curl_multi_remove_handle curl_multi_select curl_multi_setopt curl_multi_strerror curl_pause curl_reset curl_setopt_array curl_setopt curl_share_close curl_share_init curl_share_setopt curl_strerror curl_unescape curl_version mysqli_affected_rows mysqli_autocommit mysqli_change_user mysqli_character_set_name mysqli_close mysqli_commit mysqli_connect_errno mysqli_connect_error mysqli_connect mysqli_data_seek mysqli_debug mysqli_dump_debug_info mysqli_errno mysqli_error_list mysqli_error mysqli_fetch_all mysqli_fetch_array mysqli_fetch_assoc mysqli_fetch_field_direct mysqli_fetch_field mysqli_fetch_fields mysqli_fetch_lengths mysqli_fetch_object mysqli_fetch_row mysqli_field_count mysqli_field_seek mysqli_field_tell mysqli_free_result mysqli_get_charset mysqli_get_client_info mysqli_get_client_stats mysqli_get_client_version mysqli_get_connection_stats mysqli_get_host_info mysqli_get_proto_info mysqli_get_server_info mysqli_get_server_version mysqli_info mysqli_init mysqli_insert_id mysqli_kill mysqli_more_results mysqli_multi_query mysqli_next_result mysqli_num_fields mysqli_num_rows mysqli_options mysqli_ping mysqli_prepare mysqli_query mysqli_real_connect mysqli_real_escape_string mysqli_real_query mysqli_reap_async_query mysqli_refresh mysqli_rollback mysqli_select_db mysqli_set_charset mysqli_set_local_infile_default mysqli_set_local_infile_handler mysqli_sqlstate mysqli_ssl_set mysqli_stat mysqli_stmt_init mysqli_store_result mysqli_thread_id mysqli_thread_safe mysqli_use_result mysqli_warning_count";
  CodeMirror.registerHelper("hintWords", "php", [phpKeywords, phpAtoms, phpBuiltin].join(" ").split(" "));
  CodeMirror.registerHelper("wordChars", "php", /[\w$]/);

  var phpConfig = {
    name: "clike",
    helperType: "php",
    keywords: keywords(phpKeywords),
    blockKeywords: keywords("catch do else elseif for foreach if switch try while finally"),
    defKeywords: keywords("class function interface namespace trait"),
    atoms: keywords(phpAtoms),
    builtin: keywords(phpBuiltin),
    multiLineStrings: true,
    hooks: {
      "$": function(stream) {
        stream.eatWhile(/[\w\$_]/);
        return "variable-2";
      },
      "<": function(stream, state) {
        var before;
        if (before = stream.match(/<<\s*/)) {
          var quoted = stream.eat(/['"]/);
          stream.eatWhile(/[\w\.]/);
          var delim = stream.current().slice(before[0].length + (quoted ? 2 : 1));
          if (quoted) stream.eat(quoted);
          if (delim) {
            (state.tokStack || (state.tokStack = [])).push(delim, 0);
            state.tokenize = phpString(delim, quoted != "'");
            return "string";
          }
        }
        return false;
      },
      "#": function(stream) {
        while (!stream.eol() && !stream.match("?>", false)) stream.next();
        return "comment";
      },
      "/": function(stream) {
        if (stream.eat("/")) {
          while (!stream.eol() && !stream.match("?>", false)) stream.next();
          return "comment";
        }
        return false;
      },
      '"': function(_stream, state) {
        (state.tokStack || (state.tokStack = [])).push('"', 0);
        state.tokenize = phpString('"');
        return "string";
      },
      "{": function(_stream, state) {
        if (state.tokStack && state.tokStack.length)
          state.tokStack[state.tokStack.length - 1]++;
        return false;
      },
      "}": function(_stream, state) {
        if (state.tokStack && state.tokStack.length > 0 &&
            !--state.tokStack[state.tokStack.length - 1]) {
          state.tokenize = phpString(state.tokStack[state.tokStack.length - 2]);
        }
        return false;
      }
    }
  };

  CodeMirror.defineMode("php", function(config, parserConfig) {
    var htmlMode = CodeMirror.getMode(config, (parserConfig && parserConfig.htmlMode) || "text/html");
    var phpMode = CodeMirror.getMode(config, phpConfig);

    function dispatch(stream, state) {
      var isPHP = state.curMode == phpMode;
      if (stream.sol() && state.pending && state.pending != '"' && state.pending != "'") state.pending = null;
      if (!isPHP) {
        if (stream.match(/^<\?\w*/)) {
          state.curMode = phpMode;
          if (!state.php) state.php = CodeMirror.startState(phpMode, htmlMode.indent(state.html, "", ""))
          state.curState = state.php;
          return "meta";
        }
        if (state.pending == '"' || state.pending == "'") {
          while (!stream.eol() && stream.next() != state.pending) {}
          var style = "string";
        } else if (state.pending && stream.pos < state.pending.end) {
          stream.pos = state.pending.end;
          var style = state.pending.style;
        } else {
          var style = htmlMode.token(stream, state.curState);
        }
        if (state.pending) state.pending = null;
        var cur = stream.current(), openPHP = cur.search(/<\?/), m;
        if (openPHP != -1) {
          if (style == "string" && (m = cur.match(/[\'\"]$/)) && !/\?>/.test(cur)) state.pending = m[0];
          else state.pending = {end: stream.pos, style: style};
          stream.backUp(cur.length - openPHP);
        }
        return style;
      } else if (isPHP && state.php.tokenize == null && stream.match("?>")) {
        state.curMode = htmlMode;
        state.curState = state.html;
        if (!state.php.context.prev) state.php = null;
        return "meta";
      } else {
        return phpMode.token(stream, state.curState);
      }
    }

    return {
      startState: function() {
        var html = CodeMirror.startState(htmlMode)
        var php = parserConfig.startOpen ? CodeMirror.startState(phpMode) : null
        return {html: html,
                php: php,
                curMode: parserConfig.startOpen ? phpMode : htmlMode,
                curState: parserConfig.startOpen ? php : html,
                pending: null};
      },

      copyState: function(state) {
        var html = state.html, htmlNew = CodeMirror.copyState(htmlMode, html),
            php = state.php, phpNew = php && CodeMirror.copyState(phpMode, php), cur;
        if (state.curMode == htmlMode) cur = htmlNew;
        else cur = phpNew;
        return {html: htmlNew, php: phpNew, curMode: state.curMode, curState: cur,
                pending: state.pending};
      },

      token: dispatch,

      indent: function(state, textAfter, line) {
        if ((state.curMode != phpMode && /^\s*<\//.test(textAfter)) ||
            (state.curMode == phpMode && /^\?>/.test(textAfter)))
          return htmlMode.indent(state.html, textAfter, line);
        return state.curMode.indent(state.curState, textAfter, line);
      },

      blockCommentStart: "/*",
      blockCommentEnd: "*/",
      lineComment: "//",

      innerMode: function(state) { return {state: state.curState, mode: state.curMode}; }
    };
  }, "htmlmixed", "clike");

  CodeMirror.defineMIME("application/x-httpd-php", "php");
  CodeMirror.defineMIME("application/x-httpd-php-open", {name: "php", startOpen: true});
  CodeMirror.defineMIME("text/x-php", phpConfig);
});

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("../xml/xml"), require("../meta"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "../xml/xml", "../meta"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("markdown", function(cmCfg, modeCfg) {

  var htmlMode = CodeMirror.getMode(cmCfg, "text/html");
  var htmlModeMissing = htmlMode.name == "null"

  function getMode(name) {
    if (CodeMirror.findModeByName) {
      var found = CodeMirror.findModeByName(name);
      if (found) name = found.mime || found.mimes[0];
    }
    var mode = CodeMirror.getMode(cmCfg, name);
    return mode.name == "null" ? null : mode;
  }

  // Should characters that affect highlighting be highlighted separate?
  // Does not include characters that will be output (such as `1.` and `-` for lists)
  if (modeCfg.highlightFormatting === undefined)
    modeCfg.highlightFormatting = false;

  // Maximum number of nested blockquotes. Set to 0 for infinite nesting.
  // Excess `>` will emit `error` token.
  if (modeCfg.maxBlockquoteDepth === undefined)
    modeCfg.maxBlockquoteDepth = 0;

  // Turn on task lists? ("- [ ] " and "- [x] ")
  if (modeCfg.taskLists === undefined) modeCfg.taskLists = false;

  // Turn on strikethrough syntax
  if (modeCfg.strikethrough === undefined)
    modeCfg.strikethrough = false;

  if (modeCfg.emoji === undefined)
    modeCfg.emoji = false;

  if (modeCfg.fencedCodeBlockHighlighting === undefined)
    modeCfg.fencedCodeBlockHighlighting = true;

  if (modeCfg.xml === undefined)
    modeCfg.xml = true;

  // Allow token types to be overridden by user-provided token types.
  if (modeCfg.tokenTypeOverrides === undefined)
    modeCfg.tokenTypeOverrides = {};

  var tokenTypes = {
    header: "header",
    code: "comment",
    quote: "quote",
    list1: "variable-2",
    list2: "variable-3",
    list3: "keyword",
    hr: "hr",
    image: "image",
    imageAltText: "image-alt-text",
    imageMarker: "image-marker",
    formatting: "formatting",
    linkInline: "link",
    linkEmail: "link",
    linkText: "link",
    linkHref: "string",
    em: "em",
    strong: "strong",
    strikethrough: "strikethrough",
    emoji: "builtin"
  };

  for (var tokenType in tokenTypes) {
    if (tokenTypes.hasOwnProperty(tokenType) && modeCfg.tokenTypeOverrides[tokenType]) {
      tokenTypes[tokenType] = modeCfg.tokenTypeOverrides[tokenType];
    }
  }

  var hrRE = /^([*\-_])(?:\s*\1){2,}\s*$/
  ,   listRE = /^(?:[*\-+]|^[0-9]+([.)]))\s+/
  ,   taskListRE = /^\[(x| )\](?=\s)/i // Must follow listRE
  ,   atxHeaderRE = modeCfg.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/
  ,   setextHeaderRE = /^ *(?:\={1,}|-{1,})\s*$/
  ,   textRE = /^[^#!\[\]*_\\<>` "'(~:]+/
  ,   fencedCodeRE = /^(~~~+|```+)[ \t]*([\w+#-]*)[^\n`]*$/
  ,   linkDefRE = /^\s*\[[^\]]+?\]:.*$/ // naive link-definition
  ,   punctuation = /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/
  ,   expandedTab = "    " // CommonMark specifies tab as 4 spaces

  function switchInline(stream, state, f) {
    state.f = state.inline = f;
    return f(stream, state);
  }

  function switchBlock(stream, state, f) {
    state.f = state.block = f;
    return f(stream, state);
  }

  function lineIsEmpty(line) {
    return !line || !/\S/.test(line.string)
  }

  // Blocks

  function blankLine(state) {
    // Reset linkTitle state
    state.linkTitle = false;
    state.linkHref = false;
    state.linkText = false;
    // Reset EM state
    state.em = false;
    // Reset STRONG state
    state.strong = false;
    // Reset strikethrough state
    state.strikethrough = false;
    // Reset state.quote
    state.quote = 0;
    // Reset state.indentedCode
    state.indentedCode = false;
    if (state.f == htmlBlock) {
      var exit = htmlModeMissing
      if (!exit) {
        var inner = CodeMirror.innerMode(htmlMode, state.htmlState)
        exit = inner.mode.name == "xml" && inner.state.tagStart === null &&
          (!inner.state.context && inner.state.tokenize.isInText)
      }
      if (exit) {
        state.f = inlineNormal;
        state.block = blockNormal;
        state.htmlState = null;
      }
    }
    // Reset state.trailingSpace
    state.trailingSpace = 0;
    state.trailingSpaceNewLine = false;
    // Mark this line as blank
    state.prevLine = state.thisLine
    state.thisLine = {stream: null}
    return null;
  }

  function blockNormal(stream, state) {
    var firstTokenOnLine = stream.column() === state.indentation;
    var prevLineLineIsEmpty = lineIsEmpty(state.prevLine.stream);
    var prevLineIsIndentedCode = state.indentedCode;
    var prevLineIsHr = state.prevLine.hr;
    var prevLineIsList = state.list !== false;
    var maxNonCodeIndentation = (state.listStack[state.listStack.length - 1] || 0) + 3;

    state.indentedCode = false;

    var lineIndentation = state.indentation;
    // compute once per line (on first token)
    if (state.indentationDiff === null) {
      state.indentationDiff = state.indentation;
      if (prevLineIsList) {
        state.list = null;
        // While this list item's marker's indentation is less than the deepest
        //  list item's content's indentation,pop the deepest list item
        //  indentation off the stack, and update block indentation state
        while (lineIndentation < state.listStack[state.listStack.length - 1]) {
          state.listStack.pop();
          if (state.listStack.length) {
            state.indentation = state.listStack[state.listStack.length - 1];
          // less than the first list's indent -> the line is no longer a list
          } else {
            state.list = false;
          }
        }
        if (state.list !== false) {
          state.indentationDiff = lineIndentation - state.listStack[state.listStack.length - 1]
        }
      }
    }

    // not comprehensive (currently only for setext detection purposes)
    var allowsInlineContinuation = (
        !prevLineLineIsEmpty && !prevLineIsHr && !state.prevLine.header &&
        (!prevLineIsList || !prevLineIsIndentedCode) &&
        !state.prevLine.fencedCodeEnd
    );

    var isHr = (state.list === false || prevLineIsHr || prevLineLineIsEmpty) &&
      state.indentation <= maxNonCodeIndentation && stream.match(hrRE);

    var match = null;
    if (state.indentationDiff >= 4 && (prevLineIsIndentedCode || state.prevLine.fencedCodeEnd ||
         state.prevLine.header || prevLineLineIsEmpty)) {
      stream.skipToEnd();
      state.indentedCode = true;
      return tokenTypes.code;
    } else if (stream.eatSpace()) {
      return null;
    } else if (firstTokenOnLine && state.indentation <= maxNonCodeIndentation && (match = stream.match(atxHeaderRE)) && match[1].length <= 6) {
      state.quote = 0;
      state.header = match[1].length;
      state.thisLine.header = true;
      if (modeCfg.highlightFormatting) state.formatting = "header";
      state.f = state.inline;
      return getType(state);
    } else if (state.indentation <= maxNonCodeIndentation && stream.eat('>')) {
      state.quote = firstTokenOnLine ? 1 : state.quote + 1;
      if (modeCfg.highlightFormatting) state.formatting = "quote";
      stream.eatSpace();
      return getType(state);
    } else if (!isHr && !state.setext && firstTokenOnLine && state.indentation <= maxNonCodeIndentation && (match = stream.match(listRE))) {
      var listType = match[1] ? "ol" : "ul";

      state.indentation = lineIndentation + stream.current().length;
      state.list = true;
      state.quote = 0;

      // Add this list item's content's indentation to the stack
      state.listStack.push(state.indentation);
      // Reset inline styles which shouldn't propagate aross list items
      state.em = false;
      state.strong = false;
      state.code = false;
      state.strikethrough = false;

      if (modeCfg.taskLists && stream.match(taskListRE, false)) {
        state.taskList = true;
      }
      state.f = state.inline;
      if (modeCfg.highlightFormatting) state.formatting = ["list", "list-" + listType];
      return getType(state);
    } else if (firstTokenOnLine && state.indentation <= maxNonCodeIndentation && (match = stream.match(fencedCodeRE, true))) {
      state.quote = 0;
      state.fencedEndRE = new RegExp(match[1] + "+ *$");
      // try switching mode
      state.localMode = modeCfg.fencedCodeBlockHighlighting && getMode(match[2]);
      if (state.localMode) state.localState = CodeMirror.startState(state.localMode);
      state.f = state.block = local;
      if (modeCfg.highlightFormatting) state.formatting = "code-block";
      state.code = -1
      return getType(state);
    // SETEXT has lowest block-scope precedence after HR, so check it after
    //  the others (code, blockquote, list...)
    } else if (
      // if setext set, indicates line after ---/===
      state.setext || (
        // line before ---/===
        (!allowsInlineContinuation || !prevLineIsList) && !state.quote && state.list === false &&
        !state.code && !isHr && !linkDefRE.test(stream.string) &&
        (match = stream.lookAhead(1)) && (match = match.match(setextHeaderRE))
      )
    ) {
      if ( !state.setext ) {
        state.header = match[0].charAt(0) == '=' ? 1 : 2;
        state.setext = state.header;
      } else {
        state.header = state.setext;
        // has no effect on type so we can reset it now
        state.setext = 0;
        stream.skipToEnd();
        if (modeCfg.highlightFormatting) state.formatting = "header";
      }
      state.thisLine.header = true;
      state.f = state.inline;
      return getType(state);
    } else if (isHr) {
      stream.skipToEnd();
      state.hr = true;
      state.thisLine.hr = true;
      return tokenTypes.hr;
    } else if (stream.peek() === '[') {
      return switchInline(stream, state, footnoteLink);
    }

    return switchInline(stream, state, state.inline);
  }

  function htmlBlock(stream, state) {
    var style = htmlMode.token(stream, state.htmlState);
    if (!htmlModeMissing) {
      var inner = CodeMirror.innerMode(htmlMode, state.htmlState)
      if ((inner.mode.name == "xml" && inner.state.tagStart === null &&
           (!inner.state.context && inner.state.tokenize.isInText)) ||
          (state.md_inside && stream.current().indexOf(">") > -1)) {
        state.f = inlineNormal;
        state.block = blockNormal;
        state.htmlState = null;
      }
    }
    return style;
  }

  function local(stream, state) {
    var currListInd = state.listStack[state.listStack.length - 1] || 0;
    var hasExitedList = state.indentation < currListInd;
    var maxFencedEndInd = currListInd + 3;
    if (state.fencedEndRE && state.indentation <= maxFencedEndInd && (hasExitedList || stream.match(state.fencedEndRE))) {
      if (modeCfg.highlightFormatting) state.formatting = "code-block";
      var returnType;
      if (!hasExitedList) returnType = getType(state)
      state.localMode = state.localState = null;
      state.block = blockNormal;
      state.f = inlineNormal;
      state.fencedEndRE = null;
      state.code = 0
      state.thisLine.fencedCodeEnd = true;
      if (hasExitedList) return switchBlock(stream, state, state.block);
      return returnType;
    } else if (state.localMode) {
      return state.localMode.token(stream, state.localState);
    } else {
      stream.skipToEnd();
      return tokenTypes.code;
    }
  }

  // Inline
  function getType(state) {
    var styles = [];

    if (state.formatting) {
      styles.push(tokenTypes.formatting);

      if (typeof state.formatting === "string") state.formatting = [state.formatting];

      for (var i = 0; i < state.formatting.length; i++) {
        styles.push(tokenTypes.formatting + "-" + state.formatting[i]);

        if (state.formatting[i] === "header") {
          styles.push(tokenTypes.formatting + "-" + state.formatting[i] + "-" + state.header);
        }

        // Add `formatting-quote` and `formatting-quote-#` for blockquotes
        // Add `error` instead if the maximum blockquote nesting depth is passed
        if (state.formatting[i] === "quote") {
          if (!modeCfg.maxBlockquoteDepth || modeCfg.maxBlockquoteDepth >= state.quote) {
            styles.push(tokenTypes.formatting + "-" + state.formatting[i] + "-" + state.quote);
          } else {
            styles.push("error");
          }
        }
      }
    }

    if (state.taskOpen) {
      styles.push("meta");
      return styles.length ? styles.join(' ') : null;
    }
    if (state.taskClosed) {
      styles.push("property");
      return styles.length ? styles.join(' ') : null;
    }

    if (state.linkHref) {
      styles.push(tokenTypes.linkHref, "url");
    } else { // Only apply inline styles to non-url text
      if (state.strong) { styles.push(tokenTypes.strong); }
      if (state.em) { styles.push(tokenTypes.em); }
      if (state.strikethrough) { styles.push(tokenTypes.strikethrough); }
      if (state.emoji) { styles.push(tokenTypes.emoji); }
      if (state.linkText) { styles.push(tokenTypes.linkText); }
      if (state.code) { styles.push(tokenTypes.code); }
      if (state.image) { styles.push(tokenTypes.image); }
      if (state.imageAltText) { styles.push(tokenTypes.imageAltText, "link"); }
      if (state.imageMarker) { styles.push(tokenTypes.imageMarker); }
    }

    if (state.header) { styles.push(tokenTypes.header, tokenTypes.header + "-" + state.header); }

    if (state.quote) {
      styles.push(tokenTypes.quote);

      // Add `quote-#` where the maximum for `#` is modeCfg.maxBlockquoteDepth
      if (!modeCfg.maxBlockquoteDepth || modeCfg.maxBlockquoteDepth >= state.quote) {
        styles.push(tokenTypes.quote + "-" + state.quote);
      } else {
        styles.push(tokenTypes.quote + "-" + modeCfg.maxBlockquoteDepth);
      }
    }

    if (state.list !== false) {
      var listMod = (state.listStack.length - 1) % 3;
      if (!listMod) {
        styles.push(tokenTypes.list1);
      } else if (listMod === 1) {
        styles.push(tokenTypes.list2);
      } else {
        styles.push(tokenTypes.list3);
      }
    }

    if (state.trailingSpaceNewLine) {
      styles.push("trailing-space-new-line");
    } else if (state.trailingSpace) {
      styles.push("trailing-space-" + (state.trailingSpace % 2 ? "a" : "b"));
    }

    return styles.length ? styles.join(' ') : null;
  }

  function handleText(stream, state) {
    if (stream.match(textRE, true)) {
      return getType(state);
    }
    return undefined;
  }

  function inlineNormal(stream, state) {
    var style = state.text(stream, state);
    if (typeof style !== 'undefined')
      return style;

    if (state.list) { // List marker (*, +, -, 1., etc)
      state.list = null;
      return getType(state);
    }

    if (state.taskList) {
      var taskOpen = stream.match(taskListRE, true)[1] === " ";
      if (taskOpen) state.taskOpen = true;
      else state.taskClosed = true;
      if (modeCfg.highlightFormatting) state.formatting = "task";
      state.taskList = false;
      return getType(state);
    }

    state.taskOpen = false;
    state.taskClosed = false;

    if (state.header && stream.match(/^#+$/, true)) {
      if (modeCfg.highlightFormatting) state.formatting = "header";
      return getType(state);
    }

    var ch = stream.next();

    // Matches link titles present on next line
    if (state.linkTitle) {
      state.linkTitle = false;
      var matchCh = ch;
      if (ch === '(') {
        matchCh = ')';
      }
      matchCh = (matchCh+'').replace(/([.?*+^\[\]\\(){}|-])/g, "\\$1");
      var regex = '^\\s*(?:[^' + matchCh + '\\\\]+|\\\\\\\\|\\\\.)' + matchCh;
      if (stream.match(new RegExp(regex), true)) {
        return tokenTypes.linkHref;
      }
    }

    // If this block is changed, it may need to be updated in GFM mode
    if (ch === '`') {
      var previousFormatting = state.formatting;
      if (modeCfg.highlightFormatting) state.formatting = "code";
      stream.eatWhile('`');
      var count = stream.current().length
      if (state.code == 0 && (!state.quote || count == 1)) {
        state.code = count
        return getType(state)
      } else if (count == state.code) { // Must be exact
        var t = getType(state)
        state.code = 0
        return t
      } else {
        state.formatting = previousFormatting
        return getType(state)
      }
    } else if (state.code) {
      return getType(state);
    }

    if (ch === '\\') {
      stream.next();
      if (modeCfg.highlightFormatting) {
        var type = getType(state);
        var formattingEscape = tokenTypes.formatting + "-escape";
        return type ? type + " " + formattingEscape : formattingEscape;
      }
    }

    if (ch === '!' && stream.match(/\[[^\]]*\] ?(?:\(|\[)/, false)) {
      state.imageMarker = true;
      state.image = true;
      if (modeCfg.highlightFormatting) state.formatting = "image";
      return getType(state);
    }

    if (ch === '[' && state.imageMarker && stream.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, false)) {
      state.imageMarker = false;
      state.imageAltText = true
      if (modeCfg.highlightFormatting) state.formatting = "image";
      return getType(state);
    }

    if (ch === ']' && state.imageAltText) {
      if (modeCfg.highlightFormatting) state.formatting = "image";
      var type = getType(state);
      state.imageAltText = false;
      state.image = false;
      state.inline = state.f = linkHref;
      return type;
    }

    if (ch === '[' && !state.image) {
      if (state.linkText && stream.match(/^.*?\]/)) return getType(state)
      state.linkText = true;
      if (modeCfg.highlightFormatting) state.formatting = "link";
      return getType(state);
    }

    if (ch === ']' && state.linkText) {
      if (modeCfg.highlightFormatting) state.formatting = "link";
      var type = getType(state);
      state.linkText = false;
      state.inline = state.f = stream.match(/\(.*?\)| ?\[.*?\]/, false) ? linkHref : inlineNormal
      return type;
    }

    if (ch === '<' && stream.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, false)) {
      state.f = state.inline = linkInline;
      if (modeCfg.highlightFormatting) state.formatting = "link";
      var type = getType(state);
      if (type){
        type += " ";
      } else {
        type = "";
      }
      return type + tokenTypes.linkInline;
    }

    if (ch === '<' && stream.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, false)) {
      state.f = state.inline = linkInline;
      if (modeCfg.highlightFormatting) state.formatting = "link";
      var type = getType(state);
      if (type){
        type += " ";
      } else {
        type = "";
      }
      return type + tokenTypes.linkEmail;
    }

    if (modeCfg.xml && ch === '<' && stream.match(/^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i, false)) {
      var end = stream.string.indexOf(">", stream.pos);
      if (end != -1) {
        var atts = stream.string.substring(stream.start, end);
        if (/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(atts)) state.md_inside = true;
      }
      stream.backUp(1);
      state.htmlState = CodeMirror.startState(htmlMode);
      return switchBlock(stream, state, htmlBlock);
    }

    if (modeCfg.xml && ch === '<' && stream.match(/^\/\w*?>/)) {
      state.md_inside = false;
      return "tag";
    } else if (ch === "*" || ch === "_") {
      var len = 1, before = stream.pos == 1 ? " " : stream.string.charAt(stream.pos - 2)
      while (len < 3 && stream.eat(ch)) len++
      var after = stream.peek() || " "
      // See http://spec.commonmark.org/0.27/#emphasis-and-strong-emphasis
      var leftFlanking = !/\s/.test(after) && (!punctuation.test(after) || /\s/.test(before) || punctuation.test(before))
      var rightFlanking = !/\s/.test(before) && (!punctuation.test(before) || /\s/.test(after) || punctuation.test(after))
      var setEm = null, setStrong = null
      if (len % 2) { // Em
        if (!state.em && leftFlanking && (ch === "*" || !rightFlanking || punctuation.test(before)))
          setEm = true
        else if (state.em == ch && rightFlanking && (ch === "*" || !leftFlanking || punctuation.test(after)))
          setEm = false
      }
      if (len > 1) { // Strong
        if (!state.strong && leftFlanking && (ch === "*" || !rightFlanking || punctuation.test(before)))
          setStrong = true
        else if (state.strong == ch && rightFlanking && (ch === "*" || !leftFlanking || punctuation.test(after)))
          setStrong = false
      }
      if (setStrong != null || setEm != null) {
        if (modeCfg.highlightFormatting) state.formatting = setEm == null ? "strong" : setStrong == null ? "em" : "strong em"
        if (setEm === true) state.em = ch
        if (setStrong === true) state.strong = ch
        var t = getType(state)
        if (setEm === false) state.em = false
        if (setStrong === false) state.strong = false
        return t
      }
    } else if (ch === ' ') {
      if (stream.eat('*') || stream.eat('_')) { // Probably surrounded by spaces
        if (stream.peek() === ' ') { // Surrounded by spaces, ignore
          return getType(state);
        } else { // Not surrounded by spaces, back up pointer
          stream.backUp(1);
        }
      }
    }

    if (modeCfg.strikethrough) {
      if (ch === '~' && stream.eatWhile(ch)) {
        if (state.strikethrough) {// Remove strikethrough
          if (modeCfg.highlightFormatting) state.formatting = "strikethrough";
          var t = getType(state);
          state.strikethrough = false;
          return t;
        } else if (stream.match(/^[^\s]/, false)) {// Add strikethrough
          state.strikethrough = true;
          if (modeCfg.highlightFormatting) state.formatting = "strikethrough";
          return getType(state);
        }
      } else if (ch === ' ') {
        if (stream.match(/^~~/, true)) { // Probably surrounded by space
          if (stream.peek() === ' ') { // Surrounded by spaces, ignore
            return getType(state);
          } else { // Not surrounded by spaces, back up pointer
            stream.backUp(2);
          }
        }
      }
    }

    if (modeCfg.emoji && ch === ":" && stream.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)) {
      state.emoji = true;
      if (modeCfg.highlightFormatting) state.formatting = "emoji";
      var retType = getType(state);
      state.emoji = false;
      return retType;
    }

    if (ch === ' ') {
      if (stream.match(/^ +$/, false)) {
        state.trailingSpace++;
      } else if (state.trailingSpace) {
        state.trailingSpaceNewLine = true;
      }
    }

    return getType(state);
  }

  function linkInline(stream, state) {
    var ch = stream.next();

    if (ch === ">") {
      state.f = state.inline = inlineNormal;
      if (modeCfg.highlightFormatting) state.formatting = "link";
      var type = getType(state);
      if (type){
        type += " ";
      } else {
        type = "";
      }
      return type + tokenTypes.linkInline;
    }

    stream.match(/^[^>]+/, true);

    return tokenTypes.linkInline;
  }

  function linkHref(stream, state) {
    // Check if space, and return NULL if so (to avoid marking the space)
    if(stream.eatSpace()){
      return null;
    }
    var ch = stream.next();
    if (ch === '(' || ch === '[') {
      state.f = state.inline = getLinkHrefInside(ch === "(" ? ")" : "]");
      if (modeCfg.highlightFormatting) state.formatting = "link-string";
      state.linkHref = true;
      return getType(state);
    }
    return 'error';
  }

  var linkRE = {
    ")": /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,
    "]": /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/
  }

  function getLinkHrefInside(endChar) {
    return function(stream, state) {
      var ch = stream.next();

      if (ch === endChar) {
        state.f = state.inline = inlineNormal;
        if (modeCfg.highlightFormatting) state.formatting = "link-string";
        var returnState = getType(state);
        state.linkHref = false;
        return returnState;
      }

      stream.match(linkRE[endChar])
      state.linkHref = true;
      return getType(state);
    };
  }

  function footnoteLink(stream, state) {
    if (stream.match(/^([^\]\\]|\\.)*\]:/, false)) {
      state.f = footnoteLinkInside;
      stream.next(); // Consume [
      if (modeCfg.highlightFormatting) state.formatting = "link";
      state.linkText = true;
      return getType(state);
    }
    return switchInline(stream, state, inlineNormal);
  }

  function footnoteLinkInside(stream, state) {
    if (stream.match(/^\]:/, true)) {
      state.f = state.inline = footnoteUrl;
      if (modeCfg.highlightFormatting) state.formatting = "link";
      var returnType = getType(state);
      state.linkText = false;
      return returnType;
    }

    stream.match(/^([^\]\\]|\\.)+/, true);

    return tokenTypes.linkText;
  }

  function footnoteUrl(stream, state) {
    // Check if space, and return NULL if so (to avoid marking the space)
    if(stream.eatSpace()){
      return null;
    }
    // Match URL
    stream.match(/^[^\s]+/, true);
    // Check for link title
    if (stream.peek() === undefined) { // End of line, set flag to check next line
      state.linkTitle = true;
    } else { // More content on line, check if link title
      stream.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/, true);
    }
    state.f = state.inline = inlineNormal;
    return tokenTypes.linkHref + " url";
  }

  var mode = {
    startState: function() {
      return {
        f: blockNormal,

        prevLine: {stream: null},
        thisLine: {stream: null},

        block: blockNormal,
        htmlState: null,
        indentation: 0,

        inline: inlineNormal,
        text: handleText,

        formatting: false,
        linkText: false,
        linkHref: false,
        linkTitle: false,
        code: 0,
        em: false,
        strong: false,
        header: 0,
        setext: 0,
        hr: false,
        taskList: false,
        list: false,
        listStack: [],
        quote: 0,
        trailingSpace: 0,
        trailingSpaceNewLine: false,
        strikethrough: false,
        emoji: false,
        fencedEndRE: null
      };
    },

    copyState: function(s) {
      return {
        f: s.f,

        prevLine: s.prevLine,
        thisLine: s.thisLine,

        block: s.block,
        htmlState: s.htmlState && CodeMirror.copyState(htmlMode, s.htmlState),
        indentation: s.indentation,

        localMode: s.localMode,
        localState: s.localMode ? CodeMirror.copyState(s.localMode, s.localState) : null,

        inline: s.inline,
        text: s.text,
        formatting: false,
        linkText: s.linkText,
        linkTitle: s.linkTitle,
        linkHref: s.linkHref,
        code: s.code,
        em: s.em,
        strong: s.strong,
        strikethrough: s.strikethrough,
        emoji: s.emoji,
        header: s.header,
        setext: s.setext,
        hr: s.hr,
        taskList: s.taskList,
        list: s.list,
        listStack: s.listStack.slice(0),
        quote: s.quote,
        indentedCode: s.indentedCode,
        trailingSpace: s.trailingSpace,
        trailingSpaceNewLine: s.trailingSpaceNewLine,
        md_inside: s.md_inside,
        fencedEndRE: s.fencedEndRE
      };
    },

    token: function(stream, state) {

      // Reset state.formatting
      state.formatting = false;

      if (stream != state.thisLine.stream) {
        state.header = 0;
        state.hr = false;

        if (stream.match(/^\s*$/, true)) {
          blankLine(state);
          return null;
        }

        state.prevLine = state.thisLine
        state.thisLine = {stream: stream}

        // Reset state.taskList
        state.taskList = false;

        // Reset state.trailingSpace
        state.trailingSpace = 0;
        state.trailingSpaceNewLine = false;

        if (!state.localState) {
          state.f = state.block;
          if (state.f != htmlBlock) {
            var indentation = stream.match(/^\s*/, true)[0].replace(/\t/g, expandedTab).length;
            state.indentation = indentation;
            state.indentationDiff = null;
            if (indentation > 0) return null;
          }
        }
      }
      return state.f(stream, state);
    },

    innerMode: function(state) {
      if (state.block == htmlBlock) return {state: state.htmlState, mode: htmlMode};
      if (state.localState) return {state: state.localState, mode: state.localMode};
      return {state: state, mode: mode};
    },

    indent: function(state, textAfter, line) {
      if (state.block == htmlBlock && htmlMode.indent) return htmlMode.indent(state.htmlState, textAfter, line)
      if (state.localState && state.localMode.indent) return state.localMode.indent(state.localState, textAfter, line)
      return CodeMirror.Pass
    },

    blankLine: blankLine,

    getType: getType,

    blockCommentStart: "<!--",
    blockCommentEnd: "-->",
    closeBrackets: "()[]{}''\"\"``",
    fold: "markdown"
  };
  return mode;
}, "xml");

CodeMirror.defineMIME("text/markdown", "markdown");

CodeMirror.defineMIME("text/x-markdown", "markdown");

});

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

// LUA mode. Ported to CodeMirror 2 from Franciszek Wawrzak's
// CodeMirror 1 mode.
// highlights keywords, strings, comments (no leveling supported! ("[==[")), tokens, basic indenting

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("lua", function(config, parserConfig) {
  var indentUnit = config.indentUnit;

  function prefixRE(words) {
    return new RegExp("^(?:" + words.join("|") + ")", "i");
  }
  function wordRE(words) {
    return new RegExp("^(?:" + words.join("|") + ")$", "i");
  }
  var specials = wordRE(parserConfig.specials || []);

  // long list of standard functions from lua manual
  var builtins = wordRE([
    "_G","_VERSION","assert","collectgarbage","dofile","error","getfenv","getmetatable","ipairs","load",
    "loadfile","loadstring","module","next","pairs","pcall","print","rawequal","rawget","rawset","require",
    "select","setfenv","setmetatable","tonumber","tostring","type","unpack","xpcall",

    "coroutine.create","coroutine.resume","coroutine.running","coroutine.status","coroutine.wrap","coroutine.yield",

    "debug.debug","debug.getfenv","debug.gethook","debug.getinfo","debug.getlocal","debug.getmetatable",
    "debug.getregistry","debug.getupvalue","debug.setfenv","debug.sethook","debug.setlocal","debug.setmetatable",
    "debug.setupvalue","debug.traceback",

    "close","flush","lines","read","seek","setvbuf","write",

    "io.close","io.flush","io.input","io.lines","io.open","io.output","io.popen","io.read","io.stderr","io.stdin",
    "io.stdout","io.tmpfile","io.type","io.write",

    "math.abs","math.acos","math.asin","math.atan","math.atan2","math.ceil","math.cos","math.cosh","math.deg",
    "math.exp","math.floor","math.fmod","math.frexp","math.huge","math.ldexp","math.log","math.log10","math.max",
    "math.min","math.modf","math.pi","math.pow","math.rad","math.random","math.randomseed","math.sin","math.sinh",
    "math.sqrt","math.tan","math.tanh",

    "os.clock","os.date","os.difftime","os.execute","os.exit","os.getenv","os.remove","os.rename","os.setlocale",
    "os.time","os.tmpname",

    "package.cpath","package.loaded","package.loaders","package.loadlib","package.path","package.preload",
    "package.seeall",

    "string.byte","string.char","string.dump","string.find","string.format","string.gmatch","string.gsub",
    "string.len","string.lower","string.match","string.rep","string.reverse","string.sub","string.upper",

    "table.concat","table.insert","table.maxn","table.remove","table.sort"
  ]);
  var keywords = wordRE(["and","break","elseif","false","nil","not","or","return",
                         "true","function", "end", "if", "then", "else", "do",
                         "while", "repeat", "until", "for", "in", "local" ]);

  var indentTokens = wordRE(["function", "if","repeat","do", "\\(", "{"]);
  var dedentTokens = wordRE(["end", "until", "\\)", "}"]);
  var dedentPartial = prefixRE(["end", "until", "\\)", "}", "else", "elseif"]);

  function readBracket(stream) {
    var level = 0;
    while (stream.eat("=")) ++level;
    stream.eat("[");
    return level;
  }

  function normal(stream, state) {
    var ch = stream.next();
    if (ch == "-" && stream.eat("-")) {
      if (stream.eat("[") && stream.eat("["))
        return (state.cur = bracketed(readBracket(stream), "comment"))(stream, state);
      stream.skipToEnd();
      return "comment";
    }
    if (ch == "\"" || ch == "'")
      return (state.cur = string(ch))(stream, state);
    if (ch == "[" && /[\[=]/.test(stream.peek()))
      return (state.cur = bracketed(readBracket(stream), "string"))(stream, state);
    if (/\d/.test(ch)) {
      stream.eatWhile(/[\w.%]/);
      return "number";
    }
    if (/[\w_]/.test(ch)) {
      stream.eatWhile(/[\w\\\-_.]/);
      return "variable";
    }
    return null;
  }

  function bracketed(level, style) {
    return function(stream, state) {
      var curlev = null, ch;
      while ((ch = stream.next()) != null) {
        if (curlev == null) {if (ch == "]") curlev = 0;}
        else if (ch == "=") ++curlev;
        else if (ch == "]" && curlev == level) { state.cur = normal; break; }
        else curlev = null;
      }
      return style;
    };
  }

  function string(quote) {
    return function(stream, state) {
      var escaped = false, ch;
      while ((ch = stream.next()) != null) {
        if (ch == quote && !escaped) break;
        escaped = !escaped && ch == "\\";
      }
      if (!escaped) state.cur = normal;
      return "string";
    };
  }

  return {
    startState: function(basecol) {
      return {basecol: basecol || 0, indentDepth: 0, cur: normal};
    },

    token: function(stream, state) {
      if (stream.eatSpace()) return null;
      var style = state.cur(stream, state);
      var word = stream.current();
      if (style == "variable") {
        if (keywords.test(word)) style = "keyword";
        else if (builtins.test(word)) style = "builtin";
        else if (specials.test(word)) style = "variable-2";
      }
      if ((style != "comment") && (style != "string")){
        if (indentTokens.test(word)) ++state.indentDepth;
        else if (dedentTokens.test(word)) --state.indentDepth;
      }
      return style;
    },

    indent: function(state, textAfter) {
      var closing = dedentPartial.test(textAfter);
      return state.basecol + indentUnit * (state.indentDepth - (closing ? 1 : 0));
    },

    lineComment: "--",
    blockCommentStart: "--[[",
    blockCommentEnd: "]]"
  };
});

CodeMirror.defineMIME("text/x-lua", "lua");

});