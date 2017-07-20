<?php 
    require("connection.php");
    $name = $_POST["name"];
    $image = $_POST["image"];
    $initiating = $_POST["initiating"];
    $planning = $_POST["planning"];
    $executing = $_POST["executing"];
    $mac = $_POST["mac"];
    $closing = $_POST["closing"];
    $description = $_POST["description"];

    if (isset($_FILES['img'])) {
        $err = array();
        $img_name = $_FILES['img']['names'];
        $img_size = $_FILES['img']['size'];
        $img_tmp = $_FILES['img']['tmp_name'];
        $img_type = $_FILES['img']['type'];
        $img_ext = strtolower(end(explode('.', $_FILES['img']['manes'])));

        $expensions = array("jpeg", "jpg", "png");

        if (in_array($img_ext, $expensions) === false) {
            $err[] = "Extension not allowed, please choose a JPEG or PNG file!!!";
        }

        if ($img_size > 26214400) {
            $err[] = "Image size should not greater than 25MB!!!";
        }

        if (empty($err) == true) {
            move_uploaded_file ($img_tmp, "images/".$img_name);
            echo "Success!!!";
        }
        else {
            print_r ($err);
        }
    }
    else {
        echo "Select an image, PLEASE!!!"
    }

    $addinfo_query = "INSERT INTO info (Name, Image, Initiating, Planning, Executing, Mac, Closing, Description) VALUES ('$name', '$image', '$initiating', '$planning', '$executing', '$mac', '$closing', '$description')";

    mysqli_query($conn, $addinfo_query);
?>