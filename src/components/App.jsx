import { Component} from 'react'
 import Statistics from './Statistics'
// import FeedbackOptions from './components/FeedbackOptions';
 import Section from './Section';
// import Notification from './components/Notification';



  class App extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
    
      incrementFeedback = (e) => {
        switch (e.target.innerText) {
          case 'good':
        this.setState(state => ({ good: state.good + 1 }));
         break;
         case 'neutral':
        this.setState(state => ({ neutral: state.neutral + 1 }));
        break;
        case 'bad':
        this.setState(state => ({ bad: state.bad + 1 }));
        break;
        default:
        }
      }
    
      countTotalFeedback(){
        return this.state.neutral + this.state.bad + this.state.good;
      }
      countPositiveFeedbackPercentage(){
        const total = this.countTotalFeedback();
        return !total ? "0" : Math.round(this.state.good / total * 10000)/100;
      }

      render() {
        return(
          <>
           <Section title="Please leave feedback" >
           {/* <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.incrementFeedback }
            ></FeedbackOptions>*/}
          </Section>
          <Section title="Statistics" >
          {/* {this.state.bad||this.state.good||this.state.neutral 
              ? */}
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
           {/* :
            <Notification message="There is no feedback"></Notification>
            }*/}
            </Section> 
          </>
        )
      }
    }

export default App;
