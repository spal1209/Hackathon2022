/*Changes the page when the links at the top are pressed*/
function show(shown, hidden) {
  document.getElementById(shown).style.display = "block";
  document.getElementById(hidden).style.display = "none";
  return false;
}
