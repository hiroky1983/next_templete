import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex relative justify-center content-center items-center ">
          <div className="container p-0 m-0 ">
            <div className="flex flex-wrap items-center ">
              <div className="p-0 m-0 w-full ">
                <Image
                  src="/vercel.svg"
                  alt=""
                  quality={100}
                  width={1920}
                  height={1080}
                />
                <Image
                  src="/vercel.svg"
                  alt=""
                  quality={100}
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
