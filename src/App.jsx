const App = () => {
  const stories = [
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

  return (
    <div>
      <h1>Hacker Stories</h1>

      <Search />

      <hr />

      <List list={stories} />
    </div>
  );
};

// this creates a new React component for the Search
const Search = () => {
  const handleChange = (event) => {
    console.log("synthetic event: ", event);
    console.log("Value of target: ", event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        onChange={handleChange}
        onBlur={handleChange}
      />
    </div>
  );
};

// this creates another component for the List
const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

// make each item a component
const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span> by: {props.item.author}</span>
    <span>, comments ({props.item.num_comments})</span>
    <span>, points ({props.item.points})</span>
  </li>
);

export default App;
