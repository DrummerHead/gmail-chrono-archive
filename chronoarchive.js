var addressesAndExpiration = [
  {
    address : "messages-noreply@linkedin.com",
    days : 3
  },
  {
    address : "no-reply@slack.com",
    days : 5
  },
  {
    address : "info@twitter.com",
    days : 5
  },
  {
    address : "info@meetup.com",
    days : 5
  },
  {
    address : "digest-noreply@quora.com",
    days : 7
  }
];

var MILIS_PER_DAY = 1000 * 60 * 60 * 24;
var nowDate = new Date();

function isMailContained(sample, mail){
  return (function(sample, mail){
    this.regexCache = this.regexCache || {};
    if(this.regexCache[mail] === undefined){
      this.regexCache[mail] = new RegExp(mail);
    }
    return this.regexCache[mail].test(sample);
  })(sample, mail);
}

function haveNDaysPassed(days, date){
  return date.getTime() + days * MILIS_PER_DAY <= nowDate.getTime();
}

function isOld(message){
  var from = message.getFrom();
  var date = message.getDate();
  for(var i = 0, j = addressesAndExpiration.length; i < j; i++){
    if(isMailContained(from, addressesAndExpiration[i].address)){
      return haveNDaysPassed(addressesAndExpiration[i].days, date);
    }
  }
}

function checkOldEphemeralMail() {
  var inbox = GmailApp.getInboxThreads();
  for(var i = 0, j = inbox.length; i < j; i++){
    var message = inbox[i].getMessages()[0];
    if(isOld(message)){
      inbox[i].moveToArchive();
    }
  }
}
