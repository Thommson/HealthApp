  //Wrapping all code in a self-executing anonymous function to prevent global variables.
(function(){

  var setup = {
    setupArray: [],
    init: function(){
        this.cacheDom();
        this.bindEvents();
    },
    cacheDom: function(){
        this.sleepSetupInput = document.getElementById('sleepSetupInput');
        this.weightSetupInput = document.getElementById('weightSetupInput');
        this.dietSetupInput = document.getElementById('dietSetupInput');
        this.workoutSetupInput = document.getElementById('workoutSetupInput');
        this.button = document.getElementById('submitBtn');
    },
    bindEvents: function(){
        this.button.addEventListener('click', submit).bind(this);
    },
    submit: function(){

    }
  }
  //Setting up variables that give access to specific DOM elements



  //Use sql to send and save the values in the DOM elements.

})(); //   <<--- Self-Executing Anonymous Function Ends Here
