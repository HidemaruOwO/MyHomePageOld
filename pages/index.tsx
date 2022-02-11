import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HeadInfo from "../components/Head";

const Home: NextPage = () => {
  return (
    <div>
      <HeadInfo title="ホーム" description="ひでまるの公式サイト" dir="/" />
    </div>
  );
};

export default Home;
