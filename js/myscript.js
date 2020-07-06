$(function () {
  'use strict'

  // get the current year
  $('#year').text(new Date().getFullYear())

  var topoffset = 50 //variable for menu height
  var wheight = $(window).height() //get the height of the window

  //adjust height of .fullheight elements on window
  $('.fullheight').css('height', wheight) //set to window tallness

  //adjust height of .fullheight elements on window resize
  $(window).resize(function () {
    wheight = $(window).height() //get the height of the window
    $('.fullheight').css('height', wheight) //set to window tallness
  })

  //Activate Scrollspy
  $('body').scrollspy({
    target: 'header .navbar-fixed-top',
    offset: topoffset,
  })

  // Add and remove an inbody class to nav
  var hash = $(this).find('li.active a').attr('href')
  if (hash !== '#featured') {
    $('header nav').addClass('inbody')
  } else {
    $('header nav').removeClass('inbody')
  }

  // Add an inbody class to nav when scrollspy event fires
  $('.navbar-fixed-top').on('activate.bs.scrollspy', function () {
    var hash = $(this).find('li.active a').attr('href')
    if (hash !== '#featured') {
      $('header nav').addClass('inbody')
    } else {
      $('header nav').removeClass('inbody')
    }
  })

  //Use smooth scrolling when clicking on navigation
  $('.navbar a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') ===
          this.pathname.replace(/^\//, '') &&
        location.hostname === this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash)
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault()
          $('html, body').animate(
            {
              scrollTop: target.offset().top - topoffset + 2,
            },
            500,
          )
          return false
        }
      }
    })
})
