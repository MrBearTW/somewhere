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
            echo 'OK登入成功';
        } else {
            $user = User::all();
            dd($user);
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
