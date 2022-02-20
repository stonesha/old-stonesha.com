import Head from 'next/head';

const Container = (props) => {

    const { children } = props;

    return (
        <div>
            <Head>
                <title>Stone Sha</title>
                
            </Head>
            <nav>

            </nav>

            <main className='mx-auto w-4/6'>
                {children}
            </main>

        </div>
    );
}

export default Container;