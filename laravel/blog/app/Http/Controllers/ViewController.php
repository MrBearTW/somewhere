<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ViewController extends Controller
{
    public function index(){
        //echo 'this is viewcontroller.php';

        // $name = '瑞兔';
        // $age = 5;
        // return view('my_laravel')->with('name',$name)->with('age',$age);
        
        $data = [
            'name' => '多元支付',
            'age' => 5
        ];
        $title = "整合式的QRcode";

        //$varmaybeisnull = '測試是否為null的字串';
        $varmaybeisnull = null;

        $str = "<script>alert('測試傳送script看看會不會被執行');</script>";
        $str2 = '<script>document.write("這種寫法會真的去執行script的code")</script>';

        $data2 = [
            'score' => 87,
            'num'=>56,
            'article'=>['n1','n2','n3','n4','n5','n6'],
            'article2'=>array()
        ];

        return view('my_laravel',compact('data','title','varmaybeisnull','str','str2','data2'));

    }
}
