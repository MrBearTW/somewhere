官網 https://docs.docker.com/docker-for-windows/

Docker 與 Vagrant 之間的特點
Vagrant 適合用來管理虛擬機，而 docker 適合用來管理應用環境？

中文參考資料
https://skychang.github.io/2017/01/06/Docker-Docker_for_Windows_10_First/
https://oomusou.io/docker/docker-for-windows/

# Docker這樣學才有趣：從入門，到玩直播、挖礦

- [範例 Github](https://github.com/ayubiz/learn_docker_by_examples)

## 第1章 Docker的能與不能
- 本章將先來瞭解Docker的優點與缺點和限制，以便幫助你以更有效率和精準的善用Docker的優點，並避免將 Docker 應用在不適合的應用中。
    - Container：共用 Linux 核心
    - 虛擬機器：模擬硬體來達到虛擬機器可以獨立執行各種系統和軟體
    - 游泳池比較：Container 海綿放入池中，可大可小。虛擬機器 將鐵框放入池中

## 第2章 必學的Docker功能與指令
- 本章將針對常用且實用的Docker指令，以及選項的操作方式逐一說明並舉例示範。
 
## 第3章 Docker Container的進階操作
- 本章將針對在熟悉或應用Docker之後所會遭遇的問題，或一定需要知道的操作進行說明。
 
## 第4章 各種自製Docker Image的方法
- 在實際的應用中，存放在Docker Hub上的Docker Image不一定能完全符合需要，因此，需要自行製作或產生## Docker Image，本章將介紹幾種實用和方便的自製Docker Image檔方法。
 
## 第5章 利用Docker Compose管理多個Container
- 本節將介紹如何用Docker Compose來解決多個Docker Container串接的問題，並且增強Docker在自動化部署## 的能力。
 
## 第6章 架設自己的Docker Registry
- 當你自己製作了一個Docker Image之後，如果想要把它公開分享給大家使用時，最簡單的方式就是把這個自製的Docker Image發佈到Docker Hub上，然後，其他人就可以用docker search和docker pull來搜尋下載你所發佈的Docker Image。而像Docker Hub這樣的服務的正式名稱，其實就叫做「Docker Registry」。
 
## 第7章 運用Docker來測試公司對外部開的Port
- 在這一章，我們要"善用"docker run指令的-p選項把連接埠對應到Host的任一個連接埠的特性，來製作出不需要安裝專用掃描連接埠工具就可以達到測試連接埠是否有被佔用的Docker Image。
 
## 第8章 用Docker+Golang實作Socket聊天室
- 在這一章，我們會實作一個簡易Golang WebSocket聊天室來當作範例，再配合Docker的Container去包裝使用它。
 
## 第9章 運用Docker Compose一鍵快速架設個人WordPress網站
- 本章將透過建立個人WordPress網站的方式，使用Docker Compose來展現一鍵完成個人網站架設與部署的威力。
 
## 第10章 運用Docker搭配YouTube做影片直播分享
- 在這個章節，將示範怎樣利用Container搭配Google上的YouTube服務，並且結合目前時下流行的轉檔直播影片，去做一個線上YouTube直播的分享，完成此章節範例後，會有一個可以跨平台，帶著走的直播YouTube Container。

## 第11章 應用Docker自動爬Flicker相片
- 在這章將示範用Container包裝一些日常小工具，方便日後出門在外或是到了不同的機器上都可以安裝使用，可以依個人需求自行更換功能。以此章節範例來說，完成後會有一個可以帶著走捉Flicker照片的## Container服務。
 
## 第12章 用Docker製作跨平台用的排程小工具
- 在這章將示範怎樣利用Container做一些自動常駐排程的服務，可以依個人需求自行加入排程功能。完成本章節範例後會有一個可以帶著走的排程服務Container。
 
## 第13章 運用Docker讓Ubuntu桌面帶著跑
- 這章將會示範怎樣利用Container做一個可以帶著走的隨身有視窗畫面的Ubuntu系統。透過這個案例來示範 關於Docker桌面視窗和遠端操控的可能，提供給讀者更多的應用。
 
## 第14章 實作雲端Docker Swarm ─ 機器學習叢集架構
- 關於Docker的服務，最後其實都會走上叢集&管理這塊，這章將示範一個較完整的案例，給讀者一些架構的感覺與體驗。因為最近機器學習很熱門，所以選擇「在Google Cloud上的雲端智能圖片辨識服務」作為範例，順便示範一下在Google Cloud上搭建一個整合Docker Swarm及機器學習 ─ 照片辨識的微服務。

## 第15章 運用Docker來玩玩挖礦吧
- 最近挖礦也熱了好一陣子，數位貨幣自8月以來價格都還不錯，所以就試著用Container來玩一下挖礦，順便和讀者閒聊一下挖礦入門的東西，也算是提供一個蠻實用的小工具給讀者們玩玩。