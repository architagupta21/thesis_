<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>ReactJS PHP LTI</title>
         <?php
         require_once './config.php';
         require_once './lib/lti.php';
         require_once './lib/jwt.php';

         $lti = new Lti($config, true);
         if (!$lti->is_valid()) {
             echo "LTI Not Valid, Please Contact UQx";
             die();
         }

         $jwt_token = array();
         $jwt_token['lti_vars'] = $lti->calldata();
         // generate encoded token using lti vars signed with the jwt secret
         $jwt_encode_token = JWT::encode($jwt_token, $config['jwt_key']);

         $lti_id = $lti->lti_id();
         $user_id = $lti->user_id();
         $course_id = $lti->course_id();
         $user_roles = $lti->user_roles();
         ?>
		<style>
			body{
				margin:0;
				padding:20px !important;
			}
		</style>
    </head>
    <body>
    <script type="text/javascript">

		
		$LTI = {};
		$LTI['id'] = '<?php echo $lti_id; ?>';
		$LTI['userID'] = '<?php echo $user_id; ?>';
		$LTI['courseID'] = '<?php echo addslashes($course_id); ?>';
		$LTI['user_role'] = '<?php echo $user_roles; ?>';
		
		$JWT_TOKEN = '<?php echo $jwt_encode_token; ?>';
		
	</script>
    <div id="app"></div>
    <script type="text/javascript" src="./dist/bundle.js"></script>
    </body>
</html>
