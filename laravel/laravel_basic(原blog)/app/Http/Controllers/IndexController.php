<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use APP\Http\Requests;
use Illuminate\Support\Facades\DB;
use App\Http\Model\User_video18;

class IndexController extends Controller
{
    public function index(){
        
        //測試DB是否有連線
        // $pdo=DB::connection()->getPdo();
        // dd($pdo);


        //抓取table資料
        // $users = DB::table('blog_user')->where('user_id',1)->get();

        // $users = DB::table('blog_user')->where('user_id','>',1)->get();
        // dd($users);


        // 建立model User_video18
        // $user = User_video18::where('user_id',1)->get();
        // dd($user);

        $user = User_video18::find(1);
        $user->user_name='bear';
        $user->update();
        dd($user);
    }
}
