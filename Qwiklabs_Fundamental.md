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
重做  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  
``  