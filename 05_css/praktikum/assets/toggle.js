function myFunction() {
    var x = document.getElementById("mytopnavbarsection");
    if (x.className === "navbar-section") {
      x.className += " responsive";
    } else {
      x.className = "navbar-section";
    }
  }