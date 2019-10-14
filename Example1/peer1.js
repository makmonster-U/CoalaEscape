room = game.createRoom("room", "배경-1.png") // 방 생성

room2 = game.createRoom("room2", "배경-6.png") // 두번째 방 생성

room3 = game.createRoom("room3", "배경-4.png") // 세번째 방 생성



room.door = room.createObject("door", "문-오른쪽-닫힘.png") // 문 생성

room.door.setWidth(136) // 크기 조절

room.locateObject(room.door, 1049, 300) // 문 배치

room.door.lock() // door 상태를 locked로 변경



room2.door = room2.createObject("door", "문-왼쪽-열림.png") //문 생성

room2.door.setWidth(136) // 크기 조절

room2.locateObject(room2.door, 300, 290) //문 배치

room2.door.open() //door 상태를 opened로 변경



room2.door2 = room2.createObject("door2", "문3-우-닫힘.png") //두번째 문 생성

room2.door2.setWidth(150) // 크기 조절

room2.locateObject(room2.door2, 800, 250) //문 배치

room2.door2.lock() //door 상태를 locked로 변경



room2.door3 = room2.createObject("door3", "문2-우-닫힘.png") //세번째 문 생성

room2.door3.setWidth(110) // 크기 조절

room2.locateObject(room2.door3, 1000, 330) //문 배치

room2.door3.lock() //door 상태를 locked로 변경



room3.door = room3.createObject("door", "문2-좌-열림.png") //문 생성

room3.door.setWidth(150) // 크기 조절

room3.locateObject(room3.door, 300, 242) //문 배치

room3.door.open() //door 상태를 opened로 변경



room3.box = room3.createObject("box", "상자-1-닫힘.png") //상자 생성

room3.box.setWidth(200)

room3.locateObject(room3.box, 600, 500)



room3.box.onClick = function() { //box를 클릭했을 때

	room3.box.setSprite("상자-1-열림.png")

	showImageViewer("종이.png", "메시지.txt"); //메시지 출력

}



room.door.onClick = function() { // door를 클릭했을 때

	if (room.door.isClosed()) { // door가 closed 상태이면

		room.door.open() // door의 상태를 open으로 바꿈

	}

	else if (room.door.isOpened()) { // door가 opened 상태이면

		game.move(room2) // room2로 이동

	}

	else if (room.door.isLocked()) { // door가 locked 상태이면

		printMessage("문이 잠겨있다") // 메시지 출력

	}

}





room2.door.onClick = function() { // door를 클릭했을 때

	if (room2.door.isClosed()) { // door가 closed 상태이면

		room2.door.open() // door의 상태를 open으로 바꿈

	}

	else if (room2.door.isOpened()) { // door가 opened 상태이면

		game.move(room) // room으로 이동

	}

	else if (room2.door.isLocked()) { // door가 locked 상태이면

		printMessage("문이 잠겨있다") // 메시지 출력

	}

}



room2.door2.onClick = function() { // door를 클릭했을 때

	if (room2.door2.isClosed()) { // door가 closed 상태이면

		room2.door2.open() // door의 상태를 open으로 바꿈

	}

	else if (room2.door2.isOpened()) { // door가 opened 상태이면

		game.clear() // 게임 클리어

	}

	else if (room2.door2.isLocked()) { // door가 locked 상태이면

		printMessage("문이 잠겨있다") // 메시지 출력

	}

}



room2.door3.onClick = function() { // door를 클릭했을 때

	if (room2.door3.isClosed()) { // door가 closed 상태이면

		room2.door3.open() // door의 상태를 open으로 바꿈

	}

	else if (room2.door3.isOpened()) { // door가 opened 상태이면

		game.move(room3) // room3로 이동

	}

	else if (room2.door3.isLocked()) { // door가 locked 상태이면

		printMessage("문이 잠겨있다") // 메시지 출력

	}

}



room3.door.onClick = function() { // door를 클릭했을 때

	if (room3.door.isClosed()) { // door가 closed 상태이면

		room3.door.open() // door의 상태를 open으로 바꿈

	}

	else if (room3.door.isOpened()) { // door가 opened 상태이면

		game.move(room2) // room2로 이동

	}

	else if (room3.door.isLocked()) { // door가 locked 상태이면

		printMessage("문이 잠겨있다") // 메시지 출력

	}

}





room.door.onOpen = function() { // door 상태가 open으로 변경되면 실행

	room.door.setSprite("문-오른쪽-열림.png") // 열린 문으로 변경

}



room2.door2.onOpen = function() { // door 상태가 open으로 변경되면 실행

	room2.door2.setSprite("문3-우-열림.png") // 열린 문으로 변경

}



room2.door3.onOpen = function() { // door 상태가 open으로 변경되면 실행

	room2.door3.setSprite("문2-우-열림.png") // 열린 문으로 변경

}



room.keypad = room.createObject("keypad", "숫자키-우.png")

room.keypad.setWidth(50)

room.locateObject(room.keypad, 930, 250)



room2.keypad = room2.createObject("keypad", "숫자키-우.png")

room2.keypad.setWidth(50)

room2.locateObject(room2.keypad, 680, 250)



room2.keypad2 = room2.createObject("keypad2", "숫자키-우.png")

room2.keypad2.setWidth(70)

room2.locateObject(room2.keypad2, 1000, 150)



room.keypad.onClick = function() {

	printMessage("개천절은 언제?")

		showKeypad("number", "1003", function(){ // 키패드 1 - 숫자4자리

		room.door.unlock() // door의 잠금을 연다

			printMessage("잠금장치가 열리는 소리가 들렸다.")

	})

}



room2.keypad.onClick = function() {

	printMessage("박스")

		showKeypad("number", "2357", function(){ // 키패드 1 - 숫자4자리

		room2.door2.unlock() // door의 잠금을 연다

			printMessage("잠금장치가 열리는 소리가 들렸다.")

	})

}



room2.keypad2.onClick = function() {

	printMessage("이판사판")

		showKeypad("number", "2848", function(){ // 키패드 1 - 숫자4자리

		room2.door3.unlock() // door의 잠금을 연다

			printMessage("잠금장치가 열리는 소리가 들렸다.")

	})

}



game.start(room) // 게임시작

printMessage("게임을 시작하지") // 환영 메시지 출력
