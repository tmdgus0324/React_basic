import React from "react";

class ConfirmButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isConfirmed: false
        };
        // Class fields syntax 사용시 주석처리
        // this.handleConfirm = this.handleConfirm.bind(this);
    }

    // (1) 이벤트 핸들러 -> bind사용하는 방식
    /*
    handleConfirm() {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }
    */

    // (2) Arrow function 으로 변경
    
    handleConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }
    

    render() {
        return (
            <button
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
            >
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}

export default ConfirmButton;