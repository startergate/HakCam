var sid = new SID('HIVE');
if (!localStorage.sid_clientid) {
  sid.createClientID(navigator.userAgent);
}
if (localStorage.sid_clientid) {
  document.cookie = 'sid_clientid=' + sid.getClientID();
  $('.realLogin').attr('href', 'http://sid.donote.co:3000/user/login?clientid=' + localStorage.sid_clientid + '&headTo=http://localhost:3000/user/auth');
}