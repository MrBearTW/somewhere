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

[Understanding the Request Lifecycle Of Laravel.](http://www.moiapps.com/journal/understanding-the-request-lifecycle-in-laravel)  

![](http://www.moiapps.com/sites/default/files/inline-images/bootstrap2.jpg)

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




Service Container    
Laravel服務容器是一個用於管理類依賴性和執行依賴注入的強大工具  



Eloquent ORM
Testing




middleware前三
csrf全
controller125
request1

eloquent

    ```php
    ```