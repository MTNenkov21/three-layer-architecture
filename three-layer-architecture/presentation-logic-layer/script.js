function Login() {
    // Get values from the input fields
    var Username = document.getElementById("Username").value;
    var Password = document.getElementById("Password").value;

    // Read the content of the text file
    fetch('data.txt')
        .then(response => response.text())
        .then(data => {
            // Split the content into an array of lines (each line represents a user)
            var users = data.split('\n');
            var isValid = false;

            users.forEach(user => {
                var [LoggedUsername, LoggedPassword] = user.split(',');
                if (Username === LoggedUsername && Password === LoggedPassword) {
                    isValid = true;
                }
            });

         
            if (isValid) {
                alert("Valid login!");
            } else {
                alert("Invalid username or password. Please try again.");
            }
        })
        .catch(error => console.error('Error reading the file:', error));
}
