/* ...........................................................Xử lý dữ liệu đầu vào........................................................... */                                                     
// Chỉ cho phép người dùng nhập vào tối đa <number> số thực ngăn cách bởi dấu phẩy
function numberOnly(className, index) {
    var elements = document.querySelectorAll(className);
    var eliminate = index.split(',').map(num => parseInt(num.trim(), 10)); // Chuyển đổi chuỗi thành mảng số

    elements.forEach((element, i) => {
        if (eliminate.includes(i)) {
            element.addEventListener('input', function(event) {
                const input = event.target.value;
                let numbers = input.replace(/[^\d.,-]/g, ''); // Chỉ cho phép nhập vào số, dấu chấm, dấu phẩy, và dấu gạch ngang
                event.target.value = numbers;
            });
        }
    });
}
function numberOnly1(className, index) {
    var elements = document.querySelectorAll(className);
    var eliminate = index.split(',').map(num => parseInt(num.trim(), 10)); // Chuyển đổi chuỗi thành mảng số

    elements.forEach((element, i) => {
        if (eliminate.includes(i)) {
            element.addEventListener('input', function(event) {
                const input = event.target.value;
                let numbers = input.replace(/[^\d\-,]/g, ''); // Chỉ cho phép số nguyên ngăn cách bởi dấu phẩy
                event.target.value = numbers;
            });
        }
    });
}
function numberOnly2(className, index) {
    var elements = document.querySelectorAll(className);
    var eliminate = index.split(',').map(num => parseInt(num.trim(), 10)); // Chuyển đổi chuỗi thành mảng số

    elements.forEach((element, i) => {
        if (!eliminate.includes(i)) {
            element.addEventListener('input', function(event) {
                const input = event.target.value;
                let numbers = input.replace(/[^\d-]/g, ''); // Chỉ cho phép số nguyên
                event.target.value = numbers;
            });
        }
    });
}

/* Chỉ cho phép người dùng nhập vào tối đa <number> số thực ngăn cách bởi dấu phẩy*/
function preventNumber(id, number){
    document.querySelector(id).addEventListener('input', function(event){
        let numberTarget=event.target.value,
            numberArray=numberTarget.split(',')
            if (numberArray.length>number){
                
                event.target.value=numberArray.slice(0, number).join(',')
            }
    })
}

numberOnly('input', '19')
numberOnly1('input', '0, 2, 12, 13, 15')
numberOnly2('input', '0, 2, 12, 13, 15, 19')
preventNumber('.user__choose',2)

/* ...........................................................Hàm xử lý kết quả ...........................................................*/
//Hàm nhận input là dãy các chữ số, trả về mảng các số
function exchangeArray(stringInput){
    return stringInput.split(',').map(Number)
}
//Hàm lọc các giá trị dương
function positive(numberArray){
    return numberArray.filter(number => number>0)
}
/* Câu 1: Tính tổng số dương trong dãy số  */
function question1(numberArray){
    var number = positive(numberArray)
    return number!=0 ? number.reduce((number1, number2) => number1+number2, 0) : -1//Output là tổng các số dương
}
/* Câu 2: Số các số dương*/
function question2(numberArray) {
    var number = positive(numberArray).length;
    return number!==0? number : -1 //hàm trả về  chứa các giá trị dương, output là số các số dương
}

/* Câu 3 : Tìm số nhỏ nhất trong mảng*/
function question3(numberArray){
    return Math.min(...numberArray) //output là giá trị nhỏ nhất trong dãy số
}
    
/* Câu 4: Tìm số dương nhỏ nhất trong mảng*/
function question4(numberArray){
    var positiveArray = positive(numberArray)
    return positiveArray.length !==0? question3(positiveArray) : -1; //output là giá trị nhỏ nhất trong các số dương
}
   

/* Câu 5: Tìm số chẵn cuối cùng trong mảng */
function question5(numberArray){
    var arrayQuestion5 = numberArray.filter(number => number%2 === 0) //Hàm filter trả về 1 mảng chứa các số chẵn
    return arrayQuestion5.length !== 0? arrayQuestion5[arrayQuestion5.length-1] : -1  //output là số chẵn cuối cùng, trả về -1 nếu không có số chẵn
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
        return numberArray8.length!==0 ? Math.min(...numberArray8) : -1; // Hàm trả về số nhỏ nhất trong mảng số nguyên tố    
}

/* Câu 9: Nhập vào mảng mới gồm các số thực, đếm bao nhiêu số nguyên */
function question9(numberArray){
    function isInteger(number){
        return number === Math.floor(number) //trả về giá trị true nếu number là số nguyên
    }
    var interger = numberArray.filter(number => isInteger(number)).length;
    return interger !==0? interger : -1 // Lọc ra các số nguyên và đếm
}

