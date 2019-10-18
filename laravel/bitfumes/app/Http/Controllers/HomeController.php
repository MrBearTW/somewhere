<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\user;

class HomeController extends Controller
{
    public function index_part6()
    {
        $user = user::find(1);
        return $user;
        // return view('welcome',compact('user'));
    }

    public function index_part7()
    {
        $mobiles = user::find(1)->mobile;
        // return $mobiles;
        return view('welcome',compact('mobiles'));
    }

    public function index_part8()
    {
        $roles = user::find(1)->roles;
        return $roles;
        // return view('welcome',compact('mobiles'));
    }
}
