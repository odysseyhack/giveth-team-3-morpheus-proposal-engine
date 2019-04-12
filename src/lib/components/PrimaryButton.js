/**
 * Created by will on 10/04/19.
 */
import React from 'react';
import PropTypes from 'prop-types';

const PrimaryButton = ({name, onClick}) => (
  <button className="eco primary" onClick={onClick}>
    {name}
  </button>
);

PrimaryButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default PrimaryButton;