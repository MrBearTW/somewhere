# SDN and Cloud Native Day 2017/12/24 台大社科院102教室
https://www.meetup.com/Cloud-Native-User-Group-Taiwan/events/245495423/
## Software Defined Network (SDN)
### 08:35 ~ 09:10邱宏瑋 (Linker Networks)【An Introduction to Open Source Networking, Software Defined Network and Open Network Foundation 】
HWCHIU  
CNCF(K8是其中一種component)  
open source  networking  
SDN = Software-Defined Networking  
  
拿回網路SWITCH的主導權  
2008史丹福教授推出論文  
2009年推出1.0規格  
2013Google推出B4跨國資料庫論文  
  
積木化  
  
1Application  
Northbound API北向街口  
2Control  
Southbound API南向街口 (Open flow是其中一種)  
3Infrastructure  
  
2016年兩組織合併ONF + ONLAB = ONF  
ONOS = SDN Controler  
CORD = ???  
### 09:10 ~ 9:55 黃秉鈞 (EdgeCore Networks)【Up in the Air of SDN 】  
FaceBook OCP = Open Computer Project = Open SPEC Project  
  
Chassis + Pizza Box =  Facebook 6-pack = Edgecore Networks OMP800  
Coherent Switch =  Facebook Voyager = Edgecore Networks Cassini  
  
Programmable Switch 用P4語言  
  
Microsoft SONiC  
FRRouting  
GoBGP  
### 09:55 ~ 10:15 邱宏瑋 (Linker Networks)【How to contribute to ONF community 】
Brigade有明確目標的  
把說明文件中的坑補起來  
翻譯也是一種貢獻  
## Ceph
### 10:30 ~ 11:15 陳柏瑜(ASUS)【 A practical guide to learning, designing, and implementing your Ceph storage system 】
CEPH Storages  
開源軟體，軟體定義儲存，大規模的擴展，無單點故障，可自行管理與修復，統一的儲存接口  
RADOSGW = RADOS Gateway  
RBD = Rados Block Device  
  
Ceph Components   
1.Monitor (MON，Client認證，生產環境建議三台在不同機櫃)  
2.Object Storage Daemon(OSD)  
3.Manager(MGR)  
4.Metadata Server(MDS)  
5.Rados Gateway(RGW)  
最少需要一個MON和MGR和三個OSD，只能旯來練習下指令，selg-Healing能力  
  
Ubuntu建議4.5版UP  
  
重新做Ceph CLI介面導入gRPC的方式  
  
### 11:15 ~ 12:00 柯弼舜(NUTC)【Write a RGW compression plugin for Google Brotli 】
Brotli  
CMake  

## Kubernetes
### 13:00 ~ 13:40 鄭偉聖(NCTU)【An Introduction to Kubernetes and the CNI】
ETCD   
Kubelet  
Pod:A group of co-located containers(one or more)  
一個Pod可以擁有很多個container  
Replica set   
Kubeadm 類似 Docker Swarm  
### 13:40 ~ 14:20 李孟澤(NUTC) & 白凱仁(inwinSTACK)【How to integrate Kubernetes in OpenStack: You need to know these project】
Kolla 封裝open stack的套件  
OpenStack-Helm  
Kata:light weight VMs  
### 14:20 ~ 14:45 白凱仁(inwinSTACK)【How to contribute to Kubernetes community】
github.com/cncf/devstats  
Doc(issue)>>Example>>Test Code>>Project feature  
(SIG)Special Interest Group  
## OpenStack 
### 15:00 ~ 15:40 曾柏凱(NUTC) & 郭靖(NCTU)【Introduction and OpenStack Trends】
https://goo.gl/qC3tmq  
### 15:50~16:10 郭靖(NCTU)【How to get involved into OpenStack Community】
自己測試Devstack  
### 16:10~16:30 Rico Lin(OpenStack Heat PTL)【How to contribute to OpenStack (codes)】
https://etherpad.openstack.org/p/cntug-openstack  

---------------------------------------------------------
# 服務創新座談會
2017/12/15  台大社科院   
 
## 杜奕瑾  
產業革命時是優勢還是業障  
  
羊毛出在豬身上，狗來買單  
  
人工智慧不要從傳統產業學習  
  
IM
簡訊這麼賺，怎麼可以？  
看網頁都不行了還聊天？  
產業沒有人提出需求？  
  
政府不應該哪一個產業好，在投資哪一個產業
  
電腦人臉辨識  
醫療  
智慧車  
  
網路時代
不應該是想怎麼樣賣更多書

眼睛是靈魂之窗
不應該是做鏡頭，應該是去做靈魂  
大疆無人機vs.齊柏林的影像要求  
  
成功為失敗之母  
  
04年google IPO  
06年微軟才要做搜尋引勤  
  
每一個BOT你都聊不太下去  
  
微軟沒有一個B不會做  
  
Artificial Intelligence  
Machine Learning  
Deep Learning  
    
2B smart home  
90% data generated last 2 years  
25B smart devices by 2020  
  
800美金一組基因定序
  
人臉辨識  
語音辨識  
都已經超越人類  
  
人工辨識  
  
泡沫可以用比較健康的心態來看  
做創新的東西也許就不要做CASE Study

## Synology CRO Vic Hsu  
NAS
2000創立(軟體代工給硬體廠商)  
2004推出自有品牌(家用或小型工作室的NAS)  
0304年左右數位相機打敗類比像機  
 
爸爸媽媽都在拍小孩，照片怎管理？  
  
軟體茲薇 = 服務創新  
  
55688餵資料給司機，不用蝦晃  
  
從解決消費者問題出發  
  
NAS推出之後，還不斷更新軟體  
歐洲有人家裡就有機房  
  
均每個月收到20000則使用者回饋  
連續第8年辦使用者大會  
若是純硬體廠商，規格網路上看一看就結束了  
  
擁抱未知，關懷科技新知  
2008年做出AJAX的管理介面
2009年推出APP  
2015年推出Synology Rooter
2016年推出SSD NAS  
2017年混合雲服務，3天破萬人註冊  
  
不做追隨者，定義產業新標竿  
  
Networking(MASH Rooter)  
Applivation  
Storage  
  
解決問題  
關注趨勢  
重訂標竿  
  
真實案例
1.人在國外也可以看毛小孩  
2.私有雲架設公司內部IN，資安問題  

我的客戶是誰  
他們有甚麼需求沒被滿足  
有沒有可以應用的新科技  
創造全新價值主張  
  
## 遠距醫療
埔里基督教醫院  陳恆順醫師  電機博士
  
健康資料歸戶  
個人健康資料整合  
  
社政  衛政  
  
長照技術  
  
遠距醫療
遠距健康照護

保健
醫療
照護
防疫

9%土地 0.7%的人  
  
健保支付制度比較  
論人計酬：用人民的健康來賺錢  
論量計酬：用人民的疾病來賺錢  
論質計酬：用照護的品質來賺錢  
論病計酬：用疾病的嚴重來賺錢DRG  
論日計酬：用疾病的持久來賺錢  
  
行動醫療 H2
