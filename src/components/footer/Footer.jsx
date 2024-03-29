import styles from './footer.module.scss';
import logo from '../../assets/logo/light-mode-1.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.line}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 643 821"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M67 1.00001C36.73 7.53001 12.57 32.12 3.55998 61.32C-5.77002 91.57 3.65998 123.32 26.95 144.52C49.44 164.97 82.95 174.62 112.05 163.44C139.27 152.98 162.92 123.15 149.78 93.33C138.68 68.15 105.78 53.43 80.08 64.42C54.38 75.41 41.89 106.17 46.59 132.73C52.53 166.24 85.09 184.73 114.86 194.1C150.92 205.52 192.93 207.2 222.47 233.48C245.76 254.2 257.18 286.48 254.86 317.31C253.799 332.76 248.901 347.7 240.61 360.78C231.44 374.97 215.79 387.12 198.53 388.78C179.33 390.63 165.53 375.9 164.14 357.41C162.63 337.08 174.95 319.31 186.66 303.88C209.03 274.42 237.66 245.09 274.82 236.01C307.73 228.01 347.31 237.07 364.76 268.4C384.54 303.92 370.46 346.31 349.49 377.65C338.11 394.65 324.58 410.16 311.26 425.65C297.72 441.4 284.06 457.07 271.26 473.46C247.04 504.54 225.91 538.65 216.8 577.39C208.25 613.73 210.8 652.81 230.97 685C249.71 715 279.97 736.17 312.15 749.74C352.35 766.74 396.05 773.42 438.65 781.56L575.29 807.68L640.81 820.2C642.22 820.47 642.81 818.31 641.41 818.03L506.41 792.22C462.49 783.83 418.26 776.4 374.64 766.56C335.81 757.79 296.86 745.02 265.43 719.75C251.51 708.56 239.27 695.13 230.38 679.57C220.836 662.573 215.414 643.574 214.55 624.1C210.2 539.39 272.94 474.48 323.67 414.59C347.83 386.05 372.67 354.27 375.99 315.59C377.44 298.87 374.79 281.39 366.4 266.68C358.671 253.406 346.723 243.1 332.46 237.4C301.68 224.75 267.01 231.62 239.63 249.05C224.33 258.82 211 271.4 199.1 285C186.95 298.9 174.24 314.17 166.86 331.22C160.58 345.74 159.15 363.63 168.41 377.29C176.69 389.49 191.35 393.35 205.22 389.86C235.43 382.26 252.88 351.67 256.57 322.61C260.22 293.79 251.79 263.24 232.95 241C208.95 212.71 171.49 205.92 137.24 197.78C104.8 190.08 64.97 177.09 51.74 142.9C41.17 115.59 52.51 79.4 80.01 66.9C107.79 54.25 145.65 73.9 150.73 104.19C156.83 140.49 117.17 166.29 85.12 165.92C53.07 165.55 21.73 144.92 8.51998 115.7C-5.21002 85.28 4.42998 49.28 27.16 25.94C38.0938 14.5422 52.1528 6.63071 67.57 3.20001C69 2.89001 68.38 0.730009 67 1.00001Z"
              fill="#D1ECFD"
            />
          </svg>
        </div>
        {/* Block */}

        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>

        {/* Block */}

        <div className={styles.text}>
          Agency is a full-service agency, busy designing and building beautiful
          digital products, brands, and experiences.
        </div>

        {/* Block */}

        <nav className={styles.navigation}>
          <ul className={styles.nav}>
            <li className={styles.nav__item}>
              <a className={styles.nav__link} href="#about">
                About
              </a>
            </li>
            <li className={styles.nav__item}>
              <a className={styles.nav__link} href="#work">
                Work
              </a>
            </li>
            <li className={styles.nav__item}>
              <a className={styles.nav__link} href="#services">
                Services
              </a>
            </li>
            <li className={styles.nav__item}>
              <a className={styles.nav__link} href="#jobs">
                Jobs
              </a>
            </li>
          </ul>
        </nav>

        {/* Block */}

        <div className={styles.block}>
          <div className={styles.block_l}>© 2020, UI8 LLC.</div>
          <div className={styles.block_r}>
            <div className={styles.block_r_text}>Follow us</div>
            <div className={styles.block_r_icon}>
              <svg
                className={styles.block_r_icons}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.9999 8.04781C16.0009 3.79183 12.6694 0.280163 8.4193 0.0570701C4.16916 -0.166023 0.488381 2.97756 0.0437293 7.21026C-0.400922 11.443 2.54624 15.2828 6.74995 15.9478V10.3598H4.71895V8.04781H6.74995V6.28481C6.66141 5.45163 6.9477 4.62219 7.53131 4.02099C8.11492 3.4198 8.9355 3.10904 9.77095 3.17281C10.371 3.18069 10.9696 3.23284 11.5619 3.32881V5.29981H10.5539C10.2061 5.25433 9.8565 5.36937 9.60365 5.6125C9.3508 5.85563 9.22214 6.20048 9.25395 6.54981V8.04981H11.4729L11.1179 10.3618H9.24995V15.9528C13.1385 15.3377 16.0016 11.9848 15.9999 8.04781Z"
                  fill="#ADADAD"
                />
              </svg>
            </div>
            <div className={styles.block_r_icon}>
              <svg
                className={styles.block_r_icons}
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.8 2.8C15.6 1.5 15 0.6 13.6 0.4C11.4 0 8 0 8 0C8 0 4.6 0 2.4 0.4C1 0.6 0.3 1.5 0.2 2.8C0 4.1 0 6 0 6C0 6 0 7.9 0.2 9.2C0.4 10.5 1 11.4 2.4 11.6C4.6 12 8 12 8 12C8 12 11.4 12 13.6 11.6C15 11.3 15.6 10.5 15.8 9.2C16 7.9 16 6 16 6C16 6 16 4.1 15.8 2.8ZM6 9V3L11 6L6 9Z"
                  fill="#ADADAD"
                />
              </svg>
            </div>
            <div className={styles.block_r_icon}>
              <svg
                className={styles.block_r_icons}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 12C0 14.056 1.944 16 4 16H12C14.056 16 16 14.056 16 12V4C16 1.944 14.056 0 12 0H4C1.944 0 0 1.944 0 4V12ZM2 4C2 3.065 3.065 2 4 2H12C12.935 2 14 3.065 14 4V12C14 12.935 12.935 14 12 14H4C3.047 14 2 12.953 2 12V4ZM13.1051 3.89164C13.1051 4.42183 12.6753 4.85164 12.1451 4.85164C11.6149 4.85164 11.1851 4.42183 11.1851 3.89164C11.1851 3.36145 11.6149 2.93164 12.1451 2.93164C12.6753 2.93164 13.1051 3.36145 13.1051 3.89164ZM8 12C5.794 12 4 10.206 4 8C4 5.794 5.794 4 8 4C10.206 4 12 5.794 12 8C12 10.206 10.206 12 8 12ZM8 6C6.897 6 6 6.897 6 8C6 9.103 6.897 10 8 10C9.103 10 10 9.103 10 8C10 6.897 9.103 6 8 6Z"
                  fill="#ADADAD"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
