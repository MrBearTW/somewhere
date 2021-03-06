<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Model\Config;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Config as IlluminateConfig;

class ConfigController extends CommonController
{
    //get.admin/config 全部配置項列表
    public function index()
    {
        $data = Config::orderBy('conf_order', 'asc')->get();
        foreach ($data as $k => $v) {
            switch ($v->field_type) {
                case 'input':
                    $data[$k]->_html = '<input type="text" class="lg" name="conf_content[]" value="' . $v->conf_content . '">';
                    break;
                case 'textarea':
                    $data[$k]->_html = '<textarea type="text" class="lg" name="conf_content[]">' . $v->conf_content . '</textarea>';
                    break;
                case 'radio':
                    //  1|開啟, 0|關閉
                    $arr = explode(',', $v->field_value);        //  分拆
                    $str = '';
                    // 0 => "1|開啟"
                    // 1 => " 0|關閉"
                    foreach ($arr as $m => $n) {
                        $r = explode('|', $n);
                        // dd($r);
                        // 0 => "1"
                        // 1 => "開啟"
                        $c = $v->conf_content == $r[0] ? ' checked ' : ' ';
                        $str .= '<input type="radio" name="conf_content[]" value="' . $r[0] . '"' . $c . '>' . $r[1] . '　';
                    }
                    $data[$k]->_html = $str;
                    break;
            }
        }
        return view('admin.config.index', compact('data'));
    }

    public function changeContent()
    {
        $input = Input::all();
        // dd($input);
        foreach($input['conf_id'] as $k=>$v){
            Config::where('conf_id',$v)->update(['conf_content'=>$input['conf_content'][$k]]);
        }
        $this->putFile();
        return back()->with('errors', '配置更新成功');
    }

    public function putFile()
    {
        // echo IlluminateConfig::get('web','web_content');
        $config = Config::pluck('conf_content','conf_name')->all();
        $path = base_path().'\config\webbb.php';
        $str = '<?php return '.var_export($config,true).';';
        file_put_contents($path,$str);
    }

    public function changeOrder()
    {
        $input = Input::all();
        $config = Config::find($input['conf_id']);
        $config->conf_order = $input['conf_order'];
        $re = $config->update();
        if ($re) {
            $data = [
                'status' => 0,
                'msg' => '配置項排序更新成功'
            ];
        } else {
            $data = [
                'status' => 1,
                'msg' => '配置項排序更新失敗，請稍後重試'
            ];
        }
        return $data;
    }

    //get.admin/config/{config}     顯示單個連結訊息
    public function show()
    { }

    //get.admin/config/create     添加配置項
    public function create()
    {
        $this->putFile();
        return view('admin/config/add');
        // $data = Category::where('cate_pid', 0)->get();
        // return view('admin/category/add', compact('data'));
    }

    // ## 49
    //post.admin/config   添加配置項提交
    public function store()
    {
        $input = Input::except('_token');    //all但扣除第一個token
        $rules = [
            'conf_name' => 'required',  //必填
            'conf_title' => 'required',  //必填
        ];
        $message = [   //  出現錯誤時提示字
            'conf_name.required' => '配置項名稱不能為空',
            'conf_title.required' => '配置項標題不能為空'
        ];
        $validator = Validator::make($input, $rules, $message);
        if ($validator->passes()) {
            $re = Config::create($input);
            if ($re) {
                return redirect('admin/config');
            } else {
                return back()->withErrors('errors', '配置項新增失敗，請重新嘗試');
            }
        } else {
            return back()->withErrors($validator);
        }
    }

    //get.admin/config/{config}/edit     編輯配置項
    public function edit($conf_id)
    {
        $field = Config::find($conf_id);
        return view('admin.config.edit', compact('field', 'data'));
    }

    // ## 32
    //put.admin/config/{config}        更新配置項
    public function update($conf_id)
    {
        $input = Input::except('_token', '_method');
        $re = Config::where('conf_id', $conf_id)->update($input);
        if ($re) {
            $this->putFile();
            return redirect('admin/config');
        } else {
            return back()->with('errors', '配置項更新失敗，請重新嘗試');
        }
    }

    //delete.admin/config/{config}      刪除配置項
    public function destroy($conf_id)
    {
        $re = Config::where('conf_id', $conf_id)->delete();
        if ($re) {
            $this->putFile();
            $data = [
                'status' => 0,
                'msg' => '配置項刪除成功'
            ];
        } else {
            $data = [
                'status' => 1,
                'msg' => '配置項刪除失敗，請重新嘗試'
            ];
        }
        return $data;
    }
}
