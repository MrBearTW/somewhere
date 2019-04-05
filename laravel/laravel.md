Laravel 5 中文教程

https://www.youtube.com/playlist?list=PLAYoruToK_vNbGXmCTPW8zGVuAz0jeBTY
1~18    Laravel5.2 框架基础入门视频教程（免费）共 18 课时 /5 时 09 分
19~65   Laravel5.2 博客项目实战视频教程（免费）共 47 课时 /11 时 55 分

教材下載
https://github.com/ichenhua/chenhua_edu/tree/master/laravel5.2-blog


新北市樹林國小 LARAVEL 工作坊  
https://www.laravel-dojo.com/workshops/201507-ntpc  
  
## 4 Apache設定
## 6 laravel所有檔案介紹


使用composer
https://getcomposer.org/

Laravel 5.7目前最新



`composer create-project laravel/laravel XXX --prefer-dist`在當前目錄下，安裝資料夾名稱為XXX的laravel框架(壓縮原始碼的版本)  

### 7 路由設定
/routes/web.php 調整

#### 8 Postman教學
### 9 控制器

下指令建立`C:\xampp\php\php.exe .\artisan make:controller XXXX`建立名為XXXX的控制器檔案  


`C:\xampp\php\php.exe .\artisan route:list`查看目前的路由  

### 11 Middleware中間件
可直接在Kernel.php內新增一行`'XXXX' => \Illuminate\Auth\Middleware\XXXX::class,`  
和用指令新增一個檔案   
`C:\xampp\php\php.exe .\artisan make:middleware XXXX`  
  
`exit;` 加入後可以在此middleware就跳出，多一層保護  


## 12 View 視圖
用with(少)
compact(多)
傳送參數

## 13 blade模板引擎
不想使用到blade語法 {{}}，在前面加上@  
想執行js code要用 `{{!! XXXX變數 !!}}`  
ViewController.php  
my_laravel.blade.php  

## 14 blade引擎的流程控制
if for foreach

## 15 blade模板
common
拉出header 和 footer 在分別引用

layouts
拉出主模板 繼承後只修改中間一部分

## 16 ENV
.env  
APP_DEBUG 真正發布網站時可以把debug模式關閉  
  
`C:\xampp\php\php.exe .\artisan key:generate`重新製作KEY  

.ENV中加入資料表前綴
DB_PREFIX=blog_

.env 和 config資料夾 內的參數  
有一些常用的可以提出到最外面來  
echo config('database.connections.mysql.charset');  

## 17
連接數據庫  

## 18 Eloquent ORM操作

更新或是操作會自動增加一個updated_at  
方法1 資料庫加入欄位  
方法2 加入 `public $timestamps= false;`  

----------以上是基礎，以下是實作一個blog

## 19 
引用css方式
laravel建議用上面的寫法
`
<link rel="stylesheet" href="{{asset('/resources/views/admin/style/css/ch-ui.admin.css')}}">
<link rel="stylesheet" href="/resources/views/admin/style/font/css/font-awesome.min.css">
`


## 20
原始laravel是沒有開啟session，要再入口網站開啟  
`session_start();`  
  
傳回同一個地方的圖，但為了讓瀏覽器感覺有變化，可以在後面加上一個隨機數  
`<img src="{{url('/admin/code')}}" alt=""onclick="this.src='{{url('/admin/code')}}?'+Math.random()">`  
  
## 21
csrf保護   
在網頁加入`{{csrf_field()}}`  
  
驗證碼相關處理
  
## 23
調整首頁  
建立模板可以引入  
  
## 24
建立middleware隔離有無登入的人   
建立登出功能

## 25
建立修改密碼的頁面 pass.blade.php  
  
## 26
修正上一段的錯誤
建立blog_cate表格

## 27
連接分類資料庫  
  
## 28
修改分類頁面呈現  

## 29
設計變動順序後會更改
http://layer.layui.com/  

## 30
新增添加文章模板
讀取資料庫資料做成選單

## 31
確認某一值不為空才能繼續
使用create新增值時，要注意fillable (白名單) 或 guarded(黑名單) 屬性

## 32
完成分類更新功能

## 33
完成分類管理模塊

## 34
建立文章資料庫  
準備好controller blade模板

## 35
引入百度文章編輯器  
https://ueditor.baidu.com/website/download.html

## 36
http://www.uploadify.com/









``
``
``
``
``
``
``
``
``
``
``
``
``
``
``




----------------
書 laravel5-for-beginner-shop-laravel

一般CMD下`vagrant box add laravel/homestead`
移到要使用的目錄
`git clone https://github.com/laravel/homestead.git Homestead`
執行init.sh
```
folders:
    - map: ~/Code
      to: /home/vagrant/code

sites:
    - map: shop-laravel.local
      to: /home/vagrant/Code/shop_laravel/public
```

`vagrant up`
`vagrant ssh`進入
``

`composer create-project laravel/laravel shop_laravel --prefer-dist`

設定host檔案


``
``
``
``
``
``
``
``
``
``
```
``
``
``
``
``
``
``
``
``
``
``
``
``
``