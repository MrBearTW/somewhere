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
並輸出成參數  
`export API_KEY=<YOUR_API_KEY>`  
建立request.json  
encoding格式一定要寫  
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
送出後可以回傳存成result.json
```BASH
curl -s -X POST -H "Content-Type: application/json" --data-binary @request.json \
"https://speech.googleapis.com/v1/speech:recognize?key=${API_KEY}" > result.json
```

## Translate Text with the Cloud Translation API


## Classify Text into Categories with the Natural Language API

