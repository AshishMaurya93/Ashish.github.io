import { useMemo } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ frame1261154670, propPadding }) => {
  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.frameParent}>
      <div
        className={styles.lunarPalaceFtKanyeWestWrapper}
        style={frameDiv1Style}
      >
        <b className={styles.lunarPalaceFtContainer}>
          <p className={styles.lunarPalace}>{`Lunar Palace: `}</p>
          <p className={styles.ftKanyeWest}>(ft. Kanye west)</p>
        </b>
      </div>
      <img
        className={styles.inputIcon}
        loading="lazy"
        alt=""
        src={frame1261154670}
      />
    </div>
  );
};

export default FrameComponent1;
