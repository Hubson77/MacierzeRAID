// Funkcja do zmiany motywu
document.getElementById('toggleTheme').addEventListener('click', function () {
  const body = document.body;
  
  // Przełącza między 'light' a 'dark' motywem
  body.classList.toggle('dark');
  
  // Zapamiętaj aktualny motyw w Local Storage
  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Sprawdzenie, czy użytkownik wcześniej wybrał motyw
window.addEventListener('load', function () {
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    document.body.classList.add(savedTheme);
  } else {
    document.body.classList.add('light'); // Domyślny motyw to 'light'
  }
});

// Funkcja do przełączania zakładek
function showTab(tabId) {
  // Ukryj wszystkie tab-content
  const allTabs = document.querySelectorAll('.tab-content');
  allTabs.forEach(tab => tab.style.display = 'none');
  
  // Pokaż wybraną zakładkę
  const selectedTab = document.getElementById(tabId);
  selectedTab.style.display = 'block';
}
