<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class IndexController extends CommonController
{
    public function index(){
        // $pdo = DB::connection()->getPdo();
        // dd($pdo);
        return view('admin.index');
    }
    public function info(){
        return view('admin.info');
    }
}
