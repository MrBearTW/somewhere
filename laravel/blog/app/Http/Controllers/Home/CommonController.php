<?php

namespace App\Http\Controllers\Home;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Model\Navs;
use App\Http\Controllers\Model\Article;
use Illuminate\Support\Facades\View;

class CommonController extends Controller
{
    

    // 58
    public function __construct()
    {
    //點擊量最高的6篇文章
    $hot = Article::orderBy('art_view','desc')->take(5)->get();

    //最新發布的文章8篇
    $new = Article::orderBy('art_view','desc')->take(6)->get();


        $navs = Navs::all();
        View::share('navs',$navs);
        View::share('hot',$hot);
        View::share('new',$new);
    }
}
