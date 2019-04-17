<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Model\Links;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;

class LinksController extends CommonController
{
    //get.admin/links 全部連結列表
    public function index()
    {
        $data = Links::orderBy('link_order', 'asc')->get();
        return view('admin.links.index', compact('data'));
    }

    public function changeOrder()
    {
        $input = Input::all();
        $links = Links::find($input['link_id']);
        $links->link_order = $input['link_order'];
        $re = $links->update();
        if ($re) {
            $data = [
                'status' => 0,
                'msg' => '超連結排序更新成功'
            ];
        } else {
            $data = [
                'status' => 1,
                'msg' => '超連結排序更新失敗，請稍後重試'
            ];
        }
        return $data;
    }

    //get.admin/links/{links}     顯示單個連結訊息
    public function show()
    { }

    //get.admin/links/create     添加超連結
    public function create()
    {
        return view('admin/links/add');
        // $data = Category::where('cate_pid', 0)->get();
        // return view('admin/category/add', compact('data'));
    }

     // ## 45
    //post.admin/links   添加超連結提交
    public function store()
    {
        $input = Input::except('_token');    //all但扣除第一個token
        $rules = [
            'link_name' => 'required',  //必填
            'link_url' => 'required',  //必填
        ];
        $message = [   //  出現錯誤時提示字
            'link_name.required' => '超連結名稱不能為空',
            'link_url.required' => '超連結URL不能為空'
        ];
        $validator = Validator::make($input, $rules, $message);
        if ($validator->passes()) {
            $re = Links::create($input);
            if ($re) {
                return redirect('admin/links');
            } else {
                return back()->withErrors('errors', '超連結新增失敗，請重新嘗試');
            }
        } else {
            return back()->withErrors($validator);
        }
    }

        //get.admin/links/{links}/edit     編輯超連結
        public function edit($link_id)
        {
            $field = Links::find($link_id);
            return view('admin.links.edit', compact('field', 'data'));
        }
    
        // ## 32
        //put.admin/links/{links}        更新超連結
        public function update($link_id)
        {
            $input = Input::except('_token', '_method');
            $re = Links::where('link_id', $link_id)->update($input);
            if ($re) {
                return redirect('admin/links');
            } else {
                return back()->withErrors('errors', '超連結更新失敗，請重新嘗試');
            }
        }

    //delete.admin/links/{links}      刪除超連結
    public function destroy($link_id)
    {
        $re = Links::where('link_id', $link_id)->delete();
        if ($re) {
            $data = [
                'status' => 0,
                'msg' => '超連結刪除成功'
            ];
        } else {
            $data = [
                'status' => 1,
                'msg' => '超連結刪除失敗，請重新嘗試'
            ];
        }
        return $data;
    }
}
