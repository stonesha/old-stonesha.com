import Container from "@/components/Container";
import ReactFullpage from '@fullpage/react-fullpage';

const IndexPage = () => (
  <Container>
    <ReactFullpage
      //fullpage options
      licenseKey = {process.env.NEXT_PUBLIC_FULLSCREEN_LICENSE_KEY}
      scrollingSpeed = {1000} /* Options here */

      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <div className="bg-honeydew h-screen section">
              <p>Section 1 (welcome to fullpage.js)</p>
            </div>
            <div className="bg-cerulean h-screen section">
              <p>Section 1 (welcome to fullpage.js)</p>
            </div>
            <div className="bg-champagne h-screen section">
              <p>Section 1 (welcome to fullpage.js)</p>
            </div>
            <div className="bg-salmon h-screen section">
              <p>Section 1 (welcome to fullpage.js)</p>
            </div>
            <div className="bg-saffron h-screen section">
              <p>Section 1 (welcome to fullpage.js)</p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </Container>
)

export default IndexPage;
