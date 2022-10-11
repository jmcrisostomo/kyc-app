<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class Ban extends CI_Controller
{
  // public function __construct()
  // {
  //   parent::__construct();
  // }

  public function index()
  {
    // CAN DETECT ANONYMOUS PROXY BUT LOADS VERY VERY VERY SLOOOOOOOOOW
    // $ports = array(8080,80,81,1080,6588,8000,3128,553,554,4480);
    // foreach($ports as $port)
    // {
    //   if(@fsockopen($_SERVER['REMOTE_ADDR'], $port, $errno, $errstr, 30))
    //   {
    //     die("ANONYMOUS PROXY");
    //   }
    // }
    if(isset($_GET['id']))
    {
      if($_GET['id'] == '1')
      {
        $this->load->view('ban');
      }

      else
      {
        redirect('home','refresh');
      }
    }

    else
    {
      redirect('home','refresh');
    }
  }
}
