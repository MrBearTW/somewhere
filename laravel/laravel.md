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
```html
<link rel="stylesheet" href="{{asset('/resources/views/admin/style/css/ch-ui.admin.css')}}">
<link rel="stylesheet" href="/resources/views/admin/style/font/css/font-awesome.min.css">
```


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

## 37
上傳圖片套件程式碼調整完後還是無法使用

## 38


## 39
編輯article index可以正常顯示所有文章  
可以有分頁  

# 40
確認表單內容可以被編輯且能存入更新

# 41
完成文章刪除功能  
調整細部連結  

# 42
建立新的migration內容`C:\xampp\php\php.exe .\artisan make:migration create_link_table`  
執行建立命令`C:\xampp\php\php.exe .\artisan migrate`  

# 43
用seeder方式寫入blog_links資料表  
製作一個seeder`C:\xampp\php\php.exe .\artisan make:seeder LinksTableSeeder`  
執行`C:\xampp\php\php.exe .\artisan db:seed`  

# 44
建立可修改連結順序的頁面  

# 45
完成可新增超連結的頁面

# 46
完成超連結修改和刪除的按鍵功能  
添加首頁超連結管理頁面的連結  

# 47
完成導航列相關整理  

#48
config欄位建立

#49
config新增頁面
選單建立

#50
編輯config index頁面

#51
修改config edit頁面

#52
radio多幾個有問題，只會顯示最後一個

#53
radio多個仍有問題
製作可在index頁面修改content功能

#54
做修改之後會存一分到config/webbb.php
ConfigController@putFile

#55
後臺功能確定  

#56
查看laravel版本指令  
`C:\xampp\php\php.exe .\artisan --version`

#57
可跳過這一段影片  
5.2.26 升級至 5.2.29

#58
開始做前台模塊  
導入index new art  

#59
做index  
站長推薦區域  
最新文章和分頁功能  

#60
index 引入Config失敗  
category更新有點問題 pid的部分  

#61
方塊連結失敗  

#62


#63
a/1  
帶入

#64



#65
上線之前注意事項  
1.`C:\xampp\php\php.exe .\artisan key:generate`重新製作KEY   
2.修改.env  
APP_DEBUG 發布網站時可以把debug模式改成false   

http://blog.hd/cate/3  
http://blog.hd/a/6  
  



CSS的快速搜尋畫面  


----------------
書 laravel5-for-beginner-shop-laravel  

