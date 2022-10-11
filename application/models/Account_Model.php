<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Account_Model extends CI_Model {

	public function __construct()
	{
		parent::__construct();
		//Load Dependencies

	}

	public function create_account()
	{
		$customer_id = $this->input->post('customer_id');
		$username = $this->input->post('username');
		$contact_number = $this->input->post('contact_number');
		$email_address = $this->input->post('email_address');
		$password = $this->input->post('password');
		$first_name = $this->input->post('first_name');
		$middle_name = $this->input->post('middle_name');
		$last_name = $this->input->post('last_name');
		$birth_date = $this->input->post('birth_date');
		$gender = $this->input->post('gender');
		$civil_status = $this->input->post('civil_status');
		$nationality = $this->input->post('nationality');
		$address = $this->input->post('address');
		$region = $this->input->post('region');
		$province = $this->input->post('province');
		$city = $this->input->post('city');
		$barangay = $this->input->post('barangay');
		$hidden_region = $this->input->post('hidden_region');
		$hidden_province = $this->input->post('hidden_province');
		$hidden_city = $this->input->post('hidden_city');
		$hidden_barangay = $this->input->post('hidden_barangay');
		$zip_code = $this->input->post('zip_code');
		$country = $this->input->post('country');
		$presenting_document = $this->input->post('presenting_document');

		$upload_document = $_FILES['upload_document'];
		$upload_document_with_selfie = $_FILES['upload_document_with_selfie'];

		date_default_timezone_set('Asia/Manila');
        $timestamp = time();
        $date_modified = date('Y-m-d H:i:s', $timestamp);

        $data = array(
        	"CUSTOMER_ID" => $this->db->escape($customer_id),
			"USERNAME" => $this->db->escape($username),
			"MOBILE_NUMBER" => $this->db->escape($contact_number),
			"EMAIL_ADDRESS" => $this->db->escape($email_address),
			"PASSWORD" => $this->db->escape($password),
			"FIRST_NAME" => $this->db->escape($first_name),
			"MIDDLE_NAME" => $this->db->escape($middle_name),
			"LAST_NAME" => $this->db->escape($last_name),
			"BIRTH_DATE" => $this->db->escape($birth_date),
			"GENDER" => $this->db->escape($gender),
			"CIVIL_STATUS" => $this->db->escape($civil_status),
			"NATIONALITY" => $this->db->escape($nationality),
			"ADDRESS" => $this->db->escape($address),
			"REGION" => $this->db->escape($hidden_region),
			"PROVINCE" => $this->db->escape($hidden_province),
			"CITY" => $this->db->escape($hidden_city),
			"BARANGAY" => $this->db->escape($hidden_barangay),
			"ZIP_CODE" => $this->db->escape($zip_code),
			"COUNTRY" => $this->db->escape($country),
        	"DATE_MODIFIED" => $this->db->escape($date_modified),
        	"MODIFIED_BY" => $this->db->escape("SYSTEM")
        );

        $this->db->insert('tblaccount', $data, false);

        $get_latest = $this->db->query("SELECT MAX(ACCOUNT_ID) AS LATEST FROM tblaccount;");
        $latest = $get_latest->row("LATEST");
        $acc_datetime = date('YmdHis', $timestamp);
        $account_number = 'ACC-'.$latest.$acc_datetime;

        $this->db->set("ACCOUNT_NUMBER", $account_number);
		$this->db->where("ACCOUNT_ID", $get_latest->row("LATEST"));
		$this->db->update("tblaccount");

		$this->create_requirements($account_number, $upload_document, $upload_document_with_selfie);

        // $Update_Query = $this->db->query("UPDATE tblaccount SET ACCOUNT_NUMBER = '$account_number', DEVICE_SESSION = '$device_session' WHERE ACCOUNT_ID = '$latest';");

	}
	public function create_requirements ($account_number, $upload_document, $upload_document_with_selfie) {
		// generate requirement then get requirement number
        $timestamp = time();
		$this->db->insert('tblraccountrequirement', array("ACCOUNT_NUMBER" => $account_number) );
		$get_latest = $this->db->query("SELECT MAX(ACC_REQ_ID) AS LATEST FROM tblraccountrequirement;");
        $latest = $get_latest->row("LATEST");
        $req_datetime = date('YmdHis', $timestamp);
        $requirement_number = 'REQ-'.$latest.$req_datetime;
        $this->db->set("REQUIREMENT_NUMBER", $requirement_number);
        $this->db->where("ACC_REQ_ID", $latest);
        $this->db->update("tblraccountrequirement");

		if ( isset($upload_document) && file_exists($upload_document['tmp_name']) ) {
	        //file config
	        $config['upload_path'] = './assets/files/account/document_requirement';
	        $config['allowed_types'] = 'jpg|jpeg|gif|png';
	        $config['file_name'] = $requirement_number;

	        // Validate directory if it exists
	        if (!file_exists($config['upload_path'])) {
	          mkdir( $config['upload_path'], 0777, TRUE );
	        }
	        $this->load->library('upload', $config, 'DOCUMENT_REQUIREMENT');

	        //initialize config DOCUMENT_REQUIREMENT
	        $this->DOCUMENT_REQUIREMENT->initialize( $config );

	        // set file extension to db / also to verify if file is not NULL
	        $file_extension = pathinfo($upload_document['name'], PATHINFO_EXTENSION) ? pathinfo($upload_document['name'], PATHINFO_EXTENSION) : NULL;
	        if ($file_extension) {
	        	$this->DOCUMENT_REQUIREMENT->do_upload('upload_document');

	            $this->db->set( "REQUIREMENT_FILE_EXT", $file_extension );
	            $this->db->where("REQUIREMENT_NUMBER", $requirement_number);
	            $this->db->where("ACCOUNT_NUMBER", $account_number);
	            $this->db->update("tblraccountrequirement");
	        }
	    }

	    if ( isset($upload_document_with_selfie) && file_exists($upload_document_with_selfie['tmp_name']) ) {
	        //file config
	        $config['upload_path'] = './assets/files/account/document_requirement_selfie';
	        $config['allowed_types'] = 'jpg|jpeg|gif|png';
	        $config['file_name'] = $requirement_number;

	        // Validate directory if it exists
	        if (!file_exists($config['upload_path'])) {
	          mkdir( $config['upload_path'], 0777, TRUE );
	        }
	        $this->load->library('upload', $config, 'DOCUMENT_REQUIREMENT_SELFIE');

	        //initialize config DOCUMENT_REQUIREMENT_SELFIE
	        $this->DOCUMENT_REQUIREMENT_SELFIE->initialize( $config );

	        // set file extension to db / also to verify if file is not NULL
	        $file_extension = pathinfo($upload_document_with_selfie['name'], PATHINFO_EXTENSION) ? pathinfo($upload_document_with_selfie['name'], PATHINFO_EXTENSION) : NULL;
	        if ($file_extension) {
	        	$this->DOCUMENT_REQUIREMENT_SELFIE->do_upload('upload_document');

	            $this->db->set( "SELFIE_FILE_EXT", $file_extension );
	            $this->db->where("REQUIREMENT_NUMBER", $requirement_number);
	            $this->db->where("ACCOUNT_NUMBER", $account_number);
	            $this->db->update("tblraccountrequirement");
	        }
	    }
	}

	public function read_username($username)
	{	
		$query = $this->db->query("SELECT username FROM tbl_rider WHERE username = $username");
		return $query;
	}
	public function read_registration_requirements(){
		$query = $this->db->select('REQUIREMENT_ID, REQUIREMENT_NUMBER, REQUIREMENT_NAME')
			->from("tblrequirement")->where("STATE", "ACTIVE")->get(); 
		return $query;
	}
	public function update( $id = NULL )
	{

	}

	public function delete( $id = NULL )
	{

	}

}

/* End of file rider_Model.php */
/* Location: ./application/models/rider_Model.php */