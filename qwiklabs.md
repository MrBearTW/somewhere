## Introductory
GCP Essentials
Baseline: Deploy & Develop

## Fundamental
Networking in the Google Cloud
BigQuery For Data Analysis
Cloud Architecture
Security & Identity Fundamentals
Stackdriver
Cloud SQL
Websites and Web Applications

## Advanced
Data Engineering
Data Science on the Google Cloud Platform
Data Science on Google Cloud Platform: Machine Learning
Machine Learning APIs
Application Development - Python
Application Development - Java
Network Performance and Optimization
Scientific Data Processing
Deployment Manager

## Expert
Kubernetes Solutions
Google Cloud Solutions I: Scaling Your Infrastructure
Google Cloud Solutions II: Data and Machine Learning



啟動project`gcloud config set project [PROJECT_ID]`  

### GCP Essentials
20190427 
https://google.qwiklabs.com/quests/23  
Cloud Shell is a Debian-based virtual machine with a persistent 5GB home directory  

#### Creating a Virtual Machine
看你現在的帳號`gcloud auth list`
看你現在帳號的project`gcloud config list project`
zone蠻重要的，有時輸入的參數會用到  
##### 用SSH直接進入Virtual Machine操做
使用root權限`sudo su -`  
升級系統`apt-get update`   
安裝NGINX`apt-get install nginx -y`  
檢查NGINX狀態`ps auwx | grep nginx`  
##### 從Cloud Shell建立Virtual Machine
建立gcelab2虛擬主機`gcloud compute instances create gcelab2 --machine-type n1-standard-2 --zone [your_zone]`  
進入gcelab2`gcloud compute ssh gcelab2 --zone [YOUR_ZONE]`  
第一次進入要配對鑰匙 選Y  
要離開的話`exit` 

####  Getting Started with Cloud Shell & gcloud
支援
`gcloud -h`  
`gcloud config --help`  
`gcloud help config`  
退出支援說明頁面
`q`  
`exit`  
##### Use your home directory
回到gcloud目錄`cd $HOME`  
編輯這個檔案`vi ./.bashrc`退出 ESC + q:  
##### Using gcloud commands
看設定`gcloud config list`  
看所有的設定`gcloud config list --all`  
##### Managing Cloud Storage data
建立XXXXX(唯一)`gsutil mb gs://XXXXX`  
複製YYYYY檔案到XXXXX`gsutil cp YYYYY gs://XXXXX`  
可以用網頁看open the navigation menu and select Storage > Browser. Then click on your bucket.

#### Kubernetes Engine: Qwik Start
##### Creating a Kubernetes Engine cluster
建立`gcloud container clusters create [CLUSTER-NAME]`  
可以用中線-，不能用底線_
會跳出蠻多WARNING
##### Get authentication credentials for the cluster
授權`gcloud container clusters get-credentials [CLUSTER-NAME]`  
##### Deploying an application to the cluster
從 Google Container Registry來建立對外port為8080的服務
new Deployment hello-server from the hello-app container image
`kubectl run hello-server --image=gcr.io/google-samples/hello-app:1.0 --port 8080`  
開啟對外port expose your application to external traffic
`kubectl expose deployment hello-server --type="LoadBalancer"`  
查看hello-server IP相關資訊`kubectl get service hello-server`  
可以在這裡看到服務`http://[EXTERNAL-IP]:8080`  
##### Clean Up
刪除cluster`gcloud container clusters delete [CLUSTER-NAME]`  

#### Set Up Network and HTTP Load Balancers
###### Network load balancer.  
Network load balancing allows you to balance the load of your systems based on incoming IP protocol data, such as address, port, and protocol type.   
###### HTTP(s) load balancer.  
不同的網址會去不同的instance  
若有group滿了會調整到最接近的group  
##### Create multiple web server instances
用這一段startup.sh來製作後續的工作
```
cat << EOF > startup.sh
#! /bin/bash
apt-get update
apt-get install -y nginx
service nginx start
sed -i -- 's/nginx/Google Cloud Platform - '"\$HOSTNAME"'/' /var/www/html/index.nginx-debian.html
EOF
```  
建立instance template  
`gcloud compute instance-templates create nginx-template \
         --metadata-from-file startup-script=startup.sh`  
建立target pool  
`gcloud compute target-pools create nginx-pool`  
建立managed instance group  
`gcloud compute instance-groups managed create nginx-group \
         --base-instance-name nginx \
         --size 2 \
         --template nginx-template \
         --target-pool nginx-pool`  
查看engine instances`gcloud compute instances list`  
建立防火牆`gcloud compute firewall-rules create www-firewall --allow tcp:80`  
之後就可以透過對外的IP看到網頁了  
##### Create a Network Load Balancer
建立L3 network load balancer targeting your instance group  
`gcloud compute forwarding-rules create nginx-lb \
         --region us-central1 \
         --ports=80 \
         --target-pool nginx-pool`  
列出所有Google Compute Engine forwarding rules在這個群組中  
`gcloud compute forwarding-rules list`  
##### Create a HTTP(s) Load Balancer
建立`gcloud compute http-health-checks create http-basic-check`  
Define an HTTP service and map a port name to the relevant port for the instance group. Now the load balancing service can forward traffic to the named port:  
`gcloud compute instance-groups managed \
       set-named-ports nginx-group \
       --named-ports http:80`  
