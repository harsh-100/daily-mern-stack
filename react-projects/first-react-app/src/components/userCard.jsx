// UserCard.js

import React from "react";
import styles from "../styles/User.module.css";

const UserCard = (props) => {
  const { name, age, mobileNumber } = props;
  return (
    <div className={styles.card}>
      <div className={styles.userInfo}>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Age:</strong> {age}
        </p>
        <p>
          <strong>Mobile Number:</strong> {mobileNumber}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
