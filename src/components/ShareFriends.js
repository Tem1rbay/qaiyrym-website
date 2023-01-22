import React from 'react';
import '../styles/ShareFriends.css';
import friendsPhoto from '../drawable/friends.jpg';
import heart from '../drawable/heart-icon.png';

function ShareFriends() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="containerShare">
                <div className="containerImage">
                    <img className="image" src={friendsPhoto} alt="FriendsPhoto" />
                </div>
                <div className="textContainer">
                    <p className="shareText"><b>Пригласи друзей</b> </p>
                    <p className="makeText">и сделай мир чуточку добрее</p>
                    <div><img className="heartIcon" src={heart} alt="HeartIcon" /></div>
                    <button className="shareFriendsButton">
                        <p style={{ marginTop: 2 }}>Пригласить друзей</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ShareFriends;