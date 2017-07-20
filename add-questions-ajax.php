<?php 
    require("connection.php");
    // $id = $_POST["ID"];
    $question = $_POST["question"];
    $answera = $_POST["answera"];
    $answerb = $_POST["answerb"];
    $answerc = $_POST["answerc"];
    $answerd = $_POST["answerd"];

    $addquestions_query = "INSERT INTO questionaire (Question, AnswerA, AnswerB, AnswerC, AnswerD) VALUES ('$question', '$answera', '$answerb', '$answerc', '$answerd')";

    mysqli_query($conn, $addquestions_query);
?>