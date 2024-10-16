function validateForm() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("Age").value;
    var address = document.getElementById("Address").value;
    var email = document.getElementById("Email").value;

    if (name == "") {
        alert("name is empty");
        return false;
    }
    if (age == "") {
        alert("age is empty");
        return false;
    }
    else if (age < 1) {
        alert("age should be a positive number");
        return false;
    }


    if (address == "") {
        alert("address is empty");
    }

    if (email == "") {
        alert("email is empty");
        return false;
    }
    else if (!email.includes("@")) {
        alert("invalid email address");
        return false;

    }
    return true;
}
//function to show data
function showData() {
    var peoplelist;
    if (localStorage.getItem("peoplelist") == null) {
        peoplelist = [];
    }
    else {
        peoplelist = JSON.parse(localStorage.getItem("peoplelist"))
    }

    var html = "";

    peoplelist.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.age + "</td>";
        html += "<td>" + element.address + "</td>";
        html += "<td>" + element.email + "</td>";
        html +=
            '<td><button onclick= "deleteData(' +
            index + ')" class="btn btn-danger">Delete</button> <button onclick="updateData(' + index + ')" class="btn btn-warning m-2 ">Edit</button></td>';
        html += "</tr>";
    });


    document.querySelector("#crudTable tbody").innerHTML = html;
}
//load all data when document or page load ed
document.onload = showData();

//function to add data
function AddData() {
    if (validateForm() == true) {
        var name = document.getElementById("name").value;
        var age = document.getElementById("Age").value;
        var address = document.getElementById("Address").value;
        var email = document.getElementById("Email").value;

        var peoplelist;
        if (localStorage.getItem("peoplelist") == null) {
            peoplelist = [];
        }
        else {
            peoplelist = JSON.parse(localStorage.getItem("peoplelist"));
        }

        peoplelist.push({
            name: name,
            age: age,
            email: email,
            address: address,
        });

        localStorage.setItem("peoplelist", JSON.stringify(peoplelist));
        showData();
        document.getElementById("name").value = "";
        document.getElementById("Age").value = "";
        document.getElementById("Address").value = "";
        document.getElementById("Email").value = "";
    }
}
//FUNCTION TO DELETE DATA
function deletedata(index) {
    var peoplelist;
    if (localStorage.getItem("peoplelist") == null) {
        peoplelist = [];
    }
    else {
        peoplelist = JSON.parse(localStorage.getItem
            ("peoplelist"));
    }
}
