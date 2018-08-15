<?php
	require_once("config.php");
	class order_detail extends main_cmd{
		public function insert(){	//新增訂單
			$this->param["id"]=uid();
			db("
				
			",$this->param);
			$_SESSION["info"]="新增完成！";
		}
		public function update(){	//修改訂單
			db("
				
			",$this->param);
			$_SESSION["info"]="確認完成！";
		}
		public function delete(){	//刪除訂單
			db("
				
			",$this->param);
			$_SESSION["info"]="刪除完成！";
		}
		public function  __invoke(){
			return db("
				
			")->fetchAll();
		}
	}
?>