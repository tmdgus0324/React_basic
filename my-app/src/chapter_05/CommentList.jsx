import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "Roy",
        comment: "안녕하세요.",
    },
    {
        name: "Mike",
        comment: "반갑습니다.",
    },
    {
        name: "Han",
        comment: "어서오세요.",
    },        
]

function CommentList(props) {
    return (
        <div>
            {/* Comment 다음에 정의를 해줄 수 있다.
            <Comment />
            */}

            {/*
            <Comment name={"Roy"} comment={"안녕하세요."}/>
            <Comment name={"Mike"} comment={"반갑습니다."}/>
            */}

            {/* map함수는 10강에서 학습함 */}
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;