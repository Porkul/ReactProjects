import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;


/*   A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you use React state in a function component.
        import React , {useState} from 'react'  -  importing the useState Hook from React:

    const Accordion = ({ items }) => {}  -  receiving a list of items from App.js.

    const [activeIndex, setActiveIndex] = useState(null) - where:
        activeIndex - value is going to change over time
        setActiveIndex - function to update piece of state, it will cause our entire component to automatically render.
        useState(null) - argument (null) is a default value


    const [activeIndex, setActiveIndex] = useState(null);  -  means the same as lines of code below (Array destructuring)

        const things = useState(null);
        const activeIndex = things[0];
        const setActiveIndex = things[1]; 
    
    if <div></div> instead of <React.Fragment></React.Fragment> we will encounter with double border. So fragment is a solution.
*/




//const renderedItems = items.map((item, index) => {    `content ${active}`
    // className={`title ${active}`}
   // onClick={() => onTitleClick(index)}
    //<div></div>
//const active = index === activeIndex ? 'active' : '';
//return <div className="ui styled accordion">{renderedItems}</div>;