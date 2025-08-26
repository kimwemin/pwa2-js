class MyClass {
  // 접근 제어 프로퍼티
  // public : 클래스 내외부 어디서든 접근 가능
  name;
  // private : 클래스 내부에서만 접근 가능
  #age;
  // protected : 나와 그리고 상속 관계에서 자식클래스들은 접근이 가능
  _addr;
  static gender = 'M'; // 클래스 정적 변수

  // 생성자 메소드
  // `new` 키워드로 객체를 인스턴스화 할 때 딱 한번 실행되는 메소드
  // 이름이 같은데도 다른 이유는 this.name은 MyClass의 요소를 지칭하고
  // constructor의 name은 파라미터, 즉 지역구 스코프를 가지기 때문이다.
  constructor(name, age, addr) {
    this.name = name;
    this.#age = age;
    this._addr - addr;
  }

  // getter / setter
  // 메소드지만 사용할 때 프로퍼티 사용 하듯이 동작한다.
  get age() {
    return this.#age;
  }
  set age(age) {
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }

  // 인스턴스 메소드
  add(a, b) {
    return a + b;
  }
}

// const myClass = new MyClass();
// let addNum = myClass.add(5, 10);
// console.log(addNum);

// const myClass = new MyClass();
// myClass.add(1, 4);

const myClass = new MyClass('홍길동', 20, '조선');
const myClass2 = new MyClass('갑순이', 10, '한국');
console.log(myClass.getAge());
console.log(myClass.age);
myClass.age = 40;
console.log(myClass.age);
console.log(myClass2.name);