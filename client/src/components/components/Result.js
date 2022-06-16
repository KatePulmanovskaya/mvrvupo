import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import {useParams} from 'react-router-dom'
import {Context} from "../../index";
import {updateStats} from "../../http/testApi";

function Result(props) {
  const {id} = useParams()
  const {user} = useContext(Context)
  const userId = user.userID
  const testId = id
  const mark = props.quizResult
  console.log(userId + " "+testId + " "+ mark)

  let data;
  async function  update(){
    data =await updateStats(testId, userId, mark);
    console.log(data)
  }
  update()


  return (
    <CSSTransition
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        Ваш результат <strong>{props.quizResult*10}%</strong>!
      </div>
    </CSSTransition>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;