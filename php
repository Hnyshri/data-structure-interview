error types in PHP- 
    1. Warning Error
    2. Notice Error
    3. Parse Error
    4. Fatal Error

=========================================

$arr1 = array(1,2,4,5,7); 
$arr2 = range(1,max($arr1));                                                     
$missing = array_diff($arr2,$arr1); // (3,6)
===================================

$mask = 5;
$mask |= 10;
echo $mask;
// 15

====================================
$i = 2;
while (++$i)
{   
	while ($i --> 0)
		print $i;
}

// output = 210

=======================================

$n = 47;
$d = 7;

for ($i = 0; $i <= $n; $i++) {
    if ($i == $d || isDigitPresent($i, $d)) {
        echo $i, " ";
    }
}

function isDigitPresent($x, $d)
{
    while ($x > 0) {
        if ($x % 10 == $d) {
            break;
        }
        $x = $x / 10;
    }
    return ($x > 0);
}

==================================