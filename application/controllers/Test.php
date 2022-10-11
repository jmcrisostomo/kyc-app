<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Test extends CI_Controller {


  public function __construct()
	{
		parent::__construct();

    $x = 0;

    if($x == 1)
    {
      $this->test_function();
    }
	}

  public function test_array()
  {
    $my_array[0] = 'first data';
    $my_array[1] = '<script>alert("asdasdasdasdasd");</script>';
    $my_array[2] = 'third data';

    // or

    $my_array = array
    (
      'first data',
      '<script>alert("asdasdasdasdasd");</script>',
      'third data'
    );

    $this->array_catcher($my_array);
  }

  public function array_catcher($my_array)
  {
    $verdict = 1;

    foreach($my_array as $key=>$value)
    {
      if($this->security->xss_clean($value, TRUE) === TRUE)
      {

      }

      else
      {
        $verdict = 0;
      }
    }

    if($verdict == 0)
    {
      // INSERT SA BAN LIST
      // ALERT MALICIOUS DATA DETECTED
      // REDIRECT SA BAN CONTROLLER
    }

    echo $verdict;

    // echo $my_array[0];
    // echo '<br>';
    // echo $my_array[1];
    // echo '<br>';
    // echo $my_array[2];
    // echo '<br>';
  }

  public function test_xss()
  {
    echo $data_1 = $_GET['data_1'];
    echo '<br><br>';
    echo $data_2 = $_GET['data_2'];

    echo '<br><br>';
    echo '<br><br>';

    // // XSS CLEAN BEFORE ESCAPING
    // if(($this->security->xss_clean($data_1, TRUE) === TRUE) && ($this->security->xss_clean($data_2, TRUE) === TRUE))
    // {
    //   // escape them
    //   echo 'clean';
    // }
    //
    // else
    // {
    //   echo 'ban that shit';
    // }

    // BEFORE ESCAPING XSS CLEAN

    echo $data_1 = $this->db->escape($data_1);
    echo '<br><br>';
    echo $data_2 = $this->db->escape($data_2);

    // if(($this->security->xss_clean($data_1, TRUE) === TRUE) && ($this->security->xss_clean($data_2, TRUE) === TRUE))
    // {
    //   echo 'clean';
    // }
    //
    // else
    // {
    //   echo 'ban that shit';
    // }
  }




  private function test_function()
  {
    // echo '<br>i am test function<br>';
    // ALERT DOES NOT WORK, MABILIS MASYADO
    echo '<script>alert("You are currently banned by the Sabong Republic Security System, please contact your coordinator or the administrators.");</script>';
    header('HTTP/1.1 403 Forbidden Access');
    header('Location: https://www.google.com?Message=You are currently banned by the Sabong Republic Security System, please contact your coordinator or the administrators.');

    // header("Location:index.php?Message=You are currently banned by the Sabong Republic Security System, please contact your coordinator or the administrators.");
    //
    // use urlencode()

    // $Message = urlencode("Some error occured please try after some time ");
    // header("Location:index.php?Message=".$Message);
    // die;
    // and on index.php:
    //
    // if(isset($_GET['Message'])){
    //     echo $_GET['Message'];
    // }
  }

  public function load_me()
  {
    redirect('player','refresh');
    // echo '<br>i am load me<br>';
    $message = urlencode('You are currently banned by the Sabong Republic Security System, please contact your coordinator or the administrators.');

    echo $message;
  }

  public function index()
  {
    $this->load->view('testing_file_upload');
  }

  public function do_upload(){
    if (isset($_FILES['Add_Image'])) {
      // $config['upload_path'] = "./assets/images/transaction/";
      // $config['allowed_types'] = $allowed_types;
      // // IN KILOBYTE
      // // $config['max_size']  = '25600';  // 25mb
      // $config['max_size']  = $max_file_size / 1024; // 25mb
      // $config['file_name'] = $Image_Name;
      // $this->load->library('upload',$config,'AssetImage');
      // $this->AssetImage->initialize($config);

      $config['upload_path']          = './assets/';
      $config['allowed_types']        = 'gif|jpg|png';
      $config['max_size']             = 25600;
      $config['max_width']            = 102400;
      $config['max_height']           = 76800;

      $this->load->library('upload', $config);

      // $this->upload->do_upload('Add_Image');

      if ( ! $this->upload->do_upload('Add_Image'))
      {
              $error = array('error' => $this->upload->display_errors());

              // $this->load->view('upload_form', $error);
              print_r($error);
      }
      else
      {
              $data = array('upload_data' => $this->upload->data());
              print_r($data);

              // $this->load->view('upload_success', $data);
      }


      // $config['upload_path'] = './assets/images/test/';
      // $config['allowed_types'] = 'jpg|jpeg|gif|png|pdf|doc|docx';
      // $config['file_name'] = 'Test_Filename';
      // $config['overwrite'] = TRUE;

      // if (!file_exists($config['upload_path'])) {
      //   mkdir( $config['upload_path'], 0777, true );
      // }

      // $this->load->library( 'upload', $config );
      // $this->upload->initialize( $config, TRUE );

      // // $file_extension = pathinfo($_FILES['Add_Image'], PATHINFO_EXTENSION) ? pathinfo($_FILES['Add_Image'], PATHINFO_EXTENSION) : null;

      // // if ($file_extension) {
      //   // FOR NEW FILES
      //   $this->upload->do_upload('Add_Image');
      // // }
    }
  }

}

/* End of file Test.php */
/* Location: ./application/controllers/Test.php */
