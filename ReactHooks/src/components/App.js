import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';

const items = [
	{
		title: 'what is React ?',
		content: 'React is a front end javascript framework'
	},
	{
		title: 'Why use React ?',
		content: 'React is favorite JS library among engineers'
	},
	{
		title: 'How do you use React ?',
		content: 'You use React by creating components'
	}
];

//array does not change- it is static
const options = [
	{
		label: 'The Color Red',
		value: 'red'
	},
	{
		label: 'The Color Green',
		value: 'green'
	},
	{
		label: 'A Shade of Blue',
		value: 'blue'
	}
];


export default function App(){
	const [selected, setSelected] = useState(options[0]);
  
	return (
	  <div>
		<Header />
		<Route path="/">
		  <Accordion items={items} />
		</Route>
		<Route path="/list">
		  <Search />
		</Route>
		<Route path="/dropdown">
		  <Dropdown
			label="Select a color"
			options={options}
			selected={selected}
			onSelectedChange={setSelected}
		  />
		</Route>
		<Route path="/translate">
		  <Translate />
		</Route>
	  </div>
	);
  };

/*
    const [selected, setSelected] = useState(options[0]);

If you write "export default () => { ... }" to declare components, they:

- will show up as Anonymous in stack traces

- will show up as Unknown in DevTools

- won't be checked by React-specific lint rules

- won't work with some features like Fast Refresh
 */