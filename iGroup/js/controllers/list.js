(function(){
    angular
        .module("pokemonFacts")
        .controller("listControl", ListController);
      
    ListController.$inject = ['quizMetrics', 'DataService'];
    
    function ListController(quizMetrics, DataService){
        var vm = this;
        
        vm.quizMetrics = quizMetrics; 
        vm.data = DataService.pokemonData; 
        vm.activePokemon = {}; 
        vm.changeActivePokemon = changeActivePokemon; 
        vm.activateQuiz = activateQuiz; 
        vm.search = ""; 

        function changeActivePokemon(index){
            vm.activePokemon = index;
        }

        function activateQuiz(){
            quizMetrics.changeState("quiz", true);
        }
    }
})();
