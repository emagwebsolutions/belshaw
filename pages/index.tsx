import type { NextPage } from 'next';
import Headertitle from '../components/Headertitle';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import Image from 'next/image';
import { datacontext } from '../context/store';
export { getServerSideProps } from '../context/store';
import Slider from '../components/Slider';
import FreeQuote from '../components/FreeQuote';
import FreeQuoteQuestions from '../components/FreeQuoteQuestions';

const Home: NextPage = () => {
  const { post } = datacontext();

  //Get Residention Cleaning
  const residentialInfo = Object.values(post)
    .filter((v: any) => {
      return v.slug === 'residential-cleaning-excerpt';
    })
    .map((vl: any, k: any) => (
      <div key={k}>
        <h1>{vl.title}</h1>
        <div>
          <PortableText value={vl.body} />
        </div>
      </div>
    ));

  //Get Residention Cleaning Services thumbnails
  const residentialCleaning = Object.values(post)
    .filter((v: any) => {
      return v.cat_title === 'Residential Cleaning  ';
    })
    .map((vl: any, k: any) => (
      <div key={k}>
        <div className="imageBx">
          <Image
            width="4"
            height="3"
            layout="responsive"
            src={vl.mainImage + ''}
            alt=""
          />
        </div>
        <h3>{vl.title}</h3>
      </div>
    ));

  //Get Commercial Cleaning
  const commercialInfo = Object.values(post)
    .filter((v: any) => {
      return v.slug === 'commercial-cleaning-excerpt';
    })
    .map((vl: any, k: any) => (
      <div key={k}>
        <h1>{vl.title}</h1>
        <div>
          <PortableText value={vl.body} />
        </div>
      </div>
    ));

  //Get Commercial Cleaning Services thumbnails
  const commercialCleaning = Object.values(post)
    .filter((v: any) => {
      return v.cat_title === 'Commercial Cleaning ';
    })
    .map((vl: any, k: any) => (
      <div key={k}>
        <div className="imageBx">
          <Image
            width="4" 
            height="3"
            layout="responsive"
            src={vl.mainImage + ''}
            alt=""
          />
        </div>
        <h3>{vl.title}</h3>
      </div>
    ));

  //Get Laundry Service
  const laundryservice = Object.values(post)
    .filter((v: any) => {
      return v.slug === 'laundry-services';
    })
    .map((vl: any, k: any) => (
      <div key={k} className="homepage-laundry">
        <div>
          <h1>{vl.title}</h1>
          <div>
            <PortableText value={vl.body} />
          </div>
        </div>
        <div>
          <Image
            width="4"
            height="3"
            layout="responsive"
            src={vl.mainImage + ''}
            alt=""
          />
        </div>
      </div>
    ));

  //Get Our Customes

  const ourcustomers = Object.values(post)
    .filter((v: any) => {
      return v.cat_title === 'Customers';
    })
    .map((vl: any, k: any) => (
      <div key={k}>
        <div className="custbx">
          <div>
            <Image
              width="4"
              height="3"
              layout="responsive"
              src={vl.mainImage + ''}
              alt=""
            />
          </div>
          <h5>{vl.title}</h5>
        </div>
      </div>
    ));

  return (
    <>
    <section className="slideshow">
      <Slider />
      <Headertitle />
    </section>

      <section className="sectiontwo residentialCleaning">
        <div className="container">{residentialInfo}</div>
        <div className="container">{residentialCleaning}</div>
        <Link href="/services">
          <a>View All</a>
        </Link>
      </section>
      <section className="sectiontwo residentialCleaning">
        <div className="container">{commercialInfo}</div>
        <div className="container">{commercialCleaning}</div>
        <Link href="/services">
          <a>View All</a>
        </Link>
        <br />
      </section>
      <section className="sectionone aboutus">{laundryservice}</section>
      <section className="sectiontwo ourclients">
        <h1>Our Clients</h1>
        <div className="container">{ourcustomers}</div>
        <br />
      </section>
      <section className="sectionone">
        <div className="container">
          <div>
            <FreeQuote />
            <FreeQuoteQuestions />
          </div>
        </div>
        <br />
      </section>
    </>
  );
};

export default Home;
