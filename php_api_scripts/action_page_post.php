    <?php 
	header('Access-Control-Allow-Origin: *');
    
    $servername = "localhost";
    $username   = "root";
    $password   = "";
    $dbname     = "split_test";
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connectionfailed: " . $conn->connect_error);
    } 
        $sql = "INSERT INTO records (name, contact, email, message)
           VALUES ('".$_POST['name']."','".$_POST['contact']."','".$_POST['email']."', '".$_POST['message']."')";
        if (mysqli_query($conn,$sql)) {
        $data = array("data" => "You Data added successfully");
           echo json_encode($data);
        } else {
           echo "Error: " . $sql . "<br>" . $conn->error;
        }
        echo "<h1> Data added successfully</h1>";
		$conn->close();
    ?>