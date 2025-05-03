<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer autoloader
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Put your SMTP settings here
$smtp_host = 'mail.hpweb.in'; // Use your SMTP server's domain here
$smtp_port = 587; // Use the appropriate port for your SMTP server
$smtp_username = 'mail@hpweb.in'; // Your SMTP username
$smtp_password = 'Harshal@22'; // Your SMTP password

// Put your contacting email here
$php_main_email = "patilharshal459@gmail.com";

// Fetching Values from URL
$php_name = $_POST['ajax_name'];
$php_email = $_POST['ajax_email'];
$php_message = $_POST['ajax_message'];

// Sanitizing email
$php_email = filter_var($php_email, FILTER_SANITIZE_EMAIL);

// After sanitization, validation is performed
if (filter_var($php_email, FILTER_VALIDATE_EMAIL)) {
    $php_subject = "Message from contact form";

    // Create a PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Set up SMTP
        $mail->isSMTP();
        $mail->Host = $smtp_host;
        $mail->Port = $smtp_port;
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = 'tls'; // Use 'ssl' or 'tls' as appropriate
        $mail->Username = $smtp_username;
        $mail->Password = $smtp_password;

        // Set up email content
        $from_email = 'maill@hpweb.in'; // Use an email address from hpweb.in
        $from_name = 'Harshal Patil'; // Sender's name
        $mail->setFrom($from_email, $from_name);
        $mail->addAddress($php_main_email);
        $mail->addCC($php_email);
        $mail->isHTML(true);
        $mail->Subject = $php_subject;

        // Compose the email message
        $php_template = '<div style="padding:50px;">Hello ' . $php_name . ',<br/>'
            . 'Thank you for contacting us.<br/><br/>'
            . '<strong style="color:#f00a77;">Name:</strong>  ' . $php_name . '<br/>'
            . '<strong style="color:#f00a77;">Email:</strong>  ' . $php_email . '<br/>'
            . '<strong style="color:#f00a77;">Message:</strong>  ' . $php_message . '<br/><br/>'
            . 'This is a Contact Confirmation mail.'
            . '<br/>'
            . 'We will contact you as soon as possible .</div>';
        $mail->Body = $php_template;

        // Send the email
        $mail->send();
        echo "";
    } catch (Exception $e) {
        echo "<span class='contact_error'>Message could not be sent. Mailer Error: {$mail->ErrorInfo}</span>";
    }
} else {
    echo "<span class='contact_error'>* Invalid email *</span>";
}
?>
