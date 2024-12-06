import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; // Added space
  return <div className={classes}>{props.children}</div>;
}

export default Card;
