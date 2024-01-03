// time remainder
var seconds = 0;
var mins = 0;
var hours = 0;
var res = 0;

var counttime = setInterval(function() {
    res += 1;
    seconds = res%60;
    
    mins = Math.floor((res / 60) % 60);
    if(mins % 60 == 0) {mins = 0;}
    
    hours = Math.floor(res / 3600);
}, 1000);

var x = setInterval(function() {
  		document.getElementById("time").innerHTML = hours + ":" + mins + ":" + seconds;
}, 1000);

function stopTimer() {
  clearInterval(counttime); // Dừng bộ đếm
  clearInterval(x);
  document.getElementById("time_result").textContent = "Thời gian làm bài: " + hours + ":" + mins + ":" + seconds;
}

// create checkbox
const container = document.getElementById('container');
let num_ans = document.querySelectorAll('.ans').length;

for (let i = 0; i < num_ans; i++) {
    const box = document.createElement('div');
    box.classList.add('popup-content');
    box.textContent = i + 1;
    container.appendChild(box);
}


// checked
let box = document.querySelectorAll('.popup-content');
const questions = document.querySelectorAll('.ans');
    questions.forEach((question, index) => {
        const radioButtons = question.querySelectorAll('input[type="radio"]');
        
        radioButtons.forEach(button => {
          button.addEventListener('change', function() {
            const selectedValue = this.value; // đáp án A hay B hay C hay D
            box[index].style.backgroundColor = '#f48c06';
            box[index].style.color = '#fff';
            box[index].style.border = '0.5px solid #fff';
            console.log(`Câu hỏi ${index + 1} đã chọn đáp án ${selectedValue}`);
          });
        });
    });

// open Bảng câu hỏi
function Open_table_qus(){
  var popup = document.getElementById('bg-qus');
  popup.style.display = 'block';
}

function Close_table_qus(){
  var popup = document.getElementById('bg-qus');
  popup.style.display = 'none';
}

function Open_pop_btn(){
  var popup = document.getElementById('bg-sub');
  popup.style.display = 'block';
}

function Close_pop_btn(){
  var popup = document.getElementById('bg-sub');
  popup.style.display = 'none';
}

function Open_pop_result(){
  var popup = document.getElementById('bg-result');
  popup.style.display = 'block';
}

function Close_pop_result(){
  var popup = document.getElementById('bg-result');
  popup.style.display = 'none';
}

function customRoundToTwoDecimals(number) {
  let roundedNumber = Math.round(number * 100) / 100;
  return roundedNumber;
}

function generateRandomArray() {
  var characters = ['A', 'B', 'C', 'D'];
  var randomArray = [];

  for (var i = 0; i < 50; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      randomArray.push(characters[randomIndex]);
  }

  return randomArray;
}


// check answers
function CheckAnswers() {
  var correctAnswers = generateRandomArray();
  var score = 0;
  // disable radio button after submit
  var radioButtons = document.querySelectorAll('input[class="answ"]');
  radioButtons.forEach(function(radio) {
      radio.disabled = true;
  });

  // check 
  for (var i = 1; i <= num_ans; i++) {
    var userAnswer = document.querySelector('input[name="qus' + i + '"]:checked');

    // if userAnswer === null
    if(!userAnswer) {
      var correct_ans = document.querySelector('label[name="qusb' + i + correctAnswers[i-1] + '"]');
      console.log(correct_ans)

      correct_ans.classList.add('correct');
      continue;
    }
    var userAnswerbox = document.querySelector('label[name="qusb' + i + userAnswer.value + '"]');

    // if correct
    if(userAnswer.value === correctAnswers[i-1]){
      score++;
      userAnswerbox.classList.add('correct');
    }
    // if incorrect
    else{
      userAnswerbox.classList.add('incorrect');
      var correct_ans = document.querySelector('label[name="qusb' + i + correctAnswers[i-1] + '"]');
      correct_ans.classList.add('correct');
    }
  }

  score
  document.getElementById('result').innerHTML = "Đáp án đúng: " + score + "/" + num_ans;

  let x = document.getElementById('p_point')
  x.textContent = customRoundToTwoDecimals(score/num_ans * 10);
  x.style.width = '100px';
  x.style.display = 'flex';
  x.style.justifyContent = 'space-around';
}