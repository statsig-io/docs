import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const SignupCTA = () => (
  <BrowserOnly>
    {() => {
      const statsig = window.Statsig.StatsigClient.instance();
      const ctaExp = statsig?.getExperiment('docs_signup_cta');
      const url = ctaExp?.get('url') ?? 'https://console.statsig.com';
      const cta = ctaExp?.get('cta') ?? 'Get Started';
      return (
        <a className="navbar__item" href={url} target="_blank">
          <button className="signupCTA CTA">{cta}</button>
        </a>
      );
    }}
  </BrowserOnly>
);
export default React.memo(SignupCTA);
