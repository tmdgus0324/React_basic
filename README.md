React_basic
=============

*****
## 참고사항
### 0. 개발환경설정
Node.js, npm 설치하기, VS Code 설치, 소스트리 설치(github연동)

### 1. terminal 이용할 때 아래 오류가 나올 수 있다.
npm : 이 시스템에서 스크립트를 실행할 수 없으므로 C:\Program Files\nodejs\npm.ps1 파일을 로드할 수 없습니다.
자세한 내용은 about_Execution_Policies(https://go.microsoft.com/fwlink/?LinkID=135170)를 참조하십시오.
-> 권한문제 -> powershell 관리자모드 -> Set-ExecutionPolicy RemoteSigned 권한변경하고 사용한다.

### 2. React는 버전별로 차이가 있다. 17버전 설치하기
npm uninstall react react-dom
-> npm install react@17.0.2 react-dom@17.0.2
-> index.js 형태변경
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    );

    ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
    );

### 3. npm install --save styled-components 설치시 에러나타날 때
--legacy-peer-deps : 기존 라이브러리 버전 무시하고 설치 -> 17버전 기준 추가하여 설치 시 정상TEST 가능
--force : package.json 또는 package-lock.json 파일에 여러가지 의존 버전들을 추가하면서 설치

*****
## 기초확인
### 1. HTML
    SPA : 하나의 페이지만 구성하는 application
    기존 : 각자의 html 파일이 있다.
    해당 페이지 접속할 때 body페이지에 동적으로 content들을 채워넣는다.

### 2. CSS -> 15강 참고

### 3. JavaScript
    ECMAScript(ES6 버전을 표준으로 함)
    html은 뼈대를 구성 
    JavaScript는 런타임에 코드가 실행되고 해석된다.
    
    JavaScript문법
    (1) 자료형(Data Type) - Dynamic Typing(동적 타이핑)
        - 변수선언 : var, let
        // Undefined type
        let u1;
        let u2 = undefined;

        // Object type
        let obj = { a: "apple", b: "banana", c: "carrot" };

    (2) 연산자(Operator)
        - 대입연산자 -> =에서 오른쪽에서 왼쪽으로

        - 사칙연산자(산술연산자) 
            consol.log(a ** b); // 2에4승 = 16
            a *= b; // a = a * b;

        - 증가연산자(++), 감소연사자(--)
            postfix방식 : a++ / prefix방식 : ++a
            ex) let a = 1; let b = a++; // 출력결과 : 2,1
            ex) let c = 1; let d = ++c; // 출력결과 : 2,2

        - 관계연산자(비교연산자) ->  <, >, <=, >=
        - 일치연산자 -> ===, !==  // 값과 자료형이 모두 같은지, 같지 않은지

        - 이진논리연산자 -> a && b, a || b
        - 조건부연산자(삼항연산자) ->  조건식 ? true : false;
        
    (3) JavaScript 함수
        - function statment를 사용
            function sum(a, b) {
                return a + b;
            }

        - arrow function expression을 사용
            const multiply = (a, b)  => {
                return a * b;
            }

*****
## 섹션별 정리

### 1. 섹션2
    (1) React는? -> A JavaScript Library for building user interfaces
        : 사용자 인터페이스를 위한 자바스크립트 라이브러리
        - 사용자 인터페이스(User Interface, UI) 
        : 사용자와 컴퓨터 프로그램 상호작용 위한 입력과 출력을 제어해주는 것   
        - UI라이브러리 : React는 대표적인 UI라이브러리 이다.
                    (ex: React / NGULARJS, Vue.js 는 프레임워크)   
        > 라이브러리는 개발자가 필요한 부분만 가져다가 쓰는 형태, 
        > 즉 라이브러리는 개발자가 제어권한을 프레임워크는 프레임워크에 제어권한이 있다.

    (2) React 장점
        - 빠른 업데이트 & 렌더링 속도
        - Virtual DOM : 웹페이지를 담고 있는 하나의 객체
        - Component-Based : 컴포넌트들을 모아서 개발
        - 재사용성(Reusability) : 의존성 문제, 다른 호환성 문제등이 생길 수 있는데
        - React 장점 : 개발기간 단축, 유지보수 용이(버그 찾기 쉬움), Meta
        - React Native : 모바일 앱개발 용이

    (3) React 단점
        - Virtual DOM, JSX, Component, State, Props 학습량이 많다.
        - 계속 달라진다.
        - 높은 상태관리 복잡도, State관리가 복잡하다.
        - 외부 상태관리 라이브러리를 사용하는 경우가 많다.

### 2. 섹션3
    (1) React Component의 state가 변경되는 예시를 확인할 수 있다.
    (2) ReactDOM의 render 함수를 사용, 
        React Component를 Dom Container에 rendering 한다.
    (3) create-react-app 활용(CRA)
        - 사용법 : $ npx create-react-app <your-project-name>
        - 실제 사용 예제 : $ npx create-react-app my-app
        - npx create-react-app my-app -> ERROR 발생할 때 
          -> 패키지설치과정을 건너뛴거임 -> npm -g install create-react-app 설치
        - cd my-app > npm start 하면 localhost:3000 실행한다.

