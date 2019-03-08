2018/12/6 golang git laravel

2018/12/7,8,9 沒有WIFI的笨港水仙宮  

2018/12/10，11 台中巧合旅店  


2019/01/14 php寫一個可以自己做api的網站


2019/1/28~2/1 
兩本書一個網站


2019 年成為 Web 開發人員的路線圖
https://github.com/goodjack/developer-roadmap-chinese

git教學  
https://learngitbranching.js.org/

Laravel 5 中文教程
https://www.youtube.com/playlist?list=PLAYoruToK_vNbGXmCTPW8zGVuAz0jeBTY


看網路port狀況`netstat -an`  

資料庫
擋住的原因

Apache設定用https開啟網站
mkcert


自我驗證憑證建立https環境
https://gist.github.com/adnan360/ad2b1cfc44114ac6f91fbb668c76798d

https://gist.github.com/nguyenanhtu/33aa7ffb6c36fdc110ea8624eeb51e69

https://blog.csdn.net/qq_35128576/article/details/81326524

改host  localhost

Windows搜尋`certmgr.msc`  
憑證管理？  

2019/2/13
w3c
jQuery
active
style

我的學思歷程(1/1)：Hidden Knowledge in CS
https://www.facebook.com/notes/bill-huang/%E6%88%91%E7%9A%84%E5%AD%B8%E6%80%9D%E6%AD%B7%E7%A8%8B1hidden-knowledge-in-cs/1393914510621451/

2019/2/14
菜鳥養成策略－Pair Programming
https://dotblogs.com.tw/hatelove/2019/02/14/rookie-strategy-pair-programming?fbclid=IwAR2r_DaNxyq_4QtoBj53Ya5axG9I90iZyuJhaegbtCf5rDVrwkhmzN3cGEM

2019/2/15
CSS 與 class 之間的關係
自己寫的CSS和官方的名稱衝突
找到正確的變化

2019/2/18  
CSS @media用法  
ID是唯一的  
在JavaScript中，寫在function外的就是全域變數  
div中的  
找出更新的原因，再段開  
  
2019/2/19  
修正路徑名稱  
準備上雲端  

2019/2/20
git
圖片網路傳輸管理  
linux指令
整合code  


app有問題
用mac debug
SBIR問要什麼

2019/2/21
merge
git
gitlab同步 備份 更新到雲端服務  

2019/2/22
`sudo mysql -u 帳號 -p`
javascript  沒有sleep 

2019/2/23
http to https 

.htaccess 設定技巧
https://free.com.tw/wordpress-htaccess-tips-and-tricks/
Apache Rewrite with Htaccess 理解與技巧
https://medium.com/@awonwon/htaccess-with-rewrite-3dba066aff11

2019/2/24
坑
書 網路 

2019/2/25

2019/2/27
一些Laravel道場的公開講座
https://www.laravel-dojo.com/speeches

2019/3/4  
  
SQL指令  

`sudo mysql -u AAAA –pBBBB`  
AAAA是帳號  
BBBB是密碼  

`SHOW TABLE STATUS;`  
`desc XXX;`檢查XXX表格狀態  
  
修改 AAA 表 的 BBB 欄位的預設值  
`alter table AAA alter column BBB set default "NULL";`  

2019/3/5
重啟apache
`sudo /etc/init.d/apache2 restart`
`sudo service apache2 restart`


2019/3/6  
重啟MySQL  
`sudo /etc/init.d/mysql restart`   

重新設定phpmyadmin指令  
`sudo dpkg-reconfigure phpmyadmin`  

http 不可主動推播
Webscoket 可主動推播
MQTT 可主動推播

持續監聽
要註冊
chnnle
topic


2019/3/7
修改資料庫前記得先備份  
  
看apache2狀態  
`sudo systemctl status apache2`  

javascript

2019/3/8  
http轉https  
修改.htaccess這個檔案
`
<IfModule mod_rewrite.c>
<IfModule mod_negotiation.c>
        Options -MultiViews
    </IfModule>
        RewriteEngine On
        RewriteCond %{SERVER_PORT} 80
        RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
`

改官網
後臺管理
後台新增