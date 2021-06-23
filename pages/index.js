import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useQRCode } from "react-qrcodes";
import dynamic from "next/dynamic";

export default function Home() {
  const QrReader = dynamic(() => import("react-qr-reader"), { ssr: false });
  const [inputRef] = useQRCode({
    text: "https://qiita.com/hujuu",
    options: {
      level: "H", //誤り訂正レベル
      margin: 3, //QRコードの周りの空白マージン
      scale: 1,
      width: 200,
    },
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>テスト</h1>
        <QrReader
          delay={1000}
          onScan={(data) => {
            alert(data);
          }}
          onError={(error) => {
            alert(error);
          }}
        ></QrReader>
        <canvas ref={inputRef} />
      </main>
    </div>
  );
}