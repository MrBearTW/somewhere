<?php
// php.ini memory_limit=200M 建議要調300M以上 預設的太小
// 把$mixpanel_api_secret 換成 api_key 應該就可以了
require_once 'setkey.php';

for ($d = strtotime("2018-09-08"); $d <= strtotime("2018-09-09"); $d = strtotime("+1 day", $d)) {

    $date = date("Y-m-d", $d);

    $fsts = "from_date=" . $date . "&to_date=" . $date;


    $ch = curl_init();
    // $mixpanelapisecret = $mixpanel_api_secret;

    curl_setopt($ch, CURLOPT_URL, 'https://data.mixpanel.com/api/2.0/export/');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $fsts);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_USERPWD, $mixpanel_api_secret . ':');

    $headers = array();
    $headers[] = 'Content-Type: application/x-www-form-urlencoded';
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $result = curl_exec($ch);
    if (curl_errno($ch)) {
        echo 'Error:' . curl_error($ch);
    }
echo memory_get_usage() . " - begin\n";
    $filename = "$date.json";
    file_put_contents($filename, $result);
    curl_close($ch);
echo memory_get_usage() . " - function end\n";
    unset($result);
echo memory_get_usage() . " - end\n\n";

}
