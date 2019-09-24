room = game.createRoom("room", "배경-1.png") // 방 생성
room2 = game.createRoom("room2","배경-6.png") // 방 생성

room.door = room.createObject("door", "문-오른쪽-닫힘.png") // 문 생성
room.door.setWidth(136) // 크기 조절
room.locateObject(room.door, 1049, 300) // 문 배치
room.door.lock() // door 상태를 locked로 변경

room.door.onClick = function() { // door를 클릭했을 때
	if(room.door.isClosed()){ // door가 closed 상태이면
		room.door.open() // door의 상태를 open으로 바꿈
    room.door.setSprite("문-오른쪽-열림.png")
	} else if (room.door.isOpened()){ // door가 opened 상태이면
		game.move(room2) // room2로 이동
	} else if (room.door.isLocked()){ // door가 locked 상태이면
		printMessage("문이 잠겨있다") // 메시지 출력
	}
}

room.notepad = room.createObject("notepad", "숫자키-우.png") // 오브젝트 생성
room.notepad.setWidth(50) // 크기 조절
room.locateObject(room.notepad, 1150, 200) // 위치 변경

room.notepad.onClick = function() {
	shownotepad("alphabet", "CLOSE" , function(){ // 키패드 2 - 영어5자리
		room.door.unlock() // door의 잠금을 연다
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}

room.shelf = room.createObject("shelf", "선반-좌.png")
room.shelf.setWidth(460)
room.locateObject(room.shelf, 250, 150)

room.book = room.createObject("book", "책3-1.png")
room.book.setWidth(80)
room.locateObject(room.book, 100, 140)
room.book.onClick = function() {
	showImageViewer("종이.png", "책2.txt"); // 이미지 출력
}

room.shink = room.createObject("shink", "싱크대-오른쪽.png")
room.shink.setWidth(450)
room.locateObject(room.shink, 730, 325)
room.shink.onClick = function() {
	printMessage("사용한적 없는 싱크대이다.")
}




room.table = room.createObject("table", "테이블-우.png") // 테이블 생성
room.table.setWidth(300)
room.locateObject(room.table, 550, 530)


room2.door = room2.createObject("door", "문-오른쪽-열림.png") // 문 생성
room2.door.setWidth(136) // 크기 조절
room2.locateObject(room2.door, 1049, 305) // 문 배치
room2.door.open() // door 상태를 opened로 변경

room2.door.onClick = function(){
	game.move(room) // room으로 이동
}

room2.cupboard = room2.createObject("cupboard", "찬장-2-닫힘.png") // 찬장 생성
room2.note = room2.createObject("note", "노트.png") // 노트 생성

//크기 조절
room2.cupboard.setWidth(250)
room2.note.setWidth(45)

//배치
room2.locateObject(room2.cupboard, 800, 323)
room2.locateObject(room2.note, 745, 315)

room2.note.hide() // note 숨기기

room2.cupboard.onClick = function() { // 클릭했을 때
	if(room2.cupboard.isOpened()) { // Opened 상태인 경우
		room2.cupboard.close() // close
	} else if(room2.cupboard.isClosed()) { //Closed 상태인 경우
		room2.cupboard.open() // open
	} else {
		// do nothing
	}
}

room2.cupboard.onOpen = function() {
	room2.cupboard.setSprite("찬장-2-열림.png") // 열린 그림으로 변경
	room2.note.show() // note 보이기
}

room2.cupboard.onClose = function() {
	room2.cupboard.setSprite("찬장-2-닫힘.png") // 닫힌 그림으로 변경
	room2.note.hide() // note 숨기기
}

room2.note.onClick = function(){
  room2.note.pick()
}
room2.note.setItemDescription("너는 여기서 나갈 수 없다...\n베타버젼은 여기까지 입니다. ㅎㅎ\n 감사합니다!!")


game.start(room) // 게임시작
printMessage("방탈출에 오신 것을 환영합니다!") // 환영 메시지 출력
