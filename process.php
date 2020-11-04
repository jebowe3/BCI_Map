<?php
$fieldA = $_POST["location"];
$fieldB = $_POST["episcopalName"];
$fieldC = $_POST["episcopalInfo"];
$fieldD = $_POST["name"];
$fieldE = $_POST["pointType"];
$fieldF = $_POST["popupContent"];
$fieldG = $_POST["long"];
$fieldH = $_POST["lat"];
$fieldI = $_POST["startYear"];
$fieldJ = $_POST["endYear"];

$keys = array($fieldA,$fieldB,$fieldC,$fieldD,$fieldE,$fieldF,$fieldG,$fieldH,$fieldI,$fieldJ); //THIS IS WHERE YOU PUT THE FORM ELEMENTS ex: array('$fieldA','$fieldB',etc)
$csv_line = $keys;
foreach( $keys as $key ){
    array_push($csv_line,'' . $_GET[$key]);

}
$fname = 'data/user-input.csv'; //NAME OF THE FILE
$csv_line = implode(',',$csv_line);
if(!file_exists($fname)){$csv_line = $csv_line."\r\n" ;}
$fcon = fopen($fname,'a');
$fcontent = $csv_line;
fwrite($fcon,$csv_line);
fclose($fcon);
?>
