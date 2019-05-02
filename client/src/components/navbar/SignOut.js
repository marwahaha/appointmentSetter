import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { NavItem, Button } from "reactstrap";

import { logOutUser } from "../../actions/authActions";

const SignOut = ({ logOutUser }) => {
  return (
    <React.Fragment>
      <NavItem>
        <Button
          outline
          color="secondary"
          className="text-white"
          onClick={logOutUser}>
          Sign Out
        </Button>
      </NavItem>
    </React.Fragment>
  );
};

SignOut.propTypes = {
  logOutUser: PropTypes.func.isRequired
};

export default connect(
  null,
  { logOutUser }
)(SignOut);