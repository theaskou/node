const today = new Date();
let copyRightYear = document.getElementById("copyright-year")
copyRightYear.textContent = "©️" + today.getFullYear();

console.log(copyRightYear);