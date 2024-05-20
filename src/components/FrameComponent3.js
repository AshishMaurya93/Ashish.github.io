import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ roll, frame1261154678 }) => {
  return (
    <div className={styles.rollParent}>
      <img className={styles.rollIcon} loading="lazy" alt="" src={roll} />
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.frameContainer}>
            <img className={styles.frameChild} alt="" src={frame1261154678} />
          </div>
          <div className={styles.kPeopleInterested}>22k people interested</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
