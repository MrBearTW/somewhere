<?php
$url = 'https://us3.api.mailchimp.com/3.0/lists';
$apikey = '';

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_TIMEOUT, 15);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_USERPWD, "MrBearTW:".$apikey);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$output = curl_exec($ch); 
curl_close($ch); 
echo $output;
?>
