const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  return (
    <div>
      <h1>Hacker Stories</h1>
      <Search />

      <hr />

      <List />
    </div>
  );
}
// this creates a new React component for the Search
function Search() {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

// this creates another component for the List
function List() {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span> by: {item.author}</span>
          <span>, comments ({item.num_comments})</span>
          <span>, points ({item.points})</span>
        </li>
      ))}
    </ul>
  );
}

export default App;
