<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Model\Category;
use Illuminate\Support\Facades\Input;

class CategoryController extends CommonController
{

    //get.admin/category
    public function index()
    {
        //        $categorys = Category::tree();
        $categorys = (new Category)->tree();
        return view('admin.category.index')->with('data', $categorys);
    }

    public function changeOrder()
    {
        $input = Input::all();
        $cate = Category::find($input['cate_id']);
        $cate->cate_order = $input['cate_order'];
        $re = $cate->update();
        if ($re) {
            $data = [
                'status' => 0,
                'msg' => '分類排序更新成功'
            ];
        } else {
            $data = [
                'status' => 1,
                'msg' => '分類排序更新失敗，請稍後重試'
            ];
        }
        return $data;
    }



    //get.admin/category/create     添加分類
    public function create()
    {
        $data = Category::where('cate_pid',0)->get();  
        return view('admin/category/add',compact('data'));
    }

    //post.admin/category   添加分類提交
    public function store()
    {
        $input = Input::all();
        dd($input);
    }

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
