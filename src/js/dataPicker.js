import datepicker from 'js-datepicker'
import 'js-datepicker/dist/datepicker.min.css'

const inputDay = document.querySelector('input[data-input="day"]')


export default function(){
  datepicker(inputDay)
}
