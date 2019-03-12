//dash bar//
function openNav() {
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("main").style.marginLeft = "50px";
    document.getElementById("mySidebar").style.height = "83.5%";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  //drop down//
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  $(document).ready(function() {
    $("#register").click(function() {
    var Username = $("#Username").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var cpassword = $("#cpassword").val();
    var accountype = $("#accountype").val();
    if (Username == '' || email == '' || password == '' || cpassword == '' || accountype == '') {
    alert("Please fill all fields...!!!!!!");
    } else if ((password.length) < 8) {
    alert("Password should atleast 8 character in length...!!!!!!");
    } else if (!(password).match(cpassword)) {
    alert("Your passwords don't match. Try again?");
    } else {
    $.post("register.php", {
    Username1: Username,
    email1: email,
    password1: password
    }, function(data) {
    if (data == 'You have Successfully Registered.....') {
    $("form")[0].reset();
    }
    alert(data);
    });
    }
    });
    });