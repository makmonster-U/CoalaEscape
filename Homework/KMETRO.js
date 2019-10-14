

//-----방생성-----/

room1 = game.createRoom("room1", "subway1.jpg") // 방 생성
room1_door = game.createRoom("room1_door","지하철문1.png" ) // 첫방문확대
room2 = game.createRoom("room2", "123.jpg") // 방 생성

//room1

room1.setRoomLight(0.8)

room1.hint1 = room1.createObject("hint1","핏자국.png")
room1.locateObject(room1.hint1, 640,600)
room1.hint1.setWidth(120)

room1.victim = room1.createObject("victim","쓰러진사람.png")
room1.locateObject(room1.victim, 820,680)
//-

/*
room1_door.door = room.createObject("door1", "문-오른쪽-닫힘.png") // 문 생성
room.door.setWidth(136) // 크기 조절
room.locateObject(room.door, 1049, 300) // 문 배치
room.door.onClick = function() { // door를 클릭했을 때
	if(room.door.isClosed()){ // door가 closed 상태이면
		room.door.open() // door의 상태를 open으로 바꿈
	} else if (room.door.isOpened()){ // door가 opened 상태이면
		game.clear() // 게임 클리어
	} else {
		// 아무것도 하지 않는다
	}
}

room.door.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room.door.setSprite("문-오른쪽-열림.png") // 열린 문으로 변경
}

*/


//---------------------------게임 초기화-----------------------/-----------/
game.start(room1) // 게임시작
printMessage("방탈출에 오신 것을 환영합니다!") // 환영 메시지 출력