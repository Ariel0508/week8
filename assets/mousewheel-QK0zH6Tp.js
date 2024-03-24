import{g as K,b as _,e as O,c as W,n as N,d as k}from"./pagination-KvEg6s1V.js";function z(L){let{swiper:e,extendParams:X,on:P,emit:H}=L;const T=K(),v=_();e.keyboard={enabled:!1},X({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function M(S){if(!e.enabled)return;const{rtlTranslate:y}=e;let r=S;r.originalEvent&&(r=r.originalEvent);const h=r.keyCode||r.charCode,I=e.params.keyboard.pageUpDown,m=I&&h===33,w=I&&h===34,g=h===37,E=h===39,t=h===38,a=h===40;if(!e.allowSlideNext&&(e.isHorizontal()&&E||e.isVertical()&&a||w)||!e.allowSlidePrev&&(e.isHorizontal()&&g||e.isVertical()&&t||m))return!1;if(!(r.shiftKey||r.altKey||r.ctrlKey||r.metaKey)&&!(T.activeElement&&T.activeElement.nodeName&&(T.activeElement.nodeName.toLowerCase()==="input"||T.activeElement.nodeName.toLowerCase()==="textarea"))){if(e.params.keyboard.onlyInViewport&&(m||w||g||E||t||a)){let D=!1;if(O(e.el,`.${e.params.slideClass}, swiper-slide`).length>0&&O(e.el,`.${e.params.slideActiveClass}`).length===0)return;const p=e.el,u=p.clientWidth,d=p.clientHeight,n=v.innerWidth,o=v.innerHeight,l=W(p);y&&(l.left-=p.scrollLeft);const b=[[l.left,l.top],[l.left+u,l.top],[l.left,l.top+d],[l.left+u,l.top+d]];for(let s=0;s<b.length;s+=1){const f=b[s];if(f[0]>=0&&f[0]<=n&&f[1]>=0&&f[1]<=o){if(f[0]===0&&f[1]===0)continue;D=!0}}if(!D)return}e.isHorizontal()?((m||w||g||E)&&(r.preventDefault?r.preventDefault():r.returnValue=!1),((w||E)&&!y||(m||g)&&y)&&e.slideNext(),((m||g)&&!y||(w||E)&&y)&&e.slidePrev()):((m||w||t||a)&&(r.preventDefault?r.preventDefault():r.returnValue=!1),(w||a)&&e.slideNext(),(m||t)&&e.slidePrev()),H("keyPress",h)}}function c(){e.keyboard.enabled||(T.addEventListener("keydown",M),e.keyboard.enabled=!0)}function i(){e.keyboard.enabled&&(T.removeEventListener("keydown",M),e.keyboard.enabled=!1)}P("init",()=>{e.params.keyboard.enabled&&c()}),P("destroy",()=>{e.keyboard.enabled&&i()}),Object.assign(e.keyboard,{enable:c,disable:i})}function U(L){let{swiper:e,extendParams:X,on:P,emit:H}=L;const T=_();X({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),e.mousewheel={enabled:!1};let v,M=k(),c;const i=[];function S(t){let u=0,d=0,n=0,o=0;return"detail"in t&&(d=t.detail),"wheelDelta"in t&&(d=-t.wheelDelta/120),"wheelDeltaY"in t&&(d=-t.wheelDeltaY/120),"wheelDeltaX"in t&&(u=-t.wheelDeltaX/120),"axis"in t&&t.axis===t.HORIZONTAL_AXIS&&(u=d,d=0),n=u*10,o=d*10,"deltaY"in t&&(o=t.deltaY),"deltaX"in t&&(n=t.deltaX),t.shiftKey&&!n&&(n=o,o=0),(n||o)&&t.deltaMode&&(t.deltaMode===1?(n*=40,o*=40):(n*=800,o*=800)),n&&!u&&(u=n<1?-1:1),o&&!d&&(d=o<1?-1:1),{spinX:u,spinY:d,pixelX:n,pixelY:o}}function y(){e.enabled&&(e.mouseEntered=!0)}function r(){e.enabled&&(e.mouseEntered=!1)}function h(t){return e.params.mousewheel.thresholdDelta&&t.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&k()-M<e.params.mousewheel.thresholdTime?!1:t.delta>=6&&k()-M<60?!0:(t.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),H("scroll",t.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),H("scroll",t.raw)),M=new T.Date().getTime(),!1)}function I(t){const a=e.params.mousewheel;if(t.direction<0){if(e.isEnd&&!e.params.loop&&a.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&a.releaseOnEdges)return!0;return!1}function m(t){let a=t,D=!0;if(!e.enabled||t.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))return;const p=e.params.mousewheel;e.params.cssMode&&a.preventDefault();let u=e.el;e.params.mousewheel.eventsTarget!=="container"&&(u=document.querySelector(e.params.mousewheel.eventsTarget));const d=u&&u.contains(a.target);if(!e.mouseEntered&&!d&&!p.releaseOnEdges)return!0;a.originalEvent&&(a=a.originalEvent);let n=0;const o=e.rtlTranslate?-1:1,l=S(a);if(p.forceToAxis)if(e.isHorizontal())if(Math.abs(l.pixelX)>Math.abs(l.pixelY))n=-l.pixelX*o;else return!0;else if(Math.abs(l.pixelY)>Math.abs(l.pixelX))n=-l.pixelY;else return!0;else n=Math.abs(l.pixelX)>Math.abs(l.pixelY)?-l.pixelX*o:-l.pixelY;if(n===0)return!0;p.invert&&(n=-n);let b=e.getTranslate()+n*p.sensitivity;if(b>=e.minTranslate()&&(b=e.minTranslate()),b<=e.maxTranslate()&&(b=e.maxTranslate()),D=e.params.loop?!0:!(b===e.minTranslate()||b===e.maxTranslate()),D&&e.params.nested&&a.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){const s={time:k(),delta:Math.abs(n),direction:Math.sign(n),raw:t};i.length>=2&&i.shift();const f=i.length?i[i.length-1]:void 0;if(i.push(s),f?(s.direction!==f.direction||s.delta>f.delta||s.time>f.time+150)&&h(s):h(s),I(s))return!0}else{const s={time:k(),delta:Math.abs(n),direction:Math.sign(n)},f=c&&s.time<c.time+500&&s.delta<=c.delta&&s.direction===c.direction;if(!f){c=void 0;let x=e.getTranslate()+n*p.sensitivity;const G=e.isBeginning,V=e.isEnd;if(x>=e.minTranslate()&&(x=e.minTranslate()),x<=e.maxTranslate()&&(x=e.maxTranslate()),e.setTransition(0),e.setTranslate(x),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!G&&e.isBeginning||!V&&e.isEnd)&&e.updateSlidesClasses(),e.params.loop&&e.loopFix({direction:s.direction<0?"next":"prev",byMousewheel:!0}),e.params.freeMode.sticky){clearTimeout(v),v=void 0,i.length>=15&&i.shift();const C=i.length?i[i.length-1]:void 0,A=i[0];if(i.push(s),C&&(s.delta>C.delta||s.direction!==C.direction))i.splice(0);else if(i.length>=15&&s.time-A.time<500&&A.delta-s.delta>=1&&s.delta<=6){const Y=n>0?.8:.2;c=s,i.splice(0),v=N(()=>{e.slideToClosest(e.params.speed,!0,void 0,Y)},0)}v||(v=N(()=>{c=s,i.splice(0),e.slideToClosest(e.params.speed,!0,void 0,.5)},500))}if(f||H("scroll",a),e.params.autoplay&&e.params.autoplayDisableOnInteraction&&e.autoplay.stop(),p.releaseOnEdges&&(x===e.minTranslate()||x===e.maxTranslate()))return!0}}return a.preventDefault?a.preventDefault():a.returnValue=!1,!1}function w(t){let a=e.el;e.params.mousewheel.eventsTarget!=="container"&&(a=document.querySelector(e.params.mousewheel.eventsTarget)),a[t]("mouseenter",y),a[t]("mouseleave",r),a[t]("wheel",m)}function g(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",m),!0):e.mousewheel.enabled?!1:(w("addEventListener"),e.mousewheel.enabled=!0,!0)}function E(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,m),!0):e.mousewheel.enabled?(w("removeEventListener"),e.mousewheel.enabled=!1,!0):!1}P("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&E(),e.params.mousewheel.enabled&&g()}),P("destroy",()=>{e.params.cssMode&&g(),e.mousewheel.enabled&&E()}),Object.assign(e.mousewheel,{enable:g,disable:E})}export{z as K,U as M};
