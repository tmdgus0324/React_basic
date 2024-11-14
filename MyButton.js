// React의 함수 Component 예시
function MyButton(props){
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        { onClick: () => setIsClicked(true) },
        isClicked ? 'Clicked!' : 'Click here!'
    )
}

// ReactDOM의 render 함수를 사용해서 React Component를 DomContainer에 rendering 한다는 의미
// script를 사용해서 component를 가져왔다고 해도 component가 화면에 보이는 것은 아니다.

// 
const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);

// 
// const root = ReactDOM.createRoot(domContainer);
// root.render(React.createElement(MyButton));


