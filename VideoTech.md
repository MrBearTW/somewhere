# 2019/12/27
Kkstream
DEMUXED 2018
5秒以內

Low latency live 
Video codecs

LLHS



Netflix 

Cache
Netflix有自己的CDN，不是用AWS的
1/3



Abeam日本串流技術公司
20多個免費

# 2019/07/31 Taipei Video Tech #4

>Talk #1. 我們與串流架構的距離  

1. On-the-fly VOD Architecture 隨選視訊架構
2. Streaming Server Architecture 串流伺服器架構
3. Streaming Latency of Player 播放器的串流延遲
Rex @CATCHPLAY  
  
Bit Rate(譯為位元傳輸率或比特率)  
數位版權管理（英語：Digital rights management，DRM）  
各系統處理方式會不一樣，非常麻煩  

- On the fly stream   
實做用Nginx VOD Module(支援simulated live)  

造成Latency的主因  
1. encoding & packaging   
2. file transfer  
3. Content delivery   
4. Player buffer   
  
>Talk #2. YouTube Content ID: Content Copyright System  

Content ID 是現在盛行的數位識別系統，內容創建者可以使用該系統輕鬆識別和管理在YouTube中的影音版權。所有上傳到YouTube的影像皆會與Content ID中註冊的音頻和影像檔案進行對比審查。此分享將介紹 Content ID系統技術及其如何識別版權內容。  
  
Content ID is a popular digital fingerprinting system that content creators can use to easily identify and manage their copyrighted contents on YouTube. Videos uploaded to YouTube are compared to audio and video files registered with Content ID by content owners, searching for any matches. In this talk, we will introduce what Content ID system is and how it works to identify copyrighted contents.  
Harry @Google  
  
- Content ID   
偵測到是有版權資料後  
1-1直接block  
2-1有廣告分潤  
2-2無分潤但有統計資料分享  
  
- 分析流程
Slice frames每一禎分割出來  
Fingerprint做出特徵  
Compare fingerprints with distance比較  
Sequency做熱度圖  
  
- 遇到的困難
改成灰階  
加減速度  
翻轉一些角度  
加減特定色系  

- 用heat map來比較兩個影片
XY軸是播放時間

- Looking to listen
解析出特定一位的說話聲音
可用在判斷特定人的字幕  