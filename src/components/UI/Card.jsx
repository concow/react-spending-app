import "./Card.css";

//reusable wrapper component using "composition"

export default function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}
