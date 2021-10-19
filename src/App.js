import {Route, Link} from 'react-router-dom';


function App() {
  function Header(){
    return <h1><Link to="/">WEB</Link></h1>;
  }
  function Nav(){
    return <nav>
    <ol>
      <li><Link to="/read/1">html</Link></li>
      <li><Link to="/read/2">css</Link></li>
    </ol>
  </nav>;
  }
  function Article(){
    return <article>
    <h2>Welcome</h2>
    Hello, React
  </article>;
  }
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      
      <Route exact path="/">Welcome</Route>
      <Route path="/read/:id">Read</Route>
    </div>
  );
}

export default App;