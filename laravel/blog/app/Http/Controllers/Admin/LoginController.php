<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Crypt;
use App\Http\Controllers\Model\User;



require_once 'resources/org/code/Code.class.php';

class LoginController extends CommonController
{
    public function login()
    {
        if ($input = Input::all()) {
            $code = new \Code;
            $_code = $code->get();
            if (strtoupper($input['code']) != $_code) {
                return back()->with('msg', '驗證碼錯誤');
            }
            $user = User::first();
            if($user->user_name != $input['user_name'] || Crypt::decrypt($user->user_pass) != $input['user_pass']){
                return back()->with('msg', '用戶名或密碼錯誤');
            }
            session(['user'=>$user]);
            // dd(session('user'));
            // echo 'OK登入成功';
            return redirect('admin/index');
        } else {
            // $user = User::first();
            // dd($user);
            
            // dd($_SERVER);    //可以看一些系統訊息
            session(['user'=>null]);
            return view('admin.login');
        }
    }
    public function code()
    {
        $code = new \Code;
        $code->make();
    }
    public function getcode()
    {
        $code = new \Code;
        echo $code->get();
    }

    public function crypt()
    {
        $str = '123456';
        $str_p = 'eyJpdiI6InlqcmpLTTM0RVN3M1dMd1ZNR2g1bFE9PSIsInZhbHVlIjoiSG1EXC9leFwvWk4xUlBFZDlJc1JNaUNBPT0iLCJtYWMiOiIyMmI2YmVlMTE0ZjZhNjM0NzdmYmUyMDNjZmRkMTE4MThhOGU5Njc5ZmVjZWZkYTNhYmFlNDcyZjQ3YmNkNDAwIn0';
        echo Crypt::encrypt($str);
        echo "</br>";
        echo Crypt::decrypt($str_p);
    }
}