### 3. 섹션4
    (1) JSX : A syntax extension to JavaScript 자바스크립트 확장문법
              -> javascript + xml,html
              ex) const element = <h1>Hello, world!</h1>;

    (2) JSX의 역할
        React.createElement(    // createElement : jsx -> javascript코드로 변환
            type,
            [props],
            [...children]
        )

    (3) JSX 비교
        // JSX를 사용한 코드
        const element = (
            <h1 className="greeting">
                Hello, world!
            </h1>
        )
        // JSX를 사용하지 않은 코드
        const element = React.createElement(
            'h1',
            {className:'greeting'},
            'Hello, world!;
        )
        // React.createElement()의 결과로 아래와 같은 객첵가 생성됨
        // Element 형태
        const element = {
            type = 'h1',
            props: {
                className: 'greeting',
                children: 'Hello, world!'
            }
        }
        // React.createElement 형태
        React.createElement(
            type,
            [props],
            [...children]
        )

    (4) 장점
        - 간결한 코드
          > createElement('div, null, `Hello, ${name}`'); 이걸 <div>Hello, {name}</div> 으로 대체가능
        - 가독성이 좋음
        - Injection Attacks 방어, 보안성 높음
          > XSS방어가 가능하다. {}안헤 들어가는 변수가 문자열 형태로 변환되기 때문
          ex) const title = response.potentiallyMaliciousInput;
              // 이 코드는 안전하다.
              const element = <h1>{title}</h1>;

    (5) JSX 사용하기
        - {}활용하기
            const name = '소플';
            const element = <h1>안녕, {name}</h1>

            ReactDOM.render(
                element,
                document.getElementById('root')
            );

        - 태그의 속성(attribute)에 값을 넣는 방법
            // 큰따옴표 사이에 문자열을 넣거나
            const element = <div tabIndex="0"></div>;
            // 중괄호 사이에 자바스크립트 코드를 넣으면 됨
            const element = <img src={user.avatarUrl}></img>

        - 자식(children)을 정의하는 방법
            const element = (
                <div>
                    <h1>안녕하세요</h1>
                    <h2>열심히 리액트를 공부해 봅시다.</h2>
                </div>
            );

### 4. 섹션5   
    (1) Element : React 앱을 구성하는 가장 작은 블록들

    (2) React, Dom Element 차이점 : React Element는 DOM Element의 가상 표현(React < DOM)
        ex) const element = <h1>Hello</h1>; 
            > 대입 연산자의 오른쪽을 React의 createElement 함수를 사용하여 Element를 생성
            > React는 이 Element를 이용해서 실제 우리가 화면에서 보게 될 DOM Element를 생성
            > React Element는 자바스크립트 객체 형태로 존재
        - Element는 Component의 유형과 속성 및 내부의 모든 자식에 대한 정보를 포함하고 있는 자바스크립트 객체
        - Component rendering을 위해 모든 Component가 CreateElement 함수를 통해 Element로 변환됨
        - 즉, React의 Element는 우리 눈에 실제로 보이는 것을 기술

    (3) Element 특징
        - Element는 다양한 모습으로 존재할 수 있지만 한번 생성된 다음에는 변경이 불가능
        - 붕어빵 굽기(Component(붕어빵틀) -> Element(붕어빵)) -> 굽기고난 후 내용물 변경불가
        - Virtual Dom은 변경된 부분을 계산, 해당부분을 rendering함 -> Element 새로 생성됨

    (4) Element rendering
        - <div id="root"></div>
        - React : 단 하나의 루트 DOM 노드
        - root div에 실제로 React Element를 렌더링하기 위해서 아래 코드사용
          -> const element = <h1>Hello</h1>; 
             ReactDOM.render(element, document.getElementById('root'));
        >> 결국 React Element가 rendering되는 과정 : Virtual DOM -> Real DOM으로 이동하는 과정  

### 5. 섹션6
    (1) Components : Component-based, 레고블록 조립하듯 Component를 모아서 개발
        - React는 Component기반 -> 작은 Component들이 모여서 하나의 Component를 구성하고 전체 페이지구성
        - 하나의 Component를 반복적으로 사용함으로써, 개발시간 유지보수 시간 Down
        - React Component =~ Java Script
        - 입력(Props) -> React Component -> 출력(React Element)
          > 어떠한 속성들을 입력으로 받아서 그에 맞는 React Element를 생성하여 return해 주는것

    (2) Props : React Component의 속성(붕어빵에 들어가는 재료)
        - 입력(Props) -> React Component -> 출력(React Element)
        - 쇼핑 아이템 : 같은 React Component에서 생성된 Element 여기서 Component의 모습, 속성 결정
        - Component의 어떤 데이터를 전달하고 전달된 데이터에 따라 
          다른 모습의 Element를 화면에 rendering할 때 해당 데이터를 Props에 넣어서 전달하는 것

    (3) Props의 특징 : Read-Only
        - sum=a+b; : 항상 같은 값을 리턴한다. -> pure
        - account.total -= amount; : 총액에서 amount를 빼서 잔액을 표현한다. -> impure
        - 모든 React Component는 그들의 props에 관해서는 pure함수 역할을 해야한다.
          > 직접 props를 바꿀 수 없고, 같은 props에 대해서는 항상 같은 결과를 보여줘야 한다.

        ex) function App(props) {
            return (
                <Profile
                    name="소플"
                    introduction="안녕하세요"
                    viewCount={1500}
                />
            );}
        
            > 이 코드에는 App Component가 나오고 그 안에서 Profile Component를 사용
              {} 중괄호 사용시에는 Java Script 코드가 들어감

        - 참고 : JSX를 사용하지 않고 코드를 작성한다면...
            React.createElement(
                type,
                [props],
                [...children],
            )

        ex) React.createElement(
                Profile,
                {
                    name:"소플",
                    introduction:"안녕하세요",
                    viewCount:1500
                },
                null        // 하위 Component가 없기 때문에 null값이 들어감
            );

    (4) Function Component
        ex) function Welcome(props){
                return <h1>안녕, {props.name}</h1>
            }
        > 하나의 props 객체를 받아서 인삿말이 담긴 React Element를 return 한다.
        > React Component
        > Function Component

    (5) Class Component : JavaScript ES6의 Class를 사용해서 만들어진 Component
        ex) class Welcome extends React.Component {
                render() {
                    return <h1>안녕, {this.props.name}</h1>;
                }
            }

        - Component 이름은 항상 대문자로 시작해야 한다. 소문자는 Dom Element로 인식한다.
        ex) const element = <div />;                 // Dom 태그 사용한 element
            const element = <Welcome name="Roy" />;  // 사용자정의한 Component를 사용한 element
        - Component rendering
        ex) function Welcome(props) {
                return <h1>안녕, {props.name}</h1>;
            }
            const element = <Welcome name="Roy" />;
            ReactDOM.render (
                element,
                document.getElementById('root')
            );

        - Component안에 Component구성을 할 수 있다.
        ex) function App(props) {
                return(
                    <div>
                        <Welcome name="Mike" />
                        <Welcome name="Steve" />
                        <Welcome name="Jane" />
                    </div>
                )
            }

        - Component 추출 : 큰 컴포넌트에서 쪼개서 사용한다. 재사용성 up
        ex) function Avatar(props) {
                return (
                    <img className="avatar" 
                        src={props.user.avatarUrl}
                        alt={props.user.name}
                    />
                );
            }

            > Component 사용
            <Avatar user={props.author} />

            > UserInfo 추출
            function UserInfo(props) {
                return (
                    <div className="user-info">
                        <Avatar user={props.user} />
                        <div className="user-info-name">
                            {props.user.name}
                        </div>
                    </div>
                );
            }

