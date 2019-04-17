<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Model\Navs;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;

class NavsController extends CommonController
{
    //get.admin/navs 全部導航列列表
    public function index()
    {
        $data = Navs::orderBy('nav_order', 'asc')->get();
        return view('admin.navs.index', compact('data'));
    }

    public function changeOrder()
    {
        $input = Input::all();
        $navs = Navs::find($input['nav_id']);
        $navs->nav_order = $input['nav_order'];
        $re = $navs->update();
        if ($re) {
            $data = [
                'status' => 0,
                'msg' => '導航列排序更新成功'
            ];
        } else {
            $data = [
                'status' => 1,
                'msg' => '導航列排序更新失敗，請稍後重試'
            ];
        }
        return $data;
    }

    //get.admin/navs/{navs}     顯示單個連結訊息
    public function show()
    { }

    //get.admin/navs/create     添加導航列
    public function create()
    {
        return view('admin/navs/add');
        // $data = Category::where('cate_pid', 0)->get();
        // return view('admin/category/add', compact('data'));
    }

     // ## 45
    //post.admin/navs   添加導航列提交
    public function store()
    {
        $input = Input::except('_token');    //all但扣除第一個token
        $rules = [
            'nav_name' => 'required',  //必填
            'nav_url' => 'required',  //必填
        ];
        $message = [   //  出現錯誤時提示字
            'nav_name.required' => '導航列名稱不能為空',
            'nav_url.required' => '導航列URL不能為空'
        ];
        $validator = Validator::make($input, $rules, $message);
        if ($validator->passes()) {
            $re = Navs::create($input);
            if ($re) {
                return redirect('admin/navs');
            } else {
                return back()->withErrors('errors', '導航列新增失敗，請重新嘗試');
            }
        } else {
            return back()->withErrors($validator);
        }
    }

        //get.admin/navs/{navs}/edit     編輯導航列
        public function edit($nav_id)
        {
            $field = Navs::find($nav_id);
            return view('admin.navs.edit', compact('field', 'data'));
        }
    
        // ## 32
        //put.admin/navs/{navs}        更新導航列
        public function update($nav_id)
        {
            $input = Input::except('_token', '_method');
            $re = Navs::where('nav_id', $nav_id)->update($input);
            if ($re) {
                return redirect('admin/navs');
            } else {
                return back()->withErrors('errors', '導航列更新失敗，請重新嘗試');
            }
        }

    //delete.admin/navs/{navs}      刪除導航列
    public function destroy($nav_id)
    {
        $re = Navs::where('nav_id', $nav_id)->delete();
        if ($re) {
            $data = [
                'status' => 0,
                'msg' => '導航列刪除成功'
            ];
        } else {
            $data = [
                'status' => 1,
                'msg' => '導航列刪除失敗，請重新嘗試'
            ];
        }
        return $data;
    }
}
