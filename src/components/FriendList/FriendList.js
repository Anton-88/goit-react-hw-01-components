import PropTypes from 'prop-types'
import styles from './FriendList.module.css'

export function FriendList({ friends }) {
    return (
        <ul className={styles.friend_list}>
            {friends.map(friend => (
                <li className={styles.friend_list__item} key={friend.id}>
                    <span className={friend.isOnline ? styles.onlineStyle : styles.offlineStyle}></span>
                    <img
                        className={styles.avatar}
                        src={friend.avatar}
                        alt={friend.name}
                        width="48" />
                    <p className={styles.name}>{friend.name}</p>
                </li>
            ))
            }
        </ul >
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }),
    ),
};