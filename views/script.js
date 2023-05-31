function searchContent() {
  event.preventDefault(); 
  const search = document.getElementById("search").value;
  window.location.href = `/customers?search=${search}`;
}
