

  function validateForm(){
      var firstName = document.getElementById('firstName').value;
      var lastName  = document.getElementById('lastName').value;
      if(firstName == null || firstName == ""){
        var outputFirstName = document.getElementById('outputFirstName');
        outputFirstName.innerHTML = "First Name is required..!";
        outputFirstName.style.color = "red";
        return false;
      }
      if(lastName == null || lastName == ""){
        var outputLastName = document.getElementById('outputLastName');
        outputLastName.innerHTML = "Last Name is required..!";
        outputLastName.style.color = "red";
        return false;
      }

      else{
        return true;
      }

  }
