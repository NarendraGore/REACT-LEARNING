const WelcomeMessage = ({OnGetPostClick}) => {
  return (
    <center className="Welcome-message">
      <h1 >There are No Post</h1>
     <button type="button" 
     onClick={OnGetPostClick}
     className="btn btn-primary">Get Post From Server</button>
    </center>
  );
};
export default WelcomeMessage;
