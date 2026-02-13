function goNext() {
  const page = document.getElementById("page");
  page.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "page2.html";
  }, 600); // harus sama dengan durasi animasi
}
