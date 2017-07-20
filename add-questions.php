<?php include("header.php"); ?>
    <body>        
        <div class="container">            
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                
            </div>

            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">                
                <form method="POST" class="form-horizontal" role="form">
                        <div class="form-group">
                            <legend>New Question</legend>
                        </div>                
                        <!-- <div class="form-group">
                            <span class="label">ID</span>
                            <input class="form-control" placeholder="Enter ID" type="text" name="ID" id="id">
                        </div> -->
                        <div class="form-group">
                            <span class="label">Question</span>
                            <textarea class="form-control" placeholder="Enter question" rows="4" cols="100" type="text" name="question" id="question"></textarea>
                        </div>
                        <div class="form-group">
                            <span class="label">Answer A</span>
                            <textarea class="form-control" placeholder="Enter answer A" rows="4" cols="100" type="text" name="answera" id="answera"></textarea>
                        </div>
                        <div class="form-group">
                            <span class="label">Answer B</span>
                            <textarea class="form-control" placeholder="Enter answer B" rows="4" cols="100" type="text" name="answerb" id="answerb"></textarea>
                        </div>
                        <div class="form-group">
                            <span class="label">Answer C</span>
                            <textarea class="form-control" placeholder="Enter answer C" rows="4" cols="100" type="text" name="answerc" id="answerc"></textarea>
                        </div>
                        <div class="form-group">
                            <span class="label">Answer D</span>
                            <textarea class="form-control" placeholder="Enter answer D" rows="4" cols="100" type="text" name="answerd" id="answerd"></textarea>
                        </div>
                        <div class="form-group">
                             <button type="button" class="btn btn-primary add-question" id="add-question">ADD</button>
                        </div>
                </form>                
            </div>

            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                
            </div>
            
        </div>        
    </body>
</html>

<script>
    $(document).ready(function () {
        $("#add-question").click(function() {    
            $.post("add-questions-ajax.php", 
            {
                // id: $("#id").val(), 
                question: $("#question").val(), 
                answera: $("#answera").val(), 
                answerb: $("#answerb").val(), 
                answerc: $("#answerc").val(), 
                answerd: $("#answerd").val()
            }, 
            function(data, status) {
                if(status=="success") {
                    alert("ADD SUCCESSFULLY!!!")
                }
	        });
        });
    });
</script>