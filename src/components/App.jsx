import { useState} from 'react'
 import Statistics from './Statistics'
 import FeedbackOptions from './FeedbackOptions';
 import Section from './Section';
 import Notification from './Notification';



  function App (){
    const [good,setGood] = useState(0);
    const [neutral,setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    
     const incrementFeedback = (e) => {
        switch (e.target.innerText) {
          case 'good':
            setGood(state=>state + 1);
         break;
         case 'neutral':
          setNeutral(state=>state + 1);
        break;
        case 'bad':
          setBad(state=>state + 1);;
        break;
        default:
        }
      }
    
     function countTotalFeedback(){
        return neutral + bad + good;
      }

    function  countPositiveFeedbackPercentage(){
        const total = countTotalFeedback();
        return !total ? "0" : Math.round(good / total * 10000)/100;
      }

        return(
          <>
           <Section title="Please leave feedback" >
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={incrementFeedback }
            />
          </Section>
          <Section title="Statistics" >
          {bad||good||neutral 
              ?
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          :
            <Notification message="There is no feedback"/>
            }
            </Section> 
          </>
        )
      
    }

export default App;
