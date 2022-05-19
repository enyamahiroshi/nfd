(function ($) {

  /* --------------------------------------------------
    メニュー開閉
  -------------------------------------------------- */
  const body = $('body');
  const menuWrap = $('.global_menu');
  const header = $('.site_header');
  const BtnOpen = $('.js_tgl_menu');
  const classname = 'is__open';
  BtnOpen.on('tap click', function () {
    body.toggleClass(classname);
    header.toggleClass(classname);
    menuWrap.toggleClass(classname);
    $(this).toggleClass(classname);
  });

  /* --------------------------------------------------
    サブメニュー開閉
  -------------------------------------------------- */
  const submenu = '.menu__child';
  const subBtnOpen = $('.js_tgl_open-close');
  const classname2 = 'is__open';
  subBtnOpen.on('tap click', function () {
    $(this).next(submenu).slideToggle('fast');
    $(this).toggleClass(classname2);
  });

  /* --------------------------------------------------
    スクロールで処理
  -------------------------------------------------- */
  const $headNav = $('.site_header');
  const $scrollY = $('.site_main').offset().top; // scroll量
  const $aadclass = 'is__fixed'; // add css class
	$(window).on('load scroll', function () {
		if($(this).scrollTop() > $scrollY && $headNav.hasClass($aadclass) == false) {
      //headerの高さ分上に設定
			$headNav.css({'top': '-160px'});
			$headNav.addClass($aadclass);
			$headNav.animate({'top': 0}, 800);
		}
		else if($(this).scrollTop() < $scrollY && $headNav.hasClass($aadclass) == true){
      $headNav.removeClass($aadclass);
		}
	});

})(jQuery);