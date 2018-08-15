<?php
	require_once("config.php");
	$data=new order_detail();
?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="../css/font-awesome.min.css">
	<?php if ($_SESSION["info"]!=""){ ?>
		<script type="text/javascript">
			window.alert("<?php echo $_SESSION["info"];unset($_SESSION["info"]); ?>");
		</script>
	<?php } ?>
</head>
<body>
	<div class="container">
		<h2>訂單管理系統</h2>
		<hr>
		<table class="table table-striped table-bordered table-hover table-condensed">
			<tr>
				<th class="col-xs-2">購買人</th>
				<th class="col-xs-1">購買量</th>
				<th class="col-xs-2">電話</th>
				<th class="col-xs-4">地址</th>
				<th class="col-xs-1">狀態</th>
				<th class="col-xs-2">管理</th>
			</tr>
			<?php foreach ($data() as $key => $value){ ?>
			<tr>
				<td><?php echo $value["name"]; ?></td>
				<td><?php echo $value["number"]; ?></td>
				<td><?php echo $value["tel"]; ?></td>
				<td><?php echo $value["address"]; ?></td>
				<td><?php echo $value["status"]; ?></td>
				<td>
					<?php if ($value["status"]=="等待"){ ?>
						<a href="?cmd=update&id=<?php echo $value["id"]; ?>" class="btn btn-warning">確認</a>
					<?php } ?>
					<a href="?cmd=delete&id=<?php echo $value["id"]; ?>" class="btn btn-primary">刪除</a>
				</td>
			</tr>
			<?php } ?>
		</table>
	</div>
</body>
</html>