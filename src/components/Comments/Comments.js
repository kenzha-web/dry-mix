import { memo, useState, useMemo } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector as useSelectorRedux } from 'react-redux';
import shallowequal from 'shallowequal';
import {sendComment} from "../../store/features/comments/commentsSlice";
import CommentList from "./CommentList/CommentList";
import CommentForm from "./CommentForm/CommentForm";
import treeToList from "../../utils/tree-to-list/treeToList";
import listToTree from "../../utils/list-to-tree/listToTree";

function Comments() {
  const [activeCommentId, setActiveCommentId] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const selectRedux = useSelectorRedux(
    state => ({
      userId: state.auth.userId,
      postId: state.post?.list?.id,
      comments: state.comments.comments,
      commentsCount: state.comments.count,
      newCommentId: state.comments.newCommentId,
    }),
    shallowequal,
  );
  const callbacks = useMemo(
    () => ({
      onAnswerClick: id => setActiveCommentId(id),
      onCancelClick: () => setActiveCommentId(''),
      onSendComment: message => {
        const type = activeCommentId ? 'comment' : 'post';
        dispatch(
          sendComment({
            text: message,
            parent: { _id: activeCommentId || selectRedux.postId, _type: type },
          }),
        );
      },
      onSignIn: () => navigate('/signin', { state: { back: location.pathname } }),
    }),
    [activeCommentId, dispatch, location.pathname, navigate, selectRedux.postId],
  );

  const newComments = useMemo(
    () =>
      treeToList(listToTree(selectRedux.comments, selectRedux.postId), (item, level) => ({
        ...item,
        level,
      })),
    [selectRedux.comments],
  );

  return (
    <div>
      <CommentList
        comments={newComments}
        activeCommentId={activeCommentId}
        newCommentId={selectRedux.newCommentId}
        userId={selectRedux.userId}
        onAnswerClick={callbacks.onAnswerClick}
        onCancelClick={callbacks.onCancelClick}
        onSendComment={callbacks.onSendComment}
        onSignIn={callbacks.onSignIn}
      />
      {!activeCommentId && (
        <CommentForm
          userId={selectRedux.userId}
          onSignIn={callbacks.onSignIn}
          onSendComment={callbacks.onSendComment}
        />
      )}
    </div>
  );
}

export default memo(Comments);
