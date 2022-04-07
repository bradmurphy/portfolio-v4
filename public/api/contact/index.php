<?php
    header("Access-Control-Allow-Origin: *");
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);
    date_default_timezone_set('America/New_York');

    if (empty($_POST['fname']) && empty($_POST['email'])) die();

    if ($_POST) {

        // set response code - 200 OK
        http_response_code(200);
        $subject = "BRADMURPHYDEV.COM | Website Inquiry";
        $to = "bm.dev84@gmail.com";
        $from = 'From: ' . $_POST['name'];
        $time = date('F j, Y g:i A', time());
        $message = $_POST['message'];

        // message formatting
        $msg = "$from \r\n$time \r\n\r\nMessage: \r\n$message";

        // headers
        $headers = 'From: ' . $_POST['email'];;
        mail($to, $subject, $msg, $headers);

        // echo json_encode( $_POST );
        echo json_encode(["sent" => true]);
    } else {

        // feed error
        echo json_encode(["sent" => false]);
    }

?>