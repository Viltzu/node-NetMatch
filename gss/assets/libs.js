/*! http://mths.be/details v0.0.3 by @mathias | includes http://mths.be/noselect v1.0.2 */
;(function(a,$){var e=$.fn,d,c=Object.prototype.toString.call(window.opera)=='[object Opera]',f=(function(k){var i=k.createElement('details'),h,g,j;if(!('open' in i)){return false}g=k.body||(function(){var l=k.documentElement;h=true;return l.insertBefore(k.createElement('body'),l.firstElementChild||l.firstChild)}());i.innerHTML='<summary>a</summary>b';i.style.display='block';g.appendChild(i);j=i.offsetHeight;i.open=true;j=j!=i.offsetHeight;g.removeChild(i);if(h){g.parentNode.removeChild(g)}return j}(a)),b=function(h,j,g){var i=typeof h.attr('open')=='string',k=i&&g||!i&&!g;if(k){h.removeClass('open').prop('open',false);j.hide()}else{h.addClass('open').prop('open',true);j.show()}};e.noSelect=function(){var g='none';return this.bind('selectstart dragstart mousedown',function(){return false}).css({MozUserSelect:g,WebkitUserSelect:g,userSelect:g})};if(f){d=e.details=function(){return this};d.support=f}else{d=e.details=function(){return this.each(function(){var g=$(this),i=$('summary',g),h=g.children(':not(summary)'),j=g.contents(':not(summary)');if(!i.length){i=$('<summary>').text('Details').prependTo(g)}if(h.length!=j.length){j.filter(function(){return this.nodeType==3&&/[^ \t\n\f\r]/.test(this.data)}).wrap('<span>');h=g.children(':not(summary)')}b(g,h);i.noSelect().prop('tabIndex',0).on('click',function(){i.focus();b(g,h,true)}).keyup(function(k){if(32==k.keyCode&&!c||13==k.keyCode){k.preventDefault();i.click()}})})};d.support=f}}(document,jQuery));