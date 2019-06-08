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

# Kubernetes Challenge Speedrun Game 2
2019/06/07  
## Running a Node.js Container in Kubernetes with Container Engine
**Creating a Cluster**  
`gcloud config set compute/zone us-central1-a`  
**Create a New Cluster**  
建立三個nodes的欉集  
`gcloud container clusters create hello-world`  
**Building and Publishing the Node.js App**  
Set your project ID  
`echo $DEVSHELL_PROJECT_ID`  
`git clone https://github.com/GoogleCloudPlatform/nodejs-docs-samples.git`  
`cd nodejs-docs-samples/containerengine/hello-world/`  
**Build the container**  
`cat Dockerfile`  
`docker build -t gcr.io/$DEVSHELL_PROJECT_ID/hello-node:1.0 .`  
**Publish the container**  
為了讓Kubernetes訪問您的映像，您需要將其存儲在容器註冊表中  
`gcloud docker -- push gcr.io/$DEVSHELL_PROJECT_ID/hello-node:1.0`  
**Deploying the Node.js App**  
使用kubectl創建pod  
`kubectl run hello-node --image=gcr.io/$DEVSHELL_PROJECT_ID/hello-node:1.0 --port=8080`  
`kubectl get deployments`  
**Allow External Traffic**  
`kubectl expose deployment hello-node --name=hello-node --type=LoadBalancer --port=80 --target-port=8080`  
`kubectl get svc hello-node`  
### 結尾測驗
- docker push publish the container image in GCP to [Container Registry]  
- Kubernetes is an open-source container-orchestration system for automating deployment, scaling and management of containerized applications.  
- In Kubernetes environment, kubectl expose creates a [Service], the forwarding rules for the load balancer, and the firewall rules that allow external traffic to be sent to the pod.
  
## Managing Deployments Using Kubernetes Engine

[Cloud Vision API] allows developers to easily integrate vision detection features within applications, including image labeling, face and landmark detection and much more.  

## Kubeflow End to End
(TRUE)Kubeflow will let you organize loosely-coupled microservices as a single unit and deploy them to a variety of locations, whether that's a laptop or the cloud.
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