<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>SchulerTrack - Login</title>
		<link href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet">
		<style>/***
		User Profile Sidebar by @keenthemes
		A component of Metronic Theme - #1 Selling Bootstrap 3 Admin Theme in Themeforest: http://j.mp/metronictheme
		Licensed under MIT
		***/
		/***
		Lock Page
		***/
		body {
		background-color: #465568;
		padding: 0;
		margin: 0;
		}
		.page-lock {
		margin: -200px auto 30px auto;
		top: 50% !important;
		width: 800px;
		position: fixed;
		left: 0;
		right: 0;
		}
		.page-lock .page-logo {
		text-align: center;
		margin-bottom: 15px;
		}
		.page-lock .page-body {
		width: 100%;
		margin-top: 50px;
		background-color: transparent;
		-webkit-border-radius: 7px;
		-moz-border-radius: 7px;
		-ms-border-radius: 7px;
		-o-border-radius: 7px;
		border-radius: 7px;
		}
		.logo-head {
		display: block;
		background-color: #323d4b;
		text-align: center;
		padding-top: 15px;
		padding-bottom: 15px;
		font-size: 22px;
		font-weight: 400;
		color: #4db3a5;
		}
		.logo-body {
		display: block;
		margin: 35px;
		overflow: hidden;
		}
		.logo-avatar {
		margin-top: 50px;
		height: auto;
		width: 250px;
		float: left;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		border-radius: 50%;
		}
		.logo-form {
		padding-top: 30px;
		padding-left: 70px;
		padding-right: 15px;
		padding-bottom: 30px;
		float: right !important;
		border-left: 1px solid #69737f;
		}
		.logo-form h4 {
		margin-top: 0px;
		color: #dbe2ea;
		font-size: 18px;
		font-weight: 400;
		}
		.logo-form .form-group {
		margin-top: 20px;
		}
		.logo-form .form-group .form-control {
		background-color: #303a48;
		border: none;
		width: 320px;
		height: 40px;
		color: #697687;
		border-radius: 0;
		}
		.logo-form .form-group .form-control::-moz-placeholder {
		color: #556376;
		opacity: 1;
		}
		.logo-form .form-group .form-control:-ms-input-placeholder {
		color: #556376;
		}
		.logo-form .form-group .form-control::-webkit-input-placeholder {
		color: #556376;
		}
		.logo-form .form-group .form-control:focus {
		background-color: #2b3542;
		}
		.logo-form .form-actions {
		margin-top: 20px;
		}
		.logo-form .form-actions .btn-success {
		background-color: #e76070 !important;
		width: 320px;
		font-weight: 600;
		padding: 10px;
		border: none;
		border-radius: 0;
		}
		.logo-form .form-actions .btn-success:hover {
		background-color: #d75464 !important;
		}
		.logo-bottom {
		display: block;
		text-align: center;
		padding-top: 20px;
		padding-bottom: 20px;
		}
		.logo-bottom a {
		font-size: 14px;
		font-weight: 400;
		color: #638cac;
		}
		.logo-bottom a:hover {
		color: #7ba2c0;
		}
		@media (max-width: 768px) {
		.page-lock {
		margin: 100px auto;
		}
		}
		@media (max-width: 560px) {
		.page-lock {
		margin: 50px auto;
		width: 400px;
		}
		.logo-body {
		margin: 30px;
		}
		.logo-avatar {
		width: 120px;
		height: 120px;
		margin-top: 20px;
		}
		.logo-form h4 {
		font-size: 16px;
		}
		.logo-form .form-group .form-control {
		padding: 20px 20px;
		width: 170px;
		}
		.logo-form .form-actions .btn-success {
		width: 170px;
		margin-bottom: 10px;
		}
		}
		@media (max-width: 420px) {
		.page-lock {
		margin: 30px auto;
		width: 280px;
		}
		.logo-body {
		margin: 0px;
		}
		.page-lock .page-body {
		margin-top: 30px;
		}
		.logo-avatar {
		margin-top: 20px;
		}
		.logo-avatar-block {
		display: block;
		width: 100%;
		text-align: center;
		margin-bottom: 10px;
		height: 250px;
		padding-top: 36px;
		float: left!important;
		}
		.logo-form {
		padding-left: 20px;
		}
		.logo-form h4 {
		font-size: 16px;
		text-align: center;
		}
		.logo-form .form-group .form-control {
		padding: 20px 20px;
		width: 240px;
		}
		.logo-form .form-actions .btn-success {
		width: 240px;
		margin-bottom: 20px;
		}
		}
		</style>
		<script type="text/javascript" src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
		<script type="text/javascript" src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
		<script type="text/javascript"></script>
	</head>
<body>
	<!--
	User Profile Sidebar by @keenthemes
	A component of Metronic Theme - #1 Selling Bootstrap 3 Admin Theme in Themeforest: http://j.mp/metronictheme
	Licensed under MIT
	-->
	<div class="container">
		<div class="page-lock">
			<div class="page-body">
				<div class="logo-body">
					<div class="pull-left logo-avatar-block">
						<img src="http://www.townhallapp.io/wp-content/themes/startup/templates/startup-framework/build-wp/flat-ui/images/demo/logo-mask-2x.png" class="logo-avatar">
					</div>
					<form class="logo-form pull-left" action="index.html" method="post">
						<div class="form-group">
							<input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="User Name" name="text">
						</div>
						<div class="form-group">
							<input class="form-control placeholder-no-fix" type="password" autocomplete="off" placeholder="Password" name="password">
						</div>
						<div class="form-actions">
							<button type="submit" class="btn btn-success uppercase">Login</button>
						</div>
						<div class="logo-bottom">
							<a href="">Forgot your password?</a>
					</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</body>
</html>