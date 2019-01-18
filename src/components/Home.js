import React, { Fragment } from 'react';
import Seattle from '../assets/seattle_night.jpg';
import SeaArch from '../assets/seattle_arch.jpg';
export default function Home() {
  return (
    <Fragment>
      <img src={Seattle} alt="image of seattle skyline" className="home-hero-image" />
      <section className="home-about-container">
        <h1 className="home-lg-heading">Debbie Jefferson</h1>
        <p>
          I am proud to be a part of the shrinking 38% of Seattle natives, having worked and lived
          all over the Puget Sound Region most of my life. I entered real estate following years of
          work in architecture, construction, public and private Seattle schools as well as property
          management.
        </p>
        <p>
          Whether it’s helping sellers prepare their property to sell or assisting buyers in
          transforming their property to their dream home – I have a dream team of referrals to help
          us get the job done.
        </p>
        <p>
          I am proud to be a member of the highly respected, independent real estate firm, Lake &
          Company Real Estate. With a brokerage firm that has created a strong family atmosphere,
          clients not only receive a committed and highly experienced individual helping them, they
          get an army of reinforcements! Often brokers within a firm are seen as competitors; at
          Lake & Company, we know the success of every individual broker is elevating the success of
          our clients. And that my friend, is what I’m here for!
        </p>
        <span>206.527.1777 | debbiej@lakere.com</span>
      </section>
      <section className="home-testimonial-container">
        <h3>Testimonials</h3>
        <p>
          Debbie is the absolute best real estate agent out there. In two weeks, Debbie helped us
          win an offer on a home near the University of Washington, and beat out 6 other buyers. She
          presented our offer personally to the seller's agent which was amazing. After the closing,
          which went very smoothly, Debbie even helped us set up our new home to be a part-time
          rental since we were new to the area and working a lot. That is unheard of for an agent! I
          can't say enough about Debbie, and I now consider her my good friend in Seattle who helped
          welcome us to the city. We highly, highly recommend her!
        </p>
        <span>Michelle L, Buyer</span>
      </section>
      <section className="home-brokerage-container">
        <h2>Lake & Co. Real Estate</h2>
        <div className="home-brokerage-col">
          <p>
            Lake & Company Real Estate, Inc. is an independent residential real estate company with
            a single, centralized office. Founded in 1982, we have a simple goal: be Seattle's best
            real estate company and serve the entire region.
          </p>
          <p>This is our philosophy:</p>
          <ul>
            <li>
              Belief: We believe in real estate and home ownership and therefore have fun helping
              people achieve it.
            </li>
            <li>Excellence: We strive to do everything better than the other companies.</li>
            <li>Service: The client's needs come first.</li>
            <li>
              Trust: Clients are treated as they were a member of our family. We live by the Golden
              Rule!
            </li>
          </ul>
        </div>
        <div className="home-brokerage-col">
          <p>
            Our central location near Green Lake is ideally suited for easy access to all areas, and
            as a member of the Northwest Multiple Listing Service (NWMLS), the Independent Broker's
            Association (IBA), and the National Asociation of REALTORS® (NAR), Lake & Company is
            positioned to provide the best service available in today's market.
          </p>
          <p>
            As a result, Lake & Company has grown to become Seattle's most productive independent
            real estate office, supporting more than 90 superior professional REALTORS®
          </p>
          <p>
            Through commitment to quality, not size, Lake & Company carefully guards its reputation
            for excellence rather than simply relying on a national name; for, without a national
            name, we must rely on only our reputation for superior service in order to compete.
          </p>
          <p>Map of Lake & Company's office.</p>
        </div>
        <img src={SeaArch} alt="image of seattle skyline" className="home-arch-image" />
      </section>
    </Fragment>
  );
}