### 6. 섹션7
    (1) State : React Component의 상태, 변경가능한 데이터
        - rendering이나 데이터 흐름에 사용되는 값만 state에 포함시킨다.
        - state는 JavaScript 객체이다.
        ex) class LikeButton extends React.Component {
                // class가 생성될때 실행되는 함수
                constructor(props) {
                    super(props);

                    // 현재 state를 정의함(useState Hook에서 정의함)
                    this.state = {
                        liked: false
                    };
                }
                ...
            }
        
        - State는 직접적인 변경 불가능!
        ex) this.state = { name : 'Roy' };          // 직접수정(잘못된수정)
            this.setState = ({ name : 'Roy' });
            > setState함수를 사용하여 state를 변경한다.

    (2) Lifecycle : 생명주기, class Component 최근에 잘 안쓴다.
        출생          >              인생            >            사망
        Mounting         >           Updating          >         Unmounting
        constructor    >   render
                           React updates DOM and refs
        componentDidMount    >       componentDidUpdate    >      componentDidUnmount
        > Component가 계속 존재하는 것이 아닌, 시간의 흐름에 따라 생성되고 업데이트 되다가 사라진다.    

### 7. 섹션8
    (1) Hooks
        - Function Component : state 사용불가, Lifecycle에 따른 기능 구현 불가
          > Hooks를 사용하여 Class Component처럼 사용가능, 16.8 이후 도입됨
        - useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback

        - 특징 : 클래스형 컴포넌트를 대체, 관련 로직을 작은 단위로 분리하여 재사용성과 가독성을 향상
                Hook은 컴포넌트의 최상위 레벨에서만 호출, 조건문 안에서는 사용할 수 없음

        - useState : state를 사용하기 위한 Hook
        ex) import React, { useState } from "react";

            function Counter(props) {
                var count = 0;

                return (
                    <div>
                        <p>총 {count}번 클릭했습니다.</p>
                        <button onClick={() => count++}>
                            클릭
                        </button>
                    </div>
                );
            }

        - useState(); :  const [변수명, set함수명] = useState(초기값);
        ex) import React, { useState } from "react";
            // 변수 각각에 대해 set합수가 따로 존재!
            function Counter(props) {
                const [count, setCount] = useState(0);
            }

            return (
                <div>
                    <p>총 {count}번 클릭했습니다.</p>
                    <button onClick={() => setCount(count + 1)}>
                        클릭
                    </button>
                </div>
            );
        
        - useEffect() : Side effect(효과, 영향)를 수행하기 위한 Hook
        ex1) useEffect(() => {
                // 컴포넌트가 마운트 된 이후,
                // useEffect(이펙트 함수, 의존성 배열);

                // 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행됨
                // useEffect(이펙트 함수, []);

                // 의존성 배열에 빈 배열([])을 넣으면 마운트와 언마운트시에 단 한 번씩만 실행됨
                // 의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행됨
                // useEffect(이펙트 함수);

                return () => {
                    // 컴포넌트가 마운트 해제되기 전에 실행됨
                    ...
                }

             }, [의존성 변수1, 의존성 변수2, ...]
        
        ex2) import React, { useState, useEffect } from "react";
             function Counter(props) {
                const [count, setCount] = useState(0);

                // componentDidMount, componentDidUpdate와 비슷하게 동작
                useEffect(() => {
                    // 브라우저 API를 사용해서 document의 title을 업데이트
                    document.title = `You clicked ${count} times`;
                });

                return (
                    <div>
                        <p> 총 {count}번 클릭했습니다.</p>
                        <button onClick={() => setCount(count + 1)}>
                            클릭
                        </button>
                    </div>
                );
             }
        
        ex3) import React, { useState, useEffect } from "react";

             function UserStatus(props) {
                const [isOnline, setIsOnline] = useState(null);

                function handleStatusChange(status) {
                    setIsOnline(status.isOnline);
                }

                useEffect(() => {
                    ServerAPI subscribeUserStatus(props.user.id, handleStatusChange);

                    // Component가 unmount될 때 호출됨
                    return () => {
                        ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
                    };
                });

                if (isOnline === null) {
                    return '대기 중...';
                }
                return isOnline ? '온라인' : '오프라인';
             }
        
        ex4) function UserStatusWithCounter(props) {
                const [count, setCount] = useState(0);
                useEffect(() => {
                    document.title = `총 ${count}번 클릭했습니다.`;
                });

                const [isOnline, setIsOnline] = useState(null);
                useEffect(() => {
                    ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
                    return () => {
                        ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
                    };
                });

                function handleStatusChange(status) {
                    setIsOnline(status.isOnline);
                }

                //...
             }

        ex5) useEffect(() => {
                // 컴포넌트가 마운트 된 이후,
                // 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행됨
                // 의존성 배열에 빈 배열([])을 넣으면 마운트와 언마운트시에 단 한 번씩만 실행됨
                // 의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행됨
                ...

                return () => {
                    // 컴포넌트가 마운트 해제되기 전에 실행됨
                    ...
                }
             }, [의존성 변수1, 의존성 변수2, ...]);

    (2) useMemo() : Memoized value를 리턴하는 Hook
        - Memoization : 최적화를 위해서 사용하는 개념, 이전에 호출했던 결과를 바로 받는다.
        ex1) const memoizedValue = useMemo(
                () => {
                    // 연산량이 높은 작업을 수행하여 결과를 반환
                    return computeExpensiveValue(의존성 변수1, 의존성 변수2);
                },
                [의존성 변수1, 의존성 변수2]
             );
        
        ex2) const memoizedValue = useMemo(
                () => computeExpensiveValue(a, b)
             );

        ex3) const memoizedValue = useMemo(
                () => {
                    return computeExpensiveValue(a, b);
                },
                []
             );

    (3) useCallback() : useMemo() Hook과 유사하지만 값이 아닌 함수를 반환
        ex) const memoizedCallback = useCallback(
                () => {
                    doSomething(의존성 변수1, 의존성 변수2);
                },
                [의존성 변수1, 의존성 변수2]
            );
        
        - 동일한 역할을 하는 두 줄의 코드
            > useCallback(함수, 의존성 배열);
            > useMemo(() => 함수, 의존성 배열);

        ex) import { useState } from "react";

            function ParentComponent(props) {
                const [count, setCount] = useState(0);

                // 재렌더링 될 때마다 매번 함수가 새로 정의됨
                const handleClick = (event) => {
                    // 클릭 이벤트 처리
                };

                // useCallback 사용할 경우 : 컴포넌트가 마운트 될 때만 함수가 정의됨
                const handleClick = useCallback((event) => {
                    // 클릭 이벤트 처리
                }, []);

                return (
                    <div>
                        <button
                            onClick={() => {
                                setCount(count + 1);
                            }}
                        >
                            {count}
                        </button>

                        <ChildComponent handleClick={handleClick} />
                    </div>
                );
            }

    (4) useRef() : Reference를 사용하기 위한 Hook
        - 특정 컴포넌트에 접근할 수 있는 객체
        - refObject.current
        - const refContainer = useRef(초깃값);
        ex) function TextInputWithFocusButton(props) {
                const inputElem = useRef(null);

                const onButtonClick = () => {
                    // `current`는 마운트된 input element를 가리킴
                    inputElem.current.focus();
                };

                return (
                    <>
                        <input ref={inputElem} type="text" />
                        <button onClick={onButtonClick}>
                            Focus the input
                        </button>
                    </>
                );
            }

        - <div ref={myRef} /> : 다양한 변수를 저장가능
        - useRef() Hook은 내부의 데이터가 변경되었을 때 별도로 알리지 않음

        - Callback ref
        ex) function MeasureExample(props) {
                const [height, setHeight] = useState(0);

                const measureRef = useCallback(node => {
                    if (node !== null) {
                        setHeight(node.getBoundingClientRect().height);
                    }
                }, []);

                return (
                    <>
                        <h1 ref={measuredRef}>안녕, 리액트</h1>
                        <h2>위 헤더의 높이는 {Math.round(height)}px 입니다.</h2>
                    </>
                );
            }

    (5) Hook의 규칙
        - Hook은 무조건 최상위 레벨에서만 호출해야 한다.
          > Hook은 컴포넌트가 렌더링될 때마다 매번 같은 순서로 호출되어야 한다.
        ex) function MyComponent(props) {
                const [name, setName] = useState('Inje');

                if(name !== '') {
                    useEffect(() => {
                        ...
                    });
                }
                ...
            }
        
        - 리엑트 함수 컴포넌트에서만 Hook을 호출해야 한다.

        - 플러그인 : eslint-plugin-react-hooks 
          > hook의 규칙을 강제로 따르도록 도와주는 도구
        ex) const memoizedValue = useMemo(
                () => {
                    // 연산량이 높은 작업을 수행하여 결과를 반환
                    return computeExpensiveValue(의존성 변수1, 의존성 변수2);
                },
                [의존성 변수1, 의존성 변수2]
            );

        - Custom Hook 만들기    
          > Custom Hook이 필요한 상황확인
        ex1) import React, { useState, useEffect } from "react";

            function UserStatus(props) {
                const [isOnline, setIsOnline ] = useState(null);

                useEffect(() => {
                    function handleStateChange(status) {
                        setIsOnline(status.isOnline);
                    }

                    ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
                    return () => {
                        ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
                    };
                });

                
                if (isOnline === null) {
                    return '대기중...';
                }

                return is Online ? '온라인' : '오프라인';
                
        ex2) import React, { useState, useEffect } from "react";

            function UserStatus(props) {
                const [isOnline, setIsOnline ] = useState(null);

                useEffect(() => {
                    function handleStateChange(status) {
                        setIsOnline(status.isOnline);
                    }

                    ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
                    return () => {
                        ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
                    };
                });
                return (
                    <li style={{ color: isOnline ? 'green' : 'black' }}>
                        {props.user.name}
                    </li>
                );
            }
        
        ex3) ex1, ex2 두개의 예제에서 Custom Hook 사용하기
             function UserStatus(props) {
                const isOnline = useUserStatus(props.user.id);

                if(isOnline === null) {
                    return '대기중...';
                }
                return isOnline ? '온라인' : '오프라인';
             }

             function UserListItem(props) {
                const isOnline = userUserStatus(props.user.id);

                return (
                    <li style={{ color: isOnline ? 'green' : 'black' }}>
                        {props.user.name}
                    </li>
                );
             }

        - Custom Hook의 이름은 꼭 use로 시작해야 한다.
          > 여러 개의 컴포넌트에서 하나의 Custom Hook을 사용할 때 
            컴포넌트 내부에 있는 모든 state와 effects는 전부 분리되어 있음.
          > 각 Custom Hook 호출에 대해서 분리된 state를 얻게 됨!
          > 각 Custom Hook의 호출 또한 완전히 독립적이다.

        - Hook들 사이에서 데이터를 공유하는 방법
        ex) const userList = [
                { id: 1, name: 'Inje' },
                { id: 2, name: 'Mike' },
                { id: 3, name: 'Steve' },
            ];

            function ChatUserSelector(props) {
                /*
                useState Hook을 사용해서 userId라는 state를 생성, 
                다음에 나오는 userUserStatus Hook의 파라미터로 들어감
                setUserID함수를 통해 유저 아이디가 변경될 때 
                useUserStatusHook은 이전 사용자 구독취소하고 새로 선택된 사용자 온라인 여부 구독
                */
                const [userId, setUserId] = useState(1);
                const isUserOnline = useUserStatus(userId);

                return (
                    <>
                        <Circle color={isUserOnline ? 'green' : 'red'} />
                        <select
                            value={userId}
                            onChage={event => setUserId(Number(event.target.value))}
                        >
                            {userList.map(user => (
                                <option key={user.id} value={user.id}>
                                    {user.name}
                                </option>
                            ))}
                        </select>
                    </>
                );
            }

