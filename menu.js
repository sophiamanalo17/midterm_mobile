function myFunction() {
    console.log("grrr")
    document.getElementById("myDropdown").style.display = "block";
    document.getElementById("myDropdown2").style.display = "none";
    document.getElementById("myDropdown3").style.display = "none";
  }
  
  function myFunction2() {
    document.getElementById("myDropdown").style.display = "none";
    document.getElementById("myDropdown2").style.display = "block";
    document.getElementById("myDropdown3").style.display = "none";
  }
  
  function myFunction3() {
    document.getElementById("myDropdown").style.display = "none";
    document.getElementById("myDropdown2").style.display = "none";
    document.getElementById("myDropdown3").style.display = "block";
  }
  
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-item, .dropdown-item > *')) {
      document.getElementById("myDropdown").style.display = "none";
      document.getElementById("myDropdown2").style.display = "none";
      document.getElementById("myDropdown3").style.display = "none";
    }
  }