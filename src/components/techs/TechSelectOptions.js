/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';

const TechSelectOptions = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
  }, [loading]);

  return (
    !loading && techs !== [] && techs.map((t) => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {`${t.firstName} ${t.lastName}`}
      </option>
    ))
  );
};

TechSelectOptions.propTypes = {
  getTechs: PropTypes.func.isRequired,
  tech: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({ tech: state.tech });

export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
