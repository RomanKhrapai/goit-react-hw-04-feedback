import PropTypes from 'prop-types'
import s from './FeedbackOptions.module.css'

const FeedbackOptions = ({
    options,
    onLeaveFeedback,
}) => {
  return(
    <>
      { options.map(item=>{
          return (<button 
            key={item}
                type='button'
                onClick={onLeaveFeedback}
                className={s.button}
            >{item}</button>
            )   
          }
        )
      }
    </>   
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;

