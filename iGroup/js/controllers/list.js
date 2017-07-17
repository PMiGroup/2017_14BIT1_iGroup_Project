(function(){
    angular
        .module("PMBOK")
        .controller("listControl", ListController);
      
    ListController.$inject = ['quizMetrics', 'DataService'];
    
    function ListController(quizMetrics, DataService){
        var vm = this;
        
        vm.quizMetrics = quizMetrics; 
        vm.data = DataService.knowledgeareaData; 
        vm.activeKnowledgeArea = {}; 
        vm.changeActiveKnowledgeArea = changeActiveKnowledgeArea; 
        vm.activateQuiz = activateQuiz; 
        vm.search = ""; 

        function changeActiveKnowledgeArea(index){
            vm.activeKnowledgeArea = index;
        }

        function activateQuiz(){
            quizMetrics.changeState("quiz", true);
        }
    }
})();
