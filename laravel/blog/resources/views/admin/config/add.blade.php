@extends('layouts.admin')
@section('content')
    



    <!--面包屑导航 开始-->
    <div class="crumb_warp">
        <!--<i class="fa fa-bell"></i> 欢迎使用登陆网站后台，建站的首选工具。-->
    <i class="fa fa-home"></i> <a href="{{url('admin/info')}}">首頁</a> &raquo;配置項管理
    </div>
    <!--面包屑导航 结束-->

	<!--结果集标题与导航组件 开始-->
	<div class="result_wrap">
        <div class="result_title">
            <h3>添加配置項</h3>
            @if(count($errors)>0)
            <div class="mark">
                @if(is_object($errors))     <!-- is_object 物件 -->
                    @foreach($errors->all() as $error)    <!-- 陣列？？？ -->
                        <p>{{$error}}</p>
                    @endforeach
                @else
                    <p>{{$errors}}</p>
                @endif
            </div>
            @endif
            <div class="result_content">
                    <div class="short_wrap">
                    <a href="{{url('admin/config/create')}}"><i class="fa fa-plus"></i>新增配置項</a>
                    <a href="{{url('admin/config')}}"><i class="fa fa-recycle"></i>全部配置項</a>
            </div>
        </div>
    </div>
    <!--结果集标题与导航组件 结束-->
    
    <div class="result_wrap">
    <form action="{{url('admin/config')}}" method="post">
            {{csrf_field()}}
            <table class="add_tab">
                <tbody>
                        <tr>
                                <th><i class="require">*</i>標題：</th>
                                <td>
                                    <input type="text" name="conf_title">
                                    <span><i class="fa fa-exclamation-circle yellow"></i>配置項標題必須填寫</span>
                                </td>
                            </tr>
                            <tr>
                                <th><i class="require">*</i>名稱：</th>
                                <td>
                                    <input type="text" name="conf_name">
                                    <span><i class="fa fa-exclamation-circle yellow"></i>配置項名稱必須填寫</span>
                                </td>
                            </tr>
                            <tr>
                                    <th>類型：</th>
                                    <td>
                                        <input type="radio" name="field_type" value="input" checked onclick="showTr()">input       
                                        <input type="radio" name="field_type" value="textarea" onclick="showTr()">textarea     
                                        <input type="radio" name="field_type" value="radio" onclick="showTr()">radio       
                                    </td>
                                </tr>
                            <tr class="field_value">
                                <th>類型值：</th>
                                <td>
                                    <input type="text" class="lg" name="field_value">
                                    <p><i class="fa fa-exclamation-circle yellow"></i>類型值只有在radio的情況下才需要配置，格式 1|開啟, 0|關閉</span>
                                </td>
                            </tr>
                            <tr>
                                <th>排序：</th>
                                    <td>
                                        <input type="text" class="sm" name="conf_order" value="0">
                                    </td>
                            </tr>
                                <th>說明：</th>
                                <td>
                                    <textarea id="" cols="30" rows="10" name="conf_tips"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <th></th>
                                <td>
                                    <input type="submit" value="提交">
                                    <input type="button" class="back" onclick="history.go(-1)" value="返回">
                                </td>
                            </tr>
                </tbody>
            </table>
        </form>
    </div>
<script>
showTr();    
function showTr(){
    var type=$('input[name=field_type]:checked').val();
    if(type=='radio'){
        $('.field_value').show();
    }else{
        $('.field_value').hide();
    }
}

</script>
@endsection
