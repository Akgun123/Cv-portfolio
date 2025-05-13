
function toggleInfo(button) {
  const info = button.nextElementSibling;
  if (info.style.display === "none") {
    info.style.display = "block";
    button.textContent = "Visa mindre";
  } else {
    info.style.display = "none";
    button.textContent = "Visa mer";
  }
}


