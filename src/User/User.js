const User = ({user}) => {
  return (
    <div
      style={{
        padding: '10px 30px',
        margin: '5px',
        border: '1px solid #666',
        borderRadius: '10px'
      }}
    >
      <h3>{user.name}</h3>
      <p>mail: {user.mail}</p>
      <p>team: {user.team}</p>
      <p>phone: {user.phone}</p>
    </div>
  );
};

export default User;


