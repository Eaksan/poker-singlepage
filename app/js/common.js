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
  //модальные окна
  $(".img-box").colorbox();
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

  if ( $(window).width() < 767 ) {
    $(".collapse.in").removeClass("in");
  };

  $(window).resize(function(){
    if ( $(window).width() < 1248 ) {
      navbarPosition();
    };
  });
  menuHeight();
  // высота H2
  articleHeight();
  // 
  // $(window).scroll(function(){
  //   $(".navbar-collapse.in").removeClass("in");
  //   $(".navbar-toggle.opened").removeClass("opened").addClass("closed");
  // });
    $(".navbar-collapse")

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
  timer(82800,'.b-timer__item .day', '.b-timer__item .hour', '.b-timer__item .min', '.b-timer__item .sec');

  function timer(value, dayBlock, hourBlock, minBlock, secBlock){

    var tmst=parseInt(getCookie('tmst')),d,at;
    if(!tmst){
      d=new Date();
      d.setHours(d.getHours()+23);
      tmst=Math.floor(d.getTime()/1000);
      setCookie('tmst',tmst,{'expires':15552000,'path':'/'});
      }
    d=new Date();value=tmst-Math.floor(d.getTime()/1000);

    if(value>0){
      var tfe=$('.tfe-iframe-scheme:first');
      tfe.attr('data-scheme-url',tfe.attr('data-scheme-url')+'?promocode=test_test');
      }

      var timerValue = value;

      function time(timestamp){
        if (timestamp < 0) timestamp = 0;

        var day = Math.floor( (timestamp/60/60) / 24);
        var hour = Math.floor(timestamp/60/60);
        var mins = Math.floor((timestamp - hour*60*60)/60);
        var secs = Math.floor(timestamp - hour*60*60 - mins*60);
        var left_hour = Math.floor( (timestamp - day*24) / 60 / 60 );

        $(dayBlock).text(function(){
          if (day < 10){
            day = "0" + day;
          }
          return day;
        });
        $(hourBlock).text(function(){
          if (left_hour < 10){
            left_hour = "0" + left_hour;
          }
          return left_hour;
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
    }
});
