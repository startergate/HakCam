window.onload = function() {
  var sid = new SID('HakCam');
  if (!localStorage.sid_clientid) {
    sid.createClientID(navigator.userAgent);
  }
  if (localStorage.sid_clientid) {
    console.log($('.realLogin'));
    document.cookie = 'sid_clientid=' + sid.getClientID();
    $('.realLogin').attr('href', 'http://sid.donote.co:3000/user/login?clientid=' + localStorage.sid_clientid + '&headTo=http://localhost:3000/user/auth');
  }
}