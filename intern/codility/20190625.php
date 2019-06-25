<?php
//pick apple problem

$A = [6, 1, 4, 6, 3, 2, 7, 4];
$K = 3;
$L = 2;

// $A = [10, 19, 15];
// $K = 2;
// $L = 2;



$S = 0;
if ($K + $L > count($A)) {
    echo -1;
}
for ($n = 0; ($n + $K) <= (count($A) - $L); $n++) {
    $x = 0;
    for ($a = 0; $a < $K; $a++) {
        $x = $x + $A[$n + $a];
    }

    for ($m = ($n + $K); ($m + $L) <= count($A); $m++) {
        $y = 0;
        for ($b = 0; $b < $L; $b++) {
            $y = $y + $A[$m + $b];
        }
        // echo "K= " . $K . " L= " . $L . " | ";
        // echo "a= " . $a . " b= " . $b . " | ";
        // echo "n= " . $n . " m= " . $m . " | ";
        // echo "x= " . $x . " y= " . $y . " | " .  "<br>";
        if ($x + $y > $S) {
            $S = ($x + $y);
            // echo "new big S= " . $S . "<br>";
        }
    }
}
if($S!=0){
echo $S;
}