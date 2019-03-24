<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Model\Category;

class CategoryController extends CommonController
{

    //get.admin/category
    public function index()
    {
        $categorys = Category::all();
        $data = $this->getTree($categorys);
        return view('admin.category.index')->with('data',$categorys);
    }
    public function getTree($data){
        foreach($data as $k=>$v){
            if($v->cat_pid)
        }
    }


    //post.admin/category
    public function store()
    { }

    //get.admin/category/create     添加分類
    public function create()
    { }

    //get.admin/category/{category}     顯示單個分類訊息
    public function show()
    { }

    //delete.admin/category/{category}      刪除單個分類
    public function destroy()
    { }

    //put.admin/category        更新分類
    public function update()
    { }

    //get.admin/category/{category}     編輯分類
    public function edit()
    { }
}
