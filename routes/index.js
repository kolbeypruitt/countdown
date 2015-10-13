var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Full-Stack Countdown' });
});

router.post('/cohort', function(req, res, next) {
  var countdown;
  if (req.body.cohort=='8') {
    today = new Date();
    BigDay = new Date("December 25, 2020");
    msPerDay = 24 * 60 * 60 * 1000 ;
    timeLeft = (BigDay.getTime() - today.getTime());
    e_daysLeft = timeLeft / msPerDay;
    daysLeft = Math.floor(e_daysLeft);
    e_hrsLeft = (e_daysLeft - daysLeft)*24;
    hrsLeft = Math.floor(e_hrsLeft);
    minsLeft = Math.floor((e_hrsLeft - hrsLeft)*60);
    countdown = daysLeft + " days " + hrsLeft +" hours and " + minsLeft + " minutes left Until December 25th 2020";

  }
  res.render('index', { title: 'Full-Stack Countdown', countdown: countdown });
});
module.exports = router;
