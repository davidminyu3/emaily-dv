import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StripePayment from './StripePayment';

class Header extends React.Component {
  renderContent() {
    switch(this.props.auth) {
      case null:
        return 'deciding';
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>;
      default:
        return [
          <li key="1"><StripePayment /></li>,
          <li key="3" style={{ margin: '0 15px' }}>Credits: {this.props.auth.credits}</li>,
          <li key="2"><a href="api/logout">Logout</a></li>
        ];
    };
  };
  
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link 
            to={this.props.auth ? '/surveys' : '/'} 
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  };
};

function mapStateToProps(state) {
  return {   // keys are passed into Header as props
    auth: state.auth   // state.auth === comes from combineRecuder
  };
};

export default connect(mapStateToProps)(Header);