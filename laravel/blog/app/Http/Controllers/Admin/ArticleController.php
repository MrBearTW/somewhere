<?php
namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Model\Category;
use Illuminate\Support\Facades\Input;
use App\Http\Controllers\Model\Article;
use Illuminate\Support\Facades\Validator;

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

        $rules = [
            'art_title' => 'required',  //必填
            'art_content' => 'required'
        ];
        $message = [   //  出現錯誤時提示字
            'art_title.required' => '文章名稱不能為空',
            'art_content.required' => '文章內容不能為空',
        ];
        $validator = Validator::make($input, $rules, $message);

        if ($validator->passes()) {
            $re = Article::create($input);

            if ($re) {
                return redirect('admin/article');
            } else {
                return back()->with('errors', '文章新增失敗，請重新嘗試');
            }
        } else {
            return back()->withErrors($validator);
        }






    }
}