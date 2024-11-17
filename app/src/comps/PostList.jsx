import classes from './PostList.module.css';
import Post from './Post';

function PostList(props) {
    return (
      <ul>
          <Post author="Kulunu" body="Hello everyone" />
          <Post author="Avinash" body="Yoooo" />
      </ul>
    );
}

export default PostList;