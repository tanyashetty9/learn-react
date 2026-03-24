import './App.css';
import Button from './Button';
import { CandidateProfile } from './CandidateProfile';
import { CardWrapper } from './CardWrapper';
import { Hello, HelloWithoutJSX } from './Hello';
import { Product } from './Product';
import { UserDetails } from './UserDetails';
import { Welcome } from './Welcome';

function App() {
  return (
    <div>
      {/* conditional rendering */}
      <UserDetails name="bruce" isOnline={true} />
      <UserDetails name="clark" isOnline={false} />

      {/* passing jsx as children */}
      <CardWrapper title="User Profile">
        <p>Bruce wayne</p>
        <p>batman.gmail.com</p>
        <button>edit profile</button>
      </CardWrapper>

      {/* destructuring and props */}
      <Product
        title="Gaming laptop"
        price={1299.99}
        inStock={true}
        categories={['Electronics', 'Comp', 'Gaming']}
      />

      <Welcome name="Bruce" alias="Batman" />
      <Welcome name="Clark" alias="Superman" />
      <CandidateProfile />
      <h1>hii</h1>
      <Hello />
      <HelloWithoutJSX />

      <Button />
    </div>
  );
}

export default App;
