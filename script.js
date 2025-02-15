function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

// Close sidebar when clicking outside
document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("sidebar");
  const menuButton = document.querySelector(".menu");

  // Check if the click is outside the sidebar and not on the menu button
  if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
      sidebar.classList.remove("active");
  }
});

// Close sidebar when pressing ESC key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
      document.getElementById("sidebar").classList.remove("active");
  }
});

// Close sidebar when clicking a menu item
document.querySelectorAll(".sidebar ul li a").forEach(link => {
  link.addEventListener("click", function () {
      document.getElementById("sidebar").classList.remove("active");
  });
});


//counter
const targetDate = new Date('2025-02-15T00:00:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining > 0) {
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      document.getElementById('days').textContent = days;
      document.getElementById('hours').textContent = hours;
      document.getElementById('minutes').textContent = minutes;
      document.getElementById('seconds').textContent = seconds;
    } else {
      // Set all values to 0 when the countdown ends
      document.getElementById('days').textContent = '0';
      document.getElementById('hours').textContent = '0';
      document.getElementById('minutes').textContent = '0';
      document.getElementById('seconds').textContent = '0';
    }
  }

  // Initial call and periodic updates
  updateCountdown();
  setInterval(updateCountdown, 1000); // Update every second


  //Cards Script
  const cards = document.querySelectorAll('.card');
const resetBtn = document.querySelector('.reset-btn');
const cardContainer = document.querySelector('.card-container'); // Get the section container
let activeCard = null;
let cardPositions = [];

// Save initial positions
cards.forEach(card => {
    cardPositions.push({
        top: card.style.top,
        left: card.style.left,
        transform: card.style.transform
    });
});

// Add click events
cards.forEach((card, index) => {
    card.addEventListener('click', (event) => {
        event.stopPropagation();
        if (activeCard === card) return;

        resetCards();

        activeCard = card;
        const rect = card.getBoundingClientRect();
        const containerRect = cardContainer.getBoundingClientRect(); // Get section dimensions

        // Calculate center position within the section
        let centerX = containerRect.left + (containerRect.width / 2) - (rect.width / 2);
        let centerY = containerRect.top + (containerRect.height / 2) - (rect.height / 2);

        // Ensure the card stays within section bounds
        centerX = Math.max(containerRect.left, Math.min(centerX, containerRect.right - rect.width));
        centerY = Math.max(containerRect.top, Math.min(centerY, containerRect.bottom - rect.height));

        // Apply new position
        card.classList.add('selected');
        card.style.position = 'absolute';
        card.style.top = `${centerY - containerRect.top}px`; // Adjust relative to the section
        card.style.left = `${centerX - containerRect.left}px`;

        // Position reset button inside the section
        let btnX = containerRect.width - 50; // Right side of the section
        let btnY = containerRect.height - 50; // Bottom side of the section

        resetBtn.style.top = `${btnY}px`;
        resetBtn.style.left = `${btnX}px`;
        resetBtn.style.display = 'block';
    });
});

// Reset cards
function resetCards() {
    cards.forEach((card, index) => {
        card.classList.remove('selected');
        card.style.position = 'absolute';
        card.style.top = cardPositions[index].top;
        card.style.left = cardPositions[index].left;
        card.style.transform = cardPositions[index].transform;
    });

    resetBtn.style.display = 'none';
    activeCard = null;
}

  //end of cards


   // Initialize Lucide icons
   lucide.createIcons();
