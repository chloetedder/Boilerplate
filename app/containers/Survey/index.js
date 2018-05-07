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
import { changeEmail, changePassword, changeSubmitLogin, loginSuccess, loginFailed } from './actions';
import { makeSelectEmail, makeSelectPassword, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadRepos } from '../App/actions';


export class Survey extends React.PureComponent {

    componentDidMount() {
        if (this.props.email && this.props.email.trim().length > 0
    && this.props.password && this.props.password.trim().length > 0) {
          this.props.onSubmitForm();
        }
      }

  render(){
      return (
          <article>
              <title>Survey</title>
            <H1>
                <FormattedMessage {...messages.survey} />
            </H1>
            <form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="email">
                <input
                  id="email"
                  type="text"
                  placeholder="mxstbr"
                  value={this.props.email}
                  onChange={this.props.onChangeEmail}
                />
              </label>
              <label htmlFor="password">
                <input
                  id="password"
                  type="text"
                  placeholder="mxstbr"
                  value={this.props.password}
                  onChange={this.props.onChangePassword}
                />
              </label>
            </form>
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
    email: PropTypes.string,
    onChangeEmail: PropTypes.func,
    password: PropTypes.string,
    onChangePassword: PropTypes.func,
  };

export function mapDispatchToProps(dispatch) {
    return {
      onChangeEmail: (evt) => dispatch(changeEmail(evt.target.value)),
      onChangePassword: (evt) => dispatch(changePassword(evt.target.value)),
      onSubmitForm: (evt) => {
        if (evt !== undefined && evt.preventDefault) evt.preventDefault();
            dispatch(loadRepos());
      },
    };
  }

  const mapStateToProps = createStructuredSelector({
    email: makeSelectEmail(),
    password: makeSelectPassword(),
    error: makeSelectError(),
  });

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'survey', reducer });
const withSaga = injectSaga({ key: 'survey', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Survey);