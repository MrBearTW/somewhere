# BigQuery For Data Analysis
https://google.qwiklabs.com/quests/55?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&search_id=2529693  
  
啟動project`gcloud config set project [PROJECT_ID]`  
  
## Introduction to SQL for BigQuery and Cloud SQL
### The Basics of SQL
基礎教學  
`SELECT USER FROM example_table`  
`SELECT USER, SHIPPED FROM example_table`  
`SELECT USER FROM example_table WHERE SHIPPED='YES'`  
### Exploring the BigQuery Console
Navigation menu select BigQuery  
### Uploading queryable data
使用這個資料london bicycle hires  
`SELECT end_station_name FROM `bigquery-public-data.london_bicycles.cycle_hire`;`  
`SELECT * FROM `bigquery-public-data.london_bicycles.cycle_hire` WHERE duration>=1200;`  
`SELECT * FROM `bigquery-public-data.london_bicycles.cycle_hire` WHERE duration>=1200;`  
Projects contain datasets, and datasets contain tables.  
### More SQL Keywords: GROUP BY, COUNT, AS, and ORDER BY
`SELECT start_station_name FROM `bigquery-public-data.london_bicycles.cycle_hire` GROUP BY start_station_name;`  
`SELECT start_station_name, COUNT(*) FROM `bigquery-public-data.london_bicycles.cycle_hire` GROUP BY start_station_name;`  
`SELECT start_station_name, COUNT(*) AS num_starts FROM `bigquery-public-data.london_bicycles.cycle_hire` GROUP BY start_station_name;`  
`SELECT start_station_name, COUNT(*) AS num FROM `bigquery-public-data.london_bicycles.cycle_hire` GROUP BY start_station_name ORDER BY start_station_name;`  
`SELECT start_station_name, COUNT(*) AS num FROM `bigquery-public-data.london_bicycles.cycle_hire` GROUP BY start_station_name ORDER BY num;`  
`SELECT start_station_name, COUNT(*) AS num FROM `bigquery-public-data.london_bicycles.cycle_hire` GROUP BY start_station_name ORDER BY num DESC;`  
### Working with Cloud SQL
建立一個bucket  
### Create a Cloud SQL instance
建立一個mysql資料庫  
### New Queries in Cloud SQL
`USE bike;
CREATE TABLE london1 (start_station_name VARCHAR(255), num INT);`  
`USE bike;
CREATE TABLE london2 (end_station_name VARCHAR(255), num INT);`  
插入一行   
`INSERT INTO london1 (start_station_name, num) VALUES ("test destination", 1);`  
做聯集  
`SELECT start_station_name AS top_stations, num FROM london1 WHERE num>100000
UNION
SELECT end_station_name, num FROM london2 WHERE num>100000
ORDER BY top_stations DESC;`  
  






