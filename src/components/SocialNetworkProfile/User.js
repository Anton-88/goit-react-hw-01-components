import PropTypes from 'prop-types'
import styles from './User.module.css'

export function UserProfile({ name, tag, location, avatar, stats }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.profile}>
                <div className={styles.description}>
                    <img
                        src={avatar}
                        alt="Аватар пользователя"
                        className={styles.avatar}
                    />
                    <p className={styles.name}>{name}</p>
                    <p className={styles.tag}>@{tag}</p>
                    <p className={styles.location}>{location}</p>
                </div>

                <ul className={styles.stats}>
                    <li className={styles.stats_item}>
                        <span className={styles.label}>Followers</span>
                        <span className={styles.quantity}>{stats.followers}</span>
                    </li>
                    <li className={styles.stats_item}>
                        <span className={styles.label}>Views</span>
                        <span className={styles.quantity}>{stats.views}</span>
                    </li>
                    <li className={styles.stats_item}>
                        <span className={styles.label}>Likes</span>
                        <span className={styles.quantity}>{stats.likes}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

UserProfile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};