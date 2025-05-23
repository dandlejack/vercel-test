'use'
import Script from 'next/script';
import { GTM_IDS } from '../models/constants/gtm';
import { getSubDomainServerSide } from '../../utils/subdomainServerSide';

export const GoogleAnalytics = () => {
    const subdomain = getSubDomainServerSide()
    console.log('subDomain: ', subdomain)
    const gtmId =  GTM_IDS[subdomain]

    return (
        <>
            <Script id="career-site-aec-google-analytics" strategy="beforeInteractive">
                {`
                    (function (w, d, s, l, i) {
                        w[l] = w[l] || []; w[l].push(
                            { 'gtm.start': new Date().getTime(), event: 'gtm.js' }
                        );
                        var f = d.getElementsByTagName(s)[0],
                            j = d.createElement(s),
                            dl = l != 'dataLayer' ? '&l=' + l : '';
                        j.async = true;
                        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                        f.parentNode.insertBefore(j, f);
                    })(window, document, 'script', 'dataLayer', '${gtmId}');
				`}
            </Script>

            <noscript>
                <iframe
                    src={`www.googletagmanager.com/ns.html?id=${gtmId}`}
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                ></iframe>
            </noscript>

        </>
    );
};

GoogleAnalytics.displayName = 'GoogleAnalytics';