一般CMD下`vagrant box add laravel/homestead`  
移到要使用的目錄  
`git clone https://github.com/laravel/homestead.git Homestead`  
執行init.sh  
```BASH
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

---
# Request Lifecycle Of Laravel.
[Understanding the Request Lifecycle Of Laravel.](http://www.moiapps.com/journal/understanding-the-request-lifecycle-in-laravel)  

  
- The Standard Lifecycle is:
![](http://www.moiapps.com/sites/default/files/inline-images/lifecycle.jpg)
1. A HTTP Request is Routed to a Controller.
2. The Controller performs specific actions and sends data to a View.
3. The View formats the data appropriately, providing the HTTP Response.  
  
- There's three main areas where your application can affect the Loading steps in the Request Lifecycle.   
Loading, Booting, and Running.  
![](http://www.moiapps.com/sites/default/files/inline-images/bootstrap1.jpg) 
1. WORKBENCH  
2. ENVIRONMENT DETECTIONS
3. PATHS

- THE BOOTING STEPS  
There's 10 different areas your application can affect the Booting steps in the Request Lifecycle.
![There's 10 different areas your application can affect the Booting steps in the Request Lifecycle.](http://www.moiapps.com/sites/default/files/inline-images/bootstrap2.jpg)  
1. CONFIGURATION
2. SERVICE PROVIDERS
3. REGISTERING THE START FILES
4. HANDLE MIDDLEWARE GOING DOWN
5. BOOTING SERVICE PROVIDERS
6. BOOTING CALLBACKS
7. BOOTED CALLBACKS
8. YOUR APPLICATION START SCRIPT IS CALLED.
9. APP/START/{ENVIRONMENT}.PHP
10. APP/ROUTES.PHP

- THE RUNNING STEPS  
There's ten different areas where your application can affect the Running steps in the Request Lifecycle.  
![](http://www.moiapps.com/sites/default/files/inline-images/bootstrap3.jpg)
1. MAINTENANCE MODE
2. APP "BEFORE" FILTERS
3. ROUTE/CONTROLLER "BEFORE" FILTERS
4. THE ACTION
5. ROUTE/CONTROLLER "AFTER" FILTERS
6. APP "AFTER" FILTERS.
7. MIDDLEWARE RESPONSE HANDLING
8. MIDDLEWARE SHUTDOWN
9. FINISH CALLBACKS
10. SHUTDOWN CALLBACKS

# Docimentation
Laravel 5.8 
   
Prologue
- Release Notes
- Upgrade Guide
- Contribution Guide
- API Documentation  

Getting Started  
- Installation
- Configuration
- Directory Structure
- Homestead
- Valet
- Deployment  

Architecture Concepts  
- Request Lifecycle
- Service Container
- Service Providers
- Facades
- Contracts  

The Basics  
- Routing
- Middleware
- CSRF Protection
- Controllers
- Requests
- Responses
- Views
- URL Generation
- Session
- Validation
- Error Handling
- Logging  

Frontend  
- Blade Templates
- Localization
- Frontend Scaffolding
- Compiling Assets  

Security  
- Authentication
- API Authentication
- Authorization
- Email Verification
- Encryption
- Hashing
- Password Reset  

Digging Deeper  
- Artisan Console
- Broadcasting
- Cache
- Collections
- Events
- File Storage
- Helpers
- Mail
- Notifications
- Package Development
- Queues
- Task Scheduling  

Database  
- Getting Started
- Query Builder
- Pagination
- Migrations
- Seeding
- Redis

Eloquent ORM  
- Getting Started
- Relationships
- Collections
- Mutators
- API Resources
- Serialization  

Testing
- Getting Started
- HTTP Tests
- Console Tests
- Browser Tests
- Database
- Mocking  

Official Packages
- Cashier  
與金流服務串接
- Dusk
- Envoy  
Envoy only supports the Mac and Linux operating systems  
提供了簡潔、輕量的語法，定義在遠端伺服器執行的共同任務。
- Horizon  
監控Redis queues的圖形化介面
- Passport
- Scout  
full-text search
- Socialite  
authentication認證相關
- Telescope  
debug工具


# Routing
- Basic Routing  
Laravel routes accept a URI and a Closure.  
[閉包（Closure）](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Closures)是函式以及該函式被宣告時所在的作用域環境（lexical environment）的組合。
  - The Default Route Files  
  所有laravel路線都被定義在routes資料夾中。這些檔案框架會幫您自動載入。
  - Available Router Methods
  為路由註冊相對應的HTTP請求方法
    ```php
    Route::get($uri, $callback);
    Route::post($uri, $callback);
    Route::put($uri, $callback);
    Route::patch($uri, $callback);
    Route::delete($uri, $callback);
    Route::options($uri, $callback);
    ```
    可用match方法註冊多個請求,  
    或用any註冊所有的請求方法。
    ```php
    Route::match(['get', 'post'], '/', function () {});
    Route::any('/', function () {});
    ```
      - CSRF Protection
      所有POST, PUT, or DELETE的請求會被要求包含一個CSRF token，否則請求將被拒絕，
  - Redirect Routes  
  可以重新導向其他路徑  
  `Route::redirect('/here', '/there');`  
  重新導向的預設status code是302，但可透過增加第三個選擇性的變數做改變  
  `Route::redirect('/here', '/there', 301);`  
  透過permanentRedirect方法可以回傳status code  
  `Route::permanentRedirect('/here', '/there');`

  - View Routes  
  若只是回傳一個view頁面，不用定義完整的route或controlle
  第三個變數是選擇性的，給有需要提供array或data使用  
  `Route::view('/url', 'view_name', ['name' => 'Taylor']);`

- Route Parameters  
  - Required Parameters  
  路徑可帶入變數，可帶入多個。  
  變數中可使用底線 ' _ ' ，而不使用中線 ' - '。
    ```php
    Route::get('posts/{post}/comments/{comment}', function ($postId, $commentId) {
      return 'User '.$postId;
      return 'Comment '.$commentId;
    });
    ```
  - Optional Parameters
  在參數後面加上一個 ' ? '，可選擇性的給予參數。
  記得給予一個預設值。
    ```php
    Route::get('user/{name?}', function ($name = null) {
      return $name;
    });
    Route::get('user/{name?}', function ($name = 'John') {
      return $name;
    });
    ```
  - Regular Expression Constraints正則表示式限制
    ```php
    Route::get('user/{name}', function ($name) {
    })->where('name', '[A-Za-z]+'); //a到z或A到Z (+)出現一次或多次

    Route::get('user/{id}', function ($id) {
    })->where('id', '[0-9]+'); // 數字 (+)出現一次或多次

    Route::get('user/{id}/{name}', function ($id, $name) {
    })->where(['id' => '[0-9]+', 'name' => '[a-z]+']);
    ```
    - Global Constraints做全域限制  
    使用pattern方法  
    需要定義這個pattern的boot方法在RouteServiceProvider中
      ```php
      public function boot()
      {
        Route::pattern('id', '[0-9]+');
        parent::boot();
      }
      ```
      一旦這個pattern被定義後，若使用到這個變數則會自動帶入這個限制
      ```php
      Route::get('user/{id}', function ($id) { });
      ```
    - Encoded Forward Slashes  
    Laravel roiting允許所有字符除了 ' / ' ，若要使用則要明確用正則表示式來允許。
      ```php
      Route::get('search/{search}', function ($search) {
        return $search;
      })->where('search', '.*');
      ```
      僅在最後一段的路由中支援' / '
- Named Routes  
命名路由可以簡化路由，在路由後面加上一個name的方法。  
  ```php
  Route::get('user/profile', function () {
  })->name('profile');
  ```
  也可簡化控制器的方法。
  ```php
  Route::get('user/profile', 'UserProfileController@show')->name('profile');
  ```
  - Generating URLs To Named Routes  
  當指派一個名字給路由後，可能會用在產生新的URL或是做重新導向
    ```php
    // Generating URLs...
    $url = route('profile');
    // Generating Redirects...
    return redirect()->route('profile');
    ```
    若有兩個變數則會自動帶入URL中  
    ```php
    Route::get('user/{id}/profile', function ($id) {
    })->name('profile');
    $url = route('profile', ['id' => 1]);
    ```
  - Inspecting The Current Route  
    如果要確定 當前請求 是否已給予到 給定的命名路由，則可以在中介層Route上使用named方法。
    下面這是middleware  
    ```php
    public function handle($request, Closure $next)
    {
      if ($request->route()->named('profile')) {
      }
      return $next($request);
    }
    ``` 
- Route Groups  
路由群組可以分享路由屬性。  
在方法`Route::group`中的第一個參數，使用陣列格式分享屬性。  
巢狀的路由會自動合併來自父群組的屬性。
當names, namespaces, and prefixes有附加時，中介層和where條件會合併。  
Namespace 的elimiters分隔符 and slashes斜槓 會自動加入在適當的位置。  
  - Middleware  
  在定義群組之前，使用middleware方法加入中介層。  
  中介層會依照他們在陣列中的順序執行。  
    ```php
    Route::middleware(['first', 'second'])->group(function () {
      Route::get('/', function () {    });
      Route::get('user/profile', function () {    });
    });
    ```
  - Namespaces  
    使用同一個命名空間的路由群組  
    ```php
    Route::namespace('Admin')->group(function () {    });
    ```
    預設中RouteServiceProvider就會帶入[App\Http\Controllers]這一段，所以只需要填入之後的命名空間即可。  
  - Sub-Domain Routing子網域路由  
    可以像路由URI一樣為子域分配路由參數，允許您捕獲子域的一部分以供路由或控制器使用。  
    要在定義群組之前使用`domin`方法指定。
    ```php
    Route::domain('{account}.myapp.com')->group(function () {
      Route::get('user/{id}', function ($account, $id) {
        //
      });
    });
    ```
    為了確保您的子域路由可達，您應該在註冊根域路由之前註冊子域路由。這將防止根域路由覆蓋具有相同URI路徑的子域路由。  
  - Route Prefixes  
    可以提供整個群組共同的前綴  
    ```php
    Route::prefix('admin')->group(function () {
      Route::get('users', function () {
        // Matches The "/admin/users" URL
      });
    });
    ```
  - Route Name Prefixes  
    name方法可用於為群組中的每個路由名稱添加給定的字串  
    確保' . '會被提供。  
    ```php
    Route::name('admin.')->group(function () {
     Route::get('users', function () {
       // Route assigned name "admin.users"...
      })->name('users');
    });
    ```
- Route Model Binding
  當將ID加入route中，我們會常常檢所關於該ID的模型  
  除了注入ID之外，您可以注入整個與該ID有關的模型實例。
  - Implicit Binding隱式綁定  
  Laravel自動解析路徑或控制器操作中定義的Eloquent模型，其類型提示的變量名稱與路徑段名稱匹配    
    ```php
    Route::get('api/users/{user}', function (App\User $user) {
      return $user->email;
    });
    ```
    由於$user變量是類型提示為`App\User`Eloquent模型，變量名稱與{user}URI段匹配，因此Laravel將自動注入具有與請求URI中的相應值匹配的ID的模型實例。  
    若不匹配，則會自動產生404反應。  
    - Customizing The Key Name  
      若要使用ID之外的欄位，可以覆蓋Eloquent模型上的`getRouteKeyName`方法
      ```php
      public function getRouteKeyName()
        {
            return 'slug';
        }
      ```
  - Explicit Binding顯式綁定
  要註冊一個顯式的綁定，使用路由的model方法定class給參數。  
  您應該在RouteServiceProvider類的boot方法中定義顯式模型綁定。
    ```php
    public function boot()
    {
        parent::boot();
        Route::model('user', App\User::class);
    }
    ```
    下一步，定義包含{user}參數的路由。
    ```php
    Route::get('profile/{user}', function (App\User $user) {
    //
    });
    ```
    由於我們已將所有{user}參數綁定到`App\User`模型，因此將在路由中注入User實例。  
    例如說：一個請求`profile/1`，將從 [ID為1的數據庫] 中註入User實體。
    若不匹配，則會自動產生404反應。
      - Customizing The Resolution Logic客製化分解邏輯
      若想要客製化分解邏輯，你可以使用`Route::bind`方法。
      傳遞給`bind`方法的Closure將接收URI分割的值 且 應該返回 應注入路由中的 該類別的實體。  
        ```php
        public function boot()
          {
              parent::boot();
              Route::bind('user', function ($value) {
                  return App\User::where('name', $value)->first() ?? abort(404);
              });
          }
        ```
        或者，您可以覆蓋Eloquent模型上的`resolveRouteBinding`方法。  
        這個方法將接收 URI片段的值，並應返回應注入路由的類的介面。
        ```php
        public function resolveRouteBinding($value)
        {
            return $this->where('name', $value)->first() ?? abort(404);
        }
        ```
- Fallback Routes倒退路由  
  **倒退路由 應 總是 最後一個 被應用註冊的 路由**  
  使用`Route::fallback`方法，你可以定義在[沒有其他路由]與[傳入請求]匹配時 將執行的路由。  
  通常，未處理的請求將通過應用的異常處理程序自動呈現“404”頁面。  
  但是因為您在`route/web.php`中定義了`fallback`路由，所有在`web`中介層的中介層都將應用該路由。  
  您可以依需求向此路由添加其他中間層。
  ```php
  Route::fallback(function () {
      //
  });
  ```
- Rate Limiting(先跳過)
- Form Method Spoofing(先跳過)
- Accessing The Current Route(先跳過)  
  
# Middleware
- Introduction  
  Middleware提供一個方便的機制來過濾所有透過HTTP來對應用的要求。  
  例如認證，有認證就可以進一步應用，沒有認證就會重新導向。  
  除了認證之外還可以執行不同的任務。  
  CORS middleware(Cross-Origin Resource Sharing跨來源資源共用)能為離開您的應用程序提供正確的header。  
  logging middleware可以為記錄所有傳送要求給應用的log。  
  Laravel中有CSRF和authentication兩種中介層保護。
  所有中介層都在目錄`app/Http/Middleware`中。
- Defining Middleware  
  這個指令可以製作一個新的middleware   
  `php artisan make:middleware CheckAge`  
  此指令將在`app/Http/Middleware`中新建立一個`CheckAge`類別。  
  在這一個範例中介層中，只允許`age`>=200的通過，其餘會重新導向回`home`URI。  
  ```php
  <?php

  namespace App\Http\Middleware;

  use Closure;

  class CheckAge
  {
      /**
      * Handle an incoming request.
      *
      * @param  \Illuminate\Http\Request  $request
      * @param  \Closure  $next
      * @return mixed
      */
      public function handle($request, Closure $next)
      {
          if ($request->age <= 200) {
              return redirect('home');
          }

          return $next($request);
      }
  }
  ```
  請求 通過後 更深入的傳遞到應用程序中，使用`$request`調用`$ next`回呼。  
  最好將中介層設想為一系列“層”，HTTP請求必須在它們到達您的應用之前通過。  
  每一個層都可以檢查請求，甚至完全拒絕這些請求。  
  - Before & After Middleware  
  中介層在請求之前還是之後運行取決於中介層本身。  
    在應用程序處理請求之前，以下中介層將先執行。  
    ```php
    <?php
    namespace App\Http\Middleware;
    use Closure;
    class BeforeMiddleware
    {
        public function handle($request, Closure $next)
        {
            // Perform action
            return $next($request);
        }
    }
    ```
    這個中介層將在請求於應用執行完後才執行。  
    ```php
    <?php
    namespace App\Http\Middleware;
    use Closure;
    class AfterMiddleware
    {
        public function handle($request, Closure $next)
        {
            $response = $next($request);
            // Perform action
            return $response;
        }
    }
    ```
- Registering Middleware  
  - Global Middleware  
  若要所有的http請求在到達應用前通過中介層，在`app/Http/Kernel.php`中列出所有中介層類別的`$middleware`屬性。  
  - Assigning Middleware To Routes  
  若要在特定的路由中加入中介層，要在`app/Http/Kernel.php`中指派一個Key。  
  預設中，這個類別的`$routeMiddleware`屬性 包含整個Laravel的中介層。  
  要添加自己的，請將其附加到此列表並為其指定一個您選擇的key。  
    ```php
    // Within App\Http\Kernel Class...
    protected $routeMiddleware = [
        'auth' => \App\Http\Middleware\Authenticate::class,
        'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
        'bindings' => \Illuminate\Routing\Middleware\SubstituteBindings::class,
        'cache.headers' => \Illuminate\Http\Middleware\SetCacheHeaders::class,
        'can' => \Illuminate\Auth\Middleware\Authorize::class,
        'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
        'signed' => \Illuminate\Routing\Middleware\ValidateSignature::class,
        'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
        'verified' => \Illuminate\Auth\Middleware\EnsureEmailIsVerified::class,
    ];
    ```
    一旦在HTTP核心中定義了中介層，您就可以使用`middleware`方法將中介層分配給路由。
    ```php
    Route::get('admin/profile', function () {
      //
    })->middleware('auth');
    ```
    也可以指定多個中介層到同一個路由  
    ```php
    Route::get('/', function () {
        //
    })->middleware('first', 'second');
    ```
    在指派中介層時，你還可以傳遞完全限定的類別名稱  
    ```php
    use App\Http\Middleware\CheckAge;
    Route::get('admin/profile', function () {
        //
    })->middleware(CheckAge::class);
    ```
  - Middleware Groups  
  有時希望將多個中介層群組成單一個key以便更容易地分配給路由。  
  可以使用HTTP核心的`$middlewareGroups`屬性執行此操作。  
  Laravel附帶了`web`和`api`中介層 組，其中包含您可能希望應用於[Web UI]和[API路由]的常用中介層。
    ```php
    /**
     * The application's route middleware groups.
    *
    * @var array
    */
    protected $middlewareGroups = [
        'web' => [
            \App\Http\Middleware\EncryptCookies::class,
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
            \Illuminate\Session\Middleware\StartSession::class,
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,
            \App\Http\Middleware\VerifyCsrfToken::class,
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],

        'api' => [
            'throttle:60,1',
            'auth:api',
        ],
    ];
    ```
    可以使用與單個中介層相同的語法將中介層組分配給路由和控制器動作。  
    中介層組 可以更方便的一次分配不同中介層給路由。  
    ```php
    Route::get('/', function () {
        //
    })->middleware('web');

    Route::group(['middleware' => ['web']], function () {
        //
    });
    ```
    `web`中介層 組 會 由`RouteServiceProvider` 自動應用於`routes/web.php`。
  - Sorting Middleware  
  很少見的，您可能需要中介層一特定順序執行，但在分配類路由時無法控制其順序。  
  這種情況下，您可以使用`app/Http/Kernel.php`文件的$ middlewarePriority屬性指定中介層的優先程度。
    ```php
    /**
     * The priority-sorted list of middleware.
    *
    * This forces non-global middleware to always be in the given order.
    *
    * @var array
    */
    protected $middlewarePriority = [
        \Illuminate\Session\Middleware\StartSession::class,
        \Illuminate\View\Middleware\ShareErrorsFromSession::class,
        \App\Http\Middleware\Authenticate::class,
        \Illuminate\Session\Middleware\AuthenticateSession::class,
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
        \Illuminate\Auth\Middleware\Authorize::class,
    ];
    ```
- Middleware Parameters(先跳過)    
- Terminable Middleware(先跳過)    

# CSRF Protection
- Introduction
  Laravel可以輕鬆保護您的應用程序免受跨站點請求偽造（CSRF）攻擊。  
  跨站點請求偽造是一種惡意攻擊，由此代表經過身份驗證的用戶執行未經授權的命令。  
  Laravel為應用程序管理的每個活動用戶session自動生成CSRF token。  
  此token用於驗證經過身份驗證的用戶是否是實際向應用程序發出請求的用戶。  
  無論何時在應用程序中定義HTML表單，都應在表單中包含隱藏的CSRF token區段，以便CSRF保護中介層可以驗證請求。  
  您可以使用`@csrf` Blade指令生成token。
  ```html
  <form method="POST" action="/profile">
      @csrf
      ...
  </form>
  ```
  包含在 Web中介層組 中的VerifyCsrfToken中介層將 自動驗證請求輸入中的token是否與儲存在session中的token匹配。  
  - CSRF Tokens & JavaScript
  在構建JavaScript驅動的服務時，讓JavaScript HTTP庫 自動將CSRF token附加到每個傳出請求都很方便。  
  預設下，`resources/js/bootstrap.js`文件使用[Axios HTTP](https://github.com/axios/axios)庫 註冊csrf-token元標記 的 值。如果您不使用此庫，則需要為應用程序手動配置此行為。
- Excluding URIs From CSRF Protection
  有時您可能希望從CSRF保護中排除一組URI。  
  例如，如果您使用Stripe處理付款並使用其webhook系統，您需要從CSRF保護中排除Stripe webhook處理程序路由，因為Stripe將不知道要向您的路由發送什麼CSRF token。  
  通常，您應將這些類型的路由放在RouteServiceProvider應用於`routes/web.php`文件中所有路由的Web中介層組之外。但是，您也可以通過將其URI添加到VerifyCsrfToken中間件的$ except屬性來排除路由。    
  ```php
  <?php
  namespace App\Http\Middleware;
  use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;
  class VerifyCsrfToken extends Middleware
  {
      /**
      * The URIs that should be excluded from CSRF verification.
      *
      * @var array
      */
      protected $except = [
          'stripe/*',
          'http://example.com/foo/bar',
          'http://example.com/foo/*',
      ];
  }
  ```
  注意！ 運行測試時會自動暫停CSRF中介層  

[CSRF 和X-CSRF-TOKEN 和 X-XSRF-TOKEN 比較](https://stackoverflow.com/questions/34782493/difference-between-csrf-and-x-csrf-token)
- X-CSRF-Token  
  除了檢查CSRF token作為POST參數，VerifyCsrfToken中介層還將檢查X-CSRF-TOKEN請求header。例如，您可以將token儲存在HTML meta tag中。  
  ```html
  <meta name="csrf-token" content="{{ csrf_token() }}">
  ```  
  然後，一旦創建了meta tag，就可以指示像jQuery這樣的庫自動將tag添加到所有請求header中。
  這為基於AJAX的 應用程序 提供了簡單，方便的CSRF保護。  
  ```javascript
  $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
  ```
  注意！預設下，`resources/js/bootstrap.js`文件使用Axios HTTP庫註冊`csrf-token` meta tag的值。如果您不使用此庫，則需要為應用手動配置此設定。  
- X-XSRF-Token  
  Laravel將當前CSRF token存儲在XSRF-TOKEN cookie中，該cookie包含在框架生成的每個回應中。 您可以使用cookie值來設置X-XSRF-TOKEN請求標頭。  
  這個cookie主要是為了方便發送的，因為一些JavaScript框架和庫（如Angular和Axios）自動將其值放在X-XSRF-TOKEN頭中


# Controllers
- Introduction  
  您可能希望使用Controller類別 管理此 方法，而不是將所有 請求處理邏輯 定義在 路由 文件中的Closures。  
  控制器可以將相關的請求處理邏輯 分組到單個class中。  
  控制器儲存在`app/Http/Controllers`目錄中。  
- Basic Controllers  
  - Defining Controllers  
    請注意，控制器擴展了Laravel附帶的基本控制器class。  
    基本class提供了一些便利方法，例如中介層方法，可用於將中介層附加到控制器動作。
    ```PHP
    <?php
    namespace App\Http\Controllers;
    use App\User;
    use App\Http\Controllers\Controller;
    class UserController extends Controller
    //Illuminate is located in /vendor/laravel/framework/src/Illuminate
    {
        /**
        * Show the profile for the given user.
        *
        * @param  int  $id
        * @return View
        */
        public function show($id)
        {
            return view('user.profile', ['user' => User::findOrFail($id)]);
        }
    }
    ```
    您可以這樣定義到此 控制器 方法 的路由。  
    `Route::get('user/{id}', 'UserController@show');`  
    現在，當 請求 與 指定的路由URI 匹配時，將執行UserController類上的show方法。路由參數也將傳遞給方法。  
    注意！控制器不一定要自基礎class擴展。但是，您將沒有權限操作 中介層，validate, and dispatch 方法 等便利功能。
  - Controllers & Namespaces  
    在定義 控制器路由 時，我們不需要指定完整的 控制器 命名空間。  
    由於`RouteServiceProvider`在包含命名空間的 路由組 中加載 路由文件，因此我們僅指定了命名空間的`App\Http\Controllers`部分之後的類名稱部分。  
    如果選擇將 控制器 深入 nest 到`App\Http\Controllers`目錄中，請使用相對於`App\Http\Controllers`根命名空間的特定類名。  
    因此，如果您的完整控制器類是`App\Http\Controllers\Photos\AdminController`，您應該將路由註冊到控制器，如下所示
    ```php
    Route::get('foo', 'Photos\AdminController@method');
    ```
  - Single Action Controllers  
    如果要定義 僅處理單個操作的 控制器，可以在控制器上放置一個`__invoke`方法：  
    ```php
    <?php
    namespace App\Http\Controllers;
    use App\User;
    use App\Http\Controllers\Controller;

    class ShowProfile extends Controller
    {
        /**
        * Show the profile for the given user.
        *
        * @param  int  $id
        * @return View
        */
        public function __invoke($id)
        {
            return view('user.profile', ['user' => User::findOrFail($id)]);
        }
    }
    ```
    註冊單個操作控制器的路由時，無需指定方法  
    ```php
    Route::get('user/{id}', 'ShowProfile');
    ```
    您可以使用make：controller Artisan命令的`--invokable`選項生成可調用控制器`php artisan make:controller ShowProfile --invokable`  
- Controller Middleware(先跳過)  
- Resource Controllers(先跳過)  
  - Partial Resource Routes(先跳過)  
  - Naming Resource Routes(先跳過)  
  - Naming Resource Route Parameters(先跳過)  
  - Localizing Resource URIs(先跳過)  
  - Supplementing Resource Controllers(先跳過)  
- Dependency Injection & Controllers
  - Constructor Injection  
    [Laravel service container]()用於解析所有Laravel控制器。 
    因此，您可以在其 構造函數 中 鍵入提示 控制器可能需要的任何依賴項。  
    聲明的依賴項將自動解析並註入控制器實體。  
    ```php
    <?php
    namespace App\Http\Controllers;
    use App\Repositories\UserRepository;
    class UserController extends Controller
    {
        /**
        * The user repository instance.
        */
        protected $users;

        /**
        * Create a new controller instance.
        *
        * @param  UserRepository  $users
        * @return void
        */
        public function __construct(UserRepository $users)
        {
            $this->users = $users;
        }
    }
    ```
    您也可以輸入任何類型提示[Laravel contract]()。  
    如果容器可以解析它，您可以鍵入提示。  
    根據您的 應用，將 依賴項 注入 控制器可能會提供更好的 可測試性。  
  - Method Injection  
    除了constructor注入之外，您還可以在 控制器的 方法上鍵入提示 依賴項。  
    方法注入的常見用例是將`Illuminate\Http\Request`實體注入到控制器方法中  
    ```php
    <?php
    namespace App\Http\Controllers;
    use Illuminate\Http\Request;
    class UserController extends Controller
    {
        /**
        * Store a new user.
        *
        * @param  Request  $request
        * @return Response
        */
        public function store(Request $request)
        {
            $name = $request->name;

            //
        }
    }
    ```
    如果您的控制器方法也期望從路由參數輸入，請在其他依賴項之後列出路由參數。  
    如果您的路由定義如下
    ```php
    Route::put('user/{id}', 'UserController@update');
    ```
    您仍然可以通過定義控制器方法鍵入提示`Illuminate\Http\Request`並訪問您的id參數，如下所示  
    ```php
    <?php
    namespace App\Http\Controllers;
    use Illuminate\Http\Request;
    class UserController extends Controller
    {
        /**
        * Update the given user.
        *
        * @param  Request  $request
        * @param  string  $id
        * @return Response
        */
        public function update(Request $request, $id)
        {
            //
        }
    }
    ```
- Route Caching(先跳過)  

# HTTP Requests
- Accessing The Request
  要通過依賴注入獲取當前HTTP請求的實例，您應該在控制器方法上鍵入提示`Illuminate\Http\Request`類。
  傳入的請求實例將由[service container]()自動注入。
  ```php
  <?php
  namespace App\Http\Controllers;
  use Illuminate\Http\Request;
  class UserController extends Controller
  {
      /**
      * Store a new user.
      *
      * @param  Request  $request
      * @return Response
      */
      public function store(Request $request)
      {
          $name = $request->input('name');

          //
      }
  }
  ```
  - Dependency Injection & Route Parameters  
    如果您的控制器方法也期望從路由參數輸入，則應在其他依賴項之後列出路由參數。例如，如果您的路線定義如下：
    ```php
    Route::put('user/{id}', 'UserController@update');
    ```
    您仍然可以通過定義控制器方法鍵入提示`Illuminate\Http\Request`並訪問您的路由參數ID，如下所示  
    ```php
    <?php
    namespace App\Http\Controllers;
    use Illuminate\Http\Request;
    class UserController extends Controller
    {
        /**
        * Update the specified user.
        *
        * @param  Request  $request
        * @param  string  $id
        * @return Response
        */
        public function update(Request $request, $id)
        {
            //
        }
    }
    ```
  - Accessing The Request Via Route Closures  
    您也可以在路由Closure上鍵入提示`Illuminate\Http\Request`類。  
    服務容器將在執行時自動將傳入請求注入Closure。  
    ```php
    use Illuminate\Http\Request;

    Route::get('/', function (Request $request) {
        //
    });
    ```
- Request Path & Method(先跳過)  
  - PSR-7 Requests(先跳過)  
  - Input Trimming & Normalization(先跳過)  
- Retrieving Input(先跳過)  
- Old Input(先跳過)  
  - Cookies(先跳過)  
- Files(先跳過)  
  - Retrieving Uploaded Files(先跳過)  
  - Storing Uploaded Files(先跳過)  
- Configuring Trusted Proxies(先跳過)  




Service Container：Laravel服務容器是一個用於管理類依賴性和執行依賴注入的強大工具  
Closure：  
在編程語言中，閉包，也就是詞法閉包或函數閉包，是一種在具有第一類函數的語言中實現詞法範圍的名稱綁定的技術。  
閉包是將函數與環境一起存儲的記錄  



# Eloquent ORM
## Getting Started
- Introduction  
  Laravel包含了Eloquent ORM提供了一個漂亮，簡單的ActiveRecord實現，用於處理數據庫。  
  每個db table都有一個相應的“Model”，用於與該Table進行交互。  
  Model允許您查詢Table中的數據，以及在Table中插入新記錄。  
  在開始之前，請確保在`config/database.php`中 配置 數據庫 連接。
- Defining Models  
  首先，讓我們創建一個Eloquent模型。  
  模型通常位於`app`目錄中，但您可以根據`composer.json`文件將它們放置在可以自動加載的任何位置。所有Eloquent模型都擴展了`Illuminate\Database\Eloquent\Model`類。  
  用指令建立`php artisan make:model Flight`model。  
  如果要在生成模型時生成數據庫遷移，可以使用--migration或-m選項：
  ```
  php artisan make:model Flight --migration
  php artisan make:model Flight -m
  ```
  - Eloquent Model Conventions  
    現在，讓我們看一個範例 Flight模型，我們將使用它來檢索和存儲來自我們的航班數據庫表的信息：
    ```php
    <?php

    namespace App;

    use Illuminate\Database\Eloquent\Model;

    class Flight extends Model
    {
        protected $table = 'my_flights';  //Table Names

        protected $primaryKey = 'flight_id';   //Primary Keys
        public $incrementing = false;
        protected $keyType = 'string';

        public $timestamps = false;   //Timestamps
        protected $dateFormat = 'U';
        const CREATED_AT = 'creation_date';
        const UPDATED_AT = 'last_update';

        protected $connection = 'connection-name';    //Database Connection

        protected $attributes = [   //Default Attribute Values
        'delayed' => false,
        ];
    }
    ```
    - Table Names  
      若沒有特別指定，則預設使用`Flight`Table。
    - Primary Keys  
      指定主鍵。  
      若主鍵不是遞增，則要調整為false。  
      若主鍵不是數字，則要設為相對應的型別。  
    - Timestamps  
      若不需要時間戳記，則要調整為false。  
      可設定時間戳記格式。
      客製化  CREATED_AT和UPDATED_AT 欄位名稱設計。
    - Database Connection  
      預設使用預設的設定來connection，可用connection屬性來修改。
  - Default Attribute Values  
    定義一些預設屬性給這一個Model。  
- Retrieving Models檢索模型  
  ```php
  <?php
  $flights = App\Flight::all();
  foreach ($flights as $flight) {
      echo $flight->name;
  }
  ```
    - Adding Additional Constraints
      方法`all`會回傳所有檢索的結果。  
      由於每個Eloquent模型都充當[query builder](https://laravel.com/docs/5.8/queries)，因此您還可以向查詢添加約束，然後使用get方法檢索結果。  
      ```php
      $flights = App\Flight::where('active', 1)
               ->orderBy('name', 'desc')
               ->take(10)
               ->get();
      ```
      提醒！！！由於Eloquent模型是query builder，您應該查看查詢構建器上可用的所有方法。您可以在Eloquent查詢中使用這些方法中的任何一種。
      - Refreshing Models  
        您可以使用`fresh`和`refresh`方法刷新模型。  
        `fresh`method將從數據庫中重新檢索模型。現有的模型實例不會受到影響：
        ```php
        $flight = App\Flight::where('number', 'FR 900')->first();
        $freshFlight = $flight->fresh();
        ```
        `refresh`方法將使用數據庫中的新數據re-hydrate現有模型。  
        ```php
        $flight = App\Flight::where('number', 'FR 900')->first();
        $flight->number = 'FR 456';
        $flight->refresh();
        $flight->number; // "FR 900"
        ```
  - Collections  
    對於Eloquent方法像是`all`和`grt`檢索的多個結果，將返回`Illuminate\Database\Eloquent\Collection`的實例。  
    Collection類提供了各種有用的方法來處理您的Eloquent結果：  
    ```php
    $flights = $flights->reject(function ($flight) {
    return $flight->cancelled;
    });
    ```
    您也可以像array一樣循環集合：  
    ```php
    foreach ($flights as $flight) {
    echo $flight->name;
    }
    ```
  - Chunking Results  
    如果需要處理數千個Eloquent記錄，請使用chunk命令。  
    chunk方法將檢索Eloquent模型的“塊chunk”，將它們送到給定的Closure進行處理。  
    在處理大型結果集時，使用chunk方法將節省內存：  
    ```php
    Flight::chunk(200, function ($flights) {
      foreach ($flights as $flight) {
          //
      }
    });
    ```
    傳遞給該方法的第一個參數是您希望每個“塊”接收的記錄數。  
    作為第二個參數傳遞的Closure將被調用從數據庫中檢索的每個塊。  
    將執行數據庫查詢以檢索傳遞給Closure的每個記錄塊。  
      - Using Cursors
        cursor方法允許您使用游標迭代數據庫記錄，該游標只執行單個查詢。  
        處理大量數據時，可以使用cursor方法大大減少內存使用量：
        ```php
        foreach (Flight::where('foo', 'bar')->cursor() as $flight) {
            //
        }
        ```
- Retrieving Single Models / Aggregates  
  除了檢索給定表的所有記錄之外，您還可以使用`find`或`first`檢索單個記錄。  
  這些方法返回single model instance，而不是返回模型collection：  
  ```php
  // Retrieve a model by its primary key...
  $flight = App\Flight::find(1);

  // Retrieve the first model matching the query constraints...
  $flight = App\Flight::where('active', 1)->first();
  ```
  您也可以使用主鍵數組調用find方法，這將返回匹配記錄的集合：  
  ```php
  $flights = App\Flight::find([1, 2, 3]);
  ```  
    - Not Found Exceptions  
      有時，如果找不到模型，您可能希望拋出exception。  
      這在routes或controllers中特別有用。  
      `findOrFail`和`firstOrFail`方法將檢索查詢的第一個結果
      但是，如果未找到任何結果，將拋出`Illuminate\Database\Eloquent\ModelNotFoundException`：
      ```php
      $model = App\Flight::findOrFail(1);
      $model = App\Flight::where('legs', '>', 100)->firstOrFail();
      ```
      如果未捕獲異常，則會自動將404 HTTP響應發送回用戶。  
      使用這些方法時，沒有必要編寫顯式檢查explicit checks來返回404響應：  
      ```php
      Route::get('/api/flights/{id}', function ($id) {
          return App\Flight::findOrFail($id);
      });
      ```
  - Retrieving Aggregates  
    您還可以使用query builder提供的`count`，`sum`，`max`和其他[聚合方法aggregate methods](https://laravel.com/docs/5.8/queries#aggregates) 。
    這些方法返回適當的scalar value，而不是完整的模型實例：
    ```php
    $count = App\Flight::where('active', 1)->count();
    $max = App\Flight::where('active', 1)->max('price');
    ```
- Inserting & Updating Models  
  - Inserts  
    要在database中創建新記錄，請創建新model instance，在模型上設置屬性，然後調用save方法：
    ```php
    <?php

    namespace App\Http\Controllers;

    use App\Flight;
    use Illuminate\Http\Request;
    use App\Http\Controllers\Controller;

    class FlightController extends Controller
    {
        /**
        * Create a new flight instance.
        *
        * @param  Request  $request
        * @return Response
        */
        public function store(Request $request)
        {
            // Validate the request...

            $flight = new Flight;

            $flight->name = $request->name;

            $flight->save();
        }
    }
    ```
    呼叫`save`方法時，`created_at` and `updated_at`會自動被規定。
  - Updates  
    - Mass Updates
      所有處於活動狀態且目的地為聖地亞哥的航班將被標記為延遲。  
      ```php
      App\Flight::where('active', 1)
          ->where('destination', 'San Diego')
          ->update(['delayed' => 1]);
      ```
      注意！！！  通過Eloquent發出批量更新時，不會為更新的模型觸發`saving`, `saved`, `updating`, and`updated`的模型事件。這是因為在發布批量更新時，實際上從未檢索過模型。  
  - Mass Assignment  
    但是，在執行此操作之前，您需要在模型上指定`fillable` or `guarded`屬性，因為默認情況下所有Eloquent模型都會防止批量分配。  
    當用戶通過請求傳遞意外的HTTP參數時，會發生批量分配漏洞，並且該參數會更改數據庫中您不期望的column。  
    例如，惡意用戶可能通過HTTP請求發送is_admin參數，然後將其傳遞到模型的create方法中，允許用戶將自己升級為管理員。  
    因此，要開始使用，您應該定義要進行批量分配的模型屬性。
    您可以使用模型上的`$fillable`屬性執行此操作。  
    ```php
    <?php
    namespace App;
    use Illuminate\Database\Eloquent\Model;
    class Flight extends Model
    {
        /**
        * The attributes that are mass assignable.
        *
        * @var array
        */
        protected $fillable = ['name'];
    }
    ```
    一旦我們將屬性賦予質量可分配，我們就可以使用create方法在數據庫中插入新記錄。  
    create方法返回已saved model 實例：  
    ```php
    $flight = App\Flight::create(['name' => 'Flight 10']);
    ```
    如果您已有模型實例，則可以使用fill方法使用一組屬性填充它：  
    ```php
    $flight->fill(['name' => 'Flight 22']);
    ```
    - Guarding Attributes
      雖然`$fillable`可作為可以批量分配的屬性的“白名單”，但您也可以選擇使用`$guarded`。  
      `$guarded`屬性應包含一系列您不希望可批量分配的屬性。  
      不在array中的所有其他屬性將是可批量分配的。  
      因此，`$guarded`功能就像一個“黑名單”。  
      重要的是，您應該使用`$fillable`或`$guarded` - 而不是兩者。  
      在下面的示例中，除價格外的所有屬性都是可批量分配的：  
      ```php
      <?php
      namespace App;
      use Illuminate\Database\Eloquent\Model;
      class Flight extends Model
      {
          /**
          * The attributes that aren't mass assignable.
          *
          * @var array
          */
          protected $guarded = ['price'];
      }
      ```
      如果您想使所有屬性都可以分配，您可以將`$guarded`屬性定義為空array：  
      ```php
      /**
       * The attributes that aren't mass assignable.
      *
      * @var array
      */
      protected $guarded = [];
      ```
  - Other Creation Methods  
    **firstOrCreate / firstOrNew**
    您可以使用另外兩種方法通過批量分配屬性來創建模型：`firstOrCreate`和`firstOrNew`。  
    `firstOrCreate`方法將嘗試使用給定的column/value對定位數據庫記錄。  
    如果在數據庫中找不到該模型，則將插入一條記錄，其中包含第一個參數的屬性以及可選的第二個參數中的屬性。  
    `firstOrNew`方法與`firstOrCreate`一樣，將嘗試在與給定屬性匹配的數據庫中查找記錄。  
    但是，如果未找到模型，則將返回新的模型實例。  
    請注意，firstOrNew返回的模型尚未保留到數據庫中。  
    您需要手動調用save來保存它：  
    ```php
    // Retrieve flight by name, or create it if it doesn't exist...
    $flight = App\Flight::firstOrCreate(['name' => 'Flight 10']);

    // Retrieve flight by name, or create it with the name, delayed, and arrival_time attributes...
    $flight = App\Flight::firstOrCreate(
        ['name' => 'Flight 10'],
        ['delayed' => 1, 'arrival_time' => '11:30']
    );

    // Retrieve by name, or instantiate...
    $flight = App\Flight::firstOrNew(['name' => 'Flight 10']);

    // Retrieve by name, or instantiate with the name, delayed, and arrival_time attributes...
    $flight = App\Flight::firstOrNew(
        ['name' => 'Flight 10'],
        ['delayed' => 1, 'arrival_time' => '11:30']
    );
    ```  
    **updateOrCreate**
    您可能還會遇到要更新現有模型或創建新模型（如果不存在）的情況。  
    Laravel提供了updateOrCreate方法，只需一步即可完成此操作。  
    與firstOrCreate方法一樣，updateOrCreate持久化模型，因此無需調用save）：  
    ```php
    // If there's a flight from Oakland to San Diego, set the price to $99.
    // If no matching model exists, create one.
    $flight = App\Flight::updateOrCreate(
        ['departure' => 'Oakland', 'destination' => 'San Diego'],
        ['price' => 99, 'discounted' => 1]
    );
    ```
- Deleting Models  
  要刪除model，請在model實例上調用delete方法：  
  ```php
  $flight = App\Flight::find(1);

  $flight->delete();
  ```
  **Deleting An Existing Model By Key**  
    在上面的示例中，我們在調用delete方法之前從數據庫中檢索模型。但是，如果您知道模型的主鍵，則可以通過調用destroy方法刪除模型而不檢索它。    
    除了單個主鍵作為其參數之外，destroy方法還將接受多個主鍵，主鍵數組或主鍵集合：  
    ```php
    App\Flight::destroy(1);

    App\Flight::destroy(1, 2, 3);

    App\Flight::destroy([1, 2, 3]);

    App\Flight::destroy(collect([1, 2, 3]));
    ```
    **Deleting Models By Query**  
    您還可以在一組模型上運行delete語句。  
    在此示例中，我們將刪除所有標記為非活動的航班。  
    與批量更新一樣，批量刪除不會為已刪除的模型觸發任何模型事件  
    ```php
    $deletedRows = App\Flight::where('active', 0)->delete();
    ```  
    *注意！！！*   
    通過Eloquent執行批量刪除語句時，不會為已刪除的模型觸發deleting and  deleted的模型事件。  
    這是因為在執行delete語句時從不實際檢索模型。  
  - Soft Deleting  
    除了實際從數據庫中刪除記錄外，Eloquent還可以“軟刪除”模型。  
    模型被軟刪除後，實際上不會從數據庫中刪除它們。
    而是在模型上設置deleted_at屬性並將其插入到數據庫中。  
    如果模型具有非null的deleted_at值，則模型已被軟刪除。  
    要為模型啟用軟刪除，請在模型上使用`Illuminate\Database\Eloquent\SoftDeletes`trait(特徵)：  
    ```php
    <?php
    namespace App;
    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Database\Eloquent\SoftDeletes;
    class Flight extends Model
    {
        use SoftDe letes;
    }
    ```
    提醒！！！`SoftDeletes`特徵會自動將`deleted_at`屬性強制轉換為`DateTime` / `Carbon`實例。  

    您還應該將`deleted_at`列添加到數據庫表中。  
    Laravel [schema builder]()包含一個用於創建此列的幫助器方法：
    ```php
    Schema::table('flights', function (Blueprint $table) {
    $table->softDeletes();
    });
    ```
    現在，當您delete在模型上調用方法時，該deleted_at列將設置為當前日期和時間。並且，在查詢使用軟刪除的模型時，軟刪除的模型將自動從所有查詢結果中排除。  
    要確定某個模型實例是否已被軟刪除，請使用以下trashed方法：  
    ```php
    if ($flight->trashed()) {
    //
    }
    ```
  - Querying Soft Deleted Models    
    - Including Soft Deleted Models
      如上所述，軟刪除的模型將自動從查詢結果中排除。  
      但是，您可以使用`withTrashed`查詢方法強制軟刪除的模型出現在 結果集 中：  
      ```php
      $flights = App\Flight::withTrashed()
                ->where('account_id', 1)
                ->get();
      ```
      該withTrashed方法也可用於`relationship`查詢：  
      ```php
      $flight->history()->withTrashed()->get();
      ```
    - Retrieving Only Soft Deleted Models
      該`onlyTrashed`方法僅檢索軟刪除的模型：  
      ```php
      $flights = App\Flight::onlyTrashed()
                ->where('airline_id', 1)
                ->get();
      ```
    - Restoring Soft Deleted Models  
      有時您可能希望“取消刪除”軟刪除的模型。要將軟刪除的模型恢復為活動狀態，請`restore`在模型實例上使用該方法：  
      ```php
      $flight->restore();
      ```
      您還可以restore在查詢中使用該方法來快速恢復多個模型。同樣，與其他“大規模”操作一樣，這不會為已恢復的模型觸發任何模型事件：  
      ```php
      App\Flight::withTrashed()
        ->where('airline_id', 1)
        ->restore();
      ```
      與`withTrashed`方法一樣，該`restore`方法也可用於關係：  
      ```php
      $flight->history()->restore();
      ```
    - Permanently Deleting Models
      有時您可能需要從數據庫中真正刪除模型。要從數據庫中永久刪除軟刪除的模型，請使用以下forceDelete方法：  
      ```php
      // Force deleting a single model instance...
      $flight->forceDelete();

      // Force deleting all related models...
      $flight->history()->forceDelete();
      ```
- Query Scopes  
  - Global Scopes  
    全局範圍允許您為給定模型的所有查詢添加約束。Laravel自己的軟刪除功能利用全局範圍僅從數據庫中提取“未刪除”模型。編寫自己的全局範圍可以提供一種方便，簡單的方法來確保給定模型的每個查詢都接收到某些約束。  
    - Writing Global Scopes
      編寫全局範圍很簡單。定義實現接口的類。此接口要求您實現一種方法：`apply`  
      `apply`方法可以根據需要添加`where`查詢的約束：  
      ```php
      <?php
      namespace App\Scopes;
      use Illuminate\Database\Eloquent\Scope;
      use Illuminate\Database\Eloquent\Model;
      use Illuminate\Database\Eloquent\Builder;

      class AgeScope implements Scope
      {
          /**
          * Apply the scope to a given Eloquent query builder.
          *
          * @param  \Illuminate\Database\Eloquent\Builder  $builder
          * @param  \Illuminate\Database\Eloquent\Model  $model
          * @return void
          */
          public function apply(Builder $builder, Model $model)
          {
              $builder->where('age', '>', 200);
          }
      }
      ```
      提醒！！！  
      如果您的全局範圍是在查詢的select子句中添加列，則應使用該`addSelect`方法而不是`select`。這將防止無意中替換查詢的現有select子句。  
    - Applying Global Scopes  
      要將全局範圍分配給模型，您應該覆蓋給定模型的`boot`方法並使用以下`addGlobalScope`方法：  
      ```php
      <?php
      namespace App;
      use App\Scopes\AgeScope;
      use Illuminate\Database\Eloquent\Model;
      class User extends Model
      {
          /**
          * The "booting" method of the model.
          *
          * @return void
          */
          protected static function boot()
          {
              parent::boot();
              static::addGlobalScope(new AgeScope);
          }
      }
      ```
      添加範圍後，查詢將生成以下SQL：`User::all()`  
      ```sql
      select * from `users` where `age` > 200
      ```
    - Anonymous Global Scopes
      Eloquent還允許您使用Closures定義全局範圍，這對於不保證單獨類的簡單範圍特別有用：  
      ```php
      <?php
      namespace App;
      use Illuminate\Database\Eloquent\Model;
      use Illuminate\Database\Eloquent\Builder;
      class User extends Model
      {
          /**
          * The "booting" method of the model.
          *
          * @return void
          */
          protected static function boot()
          {
              parent::boot();
              static::addGlobalScope('age', function (Builder $builder) {
                  $builder->where('age', '>', 200);
              });
          }
      }
      ```
    - Removing Global Scopes
      如果要刪除給定查詢的全局範圍，可以使用該`withoutGlobalScope`方法。該方法接受全局範圍的類名作為其唯一參數：  
      ```php
      User::withoutGlobalScope(AgeScope::class)->get();
      ```
      或者，如果使用Closure定義了全局範圍：  
      ```php
      User::withoutGlobalScope('age')->get();  
      ```
      如果您想刪除幾個甚至所有全局範圍，可以使用以下`withoutGlobalScopes`方法：  
      ```php
      // Remove all of the global scopes...
      User::withoutGlobalScopes()->get();

      // Remove some of the global scopes...
      User::withoutGlobalScopes([
          FirstScope::class, SecondScope::class
      ])->get();
      ```
  - Local Scopes  
    本地範圍允許您定義可在整個應用程序中輕鬆重用的常見約束集。例如，您可能需要經常檢索所有被視為“熱門”的用戶。要定義範圍，請使用Eloquent模型方法作為前綴`scope。  
  
    範圍應始終返回查詢構建器實例：  
    ```php
    <?php
    namespace App;
    use Illuminate\Database\Eloquent\Model;
    class User extends Model
    {
        /**
        * Scope a query to only include popular users.
        *
        * @param  \Illuminate\Database\Eloquent\Builder  $query
        * @return \Illuminate\Database\Eloquent\Builder
        */
        public function scopePopular($query)
        {
            return $query->where('votes', '>', 100);
        }

        /**
        * Scope a query to only include active users.
        *
        * @param  \Illuminate\Database\Eloquent\Builder  $query
        * @return \Illuminate\Database\Eloquent\Builder
        */
        public function scopeActive($query)
        {
            return $query->where('active', 1);
        }
    }
    ```
    - Utilizing A Local Scope
      定義範圍後，可以在查詢模型時調用範圍方法。但是`scope`調用方法時不應包含前綴。您甚至可以將調用鏈接到各種範圍，例如：  
      ```php
      $users = App\User::popular()->active()->orderBy('created_at')->get();
      ```
      通過`or`查詢運算符組合多個Eloquent模型範圍可能需要使用Closure回調：  
      ```php
      $users = App\User::popular()->orWhere(function (Builder $query) {
          $query->active();
      })->get();
      ```
      但是，由於這可能很麻煩，Laravel提供了一種“更高階” `orWhere`方法，允許您在不使用閉包的情況下流暢地將這些範圍鏈接在一起：  
      ```php
      $users = App\User::popular()->orWhere->active()->get();  
      ```
    - Dynamic Scopes
      有時您可能希望定義接受參數的範圍。要開始使用，只需將其他參數添加到範圍即可。範圍參數應在`$query`參數後定義：
      ```php
      <?php
      namespace App;
      use Illuminate\Database\Eloquent\Model;
      class User extends Model
      {
          /**
          * Scope a query to only include users of a given type.
          *
          * @param  \Illuminate\Database\Eloquent\Builder  $query
          * @param  mixed  $type
          * @return \Illuminate\Database\Eloquent\Builder
          */
          public function scopeOfType($query, $type)
          {
              return $query->where('type', $type);
          }
      }
      ```
      現在，您可以在調用範圍時傳遞參數：  
      ```php
      $users = App\User::ofType('admin')->get();
      ```
