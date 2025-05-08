import styles from './styles.module.css'
import Image from "next/image";
import logo from '@/../public/logo.png';
import bask from '@/../public/bask.svg';
import inst from '@/../public/inst.svg'
import yt from '@/../public/yt (1).svg'
import fb from '@/../public/fb.svg'

const Layout = ({child}) => {

  return (
    <>
<div className={styles.header}>
  <div className={styles.logo}>
    <Image width={218} height={61}  src={logo} alt={'sda'}/>
  </div>
  <div className={styles.kentiki}>
    <div className={styles.inputtt}>
      <input className={styles.input_header}/>
    </div>
    <div className={styles.BURGERRR}>
      <Image width={40} height={35}  src={bask} alt={'sda'}/>
    </div>
    <div>
      <input   type="checkbox" id="burger_checkbox" className={styles.burger_checkbox}/>
      <label className={styles.burger} htmlFor="burger_checkbox"></label>
    </div>
  </div>
</div>
      <main>
        {child}
      </main>

      <div className={styles.footer}>
            <div className={styles.footer_top}>
                <div>
                    <h2 className={styles.footer_text}>77 Baldock Street, Oakland, WI 54403</h2>
                    <h2 className={styles.footer_text}>4 Manor Way, Oakland CA 94611-1943</h2>
                    <h2 className={styles.footer_text}>infoconte@outlook.com</h2>
                    <h2 className={styles.footer_text}>+1 999 999 99 99</h2>
                </div>
                <div className={styles.footer_text_center_center}>
                    <h2 className={styles.footer_text_center}>You can find us here!</h2>
                    <div className={styles.dff}>
                        <Image className={styles.link_social} width={50} height={50}  src={inst} alt={'sda'}/>
                        <Image className={styles.link_social} width={50} height={50}  src={yt} alt={'sda'}/>
                        <Image className={styles.link_social} width={50} height={50}  src={fb} alt={'sda'}/>
                    </div>
                </div>
                <div>
                    <h2 className={styles.footer_text}>Catalog of indoor plants</h2>
                    <h2 className={styles.footer_text}>Greening of the territory</h2>
                    <h2 className={styles.footer_text}>Indoor landscaping</h2>
                    <h2 className={styles.footer_text}>Green plant wall</h2>
                </div>
            </div>
          <div className={styles.footer_bottom}>
              <h2 className={styles.footer_text}>
                  © 2023 Conte. All rights reserved
              </h2>
          </div>
      </div>
    </>
  );
}
export default Layout;