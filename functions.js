$(document).ready(function () {

  $("#load-title").typewriter({
    text: "PLEASE WAIT . . .",
    waitingTime: 1000
  });
  setTimeout(function () {
    
    $('#loading_wrap .loader').fadeOut(2000, function () {
      $('#loading_wrap').remove();
      $('.left, .changed-nav').css("opacity", "1");
      $(".right .logo-wrep").css("opacity", "1");

      $('.menu li').each(function (index) {
        var self = this
        setTimeout(function () {
          $(self).removeClass("hide").addClass("show");
        }, index * 500);
      });
    });
  }, 3000);

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $('#detailsCheck').on("click", function() {
    if ($(this).attr('checked')) {
      $("#contain-techs .item img").each(function(){
        $(this).tooltip('dispose');
      });
      $('#detailsCheck').removeAttr("checked");
    }
    else {
      $("#contain-techs .item img").each(function(){
        $(this).tooltip('enable');
      });
      $('#detailsCheck').attr('checked');   
    }
  })

  const controller = new ScrollMagic.Controller();

  $('.about').each(function () {
    new ScrollMagic.Scene({
      triggerElement: this,
      offset: 50,
      triggerHook: 0.9,
    })
      .setClassToggle(this, "visible")
      .addTo(controller);
  });

  $('.item').each(function (index) {
    new ScrollMagic.Scene({
      triggerElement: this,
      offset: 50,
      triggerHook: 0.9,
    })
      .setClassToggle(this, "visible")
      .addTo(controller);
  });

  $('.tab-content').each(function () {
    let tween = new TimelineMax()
      .from(this, 1.5, { rotationY: 180, scale: 0.7, opacity: 0 })
      .to(this, 1.5, { rotationY: 180, scale: 0.7, opacity: 0, delay: 7 });
    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: "onEnter",
      duration: "100%",
      offset: 100
    })
      .setTween(tween)
      .addTo(controller);
  });


  $('.nav-element').each(function (index) {
    let navItem = `.${this.id}-link`;
    let elem = $(navItem)
    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: "onEnter",
      duration: "100%",
      offset: 100
    })
      .setClassToggle(elem[0], "active")
      .addTo(controller);
  });


  $(".logo").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 2000);
    $("#nav .active").removeClass("active");
  });

  $("#nav a").on('click', function (event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function () {

        window.location.hash = hash;
      });
    }
  });

/*   $('#btn-dropdown').on('click', function () {
    if ($(this).attr("aria-expanded")=='true')
      $("#btn-dropdown i").removeClass('fas fa-times').addClass('fas fa-bars');
    else 
      $("#btn-dropdown i").removeClass('fas fa-bars').addClass('fas fa-times');
  }); */

  $(".fa-arrow-down").on('click', function () {
    var elemHeight = $(".land-section").height();
    $('html, body').animate({ scrollTop: elemHeight }, 1000);
    return false;
  });

  $(window).on('scroll', function () {
    var elemHeight = $(".land-section").height();
    elemHeight = elemHeight * 0.5;
    if (window.outerWidth >= 400) {
      if (elemHeight - window.scrollY <= 0) {
      
        $('#left').removeClass("sliding-show-horizontal").addClass("sliding-hide-horizontal").hide();
        setTimeout(function(){
          $('#changed-nav').removeClass("sliding-hide-vartical").addClass("sliding-show-vartical").show();
        },500)
      }
  
      else{
        $('#changed-nav').removeClass("sliding-show-vartical").addClass("sliding-hide-vartical").hide("slow");
        setTimeout(function(){
          $('#left').removeClass("sliding-hide-horizontal").addClass("sliding-show-horizontal").show();
        },500)
      }
    }
  });


  $("#nav li").on('click', function (event) {
    $(this).siblings('li').removeClass('active');
    $(this).addClass('active');
  });

  $(".myEmail").on("click", function () {
    $(".linkToCopy").select();
    document.execCommand("copy");
    $(".myEmail").tooltip('hide')
    .attr('data-original-title', 'Email copied!')
    .tooltip('show');
    
    $('.showingMail').animate({'opacity': 1}, 600);    

    setTimeout(function() {
      $(".showingMail").animate({'opacity': 0}, 600);    
    },5000);
  });

  $(".myEmail2").on("click", function () {
    $(".linkToCopy2").select();
    document.execCommand("copy");
    $(".myEmail2").tooltip('hide')
    .attr('data-original-title', 'Email copied!')
    .tooltip('show');
    
    $('.showingMail2').animate({'opacity': 1}, 600);    

    setTimeout(function() {
      $(".showingMail2").animate({'opacity': 0}, 600);    
    },5000);
  });
});