import GlobalStyle from "../styles";
import AddHabits from '../components/AddHabits/AddHabits';
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <AddHabits />
      <Component {...pageProps} />
    </>
  );
}
