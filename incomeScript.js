document.getElementById("nextButton").addEventListener("click", function() {
    const incomeSource = document.getElementById("incomeSource").value;
    alert(`You selected: ${incomeSource}`); // Optional: Show selected income source
    window.location.href = "level.html"; // Redirect to levels page
  });