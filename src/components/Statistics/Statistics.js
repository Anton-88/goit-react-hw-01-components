import PropTypes from 'prop-types'
import styles from './Statistics.module.css'

export function Statistics({ title, stats }) {
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>{title}</h2>

            <ul className={styles.stat_list}>
                {stats.map(stat => (
                    <li className={styles.stat_list_item} key={stat.id}
                        style={{
                            //added to create random colors
                            backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
                        }}>
                        <span className={styles.label}>{stat.label}</span>
                        <span className={styles.percentage}>{stat.percentage}%</span>
                    </li>))
                }
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
};