<?php
//ini_set("auto_detect_line_endings", true);
//date_default_timezone_set('Asia/Bangkok');
/**
 * Created by PhpStorm.
 * User: emmanuel.manyike
 * Date: 16/02/19
 * Time: 1:29 PM
 */
function csv_to_array($filename='/Users/emmanuel.manyike/Desktop/use.csv', $delimiter=';')
{
    if(!file_exists($filename) || !is_readable($filename)){

        echo "file does not exist\n";
    }


    $header = NULL;
    $data = array();
    if (($handle = fopen($filename, 'r')) !== FALSE)
    {
        echo "file exist\n";
        $handle2 = fopen('/private/var/www/spree.local/htdocs/app/code/local/Touchlab/SpreeDbUpdates/data/spreedbupdates_setup/data-upgrade-0.1.52-0.1.53.php','w');
        $counter = 0;
        while ($row = fgets($handle))
        {
            $row = trim($row,"\r\n");
            $sizedata = explode(';', $row);

            $string =  "UPDATE eav_attribute_option SET sort_order = $sizedata[1] WHERE option_id = $sizedata[0]; ".PHP_EOL;
            if($handle2) {
                fwrite($handle2, $string);
            } else {
                echo "inside else";
                echo $string;
            }

        }
        echo "done bro";
        fclose($handle2);
        fclose($handle);
    }
    return $data;

}

//UPDATE eav_attribute_option SET sort_order = 0 WHERE option_id = 832;
 $csvData = csv_to_array();
