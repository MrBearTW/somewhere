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

Route::match(['get', 'post','patch'], '/test', function () {    //'post','patch'都失敗
    echo 'match_test';
});

Route::any('foo', function () {
    echo 'foo_any';
});