### 8. 섹션9
    (1) Event : 사건
        - 버튼 클릭 이벤트, 이벤트를 핸들링...
        ex) // 리액트의 Event
            <button onClick={activate}>
                Activate
            </button>

            // DOM의 Event
            <button onclick="activate()">
                Activate
            </button>

    (2) Event Handler : 어떤 사건이 발생하면, 사건을 처리하는 역할(Event Listener)
        ex) class Toggle extend React.Component {
                constructor(props) {
                    super(props);

                    this.state = { isToggleOn: true };

                    // callback에서 `this`를 사용하기 위해서는 바인딩을 필수적으로 해줘야
                    this.handleClick = this.handleClick.bind(this);
                }

                handleClick() {
                    this.setState(prevState => ({
                        isToggleOn: !prevState.isToggleOn
                    }));
                }

                render() {
                    return (
                        <button onClick={this.handleClick}>
                            {this.state.isToggleOn ? '켜짐' : '꺼짐'}
                        </button>
                    );
                }
            }
        
        - 바인딩을 안쓰려면 1)
        ex) class MyButton extends React.Component {
                // Class fields syntax 사용
                handleClick = () => {
                    console.log('this is:', this);
                }

                render() {
                    return (
                        <button onClick={this.handleClick}>
                            클릭
                        </button>
                    );
                }
            }
        
        - 바인딩을 안쓰려면 2)
        ex) class MyButton extends React.Component {
                handleClick() {
                    console.log('this is:', this);
                }

                render() {
                    // 이렇게 하면 'this'가 바운드됩니다.
                    // Arrow function 사용
                    return (
                        <button onClick={() => this.handleClick()}>
                            클릭
                        </button>
                    );
                }
            }

        - 함수 컴포넌트에서는 Event처리를 어떻게?
        ex) // 앞에 Toggle Component를 함수 Component로 변환하면?
            function Toggle(props) {
                const [isToggleOn, setIsToggleOn] = useState(true);

                // 방법1. 함수 안에 함수로 정의
                function handleClick() {
                    setIsToggleOn((isToggleOn) => !isToggleOn);
                }

                // 방법2. arrow function을 사용하여 정의
                const handleClick = () => {
                    setIsToggleOn((isToggleOn) => !isToggleOn);
                }

                return (
                    // this를 쓰지 않아도 된다.
                    <button onClick={handleClick}>
                        {isToggleOn ? "켜짐" : "꺼짐"}
                    </button>
                );
            }
        
        - Arguments 전달하기(함수에 주장할 내용, 함수에 전달할 데이터, Parameter(매개변수))
        ex) // 바인딩을 사용하는 방법
            <button onClick={(event) => this.deleteItem(id, event)}>삭제하기</button>
            // Arrow function 사용
            <button onClick={this.deleteItem.bind(this, id)}>삭제하기</button>

        - 함수 컴포넌트에서 Evnet Handler에 매개변수를 전달할 때
        ex) function MyButton(props) {
                const handleDelete = (id, event) => {
                    console.log(id, event.target);
                };

                return (
                    <button onClick={(event) => handleDelete(1, event)}>
                        삭제하기
                    </button>
                );
            }

