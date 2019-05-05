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

#### Datastore: Qwik Start
Google Cloud Datastore is a NoSQL  
  
#### Cloud SQL for MySQL: Qwik Start
Instance ID is used to uniquely identify your instance within the project.  
##### Connect to your instance using the mysql client in the Cloud Shell
登入XXXXX`gcloud sql connect XXXXX --user=root`  
輸入密碼  
進入mysql  
建立資料庫`CREATE DATABASE guestbook;`  
建立資料
```
USE guestbook;
CREATE TABLE entries (guestName VARCHAR(255), content VARCHAR(255),
    entryID INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(entryID));
    INSERT INTO entries (guestName, content) values ("first guest", "I got here!");
INSERT INTO entries (guestName, content) values ("second guest", "Me too!");
```
查看表格`SELECT * FROM entries;`  

#### Data Loss Prevention: Qwik Start - JSON
隱蔽敏感資訊的API？
#### Create a service account key
設定環境變數`export PROJECT_ID=[YOUR_PROJECT_ID]`  
建立名為qwiklab的服務Create a Service Account to access the Google Cloud APIs when testing locally  
`gcloud iam service-accounts create qwiklab \
  --display-name "Qwiklab Service Account"`  
給剛剛設立的服務權限  
`gcloud projects add-iam-policy-binding ${PROJECT_ID} \
--member serviceAccount:qwiklab@${PROJECT_ID}.iam.gserviceaccount.com \
--role roles/owner`  
建立Service Account key
JSON格式，檔名為key.json  
`gcloud iam service-accounts keys create ~/key.json \
--iam-account qwiklab@${PROJECT_ID}.iam.gserviceaccount.com`  
##### Inspect a string for sensitive information
建立一個JSON檔案，檔名為inspect-request.json
授權`gcloud auth activate-service-account --key-file=key.json`  
獲得鑰匙`gcloud auth print-access-token`  
用前一個指令替換ACCESS_TOKEN  
`curl -s \
  -H "Authorization: Bearer ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  https://dlp.googleapis.com/v2/projects/$PROJECT_ID/content:inspect \
  -d @inspect-request.json`  
建立一個新的檔案new-inspect-file.json  
再一次取得新的ACCESS_TOKEN代入下面指令  
`curl -s \
  -H "Authorization: Bearer ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  https://dlp.googleapis.com/v2/projects/$PROJECT_ID/content:deidentify \
  -d @new-inspect-file.json`  
  
#### Cloud Functions: Qwik Start - Command Line
Serverless lets you write and deploy code without the hassle of managing the underlying infrastructure.  
##### Create a function
`mkdir gcf_hello_world`  
`cd gcf_hello_world`  
`nano index.js`  
`/**
 * Cloud Function.
 *
 * @param {object} event The Cloud Functions event.
 * @param {function} callback The callback function.
 */
exports.helloWorld = function helloWorld (event, callback) {
  console.log(`My Cloud Function: ${JSON.stringify(event.data.message)}`);
  callback();
};`  
##### Create a cloud storage bucket
`gsutil mb -p [PROJECT_ID] gs://[BUCKET_NAME]`  
##### Deploy your function
部屬一個叫做helloWorld的pub/sub topic功能  
`gcloud functions deploy helloWorld \
  --stage-bucket [BUCKET_NAME] \
  --trigger-topic hello_world \
  --runtime nodejs6`  
驗證helloWorld這個功能`gcloud functions describe helloWorld`  
##### Test the function
呼叫這個功能，會回傳一個執行的代碼，並寫入log中
`gcloud functions call helloWorld --data '{"message":"Hello World!"}'`  
##### View logs
看log`gcloud functions logs read helloWorld`  
  
#### Video Intelligence: Qwik Start
##### Enable the Video Intelligence API
找到Cloud Video Intelligence API並啟動
##### Set up authorization
建立quickstart服務`gcloud iam service-accounts create quickstart`  
建立key`gcloud iam service-accounts keys create key.json --iam-account quickstart@{your-project-id}.iam.gserviceaccount.com`  
授權`gcloud auth activate-service-account --key-file key.json`  
`gcloud auth print-access-token`
#####   
建立一個request.json`{
   "inputUri":"gs://cloud-ml-sandbox/video/chicago.mp4",
   "features": [
       "LABEL_DETECTION"
   ]
}`  
執行這個會得到一個name  
`curl -s -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer ACCESS_TOKEN' \
    'https://videointelligence.googleapis.com/v1/videos:annotate' \
    -d @request.json`  
