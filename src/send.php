<?php


require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$data = $_POST;

$username = $data['username'];
$userphone = $data['userphone'];
$time = $data['time'];
$usermessage = $data['usermessage'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'linkers017@yandex.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '3208655744'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('linkers017@yandex.ru'); // от кого будет уходить письмо?
$mail->addAddress('romeo-gry@mail.ru');     // Кому будет уходить письмо

if($time != '') {

    $mail->Subject = 'Запись на прием';
    $mail->Body = "Поступила новая заявка от " . $username . " на " . $time . ".\n\nКонтактный телефон: " . $userphone;

    if(!$mail->send()) {
        echo '1 не отправил';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
       echo '1 отправил';
    }

} else if($usermessage != '') {

    $mail->Subject = 'Пользователь оставил вопрос';
    $mail->Body = "Поступил новый вопрос от клиента по имени:  " . $username . "\nКонтактный телефон: " . $userphone . "\n\nВопрос: " . $usermessage;

    if(!$mail->send()) {
        echo '2 не отправил';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
       echo '2 отправил';
    }

}

//$mail->Subject = 'Запись на прием';
//$mail->Body = "Поступила новая заявка от " . $username . " на " . $time . ".\n\nКонтактный телефон: " . $userphone;



?>