### 9. 섹션10
    (1) Conditional Rendering : 조건부 렌더링, 어떠한 조건에 따라서 렌더링이 달라지는 것
        ex) //true이면 버튼 보여주고, false이면 버튼 비활성화
            function Greeting(props) {
                const isLoggedIn = props.isLoggedIn;

                if(isLoggedIn) {
                    return <UserGreeting />;
                }
                return <GuestGreeting />;
            }

        - Truthy : true는 아니지만 true로 여겨지는 값
        ex) // truthy
            true
            {} (empty object)
            [] (empty array)
            42 (number, not zero)
            "0", "false" (string, not empty)

        - Falsy : false는 아니지만 false로 여겨니는 값
        ex) // falsy
            false
            0, -0 (zero, minus zero)
            0n (BigInt zero)
            '', "", `` (empty string)
            null
            undefined
            NaN (not a number)

    (2) Element Variables
        ex) function LoginButton(props) {
                return (
                    <button onClick={props.onClick}>
                        로그인
                    </button>
                );
            }

            function LogoutButton(props) {
                return (
                    <button onClick={props.onClick}>
                        로그아웃
                    </button>
                );
            }

            function LoginControl(props) {
                const [isLoggedIn, setIsLoggedIn] = useState(false);

                const handleLoginClick = () => {
                    setIsLoggedIn(true);
                }

                const handleLogoutClick = () => {
                    setIsLoggedIn(false);
                }

                let button;
                if(isLoggedIn) {
                    button = <LogoutButton onClick={handleLogoutClick} />;
                } else {
                    button = <LoginButton onClick={handleLoginClick} />;
                }

                return (
                    <div>
                        <Greeting isLoggedIn = {isLoggedIn} />
                        {button}
                    </div>
                )
            }

    (3) Inline Conditions : 조건문을 코드 안에 집어넣는 것
        - if문의 경우 &&연산자를 사용
            > true && expression -> expression
            > false && expression -> false -> Short-Circuit Evaluation
        
        ex) function Mailbox(props) {
                const unreadMessages = props.unreadMessages;

                return (
                    <div>
                        <h1> 안녕하세요! </h1>
                        {unreadMessages.lendth > 0 &&
                            <h2>
                                현재 {unreadMessages.length}개의 읽지 않은 메시지가 있습니다.
                            </h2>
                        }   
                    </div>
                );
            }

            function Counter(props) {
                const count = 0;

                return(
                    <div>
                        {count && <h1>현재 카운트: {count}</h1>}
                    </div>
                );
            }

    (4) Inline if-Else : if-else문의 경우 ? 연산자를 사용, 삼항연산자
        - condition ? true : false
        ex) function UserStatus(props) {
             return (
              <div>
                이 사용자는 현재 
                <b>{props.isLoggedIn ? '로그인' : '로그인하지 않은'}</b> 
                상태입니다.
              </div>
            )
        }

    (5) Component 랜더링 막기 -> null 리턴
        ex) function WarningBanner(props) {
                if(!props.warning) {
                    return null;
                }

                return (
                    <div>경고!</div>
                );
            }

            function MainPage(props) {
                const [showWarning, setShowWarning] = useState(false);

                const handleToggleClick = () => {
                    setShowWarning(prevShowWarning => !prevShowWarning);
                }

                return (
                    <div>
                        <WarningBanner warning={showWarning} />
                        <button onClick={handleToggleClick}>
                            {showWarning ? '감추기' : '보이기'}
                        </button>
                    </div>
                )
            }
        
        - 참고 : class 컴포넌트의 렌더 함수에서 null을 리턴하는 것은 
                컴포넌트의 생명주기 함수에 전혀 영향x -> ex) componentDidUpdate 함수는 호출됨

