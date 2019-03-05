<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ViewController extends Controller
{
    public function index(){
        //echo 'this is viewcontroller.php';
        $name = '瑞兔';
        return view('my_laravel');
    }
}
