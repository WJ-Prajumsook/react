import { Link } from "react-router-dom";

export const PostActionModal = () => {
  return (
    <div className="modal fade" id="postActionModal" aria-labelledby="postActionModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body p-0 m-0">
            <Link to="">
              <div className="text-center modal-item text-color-red">
                <span>Report</span>
              </div>
            </Link>
            <hr />
            <Link to="">
              <div className="text-center modal-item text-color-red">
                <span>Unfollow</span>
              </div>
            </Link>
            <hr />
            <Link to="">
              <div className="text-center modal-item">
                <span>Go to post</span>
              </div>
            </Link>
            <hr />
            <Link to="">
              <div className="text-center modal-item">
                <span>Tagged accounts</span>
              </div>
            </Link>
            <hr />
            <Link to="" data-bs-dismiss="modal">
              <div className="text-center modal-item">
                <span>Cancel</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}