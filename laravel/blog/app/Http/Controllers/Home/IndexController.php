<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Model\Article;
use App\Http\Controllers\Model\Links;
use App\Http\Controllers\Model\Category;

class IndexController extends CommonController
{
    public function index(){
        //點擊量最高的6篇文章(站長推薦)
        $pics = Article::orderBy('art_view','desc')->take(6)->get();

        //點擊量最高的6篇文章
        $hot = Article::orderBy('art_view','desc')->take(5)->get();

        //最新發布的文章8篇
        $new = Article::orderBy('art_view','desc')->take(6)->get();

        //圖文列表帶分頁5篇
        $data = Article::orderBy('art_time','desc')->paginate(5);

        //友情連結
        $links=Links::orderBy('link_order','asc')->get();
        //網站配置

        return view('home.index',compact('hot','new','pics','data','links'));
    }

    public function cate($cate_id){
        //圖文列表帶分頁5篇
        $data = Article::where('cate_id',$cate_id)->orderBy('art_time','desc')->paginate(4);

        //當前分類的子分類
        $submenu = Category::where('cate_pid',$cate_id)->get();
        $field = Category::find($cate_id);
        return view('home.list',compact('field','data','submenu'));
    }

    public function article($art_id){
        $field = Article::Join('category','article.cate_id','=','category.cate_id')->where('art_id',$art_id)->first();
        return view('home.new',compact('field'));
    }
}
