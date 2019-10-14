#include <iostream>

using namespace std;



class object{

public:

    //object의 x, y 좌표

    int x;

    int y;

    int width;

    string image; // image 사진

    string name;

    bool opened;

    bool locked;

    void setWidth(int a){

        this->width = a;

    }

    void lock(){

        this->locked = true;

    }

    void onClick(string name){

        if(name =="door"){

            if(isClosed()){

                open();

            }

            else if(isOpened()){

                //game clear;

            }

            else if(isLocked()){

                cout<<"문이 잠겨있다";

            }

        }

        else{

            cout<<"올해는 몇 년도?";

            showKeypad();



            }



        }





    void showKeypad(){

        cout<<"number"<<"2019";

        this->unlock();

        cout<<"잠금장치가 열리는 소리가 들렸다.";

    }







    void unlock(){

        this->locked = false;

    }



    bool isClosed(){

        if(this->opened ==true) return false;

        else return  true;

    }

    void open(){

        this->opened = true;

    }

    bool isOpened(){

        if(opened==true) return true;

        else return false;

    }

    bool isLocked(){

        if(locked == true) return true;

        else return false;

    }

};





class game{

    public:

    string name;

    string image;

    int a;

    object door;

    object keypad;

    void createRoom(string name, string image){

        this->name = name;

        this->image = image;



    }

    object createDObject(string name, string image){

        this->door.name = name;

        this->door.image = image;

        return this->door;

    }



    object createKObject(string name, string image){

        this->keypad.name = name;

        this->keypad.image = image;

        return this->keypad;

    }

    void clear(){

        cout<<"게임 클리어";

    }



    void locateObject(object ob, int x, int y){

        ob = this->door;

        ob.x = x;

        ob.y = y;

    }



    void gamestart(){



        cout<<"방탈출에 오신 것을 환영합니다"<<endl;

        cout<<"올해는 201~ 몇인가요?."<<endl ;// 2010



        while(a != 2019){

        cout<< "번호를 입력하시오"<<endl;



        cin>>a;

        if(a!=2019)

         cout<<"틀렸습니다 다시 시도해주세요"<<endl;

        }



        cout<<"탈출 성공";



    }



};





int main(){

    game room;

    room.createRoom("room", "배경-1.png");

    room.door = room.createDObject("door", "문-오른쪽-닫힘.png");

    room.door.setWidth(136);

    room.locateObject(room.door, 1049, 300);

    room.door.lock();



    room.createKObject("keypad", "숫자키-우.png");

    room.keypad.setWidth(50);

    room.locateObject(room.keypad, 930, 250);





    room.gamestart();

}
