document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll('#taskForm input[type="checkbox"]');
  const completeButton = document.getElementById('completeButton');

  // Function to check if all checkboxes are checked
  function checkCompletion() {
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
    completeButton.disabled = !allChecked;
  }

  // Add event listeners to all checkboxes
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', checkCompletion);
  });

  // Redirect to the levels page and mark Level 1 as completed
  completeButton.addEventListener('click', function () {
    if (!completeButton.disabled) {
      // Mark Level 1 as completed in local storage
      localStorage.setItem("level1", "completed");

      // Redirect to the levels page
      window.location.href = "level.html";
    }
  });
});