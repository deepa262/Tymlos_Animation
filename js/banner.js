 $(function(){
  // WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.flashAdImpressionTrack('banner-ad')");
  // WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.idleSlideTimeSeconds(20)");

   $("#pi").on("click", function(){
    console.log("pi button clicked");
          window.open("http://radiuspharm.com/wp-content/uploads/tymlos/tymlos-prescribing-information.pdf");
     WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.openChildBrowser('http://radiuspharm.com/wp-content/uploads/tymlos/tymlos-prescribing-information.pdf', '<div data-advtype=Prescribing-Information/>', 'timeoutMinutes: 2.5')");

  });
     
      $("#ppi").on("click", function(){
    console.log("pi button clicked");
              window.open("http://radiuspharm.com/wp-content/uploads/tymlos/tymlos-medication-guide.pdf");
     WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.openChildBrowser('http://radiuspharm.com/wp-content/uploads/tymlos/tymlos-medication-guide.pdf', '<div data-advtype=Medication-Guide/>', 'timeoutMinutes: 2.5')");

  });
       $("#pi1").on("click", function(){
    console.log("pi button clicked");
          window.open("http://radiuspharm.com/wp-content/uploads/tymlos/tymlos-prescribing-information.pdf");
     WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.openChildBrowser('http://radiuspharm.com/wp-content/uploads/tymlos/tymlos-prescribing-information.pdf', '<div data-advtype=Prescribing-Information/>', 'timeoutMinutes: 2.5')");

  });
     
      $("#ppi1").on("click", function(){
    console.log("pi button clicked");
              window.open("http://radiuspharm.com/wp-content/uploads/tymlos/tymlos-medication-guide.pdf");
     WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.openChildBrowser('http://radiuspharm.com/wp-content/uploads/tymlos/tymlos-medication-guide.pdf', '<div data-advtype=Medication-Guide/>', 'timeoutMinutes: 2.5')");

  });
            $("#BottomBar").on("click", function BorderAppear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
   .to(BottomBar1, 1, { width:1080,height:60,top:0,zIndex:8,opacity:1})
    .to(isi, 1, { width: 1080,height:1788,top:0,zIndex:7,marginTop:170}, '-=1')
      .to(BottomBar, 1, { opacity:0}, '-=1')
  });
     $("#BottomBar1").on("click", function Border1Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  .to(BottomBar1 , 1, {top:1218})
 .to(isi, 1, { width: 1080,height:555,top:1210,zIndex:9}, '-=1')
  .to(BottomBar , 1, { width: 1080,height:40,top:1218,zIndex:10,opacity:1}, '-=1') 
  });

  var pressTimer;

  $("#overall_mask").on("touchend", function(){
    clearTimeout(pressTimer);
    return false;
  }).on("touchstart", function(){
    pressTimer = window.setTimeout(function(){
      WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.idleSlideActivateLauncherPanel('100', '700')");
    },1000)
    return false;
  });

});

function startScrolling(waitTime){
  delayScrollingStart = waitTime;
  setTimeout(function autoScroll(delayScrollingStart){
    ascroll = setInterval(function(){
      elem = $("#isi")[0];
      if (elem.scrollTop != 3200){
        elem.scrollTop += 1;
      }
    }, 28);
  }, delayScrollingStart);
}

// Begin non-ISI animation code

function ArmFade(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  .to(mainBanner, 80, {opacity:0})
}
function ArmFade1(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  .to(mainBanner1, 10, {opacity:1}, '+=0.5')
}
function ArmAppear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
   .from(mainBanner, 19, {scale:2.3, transformOrigin:"10% 30%",overflow:"hidden"})
}
function ArmAppear1(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  .from(mainBanner1, 19, {scale:2.3, transformOrigin:"10% 30%",overflow:"hidden"})  
      
}
function headline1Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
    .from(headline1, 1, {opacity:0}, '-=0.5')
}
function headline2Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  
   .to(headline1, 1, {opacity:0}, '-=0.5')
    .from(headline2, 1, {opacity:0}, '-=0.5')
}
function headline3Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
    .to(headline2, 1, {opacity:0}, '-=0.5')
    .from(headline3, 1, {opacity:0}, '-=0.5')
}

function headline4Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl 
      .to(headline3, 1, {opacity:0}, '-=0.5')
        .from(isi, 1, {opacity:0})
     .from(BottomBar, 1, {opacity:0}, '-=1')
     .from(BottomBar1, 1, {opacity:0}, '-=1')
     .from(offer, 1, {opacity:0}, '-=1')
    .from(headline4, 1, {opacity:0})
}

function headline5Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
   .to(headline4, 1, {opacity:0}, '-=0.5')  
    .to(mainBanner, 1, {opacity:0}, '-=0.5')  
    .from(headline5, 1, {opacity:0}, '-=0.2')
     .from(cta, 1, {opacity:0}, '+=0.2')
}

function animate(){
   startScrolling(12000);
    ArmAppear(0);
    ArmAppear1(0);
    ArmFade(7);
    ArmFade1(8);
    headline1Appear(1);
    headline2Appear(3);
    headline3Appear(6);
    headline4Appear(9);
    headline5Appear(16);
//  isiAppear(10);
   
//    ArmZoom(0);
}
// End non-ISI animation code

$(document).on("touchstart", "#isi", function(){
 clearInterval(ascroll);
 WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.idleSlideTimeSeconds(15)"); 
});

function onWallboardIdleSlideDisplay(){
  console.log("onWallboardIdleSlideDisplay");
}

function onWallboardIdleSlideTimerStart(){
  console.log("onWallboardIdleSlideTimerStart");
}

function onWallboardIdleSlideTimerStop(){
  clearInterval(ascroll);
}

animate();
