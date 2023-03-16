import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Signup from './Signup';
import Login from './Login'
// import Sonnet from 'Sonnet';

function Homepage() {
  return (
    <Tabs
      defaultActiveKey="login"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      
      <Tab eventKey="login" title="Log In">
        <Login/>
      </Tab>
      <Tab eventKey="signup" title="Signup">
        <Signup/>
      </Tab>
      
    </Tabs>
  );
}

export default Homepage;