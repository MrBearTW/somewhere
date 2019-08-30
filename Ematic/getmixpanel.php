<?php
// 日期的for迴圈還沒補上
// php.ini memory_limit=200M 建議要調200M以上 預設的128太小
// 把$mixpanel_api_secret 換成 api_key 應該就可以了
require_once 'setkey.php';

$ch = curl_init();

$mixpanelapisecret = $mixpanel_api_secret;
$date = "2019-08-13";
$fsts = "from_date=" . $date . "&to_date=" . $date;

curl_setopt($ch, CURLOPT_URL, 'https://data.mixpanel.com/api/2.0/export/');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $fsts);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_USERPWD, $mixpanelapisecret . ':' . '');

$headers = array();
$headers[] = 'Content-Type: application/x-www-form-urlencoded';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}

$filename = "$date.json";
file_put_contents($filename, $result);

curl_close($ch);
