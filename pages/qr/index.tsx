import { useQRCode } from "react-qrcodes";

export default function Home() {
  const [inputRef] = useQRCode({
    text: "https://no-mount.connpass.com/",
    options: {
      level: "H", //誤り訂正レベル
      margin: 3, //QRコードの周りの空白マージン
      scale: 1,
      width: 200,
    },
  });

  const previewStyle = {
    height: 240,
    width: 320,
  };
  return (
    <main>
      <h1>ノーマンウッド勉強会</h1>
      <canvas ref={inputRef} />
    </main>
  );
}
