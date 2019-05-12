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
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
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