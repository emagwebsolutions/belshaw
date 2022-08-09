import { datacontext } from '../context/store';
import { PortableText } from '@portabletext/react';

const Headertitle = () => {
  const { post } = datacontext();

  const sliderCaption = Object.values(post)
    .filter((v: any) => {
      return v.slug === 'spotless-cleaning-at-your-doorstep';
    })
    .map((vl: any, k: any) => (
      <div key={k} className="headeer-title">
        <h1>{vl.title}</h1>
        <div>
          <PortableText value={vl.body} />
        </div>
      </div>
    ));

  return <>{sliderCaption}</>;
};

export default Headertitle;
