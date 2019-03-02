<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', function () {
    return view('welcome');
});
Route::get('/hd', function () {
    echo 'get';
});

Route::match(['get', 'post', 'patch'], '/test', function () {    //'post','patch'都失敗
    echo 'match_test';
});

Route::any('foo', function () {
    echo 'foo_any';
});

// ## 有傳參數

Route::get('user/{id_a}', function ($id_b) {
    return 'User ' . $id_b;
});
//{id_a} 和 $id_b 可不同

Route::get('posts/{post}/comments/{comment}', function ($postId, $commentId) {
    return $postId;
});
//參數不能使用 - 中線 ，請使用 _ 底線替代


// ## 可選參數
Route::get('/comments/{comment}/user/{name?}', function ($commentId, $name = null) {
    return $name;
});
//加？就變成可選參數，變成給選參數之後就要給預設值
//可選參數通常只放在最後一個


// ## 有限制的參數
Route::get('user_r/{id}', function ($id) {
    //
})->where('id', '[0-9]+');
//可避免攻擊
//也可設定為全部，請參考官網文件



// ##控制器
Route::get('test_video9', 'Admin\IndexControllers@index'); //後面的部分 (控制器class) @ (控制器的方法)

// ##高級路由
Route::get('test_video10', ['as' => 'profile', function () {
    echo route('profile');    // route('profile') = http://blog.hd/test_video10
    return '<h1>命名路由</h1>';
}]);

// ##group

// 原來
// Route::get('admin/index','Admin\IndexControllers@indexGroup');
// Route::get('admin/login','Admin\IndexControllers@login');

Route::group(['prefix' => 'admin','namespace'=>'Admin'], function () {
    Route::get('index', 'IndexControllers@indexGroup');
    Route::get('login', 'IndexControllers@login');
    Route::resource('article','ArticleController');
});