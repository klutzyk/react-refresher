import classes from './Post.module.css';

// const names = ['Kulunu', 'Avinash'];

function Post(props) {
  // const name = Math.random() > 0.5 ? names[0] : names[1];
    
  return (
      <li className={classes.post}>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.text}>{props.body}</p>
      </li>
  );
}

export default Post;
