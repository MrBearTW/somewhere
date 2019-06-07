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

#
2019/06/07  
## Running a Node.js Container in Kubernetes with Container Engine
### Creating a Cluster
`gcloud config set compute/zone us-central1-a`  
### Create a New Cluster
`gcloud container clusters create hello-world`  
### Building and Publishing the Node.js App
`echo $DEVSHELL_PROJECT_ID`  
`git clone https://github.com/GoogleCloudPlatform/nodejs-docs-samples.git`  
`cd nodejs-docs-samples/containerengine/hello-world/`  
`cat Dockerfile`  
`docker build -t gcr.io/$DEVSHELL_PROJECT_ID/hello-node:1.0 .`  

`gcloud docker -- push gcr.io/$DEVSHELL_PROJECT_ID/hello-node:1.0`  
### Deploying the Node.js App
`kubectl run hello-node --image=gcr.io/$DEVSHELL_PROJECT_ID/hello-node:1.0 --port=8080`  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  