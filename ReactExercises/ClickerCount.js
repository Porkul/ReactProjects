/*
   export default function App() {
      const onButtonClick = () => {

      };

      return (
          <div>
              <button onClick={onButtonClick}>Click Me!</button>

              <h1>Current Count:</h1>
          </div>
      );
  }
  
  //click me - button
  //current count: 0 - value increases by clicking at the button
*/





export default function App() {
    const [count, setCount] = useState(0);
    
    const onButtonClick = () => {
        setCount(count + 1);
    };
    
    return (
        <div>
            <button onClick={onButtonClick}>Click Me!</button>
            
            <h1>Current Count: {count}</h1>
        </div>
    );
}
