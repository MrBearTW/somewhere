# Networking Speedrun

## VPC Networking Fundamentals

## Multiple VPC Networks
![](https://cdn.qwiklabs.com/PK9Q%2FN7%2Fg9mhg6%2BbLYn1KoKxPhDN7RqqiA6gtVTtXr4%3D)


## VPC Networks - Controlling Access
控制可否被PING到

## Network Tiers - Optimizing Network Spend
不用CMD可以做一些網路的事情  
https://ping.eu/  

可以調整速度和轉跳點的數量

## Google Cloud Speech API: Qwik Start
Navigation menu > APIs & services > Credentials  
取得API Key  
建立request.json
```json
{
  "config": {
      "encoding":"FLAC",
      "languageCode": "en-US"
  },
  "audio": {
      "uri":"gs://cloud-samples-tests/speech/brooklyn.flac"
  }
}
```

