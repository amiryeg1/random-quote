import { useDispatch} from 'react-redux'
import {nextQuote} from '../store/quotes_slice'
import classes from './new_quotes.module.css'
const NewQuote = () => {
  const dispatch = useDispatch()

    return (
        <button class={classes.button} id="new-quote" onClick={()=> dispatch(nextQuote())}>new quote</button>
    )
}

export default NewQuote;