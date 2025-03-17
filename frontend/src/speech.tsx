"use client";
import * as React from "react";
import styles from "./speech.module.css";

interface StatusBarProps {
  time?: string;
}

function StatusBar({ time = "9:41" }: StatusBarProps) {
  return (
    <header className={styles.statusBarIPhone}>
      <div className={styles.frame}>
        <time className={styles.time}>{time}</time>
        <div className={styles.dynamicIslandspacer} />
        <div className={styles.levels}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2daff01164d1f56f28b0d1cd21000ea5c0857de85b1f08ac1c20b2912a0e0d43?placeholderIfAbsent=true&apiKey=c49673c893e245259b271834306258ba"
            className={styles.img}
            alt="Signal strength"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d31bae4bf4ff46ccfafffa13bf606a831715bfe78ce5f06bcdc93ec85bd033b?placeholderIfAbsent=true&apiKey=c49673c893e245259b271834306258ba"
            className={styles.img2}
            alt="Battery level"
          />
        </div>
      </div>
    </header>
  );
}

function ContentSection() {
  return (
    <section className={styles.div}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3ec826cdfe938a92c5cfbf2c2e786f2752d9d8914de3df9c11a2cf5c5c4896d?placeholderIfAbsent=true&apiKey=c49673c893e245259b271834306258ba"
        className={styles.img3}
        alt="App logo"
      />

      <div className={styles.div2}>
        <div className={styles.div3}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/260f5fbbfecd696226ef330e2b4b8c88e4e3679213637e0ba48c82cfec7557d9?placeholderIfAbsent=true&apiKey=c49673c893e245259b271834306258ba"
            className={styles.img4}
            alt="Profile avatar"
          />
          <h2 className={styles.speechName}>Speech Name</h2>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/53d332cece25f01d40ccb5c5cac8924429f76644e303679539ec9f1b27866256?placeholderIfAbsent=true&apiKey=c49673c893e245259b271834306258ba"
          className={styles.img5}
          alt="Action icon"
        />
      </div>

      <div className={styles.div4}>
        <article className={styles.speech}>
          Speech
          .......................................................................................................................................................................................................................................................................................................................................................................................................................................................
        </article>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/16cbc9d14a816c487d4702bd1444032d53182bb233c22937e17479a5e4d71fb0?placeholderIfAbsent=true&apiKey=c49673c893e245259b271834306258ba"
          className={styles.img6}
          alt="Control button"
        />
      </div>
    </section>
  );
}

function ControlsSection() {
  return (
    <>
      <hr className={styles.div5} />
      <nav className={styles.div6}>
        <div className={styles.div7}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0426cc61-3f6a-4df9-bb86-a68e337ac956?placeholderIfAbsent=true&apiKey=c49673c893e245259b271834306258ba"
            className={styles.img7}
            alt="Thumbnail"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7477a0a7b164429a4ce70b0f05cb411af464cef3716eae98f052b3df0d941a15?placeholderIfAbsent=true&apiKey=c49673c893e245259b271834306258ba"
            className={styles.img8}
            alt="Play button"
          />
        </div>
        <div className={styles.div8}>
          <button>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1cb0851b0ca238d3bed6ff84f19b8dc8f129879bdf10ace9b095a3e49d39027?placeholderIfAbsent=true&apiKey=c49673c893e245259b271834306258ba"
              className={styles.img9}
              alt="Control button 1"
            />
          </button>
          <button>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/877c42f4cb4413f92caa8795e8cdd65c4a1463c35afff7d03484527be0ce091f?placeholderIfAbsent=true&apiKey=c49673c893e245259b271834306258ba"
              className={styles.img10}
              alt="Control button 2"
            />
          </button>
          <button>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/781b8bdf78fd4c263bfb950f494b8c9bff65ec89dd64cb823f86aa3b2cf77192?placeholderIfAbsent=true&apiKey=c49673c893e245259b271834306258ba"
              className={styles.img11}
              alt="Control button 3"
            />
          </button>
        </div>
      </nav>
    </>
  );
}

function IPhone() {
  return (
    <main className={styles.iPhone}>
      <StatusBar />
      <ContentSection />
      <ControlsSection />
    </main>
  );
}

function App() {
  return (
    <>
      <StatusBar />
      <ContentSection />
      <ControlsSection />
      <IPhone />
    </>
  );
}
