import type { NextPage } from "next";
import blank from "/styles/HeaderSpace.module.css";
import MyProfile from "../../components/MyProfile";
import HeadInfo from "../../components/Head";

const Profile: NextPage = () => {
  return (
    <>
      <HeadInfo
        title={"ひでまるについて"}
        description={
          "プログラミングや数学、ガジェットが好きな中学一年生の自己紹介"
        }
        dir={"/profile"}
        image={"/image/ogp/profile.png"}
      />
      <div className={blank.fill} />
      <MyProfile />
    </>
  );
};

export default Profile;
