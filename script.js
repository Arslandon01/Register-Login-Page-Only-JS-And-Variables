let userData = [];  // its a Array to store user data in form of object as a array

// its a Function to store user data from input fields
function storeData() {
// We Are Storing Values Here By added By use using getElementById.value
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var rollNo = document.getElementById('roll-No').value;
  var courseName = document.getElementById('course_name').value;
  var DOB = document.getElementById('DOB').value;
  var gender = document.querySelector('input[name="gender"]:checked')?.value;

  // Validate if all required fields are filled
  // below line means if these containers are true means filled then perform a below execution
  if (name && email && password && rollNo && courseName && DOB && gender) {
    // here we are creating a user object as we learn in class 
    var user = {
      name: name,
      email: email,
      password: password,
      rollNo: rollNo,
      courseName: courseName,
      DOB: DOB,
      gender: gender
    };

    // Store the user object in the userData array means we are pushing the user object in the array
    userData.push(user);

    // Show an alert that data was stored successfully
    alert("Data stored successfully!");

    // Clear the input fields
    clearInputs();
  } else {
    alert("Please fill all fields.");
  }
}

// Function to clear the input fields after storing data
function clearInputs() {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
  document.getElementById('roll-No').value = '';
  document.getElementById('course_name').value = '';
  document.getElementById('DOB').value = '';
  document.getElementById('male').checked = false;
  document.getElementById('female').checked = false;
}

// Function to validate user login
function validateLogin() {
  var loginEmail = document.getElementById('login-email').value;
  var loginPassword = document.getElementById('login-password').value;

  // Search for a matching user in the userData array using the find method 
  var user = userData.find(function(user) {
    return user.email === loginEmail && user.password === loginPassword;
  });

  if (user) {
    // If a match is found, display the user's profile
    displayProfile(user);
  } else {
    alert("Invalid email or password.");
  }
}

// Function to display the user's profile after login
function displayProfile(user) {
  var profileInfo = document.getElementById('profile-info');

  // Display user details (name, email, rollNo, courseName, DOB, and gender)
  profileInfo.innerHTML = `
    <p><b>Name:</b> ${user.name}</p>
    <p><b>Email:</b> ${user.email}</p>
    <p><b>Roll No:</b> ${user.rollNo}</p>
    <p><b>Course Name:</b> ${user.courseName}</p>
    <p><b>DOB:</b> ${user.DOB}</p>
    <p><b>Gender:</b> ${user.gender}</p>
  `;
  
  // Show the profile section
  document.querySelector('.profile-section').style.display = 'block';
}

// Function to log out and hide the profile section
function logout() {
  // Hide the profile section and clear the login form fields
  document.querySelector('.profile-section').style.display = 'none';
  document.getElementById('login-email').value = '';
  document.getElementById('login-password').value = '';
}
