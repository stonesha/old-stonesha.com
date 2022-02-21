import Head from 'next/head';

const Container = (props) => {

    const { children } = props;

    return (
        <div>
          <Head>
            <title>Stone Sha</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <main>
              {children}
          </main>
        </div>
    );
}

export default Container;