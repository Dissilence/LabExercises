import useFriendStatus from "../hooks/useFriendStatus";

function FriendListItem(props) {
    const isOnline = false; //useFriendStatus(props.friend.id);
  
    return (
        <li style={{ color: isOnline ? 'green' : 'black' }}>
            {props.friend.name}
        </li>
    );
}

export default FriendListItem