import { withAuthenticator } from 'aws-amplify-react';
import { Amplify } from 'aws-amplify';
import axios from '../config/axios';
import { SWRConfig } from 'swr';

Amplify.configure({
  Auth: {
    region: 'ap-south-1',
    userPoolId: 'ap-south-1_ZWuASSub9',
    userPoolWebClientId: '3n8anc10tm6fggaoeroi0iqv5h',
    mandatorySignIn: true,
  },
});

const fetcher = (...args) =>
  axios.get(...args).then((response) => response.data);

function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig value={{ fetcher, errorRetryCount: 2 }}>
        <Component {...pageProps}>
          <style jsx>{`
            html,
            body {
              padding: 0;
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
              line-height: 1.6;
              font-size: 18px;
            }

            * {
              box-sizing: border-box;
            }

            a {
              color: #0070f3;
              text-decoration: none;
            }

            a:hover {
              text-decoration: underline;
            }

            img {
              max-width: 100%;
              display: block;
            }
          `}</style>
        </Component>
      </SWRConfig>
    </>
  );
}

// export default App;

export default withAuthenticator(App);
