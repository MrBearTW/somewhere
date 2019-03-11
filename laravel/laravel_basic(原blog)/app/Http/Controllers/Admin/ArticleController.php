<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ArticleController extends Controller
{
    public function index()
    {
        echo 'get response http://blog.hd/admin/article';
    }
    public function store()
    {
        echo 'post response http://blog.hd/admin/article 用Postman有點問題';
    }
}