- Comparing Models  
  有時您可能需要確定兩個模型是否“相同”。該`is`方法可用於快速驗證兩個模型具有相同的主鍵，表和數據庫連接：  
  ```php
  if ($post->is($anotherPost)) {
      //
  }
  ```
- Events  
  Eloquent models發射的幾個事件，讓你掛接到以下幾點在模型的生命週期：`retrieved`，`creating`，`created`，`updating`，`updated`，`saving`，`saved`，`deleting`，`deleted`，`restoring`，`restored`。  
  事件允許您在每次在數據庫中保存或更新特定模型類時輕鬆執行代碼。每個事件通過其構造函數接收模型的實例。  
  `retrieved`從數據庫中檢索現有模型時將觸發該事件。當第一次保存新模型時，將觸發`creating`和`created`事件。如果數據庫中已存在模型並且`save`調用該方法，則會觸發`updating`/  `updatedevents`。但是，在這兩種情況下，`saving`/ `saved`events都會觸發。  
  注意！！！  通過Eloquent發出批量更新時，不會為更新的模型觸發`saved`和`updated`模型事件。這是因為在發布批量更新時，實際上從未檢索過模型。  
  首先，`$dispatchesEvents`在您的Eloquent模型上定義一個屬性，該屬性將Eloquent模型生命週期的各個點映射到您自己的event classes：  
  ```php
  <?php

  namespace App;

  use App\Events\UserSaved;
  use App\Events\UserDeleted;
  use Illuminate\Notifications\Notifiable;
  use Illuminate\Foundation\Auth\User as Authenticatable;

  class User extends Authenticatable
  {
      use Notifiable;

      /**
      * The event map for the model.
      *
      * @var array
      */
      protected $dispatchesEvents = [
          'saved' => UserSaved::class,
          'deleted' => UserDeleted::class,
      ];
  }
  ```
  定義和映射您的Eloquent事件後，您可以使用事件偵聽器來處理事件。  
  - Observers  
    - Defining Observers  
      如果您正在偵聽給定模型上的許多事件，則可以使用觀察者將所有偵聽器分組到單個類中。  
      觀察者類具有反映您希望收聽的Eloquent事件的方法名稱。  
      這些方法中的每一個都接收模型作為它們的唯一參數。  
      在Artisan的命令是創建一個新的觀察員類最簡單的方法：`make:observer`  
      `php artisan make:observer UserObserver --model=User`  
      此命令將新觀察者放在您的目錄中。如果此目錄不存在，Artisan將為您創建該目錄。你的新觀察者將如下所示：`App/Observers`  
      ```php
      <?php
      namespace App\Observers;
      use App\User;
      class UserObserver
      {
          /**
          * Handle the User "created" event.
          *
          * @param  \App\User  $user
          * @return void
          */
          public function created(User $user)
          {
              //
          }

          /**
          * Handle the User "updated" event.
          *
          * @param  \App\User  $user
          * @return void
          */
          public function updated(User $user)
          {
              //
          }

          /**
          * Handle the User "deleted" event.
          *
          * @param  \App\User  $user
          * @return void
          */
          public function deleted(User $user)
          {
              //
          }
      }
      ```
      要註冊觀察者，請`observe`在要觀察的模型上使用該方法。  
      您可以在`boot`您的某個服務提供商的方法中註冊觀察者。 
      在這個例子中，我們將註冊觀察者AppServiceProvider：  
      ```php
      <?php

      namespace App\Providers;

      use App\User;
      use App\Observers\UserObserver;
      use Illuminate\Support\ServiceProvider;

      class AppServiceProvider extends ServiceProvider
      {
          /**
          * Register any application services.
          *
          * @return void
          */
          public function register()
          {
              //
          }

          /**
          * Bootstrap any application services.
          *
          * @return void
          */
          public function boot()
          {
              User::observe(UserObserver::class);
          }
      }
      ```
