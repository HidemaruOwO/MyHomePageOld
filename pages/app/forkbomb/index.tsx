import type {NextPage} from "next";
import HeadInfo from "../../../components/Head";
import Script from "next/script";

const Profile: NextPage = () => {
    return (
        <>
            <HeadInfo
                title={"QuickForkbomb"}
                description={
                    "友達に送ってみてね！！"
                }
                dir={"/app/forkbomb"}
                image={"/image/ogp/profile.png"}
            />
            <Script src="/js/forkbomb.js" />
        </>
    );
};

export default Profile;

