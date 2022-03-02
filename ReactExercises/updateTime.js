/* Goal: Update the Clock class so it properly updates once per second

    class Clock extends React.Component {
        componentDidMount() {
            setInterval(() => {
                this.time = new Date().toLocaleTimeString()    
            }, 1000)
        }
        
        render() {
            return (
                <div className="time">
                    The time is: {this.time}
                </div>
            );
        }
    }
    
 Solution:
 */ 
    class Clock extends React.Component {
        // set default time value
        state = {time: ''}; 
        componentDidMount() {
            setInterval(() => {
               //use setState method
                this.setState({time: new Date().toLocaleTimeString()})
            }, 1000)
            
        }
        
        render() {
            return (
                <div className="time">
                    //add state
                    The time is: {this.state.time}
                </div>
            );
        }
  }