### 10. 섹션11
    (1) List : 목록
        - Array
        ex) const numbers = [1, 2, 3, 4, 5];
        
    (2) Key : 열쇠, 고유값
        - 각 개체나 아이템을 구분할 수 있는 고유값
        - React에서의 Key : 아이템들을 구분하기 위한 고유한 문자열

    (3) 여러개의 Component Rendering 하기
        - map() : 다수의 Component 랜더링 가능
        ex) const doubled = numbers.map((number) => number * 2);
        ex) const numbers = [1,2,3,4,5];
            const listItems = numbers.map((number) =>
                <li>{number}</li>
            );

            ReactDOM.render(
                <ul>{listItems}</ul>,
                document.getElementById('root')
            );

            // 최종적으로 rendering되는 코드는 아래와 같다.
            ReactDOM.render(
                <ul>
                    <li>{1}</li>
                    <li>{2}</li>
                    <li>{3}</li>
                    <li>{4}</li>
                    <li>{5}</li>
                </ul>,
                document.getElementById('root')
            );
        
        ex) // 위 예시를 이용하여 별도 리스트 Component를 분리
            function NumberList(props) {
                const { numbers } = props;

                const listItems = numbers.map((number) =>
                    <li>{number}</li>
                );

                return (
                    <ul>{listItems}</ul>
                );
            }

            const numbers = [1,2,3,4,5];
            ReactDOM.render(
                <NumberList numbers={numbers} />,
                document.getElementById('root')
            );
            // 위 예시를 실행하면 개발자모드에서 경고문구가 나온다.
            // > map() 함수 안에 있는 Elements는 꼭 key가 필요하다
    
    (4) List의 Key
        - 주민등록번호, 학번, 핸드폰 번호, 여권번호...
        - Key의 값은 같은 List에 있는 Element 사이에서만 고유한 값이면 됨.
        ex) // 고유한 Key값 사용방법 : Key값으로 숫자를 사용할 경우
            const numbers = [1,2,3,4,5];
            const listItems = numbers.map((number) => 
                <li key={number.toString()}>
                    {number}
                </li>
            );
        ex) // Key값으로 ID를 사용하는 경우
            const todoItems = todos.map((todo, index) =>
                // 아이템들의 고유한 ID가 없을 경우에만 사용해야 함
                <li key={index}>
                    {todo.text}
                </li>
            );
        - map() 함수 안에 있는 Elements는 꼭 key가 필요하다

