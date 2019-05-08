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
回傳{"message":"Hello"}`curl http://127.0.0.1:10080`  
回傳authorization failed，密碼是password`curl http://127.0.0.1:10080/secure`  
回傳一個很長的token`curl -u user http://127.0.0.1:10080/login`  
將token建立成參數`TOKEN=$(curl http://127.0.0.1:10080/login -u user|jq -r '.token')`  
前面dailed的變成可以了`curl -H "Authorization: Bearer $TOKEN" http://127.0.0.1:10080/secure`  
看LOG資訊`kubectl logs monolith`  
新開一個Terminal 加上-f可以持續看到log`kubectl logs -f monolith`  
在Pod內執行指令`kubectl exec monolith --stdin --tty -c monolith /bin/sh`  
退出`exit`  
#### Services
https://cdn.qwiklabs.com/Jg0T%2F326ASwqeD1vAUPBWH5w1D%2F0oZn6z5mQ5MubwL8%3D
#### Creating a Service

`Creating a Service`  
#### Adding Labels to Pods
``  
``  
``  
``  
``  
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