import React ,{useContext, useEffect} from 'react'
import {Context} from "../index";
import {useLocation, useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {fetchQuestions} from '../http/testApi'
import {useParams} from 'react-router-dom'
import QuaItem from './QuaItem'
import Button from "react-bootstrap/Button";
import {Card} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import './style/st.css'

import { Component } from 'react';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';



class TestItem extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        counter: 0,
        questionId: 1,
        question: '',
        answerOptions: [],
        answer: '',
        answersCount: {},
        result: 0
      };
  
      this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }
  
    componentDidMount() {
      const shuffledAnswerOptions = quizQuestions.map(question =>
        this.shuffleArray(question.answers)
      );
      this.setState({
        question: quizQuestions[0].question,
        answerOptions: shuffledAnswerOptions[0]
      });
    }
  
    shuffleArray(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;
  
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
  
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
  
      return array;
    }
  
    handleAnswerSelected(event) {
      this.setUserAnswer(event.currentTarget.value);
  
      if (this.state.questionId < quizQuestions.length) {
        setTimeout(() => this.setNextQuestion(), 600);
      } else {
        setTimeout(() => this.setResults(this.getResults()), 600);
      }
    }
  
    setUserAnswer(answer) {
      this.setState((state, props) => ({
        answersCount: {
          ...state.answersCount,
          [answer]: (state.answersCount[answer] || 0) + 1
        },
        answer: answer
      }));
    }
  
    setNextQuestion() {
      const counter = this.state.counter + 1;
      const questionId = this.state.questionId + 1;
  
      this.setState({
        counter: counter,
        questionId: questionId,
        question: quizQuestions[counter].question,
        answerOptions: quizQuestions[counter].answers,
        answer: ''
      });
    }
  
    getResults() {
      const answersCount = this.state.answersCount;
      return answersCount['True']
     /* const answersCountKeys = Object.keys(answersCount);
      console.log(answersCountKeys)
      const answersCountValues = answersCountKeys.map(key => answersCount[key]);
      console.log(answersCountValues)
      const maxAnswerCount = Math.max.apply(null, answersCountValues);
        console.log(maxAnswerCount)
      return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);*/
    }
  
    setResults(result) { 
        this.setState({ result: result});
    }
  
    renderQuiz() {
      return (
        <Quiz
          answer={this.state.answer}
          answerOptions={this.state.answerOptions}
          questionId={this.state.questionId}
          question={this.state.question}
          questionTotal={quizQuestions.length}
          onAnswerSelected={this.handleAnswerSelected}
        />
      );
    }
  
    renderResult() {
      return <Result quizResult={this.state.result} />;
    }
  
    render() {
      return (
        <div className="App">
            <Card className="container">
          {this.state.result ? this.renderResult() : this.renderQuiz()}
          </Card>
        </div>
      );
    }
  }
  
  export default TestItem;




/*const TestItem= observer((props)=> {
    const {tests} = useContext(Context)
    const {id} = useParams()
    useEffect(()=>{
        fetchQuestions(id).then(data=>tests.setQuestions(data))
    },[])
    function renderAnswerOptions(key) {
        return (
        <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
        />
        );
        }
        return (
            <div className="content">
                <Card>
                <QuestionCount
                    counter={props.questionId}
                    total={props.questionTotal}
                    />
                    <Question content={props.question} />
                    <ul className="answerOptions">
                    {props.answerOptions.map(renderAnswerOptions)}
                    </ul>
                </Card>
          </div>
        )
    })

    TestItem.propTypes = {
        answer: React.PropTypes.string.isRequired,
        answerOptions: React.PropTypes.array.isRequired,
        counter: React.PropTypes.number.isRequired,
        question: React.PropTypes.string.isRequired,
        questionId: React.PropTypes.number.isRequired,
        questionTotal: React.PropTypes.number.isRequired,
        onAnswerSelected: React.PropTypes.func.isRequired
        };

export default TestItem;*/

/*
<Form className="m-t-20">
                {
                        tests.questions.map(test=>
                            <QuaItem
                                id={test.id}
                                number={test.number}
                                title={test.number}
                                qua={test.question}
                                key={'k'+test.number}
                                answers = {test.answers}
                            /> 
                            )
                    }
                    <Button variant="primary">Завершить тест</Button>
                    </Form>


                    <Tabs
                    defaultActiveKey="k1"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                    >
                   
                    {
                        tests.questions.map(test=>
                            <QuaItem
                                id={test.id}
                                number={test.number}
                                title={test.number}
                                qua={test.question}
                                key={'k'+test.number}
                            /> 
                            )
                    }
                    
                    
                </Tabs>
*/