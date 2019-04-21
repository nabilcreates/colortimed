import React from 'react'
import * as $ from 'jquery';
import p5 from 'p5'

let map = new p5().map

class App extends React.Component{

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    convertToHex(time){
        let timestr = time.toISOString().split('T')[1].split('.')[0].split(':')
        let hr = Math.round(map(timestr[0], 0 , 24, 0 , 255)).toString(16)
        let mm = Math.round(map(timestr[1], 0 , 59, 0 , 255)).toString(16)
        let ss = Math.round(map(timestr[2], 0 , 59, 0 , 255)).toString(16)

        console.log(`hr: ${hr}`)
        console.log(`mm: ${mm}`)
        console.log(`ss: ${ss}`)
        
        let finaltimestr = `${hr}${mm}${ss}`
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
                <p>{new Date().toISOString().split('T')[1].split('.')[0]}</p>
                <h6>Another open-source project by <a href='https://renabil.github.io' >renabil</a></h6>
            </div>
        )
    }
}

export default App