<?php
	error_reporting(0);
	session_start();
	date_default_timezone_set("asia/taipei");
	function db($q=false,$p=array()){
		static $db=false;
		if($db===false){
			try{
				$db=new pdo("mysql:host=".$_SERVER["db"]["hostname"],$_SERVER["db"]["username"],$_SERVER["db"]["password"],array(PDO::ATTR_PERSISTENT=>false));
			}catch(PDOException $e){
				echo $e->getMessage();
				exit();
			}
			$db->exec("set names 'utf8'");
			$db->exec("use `".$_SERVER["db"]["name"]."`");
		}
		if($q===false){
			return $db;
		}
		if(is_array($p)==false){
			$p=array($p);
		}
		$n=$db->prepare($q);
		$n->execute($p);
		return $n;
	}
	function uid(){
		static $i=0;
		return md5(uniqid((++$i).",".mt_rand(),true));
	}
	function require_class($classname) {
		require_once("model/".$classname.".php");
	}
	spl_autoload_register("require_class");
	class main_cmd{
		protected $param;
		public function __construct(){
			$this->param=array_merge($_GET,$_POST);
			$cmd=(string)$this->param["cmd"];
			unset($this->param["cmd"]);
			if(method_exists($this,$cmd)==true){
				$this->$cmd();
				header("location:".$_SERVER["HTTP_REFERER"]);
				exit();
			}
		}
	}
?>