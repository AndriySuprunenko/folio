import styles from './section3.module.scss';
import Logo from '../../assets/logo/logo symbol.svg';
import Button from '../../elements/Button/Button';
import { ButtonTypes } from '../../types/Button';
import Img1 from '../../assets/png/img-sec-3-1-2.png';
import Img2 from '../../assets/png/img-sec3-1-1.png';
import classNames from 'classnames';
import Img3 from '../../assets/png/Tablet.png';
import Img4 from '../../assets/png/Main.png';
import Img5 from '../../assets/png/male.png';
import Img6 from '../../assets/png/four_img.png';
import logoSec from '../../assets/png/logo-secon.png';
import phone from '../../assets/png/phone.png';
import decor from '../../assets/png/banner-bg.png';

const Section3 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
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
            <div className={styles.title}>Our Partnerships</div>
            <div className={styles.text_header}>
              Agency is a full-service agency, busy designing and building
              beautiful digital products, brands, and experiences.
            </div>
          </div>
          {/* Button */}
          <div className={styles.button}>
            <Button text="Contact Us" classes={ButtonTypes.BLUE}></Button>
          </div>
        </div>

        {/* Block */}
        <div className={styles.block_img}>
          <div className={styles.image_section}>
            <img className={styles.img2} src={Img2} alt="img" />
            <img className={styles.img1} src={Img1} alt="img" />
          </div>
          <div className={styles.text_section}>
            <h1 className={styles.text_section_title}>Featured Product</h1>
            <div className={styles.text_section_subtitle}>
              Sapiens: The Free Character Builder App.
            </div>
            <div className={styles.text_section_text}>
              Beautiful library of modular, component-based character
              illustrations free to use for all your personal or client
              projects.
            </div>
          </div>
        </div>

        {/* Block */}
        <div className={styles.block_3}>
          <div className={styles.line}>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 642 643"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M-177.292 575.408C-170.762 605.678 -146.172 629.838 -116.972 638.848C-86.7224 648.178 -54.9724 638.748 -33.7724 615.458C-13.3224 592.968 -3.67239 559.458 -14.8524 530.358C-25.3124 503.138 -55.1424 479.488 -84.9624 492.628C-110.142 503.728 -124.862 536.628 -113.872 562.328C-102.882 588.028 -72.1224 600.518 -45.5624 595.818C-12.0524 589.878 6.43762 557.318 15.8076 527.548C27.2276 491.488 28.9076 449.478 55.1876 419.938C75.9076 396.648 108.188 385.228 139.018 387.548C154.467 388.609 169.408 393.507 182.488 401.798C196.678 410.968 208.828 426.618 210.488 443.878C212.338 463.078 197.608 476.878 179.118 478.268C158.788 479.778 141.018 467.458 125.588 455.748C96.1276 433.378 66.7976 404.748 57.7176 367.588C49.7176 334.678 58.7776 295.098 90.1076 277.648C125.628 257.868 168.018 271.948 199.358 292.918C216.358 304.298 231.868 317.828 247.358 331.148C263.108 344.688 278.778 358.348 295.168 371.148C326.248 395.368 360.358 416.498 399.098 425.608C435.438 434.158 474.518 431.608 506.708 411.438C536.708 392.698 557.878 362.438 571.448 330.258C588.448 290.058 595.128 246.358 603.268 203.758L629.388 67.1179L641.908 1.59784C642.178 0.187866 640.018 -0.402161 639.738 0.997864L613.928 135.998C605.538 179.918 598.108 224.148 588.268 267.768C579.498 306.598 566.728 345.548 541.458 376.978C530.268 390.898 516.838 403.138 501.278 412.028C484.281 421.572 465.281 426.994 445.808 427.858C361.098 432.208 296.188 369.468 236.298 318.738C207.758 294.578 175.978 269.738 137.298 266.418C120.578 264.968 103.098 267.618 88.3876 276.008C75.114 283.737 64.8072 295.684 59.1076 309.948C46.4576 340.728 53.3276 375.398 70.7576 402.778C80.5276 418.078 93.1076 431.408 106.708 443.308C120.608 455.458 135.878 468.168 152.928 475.548C167.448 481.828 185.338 483.258 198.998 473.998C211.198 465.718 215.058 451.058 211.568 437.188C203.968 406.978 173.378 389.528 144.318 385.838C115.498 382.188 84.9476 390.618 62.7076 409.458C34.4176 433.458 27.6276 470.918 19.4876 505.168C11.7876 537.608 -1.20238 577.438 -35.3924 590.668C-62.7024 601.238 -98.8924 589.898 -111.392 562.398C-124.042 534.618 -104.392 496.758 -74.1024 491.678C-37.8024 485.578 -12.0024 525.238 -12.3724 557.288C-12.7424 589.338 -33.3724 620.678 -62.5924 633.888C-93.0124 647.618 -129.012 637.978 -152.352 615.248C-163.75 604.314 -171.662 590.255 -175.092 574.838C-175.402 573.408 -177.562 574.028 -177.292 575.408Z"
                fill="#9A97ED"
              />
            </svg>
          </div>
          <div className={styles.line_2}>
            <svg
              width="100%"
              height="100%"
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
                  <stop stop-color="#9A97ED" stop-opacity="0.01" />
                  <stop offset="1" stop-color="#9A97ED" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {/* carts */}
          <div className={styles.carts}>
            <div className={styles.cart_blocks}>
              {/* Cart */}
              <div className={classNames(styles.cart, styles.cart_1)}>
                <span className={styles.cart_title}>Bento 3D Illustration</span>
                <div
                  className={classNames(styles.cart_block, styles.cart_block_1)}
                >
                  <div className={styles.cart_img1}>
                    <img src={Img3} alt="3" />
                  </div>
                </div>
                <div className={styles.cart_text}>
                  Agency is a full-service agency, busy designing and building
                  beautiful digital products, brands, and experiences.
                </div>
              </div>

              {/* Cart */}
              <div className={classNames(styles.cart, styles.cart_2)}>
                <span className={styles.cart_title}>Bento Vol. 2</span>
                <div
                  className={classNames(styles.cart_block, styles.cart_block_2)}
                >
                  <div className={styles.cart_img2}>
                    <img src={Img4} alt="4" />
                  </div>
                </div>
                <div className={styles.cart_text}>
                  Agency is a full-service agency, busy designing and building
                  beautiful digital products, brands, and experiences.
                </div>
              </div>
            </div>

            <div className={styles.cart_blocks}>
              {/* Cart */}
              <div className={classNames(styles.cart, styles.cart_3)}>
                <span className={styles.cart_title}>Sapiens: Man</span>
                <div
                  className={classNames(styles.cart_block, styles.cart_block_3)}
                >
                  <div className={styles.cart_img3}>
                    <img src={Img5} alt="5" />
                  </div>
                </div>
                <div className={styles.cart_text}>
                  Agency is a full-service agency, busy designing and building
                  beautiful digital products, brands, and experiences.
                </div>
              </div>

              {/* Cart */}
              <div className={classNames(styles.cart, styles.cart_4)}>
                <span className={styles.cart_title}>Bento Vol. 3</span>
                <div
                  className={classNames(styles.cart_block, styles.cart_block_4)}
                >
                  <div className={styles.cart_img4}>
                    <img src={Img6} alt="6" />
                  </div>
                </div>
                <div className={styles.cart_text}>
                  Agency is a full-service agency, busy designing and building
                  beautiful digital products, brands, and experiences.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.block_4}>
          <div className={styles.block_4_decor_2}></div>
          <div className={styles.block_4_container}>
            <div className={styles.block_4_logo}><img src={logoSec} alt="logo" /></div>
            <div className={styles.block_4_img}><img src={phone} alt="phone" /></div>
            <div className={styles.block_4_text}>
              <div className={styles.block_4_title}><span className={styles.block_4_span}>05</span>Call to action</div>
              <div className={styles.block_4_subtitle}>We Are Looking for Talented Designers</div>
              <Button classes={ButtonTypes.WHITE} text='Apply Now'></Button>
              <div className={styles.block_4_decor}><img src={decor} alt="dec" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
