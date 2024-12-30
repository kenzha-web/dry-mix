import { memo } from 'react';
import CommentForm from "../CommentForm/CommentForm";
import {formatDate} from "../../../utils/date-format";

function CommentItem({
   comment,
   activeCommentId,
   lastChildCommentId,
   newCommentId,
   userId,
   onAnswerClick,
   onCancelClick,
   onSendComment,
   onSignIn,
 }) {
  const MAX_LEVEL = 6;
  const PAD_SIZE = 30;

  const isCommentNew = newCommentId === comment._id;
  const isSelf = userId === comment.author._id;

  return (
    <li
      className={`mb-8 ${isCommentNew ? 'bg-blue-50' : ''}`}
      style={{
        marginLeft: `${Math.min(comment.level, MAX_LEVEL) * PAD_SIZE}px`,
      }}
    >
      <div className="mb-2 text-xs">
        <span className={`font-bold mr-2 ${isSelf ? 'text-gray-500' : ''}`}>{comment.author.profile.name}</span>
        <span className="text-gray-500">{formatDate(comment.createAt)}</span>
      </div>
      <p className="mt-0 mb-2 text-sm break-words">{comment.content}</p>
      <button
        className="m-0 p-0 border-none inline-block text-xs bg-transparent text-blue-500 cursor-pointer"
        onClick={() => onAnswerClick(comment._id)}
      >
        Ответить
      </button>
      {lastChildCommentId === comment._id && (
        <CommentForm
          userId={userId}
          activeCommentId={activeCommentId}
          lastChildCommentId={lastChildCommentId}
          activeCommentAuthor={comment.author.profile.name}
          onCancelClick={onCancelClick}
          onSendComment={onSendComment}
          onSignIn={onSignIn}
        />
      )}
    </li>
  );
}

export default memo(CommentItem);
