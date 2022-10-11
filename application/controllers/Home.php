<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	public function __construct(){
		parent::__construct();
	}

	public function index()
	{
		$data = NULL;
		$data['meta_title'] = "Login";
		$this->load->view('account/common/header', $data);
		$this->load->view('account/account_login', $data);
		$this->load->view('account/common/footer', $data);
	}	

	public function login()
	{
		$data = NULL;
		$data['meta_title'] = "Login";
		$this->load->view('account/common/header', $data);
		$this->load->view('account/account_login', $data);
		$this->load->view('account/common/footer', $data);
	}	

	public function registration()
	{
		$data = NULL;
		$data['meta_title'] = "KYC Registration";
		$this->load->view('account/common/header', $data);

		$data['requirements_data'] = $this->Account_Model->read_registration_requirements();
		$this->load->view('account/account_registration', $data);
		$this->load->view('account/common/footer', $data);
	}	


	public function validate_username()
	{
    	header('Content-Type: application/json');

		function anyError($error_code, $description, $file_name, $line)
	    {
	      $response = '{"statusCode":"500", "status":"Internal Server Error", "message":"Error Handler of Function Triggered", "description":"Custom Error Handler: ['.$error_code.'] '.$description.' - Error on line '.$line.' in '.$file_name.'."}';

	      $CI =& get_instance();
	      $CI->errorHandler($response);

	      echo $response;
	      exit();
	    }
	    set_error_handler('anyError');

	    // VALIDATE TOKEN
	    // $signature = $this->validate_token();

	    // if($signature == 0)
	    // {
	    //   $response = '{"statusCode":"498", "status":"Invalid Token", "message":"Signature Verification Failed", "description":"The token might not be set, invalid or expired."}';

	    //   $this->errorHandler($response.' - public function validate_username() in Home.php');
	    //   echo $response;
	    //   exit();
	    // }

		if (isset($_GET['username']) && $_GET['username'] != '') {

			// CHECK XSS
		    $data = array
		    (
		      $_GET['username']
		    );

	      	$response = 'alert("Malicious data has been detected!");';
	      	$function = 'public function validate_username() in Home.php';
	      	$ban_remarks = 'XSS were detected upon trying to validate the username - REST API.';
	      	$ban_duration = 'PERMANENT';

	      	// PROCEED HERE IF IT IS CLEAN, IF NOT, BAN THE IP/USER AND THEN REDIRECT THEM TO BAN CONTROLLER
	      	// $this->check_xss($data, $response, $function, $ban_remarks, $ban_duration);

			$username = $this->db->escape($_GET['username']);
			$get_username = $this->account_Model->read_username( $username );
			if ($get_username->result() == NULL) {
				echo '{"result": "true", "message": "Username available"}';
			} else {
				echo '{"result": "false", "message": "Username not available"}';
			}

		} else {
				echo '{"result": "false", "message": "Username not available"}';
		}
	}

}

/* End of file Home.php */
/* Location: ./application/controllers/Home.php */