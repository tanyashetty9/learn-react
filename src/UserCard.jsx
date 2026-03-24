import { UserInfo } from './UserInfo';

// export const UserCard = ({ name, age, city, email }) => {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <UserInfo name={name} age={age} city={city} email={email} />
//     </div>
//   );
// };

// export const UserCard = (props) => {
//   return (
//     <div>
//       <h2>User Details</h2>
//       <UserInfo {...props} />
//     </div>
//   );
// };

export const UserCard = ({ id, ...rest }) => {
  return (
    <div>
      <h2>User{id} Details</h2>
      <UserInfo {...rest} />
    </div>
  );
};
