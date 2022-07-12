const Server = (props) => {
  return (
    <div>
      The {props.chartHeading} user subscribed the following channels
      <br />
      <p className="font">{props.data}</p>
      <hr />
    </div>
  );
};
export default Server;
