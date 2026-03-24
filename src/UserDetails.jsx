export const UserDetails = ({ name, isOnline }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Status:{isOnline ? 'Online' : 'Offline'}</p>
      {isOnline ? <button>Send msg</button> : <small>check back later</small>}
    </div>
  );
};
