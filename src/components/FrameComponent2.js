import { useMemo } from "react";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ astrixBranding, propWidth, propPadding }) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  return (
    <div className={styles.astrixBrandingParent} style={frameDivStyle}>
      <img
        className={styles.astrixBrandingIcon}
        loading="lazy"
        alt=""
        src={astrixBranding}
      />
      <div className={styles.astrixWrapper}>
        <h1 className={styles.astrix}>Astrix.</h1>
      </div>
    </div>
  );
};

export default FrameComponent2;
