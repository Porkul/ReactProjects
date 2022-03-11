import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick);
    //cleanup function
    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  //null in react means to return nothing 
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;


/*
    The cleanup function is part of the useEffect's hooks functionality. If you return a function within useEffect React will call this function at specific times:

    The clean-up function runs before the component is removed from the UI to prevent memory leaks. 
    Additionally, if a component renders multiple times (as they typically do), the previous effect is cleaned up before executing the next effect.

    https://reactjs.org/docs/hooks-reference.html#useeffect

    Why did we return a function from our effect? 
    This is the optional cleanup mechanism for effects.
    Every effect may return a function that cleans up after it. This lets us keep the logic for adding and removing subscriptions close to each other. They’re part of the same effect!

    When exactly does React clean up an effect? 
    React performs the cleanup when the component unmounts. However, as we learned earlier, effects run for every render and not just once. 
    This is why React also cleans up effects from the previous render before running the effects next time.

    https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
*/