// nav bar
const iconNav = document.querySelector('.nav-icon');
if (iconNav) {
  const navBody = document.querySelector('.nav-body');
  iconNav.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconNav.classList.toggle('_active');
    navBody.classList.toggle('_active');
  });
}

// bottle
var n = 0;

      function botButton1() {
        if (n == 0) {
          document.getElementById('botimg')
          .src = "../store/img/bottle/bot1.jpg";
          n = 1;
        }
        else if (n == 1) {
          document.getElementById('botimg')
          .src ="../store/img/bottle/mainbot.jpg";
          n = 0;
        }
}

var w = 0;

      function botButton2() {
        if (w == 0) {
          document.getElementById('botimg')
          .src = "../store/img/bottle/bot2.jpg";
          w = 1;
        }
        else if (w == 1) {
          document.getElementById('botimg')
          .src ="../store/img/bottle/mainbot.jpg";
          w = 0;
        }
}

var e = 0;

      function botButton3() {
        if (e == 0) {
          document.getElementById('botimg')
          .src = "../store/img/bottle/bot3.jpg";
          e = 1;
        }
        else if (e == 1) {
          document.getElementById('botimg')
          .src ="../store/img/bottle/mainbot.jpg";
          e = 0;
        }
}

var r = 0;

      function botButton4() {
        if (r == 0) {
          document.getElementById('botimg')
          .src = "../store/img/bottle/bot4.jpg";
          r = 1;
        }
        else if (r == 1) {
          document.getElementById('botimg')
          .src ="../store/img/bottle/mainbot.jpg";
          r = 0;
        }
}
      
var t = 0;

      function botButton5() {
        if (t == 0) {
          document.getElementById('botimg')
          .src = "../store/img/bottle/bot5.jpg";
          t = 1;
        }
        else if (t == 1) {
          document.getElementById('botimg')
          .src ="../store/img/bottle/mainbot.jpg";
          t = 0;
        }
}

// shopper

var n = 0;

      function shopButton1() {
        if (n == 0) {
          document.getElementById('shopImg')
          .src = "../store/img/shopper/shop1.jpg";
          n = 1;
        }
        else if (n == 1) {
          document.getElementById('shopImg')
          .src ="../store/img/shopper/shop1.jpg";
          n = 0;
        }
}

var w = 0;

      function shopButton2() {
        if (w == 0) {
          document.getElementById('shopImg')
          .src = "../store/img/shopper/shop2.jpg";
          w = 1;
        }
        else if (w == 1) {
          document.getElementById('shopImg')
          .src ="../store/img/shopper/shop2.jpg";
          w = 0;
        }
}

// hoddie

var n = 0;

      function hodButton1() {
        if (n == 0) {
          document.getElementById('hodImg')
          .src = "../store/img/hoodie/hod1.jpg";
          n = 1;
        }
        else if (n == 1) {
          document.getElementById('hodImg')
          .src ="../store/img/hoodie/mainhod.jpg";
          n = 0;
        }
}

var w = 0;

      function hodButton2() {
        if (w == 0) {
          document.getElementById('hodImg')
          .src = "../store/img/hoodie/hod2.jpg";
          w = 1;
        }
        else if (w == 1) {
          document.getElementById('hodImg')
            .src = "../store/img/hoodie/mainhod.jpg";
        }
}

var e = 0;

      function hodButton3() {
        if (e == 0) {
          document.getElementById('hodImg')
          .src = "../store/img/hoodie/hod3.jpg";
          e = 1;
        }
        else if (e == 1) {
          document.getElementById('hodImg')
          .src ="../store/img/hoodie/mainhod.jpg";
          e = 0;
        }
}

// clever dripper

var m = 0;

      function dripButton1() {
        if (m == 0) {
          document.getElementById('dripImg')
            .src = "../store/img/cleverdripper/drip1.jpg;";
          m = 1;
        }
        else if (m == 1) {
          document.getElementById('dripImg')
            .src = "../store/img/cleverdripper/maindrip.jpg";
          m = 0;
        }
}

var w = 0;

      function dripButton2() {
        if (w == 0) {
          document.getElementById('dripImg')
          .src = "../store/img/cleverdripper/drip2.jpg";
          w = 1;
        }
        else if (w == 1) {
          document.getElementById('dripImg')
          .src ="../store/img/cleverdripper/maindrip.jpg";
          w = 0;
        }
}

var e = 0;

      function dripButton3() {
        if (e == 0) {
          document.getElementById('dripImg')
          .src = "../store/img/cleverdripper/drip3.jpg";
          e = 1;
        }
        else if (e == 1) {
          document.getElementById('dripImg')
          .src ="../store/img/cleverdripper/maindrip.jpg";
          e = 0;
        }
}

var r = 0;

      function dripButton4() {
        if (r == 0) {
          document.getElementById('dripImg')
          .src = "../store/img/cleverdripper/drip4.jpg";
          r = 1;
        }
        else if (r == 1) {
          document.getElementById('dripImg')
          .src ="../store/img/cleverdripper/maindrip.jpg";
          r = 0;
        }
}
      
var d = 0;

      function dripButton5() {
        if (d == 0) {
          document.getElementById('dripImg')
          .src = "../store/img/cleverdripper/drip5.jpg";
          d = 1;
        }
        else if (d == 1) {
          document.getElementById('dripImg')
          .src ="../store/img/cleverdripper/maindrip.jpg";
          d = 0;
        }
}

var y = 0;

      function dripButton6() {
        if (y == 0) {
          document.getElementById('dripImg')
          .src = "../store/img/cleverdripper/drip6.jpg";
          y = 1;
        }
        else if (y == 1) {
          document.getElementById('dripImg')
          .src ="../store/img/cleverdripper/maindrip.jpg";
          y = 0;
        }
}

var u = 0;

      function dripButton7() {
        if (u == 0) {
          document.getElementById('dripImg')
          .src = "../store/img/cleverdripper/drip7.jpg";
          u = 1;
        }
        else if (u == 1) {
          document.getElementById('dripImg')
          .src ="../store/img/cleverdripper/maindrip.jpg";
          u = 0;
        }
}

// card

var r = 0;

      function cardButton1() {
        if (r == 0) {
          document.getElementById('cardImg')
          .src = "../store/img/ukraine/card1.jpg";
          r = 1;
        }
        else if (r == 1) {
          document.getElementById('dripImg')
          .src ="../store/img/ukraine/card1.jpg";
          r = 0;
        }
}
      
var t = 0;

      function cardButton2() {
        if (t == 0) {
          document.getElementById('cardImg')
          .src = "../store/img/ukraine/card2.jpg";
          t = 1;
        }
        else if (t == 1) {
          document.getElementById('dripImg')
          .src ="../store/img/ukraine/card1.jpg";
          t = 0;
        }
}

var y = 0;

      function cardButton3() {
        if (y == 0) {
          document.getElementById('cardImg')
          .src = "../store/img/ukraine/card4.jpg";
          y = 1;
        }
        else if (y == 1) {
          document.getElementById('dripImg')
          .src ="../store/img/ukraine/card1.jpg";
          y = 0;
        }
}

var u = 0;

      function cardButton4() {
        if (u == 0) {
          document.getElementById('cardImg')
          .src = "../store/img/ukraine/card3.jpg";
          u = 1;
        }
        else if (u == 1) {
          document.getElementById('cardImg')
          .src ="../store/img/ukraine/card1.jpg";
          u = 0;
        }
}

