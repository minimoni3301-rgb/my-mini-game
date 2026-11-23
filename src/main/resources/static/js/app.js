//<header> 상단 오른쪽 id=todayDate 날짜 고치기 
// HTML 요소 찾기
// 자바 스크립트에서 HTML 요소 찾기
const todayDate = document.querySelector("#todayDate");

// 시작할때 화면에 날짜 표시 


// 현재 날짜 가지고 오기 

//현재 날짜 가지고오기 함수로 만들어보자
function showToday() {
	// 오늘 날짜 가져오기 (현재 날짜와 시간을 가지고와서 now 변수에 저장 ) 
	const now = new Date (); 
//intl : 세계문화권 함수 라이브러리 
//DateTimeFormat : 세계 문화권의 날짜 
//new intl.DateTimeFormat에서 한국어 날짜를 만들어 낸다음
//그걸 왼쪽 todayDate.textContent에 집어넣어서 저장하겠다.
// 날짜 표시 형식 정하기 
// todayDate.textContent = 날짜가 표시될 화면의 글자부분 
todayDate.textContent = new Intl.DateTimeFormat(
	"ko-KR", {
		year: "numeric",
		month: "long",
		day: "numeric",
		weekday: "long"
	}).format(now);}
	
	showToday();