function validateFirstName() {
    var name = document.getElementById('Fname').value;
    var errorElement = document.getElementById('FE');
    if (name.length < 3) {
        errorElement.innerHTML = "Invalid name";
        errorElement.style.color = "red";
        document.getElementById('Fname').style.borderColor = "red";
        return false;
    } else {
        errorElement.innerHTML = "Valid";
        errorElement.style.color = "green";
        document.getElementById('Fname').style.borderColor = "green";
        return true;
    }
}

function validateSecondName() {
    var name = document.getElementById('Sname').value;
    var errorElement = document.getElementById('SE');
    if (name.length < 3) {
        errorElement.innerHTML = "Invalid name";
        errorElement.style.color = "red";
        document.getElementById('Sname').style.borderColor = "red";
        return false;
    } else {
        errorElement.innerHTML = "Valid";
        errorElement.style.color = "green";
        document.getElementById('Sname').style.borderColor = "green";
        return true;
    }
}


function validateAge() {
    var age = document.getElementById('age').value;
    var errorElement = document.getElementById('ageError');
    if (isNaN(age) || age < 18) {
        errorElement.innerHTML = "Invalid age";
        errorElement.style.color = "red";
        document.getElementById('age').style.borderColor = "red";
        return false;
    } else {
        errorElement.innerHTML = "Valid";
        errorElement.style.color = "green";
        document.getElementById('age').style.borderColor = "green";
        return true;
    }
}

function validateRadioButtons() {
    var radioButtons = document.querySelectorAll('input[name="course"]');
    var isSelected = false;
    var errorElement = document.getElementById('courseError');

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            isSelected = true;
            break;
        }
    }

    if (!isSelected) {
        errorElement.innerHTML = "Please select a course";
        errorElement.style.color = "red";
        return false;
    } else {
        errorElement.innerHTML = "Valid";
        errorElement.style.color = "green";
        return true;
    }
}

function validateProblem() {
    var prblem = document.getElementById('problem').value;
    var errorElement = document.getElementById('prblm');
    if (!isNaN(prblem)) {
        errorElement.innerHTML = "WHATS YOUR PROBLEM?!";
        errorElement.style.color = "red";
        document.getElementById('problem').style.borderColor = "red";
        return false;
    } else {
        errorElement.innerHTML = "Valid";
        errorElement.style.color = "green";
        document.getElementById('problem').style.borderColor = "green";
        return true;
    }
}


function report() {
    var prblem = document.getElementById('problem').value;
    var age = document.getElementById('age').value;
    var name2 = document.getElementById('Sname').value;
    var name1 = document.getElementById('Fname').value;

    var data = `
        === User Information ===
        First Name: ${name1}
        Second Name: ${name2}
        Age: ${age}
        Your problem: ${prblem}
    `;
    document.getElementById('port').innerHTML = data;
}

function canSubmit() {
    if (validateFirstName() && validateSecondName() && validateAge() && validateRadioButtons() && validateProblem()) {
        report();  
        return true;
    } 
    else {
        return false;
    }
}