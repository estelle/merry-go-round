
var mgr = {

  mgrID: '',

  init: function (id) {
    mgr.mgrID = id;
    mgr.activateMerryGoRound();  
  },

  activateMerryGoRound : function () {
    var radios = document.querySelectorAll('#' + mgr.mgrID +' input[type="radio"]');
      for(var i = 0; i < radios.length; i++) {
        radios[i].addEventListener('change', function (e) {
          mgr.mgrChange(e.target.dataset.value);
        })
    }
  },

  mgrChange: function (value) {
    document.querySelector('.mgr-labels').setAttribute('class', 'mgr-labels left' + value);
  }
}