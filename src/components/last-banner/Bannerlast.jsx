import styles from './bannerlast.module.scss';
import logo from '../../assets/png/logo-secon.png';
import Img from '../../assets/png/SpeachBubble V2.png';

const Bannerlast = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
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
          <div className={styles.content_header}>
            <div className={styles.content_header_logo}>
              <img src={logo} alt="logo" />
            </div>
            <div className={styles.content_header_title}>👋 Say hello</div>
            <div className={styles.content_header_subtitle}>
              A design team building a curated marketplace for UI designers.
            </div>
          </div>
          <div className={styles.content_footer}>
            <div className={styles.content_footer_l}>
              Let’s talk about your next project
            </div>
            <div className={styles.content_footer_r}>
              <div className={styles.content_footer_r_img}>
                <img src={Img} alt="img" />
              </div>
              <div className={styles.content_footer_r_text}>
                Invest in your designs today!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bannerlast;
