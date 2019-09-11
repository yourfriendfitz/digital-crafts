import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import Login from "./Login";

export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    componentDidMount() {
      this._checkAndRedirect();
    }

    componentDidUpdate() {
      this._checkAndRedirect();
    }

    _checkAndRedirect() {
      const { isAuth, redirect } = this.props;

      if (!isAuth) {
        redirect();
        this.props.history.push("/login");
      }
    }

    render() {
      return (
        <div>
          {this.props.isAuth ? (
            <ComposedComponent {...this.props} />
          ) : (
            <Login />
          )}
        </div>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      isAuth: state.authRed.isAuth
    };
  };

  const mapDispatchToProps = dispatch =>
    bindActionCreators(
      {
        redirect: () => push("/login")
      },
      dispatch
    );

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Authenticate);
}
