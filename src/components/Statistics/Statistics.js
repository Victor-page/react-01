import PropTypes from 'prop-types';

import FileStatistics from './FileStatistics/FileStatistics';
import classes from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={classes.statistics}>
      {title && <h2 className={classes.title}>{title}</h2>}

      <ul className={classes.statList}>
        {stats.map(({ id, label, percentage }) => (
          <FileStatistics key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Statistics;