Create a backend service  
`gcloud compute backend-services create nginx-backend \
      --protocol HTTP --http-health-checks http-basic-check --global`  
Add the instance group into the backend service  
`gcloud compute backend-services add-backend nginx-backend \
    --instance-group nginx-group \
    --instance-group-zone us-central1-a \
    --global`  
Create a default URL map that directs all incoming requests to all your instances  
`gcloud compute url-maps create web-map \
    --default-service nginx-backend`  
Create a target HTTP proxy to route requests to your URL map  
`gcloud compute target-http-proxies create http-lb-proxy \
    --url-map web-map`  
Create a global forwarding rule to handle and route incoming requests. A forwarding rule sends traffic to a specific target HTTP or HTTPS proxy depending on the IP address, IP protocol, and port specified. The global forwarding rule does not support multiple ports.  
`gcloud compute forwarding-rules create http-content-rule \
        --global \
        --target-http-proxy http-lb-proxy \
        --ports 80`  
After creating the global forwarding rule, it can take several minutes for your configuration to propagate.  
`gcloud compute forwarding-rules list`  
Network Load Balancing is a regional, non-proxied load balancer.  


### Baseline: Deploy & Develop
20190429  
https://google.qwiklabs.com/quests/37  

#### Google Cloud SDK: Qwik Start - Redhat/Centos
網頁選GCE 選VM 建立虛擬機
##### Update the Cloud SDK RPM packages
`sudo tee -a /etc/yum.repos.d/google-cloud-sdk.repo << EOM
[google-cloud-sdk]
name=Google Cloud SDK
baseurl=https://packages.cloud.google.com/yum/repos/cloud-sdk-el7-x86_64
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://packages.cloud.google.com/yum/doc/yum-key.gpg
       https://packages.cloud.google.com/yum/doc/rpm-package-key.gpg
EOM`  
安裝google-cloud-sdk`sudo yum install google-cloud-sdk` 
##### Initialize the SDK in your instance 
初始化`gcloud init --console-only`  
選新的話，會給一個連結，取回一串認證碼，再繼續
##### Run core gcloud commands
一些可以看gcloud設定的指令
`gcloud auth list`  
`gcloud config list`  
`gcloud info`  

#### App Engine: Qwik Start - PHP
##### Enable Google App Engine Admin API
APIs & Services > Library  
搜尋 App Engine Admin API  
##### Download the Hello World app
下載`git clone -b phase0-helloworld https://github.com/GoogleCloudPlatform/appengine-php-guestbook.git helloworld`  
`cd helloworld`  
##### Test the application
依照設定檔app.yaml啟動
`dev_appserver.py app.yaml --php_executable_path /usr/bin/php-cgi`  
##### Make a change
可以直接改code 若有需要會自動更新  
##### Deploy your app
依app.yam的設定開始部屬`gcloud app deploy`  
##### View your application
`gcloud app browse`  
##### app.yaml長這樣
```
runtime: php55
api_version: 1
threadsafe: true

handlers:
- url: /.*
  script: helloworld.php
```

#### Cloud Source Repositories: Qwik Start
##### Create a new repository
建立REPO_DEMO的雲端空間  
`gcloud source repos create REPO_DEMO`  
##### Clone the new repository into your Cloud Shell session
從雲端複製一份下來  
The gcloud source repos clone command adds Cloud Source Repositories as a remote named origin.  
`gcloud source repos clone REPO_DEMO`  

##### Push to the Cloud Source Repository
修改完後傳回去  
`cd REPO_DEMO`  
`echo "Hello World!" > myfile.txt`  
`git config --global user.email "you@example.com"`  
`git config --global user.name "Your Name"`  
`git add myfile.txt`  
`git commit -m "First file using Cloud Source Repositories" myfile.txt`  
`git push origin master`  
##### Browse files in the Google Cloud Source repository
網頁可以在這裡看到code  
Source Repositories > Source Code.  
  
#### Container-Optimized OS: Qwik Start
建立一個VM
##### Verify your Docker environment
SSH進入後，看所有目前可用的docker`sudo docker ps`  
##### Create an instance using CLI
在google console頁面  
看一下哪一些images是可以用的  
`gcloud compute images list \
    --project cos-cloud \
    --no-standard-images`  
建立compute instances  
` gcloud beta compute instances create-with-container containerized-vm2 \
     --image cos-stable-72-11316-136-0 \
     --image-project cos-cloud \
     --container-image nginx \
     --container-restart-policy always \
     --zone us-central1-a \
     --machine-type n1-standard-1`  
建立防火牆  
`gcloud compute firewall-rules create allow-containerized-internal\
  --allow tcp:80 \
  --source-ranges 0.0.0.0/0 \
  --network default`  
``  
``  
``  


### Kubernetes in the Google Cloud
https://google.qwiklabs.com/quests/29  
最後一個沒做完  

看狀況  
`kubectl explain deployment`
`kubectl explain deployment --recursive`
`kubectl explain deployment.metadata.name`
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