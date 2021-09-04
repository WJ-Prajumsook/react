
interface StoryBarContent {
  avatar: string,
  username: string,
}

export const StoryBar = ({ avatar, username }: StoryBarContent) => {
  return (
    <div className="d-flex flex-column me-4">
      <img className="rounded-circle rounded-circle-story" src={avatar} alt="" />
      <span className="text-grey">{username}</span>
    </div>
  );
}