<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\user;
use App\role;
use App\post;
use App\video;

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
        $user = role::find(1)->users;
        return $user;
        // dd($user);
        // return view('welcome',compact('mobiles'));
    }

    public function index_part11()
    {
        // 
        // $post = post::first();
        // // return $post->tags;
        // dd($post->tags);

        $video = video::first();
        // return $post->tags;
        dd($video->tags);
    }
}
