import { useState, memo } from 'react';
import { Link } from 'react-router-dom';

function CommentForm({
   activeCommentId: commentId,
   lastChildCommentId: lastChildId,
   userId,
   onCancelClick: handleCancelClick,
   onSendComment: handleSendComment,
   onSignIn: handleSignIn,
 }) {
  const [message, setMessage] = useState('');

  const isSignedIn = Boolean(userId);

  const handleCancel = () => {
    setMessage('');
    handleCancelClick();
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (message.trim()) {
      handleSendComment(message);
      setMessage('');
    }
  };

  return (
    <div className={`mt-8 ${commentId === lastChildId ? 'ml-8' : ''}`}>
      {isSignedIn ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="flex flex-col m-0 p-0 border-none">
            <legend className="mb-2 text-xs font-bold">
              {commentId ? "Новый ответ" : "Новый комментарий"}
            </legend>
            <textarea
              className="mb-2 text-sm leading-4 border p-2"
              rows="5"
              value={message}
              onChange={event => setMessage(event.target.value)}
            />
            <div className="flex space-x-2">
              <button
                className="px-4 py-2 text-white bg-blue-500 rounded disabled:opacity-50"
                type="submit"
                disabled={!message?.trim()}
              >
                Отправить
              </button>
              {commentId && (
                <button
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded"
                  type="button"
                  onClick={handleCancel}
                >
                  Отмена
                </button>
              )}
            </div>
          </fieldset>
        </form>
      ) : (
        <div>
          <Link
            className="inline-block text-blue-600 border-b border-blue-600"
            to="/signin"
            onClick={handleSignIn}
          >
            Войдите
          </Link>{' '}
          {commentId ? "чтобы иметь возможность комментировать" : "чтобы иметь возможность ответить"}
          {commentId && (
            <button
              className="inline-block ml-2 text-gray-600 border-b border-gray-600 bg-transparent"
              type="button"
              onClick={handleCancel}
            >
              Отмена
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default memo(CommentForm);
