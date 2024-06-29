/* ...........................................................Xử lý dữ liệu đầu vào........................................................... */                                                     
// Chỉ cho phép người dùng nhập vào tối đa <number> số thực ngăn cách bởi dấu phẩy
function numberOnly(className) {
    var elements = document.querySelectorAll(className);
    elements.forEach(function(element) {
        element.addEventListener('input', function(event) {
            const input = event.target.value;
            let numbers = input.replace(/[^\d,]/g, ''); // Loại bỏ tất cả các ký tự không phải số thực và dấu phẩy
            event.target.value = numbers;
        });
    }); 
}

/* ...........................................................Hàm xử lý kết quả ...........................................................*/
//Hàm nhận input là dãy các chữ số, trả về mảng các số
function exchangeArray(stringInput){
    return stringInput.split(',').map(Number)
}
/* Câu 1: Tính tổng số dương trong dãy số */
function question1(numberArray) {
    return numberArray.filter(number => number>0).join(','); //hàm trả về 1 mảng chứa các giá trị dương, output là 1 string bao gồm các chữ số
}

/* Câu 2: số các số dương */
function question2(numberArray){
    return numberArray.reduce((number1, number2) => number1+number2, 0) //Output là tổng các số dương
}

/* Câu 3 : Tìm số nhỏ nhất trong mảng*/
function question3(numberArray){
    return Math.min(...numberArray) //output là giá trị nhỏ nhất trong dãy số
}
    
/* Câu 4: Tìm số dương nhỏ nhất trong mảng*/
function question4(numberArray){
    return Math.min(...numberArray); //output là giá trị nhỏ nhất trong các số dương
}
   

/* Câu 5: Tìm số chẵn nhỏ nhất trong mảng */
function question5(numberArray){
    var arrayQuestion5 = numberArray.filter(number => number%2 === 0) //Hàm filter trả về 1 mảng chứa các số chẵn
    return arrayQuestion5.length !== 0? Math.min(...arrayQuestion5) : -1  //output là số chẵn nhỏ nhất, trả về -1 nếu không có số chẵn
}

/* Câu 6: Đỗi chỗ 2 vị trí bất kỳ nhập từ người dùng, sắp xếp lại mảng */
function question6(numberArray, index1, index2){
    var position = numberArray[index2]; // vị trị mỏ neo position lấy giá trị từ index 2
        numberArray[index2] = numberArray[index1]; // gán giá trị tại index 2 = vị trí index 1
        numberArray[index1] = position;// đặt lại vị trí index1 = mỏ neo
    return numberArray.join(',')              //trả về chuỗi mới
}

/* Câu 7: Sắp hết mảng theo giá trị tăng dần */
function question7(numberArray){
    var numberArray7 = numberArray.slice();                                        //Tạo bản sao của mảng nhập vào
    return numberArray7.sort((number1, number2) => number1-number2)                //output là mảng mới sắp xếp theo thứ tự tăng dần
}


/* Câu 8: Tìm số nguyên tố đầu tiên trong mảng */
function question8(numberArray){
    function songuyento(number) {
        if (number < 2) return -1; // Nếu số nhỏ hơn 2, không phải số nguyên tố
        if (number === 2) return number; // Trường hợp đặc biệt số nguyên tố là 2
        var sqrtNumber = Math.floor(Math.sqrt(number));
        for (var i = 2; i <= sqrtNumber; i++) {
            if (number % i === 0) return -1; // Nếu có ước số khác 1 và chính nó, không phải số nguyên tố
        }
        return number; // Nếu không có ước số nào khác 1 và chính nó, là số nguyên tố
    }
    
    var numberArray8 = numberArray.map(number => songuyento(number)).filter(number => number !== -1); // Lọc ra các số nguyên tố và loại bỏ -1
        return Math.min(...numberArray8); // Hàm trả về số nhỏ nhất trong mảng số nguyên tố    
}

/* Câu 9: Nhập vào mảng mới gồm các số thực, đếm bao nhiêu số nguyên */
function question9(numberArray){
    function isInteger(number){
        return number === Math.floor(number)
    }
    return numberArray.split(',').filter(number => isInteger(number)).length; // Lọc ra các số nguyên và đếm
}

/* Câu 10: So sánh só các số dương và số âm */
function question10(numberArray){
    var array1 = numberArray.filter(number => number>0), //Mảng chứa các số dương
        array2 = numberArray.filter(number => number<0); //Mảng chứa các số âm
    return array1.length>array2.length ? 1 : 0
}


/*........................................................... Xử lý chức năng ...........................................................*/
numberOnly('input')

let mark=false,
    game=document.querySelector('.start__game'),
    correctAnswer = 0,
    inputValue= '',
    begin = true
document.querySelector('ion-icon').onclick = function(){
    if (begin){
        document.querySelector('.form-input').classList.add('active');
        begin = false
    }
}
function showGame() {
    if (mark) return;
    if (document.querySelectorAll('input')[0].value === '') {
        alert('vui lòng nhập số')
    } else {
        inputValue = document.querySelectorAll('input')[0].value; //Lấy dãy số người dùng nhập vào
        var numberArray = exchangeArray(inputValue);
        alert('Hãy ghi nhớ dãy số: '+ numberArray)
        document.querySelector('.form-input').classList.remove('active');
        document.querySelector('.timer').classList.add('active');
        document.querySelectorAll('.question')[0].classList.add('active');
        document.querySelector('ion-icon').classList.add('start');
        document.querySelector('ion-icon').setAttribute('title', 'game is loading...')
        document.querySelector('.fa-long-arrow-alt-down').style.opacity  = '0';
        game.classList.replace('text-success', 'text-warning');
        game.innerHTML = 'GAME LOADING...';
        document.querySelector('.score').innerHTML = 'Số câu trả lời đúng: '+ correctAnswer +'/10';  
        mark = true;
        var timeRemaining = 10*60;
        function setTimer() {
            var minutes = Math.floor(timeRemaining / 60),
                seconds = timeRemaining % 60;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            document.querySelector('.timer').innerHTML = 'Time Remaining: ' + minutes + ':' + seconds;
            if (timeRemaining <= 0) {
                clearInterval(timerInterval);
                document.querySelector('.timer').innerHTML = 'Hết giờ! Số câu trả lời đúng của bạn là: ' + correctAnswer;
                game.innerHTML ='END GAME!';
                game.classList.replace('text-warning', 'text-danger')
                document.querySelector('ion-icon').setAttribute('title', 'Game is over!')
            } else {
                timeRemaining--;
            }
        }

        var timerInterval = setInterval(setTimer, 1000);
        setTimer(); // Gọi ngay lần đầu tiên để hiển thị đúng thời gian ban đầu
    }
}
function showQuestion(id, index, plus){
    var  question = document.querySelectorAll(id)[index],
        questionNext =document.querySelectorAll(id)[index+plus]
    // Toggle the 'active' class on the answer
    question.classList.remove('active');
    questionNext.classList.add('active')
}

function showAnswer(id, index) {
    var answer = document.querySelectorAll(id)[index],
        show1 = document.querySelectorAll('.fa-square-plus')[index],
        show2 = document.querySelectorAll('.fa-square-minus')[index];
    
    // Toggle the 'active' class on the answer
    answer.classList.toggle('active');
    
    if (answer.classList.contains('active')) {
        show1.classList.remove('active');
        show2.classList.add('active');
    } else {
        show1.classList.add('active');
        show2.classList.remove('active');
    }
}



