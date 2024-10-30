import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },    
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        /* state에 넣어서 초기화 */
        this.state = {
            notifications: [],
        };
    }

    // 1초마다 정해진 작업을 수행한다.
    componentDidMount() {
        const {notifications} = this.state;
        timer = setInterval(() => {
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);

                // state를 업데이트 하기 위해 setState를 사용
                this.setState({
                    notifications: notifications,
                });
            } else {
                // unmount 확인하기 위한 notifications 비우는 방법
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification 
                            key={notification.id}
                            id={notification.id}
                            message={notification.message} 
                        />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;

