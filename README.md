# React_basic

React 기초공부

=================== 참고사항 =================== 

1. terminal 이용할 때 아래 오류가 나올 수 있다.
npm : 이 시스템에서 스크립트를 실행할 수 없으므로 C:\Program Files\nodejs\npm.ps1 파일을 로드할 수 없습니다.
자세한 내용은 about_Execution_Policies(https://go.microsoft.com/fwlink/?LinkID=135170)를 참조하십시오.
-> 권한문제 -> powershell 관리자모드 -> Set-ExecutionPolicy RemoteSigned 권한변경하고 사용한다.

2. React는 버전별로 차이가 있다. 17버전 설치하기
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

3. npm install --save styled-components 설치시 에러나타날 때
--legacy-peer-deps : 기존 라이브러리 버전 무시하고 설치 -> 17버전 기준 추가하여 설치 시 정상TEST 가능
--force : package.json 또는 package-lock.json 파일에 여러가지 의존 버전들을 추가하면서 설치




