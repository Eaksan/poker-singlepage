function navbarPosition(){
  var frameWidth = $(window).width(),
    containerWidth = $(".container").width();
  $(".navbar-collapse").css("right", -(frameWidth-containerWidth)/2+14);
  $(".navbar-toggle").css("right", -(frameWidth-containerWidth)/2+14);
}

function articleHeight(){
  var articHeight = $(".col-lg-7 article").height(),
    h2Height = $(".col-lg-7 article h2").innerHeight(),
    amainHeight = 0;
  amainHeight = articHeight - h2Height - 16;
  $(".col-lg-7 .article-main").innerHeight(amainHeight);
}

function menuHeight() {
  $(".navbar-collapse").css("max-height", $(window).height() - $("header").innerHeight());
}

$(function() {
  //nariko
  ( function( window ) {
      'use strict';
      function classReg( className ) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
      }
      var hasClass, addClass, removeClass;
      if ( 'classList' in document.documentElement ) {
        hasClass = function( elem, c ) {
          return elem.classList.contains( c );
        };
        addClass = function( elem, c ) {
          elem.classList.add( c );
        };
        removeClass = function( elem, c ) {
          elem.classList.remove( c );
        };
      }
      else {
        hasClass = function( elem, c ) {
          return classReg( c ).test( elem.className );
        };
        addClass = function( elem, c ) {
          if ( !hasClass( elem, c ) ) {
            elem.className = elem.className + ' ' + c;
          }
        };
        removeClass = function( elem, c ) {
          elem.className = elem.className.replace( classReg( c ), ' ' );
        };
      }
      function toggleClass( elem, c ) {
        var fn = hasClass( elem, c ) ? removeClass : addClass;
        fn( elem, c );
      }
      var classie = {
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
      };
      if ( typeof define === 'function' && define.amd ) {
        define( classie );
      } else {
        window.classie = classie;
      }
  })( window );
          
  (function() {       
      if (!String.prototype.trim) {
          (function() {           
              var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
              String.prototype.trim = function() {
                  return this.replace(rtrim, '');
              };
          })();
      }
      [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {         
          if( inputEl.value.trim() !== '' ) {
              classie.add( inputEl.parentNode, 'input--filled' );
          }         
          inputEl.addEventListener( 'focus', onInputFocus );
          inputEl.addEventListener( 'blur', onInputBlur );
      } );
      function onInputFocus( ev ) {
          classie.add( ev.target.parentNode, 'input--filled' );
      }
      function onInputBlur( ev ) {
          if( ev.target.value.trim() === '' ) {
              classie.remove( ev.target.parentNode, 'input--filled' );
          }
      }
  })();
  //модальные окна
  $(".colorbox").colorbox();

  $("select").styler();
  // валидация
  $("form").validate();

  // плавный скрол
  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
  // позиция меню
  if ( $(window).width() < 1248 ) {
    navbarPosition();
  };
  $('.alert-message').innerHeight($("form").height()+20);

  if ( $(window).width() < 768 ) {
    $(".collapse.in").removeClass("in");
  };

  $(window).resize(function(){
    if ( $(window).width() < 768 ) {
      navbarPosition();
    };
  });
  menuHeight();
  // высота H2
  if($(window).width > 768){
    articleHeight();
  };
  $(".navbar-collapse").mouseenter(function() {
    console.log('in');
    $(".navbar").mouseleave(function() {
      $(window).click(function() {
        $(".navbar-toggle").removeClass("opened").addClass("closed");
        $(".navbar-ex1-collapse").collapse('hide');
      });
    });
  });

  $(".navbar-toggle").click(function(){
    if($(this).hasClass("closed")){
      $(this).addClass("opened").removeClass("closed");
    } else if ($(this).hasClass("opened")){
      $(this).removeClass("opened").addClass("closed");
    };
  });
  function getCookie(name) {var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));return matches ? decodeURIComponent(matches[1]) : undefined;}
  function setCookie(name, value, options) {
    options = options || {}; var expires = options.expires;
    if (typeof expires == "number" && expires) {var d=new Date(); d.setTime(d.getTime()+expires*1000); expires=options.expires=d; }
    if (expires && expires.toUTCString) {options.expires=expires.toUTCString();}
    var updatedCookie = name + "=" + encodeURIComponent(value);
    for (var propName in options) {updatedCookie += "; " + propName; var propValue = options[propName];if (propValue !== true) {updatedCookie += "=" + propValue;}}
    document.cookie = updatedCookie;
  }
  timer(1198800,'.b-timer__item .day', '.b-timer__item .hour', '.b-timer__item .min', '.b-timer__item .sec');

  function timer(value, dayBlock, hourBlock, minBlock, secBlock){

    var tmst=parseInt(getCookie('tmst')),d,at;
    if(!tmst){
      d=new Date();
      d.setHours(d.getHours()+123);
      tmst=Math.floor(d.getTime()/1000);
      setCookie('tmst',tmst,{'expires':1115552000,'path':'/'});
      }
    d=new Date();value=tmst-Math.floor(d.getTime()/1000);

    if(value>0){
      var tfe=$('.tfe-iframe-scheme:first');
      tfe.attr('data-scheme-url',tfe.attr('data-scheme-url')+'?promocode=test_test');
    };

    var timerValue = value;

    function time(timestamp){
      if (timestamp < 0) timestamp = 0;

      var day = Math.floor( (timestamp/60/60) / 24),
        hour = Math.floor((timestamp - (day * 60 * 60 * 24))/60/60),
        mins = Math.floor((timestamp - day*60*60*24 - hour*60*60)/60),
        secs = Math.floor(timestamp - day*60*60*24 - hour*60*60 - mins*60);

      $(dayBlock).text(function(){
        if (day < 10){
          day = "0" + day;
        }
        return day;
      });
      $(hourBlock).text(function(){
        if (hour < 10){
          hour = "0" + hour;
        }
        return hour;
      });
      $(minBlock).text(function(){
        if (mins < 10){
          mins = "0" + mins;
        }
        return mins;
      });              
      $(secBlock).text(function(){
        if (secs < 10){
          secs = "0" + secs;
        }
        return secs;
      }); 
    }
    setInterval(function(){
      timerValue = timerValue - 1;
      if(timerValue==1)document.location.reload();
      time(timerValue);
    }, 1000);
  };
  $(window).on('scroll',function(){
    var winHeight = $(window).scrollTop(),
      winBoth = $(window).scrollTop() + $(window).height();
    if($('.desc-full ul').length){
      $('.desc-full ul li').each(function(){
          if (((winBoth - 100) > ($(this).offset().top)) && ((winHeight + 100) < ($(this).offset().top))){
            $(this).addClass('show-item');
          }
      });
    };
  });
});
