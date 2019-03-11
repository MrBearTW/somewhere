<?php
namespace App\Http\Controllers\Admin;  // 分離前後 把後端的移動到Admin資料夾內

use App\Http\Controllers\Controller;  // 下面extends用到的 use這邊要先引進

class IndexControllers extends Controller
{
    public function index()
    {
        echo 'IndexControllers.php login';
    }

    public function indexGroup()
    {
        return view('welcome');
    }
    public function login()
    {
        session(['admin'=>1]);
        return '登入';
    }
}