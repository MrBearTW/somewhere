@extends('layouts.admin')
@section('content')
    

    <!--面包屑导航 开始-->
    <div class="crumb_warp">
        <!--<i class="fa fa-bell"></i> 欢迎使用登陆网站后台，建站的首选工具。-->
    <i class="fa fa-home"></i> <a href="{{url('admin/info')}}">首页</a> &raquo;配置項管理
    </div>
 
    <!--搜索结果页面 列表 开始-->
        <div class="result_wrap">
            <div class="result_title">
                <h3>配置項列表</h3>
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
            </div>
            <!--快捷导航 开始-->
            <div class="result_content">
                <div class="short_wrap">
                <a href="{{url('admin/config/create')}}"><i class="fa fa-plus"></i>新增配置項</a>
                <a href="{{url('admin/config')}}"><i class="fa fa-recycle"></i>全部配置項</a>
                </div>
            </div>
            <!--快捷导航 结束-->
        </div>

        <div class="result_wrap">
            <div class="result_content">
            <form action="{{url('admin/config/changecontent')}}" method="post">
                {{csrf_field()}}
                <table class="list_tab">
                    <tr>
                        <th class="tc" width="5%">排序</th>
                        <th class="tc" width="5%">ID</th>
                        <th>配置項標題</th>
                        <th>配置項名稱</th>
                        <th>內容</th>
                        <th>操作</th>
                    </tr>

                    @foreach ($data as $v)
                    <tr>
                        <td class="tc">
                            <input type="text" onchange="changeOrder(this,{{$v->conf_id}})" value="{{$v->conf_order}}">
                        </td>
                        <td class="tc">{{$v->conf_id}}</td>
                        <td>
                            <a href="#">{{$v->conf_title}}</a>
                        </td>
                        <td>{{$v->conf_name}}</td>
                        <td>
                        <input type="hidden" name="conf_id[]" value="{{$v->conf_id}}">
                            {!! $v->_html !!}
                        </td>
                        <td>
                        <a href="{{url('admin/config/'.$v->conf_id.'/edit')}}">修改</a>
                        <a href="javascript:;" onclick="delLinks({{$v->conf_id}})">删除</a>
                        </td>
                    </tr>
                    @endforeach
                </table>
                <div class="btn_group">
                        <input type="submit" value="提交">
                        <input type="button" class="back" onclick="history.go(-1)" value="返回" >
                    </div>
            </form>
            </div>
        </div>
    <!--搜索结果页面 列表 结束-->

<script>
function changeOrder(obj,conf_id){
    var conf_order = $(obj).val();
    $.post("{{url('admin/config/changeorder')}}",{'_token':'{{csrf_token()}}','conf_id':conf_id,'conf_order':conf_order},function(data){
        
        if(data.status==0){
            layer.msg(data.msg, {icon: 6}); 
        }else{
            layer.msg(data.msg, {icon: 5});
        }
    });
}

//刪除配置項
function delLinks(conf_id){
    layer.confirm('您確定要刪除這一個配置項嗎？', {
      btn: ['確定','取消'] //按钮
    }, function(){
            $.post("{{url('admin/config/')}}/"+conf_id,{'_method':'delete','_token':"{{csrf_token()}}"},function (data) {
            if(data.status==0){
                location.href = location.href;
                    layer.msg(data.msg, {icon: 6});
            }else{
                    layer.msg(data.msg, {icon: 5});
            }
        });
    //   layer.msg('的确很重要', {icon: 1});
    }, function(){

    });
}
</script>

    @endsection