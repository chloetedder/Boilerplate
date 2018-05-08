import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import H1 from 'components/H1';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import H2 from 'components/H2';
import messages from './messages';
import { changeAge, changeColor, changeDog, changeFood, changeMississippi, changeSubmit, surveyFailed, surveySuccess } from './actions';
import { makeSelectAge, makeSelectColor, makeSelectFood, makeSelectMississippi, makeSelectDog, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadRepos, loadSurvey } from '../App/actions';


export class SurveyPage extends React.PureComponent {

    componentDidMount() {
        if (this.props.food && this.props.food.trim().length > 0
    && this.props.color && this.props.color.trim().length > 0) {
          this.props.onSubmitForm();
        }
      }

  render(){
      return (
          <article>
              <title>Survey Page</title>
            <H1>
                <FormattedMessage {...messages.surveypage} />
            </H1>
              <label htmlFor="food">
              What is your favorite food?
                <input
                  id="food"
                  type="text"
                  placeholder="mxstbr"
                  value={this.props.food}
                  onChange={this.props.onChangeFood}
                />
              </label>
              <label htmlFor="color">
              What is your favorite color?
                <input
                  id="color"
                  type="text"
                  placeholder="mxstbr"
                  value={this.props.color}
                  onChange={this.props.onChangeColor}
                />
              </label>
              <label htmlFor="mississippi">
              Do you live in Mississippi?
                <input
                  id="mississippi"
                  type="radio"
                  value={this.props.mississippi}
                  onChange={this.props.onChangeMississippi}
                />
              </label>
              <label htmlFor="age">
              Are you under 21?
                <input
                  id="age"
                  type="checkbox"
                  value={this.props.age}
                  onChange={this.props.onChangeAge}
                />
              </label>
              <label htmlFor="dog">
              Do you own a dog?
                <input
                  id="dog"
                  type="checkbox"
                  value={this.props.dog}
                  onChange={this.props.onChangeDog}
                />
              </label>
            <button onClick={onSubmitForm}>Submit</button>
          </article>
        );
    }
}

Survey.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
    onSubmitForm: PropTypes.func,
    food: PropTypes.string,
    age: PropTypes.string,
    mississippi: PropTypes.string,
    dog: PropTypes.string,
    color: PropTypes.string,
    onChangeColor: PropTypes.func,
    onChangeAge: PropTypes.func,
    onChangeDog: PropTypes.func,
    onChangeMississippi: PropTypes.func,
    onChangeFood: PropTypes.func,
  };

export function mapDispatchToProps(dispatch) {
    return {
      onChangeColor: (evt) => dispatch(changeColor(evt.target.value)),
      onChangePassword: (evt) => dispatch(changeAge(evt.target.value)),
      onChangeDog: (evt) => dispatch(changeDog(evt.target.value)),
      onChangeFood: (evt) => dispatch(changeFood(evt.target.value)),
      onChangeMississippi: (evt) => dispatch(changeMississippi(evt.target.value)),
      onSubmitForm: (evt) => {
        if (evt !== undefined && evt.preventDefault) evt.preventDefault();
            dispatch(loadSurvey());
      },
    };
  }

  const mapStateToProps = createStructuredSelector({
    age: makeSelectAge(),
    color: makeSelectColor(),
    dog: makeSelectDog(),
    food: makeSelectFood(),
    mississippi: makeSelectMississippi(),
    error: makeSelectError(),
  });

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'surveypage', reducer });
const withSaga = injectSaga({ key: 'surveypage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SurveyPage);