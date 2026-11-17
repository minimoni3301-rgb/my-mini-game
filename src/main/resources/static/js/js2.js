// 1.점수를 저장할 변수 score선언
/*
let score3 = 0;
// 2.현재 점수에 10점을 올리는 addTenPoints()함수 정의
function addTenPoint(){
	score3 = score +10;
	console.log("현재점수:" + score);
}
// 3. 실제 addTenPoint() 함수 두번 실행
addTenPoint();
addTenPoint();


let coins =4;
coins = coins + 4;
console.log(coins);




if (score3 >= 100) {
	console.log("최고 기록!");
} else {
	console.log("조금 더 도전!");
}



//<시작버튼 만들기> 
// index02.html에서 id = startButton 태그를 찾아라 
// document는 html 문서를 가르키는 의미 (즉 html 안에서 찾아라)
const startButton = document.querySelector("#startButton");
// 스타트 버튼을 누르면 어떤 상황이 만들어질지 밑에 만들어보자. 
// 그러므로 startButton을 찾아서 가지고와라



// startButton을 누르면 자동으로 실행
// 이벤트 핸들러 또는 이벤트 처리함수라고 부른다.
// 어떤일을 시킬지 !! 
function startGame() {
        // 메세지 창을 화면에 띄운다. 그 창을 닫아야 다른 작업이 가능.
		// 이것을 modal 대화창 이라고 한다. 
		alert("게임 시작 버튼을 눌렀어요. 게임을 시작할게요");
}

// 이벤트를 감시하는 감시대행을 등록하면 된다.
// 모든 이벤트 감시는 무리. 그래서 하나만 등록한다.
// startButton이 마우스로 눌렸는지만, 누르면 startGame 자동실행
// 태그명.addEventListener("이벤트명", 이벤트 헨들러명)
// 두개 사이의 연결고리는 addEventListener
// 아직까지는 버튼이랑 함수가 연결된게 아니다 연결작업을 해줘야한다. 
startButton.addEventListener("click", startGame);





//<종료버튼 만들기> 
const endButton = document.querySelector(".endButton");
function endGame() {
	alert("게임 종료 버튼을 눌렀어요. 게임을 종료할게요")
}
// 자바스크립트는 사용자가 화면에서 사용할 수 있는 여러 행동을 정해서
// 미리 이름표로 가지고 있다. 
// 그중 하나가 click -> 마우스로 요소를 눌렀다 떼는 동작을 의미 (이벤트명은 문자열이다)
endButton.addEventListener("click", endGame);



// 3번 예제

//const messageElement = document.querySelector("#message");
messageElement.textContent = "버튼을 눌렀습니다!";

const messageButton = document.querySelector("#messageButton");
function startGame2 () {
	alert("게임을 시작할게요!")
}
messageButton.addEventListener("click",startGame2);


const greeting = document.querySelector("#greeting");
const message  = document.querySelector("#message");
const copyButton  = document.querySelector("#copyButton");

function copy() {
	message.textContent = greeting.value;
}
*/

//------------------------------------------------------------------

/**<만들어야되는 것> 
 * 1) id = clickButton 을 눌렀을 때 id = score점수가 올라가게 하는 것
 * 2) id = resetButton 을 눌렀을 때 id = score점수가 다시 0이 되도록 만드는 것
 * 3) 점수가 올라갈때 id = message 멘트가 변하게 하는것
 */

//1. 요소찾기
//2. 기능함수 정의
//3. 요소와 기능 연결 


 // score 현재점수를 화면과 동일하게 0으로 세팅
 
 let score = 0;
 
 // 1. 요소 찾기
 const scoreElement   = document.querySelector("#score"); 
 const clickButton    = document.querySelector("#clickButton");
 const messageElement = document.querySelector("#message");
 const resetButton    = document.querySelector("#resetButton");
 

 //2. 기능함수 정의 
 //숫자를 증가시키는 함수
function addScore () {
	score = score +1;
	scoreElement.textContent = score;
	messageElement.textContent = "점수 1 획득";
}

// 숫자를 0으로 만드는 함수
function resetGame () {
	score = 0;
	scoreElement.textContent = score;
	messageElement.textContent = "점수가 초기화 되었습니다.";
}


// 그 기능함수들은 모두 버튼을 통해서 이루어진다.
//클릭 버튼을 눌렀을때 
clickButton.addEventListener("click", addScore);
//리셋 버튼을 눌렀을때
resetButton.addEventListener("click", resetGame);

















