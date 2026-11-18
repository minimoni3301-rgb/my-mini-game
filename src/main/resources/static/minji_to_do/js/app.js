// 1. html 태그를 자바스크립트에서 쓰려면 html 태그를 찾는 querySelector 불러오기
const helloButton = document.querySelector("#helloButton");

// 2. 이벤트가 발생하면 실행될 함수
function sayHello () {
	alert("반가워요!");
}

// 3.html 객체와 이벤트 연결 
helloButton.addEventListener("click", sayHello);

// 배열과 객체

//1. 컬러배열 선언
const colors = ["초록","노랑","빨강","검정", "주황"];

// 2.html 태그 찾기 
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");

// 3. 버튼이 눌리면 처리(실행) 되는 함수 정의
function button1Click () {
	alert("버튼 1 눌렸어요" + colors[0]);
}
function button2Click () {
	alert("버튼 2 눌렸어요" + colors[1]);
}
function button3Click () {
	alert("버튼 3 눌렸어요" + colors[2]);
}
function button4Click () {
	alert("버튼 4 눌렸어요" + colors[3]);
}
function button5Click () {
	alert("버튼 5 눌렸어요" + colors[4]);
}
//
button1.addEventListener("click",button1Click);
button2.addEventListener("click",button2Click);
button3.addEventListener("click",button3Click);
button4.addEventListener("click",button4Click);
button5.addEventListener("click",button5Click);
