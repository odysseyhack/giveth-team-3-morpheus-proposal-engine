/**
 * Created by will on 10/04/19.
 */
import React from 'react';

const PrimaryButton = ({name, onClick}) => (
  <button className="eco primary" onClick={onClick}>
    {name}
  </button>
);

export default PrimaryButton;