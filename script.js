function toggleNav() {
  document.getElementById("navMenu").classList.toggle("active");
}

function toggleHeader() {
  const topHeader = document.getElementById("topHeader");
  topHeader.style.display = (topHeader.style.display === "flex") ? "none" : "flex";
}

function toggleDropdown(button) {
  if (window.innerWidth <= 768) {
    const dropdown = button.closest('.dropdown');
    dropdown.classList.toggle('open');
    const icon = button.querySelector('span');
    icon.textContent = dropdown.classList.contains('open') ? '–' : '+';
  }
}

function filterMembers(gender) { 
  document.querySelectorAll('.filters button').forEach(btn => btn.classList.remove('active'));
  if (gender === 'all') {
    document.querySelector('.show-all').classList.add('active');
  } else if (gender === 'female') {
    document.querySelectorAll('.filters button')[1].classList.add('active');
  } else if (gender === 'male') {
    document.querySelectorAll('.filters button')[2].classList.add('active');
  }

  document.querySelectorAll('.member-card').forEach(card => {
    if (gender === 'all') {
      card.style.display = '';
    } else if (card.getAttribute('data-gender') === gender) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}
