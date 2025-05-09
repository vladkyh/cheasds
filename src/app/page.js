import Image from "next/image";
import styles from "../comp/styles.module.css";
import Link from "next/link";

export default function Home() {
    var lichel = [
        {num: 241, text: 'territory is green'},
        {num: 11000, text: 'plant planted'},
        {num: 28, text: 'green walls installed'},
        {num: 32, text: 'moss walls'},
    ]
  return (
    <div className={styles.page}>
        <div className={styles.hi}>
            <div className={styles.hi_text}>
                <div>
                    <h1 className={styles.hi_title}>
                        Plants <br/>
                        for you are <br/>
                        our concern
                    </h1>
                </div>
                <div className={styles.df}>
                    <button className={styles.bynow}>
                        <Link className={styles.link_nonee} href="/Store">
                            Buy now


                        </Link>
                    </button>
                    <button className={styles.aboutusbutton} >
                        <Link className={styles.link_none} href="/AboutUs">
                            About us

                        </Link>
                    </button>
                </div>
            </div>

            <div className={styles.hi_back}>

            </div>

        </div>
        <div className={styles.about_us}>
            <div className={styles.about_ud_back}>

            </div>
            <div className={styles.about_us_textblock}>
                <h1 className={styles.about_h1}>About us</h1>
                <h4 className={styles.about_h4}>
                    We are a team of professionals consisting of experienced and knowledgeable designers, technicians
                    and plant care specialists. Over the past years, we have implemented a number of projects that we
                    and our clients are proud of.
                    <br/><br/>
                    Conte started out as a greenery company, supplying indoor plants to Oakland&apos;s first shopping
                    malls and foreign company offices in the state California.
                </h4>
                <button className={styles.about_button}>
                    Read more <p className={styles.p}>{'->'}</p>
                </button>
            </div>
        </div>
        <div className={styles.number}>
            <div className={styles.list_div}>
                <ul className={styles.list}>
                    {lichel.map(({num, text}, index) => (
                        <li className={styles.list_li} key={index}>
                            <h1 className={styles.number_h1}>
                                {num}
                            </h1>
                            <h3 className={styles.number_h3}>
                                {text}
                            </h3>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.number_back}></div>
        </div>
        <div className={styles.contact}>
            <h1 className={styles.contact_h1}>
                Contact us
            </h1>

            <div className={styles.contact_us}>
                <div className={styles.text_asdfa}>
                    <div className={styles.text_contact}>
                        77 Baldock Street, Oakland, WI 54403 <br/>
                        40 Manor Way, Oakland CA 94611-1943
                    </div>
                    <div className={styles.text_contact}>
                        +1 999 999 99 99
                    </div>
                    <div className={styles.text_contact}>
                        infoconte@outlook.com
                    </div>
                    <div className={styles.text_contact_mini}>
                        Message attachment
                    </div>
                    <div className={styles.text_contact_mini}>
                        <Link href={'/'}
                        className={styles.link}
                        >
                            Select files
                        </Link>  or add files here <br/>
                         file size up to 1MB and attachment size <br/>
                        up to 5MB
                    </div>
                </div>
                <div className={styles.input_gayt}>
                    <input placeholder={'Name, surname'} className={styles.input_contact}/>
                    <input placeholder={'Phone number'} className={styles.input_contact}/>
                    <input placeholder={'E-mail'} className={styles.input_contact}/>
                    <input placeholder={'Message'} className={styles.input_contact}/>
                    <button className={styles.send}>
                        Send
                    </button>
                </div>
            </div>
        </div>

    </div>
  );
}