### 11. 섹션12
    (1) Form : 사용자로부터 입력을 받기 위해 사용
        ex) <form>
                <label>
                    이름:
                    <input type="text" name="name" />
                </label>
                <button type="submit">제출</button>
            </form>

    (2) Controlled Components : 값이 리액트의 통제를 받는 Input Form Element
        - html -> input, textarea, select태그 등 각각의 state로 관리
        - 모든데이터 state에서, 변경할때 setState함수를 사용, 함수 컴포넌트에서는 useState hook사용
        ex) function NameForm(props) {
                const [value, setValue] = useState('');

                // onChageCallback 함수의 첫번째 파라미터인 event는 이벤트 객체를 나타냄
                // event.target은 현재 발생한 이벤트의 타겟을 의미, event.target.value는 타켓의 value 속성값 의미
                // 타겟은 input element가 되며 event.target.value는 input element의 값이됨
                const handleChange = (event) => {
                    setValue(event.target.value);
                }

                const handleSubmit = (event) => {
                    alert('입력한 이름: ' + value);
                    event.preventDefault();
                }

                // 리엑트 컴포넌트의 state 값을 가져다 넣어준다.
                // handleChange 함수에서는 setValue함수를 사용하여 새롭게 변경된 값을 value state에 저장
                return (
                    <form onSubmit={handleSubmit}>
                        <label>
                            이름:
                            <input type="text" value={value} onChage={handleChange} />
                        </lable>
                        <button type="submit">제출</button>
                    </form>
                )
            }

    (3) Textarea 태그
        ex) function RequestForm(props) {
                const [value, setValue] = useState('요청사항을 입력하세요.');

                const handleChange = (event) => {
                    setValue(event.target.value);
                }

                const handleSubmit = (event) => {
                    alert('입력한 요청사항: ' + value);
                    event.preventDefault();
                }

                return (
                    <form onSubmit={handleSubmit}>
                        <label>
                            요청사항:
                            <textarea value={value} onChage={handleChange} />
                        </label>
                        <button type="submit">제출</button>
                    </form>
                )
            }

    (4) Select 태그 : Drop-down 목록을 보여주기 위한 HTML 태그
        ex) function FruitSelect(props) {
                const [value, setValue] = useState('grape');

                const handleChange = (event) => {
                    setValue(event.target.value);
                }

                const handleSubmit = (event) => {
                    alert('선택한 과일: ' + value);
                    event.preventDefault();
                }

                return (
                    <form onSubmit={handleSubmit}>
                        <label>
                            과일을 선택하세요:
                            <select value={value} onChange={handleChange}>
                                <option value="apple">사과</option>
                                <option value="banana">바나나</option>
                                <option value="grape">포도</option>
                                <option value="watermelon">수박</option>
                            </select>
                        </label>
                        <button type="submit">제출</button>
                    </form>
                )
            }
        ex) <!-- 여러 개의 옵션 선택 가능! -->
            <select multiple={true} value={['B', 'C']}>

        ex) // input 태그
            <input type="text" value={value} onChange={handleChange} />

            // textarea 태그
            <textarea value={value} onChange={handleChange} />

            // select 태그
            <select value={value} onChange={handleChange}>
                <option value="apple">사과</option>
                <option value="banana">바나나</option>
                <option value="grape">포도</option>
                <option value="watermelon">수박</option>
            </select>

    (5) File input 태그 : 하나 또는 여러개의 파일을 선택할 수 있게 해주는 html태그

    (6) Multiple Inputs
        ex) function Reservation(props) {
                const [haveBreakfast, setHaveBreakfast] = useState(true);
                const [numberOfGuest, setNumberOfGuest] = useState(2);

                const handleSubmit = (event) => {
                    alert(`아침식사 여부: ${haveBreakfast}, 방문객 수: ${numberOfGuest}`);
                    event.preventDefault();
                }

                return (
                    <form onSubmit={handleSubmit}>
                        <label>
                            아침식사 여부:
                            <input
                                type="checkbox"
                                checked={haveBreakfast}
                                onChange={(event) => {
                                    setHaveBreakfast(evnet.target.cheched);
                                }} />
                        </label>
                        <br />
                        <label>
                            방문객 수:
                            <input
                                type="number"
                                value={numberOfGuest}
                                onChange={(event) => {
                                    setNumberOfGuest(event.target.value);
                                }} />
                        </label>
                        <button type="submit">제출</button>
                    </form>    
                );
            }

    (7) Input Null Value
        ex) ReactDOM.render(<input value="hi" />, rootNode);

            setTimeout(function() {
                ReactDOM.render(<input value={null} />, rootNode);
            }, 1000);



