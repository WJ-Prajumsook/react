import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        <Link to="/">About</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Jobs</Link>
        <Link to="/">Help</Link>
        <Link to="/">API</Link>
        <Link to="/">Privacy</Link>
        <Link to="/">Terms</Link>
        <Link to="/">Top Accounts</Link>
        <Link to="/">Hashtags</Link>
        <Link to="/">Locations</Link>
      </div>
      <div className="links">
        <Link to="/">Beauty</Link>
        <Link to="/">Dance</Link>
        <Link to="/">Fitness</Link>
        <Link to="/">Food / drink</Link>
        <Link to="/">Home / garden</Link>
        <Link to="/">Music</Link>
        <Link to="/">visual arts</Link>
      </div>
      <div className="copyright">
        © 2021 Instagram from Facebook
      </div>
    </div>
  );
}