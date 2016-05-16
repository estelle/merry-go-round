
var mgr = {

  arrowButtons: true, // set to false if no arrows on your mgr
  mgrID: '',

  init: function (id) {
    mgr.mgrID = id;
    mgr.activateMerryGoRound();  
  },

  activateMerryGoRound : function () {
    var radios = document.querySelectorAll('#' + mgr.mgrID +' input[type="radio"]'),
        i = 0,
        l = radios.length;
    if(l) {
      if(l > 1  && mgr.arrowButtons) { // if you have more than one card, add back and forward buttons for sited users
        mgr.activateForwardAndBack();
      } 
      for(i = 0; i < l; i++) {
        radios[i].addEventListener('change', function (e) {
          mgr.mgrChange(e.target.dataset.value);
        })
      }
    }
  },

  // Activate arrows if there is more than one item and arrows are included
  activateForwardAndBack: function () {
    var arrowButtons = document.querySelectorAll('#' + mgr.mgrID +' [data-move]'),
        l = arrowButtons.length;
    for (var i = 0; i < l; i++) {
      arrowButtons[i].removeAttribute('hidden');arrowButtons[i].addEventListener('click', function(e) {
        mgr.moveForwardOrBack(e);
      });
      /*
      If you want to make the arrow buttons keyboardable then they have to be visible to screen readers:
       // enable keyboard focus
       //arrowButtons[i].setAttribute('tabindex', 0);

       // add an aria-label so something is read when arrows get keyboard focus
       //arrowButtons[i].setAttribute('aria-label', 'Go ' + arrowButtons[i].dataset.move + ' one radio button');
      
      // add the even handler
      arrowButtons[i].addEventListener('keyup', function(e) {
        if(e.keyCode == 13) {
          mgr.moveForwardOrBack(e);
          // add aria live to so when selection has changed, the user knows it.
        }
      });
      */
    }
  },

  moveForwardOrBack: function (e) {
        var name = e.target.dataset.mgr,
            buttons = document.querySelectorAll('input[name=' + name + ']'),
            move = (e.target.dataset.move == 'forward') ? 1 : -1,
            selectedButton = +document.querySelector('input[name=' + name + ']:checked').dataset.value,
            newValue = (buttons.length + selectedButton + move) % buttons.length;
        buttons[newValue].checked = true;
        mgr.mgrChange(newValue);
  },

  mgrChange: function (value) {
    document.querySelector('.mgr-labels').setAttribute('class', 'mgr-labels left' + value);
  }
}