import * as $ from 'jquery';
import "./styles.scss"

let timestr = new Date().toISOString().split('T')[1].split('.')[0].split(':')
let finaltimestr = timestr[0] + timestr[1] + timestr[2]
console.log(finaltimestr)

$('#time').text(`#${finaltimestr}`)
$('body').css('background-color', `#${finaltimestr}`)