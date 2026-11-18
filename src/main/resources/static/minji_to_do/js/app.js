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


// 리스트 버튼으로 추가하기 
// 1.추가버튼 찾기
const addButton = document.querySelector("#addButton");

// 2. 버튼클릭을 감지하기 
addButton.addEventListener("click", function() {
	//alert("추가하기 버튼을 눌렀어요!")


// 3.html 입력창에 입력된 값 가지고 오기 
const input = document.querySelector("#taskinput");
 // alert("입력내용:" + input.value);

 //3.5 입력창에 값이 비었으면 li추가 취소
  if (input.value.trim() === "") {
	// 입력값이 없음을 알림
	alert("값을 입력하세요");
	return;
  }
	

// 4. ul에 추가할 내용을 등록하기 위해
// li 태그 필요 -> 자바스크립트로 새로 만들어야함
// html 태그를 실시간으로 새로 만ㄷ르고, 고치고, 지울 수 있는 능력 (DOM 조작)
const item = document.createElement("li");
// 5. li item에 input값을 저장 
// textcontent는 화면에 보이는 요소를 말한다. 
item.textContent = input.value;

//6. dom으로 #tasklist ul요소 찾기
const tasklist = document.querySelector("#tasklist");
tasklist.append(item);


//6.5 추가된 할 일을 완료 표시하기 (취소선으로 완료표시)
// itemlist를 마우스로 클릭하는 경우
item.addEventListener("click", function () {
	item.style.textDecoration = "line-through";
});

// 7. li에 값이 추가되고나면 input 태그 값을 삭제한다. (초기화)
input.value = "";

});  //fuction 안으로 들어가야함 -> 버튼을 눌렀을 때 일어나는 일이기때문에 




// loadstroge을 이용한 행운 뽑기
//1. 포춘 종료 배열을 만든다. 
 const fortunes = [
	"오늘은 행운이 가득해🍀",
	"멋진 일이 생길거야 🌷",
	"오늘은 맛있는 걸 먹자! 🍔",
	"새로운 도전을 시작해봐🍀",
	"너는 충분히 잘하고있어!🌷 "	
 ];

//2. 선택된 포춘을 저장하는 포춘변수를 초기화
// let인 이유는 뽑기 버튼을 누를때마다 변수 안에 들어가는 값이 다르기때문 
let currentfortune = "";
//3. 실제 포춘을 뽑는 함수 정의 drawFortune
function drawFortune() {
// 1.포춘 배열에서 난수로 인덱스 번호를 가져오면된다.
// 난수 만들기 -> 임의의 정수 생성
// math.floor(3.5) = 3 : 소수점 아래를 무조건 버린다.  
// math.random() : 0.0*length <= 난수 <1.0*length
const index = math.floor(math.random()*fortunes.length)
 // 현재 랜덤 행운 뽑기
 currentfortune = fortunes[index];
 // 현재 뽑은 운세의 내용을 출력 (찾는값을 textcontent 값으로 보이게 만들기)
 document.querySelector("#result").textContent = 
 
 }
//4. 실제 포춘을 저장하는 함수 정의 saveFortune
function saveFortune() {
	
}
//5. 저장된 포춘을 불러오는 함수 정의 loadFortune
function loadFortune() {
	
}
//6. 저장된 포춘 정보를 삭제하는 함수 정의 deleteFortune

function deleteFortune() {
	
}
