import type {NextPage} from "next";
import HeadInfo from "../../../components/Head";

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
            <script src="/js/forkbomb.js" async/>
        </>
    );
};

export default Profile;

