<?php
//set url
$url = 'https://us3.api.mailchimp.com/3.0/lists';
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

//set new list(Audience) data
$data_arr = [
    'name' => 'bear_tset_api_fatherday',
    'contact' => ["company"=> "RisingBrunch",
                    "address1"=> "No. 686, Chengqing Rd., Sanmin Dist",
                    "address2"=> "",
                    "city"=> "Kaohsiung",
                    "state"=> "GA",
                    "zip"=> "80770",
                    "country"=> "Taiwan",
                    "phone"=> ""],
    'permission_reminder'=>'this is permission_reminder',
    'campaign_defaults'=> ["from_name"=> "BEAR",
                        "from_email"=> "jamieperng@gmail.com",
                        "subject"=> "",
                        "language"=> "en"],
                        'email_type_option'=>true,
];

$data = json_encode($data_arr);

curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Execution API
$output = curl_exec($ch); 
//end curl
curl_close($ch);
//Put the reply on the screen
echo $output;
?>