import React from 'react'
import * as $ from 'jquery';

class App extends React.Component{

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    convertToHex(time){
        let timestr = time.toISOString().split('T')[1].split('.')[0].split(':')
        let finaltimestr = timestr[0] + timestr[1] + timestr[2]

        this.setBackgroundColor(finaltimestr)
        return finaltimestr
    }

    setBackgroundColor(time_hex){
        $('body').css('background-color', `#${time_hex}`)
    }
    
    render(){
        return(
            <div id='header'>
                <h1>#{this.convertToHex(new Date())}</h1>
                <h6>Another open-source project by <a href='https://renabil.github.io' >renabil</a></h6>
            </div>
        )
    }
}

export default App