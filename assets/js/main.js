(function ($) {

  /* --------------------------------------------------
    fitie
  -------------------------------------------------- */
  this.fitie=function(t){function e(){c.call(t,g+m,e);var a={boxSizing:"content-box",display:"inline-block",overflow:"hidden"};"backgroundColor backgroundImage borderColor borderStyle borderWidth bottom fontSize lineHeight height left opacity margin position right top visibility width".replace(/\w+/g,function(t){a[t]=l[t]}),d.border=d.margin=d.padding=0,d.display="block",d.height=d.width="auto",d.opacity=1;var h=t.videoWidth||t.width,s=t.videoHeight||t.height,u=h/s,v=document.createElement("object-fit");v.appendChild(t.parentNode.replaceChild(v,t));for(var p in a)v.runtimeStyle[p]=a[p];var b;"fill"===i?f?(d.width=o,d.height=n):(d["-ms-transform-origin"]="0% 0%",d["-ms-transform"]="scale("+o/h+","+n/s+")"):(r>u?"contain"===i:"cover"===i)?(b=n*u,d.width=Math.round(b)+"px",d.height=n+"px",d.marginLeft=Math.round((o-b)/2)+"px"):(b=o/u,d.width=o+"px",d.height=Math.round(b)+"px",d.marginTop=Math.round((n-b)/2)+"px")}var i=t.currentStyle["object-fit"];if(i&&/^(contain|cover|fill)$/.test(i)){var o=t.clientWidth,n=t.clientHeight,r=o/n,a=t.nodeName.toLowerCase(),d=t.runtimeStyle,l=t.currentStyle,h=t.addEventListener||t.attachEvent,c=t.removeEventListener||t.detachEvent,g=t.addEventListener?"":"on",f="img"===a,m=f?"load":"loadedmetadata";h.call(t,g+m,e),t.complete&&e()}},this.fitie.init=function(){if(document.body)for(var t=document.querySelectorAll("img,video"),e=-1;t[++e];)fitie(t[e]);else setTimeout(fitie.init)},/MSIE|Trident/.test(navigator.userAgent)&&this.fitie.init();

  /* --------------------------------------------------
    メニュー開閉
  -------------------------------------------------- */
  const body = $('body');
  const header = $('.header');
  const BtnOpen = $('.js-tgl-menu');
  const classname = 'is__open';
  $(window).on('resize', function () {
    if (window.matchMedia( "(min-width: 768px)" ).matches) {
      if (body.hasClass(classname)) {
        body.removeClass(classname);
        header.removeClass(classname);
      }
    }
  });
  BtnOpen.on('tap click', function () {
    if (body.hasClass(classname)) {
      body.removeClass(classname);
      header.removeClass(classname);
    } else {
      body.addClass(classname);
      header.addClass(classname);
    }
  });

  /* --------------------------------------------------
    スクロールで処理
  -------------------------------------------------- */
  const $trg = $('.js-scroll-top');
  const $scrollY = $('.main').offset().top; // scroll量
  const $aadclass = 'is__fixed'; // add css class
	$(window).on('load scroll', function () {
		if($(this).scrollTop() > $scrollY && $trg.hasClass($aadclass) == false) {
      $trg.addClass($aadclass);
		}
		else if($(this).scrollTop() < $scrollY && $trg.hasClass($aadclass) == true){
      $trg.removeClass($aadclass);
		}
  });

  /* --------------------------------------------------
    anchor link
  -------------------------------------------------- */
  const $anchor = 'a[href^="#"]';
  const $_header = $('.header');
  $($anchor).on('tap click', function() {
    const speed = 200; // ミリ秒
    const href= $(this).attr("href");
    const target = $(href == "#" || href == "" ? 'html' : href);
    const headerHeight = $_header.height();
    const position = target.offset().top - headerHeight;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
  $(window).on('load', function() {
    const headerHeight = $_header.height();
      if(document.URL.match("#")) {
      const str = location.href ;
      const cut_str = "#";
      const index = str.indexOf(cut_str);
      const href = str.slice(index);
      const target = href;
      const position = $(target).offset().top - headerHeight;
      $("html, body").stop().animate({scrollTop:position}, 200, 'swing');
      return false;
    }
  });

})(jQuery);