import styles from "./AppleMenu.module.css";

import React from "react";

const AppleMenu = ({ isAppleMenuOpen }) => {
  return (
    <>
      <div
        className={styles.wrapper}
        style={{
          visibility: isAppleMenuOpen ? "visible" : "hidden",
        }}
      >
        <ul className={styles.ul}>
          <li className={styles.li}>
            <p className={styles.p}>About This Mac</p>
          </li>

          <div className={styles.border}></div>

          <li className={styles.li}>
            <p className={styles.p}>System Preferences</p>
          </li>

          <li className={styles.li}>
            <p className={styles.p}>App Store</p>
            <span className={styles.appStoreSpan}>3 updates</span>
          </li>

          <div className={styles.border}></div>

          <li className={styles.li}>
            <p className={styles.p}>Recent Items</p>
          </li>

          <div className={styles.border}></div>

          <li className={styles.li}>
            <p className={styles.p}>Force Quit Finder</p>
            <span className={styles.chars}>
              &#x2318; &#x21e7; &#x2325; &#x2303;
            </span>
          </li>

          <div className={styles.border}></div>

          <li className={styles.li}>
            <p className={styles.p}>Sleep</p>
          </li>

          <li className={styles.li}>
            <p className={styles.p}>Restart</p>
          </li>

          <li className={styles.li}>
            <p className={styles.p}>Shut Down...</p>
          </li>

          <div className={styles.border}></div>

          <li className={styles.li}>
            <p className={styles.p}>Lock Screen</p>
            <span className={styles.chars}>&#x21e7; &#x2318; Q</span>
          </li>
          <li className={styles.li}>
            <p className={styles.p}>Log Out User...</p>
            <span className={styles.chars}>&#x2318; &#x21e7; Q</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AppleMenu;
