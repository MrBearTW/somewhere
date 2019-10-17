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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', function () {
    // $organiser = ['Name', 'Sponsor', 'prize'];
    $organiser = [];

    // part 3
    // return view('welcome',['organiser'=> $organiser]);   //傳資料不同寫法
    // return view('welcome') ->with(['organiser'=> $organiser]);   //傳資料不同寫法
    return view('welcome', compact('organiser'));   //傳資料不同寫法
});

Route::get('about','PagesController@about');