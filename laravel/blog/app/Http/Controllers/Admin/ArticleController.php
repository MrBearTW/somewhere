<?php
namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Model\Category;
use Illuminate\Support\Facades\Input;
use App\Http\Controllers\Model\Article;

class ArticleController extends CommonController
{
    //get.admin/article 全部文章列表
    public function index()
    {
        echo '全部文章';
    }

    //get.admin/article/create     添加文章
    public function create()
    {
        $data = (new Category)->tree();
        return view('admin.article.add', compact('data'));
    }

    //post.admin/article 添加文章提交
    public function store()
    {
        $input = Input::except('_token');
        $input['art_time'] = time();
        // dd($input);
        $re = Article::create($input);
        dd($re);
    }
}