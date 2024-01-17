/*
new Date() : date 객체를 생성한 날짜가 담긴다.
getTime() : 현재 시간을 ms 단위로 나눈 숫자의 값이 나온다(유닉스 타임)(천분의1초)
(1000*3600*48) 1초 * 3600 = 1시간 (3600은 60초가 60번), 1시간 * 48 = 48시간
따라서 첫번째 줄은 현재로부터 48시간뒤를 타겟으로 잡는 것
*/
var target_date = new Date().getTime() + (1000 * 3600 * 48)
// var target_date = new Date(2024, 00, 12, 23, 59, 59).getTime();
// 화면에 그리기 위한 변수를 초기셋팅
var days, hours, minutes, seconds;

// tiles를 countdown이라는 변수에 담았다.
var countdown = document.getElementById("tiles");

//getCountdown함수를 실행
getCountdown();


/*
setIntercal은 인자를 두개 가진다.
첫번째 인자는 함수, 두번째 인자는 첫번째 인자의 함수를 몇초주기로 실행할지 표기.(ms단위)
setInterval([함수명], [함수가 실행될 시간]);
*/
// 1초마다 getCountdown을 실행
setInterval(function () { getCountdown(); }, 1000);


function getCountdown(){

  // current_date : 함수가 실행이될따마다 갱신
  var current_date = new Date().getTime();
  // target_date : 웹페이지를 처음 열었을 때의 시간 + 48시간
  // seconds_left : 1초마다 현재+48시간에서 1초씩 줄어든다.
	var seconds_left = (target_date - current_date) / 1000; //ms단위라 1000으로 나눠줌

  //하나의 초로 무언가를 없앨때는 큰값부터! 따라서 데이부터

  //seconds_left를 86400으로 나누어 parerInt에 실행 인자로 넘겨 결과를 pad로
  // 남은 시간을 하루로 나누어 pad에 표시.
	days = pad( parseInt(seconds_left / 86400) );
  // 남은 시간을 하루로 나눴을 때의 나머지를 second_left로 지정
	seconds_left = seconds_left % 86400;
		 
  // 위의 second_left를 1시간으로 나누어 패드에 표시.
	hours = pad( parseInt(seconds_left / 3600) );
  // 남은 시간을 한시간으로 나눴을 때의 나머지를 second_left로 지정
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

  // format countdown string + set tag value
  //countdown에 위의 days hours minutes을 나타냄
	countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
}
// countdown.innerHTML = "<span>" + days + "</span>:<span>" + hours + "</span>:<span>" + minutes + "</span>:<span>" + seconds + "</span>"; 
// }

// pad 1은 01. 10은 10. 0으로 자릿수채워주기
// pad에 0을 인자로 받아 n이 10보다 작으면 앞에 0을 하나 붙이고, 그렇지않으면 빈칸.+n
// 삼학연산자 (조건 ? a : b) => if로 생각하면 쉽다. ?는 if :는 else
function pad(n) {
	return (n < 10 ? '0' : '') + n;
}

var sad = document.getElementById("sad");

function stop() {

  var button = document.getElementById("startstop");
  if(button.innerHTML == "STOP!"){
    button.innerHTML = "START!";
    sad.innerText = "누르면 멈추게 하고 싶었다";
  } else{
    button.innerHTML = "STOP!";
    sad.innerText = "다시 누르면 시작하게 하고싶었다";
    
  }
}