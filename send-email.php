<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
$config = require __DIR__ . '/../config.php';


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'mail.saiful-bahri.pro';
        $mail->SMTPAuth   = true;
        $mail->Username   = $config['email'];
        $mail->Password   = $config['password'];
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        $mail->setFrom('contact@saiful-bahri.pro', 'Saiful Bahri Website');
        $mail->addAddress('contact@saiful-bahri.pro');

        $name    = $_POST['name'];
        $email   = $_POST['email'];
        $message = $_POST['message'];
        $services = [];
        if (isset($_POST['website'])) $services[] = "Website";
        if (isset($_POST['branding'])) $services[] = "Branding";
        if (isset($_POST['ecommerce'])) $services[] = "Ecommerce";
        if (isset($_POST['seo'])) $services[] = "Portfolio";
        $serviceList = implode(", ", $services);

        $mail->isHTML(true);
        $mail->Subject = 'New Contact Request';
        $mail->Body    = "
            <strong>Name:</strong> $name<br>
            <strong>Email:</strong> $email<br>
            <strong>Services:</strong> $serviceList<br><br>
            <strong>Message:</strong><br>$message
        ";

        $mail->send();
        echo "success";
    } catch (Exception $e) {
        echo "Mailer Error: {$mail->ErrorInfo}";
    }
}
?>