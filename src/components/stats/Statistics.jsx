import css from 'components/stats/statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    <ul className={css.list}>
      {stats.map(stat => (
        <li key={stat.id} className={css.item}>
          <span>{stat.label}</span>
          <span>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;
