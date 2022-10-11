<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta charset="UTF-8">
        <style>
            .trends
            {
              border-spacing: 0; border-collapse: collapse;
            }

            .trends th
            {
              padding: .5em;
            }

            .trends td
            {
              border: 1px solid; width: 2em; height: 2em;
            }

            .trends .light
            {
              background: #eee;
            }

            .team_a
            {
              background: red;
              border-radius: 50%;
              width: 30px;
              height: 30px;
            }

            .team_b
            {
              background: blue;
              border-radius: 50%;
              width: 30px;
              height: 30px;
            }

            .draw
            {
              background: yellow;
              border-radius: 50%;
              width: 30px;
              height: 30px;
            }

            .cancelled
            {
              background: black;
              border-radius: 50%;
              width: 30px;
              height: 30px;
            }
        </style>
    </head>
    <body>
        <label>Winning Streak -></label>
        <table id="table" class="trends">
            <tbody>
              <?php
                date_default_timezone_set('Asia/Manila');
                $timestamp = time();
                $date_today = date('Y-m-d',$timestamp);

                $Show_Trends = $this->db->query("SELECT * FROM tblmatch WHERE GAME_TYPE_NUMBER = 'G-TYPE-0001' AND STATUS IN ('END','DRAW','CANCELLED') AND DATE_MODIFIED LIKE  '%$date_today%';");

                $i = 1;

                if($Show_Trends->result() != null)
                {
                  $previous = '';

                  foreach($Show_Trends->result() as $object)
                  {
                    // CHECK IF PREVIOUS IS BLANK OR MATCH
                    if($previous == '')
                    {
                      echo '<tr>';
                    }

                    if($object->STATUS == 'END')
                    {
                      $Team_A = $object->TEAM_A;
                      $Team_B = $object->TEAM_B;

                      if($object->WINNER == $Team_A)
                      {
                        if($previous == '')
                        {
                          echo '<td class="light"><div class="team_a"></div></td>';
                        }

                        else
                        {
                          if($previous == $Team_A)
                          {
                            echo '<td class="light"><div class="team_a"></div></td>';
                          }

                          else
                          {
                            echo '</tr>';
                            echo '<tr>';
                            echo '<td class="light"><div class="team_a"></div></td>';
                          }
                        }

                        // TRIGGER UPDATE PREVIOUS
                        $previous = $Team_A;
                      }

                      else if($object->WINNER == $Team_B)
                      {
                        if($previous == '')
                        {
                          echo '<td class="light"><div class="team_b"></div></td>';
                        }

                        else
                        {
                          if($previous == $Team_B)
                          {
                            echo '<td class="light"><div class="team_b"></div></td>';
                          }

                          else
                          {
                            echo '</tr>';
                            echo '<tr>';
                            echo '<td class="light"><div class="team_b"></div></td>';
                          }
                        }

                        // TRIGGER UPDATE PREVIOUS
                        $previous = $Team_B;
                      }
                    }

                    else if($object->STATUS == 'DRAW')
                    {
                      if($previous == '')
                      {
                        echo '<td class="light"><div class="draw"></div></td>';
                      }

                      else
                      {
                        if($previous == 'DRAW')
                        {
                          echo '<td class="light"><div class="draw"></div></td>';
                        }

                        else
                        {
                          echo '</tr>';
                          echo '<tr>';
                          echo '<td class="light"><div class="draw"></div></td>';
                        }
                      }

                      // TRIGGER UPDATE PREVIOUS
                      $previous = 'DRAW';
                    }

                    else if($object->STATUS == 'CANCELLED')
                    {
                      if($previous == '')
                      {
                        echo '<td class="light"><div class="cancelled"></div></td>';
                      }

                      else
                      {
                        if($previous == 'CANCELLED')
                        {
                          echo '<td class="light"><div class="cancelled"></div></td>';
                        }

                        else
                        {
                          echo '</tr>';
                          echo '<tr>';
                          echo '<td class="light"><div class="cancelled"></div></td>';
                        }
                      }

                      // TRIGGER UPDATE PREVIOUS
                      $previous = 'CANCELLED';
                    }
                  }
                }
              ?>


              <!-- <tr>
                  <td class="light"><div class="team_a"></div></td>
                  <td class="light"><div class="team_b"></div></td>
                  <td class="light"><div class="draw"></div></td>
                  <td class="light"><div class="cancelled"></div></td>
                  <td class="light"></td>
                  <td class="light"></td>
                  <td class="light"></td>
                  <td class="light"></td>
              </tr> -->

                <!-- <tr>
                    <td class="light"><div class="team_a"></div></td>
                    <td class="light"><div class="team_a"></div></td>
                    <td class="light"><div class="team_a"></div></td>
                    <td class="light"><div class="team_a"></div></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                </tr>
                <tr>
                    <td class="light"><div class="team_b"></div></td>
                    <td class="light"><div class="team_b"></div></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                </tr>
                <tr>
                    <td class="light"><div class="draw"></div></td>
                    <td class="light"><div class="draw"></div></td>
                    <td class="light"><div class="draw"></div></td>
                    <td class="light"><div class="draw"></div></td>
                    <td class="light"><div class="draw"></div></td>
                    <td class="light"><div class="draw"></div></td>
                    <td class="light"><div class="draw"></div></td>
                    <td class="light"></td>
                </tr>
                <tr>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                </tr>
                <tr>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                </tr>
                <tr>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                </tr>
                <tr>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                </tr>
                <tr>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                    <td class="light"></td>
                </tr> -->
            </tbody>
        </table>
    </body>

    <script>
      var table = document.getElementsByTagName('table')[0];

      function fillTable()
      {
        var trs = table.getElementsByTagName('tr');
        var len = trs.length;
        var max = 0;
        var td;

        // SEARCH LONGEST TABLE ROW VIA NUMBER OF CHILDREN
        for (var i = len; i--;)
        {
          if(trs[i].children.length > max)
          {
            max = trs[i].children.length;
          }
        }

        // FILL OTHER ROWS USING THE FINAL VALUE OF MAX
        for (var j = len; j--;)
        {
          while (trs[j].children.length < max)
          {
            td = document.createElement('td');
            trs[j].appendChild(td);
          }
        }
      }

      fillTable();
    </script>
</html>
