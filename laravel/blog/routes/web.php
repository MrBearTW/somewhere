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

// Route::get('/test_db','IndexController@index');

Route::any('admin/login','Admin\LoginController@login');

Route::get('admin/code','Admin\LoginController@code');
Route::get('admin/getcode','Admin\LoginController@getcode');    //為了看圖片上的四個文字

Route::any('admin/crypt','Admin\LoginController@crypt');



// Route::group(['middleware'=>['web','admin.login']],function(){   
//     Route::any('admin/index','Admin\IndexController@index');
//     Route::any('admin/info','Admin\IndexController@info');
//     Route::any('admin/quit','Admin\LoginController@quit');
// });
Route::group(['middleware'=>['web','admin.login'],'prefix'=>'admin','namespace'=>'admin'],function(){
    Route::get('index','IndexController@index');
    Route::get('info','IndexController@info');
    Route::get('quit','LoginController@quit');
    Route::any('pass','IndexController@pass');

    Route::post('cate/changeorder','CategoryController@changeOrder');
    Route::resource('category', 'CategoryController');

    Route::resource('article', 'ArticleController');

    Route::post('links/changeorder','LinksController@changeOrder');
    Route::resource('links', 'LinksController');

    Route::post('navs/changeorder','NavsController@changeOrder');
    Route::resource('navs', 'NavsController');
    
    Route::any('upload','CommonController@upload');

});

    