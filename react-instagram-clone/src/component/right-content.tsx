import { Link } from "react-router-dom";

const suggestedList = [
  {
    username: 'username_here',
    detail: 'Suggested for you',
    imageUrl: './images/avatar/avatar-04.png'
  },
  {
    username: 'username_here',
    detail: 'Suggested for you',
    imageUrl: './images/avatar/avatar-05.png'
  },
  {
    username: 'username_here',
    detail: 'Suggested for you',
    imageUrl: './images/avatar/avatar-06.jpg'
  },
  {
    username: 'username_here',
    detail: 'Suggested for you',
    imageUrl: './images/avatar/avatar-07.jpg'
  },
  {
    username: 'username_here',
    detail: 'Suggested for you',
    imageUrl: './images/avatar/avatar-08.jpg'
  },
];

interface IRightContent {
  username: string,
  fullName: string,
}
export const RightContent = ({ username, fullName }: IRightContent) => {
  return (
    <div className="right-content ms-3 p-0">
      <div className="d-flex flex-row align-items-center justify-content-between">
        <div className="d-flex flex-row align-items-center">
          <img className="rounded-circle me-3" src="./images/avatar/avatar.jpg" alt="" width="62" height="62" />
          <div className="d-flex flex-column">
            <span className="text-bold">{username}</span>
            <span className="text-bold">{fullName}</span>
          </div>
        </div>
        <div>
          <Link className="link" to="/">Switch</Link>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between mt-2">
        <div className="text-secondary text-bold">Suggestions for you</div>
        <div className="text-bold">See all</div>
      </div>
      {
        suggestedList.map((item) => {
          return (
            <div className="d-flex flex-row justify-content-between align-items-center mt-3">
              <div className="d-flex flex-row align-items-center">
                <div>
                  <img className="rounded-circle" src={item.imageUrl} alt="" width="32" height="32" />
                </div>
                <div className="d-flex flex-column ms-3">
                  <span className="text-bold">{item.username}</span>
                  <span className="text-grey">{item.detail}</span>
                </div>
              </div>
              <div>
                <Link to="/" className="link">Follow</Link>
              </div>
            </div>
          );
        })
      }
      <div className="footer text-start p-0 mt-4">
        About . Help . Press . API . Jobs . Privacy . Terms . Location . Top accounts . Hashtags
      </div>
      <div className="copyright text-start p-0 mt-3">
        © 2021 INSTAGRAM FROM FACEBOOK
      </div>
    </div>
  );
}