/* Câu 10: So sánh só các số dương và số âm */
function question10(numberArray){
    var array1 = numberArray.filter(number => number>0), //Mảng chứa các số dương
        array2 = numberArray.filter(number => number<0); //Mảng chứa các số âm
    return array1.length>=array2.length ? 1 : 0 // trả về 1 nếu số dương nhiều hơn, 0 nếu số âm nhiều hơn
}


/*........................................................... Xử lý chức năng ...........................................................*/

var begin = true,
    startGame = false
while (begin){
    let game=document.querySelector('.start__game'),
    time = document.querySelector('.timer'),
    let__go = document.querySelector('ion-icon'),
    userScore = document.querySelector('.score'),
    score = 0,
    inputValue = ''
    numberArray = 0,
    inCorrect = true,
    timeRemaining = 10*60
    function showQuestion(id, index, plus){
        var question = document.querySelectorAll(id)[index],
            questionNext =document.querySelectorAll(id)[index+plus]
            question.classList.remove('active');
            questionNext.classList.add('active')
    }
    
    
let__go.onclick = function(){
    document.querySelector('.form-input').classList.add('active');
    startGame = true
    while (startGame) {
        document.querySelectorAll('.show__answer').forEach((element, index) => {
           
            element.onclick = function(){
                var answer = document.querySelectorAll('.answer')[index],
                response = document.querySelectorAll('.answer p')[index],
                userAnswer = document.querySelectorAll('.user__answer')[index].value,
                correct  =  window[`question${index+1}`];
                if (index == 8) {
                    numberArray = exchangeArray(document.querySelectorAll('.user__choose')[1].value)
                } 
                correctAnswer = correct(numberArray)

                if (index == 5){
                    let index = exchangeArray(document.querySelectorAll('.user__choose')[0].value);
                    index[1] = index[1] <= numberArray.length ? index[1] : numberArray.length-1 
                    correctAnswer = numberArray.length !=1 || index.length !=1 ? correct(numberArray, index[0], index[1]) : correct(numberArray, index[0], 0)
                }
                
                if(userAnswer == ''){
                    alert('Vui lòng nhập câu trả lời');
                } else{
                    answer.classList.add('active');
                    alert(correctAnswer)
                }
                if (userAnswer === correctAnswer){
                    response.innerHTML = 'Chính xác! Câu trả lời là: ' + correct(numberArray) +' <br> Chúc mừng bạn được cộng thêm 1 điểm!'
                    response.classList.replace('text-danger', 'text-success')
                    document.querySelectorAll('.answer')[index].style.transition = 'all .5s ease-in-out';
                    score+=1
                    userScore.innerHTML = 'Your score: '+score + '/10';
                    element.onclick = null
                } else{
                    response.innerHTML = 'Sai rồi ~ Hãy thử lại';
                    response.classList.replace('text-success', 'text-danger')
                }
            }
        })
        document.querySelector('.form-input button').onclick = function(){
            let__go.onclick = null;
            inputValue = document.querySelectorAll('input')[0].value; //Lấy dãy số người dùng nhập vào
            numberArray = exchangeArray(inputValue);
        if (document.querySelectorAll('input')[0].value === '') {
            alert('vui lòng nhập số')
        } else {
            alert('Hãy ghi nhớ dãy số: '+ numberArray)
            document.querySelector('.form-input').classList.remove('active');
            document.querySelectorAll('.question')[0].classList.add('active');
            document.querySelector('.fa-long-arrow-alt-down').style.opacity  = '0';
            time.classList.add('active');
            let__go.classList.add('start');
            let__go.setAttribute('title', 'game is loading...')
            game.classList.replace('text-success', 'text-warning');
            game.innerHTML = 'GAME IS LOADING...';
            userScore.classList.add('active');
            function setTimer() {
                var minutes = Math.floor(timeRemaining / 60),
                    seconds = timeRemaining % 60;
                seconds = seconds < 10 ? '0' + seconds : seconds;
                time.innerHTML = 'Time Remaining: ' + minutes + ':' + seconds;
                if (timeRemaining <= 0) {
                    clearInterval(timerInterval);
                    time.innerHTML = 'Hết giờ! Số câu trả lời đúng của bạn là: ' + score + '/10'
                    game.innerHTML ='END GAME!';
                    game.classList.replace('text-warning', 'text-danger')
                    let__go.setAttribute('title', 'Game is over!')
                } else {
                    timeRemaining--;
                    time.classList.add('text-success')
                    if (timeRemaining<4*60){
                        time.classList.replace('text-success', 'text-danger')
                    } 
                }
            }
    
            var timerInterval = setInterval(setTimer, 1000);
            setTimer(); // Gọi ngay lần đầu tiên để hiển thị đúng thời gian ban đầu
        }
    }
            startGame = false
    }
}; document.querySelector('.finish').onclick = function(){
    document.querySelector('.quiz__finish').classList.add('active');
}
    begin = false
}




