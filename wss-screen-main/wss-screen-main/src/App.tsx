import './App.css';
import List from './Components/List';

const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
const colors = [
  'navy',
  'blue',
  'aqua',
  'teal',
  'olive',
  'green',
  'lime',
  'yellow',
  'orange',
  'red',
  'maroon',
  'fuchsia',
  'purple',
  'silver',
  'gray',
  'black',
];
const fruits = [
  'apple',
  'banana',
  'watermelon',
  'orange',
  'peach',
  'tangerine',
  'pear',
  'kiwi',
  'mango',
  'pineapple',
];

const items: {
  name: string;
  color: string;
}[] = []
sizes.forEach(size => {
  fruits.forEach(fruit => {
    colors.forEach(color => {
      items.push({
        name: `${size} ${color} ${fruit}`,
        color,
      })
    })
  })
})

function App() {
  return (
    <>
      <List items={items} />
    </>
  );
}

export default App;
