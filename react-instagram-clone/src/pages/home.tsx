import { useContext } from 'react';
import { Post, PostBody, PostDetail, PostFooter, PostHeader } from '../component/post';
import { RightContent } from '../component/right-content';
import { StoryBar } from '../component/story-bar';
import UserContext from '../context/user-context';
import { useLoggedInUser } from '../hooks/use-loggedin-user';
import './home.css';

const storyList = [
  {
    avatar: './images/avatar/avatar-01.png',
    username: 'username'
  },
  {
    avatar: './images/avatar/avatar-02.jpg',
    username: 'username'
  },
  {
    avatar: './images/avatar/avatar-03.png',
    username: 'username'
  },
];

const postList = [
  {
    postId: 'fsfsdfsderwgherh',
    username: 'post_username',
    avatar: './images/avatar/avatar-01.png',
    media: './images/post/post-01.jpg',
    numberOfLike: '10,323',
    postTitle: 'the post title',
    comments: 'View all 100 comments',
    postedOn: '12 HOURS AGO'
  },
  {
    postId: 'fsfsdfsderwgherh',
    username: 'post_username',
    avatar: './images/avatar/avatar-02.jpg',
    media: './images/post/post-02.jpg',
    numberOfLike: '10,323',
    postTitle: 'the post title',
    comments: 'View all 34 comments',
    postedOn: '16 HOURS AGO'
  },
  {
    postId: 'fsfsdfsderwgherh',
    username: 'post_username',
    avatar: './images/avatar/avatar-03.png',
    media: './images/post/post-03.jpg',
    numberOfLike: '1,323',
    postTitle: 'the post title',
    comments: 'View all 101 comments',
    postedOn: '2 HOURS AGO'
  },
]

export const Home = () => {
  const userContext = useContext(UserContext);
  const { user } = useLoggedInUser(userContext?.uid);

  return (
    <div className="row content-row">
      <div className="col col-left p-0">
        <div className="bg-white border pt-3 ps-3 pb-3 d-flex flex-row justify-content-start mb-4">
          {
            storyList.map((item) => {
              return <StoryBar
                avatar={item.avatar}
                username={item.username} />
            })
          }
        </div>
        {
          postList.map((item) => {
            return (<Post>
              <PostHeader avatar={item.avatar} username={item.username} />
              <PostBody media={item.media} />
              <PostDetail
                numberOfLike={item.numberOfLike}
                postTitle={item.postTitle}
                comments={item.comments}
                postedOn={item.postedOn}
              />
              <PostFooter />
            </Post>);
          })
        }
      </div>
      <div className="col col-right p-4">
        <div className="position-fixed">
          <RightContent
            username={user?.username}
            fullName={user?.fullName}
          />
        </div>
      </div>
    </div>
  );
}