<?php
//set campaign id
$campaignid = '';
//set url
$url = 'https://us3.api.mailchimp.com/3.0/campaigns/'.$campaignid.'/actions/test';
//set api key
$apikey = '';

//set curl info
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 15);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_USERPWD, "MrBearTW:".$apikey);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['content-type'=>'application/json']);

//set test email data
$arr = [
    "test_emails" => ["jamieperng@gmail.com"],
    "send_type"=>"html",
];

$data = json_encode($arr);

curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Execution API
$output = curl_exec($ch); 
//end curl
curl_close($ch);
//Put the reply on the screen
echo $output;
?>