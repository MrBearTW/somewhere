<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Model\User;
//use Illuminate\Foundation\Auth\User;
use Illuminate\Support\Facades\Crypt;

class IndexController extends CommonController
{
    public function index()
    {
        // $pdo = DB::connection()->getPdo();
        // dd($pdo);
        return view('admin.index');
    }
    public function info()
    {
        return view('admin.info');
    }

    //更改超級管理員密碼
    public function pass()
    {
        if ($input = Input::all()) {
            $rules = [
                'password' => 'required|between:6,20|confirmed',  //必填 | 字數要求 | 確認後面那一個要改成_confirmation
            ];
            $message = [   //  出現錯誤時提示字
                'password.required' => '新密碼不能為空',
                'password.between' => '新密碼必須為6~20為元之間',
                'password.confirmed' => '新密碼和確認密碼不同',
            ];
            $validator = Validator::make($input, $rules, $message);

            if ($validator->passes()) {
                $user = User::first();
                $_password = Crypt::decrypt($user->user_pass);
                if($input['password_o']==$_password){
                    $user->user_pass=Crypt::encrypt($input['password']);
                    $user->update();
                    return redirect('admin/info');
                }else{
                    return back()->with('errors',['原密碼錯誤']);   //  有點問題
                }
            } else {
                return back()->withErrors($validator);
            }
        } else {
            return view('admin.pass');
        }
    }
}
