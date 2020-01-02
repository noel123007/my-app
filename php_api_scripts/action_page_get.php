<?php 
	header('Access-Control-Allow-Origin: *');
    header("Content-Type: application/json; charset=UTF-8");
    $servername = "localhost";
    $username   = "root";
    $password   = "";
    $dbname     = "split_test";
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    	$sql = "SELECT name,contact,email,message from records";
    	$result = $conn->query($sql);

		if ($result->num_rows > 0) {
            $products_arr=array();
            $products_arr["records"]=array();

        while($row = $result->fetch_assoc()) {
            $product_item=array(
            "namee" => $row["name"],
            "contact" => $row["contact"],
            "email" => $row["email"],
            "message" => $row["message"],
        );
 
        array_push($products_arr["records"], $product_item);
        }
        // set response code - 200 OK
        http_response_code(200);
     
        // show products data in json format
        echo json_encode($products_arr);
    }
		//     echo "<table><tr><th>name</th><th>contact</th><th>email</th><th>Message</th></tr>";
		//     // output data of each row
		//     while($row = $result->fetch_assoc()) {
		//         echo "<tr><td>".$row["name"]."</td><td>".$row["contact"]."</td><td>".$row["email"]."</td><td>".$row["message"]."</td></tr>";
		//     }
		//     echo "</table>";
		// } else {
		//     echo "0 results";
		// }
		$conn->close();
    ?>