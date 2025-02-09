document.addEventListener("DOMContentLoaded", function () {
  const levels = [
    { id: "level1", linkId: "startLevel1", nextLevel: "level2" },
    { id: "level2", linkId: "startLevel2", nextLevel: "level3" },
    { id: "level3", linkId: "startLevel3", nextLevel: "level4" },
    { id: "level4", linkId: "startLevel4", nextLevel: "level5" },
    { id: "level5", linkId: "startLevel5", nextLevel: null }, // No next level after Level 5
  ];

  // Function to unlock a level
  function unlockLevel(levelId, linkId) {
    const levelCard = document.getElementById(levelId);
    const levelLink = document.getElementById(linkId);

    if (levelCard && levelLink) {
      levelCard.classList.remove("locked");
      levelLink.textContent = "Start Level";
      levelLink.removeAttribute("disabled");
    }
  }

  // Check local storage for completed levels and unlock the next level
  levels.forEach((level, index) => {
    const isCompleted = localStorage.getItem(level.id) === "completed";

    if (isCompleted && level.nextLevel) {
      // Unlock the next level
      const nextLevel = levels[index + 1];
      unlockLevel(nextLevel.id, nextLevel.linkId);
    }
  });

  // Add event listeners to all level buttons
  levels.forEach((level) => {
    const levelButton = document.getElementById(level.linkId);
    if (levelButton) {
      levelButton.addEventListener("click", function () {
        // Mark the current level as completed
        localStorage.setItem(level.id, "completed");

        // Unlock the next level if it exists
        if (level.nextLevel) {
          const nextLevel = levels.find((lvl) => lvl.id === level.nextLevel);
          if (nextLevel) {
            unlockLevel(nextLevel.id, nextLevel.linkId);
          }
        }

        // Optional: Redirect to the level page or perform other actions
        console.log(`Starting ${level.id}`);
      });
    }
  });
});