得到分析  
`curl -s -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer ACCESS_TOKEN' \
    'https://videointelligence.googleapis.com/v1/operations/OPERATION_NAME'`  
    
#### Cloud Security Scanner: Qwik Start
##### Before you begin, you need an app to scan
`git clone https://github.com/GoogleCloudPlatform/python-docs-samples`  
`cd python-docs-samples/appengine/standard/hello_world`  
##### Test App
執行後可看到網頁`dev_appserver.py app.yaml`  
##### Deploy App
在hello_world執行`gcloud app deploy`  
##### View App
`gcloud app browse`  
##### Run the scan
Navigation menu > App Engine > Security scans  

#### Cloud Endpoints: Qwik Start
##### Getting the sample code
`git clone https://github.com/GoogleCloudPlatform/endpoints-quickstart`  
##### Deploying the Endpoints configuration
`cd scripts`  
`./deploy_api.sh`  
##### Deploying the API backend
`./deploy_app.sh`  
##### Sending requests to the API
`./query_api.sh`  
`./query_api.sh JFK`  
##### Tracking API activity
`./generate_traffic.sh`  
##### Add a quota to the API
`./deploy_api.sh ../openapi_with_ratelimit.yaml`  
重新佈署`./deploy_app.sh`  
`export API_KEY=YOUR-API-KEY`  
`./query_api_with_key.sh $API_KEY`  
`./generate_traffic_with_key.sh $API_KEY`  
`./query_api_with_key.sh $API_KEY`  
  
#### Google Assistant: Qwik Start - Templates
透過google sheet 建立對話機器人
  
  
### Baseline: Data, ML, AI
#### Cloud ML Engine: Qwik Start
useing data to answer questions  
A model version is an instance of a machine learning solution stored in the Cloud ML Engine model service.  
##### Install TensorFlow
安裝TensorFlow`pip install --user --upgrade tensorflow`  
確認有安裝`python -c "import tensorflow as tf; print('TensorFlow version {} is installed.'.format(tf.VERSION))"`  
##### Clone the example repo
`git clone https://github.com/GoogleCloudPlatform/cloudml-samples.git`  
`cd cloudml-samples/census/estimator`  
##### Develop and validate your training application locally
建立資料夾`mkdir data`  
下載資料`gsutil -m cp gs://cloud-samples-data/ml-engine/census/data/* data/`  
建立PATH  
`export TRAIN_DATA=$(pwd)/data/adult.data.csv`  
`export EVAL_DATA=$(pwd)/data/adult.test.csv`  
看一下資料`head data/adult.data.csv`  
##### Install dependencies
確保範例使用的TF和安裝的TF相同`pip install --user -r ../requirements.txt`  
##### Run a local training job
`export MODEL_DIR=output`  
在local做模型訓練  
`gcloud ml-engine local train \
    --module-name trainer.task \
    --package-path trainer/ \
    --job-dir $MODEL_DIR \
    -- \
    --train-files $TRAIN_DATA \
    --eval-files $EVAL_DATA \
    --train-steps 1000 \
    --eval-steps 100`  
