// hero-button press open my resume in new tab....
 AOS.init();
var btn = document.getElementById("hero-btn");
btn.addEventListener("click", () => {
    window.open("resume (4).pdf", "_resume");
});

// Jab button par click ho, to resume download ho jaye
document.getElementById("btn-cv").addEventListener("click", () => {
  let link = document.createElement("a");
  link.href = "resume (4).pdf";
  link.download = "Faiz_Resume.pdf";
  link.click();
});
