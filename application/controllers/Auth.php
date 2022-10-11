<?php
defined('BASEPATH') OR exit('No direct script access allowed');

// use \Firebase\JWT\JWT;

class Auth extends CI_Controller {

  public function __construct()
  {
    parent::__construct();

    // $this->check_ban_list();
  }

  private function check_xss($data, $response, $function, $ban_remarks, $ban_duration)
  {
    $verdict = 1;

    foreach($data as $key=>$value)
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
      $this->errorHandler($response.' - '.$function);

      // BAN IP
      $this->ban($ban_remarks, $ban_duration);

      echo '<script>'.$response.'</script>';

      session_destroy();
      redirect('ban?id=1','refresh');
    }
  }

  private function check_ban_list()
  {
    date_default_timezone_set('Asia/Manila');
    $timestamp = time();
    $date_now = date('Y-m-d H:i:s',$timestamp);

    if(!empty($_SERVER['HTTP_CLIENT_IP']))
    {
      $ip = $_SERVER['HTTP_CLIENT_IP'].' - SHARE INTERNET';
    }
    else if(!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
    {
      $ip = $_SERVER['HTTP_X_FORWARDED_FOR'].' - PASS FROM PROXY';
    }
    else if(!empty($_SERVER['HTTP_X_REAL_IP']))
    {
      $ip = $_SERVER['HTTP_X_REAL_IP'].' - NORMAL - HTTP_X_REAL_IP';
    }
    else
    {
      $ip = $_SERVER['REMOTE_ADDR'].' - NORMAL - REMOTE_ADDR';
    }

    $User_IP = $ip;

    // BLANK SINCE MAY MGA "NOT SET" SA RECORDS KAPAG IP LANG ANG NAKA BAN
    $account_number = '';

    if(isset($_SESSION['ACCOUNT_NUMBER']))
    {
      $account_number = $_SESSION['ACCOUNT_NUMBER'];
    }

    // JUST MAKE SURE NA WALANG BLANK ACCOUNT NUMBER DUN SA TABLE BAN LIST ,DAPAT NOT SET KAPAG WALANG ACCOUNT NUMBER
    $Check_Ban_List = $this->db->query("SELECT * FROM tblbanlist WHERE (IP_ADDRESS = '$User_IP' OR ACCOUNT_NUMBER = '$account_number') AND STATE = 'ACTIVE';");

    if($Check_Ban_List->result() != null)
    {
      redirect('ban?id=1','refresh');
    }
  }

  private function ban($remarks, $duration)
  {
    date_default_timezone_set('Asia/Manila');
    $timestamp = time();
    $date_modified = date('Y-m-d H:i:s', $timestamp);
    $date_of_ban = $date_modified;

    if(!empty($_SERVER['HTTP_CLIENT_IP']))
    {
      $ip = $_SERVER['HTTP_CLIENT_IP'].' - SHARE INTERNET';
    }
    else if(!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
    {
      $ip = $_SERVER['HTTP_X_FORWARDED_FOR'].' - PASS FROM PROXY';
    }
    else if(!empty($_SERVER['HTTP_X_REAL_IP']))
    {
      $ip = $_SERVER['HTTP_X_REAL_IP'].' - NORMAL - HTTP_X_REAL_IP';
    }
    else
    {
      $ip = $_SERVER['REMOTE_ADDR'].' - NORMAL - REMOTE_ADDR';
    }

    if(isset($_SESSION['ACCOUNT_TYPE_NUMBER']))
    {
      $account_type_number = $_SESSION['ACCOUNT_TYPE_NUMBER'];
    }

    if(isset($_SESSION['ACCOUNT_NUMBER']))
    {
      $account_number = $_SESSION['ACCOUNT_NUMBER'];
    }

    $User_IP = $ip;
    $account_type_number = 'NOT SET';
    $account_number = 'NOT SET';

    $Insert_Ban = $this->db->query("INSERT INTO tblbanlist
      (
        IP_ADDRESS,
        ACCOUNT_TYPE_NUMBER,
        ACCOUNT_NUMBER,
        REMARKS,
        DATE_OF_BAN,
        DURATION,
        DATE_MODIFIED
      )
      VALUES
      (
        '$User_IP',
        '$account_type_number',
        '$account_number',
        '$remarks',
        '$date_of_ban',
        '$duration',
        '$date_modified'
      );");
  }

  private function sign_token()
  {
    date_default_timezone_set('Asia/Manila');
    $timestamp = time();
    $date_now = date('Y-m-d H:i:s', $timestamp);

    $subject = 'SabongRepublic';
    $secret_key = 'div892354odxj9gs3450kfg09ks34y7230rzospdjg';

    $iat = $timestamp;
    $jti = $timestamp;
    $exp = strtotime(date('Y-m-d H:i:s', strtotime($date_now.' +1 day')));

    $header = json_encode(array(
      'alg' => 'HS256',
      'typ' => 'JWT'
    ));

    $payload = array(
      'sub' => $subject,
      'iat' => $iat,
      'jti' => $jti,
      'exp' => $exp
    );

    $jwt = JWT::encode( $payload, $secret_key,'HS256');
    $_SESSION['token'] = $jwt;

    return  $jwt;
    // echo  $jwt;
  }

  private function validate_token()
  {
    // --- KAPAG HINDI VALID YUNG TOKEN ETO ERROR DIRECT ACCESS ---
    // Malformed UTF-8 characters
    try
    {
      if(isset($_SESSION['token']))
      {
        date_default_timezone_set('Asia/Manila');
        $timestamp = time();

        $secret_key = 'div892354odxj9gs3450kfg09ks34y7230rzospdjg';

        // TESTING PURPOSES FOR validate_token_parent
        // $decoded_token = JWT::decode($token, $secret_key, array('HS256'));
        $decoded_token = JWT::decode($_SESSION['token'], $secret_key, array('HS256'));

        $json_encode = json_encode($decoded_token);
        $json_decode = json_decode($json_encode, true);

        $exp = $json_decode['exp'];

        if($exp > $timestamp)
        {
          return 1;
          // echo 1;
        }

        else
        {
          $this->errorHandler('Token Expired - private function validate_token in Auth.php');
          return 0;
          // echo '0 expired';
        }
      }

      else
      {
        $this->errorHandler('Token Session is not set - private function validate_token in Auth.php');
        // NOT SURE WHAT TO RETURN
        return 0; // same effect I think, since di naman ia-allow
        // echo '0 session';
      }
    }
    catch (\Exception $e)
    {
      $this->errorHandler('Signature Verification Failed(Try/Catch) - The token that the user is trying to submit is: '.$token.' - private function validate_token in Auth.php');
      // die($e->getMessage());
      return 0;
      // echo '0 exception'.$token;
    }
  }

  public function errorHandler($remarks)
  {
    if(!empty($_SERVER['HTTP_CLIENT_IP']))
    {
      $ip = $_SERVER['HTTP_CLIENT_IP'].' - SHARE INTERNET';
    }
    else if(!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
    {
      $ip = $_SERVER['HTTP_X_FORWARDED_FOR'].' - PASS FROM PROXY';
    }
    else if(!empty($_SERVER['HTTP_X_REAL_IP']))
    {
      $ip = $_SERVER['HTTP_X_REAL_IP'].' - NORMAL - HTTP_X_REAL_IP';
    }
    else
    {
      $ip = $_SERVER['REMOTE_ADDR'].' - NORMAL - REMOTE_ADDR';
    }

    $User_IP = $ip;
    $account_type_number = 'NOT SET';
    $account_number = 'NOT SET';

    date_default_timezone_set('Asia/Manila');
    $timestamp = time();
    $date_modified = date('Y-m-d H:i:s',$timestamp);

    if(isset($_SESSION['ACCOUNT_TYPE_NUMBER']))
    {
      $account_type_number = $_SESSION['ACCOUNT_TYPE_NUMBER'];
    }

    if(isset($_SESSION['ACCOUNT_NUMBER']))
    {
      $account_number = $_SESSION['ACCOUNT_NUMBER'];
    }

    $Error_Log = $this->db->query("INSERT INTO tblerrorhandler
      (
        IP_ADDRESS,
        ACCOUNT_TYPE_NUMBER,
        ACCOUNT_NUMBER,
        REMARKS,
        DATE_MODIFIED
      )
      VALUES
      (
        '$User_IP',
        '$account_type_number',
        '$account_number',
        '$remarks',
        '$date_modified'
      );");
  }

  public function login()
  {
    function anyError($error_code, $description, $file_name, $line)
    {
      $response = '{"statusCode":"500", "status":"Internal Server Error", "message":"Error Handler of Function Triggered", "description":"Custom Error Handler: ['.$error_code.'] '.$description.' - Error on line '.$line.' in '.$file_name.'."}';

      $CI =& get_instance();
      $CI->errorHandler($response);

      echo '<script>alert("Something went wrong, please contact the developers.");</script>';
      redirect('','refresh');
    }
    set_error_handler('anyError');

    // VALIDATE TOKEN
    $signature = $this->validate_token();

    if($signature == 0)
    {
      $response = 'alert("Signature Verification Failed.");';

      $this->errorHandler($response.' - public function login() in Auth.php');
      echo '<script>'.$response.'</script>';
      redirect('home/login','refresh');
    }

    if(isset($_POST['username']) && isset($_POST['password']) && $_POST['username'] != '' && $_POST['password'] != '')
    {
      $Cleaning_Username = $_POST['username'];
      $Cleaning_Password = $_POST['password'];

      // CHECK XSS
      $data = array
      (
        $Cleaning_Username,
        $Cleaning_Password
      );

      $response = 'alert("Malicious data has been detected!");';
      $function = 'public function login() in Auth.php';
      $ban_remarks = 'XSS were detected upon logging in.';
      $ban_duration = 'PERMANENT';

      // PROCEED HERE IF IT IS CLEAN, IF NOT, BAN THE IP/USER AND THEN REDIRECT THEM TO BAN CONTROLLER
      $this->check_xss($data, $response, $function, $ban_remarks, $ban_duration);

      // if(($this->security->xss_clean($Cleaning_Username, TRUE) === TRUE) && ($this->security->xss_clean($Cleaning_Password, TRUE) === TRUE))
      // {
        $Username = $Cleaning_Username;
        $Password = $Cleaning_Password;

        $Username1 = $this->db->escape($Username);
        $Password1 = $this->db->escape($Password);

        $Select_Query = $this->db->query("SELECT * FROM tblaccount WHERE USERNAME = $Username1 AND PASSWORD = $Password1");

        if($Select_Query->result() != null)
        {
          date_default_timezone_set('Asia/Manila');
          $timestamp = time();
          $device_session = date('YmdHis',$timestamp);

          $state = $Select_Query->row("STATE");
          $country = $Select_Query->row("COUNTRY");

          $account_number = $Select_Query->row('ACCOUNT_NUMBER');
          $account_type_number = $Select_Query->row('ACCOUNT_TYPE_NUMBER');
          $username = $Select_Query->row('USERNAME');
          $contact_number = $Select_Query->row('CONTACT_NUMBER');
          $email_address = $Select_Query->row('EMAIL_ADDRESS');

          if($state == 'ACTIVE')
          {
            // TURN OFF DEVICE CHECKER FOR MANUAL LOGIN/ANTI OTP SINCE WE DON'T HAVE SMS/EMAIL JUST YET
            // // CHECK DEVICE SESSION
            // if(isset($_SESSION['DEVICE_SESSION']))
            // {
              $User_Sessions = array
              (
                'ACCOUNT_NUMBER' => $account_number,
                'ACCOUNT_TYPE_NUMBER' => $account_type_number,
                'USERNAME'  => $username,
                'CONTACT_NUMBER'  => $contact_number,
                'EMAIL_ADDRESS'  => $email_address,
                'DEVICE_SESSION'  => $device_session
              );

              $this->session->set_userdata($User_Sessions);

              // UPDATE DEVICE_SESSION in tblaccount SO IT WILL LOGOUT ANY SESSION OF PREVIOUS DEVICE
              $Update_Device_Session = $this->db->query("UPDATE tblaccount SET DEVICE_SESSION = '$device_session' WHERE ACCOUNT_NUMBER = '$account_number';");

              if($account_type_number == 'ACC-TYPE-0001')
              {
                redirect('admin/dashboard','refresh');
              }

              else if($account_type_number == 'ACC-TYPE-0002')
              {
                redirect('moderator/game_select','refresh');
              }

              else if($account_type_number == 'ACC-TYPE-0003')
              {
                redirect('accounting/dashboard','refresh');
              }

              else if($account_type_number == 'ACC-TYPE-0004')
              {
                redirect('player/arena','refresh');
              }

              else if($account_type_number == 'ACC-TYPE-0005')
              {
                redirect('player/arena','refresh');
              }

              else if($account_type_number == 'ACC-TYPE-0006')
              {
                redirect('player/arena','refresh');
              }
            // }
            //
            // else if(!isset($_SESSION['DEVICE_SESSION']))
            // {
            //   $data['data'] = array
            //   (
            //     'country' => $country,
            //     'account_number' => $account_number
            //   );
            //
            //   $this->load->view('auth/send_otp', $data);
            // }
          }

          else if($state == 'INACTIVE')
          {
            echo '<script type=text/javascript>alert("Your account is currently inactive, please contact your coordinator or the administrators.");</script>';

            $this->logout();
          }

          else if($state == 'BANNED')
          {
            echo '<script type=text/javascript>alert("Your account has been banned, please contact your coordinator or the administrators.");</script>';

            $this->logout();
          }
        }

        else
        {
            echo '<script type=text/javascript>alert("Username or Password is incorrect!");</script>';
            redirect('home/login','refresh');
        }
      // }

      // else
      // {
      //   $response = 'alert("Malicious data has been detected!");';
      //
      //   $this->errorHandler($response.' - public function login() in Auth.php');
      //   echo '<script>'.$response.'</script>';
      //
      //   // BAN IP
      //   $ban_remarks = 'XSS were detected upon logging in.';
      //   $ban_duration = 'PERMANENT';
      //   $this->ban();
      //
      //   session_destroy();
      //   redirect('home','refresh');
      // }
    }

    else
    {
      $response = 'alert("There are missing data passed to the server.");';
      $this->errorHandler($response.' session or post data is missing - public function login() in Auth.php');
      echo '<script>'.$response.'</script>';
      redirect('home/login','refresh');
    }
  }

  public function logout()
  {
    // CHECK THIS SOME TIME, SOMETHING FEELS WRONG, WHY CHECK THE TOKEN, EH MAG LA-LOGOUT NA? HM,,M, NOT SURE
    // VALIDATE TOKEN
    $signature = $this->validate_token();

    if($signature == 0)
    {
      $response = 'alert("Signature Verification Failed.");';

      $this->errorHandler($response.' - public function logout() in Auth.php');
      echo '<script>'.$response.'</script>';
      redirect('home/login','refresh');
    }

    // DO NOT UNSET DEVICE SESSION
    unset($_SESSION['ACCOUNT_NUMBER']);
    unset($_SESSION['ACCOUNT_TYPE_NUMBER']);
    unset($_SESSION['USERNAME']);
    unset($_SESSION['CONTACT_NUMBER']);
    unset($_SESSION['EMAIL_ADDRESS']);

    redirect('home/login','refresh');
  }

  public function register()
  {
    // function anyError($error_code, $description, $file_name, $line)
    // {
    //   $response = '{"statusCode":"500", "status":"Internal Server Error", "message":"Error Handler of Function Triggered", "description":"Custom Error Handler: ['.$error_code.'] '.$description.' - Error on line '.$line.' in '.$file_name.'."}';

    //   $CI =& get_instance();
    //   $CI->errorHandler($response);

    //   echo '<script>alert("Something went wrong, please contact the developers.");</script>';
    //   redirect('home/registration','refresh');
    // }
    // set_error_handler('anyError');

    // VALIDATE TOKEN
    // $signature = $this->validate_token();

    // if($signature == 0)
    // {
    //   $response = 'alert("Signature Verification Failed.");';

    //   $this->errorHandler($response.' - public function register() in Auth.php');
    //   echo '<script>'.$response.'</script>';
    //   redirect('home/register','refresh');
    // }

    if(isset($_POST['username']) && isset($_POST['contact_number']) && isset($_POST['email_address']) && isset($_POST['password']))
    {
      // CHECK XSS
      $data = array
      (
        $_POST['username'],
        $_POST['contact_number'],
        $_POST['email_address'],
        $_POST['password']
      );

      $response = 'alert("Malicious data has been detected!");';
      $function = 'public function register() in Auth.php';
      $ban_remarks = 'XSS were detected upon trying to register the user.';
      $ban_duration = 'PERMANENT';

      // PROCEED HERE IF IT IS CLEAN, IF NOT, BAN THE IP/USER AND THEN REDIRECT THEM TO BAN CONTROLLER
      $this->check_xss($data, $response, $function, $ban_remarks, $ban_duration);

      $username_escaped = $this->db->escape($_POST['username']);
      $username = substr($username_escaped, 1, -1);

      $contact_number_escaped = $this->db->escape($_POST['contact_number']);
      $contact_number = substr($contact_number_escaped, 1, -1);

      $email_address_escaped = $this->db->escape($_POST['email_address']);
      $email_address = substr($email_address_escaped, 1, -1);

      $password_escaped = $this->db->escape($_POST['password']);
      $password = substr($password_escaped, 1, -1);

      // CHECK USERNAME EXIST
      $Check_Username = $this->db->query("SELECT ACCOUNT_ID FROM tblaccount WHERE USERNAME = '$username';");

      if($Check_Username->result() == null)
      {
        // CHECK COUNTRY LENGTH
        $country_length = strlen($country);

        if($country_length <= 100)
        {
          // CHECK USERNAME LENGTH
          $username_length = strlen($username);

          if($username_length >= 4)
          {
            if($username_length <= 32)
            {
              // CHECK CONTACT NUMBER LENGTH
              $contact_number_length = strlen($contact_number);
              if($contact_number_length <= 64)
              {
                // CHECK EMAIL ADDRESS LENGTH
                $email_address_length = strlen($email_address);
                if($email_address_length <= 254)
                {
                  // CHECK PASSWORD LENGTH
                  $password_length = strlen($password);

                  if($password_length >= 6)
                  {
                    if($password_length <= 64)
                    {

                      $this->Rider_Model->create_rider($username, $password, $contact_number, $email_address);

                        
                        $Update_Query = $this->db->query("UPDATE tblnetwork SET NETWORK_NUMBER = concat('NETWORK-000', '$latest') WHERE NETWORK_ID = '$latest';");

                        $User_Sessions = array
                        (
                          'ACCOUNT_NUMBER' => $account_number,
                          'ACCOUNT_TYPE_NUMBER' => 'ACC-TYPE-0006',
                          'USERNAME'  => $username,
                          'CONTACT_NUMBER'  => $contact_number,
                          'EMAIL_ADDRESS'  => $email_address,
                          'DEVICE_SESSION'  => $device_session
                        );

                        $this->session->set_userdata($User_Sessions);

                        $response = 'alert("Registration Complete.");';

                        echo '<script>'.$response.'</script>';
                        redirect('player/arena','refresh');
                      }
                    }

                    else
                    {
                      $response = 'alert("Password must not exceed 64 characters. If you are invited, please use that url to register.");';

                      $this->errorHandler($response.' - public function register() in Auth.php');
                      echo '<script>'.$response.'</script>';
                      redirect('home/registration','refresh');
                    }
                  }

                  else
                  {
                    $response = 'alert("Password must be at least 6 characters. If you are invited, please use that url to register.");';

                    $this->errorHandler($response.' - public function register() in Auth.php');
                    echo '<script>'.$response.'</script>';
                    redirect('home/registration','refresh');
                  }
                }

                else
                {
                  $response = 'alert("Email address must not exceed 254 characters. If you are invited, please use that url to register.");';

                  $this->errorHandler($response.' - public function register() in Auth.php');
                  echo '<script>'.$response.'</script>';
                  redirect('home/registration','refresh');
                }
              }

              else
              {
                $response = 'alert("Contact number must not exceed 64 characters. If you are invited, please use that url to register.");';

                $this->errorHandler($response.' - public function register() in Auth.php');
                echo '<script>'.$response.'</script>';
                redirect('home/registration','refresh');
              }
            }

            else
            {
              $response = 'alert("Username must not exceed 32 characters. If you are invited, please use that url to register.");';

              $this->errorHandler($response.' - public function register() in Auth.php');
              echo '<script>'.$response.'</script>';
              redirect('home/registration','refresh');
            }
          }

          else
          {
            $response = 'alert("Username must be at least 4 characters. If you are invited, please use that url to register.");';

            $this->errorHandler($response.' - public function register() in Auth.php');
            echo '<script>'.$response.'</script>';
            redirect('home/registration','refresh');
          }
        }

        else
        {
          $response = 'alert("Country must not exceed 100 characters. If you are invited, please use that url to register.");';

          $this->errorHandler($response.' - public function register() in Auth.php');
          echo '<script>'.$response.'</script>';
          redirect('home/registration','refresh');
        }
      }

      else
      {
        $response = 'alert("Username already exist. If you are invited, please use that url to register.");';

        $this->errorHandler($response.' - public function register() in Auth.php');
        echo '<script>'.$response.'</script>';
        redirect('home/registration','refresh');
      }
    }

    else
    {
      $response = 'alert("There are missing data passed to the server. If you are invited, please use that url to register.");';

      $this->errorHandler($response.' session or post data is missing - public function register() in Auth.php');
      echo '<script>'.$response.'</script>';
      redirect('home/registration','refresh');
    }
  }

  public function send_otp()
  {
    function anyError($error_code, $description, $file_name, $line)
    {
      $response = '{"statusCode":"500", "status":"Internal Server Error", "message":"Error Handler of Function Triggered", "description":"Custom Error Handler: ['.$error_code.'] '.$description.' - Error on line '.$line.' in '.$file_name.'."}';

      $CI =& get_instance();
      $CI->errorHandler($response);

      echo '<script>alert("Something went wrong, please contact the developers.");</script>';
      redirect('','refresh');
    }
    set_error_handler('anyError');

    // VALIDATE TOKEN
    $signature = $this->validate_token();

    if($signature == 0)
    {
      $response = 'alert("Signature Verification Failed.");';

      $this->errorHandler($response.' - public function send_otp() in Auth.php');
      echo '<script>'.$response.'</script>';
      redirect('','refresh');
    }

    if(isset($_POST['account_number']))
    {
      // CHECK XSS
      $data = array
      (
        $_POST['country'],
        $_POST['username'],
        $_POST['contact_number'],
        $_POST['email_address'],
        $_POST['password']
      );

      $response = 'alert("Malicious data has been detected!");';
      $function = 'public function send_otp() in Auth.php';
      $ban_remarks = 'XSS were detected upon trying to send the OTP.';
      $ban_duration = 'PERMANENT';

      // PROCEED HERE IF IT IS CLEAN, IF NOT, BAN THE IP/USER AND THEN REDIRECT THEM TO BAN CONTROLLER
      $this->check_xss($data, $response, $function, $ban_remarks, $ban_duration);

      date_default_timezone_set('Asia/Manila');
      $timestamp = time();
      $date_modified = date('Y-m-d H:i:s',$timestamp);

      $account_number_escaped = $this->db->escape($_POST['account_number']);
      $account_number = substr($account_number_escaped, 1, -1);

      // CHECK COUNTRY SO WE KNOW IF IT'S SMS OR EMAIL
      $Check_Country = $this->db->query("SELECT COUNTRY, CONTACT_NUMBER, EMAIL_ADDRESS FROM tblaccount WHERE ACCOUNT_NUMBER = '$account_number';");

      $country = $Check_Country->row('COUNTRY');
      $contact_number = $Check_Country->row('CONTACT_NUMBER');
      $email_address = $Check_Country->row('EMAIL_ADDRESS');

      // CHECK IF 5 MINUTES HAS PASSED BEFORE SENDING ANOTHER OTP TO SMS/EMAIL
      $Check_OTP_Date_Sent = $this->db->query("SELECT OTP_DATE_SENT FROM tblaccount WHERE ACCOUNT_NUMBER = '$account_number';");

      $date_today = strtotime($date_modified);
      $otp_date_sent = strtotime($Check_OTP_Date_Sent->row('OTP_DATE_SENT'));

      $diffence_in_minutes = round(abs($date_today - $from_time) / 60,2);

      if($diffence_in_minutes >= 5)
      {
        $OTP = mt_rand(0, 9).mt_rand(0, 9).mt_rand(0, 9).mt_rand(0, 9).mt_rand(0, 9).mt_rand(0, 9);

        if($country == 'Philippines')
        {
          // SMS

          $id = '';
          $secret_key = '';
          $recipient = $contact_number;
          // sample: 09123456789 or +639123456789
          $content = 'OTP: '.$OTP;

          $data = array
          (
            'id' => $id,
            'secret_key' => $secret_key,
            'recipient' => $recipient,
            'content' => $content,
          );

          $url = 'https://smsapi.iamtechinc.com/send';

          $ch = curl_init();
          curl_setopt($ch, CURLOPT_URL, $url);
          curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
          curl_setopt($ch, CURLOPT_POST, 1);
          curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

          $output = curl_exec($ch);

          if($output === FALSE)
          {
            curl_close($ch);

            $response = 'alert("Failed to send OTP, please contact your coordinator or the administrators.");';

            $this->errorHandler($response.' - cURL Error: '.curl_error($ch).' - public function send_otp() in Auth.php');
            echo '<script>'.$response.'</script>';
            redirect('home/login','refresh');
          }

          else
          {
            // UPDATE OTP IN tblaccount
            $Update_OTP = $this->db->query("UPDATE tblaccount SET OTP = '$OTP', OTP_DATE_SENT = '$date_modified' WHERE ACCOUNT_NUMBER = '$account_number");

            $data['data'] = array
            (
              'account_number' => $account_number
            );

            $this->load->view('auth/verify_otp', $data);
          }
        }

        else
        {
          // EMAIL
          $recipient = $email_address;
          $sender = 'sabongrepublic@sabongeroburdado.ph';
          $subject = 'OTP';

          $mailContent = 'OTP: '.$OTP;

          $this->email->from($sender, 'Sabong Republic' );
          $this->email->to($recipient);
          $this->email->subject($subject);
          $this->email->message($mailContent);
          $this->email->set_mailtype("html");

          if($this->email->send())
          {
            // UPDATE OTP IN tblaccount
            $Update_OTP = $this->db->query("UPDATE tblaccount SET OTP = '$OTP', OTP_DATE_SENT = '$date_modified' WHERE ACCOUNT_NUMBER = '$account_number");

            $data['data'] = array
            (
              'account_number' => $account_number
            );

            $this->load->view('auth/verify_otp', $data);
          }

          else
          {
            $response = 'alert("Failed to send OTP, please contact your coordinator or the administrators.");';

            $this->errorHandler($response.' - public function send_otp() in Auth.php');
            echo '<script>'.$response.'</script>';
            redirect('home/login','refresh');
          }
        }
      }

      else
      {
        $response = 'alert("Please wait 5 minutes before sending another OTP.);';

        $this->errorHandler($response.' - public function send_otp() in Auth.php');
        echo '<script>'.$response.'</script>';
        redirect('home/login','refresh');
      }
    }

    else
    {
      $response = 'alert("There are missing data passed to the server.");';

      $this->errorHandler($response.' session or post data is missing - public function send_otp() in Auth.php');
      echo '<script>'.$response.'</script>';
      redirect('home/login','refresh');
    }
  }

  public function verify_otp()
  {
    function anyError($error_code, $description, $file_name, $line)
    {
      $response = '{"statusCode":"500", "status":"Internal Server Error", "message":"Error Handler of Function Triggered", "description":"Custom Error Handler: ['.$error_code.'] '.$description.' - Error on line '.$line.' in '.$file_name.'."}';

      $CI =& get_instance();
      $CI->errorHandler($response);

      echo '<script>alert("Something went wrong, please contact the developers.");</script>';
      redirect('','refresh');
    }
    set_error_handler('anyError');

    // VALIDATE TOKEN
    $signature = $this->validate_token();

    if($signature == 0)
    {
      $response = 'alert("Signature Verification Failed.");';

      $this->errorHandler($response.' - public function verify_otp() in Auth.php');
      echo '<script>'.$response.'</script>';
      redirect('','refresh');
    }

    if(isset($_POST['account_number']) && isset($_POST['otp']))
    {
      // CHECK XSS
      $data = array
      (
        $_POST['country'],
        $_POST['username'],
        $_POST['contact_number'],
        $_POST['email_address'],
        $_POST['password']
      );

      $response = 'alert("Malicious data has been detected!");';
      $function = 'public function verify_otp() in Auth.php';
      $ban_remarks = 'XSS were detected upon trying to verify the otp.';
      $ban_duration = 'PERMANENT';

      // PROCEED HERE IF IT IS CLEAN, IF NOT, BAN THE IP/USER AND THEN REDIRECT THEM TO BAN CONTROLLER
      $this->check_xss($data, $response, $function, $ban_remarks, $ban_duration);

      date_default_timezone_set('Asia/Manila');
      $timestamp = time();
      $device_session = date('YmdHis',$timestamp);

      $account_number_escaped = $this->db->escape($_POST['account_number']);
      $account_number = substr($account_number_escaped, 1, -1);

      $otp_escaped = $this->db->escape($_POST['otp']);
      $otp = substr($otp_escaped, 1, -1);

      // CHECK IF IT IS THE CORRECT OTP
      $Check_OTP = $this->db->query("SELECT ACCOUNT_TYPE_NUMBER, USERNAME, CONTACT_NUMBER, EMAIL_ADDRESS FROM tblaccount WHERE ACCOUNT_NUMBER = '$account_number' AND OTP = '$otp';");

      if($Check_OTP->result() != null)
      {
        $account_type_number = $Check_OTP->row('ACCOUNT_TYPE_NUMBER');
        $username = $Check_OTP->row('USERNAME');
        $contact_number = $Check_OTP->row('CONTACT_NUMBER');
        $email_address = $Check_OTP->row('EMAIL_ADDRESS');

        $User_Sessions = array
        (
          'ACCOUNT_NUMBER' => $account_number,
          'ACCOUNT_TYPE_NUMBER' => $account_type_number,
          'USERNAME'  => $username,
          'CONTACT_NUMBER'  => $contact_number,
          'EMAIL_ADDRESS'  => $email_address,
          'DEVICE_SESSION'  => $device_session
        );

        $this->session->set_userdata($User_Sessions);

        // UPDATE DEVICE_SESSION in tblaccount SO IT WILL LOGOUT ANY SESSION OF PREVIOUS DEVICE
        $Update_Device_Session = $this->db->query("UPDATE tblaccount SET DEVICE_SESSION = '$device_session' WHERE ACCOUNT_NUMBER = '$account_number';");

        if($account_type_number == 'ACC-TYPE-0001')
        {
          redirect('admin/dashboard','refresh');
        }

        else if($account_type_number == 'ACC-TYPE-0002')
        {
          redirect('moderator/game_select','refresh');
        }

        else if($account_type_number == 'ACC-TYPE-0003')
        {
          redirect('accounting/dashboard','refresh');
        }

        else if($account_type_number == 'ACC-TYPE-0004')
        {
          redirect('player/arena','refresh');
        }

        else if($account_type_number == 'ACC-TYPE-0005')
        {
          redirect('player/arena','refresh');
        }

        else if($account_type_number == 'ACC-TYPE-0006')
        {
          redirect('player/arena','refresh');
        }
      }

      else
      {
        echo '<script>alert("Wrong OTP.");</script>';

        $data['data'] = array
        (
          'account_number' => $account_number
        );

        $this->load->view('auth/verify_otp', $data);
      }
    }

    else
    {
      $response = 'alert("There are missing data passed to the server.");';

      $this->errorHandler($response.' session or post data is missing - public function verify_otp() in Auth.php');
      echo '<script>'.$response.'</script>';
      redirect('home/login','refresh');
    }
  }

/* End of file Auth.php */
/* Location: ./application/controllers/Auth.php */
}
