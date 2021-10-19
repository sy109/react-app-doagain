import {Route, Link, useParams} from 'react-router-dom';
import React,{useState} from 'react';

function Header(){
  return <h1><Link to="/">WEB</Link></h1>;
}
function Nav(props){
  var lis = [];
  var topics = props.topics;
  var title, body;
  for(var i = 0; i < topics.length; i ++){
    lis.push(<li><Link to={"/read/" + topics[i].id}>{topics[i].title}</Link></li>);
  }
  return <nav>
  <ol>
    {lis}
  </ol>
</nav>;
}
function Article(props){
  return <article>
  <h2>{props.title}</h2>
  {props.body}
</article>;
}
function Read(props){
  var params = useParams();
  var id = Number(params.id);
  var title, body;
  for (var i = 0; i< props.data.length; i++){
    var topic = props.data[i];
    if (topic.id === id){
      title = topic.title;
      body = topic.body;
    }
  }
  return <Article title={title} body={body}></Article>
}
function App() {
  const [topics,setTopics] = useState([
    { id: 1, title: "html", body: "html is ..."},
    { id: 2, title: "css", body: "css is ..."}
  ]);
  
  return (
    <div>
      <Header></Header>
      <Nav topics={topics}></Nav>
      
      <Route exact path="/">
        <Article title="Welcome" body="Hello, WEB"></Article>
      </Route>
      <Route path="/read/:id">
        <Read data={topics}></Read>
      </Route>
    </div>
  );
}

export default App;