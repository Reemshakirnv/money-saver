const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const completeButton = document.getElementById("completeButton");

// Function to check if all tasks are completed
function checkCompletion() {
  const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
  completeButton.disabled = !allChecked;
}

// Add event listeners to checkboxes
checkboxes.forEach(checkbox => {
  checkbox.addEventListener("change", checkCompletion);
});

// Complete Level Button
completeButton.addEventListener("click", function () {
  // Mark Level 4 as completed
  localStorage.setItem("level4Completed", "true");
  alert("Congratulations! You've completed Level 4.");
  // Redirect back to the levels page
  window.location.href = "level.html";
});