function UserAvtar(props) {
    const { avatar, name} = props.user;
    return (
        <div className="Detail-sub-container">
            <img src={avatar} alt={name}></img>
            <div>
            <div className="Small-text">Created By</div>
            <div>{name}</div>
            </div>
        </div>
    )
}

export default UserAvtar;