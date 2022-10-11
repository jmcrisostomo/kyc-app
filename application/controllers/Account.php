<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Account extends CI_Controller {

	public function test_json()
	{
		header('Content-Type: application/json');
		$builder = '';
		if ($_SERVER['REQUEST_METHOD'] == 'POST') {
			echo json_encode (
				array(
					"response" 	=> 200,
					"status" 	=> "OK",
					"message" 	=> "OK",
					"data" 		=> $_POST
				)
			);
		} else {
			echo json_encode(
				array(
					"response" 	=> 	405,
					"status" 	=> 	"Method Not Allowed",
					"message" 	=> 	"Please use POST Method"
				)
			);
		}
	}

	public function register_api(){
		header('Content-Type: application/json');
		if ($_SERVER['REQUEST_METHOD'] == 'POST') {
			$this->Account_Model->create_account();
			echo json_encode (
				array(
					"response" 	=> 200,
					"status" 	=> "OK",
					"message" 	=> "You are now registered",
				)
			);
		} else {
			echo json_encode(
				array(
					"response" 	=> 	405,
					"status" 	=> 	"Method Not Allowed",
					"message" 	=> 	"Please use POST Method"
				)
			);
		}
		
	}

}

/* End of file Account.php */
/* Location: ./application/controllers/Account.php */