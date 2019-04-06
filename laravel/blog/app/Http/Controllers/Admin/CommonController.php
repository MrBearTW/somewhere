<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;

class CommonController extends Controller
{
    //圖片上傳
    public function upload(){
        $file=Input::file('Filedata');
        if($file -> isValid()){
            // $realPath = $file -> getRealPath();     //臨時文件的絕對路徑
            $entension = $file ->grtClientOriginalExtension();      //上傳文件的後綴
            $newName = data('YmdHis').mt_rand(100,999).'.'.$entension;
            $path = $file -> move(base_path().'/uploads',$newName);
            $filepath = 'uploads/'.$newName;
            return $filepath;
        }
    }
}
