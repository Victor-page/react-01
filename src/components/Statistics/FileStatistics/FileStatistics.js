import PropTypes from 'prop-types';

import classes from './FileStatistics.module.css';

const FileStatistics = ({ label, percentage }) => {
  return (
    <li className={classes.item}>
      <span className={classes.label}>{label}</span>
      <span className={classes.percentage}>{percentage}%</span>
    </li>
  );
};

FileStatistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default FileStatistics;
