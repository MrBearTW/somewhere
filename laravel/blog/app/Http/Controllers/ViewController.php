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
        return view('my_laravel',compact('data','title'));
        
    }
}
