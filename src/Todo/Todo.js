const Todo = ({todo}) => {
  return (
    <div
      style={{
        padding: '15px 30px',
        margin: '5px',
        border: '1px solid #666',
        borderRadius: '10px'
      }}
    >
      <h3>{todo.title}</h3>
      <p>{todo.completed ? 'completed' : 'not done yet'}</p>
    </div>
  );
};

export default Todo;