### 12. 섹션13
    (1) Shared State : 공유된 상태
        - State에 있는 데이터를 여러개의 하위 컴포넌트에서 공통으로 사용하는 경우
        - 하위 컴포넌트가 공통된 부모 컴포넌트의 state를 공유하여 사용하는 것
    (2) 하위 컴포넌트에서 State공유하기
        ex) //물의 끓음 여부를 알려주는 컴포넌트
            function BoilingVerdict(props) {
                if(props.celsius >= 100) {
                    return <p>물이 끓습니다.</p>;
                }
                return <p>물이 끓지 않습니다.</p>;
            }

        ex) function Calculator(props) {
                const [temperature, setTemperature] = useState('');

                const handleChange = (event) => {
                    setTemperature(event.target.value);
                }

                return (
                    <fieldset>
                        <legend>섭씨 온도를 입력하세요:</legend>
                        <input
                            value={temperature}
                            onChange={handleChange} />
                        <BoilingVerdict
                            celsius={parseFloat(temperature)} />
                    </fieldset>
                )
            }

    (3) 입력 컴포넌트 추출하기
        ex) const scaleNames = {
                c: '섭씨',
                f: '화씨'
            };

            function TemperatureInput(props) {
                const [temperature, setTemperature] = useState('');

                const handleChange = (event) => {
                    setTemperature(event.target.value);
                }

                return (
                    <fieldset>
                        <legend>
                            온도를 입력해 주세요(단위:{scaleNames[props.scale]});
                        </legend>
                        <input value={temperature} onChange={handleChange} />
                    <fieldset>
                )
            }

        ex) // 위 추출한 컴포넌트를 사용하도록 Calculator 컴포넌트를 변경
            function Calculator(props) {
                return (
                    <div>
                        <TemperatureInput scale="c" />
                        <TemperatureInput scale="f" />
                    </div>
                );
            }

        ex) // 섭씨 <-> 화씨 온도 변환함수
            function toCelsius(fahrenheit) {
                return (fahrenheit - 32) * 5 / 9;
            }

            function toFahrenheit(celsius) {
                return (celsius * 9 / 5) + 32;
            }
        
        ex) // tryConvert 함수는 온도 값과 변환하는 함수를 파라미터로 받아서 값을 변환시켜 리턴
            function tryConvert(temperature, convert) {
                const input = parseFloat(temperature);
                if (Number.isNaN(input)) {
                    return '';
                }
                const output = convert(input);
                const rounded = Math.round(output * 1000) / 1000;
                return rounded.toString();
            }

        ex) tryConvert('abc', toCelsius);       // empty string을 리턴
            tryConvert('10.22', toFahrengeit);  // '50.396'을 리턴
        
    (4) Shared State 적용하기 : lifting state up
        ex) // TemperatureInput 컴포넌트에서 온도값을 가져오는 부분을 수정해야 함
            // 온도값을 컴포넌트 상태에서가 아닌 props에서 가져오게 됨
            return (
                ...
                    // 변경 전: <input value={temperature} onChange={handleChange} />
                    <input value={props.temperature} onChange={handleChange} />
                ...
            )
        
        ex) // 온도값 변경때 props에 있는 onTemperatureChange 함수통해 변경된 온도값이 상위 컴포넌트로 전달됨
            const handleChange = (event) => {
                // 변경 전: setTemperature(event.target.value);
                props.onTemperatureChange(event.target.value);
            }

        ex) // 최종적으로 완성된 TemperatureInput 컴포넌트
            // state는 제거되었고, 오로지 상위 컴포넌트에서 제공된 값만을 받는다.
            function TemperatureInput(props) {
                const handleChange = (event) => {
                    props.onTemperatureChange(event.target.value);
                }

                return (
                    <fieldset>
                        <legend>
                            온도를 입력해 주세요(단위:{scaleNames[props.scale]});
                    </legend>
                        <input value={props.temperature} onChange={handleChange} />
                    </fieldset>
                )
            }

    (5) Calculator 컴포넌트 변경하기
        ex) function Calculator(props) {
                const [temperature, setTemperature] = useState('');
                const [scale, setScale] = useState('c');

                const handleCelsiusChange = (temperature) => {
                    setTemperature(temperature);
                    setScale('c');
                }

                const handleFahrengeitChange = (temperature) => {
                    setTemperature(temperature);
                    setScale('f');
                }

                const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
                const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

                return (
                    <div>
                        <TemperatureInput
                            scale="c"
                            temperature={celsius}
                            onTemperatureChange={handleCelsiusChange} />
                        <TemperatureInput
                            scale="f"
                            temperature={fahrenheit}
                            onTemperatureChange={handleFahrengeitChange} />
                        <BoilingVerdict
                            celsius={parseFloat(celsius)} />
                    </div>
                );
            }


### ch14
(1) Composition(구성) : 합성
    Containment - contain의 의미, 하위 컴포넌트 포함하는 형태 합성방법
                    Sidebar나 Dialog같은 Box형태의 컴포넌트는 자신의 하위 컴포넌트를 미리 알 수 없음
        사용방법 - children이라는 prop을 사용해서 조합

    Specialization - 전문화, 특수화
                        WelcomeDialog는 Dialog의 특이케이스
                        React에서는 합성을 사용해서 구성한다.

(2) Ingeritance : 상속, 다른 컴포넌트로부터 상속 받아 새로운 컴포넌트를 만듬 => React에서는 사용은 안함

=> 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 만들고, 만든 컴포넌트들을 조합해서 새로운 컴포넌트를 만들자!



### ch15
Context : 기존 props통한 데이터 전달방법 대신 데이터 필요로하는 컴포넌트에 곧바로 전달, 단계x, 디버깅 좋음
    로그인 여부, 로그인 정보, UI테마, 현재 언어 등...
    재사용성이 떨어진다.

Context API
    (1) 컨텍스트를 생성
    (2) Context.Provider - object.is 방식으로 판단



### ch16
(1) CSS :selector, style

selector
h1{color: green; font-size: 16px;}
    property   value

    Element selector h1{}
    ID selector : #{}
    Class selector : .{}
    Universal selector : ex) *{}
    Grouping selector : ex) h1,h2,p{}
    Element의 상태와 관련된 selector : hover, active, focus, cheched, first-chile, last-child

(2) 레이아웃과 관련된 속성

div{ display: none; }
    none : 화면숨김, block: 블록단위로 배치, inline: element를 라인안에 넣는것, flex: 블록레벨

visibility : visible, hidden

position : div{position: static;}
    static: 원래위치, fixed: window 상대적, relative: 상대적으로, absolute: 첫번째상위element 기준

가로, 세로길이 속성 : div{ width: auto | value; }...

flexbox
                flex container
    flex item     flex item     flex item

    div{
        display: flex;
        flex-position
    }
    
    flex_direction : row(가로 왼오), column(세로 위아래), row-reverse(가로 오왼), column-reverse(세로 아래위)

    align-items : stretch(컨테이너 가득), flex-start, center, flex-end, baseline
    
    justify-content : flex-start(main axis 시작), center(중앙으로), flex-end, space-between, space-around

(3) font와 관련된 속성

font-family : {font-family: Arial, Verdana;} Arial없으면 Verdana로

px(pixel), em, rem, vw(viewpoint기준)

font-weight

font-style : normal, italic(기울인 글자), oblique(글자를 기울인것)

background-color

border(테두리)


(4) styled-components 

tagged template literal : `` 대체가능한 expression을 쓴다.



