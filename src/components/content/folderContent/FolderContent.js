import styles from "./FolderContent.module.css";

const FolderContent = ({ isFolderOpen, closeFolderContent }) => {
  return (
    <>
      <div
        className={styles.wrapper}
        style={{
          visibility: isFolderOpen ? "visible" : "hidden",
        }}
      >
        <div className={styles.left_inner_wrapper}>
          <div className={styles.left_corner_buttons}>
            <img
              onClick={closeFolderContent}
              className={styles.left_corner_button_img}
              src="/images/icons/close.png"
              alt="icns"
            />
            <img
              className={styles.left_corner_button_img}
              src="/images/icons/minimise.png"
              alt="icns"
            />
            <img
              className={styles.left_corner_button_img}
              src="/images/icons/zoom.png"
              alt="icns"
            />
          </div>
          <div className={styles.left_menu_wrapper}>
            <h5 className={styles.menu_title}>Favourites</h5>
            <ul className={styles.left_ul}>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/star.png"
                  alt="star"
                />
                <p className={styles.left_li_text}>Inbox</p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/file.png"
                  alt="file"
                />
                <p className={styles.left_li_text}>AirDrop</p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/clock.png"
                  alt="clock"
                />
                <p className={styles.left_li_text}>Recents</p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/file.png"
                  alt="file"
                />
                <p className={styles.left_li_text}>Applications</p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/files.png"
                  alt="files"
                />
                <p className={styles.left_li_text}>Documents</p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/folder.png"
                  alt="folder"
                />
                <p className={styles.left_li_text}>Folder</p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/download.png"
                  alt="download"
                />
                <p className={styles.left_li_text}>Downloads</p>
              </li>
            </ul>
            <h5 className={styles.menu_title}>iCloud</h5>
            <ul className={styles.left_ul}>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/cloud.png"
                  alt="cloud"
                />
                <p className={styles.left_li_text}>iCloud Drive</p>
              </li>
            </ul>
            <h5 className={styles.menu_title}>Tags</h5>
            <ul className={styles.left_ul}>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/orangeTag.png"
                  alt="orangeTag"
                />
                <p className={styles.left_li_text}>Orange Tag</p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/blueTag.png"
                  alt="blueTag"
                />
                <p className={styles.left_li_text}>Blue Tag</p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/greenTag.png"
                  alt="greenTag"
                />
                <p className={styles.left_li_text}>Green Tag</p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/allTags.png"
                  alt="allTags"
                />
                <p className={styles.left_li_text}>All Tags</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.right_inner_wrapper}>
          <div className={styles.right_top_bar}>
            <div className={styles.right_top_bar_left}>
              <img src="/images/icons/left_arrow.png" alt="left_arrow" />
              <img src="/images/icons/right_arrow.png" alt="right_arrow" />
              <p className={styles.left_text}>Downloads</p>
            </div>
            <div className={styles.right_top_bar_right}>
              <img src="/images/icons/windows.png" alt="windows" />
              <img src="/images/icons/menu.png" alt="menu" />
              <img src="/images/icons/cols.png" alt="cols" />
              <img src="/images/icons/dots.png" alt="dots" />
              <img src="/images/icons/exp.png" alt="exp" />
              <img src="/images/icons/badge.png" alt="badge" />
              <img src="/images/icons/right_arrow2.png" alt="right_arrow2" />
              <img src="/images/icons/search_icon.png" alt="search_icon" />
            </div>
          </div>
          <div className={styles.right_inner_content}>
            <div className={styles.row}>
              <div className={styles.folderWrapper}>
                <img src="/images/folder.png" alt="folder" />
                <span>Apps</span>
              </div>
              <div className={styles.folderWrapper}>
                <img src="/images/folder.png" alt="folder" />
                <span>Education</span>
              </div>
              <div className={styles.folderWrapper}>
                <img src="/images/folder.png" alt="folder" />
                <span>React JS</span>
              </div>
              <div className={styles.folderWrapper}>
                <img src="/images/folder.png" alt="folder" />
                <span>Javascript</span>
              </div>
              <div className={styles.folderWrapper}>
                <img src="/images/folder.png" alt="folder" />
                <span>Codersbite</span>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.folderWrapper}>
                <img src="/images/folder.png" alt="folder" />
                <span>Music Files</span>
              </div>
              <div className={styles.folderWrapper}>
                <img src="/images/folder.png" alt="folder" />
                <span>Weather</span>
              </div>
              <div className={styles.folderWrapper}>
                <img
                  className={styles.file}
                  src="/images/graph.png"
                  alt="folder"
                />
                <span>Kessy</span>
              </div>
              <div className={styles.folderWrapper}>
                <img
                  className={styles.file}
                  src="/images/mov.png"
                  alt="folder"
                />
                <span>Hond</span>
              </div>
              <div className={styles.folderWrapper}>
                <img
                  className={styles.file}
                  src="/images/image_file.png"
                  alt="folder"
                />
                <span>Bird</span>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.folderWrapper}>
                <img
                  className={styles.file}
                  src="/images/image_file.png"
                  alt="folder"
                />
                <span>Lion</span>
              </div>
              <div className={styles.folderWrapper}>
                <img
                  className={styles.file}
                  src="/images/image_file.png"
                  alt="folder"
                />
                <span>Tiger</span>
              </div>
              <div className={styles.folderWrapper}>
                <img
                  className={styles.file}
                  src="/images/mov.png"
                  alt="folder"
                />
                <span>Trees</span>
              </div>
              <div className={styles.folderWrapper}>
                <img src="/images/folder.png" alt="folder" />
                <span>Wallpapers</span>
              </div>
              <div className={styles.folderWrapper}>
                <img src="/images/folder.png" alt="folder" />
                <span>Github</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FolderContent;
