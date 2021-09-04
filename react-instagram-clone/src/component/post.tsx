import { Link } from "react-router-dom";
import { comment, commentLike, emoji, like, savePost, sharePost } from "../constants/app-constants";
import { PostActionModal } from "./post-action-modal";

export const PostHeader = ({ avatar, username }: any) => {
  return (
    <div>
      <PostActionModal />
      <div className="d-flex flex-row p-3 justify-content-between">
        <div className="d-flex flex-row align-items-center">
          <div>
            <img className="rounded-circle" src={avatar} alt="" width="36" height="36" />
          </div>
          <div className="ps-2">
            <span className="text-bold">{username}</span>
          </div>
        </div>
        <div className="font-weight-bold">
          <Link className="link text-dark" to="" data-bs-toggle="modal" data-bs-target="#postActionModal">
            <strong>...</strong>
          </Link>
        </div>
      </div>
    </div>
  );
}

export const PostBody = ({ media }: any) => {
  return (
    <div className="m-0 p-0">
      <img className="img-fluid" src={media} alt="" />
    </div>
  );
}

export const PostDetail = ({ numberOfLike, postTitle, comments, postedOn }: any) => {
  return (
    <div className="p-3">
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-row">
          <div className="me-3">
            {like}
          </div>
          <div className="me-3">
            {comment}
          </div>
          <div className="me-3">
            {sharePost}
          </div>
        </div>
        <div>
          {savePost}
        </div>
      </div>
      <div>
        <span className="text-bold">{numberOfLike} likes</span>
      </div>
      <div>
        <span className="text-bold">{postTitle}</span>
      </div>
      <div className="text-grey">
        <span>{comments}</span>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <span className="text-bold">jassas315 ❤️❤️❤️</span>
        <span>{commentLike}</span>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <span className="text-bold">midwife_graphy ❤️</span>
        <span>{commentLike}</span>
      </div>
      <div>
        <span className="text-post-time">{postedOn}</span>
      </div>
    </div>
  );
}

export const PostFooter = () => {
  return (
    <>
      <hr className="p-0 m-0 d-none d-sm-none d-md-block" />
      <div className="d-none d-sm-none d-md-block">
        <div className="p-3 d-flex flex-row justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div className="me-2">
              {emoji}
            </div>
            <div className="add-comment">
              <input type="text" placeholder="Add a comment..." />
            </div>
          </div>
          <div>
            <Link className="link" to="/">Post</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export const Post = ({ children }: any) => {
  return (
    <div className="bg-white border mb-4">
      {children}
    </div>
  );
}