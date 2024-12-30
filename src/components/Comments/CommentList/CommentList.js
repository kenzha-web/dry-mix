import { memo } from 'react';
import CommentItem from "../CommentItem/CommentItem";

function CommentList({
   comments,
   activeCommentId,
   newCommentId,
   userId,
   onAnswerClick,
   onCancelClick,
   onSendComment,
   onSignIn,
   t,
 }) {
  const lastChildCommentIndex = comments.findIndex(
    comment => comment.parent._id === activeCommentId,
  );
  const lastChildCommentId =
    lastChildCommentIndex === -1 ? activeCommentId : comments[lastChildCommentIndex]._id;

  return (
    <ul className="m-0 mb-8 p-0 list-none">
      {comments.map(comment => (
        <CommentItem
          key={comment._id}
          comment={comment}
          activeCommentId={activeCommentId}
          lastChildCommentId={lastChildCommentId}
          newCommentId={newCommentId}
          userId={userId}
          onAnswerClick={onAnswerClick}
          onCancelClick={onCancelClick}
          onSendComment={onSendComment}
          onSignIn={onSignIn}
        />
      ))}
    </ul>
  );
}

export default memo(CommentList);
