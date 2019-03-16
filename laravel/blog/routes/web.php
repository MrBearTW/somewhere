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
    Route::any('index','IndexController@index');
    Route::any('info','IndexController@info');
    Route::any('quit','LoginController@quit');
});