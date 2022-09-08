import Document, { Html, Main } from "next/document";

// eslint-disable-next-line no-unused-vars
const NextLogger = require("next-logger");
// eslint-disable-next-line no-unused-vars
const NextPino = require("pino");
// eslint-disable-next-line no-unused-vars
const NextPinoTransport = require("pino-airbrake-transport");
// eslint-disable-next-line no-unused-vars
const NextPinoPretty = require("pino-pretty");

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <body>
          <Main />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
