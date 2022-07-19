import styles from './section2.module.scss';
import Logo from '../../assets/logo/logo symbol.svg';
import Icon1 from '../../assets/svg/icon.svg';
import Icon2 from '../../assets/svg/icon-2.svg';
import Icon3 from '../../assets/svg/icon-3.svg';
import Icon4 from '../../assets/svg/icon-1.svg';
import Telefon from '../../assets/png/telefon.png';
import Oval from '../../assets/png/Oval.png';

const Section2 = () => {
  return (
    <section className={styles.section}>
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
              fill="#9A97ED"
            />
          </svg>
        </div>
        {/* Block */}
        <div className={styles.block}>
          {/* Logo */}
          <div className={styles.logo}>
            <img src={Logo} alt="logo" />
          </div>
          {/* Text */}
          <div className={styles.text}>
            <div className={styles.subtitle}>
              <span className={styles.subtitle_num}>02</span>
              <span className={styles.subtitle_text}>Who We Do</span>
            </div>
            <div className={styles.title}>
              We Make Designs that Lead and Inpire.
            </div>
          </div>
          {/* Arrow */}
          <div className={styles.arrows}>
            <div>
              <button className={styles.button}>
                <span>
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M42 32L22 32"
                      stroke="#232340"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M29 39L22 32L29 25"
                      stroke="#232340"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div>
              <button className={styles.button}>
                <span>
                  <svg
                    className={styles.arrow}
                    width="100%"
                    height="100%"
                    viewBox=" 0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M42 32L22 32"
                      stroke="#232340"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M29 39L22 32L29 25"
                      stroke="#232340"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Block */}
        <div className={styles.icons}>
          {/* Icon */}
          <div className={styles.icon}>
            <div className={styles.img}>
              <img src={Icon3} alt="1" />
            </div>
            <div className={styles.text}>Strategy</div>
          </div>

          {/* Icon */}
          <div className={styles.icon}>
            <div className={styles.img}>
              <img src={Icon2} alt="1" />
            </div>
            <div className={styles.text}>Branding</div>
          </div>

          {/* Icon */}
          <div className={styles.icon}>
            <div className={styles.img}>
              <img src={Icon4} alt="1" />
            </div>
            <div className={styles.text}>Interactive</div>
          </div>

          {/* Icon */}
          <div className={styles.icon}>
            <div className={styles.img}>
              <img src={Icon1} alt="1" />
            </div>
            <div className={styles.text}>Communicate</div>
          </div>
        </div>

        {/* Block */}
        <div className={styles.block_phone}>
          <div className={styles.line2}>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 518 781"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.31006 0.779958C-5.70994 33.72 0.520056 72.12 23.0901 98.86C43.0901 122.51 76.5101 137.44 107.16 127.55C134.32 118.78 157.49 90.83 152.5 61.17C148.1 35 120.64 13.26 94.0001 17.65C67.0001 22.09 54.0001 50.83 56.0601 75.76C58.5101 106.06 81.7901 127.76 108.61 138.87C144.22 153.67 183.18 150.62 220.85 151.59C256 152.49 295.07 158.09 321.15 184.13C348.15 211.05 349.41 252.96 334.28 286.19C326.61 303.03 315.28 318.05 302.18 331.04C288.9 344.22 273.42 355.59 255.92 362.5C223.82 375.16 181.03 370.65 161.38 339.1C152.86 325.41 149.57 308.01 154.67 292.5C159.67 277.31 172.57 266.33 187.49 261.39C202.59 256.338 219.065 257.379 233.41 264.29C248.29 271.56 260.03 284.13 267.81 298.61C286.97 334.3 279.43 376.76 265.81 412.93C252.74 447.64 233.87 481.78 234.62 519.93C234.92 535.42 238.34 551.18 246.55 564.47C255 578.1 268.08 587.6 283 593.23C320.25 607.35 360.81 597.03 399.09 605C430.55 611.56 459.4 628.89 480.76 652.8C491.486 664.754 500.194 678.376 506.54 693.13C514.1 710.88 516.54 730.35 524.44 747.96C530.64 761.76 541.58 775.19 556.79 779.15C574.72 783.82 591.94 773.93 607.55 766.45C622.38 759.33 642 753 656.61 764C657.77 764.87 658.89 762.91 657.74 762.06C644.74 752.28 627.35 755.68 613.34 761.39C596.03 768.45 578.19 781.74 558.47 777.25C540.47 773.17 529.47 756.04 523.53 739.82C517.3 722.64 514.36 704.55 506.61 687.89C493.56 659.79 471.42 636.13 444.79 620.43C431.45 612.533 416.964 606.758 401.85 603.31C382.69 598.99 363 599.31 343.47 599.23C308 599 265.89 595 246.78 560.37C229.16 528.37 237.78 490.03 250.05 457.94C264.19 421.06 282.61 385.19 281.6 344.61C280.79 312.48 266.04 278.94 236.55 263.37C211.84 250.37 177.9 254.74 160.18 277.49C141.51 301.49 150.34 337.34 172.92 355.49C199.42 376.78 236.92 375 266.07 360.41C296.82 344.99 323.62 316.57 337.25 285.01C350.5 254.32 350.33 216.49 328.88 189.43C308.78 164.07 275.37 153.73 244.32 150.69C204.32 146.79 163.22 153.08 124.12 141.89C94.2101 133.34 63.8701 113.21 58.8301 80.27C54.7101 53.32 69.1801 19.87 100.14 19.34C115.01 19.09 129.28 26.85 138.84 37.93C149.252 49.744 153.189 65.9226 149.37 81.2C145.47 96.76 134.65 110.11 121.17 118.54C106.945 127.378 89.8665 130.407 73.4701 127C38.2001 119.94 11.9201 89.71 4.47006 55.33C0.621677 37.4057 1.65776 18.7769 7.47006 1.38996C7.94006 -4.1604e-05 5.77006 -0.590042 5.31006 0.779958Z"
                fill="#9A97ED"
              />
            </svg>
          </div>
          <div className={styles.block_phone__img}>
            <div className={styles.oval}>
              <img src={Oval} alt="oval" />
            </div>
            <img className={styles.prioryty} src={Telefon} alt="tel" />
          </div>
          <div className={styles.block_phone__text}>
            <div className={styles.title_phote}>
              <div className={styles.logo}>
                <img src={Logo} alt="logo" />
              </div>
              <span className={styles.title_phote_char}>03</span>
              <span className={styles.title_phote_text}>Achievement</span>
            </div>
            <div className={styles.last_title}>
              A design team building a curated marketplace for UI designers.
            </div>
            <div className={styles.last_title_big}>68</div>
            <div>
              😎 <span className={styles.smile}>Successful Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
