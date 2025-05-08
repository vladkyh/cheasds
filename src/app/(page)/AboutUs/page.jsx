import styles from './styles.module.css'
 import pic1 from '@/../public/pic1.png'
import pic2 from '@/../public/pic2.png'
import Image from "next/image";


const AboutUs = ({}) => {

  return (
      <div className={styles.container}>
          <main className={styles.about}>
              <div className={styles.about_us}>
                  <div>
                      <Image
                      src={pic1}
                      alt={'das'}
                      className={styles.img}
                      />
                  </div>
                  <div>
                      <Image
                      src={pic2}
                      alt={'das'}
                      className={styles.img}
                      />
                  </div>
                  

              </div>
              <div>
                  <p className={styles.about_p}>
                      Conte was founded in 1999 and has since become the largest indoor landscaping company in the state
                      of California. We are a team of professionals consisting of experienced, knowledgeable designers,
                      technicians and plant maintenance specialists. Over the years, we have implemented a number of
                      projects that we and our clients are proud of, and they have also received recognition from
                      industry associations as being of high quality.
                  </p>
                  <h1 className={styles.about_h1}>
                      Our proficiency in plant delivery
                  </h1>
                  <p className={styles.about_p}>
                      Conte began as an interior landscaping company that supplied Auckland's first shopping centers and
                      the offices of international companies with houseplants. As the industry gradually developed, we
                      began to pay even more attention to the indoor plant sector, and due to customer interest and
                      positive feedback, the volume of our work increased.
                      <br/>
                      We are the only company in the California that offers both freestanding and built-in green wall
                      systems that are designed and built by our experts right here. Our green walls can be delivered
                      faster, cheaper and most importantly for customers can be made to any design with our walls being
                      manufactured to the exact dimensions required. Once installed, we offer a warranty and long-term
                      maintenance on all of our systems.
                      <br/> Conte is California's only indoor plant and plant pot importer that offers its customers
                      plants directly from the manufacturer. So we can provide:
                      <br/>


                  </p>
                  <ul>
                      <li className={styles.li_item}>short delivery deadlines, as we receive orders once a week,</li>
                      <li className={styles.li_item}>a very wide selection of plants from Europe’s largest growers,</li>
                      <li className={styles.li_item}>high-quality flowers and trees, and</li>
                      <li className={styles.li_item}>flower pots that match your interior at different price points.</li>
                  </ul>
                  <h1  className={styles.about_h1}>
                      Conte’s experience in landscaping
                  </h1>
                  <p className={styles.about_p}>
                      Since 2015, the company has become one of the industry leaders in the implementation of landscape gardening projects. In
                      <br/>
                      collaboration with the best landscape architects, we have landscaped the largest shopping centers, business and residential
                      <br/>
                      complexes. With our landscaping team of top garden technicians, arborists and designers, we have created countless beautiful
                      <br/>
                      private gardens. We offer our customers garden installation as well as long-term maintenance.
                      <br/>
                      <br/>
                      Conte's specialists regularly update their knowledge at international seminars and exhibitions, as well as by visiting our partners
                      <br/>
                      in other European countries. It is important for us to provide a high level of service and regularly improve our knowledge in order
                      <br/>
                      to offer our customers the highest quality product. To find out more about cooperation with us and to get the most suitable
                      <br/> proposal for a green environment project, contact our specialists.
                  </p>
              </div>
          </main>
          <div className={styles.about_conte}>
              <h1 className={styles.conte_h1}>
                  Conte with love
              </h1>
          </div>

      </div>

  );
}
export default AboutUs;