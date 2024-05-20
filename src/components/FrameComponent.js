import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.exploreYoureFirstCollectiblParent}>
      <h3 className={styles.exploreYoureFirst}>
        Explore Youre First Collectible
      </h3>
      <div className={styles.metaLivesParent}>
        <h1 className={styles.metaLives}>Meta Lives</h1>
        <b className={styles.liveInAstrix}>Live in Astrix</b>
        <div
          className={styles.loremIpsumDolor}
        >{`Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla. `}</div>
      </div>
      <div className={styles.collectiblesParent}>
        <div className={styles.collectibles}>Collectibles</div>
        <div className={styles.cardSmallParent}>
          <div className={styles.cardSmall}>
            <div className={styles.parent}>
              <div className={styles.div}>
                <b className={styles.b}>2024</b>
              </div>
              <div className={styles.byPablo}>
                <span className={styles.by}>By</span>
                <span className={styles.span}>{` `}</span>
                <b>Pablo</b>
              </div>
            </div>
            <div className={styles.collectibleNameWrapper}>
              <div className={styles.collectibleName}>Collectible Name</div>
            </div>
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
          </div>
          <div className={styles.cardSmall1}>
            <div className={styles.group}>
              <div className={styles.div1}>
                <b className={styles.b1}>2024</b>
              </div>
              <div className={styles.byPablo1}>
                <span className={styles.by1}>By</span>
                <span className={styles.span1}>{` `}</span>
                <b>Pablo</b>
              </div>
            </div>
            <div className={styles.collectibleNameContainer}>
              <div className={styles.collectibleName1}>Collectible Name</div>
            </div>
            <img className={styles.imageIcon1} alt="" src="/image@2x.png" />
          </div>
          <div className={styles.cardSmall2}>
            <div className={styles.container}>
              <div className={styles.div2}>
                <b className={styles.b2}>2024</b>
              </div>
              <div className={styles.byPablo2}>
                <span className={styles.by2}>By</span>
                <span className={styles.span2}>{` `}</span>
                <b>Pablo</b>
              </div>
            </div>
            <div className={styles.collectibleNameFrame}>
              <div className={styles.collectibleName2}>Collectible Name</div>
            </div>
            <img className={styles.imageIcon2} alt="" src="/image@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.joinNowWrapper}>
        <button className={styles.joinNow}>
          <b className={styles.joinWaitlist}>Join Waitlist</b>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent;
