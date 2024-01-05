var wraper = document.querySelectorAll(".element");
var btn = document.querySelector(".buttonsm");
var currentimg = 5;
document.getElementById("d2").innerHTML = wraper.length;

for (var i = 0; i < Math.min(5, wraper.length); i++) {
  wraper[i].style.display = "flex";
  wraper[i].style.justifyContent = "space-between"; 
  wraper[i].style.alignItems = "center";
}

btn.addEventListener("click", function () {
  for (var i = currentimg; i < currentimg + (wraper.length - 5); i++) {
    if (wraper[i]) {
      wraper[i].style.display = "flex";
      wraper[i].style.justifyContent = "space-between";
      wraper[i].style.alignItems = "center";
    }
  }
  currentimg += Math.max(5, wraper.length - currentimg);
  if (currentimg >= wraper.length) {
    event.target.style.display = "none";
    btn.style.display = "none";
  }
});

function Dropdown1() {
  document.getElementById("dropcontent").classList.toggle("show1");
}

// Get references to the subject, grade, and total elements
const subjectSelect = document.getElementById('subjects');
const gradeSelect = document.getElementById('grades');
const bookSelect = document.getElementById('books');
const totalSelection1 = document.getElementById('total1');
const totalSelection2 = document.getElementById('total2');
const totalSelection3 = document.getElementById('total3');

// Add event listeners to the subject and grade select elements
subjectSelect.addEventListener('change', updateTotalSelection);
gradeSelect.addEventListener('change', updateTotalSelection);
bookSelect.addEventListener('change', updateTotalSelection);
updateTotalSelection();
// Function to update the total selection
function updateTotalSelection() {
  const selectedSubject = subjectSelect.value;
  const selectedGrade = gradeSelect.value;
  const selectedBook = bookSelect.value;

  // Combine subject and grade selections
  const totalText1 = `${selectedSubject !== 'choose' ? 'Môn học: ' + selectedSubject: ''}`;
  const totalText2 = `${selectedGrade !== 'choose' ? 'Lớp: ' + selectedGrade: ''}`;
  const totalText3 = `${selectedBook !== 'choose' ? 'Bộ sách: ' + selectedBook: ''}`;
  totalSelection1.textContent = totalText1.trim();
  totalSelection2.textContent = totalText2.trim();
  totalSelection3.textContent = totalText3.trim();
}


