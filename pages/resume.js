import Head from "next/head";
import Resume from "../components/Resume";

export default function ResumePage(props) {
  return (
    <>
      <Head>
        <title>Brad Murphy | UX Engineer | Resume</title>
      </Head>

      <Resume />
    </>
  );
}