## Cloud Architecture
### Orchestrating the Cloud with Kubernetes
#### Google Kubernetes Engine
設定環境`gcloud config set compute/zone us-central1-b`  
建立clusters`gcloud container clusters create io`  
#### Get the sample code
`git clone https://github.com/googlecodelabs/orchestrate-with-kubernetes.git`  
`cd orchestrate-with-kubernetes/kubernetes`  
#### Quick Kubernetes Demo
跑一個nginx的容器`kubectl run nginx --image=nginx:1.10.0`  
看到運作中的容器`kubectl get pods`  
對外暴露，建立LoadBalancer  
`kubectl expose deployment nginx --port 80 --type LoadBalancer`  
得到狀態可以看IP`kubectl get services`  
`curl http://<External IP>:80`  
#### Pods
Volumes are data disks that live as long as the pods live, and can be used by the containers in that pod  
share a network namespace =one IP Address per pod  
![](https://cdn.qwiklabs.com/tzvM5wFnfARnONAXX96nz8OgqOa1ihx6kCk%2BelMakfw%3D)
#### Creating Pods
看一下yaml檔`cat pods/monolith.yaml`  
建立Pod`kubectl create -f pods/monolith.yaml`  
看狀態`kubectl get pods`  
`kubectl describe pods monolith`  
#### Interacting with Pods
新開一個Terminal，配對IP  
`kubectl port-forward monolith 10080:80`  
測試  
`curl http://127.0.0.1:10080`回傳{"message":"Hello"}  
`curl http://127.0.0.1:10080/secure`回傳authorization failed  
回傳一個很長的token，密碼是password`curl -u user http://127.0.0.1:10080/login`  
`TOKEN=$(curl http://127.0.0.1:10080/login -u user|jq -r '.token')`將token建立成參數  
`curl -H "Authorization: Bearer $TOKEN" http://127.0.0.1:10080/secure`前面原本被dailed的指令變成可以了  
看LOG資訊`kubectl logs monolith`  
新開一個Terminal 加上-f可以持續看到log`kubectl logs -f monolith`  
進入Pod內執行`kubectl exec monolith --stdin --tty -c monolith /bin/sh`  
在Pod內執行指令`ping -c 3 google.com` 
退出Pod`exit`  
#### Services
![](https://cdn.qwiklabs.com/Jg0T%2F326ASwqeD1vAUPBWH5w1D%2F0oZn6z5mQ5MubwL8%3D)
ClusterIP (internal)：cluster內用的IP  
NodePort：在cluster內每一個node用的IP  
LoadBalancer：給雲端服務導流到在服務的node  
#### Creating a Service
確定在正確的路徑`cd ~/orchestrate-with-kubernetes/kubernetes`
看一下yaml`cat pods/secure-monolith.yaml`  
建立建立建立  
`kubectl create secret generic tls-certs --from-file tls/`  
`kubectl create configmap nginx-proxy-conf --from-file nginx/proxy.conf`  
`kubectl create -f pods/secure-monolith.yaml`
看一下yaml`cat services/monolith.yaml`  
暴露nodeport讓服務被找到`gcloud compute firewall-rules create allow-monolith-nodeport \
  --allow=tcp:31000`
找到這個nodes上的外部IP`gcloud compute instances list`  
試試看`curl -k https://<EXTERNAL_IP>:31000`，但失敗  
#### Adding Labels to Pods
目前monolith service沒有endpoints  
看所有`kubectl get pods`  
看哪一些pod label=monolith`kubectl get pods -l "app=monolith"`  
再加一個條件`kubectl get pods -l "app=monolith,secure=enabled"`找不到  
幫這個pod加一個label`kubectl label pods secure-monolith 'secure=enabled'`
再查一次`kubectl get pods secure-monolith --show-labels`  
查看monolith的服務裡有哪一些Endpoints`kubectl describe services monolith | grep Endpoints`  
`gcloud compute instances list`  
`curl -k https://<EXTERNAL_IP>:31000`  
#### Deploying Applications with Kubernetes
Deployments會確認cluster執行和要求數量相同的nodes  

![](https://cdn.qwiklabs.com/1UD7MTP0ZxwecE%2F64MJSNOP8QB7sU9rTI0PSv08OVz0%3D)  
用Replica Set管理pod啟動和關閉  
也可以用來升級會重啟pod
![](https://cdn.qwiklabs.com/fH4ZxGNxg5KLBy5ykbwKNIS9MIJ9cgcMEDuhB0a9uBo%3D)
若Node3中的pod關閉了，會在Node2中啟動一個Pod讓它維持3個
#### Creating Deployments
將monolith app分成三個部分  
1.auth - Generates JWT tokens for authenticated users.  
2.hello - Greet authenticated users.  
3.frontend - Routes traffic to the auth and hello services  
看一下yaml檔`cat deployments/auth.yaml`  
建立deployments物件
`kubectl create -f deployments/auth.yaml`  
`kubectl create -f services/auth.yaml`  
`kubectl create -f deployments/hello.yaml`  
`kubectl create -f services/hello.yaml`  
`kubectl create configmap nginx-frontend-conf --from-file=nginx/frontend.conf
kubectl create -f deployments/frontend.yaml
kubectl create -f services/frontend.yaml`  
  
### Deployment Manager - Full Production
用Deployment Manager建立模板  
啟用Stackdriver monitori  
設定Uptime Checks and notifications  
配置儀錶板顯示CPU用量和其他數據  
流量測試和模擬停機  
#### Clone the Deployment Manager Sample Templates
`mkdir ~/dmsamples`  
`cd ~/dmsamples`  
`git clone https://github.com/GoogleCloudPlatform/deploymentmanager-samples.git`  
#### Explore the Sample Files
`cd ~/dmsamples/deploymentmanager-samples/examples/v2`  
`ll`  
#### List and examine the Nodejs deployment
`cd nodejs/python`  
`ll`  
![](https://cdn.qwiklabs.com/40UqXM4XpfPlZ%2BOQWaVadL5q1cNctNoC2OHvAS3pxsw%3D)  
frontend.py  
nodejs.py  
#### Customize the Deployment
`gcloud compute zones list`  
修改timezone`nano nodejs.yaml`  
#### Modify the maximum number of instances in the instance group
修改maxSize=4`nano nodejs.py`  
#### Run the Application
Deploy the application`gcloud deployment-manager deployments create advanced-configuration --config nodejs.yaml`  
#### Find the global load balancer forwarding rule IP address
`gcloud compute forwarding-rules list`找到IP_ADDRESS  
`http://<your IP address>:8080`目前看不到  
輸入一段資訊=<enter_a_message>`http://<your forwarding IP address>:8080/?msg=<enter_a_message>`  
`http://<your IP address>:8080`看的到剛剛輸入的<enter_a_message>  
#### Create Stackdriver workspace
主選單中選Monitoring  
#### Configure an uptime check and alert policy in Stackdriver
#### Configure an alerting policy and notification
#### Configure a Dashboard with a Couple of Useful Charts
#### Create a test VM with ApacheBench
`sudo apt-get update`  
`sudo apt-get -y install apache2-utils`  
#### Apply and monitor load
`ab -n 1000 -c 100 http://<Your_IP>:8080/`  
`ab -n 5000 -c 100 http://<Your_IP>:8080/` 
`ab -n 10000 -c 100 http://<Your_IP>:8080/` 
#### Simulate a Service Outage
#### Test your knowledge
#### 結論
Stackdriver collects metrics, events, and metadata from Google Cloud Platform, Amazon Web Services, hosted uptime probes, application instrumentation, and a variety of common application components including Cassandra, Nginx, Apache Web Server, Elasticsearch, and many others.  
  
### Continuous Delivery with Jenkins in Kubernetes Engine 
![](https://cdn.qwiklabs.com/1b%2B9D20QnfRjAF8c6xlXmexot7TDcOsYzsRwp%2FH4ErE%3D)  
#### What is Kubernetes Engine?
Kubernetes Engine is GCP's hosted version of Kubernetes - a powerful cluster manager and orchestration system for containers. Kubernetes is an open source project that can run on many different environments—from laptops to high-availability multi-node clusters; from virtual machines to bare metal. As mentioned before, Kubernetes apps are built on containers - these are lightweight applications bundled with all the necessary dependencies and libraries to run them. This underlying structure makes Kubernetes applications highly available, secure, and quick to deploy—an ideal framework for cloud developers.

##### What is Jenkins?
Jenkins is an open-source automation server that lets you flexibly orchestrate your build, test, and deployment pipelines. Jenkins allows developers to iterate quickly on projects without worrying about overhead issues that can stem from continuous delivery.

#### What is Continuous Delivery / Continuous Deployment?
When you need to set up a continuous delivery (CD) pipeline, deploying Jenkins on Kubernetes Engine provides important benefits over a standard VM-based deployment.

When your build process uses containers, one virtual host can run jobs on multiple operating systems. Kubernetes Engine provides ephemeral build executors—these are only utilized when builds are actively running, which leaves resources for other cluster tasks such as batch processing jobs. Another benefit of ephemeral build executors is speed—they launch in a matter of seconds.

Kubernetes Engine also comes pre-equipped with Google's global load balancer, which you can use to automate web traffic routing to your instance(s). The load balancer handles SSL termination and utilizes a global IP address that's configured with Google's backbone network—coupled with your web front, this load balancer will always set your users on the fastest possible path to an application instance.

Now that we've learned a little bit about Kubernetes, Jenkins, and how the two interact in a CD pipeline, let's go build one.
#### Clone Repository
`gcloud config set compute/zone us-central1-f`  
`git clone https://github.com/GoogleCloudPlatform/continuous-deployment-on-kubernetes.git`  
`cd continuous-deployment-on-kubernetes`  
#### Provisioning Jenkins
#### Creating a Kubernetes cluster
建立cluster  
`gcloud container clusters create jenkins-cd \
--num-nodes 2 \
--machine-type n1-standard-2 \
--scopes "https://www.googleapis.com/auth/projecthosting,cloud-platform"`  
確認執行狀況`gcloud container clusters list`  
拿到認證`gcloud container clusters get-credentials jenkins-cd`  
確認可以連線`kubectl cluster-info`  
#### Install Helm
Helm是一個套件管理器  
下載Helm`wget https://storage.googleapis.com/kubernetes-helm/helm-v2.9.1-linux-amd64.tar.gz`  
`tar zxfv helm-v2.9.1-linux-amd64.tar.gz`  
`cp linux-amd64/helm .`  
給Jenkins權限`kubectl create clusterrolebinding cluster-admin-binding --clusterrole=cluster-admin --user=$(gcloud config get-value account)`  
Grant Tiller是伺服器端的Helm  
`kubectl create serviceaccount tiller --namespace kube-system`  
`kubectl create clusterrolebinding tiller-admin-binding --clusterrole=cluster-admin --serviceaccount=kube-system:tiller`  
啟動Helm`./helm init --service-account=tiller`  
`./helm update`  
確認安裝狀況`./helm version`兩邊應都為2.9.1  
#### Configure and Install Jenkins
`./helm install -n cd stable/jenkins -f jenkins/values.yaml --version 0.16.6 --wait`  
`kubectl get pods`  
建立port給Jenkins UI使用  
`export POD_NAME=$(kubectl get pods -l "component=cd-jenkins-master" -o jsonpath="{.items[0].metadata.name}")`  
`kubectl port-forward $POD_NAME 8080:8080 >> /dev/null &`  
`kubectl get svc`  
這些port是內部才能連線到的  
#### Connect to Jenkins
建立admin密碼`printf $(kubectl get secret cd-jenkins -o jsonpath="{.data.jenkins-admin-password}" | base64 --decode);echo`  
#### Understanding the Application
![](https://cdn.qwiklabs.com/P1T5JBWWprA4iLf%2FB5%2BO6as7otLE25YBde57gzZwSz4%3D)
In backend mode: gceme listens on port 8080 and returns Compute Engine instance metadata in JSON format.  
In frontend mode: gceme queries the backend gceme service and renders the resulting JSON in the user interface.  
#### Deploying the Application
Production: The live site that your users access.  
Canary: A smaller-capacity site that receives only a percentage of your user traffic. Use this environment to validate your software with live traffic before it's released to all of your users.  
`cd sample-app`  
創造namespace隔離環境`kubectl create ns production`  
`kubectl apply -f k8s/production -n production`  
`kubectl apply -f k8s/canary -n production`  
`kubectl apply -f k8s/services -n production`  
`kubectl scale deployment gceme-frontend-production -n production --replicas 4`  
`kubectl get pods -n production -l app=gceme -l role=frontend`有三個  
`kubectl get pods -n production -l app=gceme -l role=backend`有兩個  
`kubectl get service gceme-frontend -n production`  
設定環境參數`export FRONTEND_SERVICE_IP=$(kubectl get -o jsonpath="{.status.loadBalancer.ingress[0].ip}" --namespace=production services gceme-frontend)`  
檢查一下有沒有用`curl http://$FRONTEND_SERVICE_IP/version`  
#### Creating the Jenkins Pipeline
#### Creating a repository to host the sample app source code
建立一個gceme的備份並推送一份上Cloud Source Repository`gcloud alpha source repos create default`  
`git init`  
`git config credential.helper gcloud.sh`  
`git remote add origin https://source.developers.google.com/p/$DEVSHELL_PROJECT_ID/r/default`  
`git config --global user.email "[EMAIL_ADDRESS]"`  
`git config --global user.name "[USERNAME]"`  
`git add .`  
`git commit -m "Initial commit"`  
`git push origin master`  
#### 
很多Jenkins設定
#### Creating the Development Environment
#### Creating a development branch
`git checkout -b new-feature`  
#### Modifying the pipeline definition
修改projectID`nano Jenkinsfile`  
#### Modify the site
改顏色`nano html.go`  
改版本`nano main.go`  
#### Kick off Deployment
`git add Jenkinsfile html.go main.go`  
`git commit -m "Version 2.0.0"`  
`git push origin new-feature`  

#### Deploying a Canary Release
`git checkout -b canary`  
`git push origin canary`  
`export FRONTEND_SERVICE_IP=$(kubectl get -o \
jsonpath="{.status.loadBalancer.ingress[0].ip}" --namespace=production services gceme-frontend)`  
會一直回`while true; do curl http://$FRONTEND_SERVICE_IP/version; sleep 1; done` 
#### Deploying a Canary Release
`git checkout -b canary`  
`git push origin canary`  
`export FRONTEND_SERVICE_IP=$(kubectl get -o \
jsonpath="{.status.loadBalancer.ingress[0].ip}" --namespace=production services gceme-frontend)`  
看有網頁沒有變色`while true; do curl http://$FRONTEND_SERVICE_IP/version; sleep 1; done` 
#### 結尾測驗
本次lab用到的namespaces 1.default 2.production 3.kube-system`kubectl get namespace`  
The Helm chart is a collection of files that describe a related set of Kubernetes resources.  

### Networking 102(需要多看幾次)
![](https://cdn.qwiklabs.com/rRCXB1teOm99S4NPAOU8M89i6%2FDh98eEkXYIizQOykY%3D)  
![](https://cdn.qwiklabs.com/ZoSAjpgR0M9X9iKOwAk%2Fujt4zYPw3SfeQFalG3uaFag%3D)  
#### Google Cloud Network Concepts
![](https://cdn.qwiklabs.com/nRBAyybz%2F%2Btq3cHR0O1QtANUPbu7NBEigKG1xo3vjXY%3D)  
rojects contain Networks which contain Subnetworks, Firewall rules, and Routes  
![](https://cdn.qwiklabs.com/F%2FuKMHO0L60f0vCAeZHtnZsvGYBklTvbCP%2BpZ898R1Y%3D)  
Networks：直接連結資源，管理防火牆和連進連出的設定，可以跨越Region。
Subnetworks：只能在Region內，有auto mode和custom mode。
Auto mode：有預定的IP和gateway  
Custom mode：要自己建立。在一個region內可以有0,1,多個。
#### Create Virtual Private Cloud (VPC) Networks and Instances
建立一個名為mynetwork的auto subnets`gcloud compute networks create mynetwork --subnet-mode=auto`  
建立名為privatenet的custom subnets:`gcloud compute networks create privatenet --subnet-mode=custom`  
建立custom subnet在privatenet內  
`gcloud compute networks subnets create privatesubnet --network=privatenet \
--region=us-central1 --range=10.0.0.0/24 --enable-private-ip-google-access`  
建立等等會用到的instances
`gcloud compute instances create default-us-vm --zone=us-central1-a --network=default`  
`gcloud compute instances create mynet-us-vm --zone=us-central1-a --network=mynetwork`  
`gcloud compute instances create mynet-eu-vm --zone=europe-west1-b --network=mynetwork`  
`gcloud compute instances create privatenet-bastion --zone=us-central1-c \
--subnet=privatesubnet --can-ip-forward`  
`gcloud compute instances create privatenet-us-vm --zone=us-central1-f \
--subnet=privatesubnet`  
#### How Default and User-Created VPC Networks are Configured
#### View Firewall Rules
Navigation menu > VPC network > Firewall rules.  
#### Verify default allow rule
#### 
刪除default-us-vm的instance  
#### Delete the Default network
Navigation menu > VPC network > VPC networks  
刪除Default network  
現在變成這樣  
![](https://cdn.qwiklabs.com/22zTvoQJIz7c%2BqFZfka0Yi0sZo7Q0tSGGiaJz1PatcQ%3D)
#### User-created networks
Navigation menu > Compute Engine > VM instances  
mynet-us-vm 和 mynet-eu-vm SSH連不上
#### Advanced firewall rules
#### Firewall Rules and IAM
The privilege of creating, modifying, and deleting firewall rules is reserved for the compute.securityAdmin role by IAM.  
#### Allow/Ingress Rules
設定一些可以進入SSH和PING的防火牆  
`gcloud beta compute firewall-rules create mynetwork-allow-icmp --network mynetwork \
--action ALLOW --direction INGRESS --rules icmp`  
`gcloud beta compute firewall-rules create mynetwork-allow-ssh --network mynetwork \
--action ALLOW --direction INGRESS --rules tcp:22`  
`gcloud beta compute firewall-rules create mynetwork-allow-internal --network \
mynetwork --action ALLOW --direction INGRESS --rules all \
--source-ranges 10.128.0.0/9`  
`gcloud beta compute firewall-rules list \
--filter="network:mynetwork"`  
一些gcloud可以用關於防火牆的指令  
![](https://cdn.qwiklabs.com/2jjXbzPJvBhvX88IL86fgkPCy54bUpWMsbvNlbG%2BbUk%3D)  
在us內可以ping eu`ping mynet-eu-vm`
#### Deny/Egress Rules
終止可以被PING  
`gcloud beta compute firewall-rules create privatenet-allow-icmp \
--network privatenet --action ALLOW --direction INGRESS --rules icmp`  
`gcloud beta compute firewall-rules create privatenet-allow-ssh \
--network privatenet --action ALLOW --direction INGRESS --rules tcp:22`  
`gcloud beta compute firewall-rules create privatenet-allow-internal \
--network privatenet --action ALLOW --direction INGRESS --rules all \
--source-ranges 10.0.0.0/24`  
`gcloud beta compute firewall-rules list \
--filter="network:mynetwork AND name=mynetwork-deny-icmp"`  
#### Using Cloud Routes
#### Convert to a NAT gateway
``  
#### Create NAT gateway
`gcloud compute instances add-tags privatenet-us-vm --zone us-central1-f --tags nat-me

gcloud compute routes create nat-route --network privatenet \
--destination-range 0.0.0.0/0 --next-hop-instance privatenet-bastion \
--next-hop-instance-zone us-central1-c --tags nat-me --priority 800`  
#### Network-specific IAM roles
![](https://cdn.qwiklabs.com/PbwcZBGhk%2BaP0vgfxLo93xZbbPvDFZ%2BDeMBIthNLPAw%3D)  
#### XPN Related Networking Roles
`gcloud compute networks create newnet --subnet-mode=auto`  
`gcloud compute firewall-rules create newrule --network newnet --allow icmp`  
`gcloud compute firewall-rules delete newrule`  
`gcloud compute networks delete newnet`  
  
### Site Reliability Troubleshooting with Stackdriver APM

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




# Cloud Architecture
https://google.qwiklabs.com/quests/24
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
``  
``  
``  
``  
``  
``  
``  