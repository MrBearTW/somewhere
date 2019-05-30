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
  
Django轉職  
https://www.ptt.cc/bbs/Soft_Job/M.1497109631.A.D6F.html  



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

commit規範  
[Bug-Fix]  
[Features]  
[Fine-tune]  
[require-change]  
[verXX.XX]commit for verXX.XX
  問題
  解法
    Detail

2019/3/11
apache怪怪的

2019/3/12
phpmyadmin出現錯誤
`phpmyadmin - count(): Parameter must be an array or an object that implements Countable`
處理
https://stackoverflow.com/questions/48001569/phpmyadmin-count-parameter-must-be-an-array-or-an-object-that-implements-co

架構說明  
  
 
  
2019/3/13  
Docker使用
測試環境建立 

2019/3/14
DEBUG
邏輯不會騙人

2019/3/15
繼續DEBUG

2019/3/18
修正

2019/3/22  
確定需求  

2019/3/25  
看所有檔案和資料夾的使用容量大小  
`du -shc ./*`


2019/3/27
composer無解


2019/3/28
Google Let's AI
2019/3/29
Google Developer ML summit

2019/4/1
測試環境可以跑

2019/4/2


2019/4/3
傳值失敗
lravel兩資料庫要共用唯一值
https://laravel.tw/docs/5.2/eloquent-relationships#one-to-many

2019/4/8
換一個方法  

做可以勾選的選單
  
2019/4/9  
php回傳給前端的json要是乾淨的前面才能執行  
前面不能在帶有其他回應，不要亂echo  

Laravel migration增加欄位  

2019/4/10  


看有哪一些POD`kubectl get pods`  
進入POD`kubectl exec -it XXXXXXXXXXXXXXXXXXXXXXXXXXXX /bin/bash`  
退出`exit`  


2019/4/11  
GCP測試環境可以運作

2019/4/12
建立測試環境文件

2019/4/15
把牆撞破  
https://www.facebook.com/groups/616369245163622/permalink/1588216541312216/  

2019/4/16
Session操作  
https://blog.johnsonlu.org/laravel-session/  

2019/04/17

(1/1) ErrorException
Trying to get property of non-object

in PolicyController.php line 36

2019/04/18
調整middleware流程

2019/04/19
middleware可以擋住
新增管理者頁面

2019/04/22
crtl + alt + F1~6
選一個介面
`cd /www/XXXXXXXIOT`
`node mqttbroker.js  &`

2019/04/23
讀出來看不到資料  

2019/04/24
```
Route::any('admin/session', function () { 
  $data_session = Session::all();
  dd($data_session);}
);
```

https://github.com/TapPay/tappay-web-example


2019/04/25
在windows 10 上面使用chrome 對ios的 safari 進行除錯
http://q10242.pixnet.net/blog/post/214919547-%e5%9c%a8windows-10-%e4%b8%8a%e9%9d%a2%e4%bd%bf%e7%94%a8chrome-%e5%b0%8dios%e7%9a%84-safari-%e9%80%b2%e8%a1%8c%e9%99%a4

問題回報  
https://github.com/RemoteDebug/remotedebug-ios-webkit-adapter/issues/79  
  
2019/04/29  
測試環境網站死掉 先確定一下CONTAINER是不是還活著  

2019/04/30  
net::ERR_CONNECTION_REFUSED  
沒事不要跳步驟  


2019/05/02
放管理路徑的
//----commit 前要刪掉  
Route::get('Admin/sess',function(){
  dd(Session::all());
});
Route::get('Admin/sf',function(){ 
  Session::flush();
  return 'Session::flush';
});
//----commit 前要刪掉  

2019/05/08  
功能開關  
重作環境  
git指令參考 https://code.yidas.com/git-commands/  
git blame XXXXXXX  
git branch -r //列出所有 remote repository  branch  
  
2019/05/09  
重複出現的編號  
參考值的放置位置  

2019/05/10  
寫死或寫迴圈  

2019/05/13  
照著改  

2019/05/16  
讀入驗證寫回
參數數量不同

2019/05/17  
ARRAY和JSON    
  
2019/05/20  

2019/05/21  
一致的代號  
常用的fn放置處  
  
2019/05/22
微軟 DevDays ASIA 2019  
  
2019/05/23  
學姊說的是  
重複寫的CODE  
  
2019/05/24
Google Cloud Event  
  
2019/05/27  
在後端php檔
$status['empty_變數'] = empty($變數);
$status['type_變數'] = gettype($變數);
$status['count_變數'] = count($變數);
return json_encode($status);  
  
2019/05/28  
在PHP中isset、empty、is_null的使用差別  
https://ithelp.ithome.com.tw/articles/10156786  
官方寫出各種狀況給你看  
https://php.net/manual/en/types.comparisons.php  
  
2019/05/30  
UTF-8 without BOM