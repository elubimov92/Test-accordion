(function () {

  var elems = document.querySelectorAll('.block'),
      text = document.querySelectorAll('.text-block');

  console.log(elems);

  Array.from(text).forEach(function (item, i, text) {
    console.log(item.parentNode);
    console.log(i);
    item.parentNode.addEventListener('click', function (e) {
     var active = document.querySelectorAll('.active'),
        activeText = this.children[1];
     console.log(active.length);
      if(active.length > 0) {
        activeText.classList.add('active');
        active[0].classList.remove('active');


      } else {
        activeText.classList.toggle('active');
      }
   // animation1(activeText);
    });
  });
})();
// пытался создать анимацию на js вышло только открытие закрытие не вышло поэтому вызов фунции закоментировал
var animation1 = function (e) {
  console.log('работает');
  var activeText = e;
  console.log(activeText);

  var start = Date.now();
  var timer = setInterval(function () {


    var timePassed = Date.now() - start;
    activeText.style.height = timePassed / 20 + 'px';
    if(timePassed > 2000) clearInterval(timer);

  },20)
};
