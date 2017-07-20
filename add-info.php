<?php include("header.php"); ?>
    <body>        
        <div class="container">            
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                
            </div>

            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">                
                <form method="POST" class="form-horizontal" role="form">
                        <div class="form-group">
                            <legend>New Knowledge Areas</legend>
                        </div>                
                        <div class="form-group">
                            <span class="label">Name</span>
                            <input class="form-control" placeholder="Enter name" type="text" name="name" id="name">
                        </div>
                        <div class="form-group">
                            <span class="label">Image</span>
                            <input class="form-control" type="file" name="image" id="img">
                        </div>
                        <div class="form-group">
                            <span class="label">Initiating</span>
                            <input class="form-control" placeholder="Enter initiating" type="text" name="initiating" id="init">
                        </div>
                        <div class="form-group">
                            <span class="label">Planning</span>
                            <input class="form-control" placeholder="Enter planning" type="text" name="planning" id="plan">
                        </div>
                        <div class="form-group">
                            <span class="label">Executing</span>
                            <input class="form-control" placeholder="Enter executing" type="text" name="executing" id="exec">
                        </div>
                        <div class="form-group">
                            <span class="label">Monitoring and Controlling</span>
                            <input class="form-control" placeholder="Enter monitoring and controlling" type="text" name="mac" id="mac">
                        </div>
                        <div class="form-group">
                            <span class="label">Closing</span>
                            <input class="form-control" placeholder="Enter closing" type="text" name="closing" id="close">
                        </div>
                        <div class="form-group">
                            <span class="label">Description</span>
                            <textarea class="form-control" placeholder="Enter description" rows="5" cols="100" type="text" name="description" id="description"></textarea>
                        </div>
                        <div class="form-group">
                             <button type="button" class="btn btn-primary add-info" id="add-info">ADD</button>
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
        $("#add-info").click(function() {    
            $.post("add-info-ajax.php", 
            {
                name: $("#name").val(), 
                image: $("#img").val(), 
                initiating: $("#init").val(), 
                planning: $("#plan").val(), 
                executing: $("#exec").val(), 
                mac: $("#mac").val(), 
                closing: $("#close").val(), 
                description: $("#description").val()
            }, 
            function(data, status) {
                if(status=="success")
                {
                    alert("ADD SUCCESSFULLY!!!")
                }
	        });
        });
    });
</script>