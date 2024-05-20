import { useCallback } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./CollectionLanding.module.css";

const CollectionLanding = () => {
  const onFrameClick = useCallback(() => {
    // Please sync "Event Landing" to the project
  }, []);

  return (
    <div className={styles.collectionLanding}>
      <h1 className={styles.astrixCollectible}>
        <span className={styles.astrixCollectibleTxtContainer}>
          <p className={styles.astrix}>ASTRIX</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.collectible}>COLLECTIBLE</p>
        </span>
      </h1>
      <FrameComponent3
        roll="/roll@2x.png"
        frame1261154678="/frame-1261154678.svg"
      />
      <div className={styles.collectionLandingInner}>
        <div className={styles.frameParent}>
          <FrameComponent2 astrixBranding="/astrix-branding@2x.png" />
          <div className={styles.eventsWrapper}>
            <div className={styles.events}>
              <div className={styles.frameGroup}>
                <FrameComponent1 frame1261154670="/frame-1261154670@2x.png" />
                <FrameComponent1
                  frame1261154670="/dropdown@2x.png"
                  propPadding="0px var(--padding-11xs)"
                />
              </div>
              <img
                className={styles.eventsChild}
                alt=""
                src="/frame-1261154672@2x.png"
              />
              <img
                className={styles.eventsItem}
                alt=""
                src="/frame-1261154671-1@2x.png"
              />
            </div>
          </div>
          <div className={styles.toggleLandingPage}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <b className={styles.events1}>Events</b>
              <div className={styles.frameItem} />
              <b className={styles.collections}>Collections</b>
            </div>
            <div
              className={styles.toggleLandingPageChild}
              onClick={onFrameClick}
            />
          </div>
        </div>
      </div>
      <FrameComponent />
    </div>
  );
};

export default CollectionLanding;
