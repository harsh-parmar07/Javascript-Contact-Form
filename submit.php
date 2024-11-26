<?php

print_r($_POST);

$message = "HTML form";

$to      = 'parmarharsh079@gmail.com';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: webmaster@example.com'       . "\r\n" .
                'Reply-To: webmaster@example.com' . "\r\n" .
                'X-Mailer: PHP/' . phpversion();

//mail($to, $subject, $message, $headers);

$connect = mysqli_connect(
    'sql306.infinityfree.com',
    'if0_37424778',
    '19Bece54020',
    'if0_37424778_portfolio'
);

$query = 'INSERT INTO contact(
            first,
            last,
            email,
            message
        ) VALUES (
            "'.$_POST['fname'].'",
            "'.$_POST['lname'].'",
            "'.$_POST['email'].'",
            "'.$_POST['message'].'"
        )';

mysqli_query($connect, $query); 