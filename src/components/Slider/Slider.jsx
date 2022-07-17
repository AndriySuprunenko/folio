import styles from './slider.module.scss';
import Logo from '../../assets/logo/logo symbol.svg';
import Cart from '../../assets/png/Desktop-1.png';
import Line from '../../assets/png/line.png';
import LineDot from '../../assets/png/pointline.png';
import verticalLine from '../../assets/png/vertical-line.png';
import Button from '../../elements/Button/Button';
import { ButtonTypes } from '../../types/Button';

const Slider = () => {
  return (
    <section className={styles.slider}>
      <div className={styles.container}>
        {/* Before */}
        <div className={styles.backg}>
          <svg
            width="802"
            height="1052"
            viewBox="0 0 802 1052"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M350.073 43.0215C359.009 17.2675 383.277 0 410.537 0H802V1052H0L350.073 43.0215Z"
              fill="url(#paint0_linear_0_424)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_424"
                x1="693.626"
                y1="1052"
                x2="693.626"
                y2="284.313"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#323259" stop-opacity="0.01" />
                <stop offset="1" stop-color="#323259" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className={styles.line}>
          <svg
            width="748"
            height="487"
            viewBox="0 0 748 487"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-36.9 439.39C-22.53 472.69 15.2 493.7 51 485C68.4162 480.75 83.8102 470.571 94.54 456.21C105.062 441.727 109.577 423.736 107.14 406C104.89 388.91 96.69 372.37 83.4 361.2C71.17 350.91 53.78 345.64 38 349.2C21.64 352.93 11.05 366.91 10.31 383.43C9.49999 401.55 18.51 419.12 31 431.7C44.17 444.89 62.37 453.28 81.18 449.83C99.99 446.38 112.26 431.69 115.07 413.16C118.39 391.3 109.77 370.51 105.85 349.37C102.455 330.841 104.138 311.74 110.72 294.09C123.27 259.96 152.5 231.31 188.24 222.72C207.8 218.02 230.62 219.02 247.33 231.29C262.54 242.46 268.97 262.54 265.27 280.77C261.53 299.18 247.42 312.72 229.13 316.55C211 320.34 191.32 314.27 180.28 299C169.69 284.37 167.8 264.38 173.6 247.5C180 229 196 215.46 214.1 209C255.1 194.49 297.16 216.57 323.38 247.92C350.84 280.75 364.09 322.4 388.38 357.27C409.33 387.36 443.38 416.54 482.38 414.11C521 411.74 548 378.46 559.89 344.27C575.04 300.72 572.61 253.27 585.67 209.18C597.39 169.6 623.86 130.02 666.67 120.65C686.131 116.203 706.559 120.782 722.26 133.11C736.82 144.55 747.12 162.44 745.17 181.38C743.17 200.98 728.66 217.72 711.03 225.57C690.03 234.91 664.89 231.85 644.82 221.57C612.51 205 592 169 592 132.93C592.08 90.35 622.6 56.09 656.34 33.88C675.07 21.56 695.34 11.88 715.57 2.28998C716.88 1.66998 715.74 -0.27002 714.43 0.289978C674.91 19.1 633.26 39.29 608.01 76.72C597.39 92.44 590.5 110.62 589.81 129.72C589.332 147.178 593.274 164.473 601.27 180C618.33 213.55 654.57 237.64 693.1 232.73C711.58 230.38 728.66 220.46 738.94 204.73C748.644 190.138 750.177 171.587 743 155.6C735.77 139.5 721.31 126.97 704.92 120.79C687.52 114.22 668.24 116.06 651.31 123.21C612.31 139.69 590.91 178.54 580.97 217.82C575.35 239.99 572.83 262.72 569.88 285.36C566.78 309.21 562.99 333.58 552.96 355.66C544.79 373.66 532.23 390.31 515.39 400.96C498.122 411.88 476.985 414.824 457.39 409.04C415.88 397.04 389.88 359.14 370.7 323.04C351.07 286.1 333.26 245.88 297.7 221.26C281.27 209.88 261.7 202.26 241.52 202.14C223.24 202.02 204.71 207.98 190.52 219.65C176.85 230.781 168.663 247.281 168.07 264.9C167.53 281.2 173.5 298.14 186.23 308.77C198.96 319.4 217 322.27 232.77 318C248.96 313.61 261.77 301.62 266.45 285.43C270.99 269.74 268.1 251.74 258.1 238.71C246.39 223.44 226.46 217.6 207.88 217.94C172.02 218.61 139.41 240.37 120.32 269.94C110.69 284.71 104.579 301.495 102.46 319C101.449 327.863 101.611 336.82 102.94 345.64C104.77 357.79 108.5 369.54 111.05 381.54C115.38 401.95 115.72 428.2 96.36 441.36C77.66 454.08 53.36 448.15 37.16 434.36C22.16 421.54 10.77 401.61 12.71 381.31C13.63 371.73 18.18 362.62 26.1 356.94C33.45 351.67 42.69 349.94 51.6 350.55C92.65 353.55 114.36 401.37 101.95 437.49C95.39 456.53 79.7 471.75 61.2 479.37C42.6217 487.005 21.6843 486.445 3.53999 477.83C-13.664 469.744 -27.343 455.681 -34.95 438.26C-35.53 436.93 -37.47 438.08 -36.9 439.39Z"
              fill="url(#paint0_linear_0_422)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_422"
                x1="747.474"
                y1="65.968"
                x2="175.008"
                y2="65.968"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#323259" stop-opacity="0.01" />
                <stop offset="1" stop-color="#323259" />
              </linearGradient>
            </defs>
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
              <span className={styles.subtitle_num}>01</span>
              <span className={styles.subtitle_text}>Who We Are</span>
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
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M42 32L22 32"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M29 39L22 32L29 25"
                      stroke="#fff"
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
                    width="64"
                    height="64"
                    viewBox=" 0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M42 32L22 32"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M29 39L22 32L29 25"
                      stroke="#fff"
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
        <div className={styles.block}>
          <div className={styles.date}>
            <span className={styles.date_year}>2017</span>
            <span className={styles.date_year}>2018</span>
            <span className={styles.date_year}>2019</span>
            <span className={styles.date_years}>
              <img className={styles.lines1} src={Line} alt="line" />
              2020
              <img className={styles.lines2} src={LineDot} alt="line" />
            </span>
            <span className={styles.date_year}>2021</span>
          </div>
          <div className={styles.cart}>
            <img src={Cart} alt="cart" />
          </div>
        </div>
        {/* Block */}
        <div className={styles.block}>
          <div className={styles.vertical_line}>
            <img src={verticalLine} alt="line" />
          </div>
          <div className={styles.text_block}>
            <div className={styles.block_title}>
              A design team building a curated marketplace for UI designers.
            </div>
            <div className={styles.block_subtitle}>
              4,404 curated design resources to energize your creative workflow.
              We're a growing family of 334,531 designers and makers from around
              the world
            </div>
            <Button text="Contact Us" classes={ButtonTypes.BLUE}></Button>
          </div>
          <div className={styles.char}>
            <div className={styles.char_big}>28</div>
            <div className={styles.block_title}>Bigest Branding</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;