##### Inspect the summary logs using Tensorboard
使用圖像介面TensorBoard  
`tensorboard --logdir=$MODEL_DIR --port=8080`  
##### Running model prediction locally (in Cloud Shell)
查詢下面要用的timestamp`ls output/export/census/`  
`gcloud ml-engine local predict \
--model-dir output/export/census/<timestamp> \
--json-instances ../test.json`  
##### Run your training job in the cloud
##### Set up a Google Cloud Storage bucket
設定參數，$BUCKET_NAME等等會用到  
`PROJECT_ID=$(gcloud config list project --format "value(core.project)")
BUCKET_NAME=${PROJECT_ID}-mlengine
echo $BUCKET_NAME
REGION=us-central1`  
建立新bucket`gsutil mb -l $REGION gs://$BUCKET_NAME`  
複製資料`gsutil cp -r data gs://$BUCKET_NAME/data`  
`TRAIN_DATA=gs://$BUCKET_NAME/data/adult.data.csv
EVAL_DATA=gs://$BUCKET_NAME/data/adult.test.csv`  
`gsutil cp ../test.json gs://$BUCKET_NAME/data/test.json`  
`TEST_JSON=gs://$BUCKET_NAME/data/test.json`  
##### Run a single-instance trainer in the cloud
設定參數
`JOB_NAME=census_single_1`  
`OUTPUT_PATH=gs://$BUCKET_NAME/$JOB_NAME`  
執行，會有點久所以在背景跑，要看狀況可用下面指令看  
--verbosity DEBUG可以看到更多LOG  
`gcloud ml-engine jobs submit training $JOB_NAME \
    --job-dir $OUTPUT_PATH \
    --runtime-version 1.10 \
    --module-name trainer.task \
    --package-path trainer/ \
    --region $REGION \
    -- \
    --train-files $TRAIN_DATA \
    --eval-files $EVAL_DATA \
    --train-steps 1000 \
    --eval-steps 100 \
    --verbosity DEBUG`  
看執行狀況，或是ML Engine > Jobs.也可以看  
`gcloud ml-engine jobs stream-logs $JOB_NAME`  
##### Inspect the output
`gsutil ls -r $OUTPUT_PATH`  
##### Deploy your model to support prediction
`MODEL_NAME=census`  
Create a Cloud ML Engine model  
`gcloud ml-engine models create $MODEL_NAME --regions=$REGION`  
##### Test Completed Task
`gsutil ls -r $OUTPUT_PATH/export`  
取上面得到的timestamp`MODEL_BINARIES=$OUTPUT_PATH/export/census/<timestamp>/`  
建模(要一段時間)  
`gcloud ml-engine versions create v1 \
--model $MODEL_NAME \
--origin $MODEL_BINARIES \
--runtime-version 1.10`  
查看狀態`gcloud ml-engine models list`  
做預測  
`gcloud ml-engine predict \
--model $MODEL_NAME \
--version v1 \
--json-instances ../test.json`  
  
#### Dataprep: Qwik Start
##### Create a Cloud Storage bucket in your project
Navigation menu > Storage > Browser  
##### Initialize Cloud Dataprep
Navigation menu > Dataprep.  
後面一直按同意  
##### Create a flow
##### Import datasets
##### Prep the candidate file
這一節應該就是用Trifacta做很多整理  
  
#### Dataflow: Qwik Start - Python
##### Create a Cloud Storage bucket
Cloud Storage >> Create Bucket  
##### Install pip and the Cloud Dataflow SDK
要2.7版`python --version`  
`pip --version`  
確認比7.0.0更新`sudo pip install -U pip`  
Python virtual environment`sudo pip install --upgrade virtualenv`  
建立Python虛擬環境`virtualenv -p python2.7 env`  
建立bin/activate虛擬環境`source env/bin/activate`  
安裝apache-beam`pip install apache-beam[gcp]`  
`python -m apache_beam.examples.wordcount --output OUTPUT_FILE`  
找到OUTPUT_FILE-XXXXX-of-XXXXX`ll`  
`cat <file name>`  
##### Run an Example Pipeline Remotely
Dataflow temp_location must be a valid Google Cloud Storage URL.  
設定參數`BUCKET=gs://<bucket name provided earlier>`  
遠端跑wordcount.py  
`python -m apache_beam.examples.wordcount --project $DEVSHELL_PROJECT_ID \
  --runner DataflowRunner \
  --staging_location $BUCKET/staging \
  --temp_location $BUCKET/temp \
  --output $BUCKET/results/output`  
##### Console可以看一些東西
Dataflow  
Storage   
  
#### Dataproc: Qwik Start - Command Line
Cloud Dataproc  
Apache Spark and Apache Hadoop  
##### Create a cluster
`gcloud dataproc clusters create example-cluster`  
##### Submit a job
`gcloud dataproc jobs submit spark --cluster example-cluster \
  --class org.apache.spark.examples.SparkPi \
  --jars file:///usr/lib/spark/examples/jars/spark-examples.jar -- 1000`  
##### Update a cluster
調整workers數量  
`gcloud dataproc clusters update example-cluster --num-workers 4`  
`gcloud dataproc clusters update example-cluster --num-workers 2`  
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