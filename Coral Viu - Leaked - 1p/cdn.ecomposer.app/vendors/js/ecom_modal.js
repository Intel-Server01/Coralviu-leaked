(function(root,factory){if(typeof define==='function'&&define.amd){define(factory)}else if(typeof exports==='object'){module.exports=factory()}else{root.ecom=factory()
root.EComModal=function($el,options){EComModal.prototype.init=function(){this.modal=new ecom.modal(options);var _this=this;if(!$el)return;if($el.length){$el.forEach(function(el,i){modalInit(el,$el)})}else{modalInit($el)}
function modalInit(el,els=null){el.addEventListener('click',function(e){e.preventDefault();var type=el.getAttribute('ecom-modal')||'inline',src='',content='';src=getSrc(el);if(!src){console.log('Source not found');return};switch(type){case 'inline':var target=document.querySelector(src);if(target)content=target.outerHTML;break;case 'image':if(options.gallery){content=buildGalleryHTML(el,els);}else{content='<img src='+src+' />'}
break;case 'iframe':content=`<iframe
                      class="ecom_iframe"
                      frameborder="0"
                      allowfullscreen="1"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      style="border: 0; width: 100%; height:100%; display: flex !important"
                      src="${src}"
                  />`
break;default:break;}
_this.modal.setContent(content);_this.modal.open();})
function buildGalleryHTML(el_main,els){var index=0;if(els.length==0)return;if(el_main){index=Array.from(els).findIndex(function(node){return node==el_main});}
var html='<div class="ecom-modal-gallery" data-index="'+index+'"><div class="ecom-swiper-wrapper">';els.forEach(function(el){html+='<div class="ecom-modal-gallery-item ecom-swiper-slide"><div class="ecom-swiper-zoom-container"><img src='+getSrc(el)+' /></div></div>'})
html+='</div><div class="ecom-swiper-button-prev ecom-swiper-button"></div><div class="ecom-swiper-button-next ecom-swiper-button"></div></div>';return html;}
function getSrc(el){var src='';if(el.getAttribute('ecom-modal-source')){src=el.getAttribute('ecom-modal-source');}else if(el.getAttribute('href')){src=el.getAttribute('href');}else if(el.getAttribute('src')){src=el.getAttribute('src');}
return src;}}
return this}
EComModal.prototype.close=function(){this.modal.close();}
this.init()}}}(this,function(){var isBusy=false
function EComModal(options){var defaults={onClose:null,onOpen:null,beforeOpen:null,beforeClose:null,stickyFooter:false,footer:false,cssClass:[],closeLabel:'Close',closeMethods:['overlay','button','escape'],gallery:false}
this.opts=extend({},defaults,options)
this.init()}
EComModal.prototype.init=function(){if(this.modal){return}
_build.call(this)
_bindEvents.call(this)
document.body.appendChild(this.modal,document.body.firstChild)
return this}
EComModal.prototype.galleryInit=function(){var self=this;if(!window.EComSwiper)return;var $selector=this.modal.querySelector('.ecom-modal-gallery'),index=$selector.dataset.index?$selector.dataset.index:0;new window.EComSwiper($selector,{initialSlide:index,freeMode:false,centeredSlides:true,loop:false,centeredSlidesBounds:true,autoHeight:false,slidesPerView:1,spaceBetween:0,zoom:true,navigation:{nextEl:'.ecom-swiper-button-next',prevEl:'.ecom-swiper-button-prev',},});let itv=null;this.modal.querySelectorAll('img').forEach(function(img){img.addEventListener('load',function(){clearTimeout(itv);itv=setTimeout(()=>window.dispatchEvent(new window.Event('resize')),500)})})}
EComModal.prototype._busy=function(state){isBusy=state}
EComModal.prototype._isBusy=function(){return isBusy}
EComModal.prototype.destroy=function(){if(this.modal===null){return}
if(this.isOpen()){this.close(true)}
_unbindEvents.call(this)
this.modal.parentNode.removeChild(this.modal)
this.modal=null}
EComModal.prototype.isOpen=function(){return!!this.modal.classList.contains('ecom-modal--visible')}
EComModal.prototype.open=function(){if(this._isBusy())return
this._busy(true)
var self=this
if(typeof self.opts.beforeOpen==='function'){self.opts.beforeOpen()}
if(this.modal.style.removeProperty){this.modal.style.removeProperty('display')}else{this.modal.style.removeAttribute('display')}
document.getSelection().removeAllRanges()
this._scrollPosition=window.pageYOffset
document.body.classList.add('ecom-enabled')
document.body.style.top=-this._scrollPosition+'px'
this.modal.classList.add('ecom-modal--visible')
if(self.opts.gallery){this.galleryInit();}
if(typeof self.opts.onOpen==='function'){self.opts.onOpen.call(self)}
self._busy(false)
this.checkOverflow()
return this}
EComModal.prototype.close=function(force){if(this._isBusy())return
this._busy(true)
force=force||false
if(typeof this.opts.beforeClose==='function'){var close=this.opts.beforeClose.call(this)
if(!close){this._busy(false)
return}}
document.body.classList.remove('ecom-enabled')
document.body.style.top=null
window.scrollTo({top:this._scrollPosition,behavior:'instant'})
this.modal.classList.remove('ecom-modal--visible')
var self=this
self.modal.style.display='none'
if(typeof self.opts.onClose==='function'){self.opts.onClose.call(this)}
self._busy(false)}
EComModal.prototype.setContent=function(content){if(typeof content==='string'){this.modalBoxContent.innerHTML=content}else{this.modalBoxContent.innerHTML=''
this.modalBoxContent.appendChild(content)}
if(this.isOpen()){this.checkOverflow()}
return this}
EComModal.prototype.getContent=function(){return this.modalBoxContent}
EComModal.prototype.resize=function(){console.warn('Resize is deprecated and will be removed in version 1.0')}
EComModal.prototype.isOverflow=function(){var viewportHeight=window.innerHeight
var modalHeight=this.modalBox.clientHeight
return modalHeight>=viewportHeight}
EComModal.prototype.checkOverflow=function(){if(this.modal.classList.contains('ecom-modal--visible')){if(this.isOverflow()){this.modal.classList.add('ecom-modal--overflow')}else{this.modal.classList.remove('ecom-modal--overflow')}
if(!this.isOverflow()&&this.opts.stickyFooter){this.setStickyFooter(false)}else if(this.isOverflow()&&this.opts.stickyFooter){_recalculateFooterPosition.call(this)
this.setStickyFooter(true)}}}
function closeIcon(){return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M380.2 453.7c5.703 6.75 4.859 16.84-1.891 22.56C375.3 478.7 371.7 480 368 480c-4.547 0-9.063-1.938-12.23-5.657L192 280.8l-163.8 193.6C25.05 478.1 20.53 480 15.98 480c-3.641 0-7.313-1.25-10.31-3.781c-6.75-5.719-7.594-15.81-1.891-22.56l167.2-197.7L3.781 58.32c-5.703-6.75-4.859-16.84 1.891-22.56c6.75-5.688 16.83-4.813 22.55 1.875L192 231.2l163.8-193.6c5.703-6.688 15.8-7.563 22.55-1.875c6.75 5.719 7.594 15.81 1.891 22.56l-167.2 197.7L380.2 453.7z"/></svg>'}
function _recalculateFooterPosition(){if(!this.modalBoxFooter){return}
this.modalBoxFooter.style.width=this.modalBox.clientWidth+'px'
this.modalBoxFooter.style.left=this.modalBox.offsetLeft+'px'}
function _build(){this.modal=document.createElement('div')
this.modal.classList.add('ecom-modal')
if(this.opts.closeMethods.length===0||this.opts.closeMethods.indexOf('overlay')===-1){this.modal.classList.add('ecom-modal--noOverlayClose')}
this.modal.style.display='none'
this.opts.cssClass.forEach(function(item){if(typeof item==='string'){this.modal.classList.add(item)}},this)
if(this.opts.closeMethods.indexOf('button')!==-1){this.modalCloseBtn=document.createElement('button')
this.modalCloseBtn.type='button'
this.modalCloseBtn.classList.add('ecom-modal__close')
this.modalCloseBtnIcon=document.createElement('span')
this.modalCloseBtnIcon.classList.add('ecom-modal__closeIcon')
this.modalCloseBtnIcon.innerHTML=closeIcon()
this.modalCloseBtnLabel=document.createElement('span')
this.modalCloseBtnLabel.classList.add('ecom-modal__closeLabel')
this.modalCloseBtnLabel.innerHTML=this.opts.closeLabel
this.modalCloseBtn.appendChild(this.modalCloseBtnIcon)
this.modalCloseBtn.appendChild(this.modalCloseBtnLabel)}
this.modalBox=document.createElement('div')
this.modalBox.classList.add('ecom-modal-box')
this.modalBoxContent=document.createElement('div')
this.modalBoxContent.classList.add('ecom-modal-box__content')
this.modalBox.appendChild(this.modalBoxContent)
if(this.opts.closeMethods.indexOf('button')!==-1){this.modal.appendChild(this.modalCloseBtn)}
this.modal.appendChild(this.modalBox)}
function _bindEvents(){this._events={clickCloseBtn:this.close.bind(this),clickOverlay:_handleClickOutside.bind(this),resize:this.checkOverflow.bind(this),keyboardNav:_handleKeyboardNav.bind(this)}
if(this.opts.closeMethods.indexOf('button')!==-1){this.modalCloseBtn.addEventListener('click',this._events.clickCloseBtn)}
this.modal.addEventListener('click',this._events.clickOverlay);window.addEventListener('resize',this._events.resize);document.addEventListener('keydown',this._events.keyboardNav);}
function _handleKeyboardNav(event){if(this.opts.closeMethods.indexOf('escape')!==-1&&event.which===27&&this.isOpen()){this.close()}}
function _handleClickOutside(event){var scrollbarWidth=this.modal.offsetWidth-this.modal.clientWidth
var clickedOnScrollbar=event.clientX>=this.modal.offsetWidth-15
var isScrollable=this.modal.scrollHeight!==this.modal.offsetHeight
if(navigator.platform==='MacIntel'&&scrollbarWidth===0&&clickedOnScrollbar&&isScrollable){return}
if(this.opts.closeMethods.indexOf('overlay')!==-1&&!_findAncestor(event.target,'ecom-modal')&&event.clientX<this.modal.clientWidth){this.close()}}
function _findAncestor(el,cls){while((el=el.parentElement)&&!el.classList.contains(cls));return el}
function _unbindEvents(){if(this.opts.closeMethods.indexOf('button')!==-1){this.modalCloseBtn.removeEventListener('click',this._events.clickCloseBtn)}
this.modal.removeEventListener('mousedown',this._events.clickOverlay)
window.removeEventListener('resize',this._events.resize)
document.removeEventListener('keydown',this._events.keyboardNav)}
function extend(){for(var i=1;i<arguments.length;i++){for(var key in arguments[i]){if(arguments[i].hasOwnProperty(key)){arguments[0][key]=arguments[i][key]}}}
return arguments[0]}
EComModal.prototype.resize
return{modal:EComModal}}))