## Relationships
- Introduction  
  數據庫表通常彼此相關。例如，博客文章可能有很多評論，或者訂單可能與放置它的用戶有關。  
  Eloquent使管理和處理這些關係變得容易，並支持幾種不同類型的關係：  
- Defining Relationships  
  Eloquent關係被定義為您的Eloquent模型class的方法。  
  因為，與Eloquent模型本身一樣，關係也可以作為強大的查詢構建器，將關係定義為方法提供了強大的方法鏈接和查詢功能。  
  例如，我們可能會對此posts關係鏈接其他約束：  
  ```php
  $user->posts()->where('active', 1)->get();
  ```
  但是，在深入探討使用關係之前，讓我們學習如何定義每種類型。  
  - One To One  
    一對一的關係是一種非常基本的關係。  
    例如，`User`模型可能與一個模型相關聯`Phone`。  
    為了定義這種關係，我們`phone`在`User`模型上放置一個方法。  
    該`phone`方法應調用該`hasOne`方法並返回其結果：  
    ```php
    <?php
    namespace App;
    use Illuminate\Database\Eloquent\Model;
    class User extends Model
    {
        /**
        * Get the phone record associated with the user.
        */
        public function phone()
        {
            return $this->hasOne('App\Phone');
        }
    }
    ```
    傳遞給該hasOne方法的第一個參數是相關模型的名稱。  
    一旦定義了關係，我們就可以使用Eloquent的動態屬性檢索相關記錄。  
    動態屬性允許您訪問關係方法，就好像它們是在模型上定義的屬性一樣：  
    ```php
    $phone = User::find(1)->phone;
    ```
    Eloquent根據模型名稱確定關係的foreign key。  
    在這種情況下，`Phone`模型自動被假定為具有`user_id`外鍵。  
    如果要覆蓋此約定，可以將第二個參數傳遞給該`hasOne`方法：  
    ```php
    return $this->hasOne('App\Phone', 'foreign_key');
    ```
    此外，Eloquent假定外鍵應具有與父級`id`（或自定義`$primaryKey`）列匹配的值。  
    換句話說，Eloquent將在電話記錄的`user_id`列中查找用戶`id`列的值。  
    如果您希望關係使用`id`以外的值，則可以將第三個參數傳遞給指定自定義鍵的`hasOne`方法：  
    ```php
    return $this->hasOne('App\Phone', 'foreign_key', 'local_key');  
    ```
    - Defining The Inverse Of The Relationship
      因此，我們可以從`User`訪問`Phone`模型。  
      現在，讓我們在`Phone`模型上定義一個關係，讓我們訪問擁有手機的`User`。  
      我們可以使用`belongsTo`方法定義`hasOne`關係的倒數：  
      ```php
      <?php
      namespace App;
      use Illuminate\Database\Eloquent\Model;
      class Phone extends Model
      {
          /**
          * Get the user that owns the phone.
          */
          public function user()
          {
              return $this->belongsTo('App\User');
          }
      }
      ```
      在上面的範例中，`Eloquent`將嘗試`user_id`將`Phone`模型中`id`的`User`模型與模型匹配。  
      Eloquent通過檢查關係方法的名稱並使用方法名稱後綴來確定默認外鍵名稱_id。  
      但是，如果`Phone`模型上的外鍵不是`user_id`，則可以將自定義鍵名作為第二個參數傳遞給`belongsTo`方法：  
      ```php
      /**
       * Get the user that owns the phone.
      */
      public function user()
      {
          return $this->belongsTo('App\User', 'foreign_key');
      }
      ```
      如果您的父模型不用id作其主鍵，或者您希望將子模型連接到其他列，則可以將第三個參數傳遞給belongsTo指定父表的自定義鍵的方法：  
      ```php
      /**
       * Get the user that owns the phone.
      */
      public function user()
      {
          return $this->belongsTo('App\User', 'foreign_key', 'other_key');
      }
      ```
  - One To Many  
    一對多關係用於定義單個模型擁有任何數量的其他模型的關係。  
    例如，博客文章可能有無數的評論。  
    與所有其他Eloquent關係一樣，通過在Eloquent模型上放置一個函數來定義一對多關係：  
    ```php
    <?php
    namespace App;
    use Illuminate\Database\Eloquent\Model;
    class Post extends Model
    {
        /**
        * Get the comments for the blog post.
        */
        public function comments()
        {
            return $this->hasMany('App\Comment');
        }
    }
    ```
    請記住，Eloquent會自動確定`Comment`模型上正確的外鍵列。  
    按照慣例，Eloquent將採用擁有模型的“蛇型”名稱並將其後綴`_id`。  
    因此，對於此示例，Eloquent將假設`Comment`模型上的外鍵是`post_id`。  

    一旦定義了關係，我們就可以通過訪問該comments屬性來訪問註釋集合。  
    請記住，由於Eloquent提供了“動態屬性”，我們可以像訪問模型中的屬性一樣訪問關係方法：  
    ```php
    $comments = App\Post::find(1)->comments;

    foreach ($comments as $comment) {
        //
    }
    ```
    由於所有關係也充當查詢構建器，因此可以通過調用comments方法並繼續將條件鏈接到查詢來添加對檢索到的註釋的進一步約束：  
    ```php
    $comment = App\Post::find(1)->comments()->where('title', 'foo')->first();
    ```
    與`hasOne`方法一樣，您也可以通過向`hasMany`方法傳遞其他參數來覆蓋外鍵和本地鍵：  
    ```php
    return $this->hasMany('App\Comment', 'foreign_key');

    return $this->hasMany('App\Comment', 'foreign_key', 'local_key');
    ```
  - One To Many (Inverse)  
    現在我們可以訪問所有帖子的評論，讓我們定義一個關係，允許評論訪問其父帖子。  
    要定義`hasMany`關係的反轉，請在調用`belongsTo`方法的子模型上定義關係函數：  
    ```php
    <?php
    namespace App;
    use Illuminate\Database\Eloquent\Model;
    class Comment extends Model
    {
        /**
        * Get the post that owns the comment.
        */
        public function post()
        {
            return $this->belongsTo('App\Post');
        }
    }
    ```
    一旦定義了關係，我們就可以通過訪問帖子“動態屬性”來檢索評論的Post模型：  
    ```php
    $comment = App\Comment::find(1);
    echo $comment->post->title;
    ```
    在上面的示例中，Eloquent將嘗試post_id將Comment模型中id的Post模型與模型匹配。  
    Eloquent通過檢查關係方法的名稱並使用`_`後跟主鍵列名稱後綴方法名稱來確定默認外鍵名稱。  
    但是，如果`Comment`模型上的外鍵不是`post_id`，則可以將自定義鍵名作為第二個參數傳遞給`belongsTo`方法：  
    ```php
    /**
     * Get the post that owns the comment.
    */
    public function post()
    {
        return $this->belongsTo('App\Post', 'foreign_key');
    }
    ```
    如果您的父模型不用`id`作其主鍵，或者您希望將子模型連接到其他列，則可以將第三個參數傳遞給`belongsTo`指定父表的自定義鍵的方法：
  - Many To Many  
    許多一對多的關係稍微比更複雜`hasOne`和`hasMany`關係。  
    這種關係的一個示例是具有許多角色的用戶，其中角色也由其他用戶共享。  
    例如，許多用戶可能具有“管理員”的角色。要定義這種關係，需要三個數據庫表：`users`，`roles`，和`role_user`。  
    該`role_user`表源自相關模型名稱的字母順序，並包含`user_id`和`role_id`列。  

    通過編寫返回方法結果的`belongsToMany方法來定義多對多關係。  
    讓roles我們在User模型上定義方法：  
    ```php
    <?php
    namespace App;
    use Illuminate\Database\Eloquent\Model;
    class User extends Model
    {
        /**
        * The roles that belong to the user.
        */
        public function roles()
        {
            return $this->belongsToMany('App\Role');
        }
    }
    ```
    定義關係後，您可以使用`roles`動態屬性訪問用戶的角色：  
    ```php
    $user = App\User::find(1);
    foreach ($user->roles as $role) {
        //
    }
    ```
    與所有其他關係類型一樣，您可以調用該`roles`方法繼續將查詢約束鏈接到關係：  
    ```php
    $roles = App\User::find(1)->roles()->orderBy('name')->get();  
    ```
    如前所述，為確定關係連接表的表名，Eloquent將按字母順序連接兩個相關的模型名稱。  
    但是，您可以自由地覆蓋此約定。您可以通過向`belongsToMany`方法傳遞第二個參數來執行此操作：  
    ```php
    return $this->belongsToMany('App\Role', 'role_user');
    ```
    除了自定義連接表的名稱之外，您還可以通過將其他參數傳遞給`belongsToMany`方法來自定義表上鍵的列名。  
    第三個參數是您定義關係的模型的外鍵名稱，而第四個參數是您要加入的模型的外鍵名稱：  
    ```php
    return $this->belongsToMany('App\Role', 'role_user', 'user_id', 'role_id');
    ```
  - Defining Custom Intermediate Table Models  
    要定義多對多關係的反轉，請`belongsToMany`在相關模型上再次調用。  
    要繼續我們的用戶角色示例，讓我們`users`在`Role`模型上定義方法：  
    ```php
    <?php
    namespace App;
    use Illuminate\Database\Eloquent\Model;
    class Role extends Model
    {
        /**
        * The users that belong to the role.
        */
        public function users()
        {
            return $this->belongsToMany('App\User');
        }
    }
    ```
    如您所見，`User`除了引用模型之外，關係的定義與其對應關係完全相同。  
    由於我們正在重用`belongsToMany`方法，因此在定義多對多關係的反轉時，所有常用的表和鍵自定義選項都可用。  
    - Retrieving Intermediate Table Columns 檢索 中間 表 欄位
      正如您已經了解的那樣，處理多對多關係需要存在中間表。Eloquent提供了一些與此表交互的非常有用的方法。  
      例如，假設我們的對`User`像有許多`Role`與之相關的對象。  
      訪問此關係後，我們可以使用`pivot`模型上的屬性訪問中間表：  
      ```php
      $user = App\User::find(1);
      foreach ($user->roles as $role) {
          echo $role->pivot->created_at;
      }
      ```
      請注意，`Role`我們檢索的每個模型都會自動分配一個`pivot`屬性。  
      此屬性包含表示中間表的模型，可以像任何其他Eloquent模型一樣使用。  
        
      默認情況下，對像上僅存在模型鍵`pivot`。  
      如果數據透視表包含額外屬性，則必須在定義關係時指定它們：  
      ```php
      return $this->belongsToMany('App\Role')->withPivot('column1', 'column2');  
      ```
      如果您希望數據透視表具有自動維護`created_at`和`updated_at`時間戳，請使用`withTimestamps`關係定義上的方法：  
      ```php
      return $this->belongsToMany('App\Role')->withTimestamps();
      ```
    - Customizing The pivot Attribute Name
      如前所述，可以使用該pivot屬性在模型上訪問中間表的屬性。  
      但是，您可以自由定制此屬性的名稱，以更好地反映其在應用程序中的用途。  
        
      例如，如果您的應用程序包含可能訂閱播客的用戶，則您可能在用戶和播客之間存在多對多關係。  
      如果是這種情況，您可能希望將中間表訪問者重命名為`subscription`而不是`pivot`。  
      這可以`as`在定義關係時使用該方法完成：
      ```php
      return $this->belongsToMany('App\Podcast')
                  ->as('subscription')
                  ->withTimestamps();
      ```
      完成此操作後，您可以使用自定義名稱訪問中間表數據：  
      ```php
      $users = User::with('podcasts')->get();
      foreach ($users->flatMap->podcasts as $podcast) {
          echo $podcast->subscription->created_at;
      }
      ```
    - Filtering Relationships Via Intermediate Table Columns  
      您還可以在定義關係時使用`wherePivot`和`wherePivotIn`方法過濾`belongsToMany`返回的結果：  
      ```php
      return $this->belongsToMany('App\Role')->wherePivot('approved', 1);
      return $this->belongsToMany('App\Role')->wherePivotIn('priority', [1, 2]);
      ```
    - Defining Custom Intermediate Table Models  
      如果要定義自定義模型來表示關係的中間表，可以`using`在定義關係時調用該方法。  
      自定義多對多數據透視模型應擴展`Illuminate\Database\Eloquent\Relations\Pivot`類，而自定義多態多對多數據透視模型應擴展`Illuminate\Database\Eloquent\Relations\MorphPivot`類。   
      例如，我們可以定義一個使用自定義`RoleUser pivot`模型的`Role`：  
      ```php
      <?php
      namespace App;
      use Illuminate\Database\Eloquent\Model;
      class Role extends Model
      {
          /**
          * The users that belong to the role.
          */
          public function users()
          {
              return $this->belongsToMany('App\User')->using('App\RoleUser');
          }
      }
      ```
      在定義`RoleUser`模型時，我們將擴展`Pivot`類：  
      ```php
      <?php

      namespace App;

      use Illuminate\Database\Eloquent\Relations\Pivot;

      class RoleUser extends Pivot
      {
          //
      }
      ```
      您可以組合`using`併`withPivot`從中間表中檢索列。  
      或者，您可以通過將列名稱傳遞給`withPivot`方法從`RoleUser`數據透視表中檢索`created_by`和`updated_by`列：  
      ```php
      <?php
      namespace App;
      use Illuminate\Database\Eloquent\Model;
      class Role extends Model
      {
          /**
          * The users that belong to the role.
          */
          public function users()
          {
              return $this->belongsToMany('App\User')
                              ->using('App\RoleUser')
                              ->withPivot([
                                  'created_by',
                                  'updated_by'
                              ]);
          }
      }
      ```
      注意！！！  
      Pivot模型可能不使用該SoftDeletes特徵。如果您需要軟刪除數據透視記錄，請考慮將您的數據透視模型轉換為實際的Eloquent模型。 
    - Custom Pivot Models And Incrementing IDs
      如果已定義使用自定義透視模型的多對多關係，並且該透視模型具有自動遞增主鍵，則應確保自定義透視模型類定義`incrementing`設置為的屬性true。  
      ```php
      /**
      * Indicates if the IDs are auto-incrementing.
      *
      * @var bool
      */
      public $incrementing = true;
      ```
  - Has One Through  
    供應商 用戶 用戶歷史  
  - Has Many Through  
    透過使用者資料查到國家  
    ```
    countries
        id - integer
        name - string

    users
        id - integer
        country_id - integer
        name - string

    posts
        id - integer
        user_id - integer
        title - string
    ```
- Polymorphic Relationships 多態  
  - One To One(Polymorphic)  
    ```
    posts
        id - integer
        name - string

    users
        id - integer
        name - string

    images
        id - integer
        url - string
        imageable_id - integer
        imageable_type - string
    ```
    依照需求返回不同形式的圖片  
  - One To Many(Polymorphic)  
    ```
    posts
        id - integer
        title - string
        body - text

    videos
        id - integer
        title - string
        url - string

    comments
        id - integer
        body - text
        commentable_id - integer
        commentable_type - string
    ```
    返回一個post或一個video  
  - Many To Many(Polymorphic)  
    ```
    posts
        id - integer
        name - string

    videos
        id - integer
        name - string

    tags
        id - integer
        name - string

    taggables
        tag_id - integer
        taggable_id - integer
        taggable_type - string
    ```
    用Tag方法，找出posts或videos
  - Custom Polymorphic Types  
    注意！！！
    向現有應用程序添加“morph ma變形映射”時，`*_type`數據庫中仍包含完全限定類的每個可變形列值都需要轉換為其“映射”名稱。  
- Querying Relations  
    - Chaining orWhere Clauses After Relationships
      `orWhere`要小心使用  
      最好是用`跨號parentheses`做分類清楚  
  - Relationship Methods Vs. Dynamic Properties  
    動態屬性是“延遲加載”  
    使用`eager loading`來減少sql執行  
  - Querying Relationship Existence  
    嵌套has語句也可以使用“點”表示法構造  
    ```php
    // Retrieve posts that have at least one comment with votes...
    $posts = App\Post::has('comments.votes')->get();
    ```
  - Querying Relationship Absence  
    `doesntHave` and `orDoesntHave` methods:  
    更深入用法`whereDoesntHave` and `orWhereDoesntHave`  
    您可以使用“點”表示法來執行針對嵌套關係的查詢。  
    例如，以下查詢將檢索所有包含未被禁止的作者的評論的帖子：  
    ```php
    use Illuminate\Database\Eloquent\Builder;
    $posts = App\Post::whereDoesntHave('comments.author', function (Builder $query) {
        $query->where('banned', 1);
    })->get();
    ```
  - Querying Polymorphic Relationships  
    // Retrieve comments associated to posts or videos with a title like foo%..  
    // Retrieve comments associated to posts with a title not like foo%...  
    您可以使用該`$type`參數根據相關模型添加不同的約束：  
    您可以提供`*`通配符，讓Laravel從數據庫中檢索所有可能的多態類型，而不是傳遞可能的多態模型數組。  
  - Counting Related Models  
    如果要計算關係中的結果數而不實際加載它們，可以使用withCount方法，該方法會在生成的模型上放置{relation} _count列。  
    您也可以為關係計數結果添加別名，允許對同一關係進行多次計數：  
    如果要withCount與select語句組合，請確保withCount在select方法後調用：  
- Eager Loading  
  透過with限制來降低查詢次數  
  可加入多個with  
  Eloquent允許您指定要檢索的關係的哪些列：
  ```php
  $books = App\Book::with('author:id,name')->get();
  ```

  注意！！！
  用此功能時，應始終`id`在要檢索的列列表中包含列和任何相關的外鍵列。  

  如果要從$with單個查詢的屬性中刪除項目，可以使用以下without方法：  
  - Constraining Eager Loads  
    有時您可能希望加載關係，但也為熱切加載查詢指定其他查詢條件。這是一個例子：  
    注意！！！  
    在limit和take約束渴望負載時，查詢生成器方法也可以不使用。  
  - Lazy Eager Loading  
    有時您可能需要在已經檢索父模型之後急切地加載關係。例如，如果您需要動態決定是否加載相關模型，這可能很有用：  
    如果需要在預先加載的查詢上設置其他查詢約束，則可以傳遞一個由您希望加載的關係鍵入的數組。數組值應該是Closure接收查詢實例的實例：  
    - Nested Lazy Eager Loading & `morphTo`
      如果您希望加載morphTo關係，以及該關係可能返回的各種實體的嵌套關係，您可以使用該loadMorph方法。  
      此方法接受morphTo關係的名稱作為其第一個參數，並將模型/關係對的數組作為其第二個參數。為了幫助說明這種方法，讓我們考慮以下模型：  
- Inserting & Updating Related Models  
  - The save Method  
    例如，您可能需要為Post模型插入新的Comment。  
    您可以直接從關係的save方法插入Comment，而不是在Comment上手動設置post_id屬性：  
    ```php
    $comment = new App\Comment(['message' => 'A new comment.']);

    $post = App\Post::find(1);

    $post->comments()->save($comment);
    ```
    請注意，我們沒有將comments關係作為動態屬性訪問。相反，我們調用該comments方法來獲取關係的實例。  
    該save方法將自動將適當的post_id值添加到新Comment模型中。  
    如果需要保存多個相關模型，可以使用以下saveMany方法：  
    ```php
    $post = App\Post::find(1);

    $post->comments()->saveMany([
        new App\Comment(['message' => 'A new comment.']),
        new App\Comment(['message' => 'Another comment.']),
    ]);
    ```
    - Recursively Saving Models & Relationships
      如果您想要save模型及其所有相關關係，可以使用以下push方法：  
  - The create Method  
    除了`save`和`saveMany`方法之外，您還可以使用`create`方法，該方法接受屬性數組，創建模型並將其插入數據庫。  
    同樣，`save`和`create`之間的區別在於`save`接受一個完整的Eloquent模型實例，而`create`接受一個普通的PHP數組：  
    您可以使用該createMany方法創建多個相關模型：  
    ```php
    $post = App\Post::find(1);

    $post->comments()->createMany([
        [
            'message' => 'A new comment.',
        ],
        [
            'message' => 'Another new comment.',
        ],
    ]);
    ```
    您還可以使用`findOrNew`，`firstOrNew`，`firstOrCreate`和`updateOrCreate`方法來創建和更新關係模型。
  - Belongs To Relationships  
    更新belongsTo關係時，您可以使用該associate方法。此方法將在子模型上設置外鍵：  
    刪除belongsTo關係時，您可以使用該dissociate方法。此方法將關係的外鍵設置為null：  
    - Default Models
      要使用屬性填充默認模型，您可以將數組或Closure傳遞給withDefault方法：  
  - Many To Many Relationships  
    - Attaching / Detaching
      假設用戶可以擁有多個角色，而角色可以擁有許多用戶。要通過在連接模型的中間表中插入記錄來將角色附加到用戶，請使用以下attach方法：  
      ```PHP
      $user = App\User::find(1);

      $user->roles()->attach($roleId);
      ```
      將關係附加到模型時，您還可以傳遞要插入到中間表中的其他數據數組：  
      ```PHP
      $user->roles()->attach($roleId, ['expires' => $expires]);
      ```
      有時可能需要從用戶中刪除角色。要刪除多對多關係記錄，請使用該detach方法。  
      該detach方法將從中間表中刪除相應的記錄; 但是，兩種模型都將保留在數據庫中：  
      ```PHP
      // Detach a single role from the user...
      $user->roles()->detach($roleId);

      // Detach all roles from the user...
      $user->roles()->detach();
      ```
      為了方便起見，attach並且detach還接受ID的數組作為輸入：  
      ```PHP
      $user = App\User::find(1);

      $user->roles()->detach([1, 2, 3]);

      $user->roles()->attach([
          1 => ['expires' => $expires],
          2 => ['expires' => $expires]
      ]);
      ```
    - Syncing Associations  
      ```PHP
      $user->roles()->sync([1, 2, 3]);
      $user->roles()->sync([1 => ['expires' => true], 2, 3]);   //您還可以使用ID傳遞其他中間表值：
      $user->roles()->syncWithoutDetaching([1, 2, 3]);    //如果您不想分離現有ID，可以使用syncWithoutDetaching方法：
      ```
    - Toggling Associations  切換
      附加變分離 分離變附加
    - Saving Additional Data On A Pivot Table  
      使用多對多關係時，該save方法接受一組附加中間表屬性作為其第二個參數：  
      ```php
      App\User::find(1)->roles()->save($role, ['expires' => $expires]);
      ```
    - Updating A Record On A Pivot Table  
      如果需要更新數據透視表中的現有行，可以使用updateExistingPivot方法。  
      此方法接受數據透視記錄外鍵和要更新的屬性數組：  
      ```php
      $user = App\User::find(1);

      $user->roles()->updateExistingPivot($roleId, $attributes);
      ```
- Touching Parent Timestamps  
  當模型屬於或者屬於另一個模型時，例如屬於Post的Comment，有時在更新子模型時更新父級的時間戳是有幫助的。  
  例如，更新註釋模型時，您可能希望自動“觸摸”擁有帖子的updated_at時間戳。  
  只需添加一個touches屬性，其中包含子模型的關係名稱：  
  ```php
  <?php

  namespace App;

  use Illuminate\Database\Eloquent\Model;

  class Comment extends Model
  {
      /**
      * All of the relationships to be touched.
      *
      * @var array
      */
      protected $touches = ['post'];

      /**
      * Get the post that the comment belongs to.
      */
      public function post()
      {
          return $this->belongsTo('App\Post');
      }
  }
  ```
  現在，當您更新a時Comment，擁有Post它的updated_at列也會更新，這樣可以更方便地知道何時使Post模型的緩存無效：  
  ```php
  $comment = App\Comment::find(1);
  $comment->text = 'Edit to this comment!';
  $comment->save();
  ```
# Collections
- Introduction  
  Eloquent返回的所有多結果集都是`Illuminate\Database\Eloquent\Collection`對象的實例，包括通過get方法檢索的結果或通過關係訪問的結果。  
  loquent集合對象擴展了Laravel基本集合，因此它自然地繼承了許多用於流利地使用Eloquent模型的底層數組的方法。  
  所有集合也充當迭代器，允許您循環遍歷它們，就像它們是簡單的PHP array一樣：
  ```php
  $users = App\User::where('active', 1)->get();
  foreach ($users as $user) {
      echo $user->name;
  }
  ```
  但是，集合比數組更強大，並且可以使用直觀的界面顯示各種可以鏈接的map / reduce操作。  
  例如，讓我們刪除所有非活動模型並為每個剩餘用戶收集名字：  
  ```php
  $users = App\User::all();

  $names = $users->reject(function ($user) {
      return $user->active === false;
  })
  ->map(function ($user) {
      return $user->name;
  });
  ```

  注意！！！
  雖然大多數Eloquent集合方法返回Eloquent集合的新實例，但pluck，keys，zip，collapse，flatten和flip方法返回一個基本集合實例。  
  同樣，如果map操作返回一個不包含任何Eloquent模型的集合，它將自動轉換為基本集合。  
- Available Methods  
  大多數方法返回`Illuminate\Database\Eloquent\Collection`實例;  
  但是，某些方法返回基礎`Illuminate\Support\Collection`實例。  


  - contains($key, $operator = null, $value = null)
  contains方法可用於確定集合是否包含給定的模型實例。此方法接受主鍵或模型實例：  
  ```php
  $users->contains(1);
  $users->contains(User::find(1));
  ```

  - diff($items)
    該diff方法返回給定集合中不存在的所有模型：
    ```php
    use App\User;

    $users = $users->diff(User::whereIn('id', [1, 2, 3])->get());
    ```
  - except($keys)
    該except方法返回所有沒有給定主鍵的模型：
    ```php
    $users = $users->except([1, 2, 3]);
    ```
  - find($key)
    該find方法查找具有給定主鍵的模型。  
    如果$key是模型實例，find將嘗試返回與主鍵匹配的模型。
    如果$ key是一個鍵數組，find將使用whereIn（）返回與$ keys匹配的所有模型：  
    ```php
    $users = User::all();

    $user = $users->find(1);
    ```
  - fresh($with = [])
    該fresh方法從數據庫中檢索集合中每個模型的新實例。此外，任何指定的關係都將被急切加載：
    ```php
    $users = $users->fresh();

    $users = $users->fresh('comments');
    ```
  - intersect($items)
    該intersect方法返回給定集合中也存在的所有模型：
    ```php
    use App\User;

    $users = $users->intersect(User::whereIn('id', [1, 2, 3])->get());
    ```
  - load($relations)
    該load方法急切加載集合中所有模型的給定關係：
    ```php
    $users->load('comments', 'posts');

    $users->load('comments.author');
    ```
  - loadMissing($relations)  
    該loadMissing方法渴望加載如果關係尚未加載的集合中的所有模型給出的關係：
    ```php
    $users->loadMissing('comments', 'posts');

    $users->loadMissing('comments.author');
    ```
  - modelKeys()
    該modelKeys方法返回集合中所有模型的主鍵：
    ```php
    $users->modelKeys();

    // [1, 2, 3, 4, 5]
    ```
  - makeVisible($attributes)
    該makeVisible方法使屬性可見，通常在集合中的每個模型上“隱藏”：
    ```php
    $users = $users->makeVisible(['address', 'phone_number']);
    ```
  - makeHidden($attributes)
    該makeHidden方法隱藏了集合中每個模型通常“可見”的屬性：
    ```php
    $users = $users->makeHidden(['address', 'phone_number']);
    ```
  - only($keys)  
    該only方法返回具有給定主鍵的所有模型：
    ```php
    $users = $users->only([1, 2, 3]);
    ```
  - unique($key = null, $strict = false)
    該unique方法返回集合中的所有唯一模型。將刪除與集合中的另一個模型具有相同主鍵的任何相同類型的模型。
    ```php
    $users = $users->unique();
    ```
- Custom Collections  
  如果您需要使用Collection具有自己的擴展方法的自定義對象，則可以覆蓋newCollection模型上的方法：
  ```php
  <?php

  namespace App;

  use App\CustomCollection;
  use Illuminate\Database\Eloquent\Model;

  class User extends Model
  {
      /**
      * Create a new Eloquent Collection instance.
      *
      * @param  array  $models
      * @return \Illuminate\Database\Eloquent\Collection
      */
      public function newCollection(array $models = [])
      {
          return new CustomCollection($models);
      }
  }
  ```
  一旦定義了newCollection方法，您就會在Eloquent返回Collection該模型的實例時隨時收到自定義集合的實例。  
  如果要為應用程序中的每個模型使用自定義集合，則應覆蓋newCollection由所有模型擴展的基礎模型類上的方法。  

Testing




middleware前三
csrf全
controller125
request1

eloquent

    ```php
    ```


2019/08/02作業  
1.什麼是vue
2.為什麼testing的時候要暫停，運行測試時會自動暫停CSRF中介層
3.lifecycle

找範例

看書

觀察員最後面boot是什麼
看一下 query builders   PHP Data Objects(PDO)

[PSR-4 php寫作規範](https://events.storm.mg/codingstyle/coding_style/php/psr-4.html)


Laravel影片教學  
1. Bitfumes Webnologies
- [playlist](https://www.youtube.com/channel/UC_hG9fglfmShkwex1KVydHA/playlists)  
- [Laravel tutorials](https://www.youtube.com/playlist?list=PLe30vg_FG4OQz1yZq0z19ZuWD_C3MZbA4)
2. DevMarketer
- [DevMarketer](https://www.youtube.com/channel/UC6kwT7-jjZHHF1s7vCfg2CA/playlists)
- [How to Build a Blog with Laravel](https://www.youtube.com/playlist?list=PLwAKR305CRO-Q90J---jXVzbOd4CDRbVx)