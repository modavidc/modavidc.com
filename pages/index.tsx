import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";

import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Moisés Cedeño - FullStack Developer</title>
        <meta
          name="description"
          content="Desarrollo soluciones informáticas que resuelven problemas reales."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>   
      <main className={styles.main}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* who am i */}
          <Link href="/">
            <Image
              src="/modavidc.jpg"
              alt="Modavidc Logo"
              className={styles.modavidcLogo}
              width={100}
              height={100}
              priority
            />
          </Link>
          <h1> Moisés Cedeño</h1>

          {/* redes sociales */}
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <Link href="https://t.me/modavidc" target="_blank">
              <Image
                src="/social-icons/telegram.svg"
                alt="Telegram Logo"
                height="24"
                width="24"
              />
            </Link>
            <Link href="https://github.com/modavidc" target="_blank">
              <Image
                src="/social-icons/github.svg"
                alt="Github Logo"
                height="24"
                width="24"
              />
            </Link>
            <Link href="https://twitter.com/modavidc" target="_blank">
              <Image
                src="/social-icons/twitter.svg"
                alt="Twitter Logo"
                height="24"
                width="24"
              />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCg06vNZfvemZADtmDW6XPcA"
              target="_blank"
            >
              <Image
                src="/social-icons/youtube.svg"
                alt="Youtube Logo"
                height="24"
                width="24"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/modavidc" target="_blank">
              <Image
                src="/social-icons/linkedin.svg"
                alt="LinkedIn Logo"
                height="24"
                width="24"
              />
            </Link>
          </div>
        </div>

        {/* página en progreso */}
        <h2 style={{ marginTop: "-5rem" }}>
          Estamos (bueno... Estoy, yo sólo 😆) trabajando <br />
          en la construcción de esta página web 🌐. <br />
        </h2>
        <Image
          style={{ marginTop: "-7.5rem" }}
          className={styles.logo}
          src="/don-ramon.jpg"
          alt="Don Ramón Logo"
          width={250}
          height={250}
          priority
        />

        {/* feliz navidad */}
        <h2 className={inter.className}>
          🎄🎁🌟 <br />
          ¡Feliz Navidad!
        </h2>
      </main>
    </>
  );
}
