import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <ul className={styles.footer_list}>
          <li>ホーム</li>
          <li>アプリ</li>
          <li>ブログ</li>
          <li>プライバシーポリシー</li>
          <li>投稿者プロフィール</li>
          <li>お問い合わせ</li>
        </ul>
        <div className={styles.copy_light}>
          <small>© 2022 HIDEMAL inc.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
