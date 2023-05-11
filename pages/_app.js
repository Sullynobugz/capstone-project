import GlobalStyle from "../styles";
import { HabitsProvider } from "../components/HabitsContext/HabitsContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <HabitsProvider>
        <Component {...pageProps} />
      </HabitsProvider>
    </>
  );
}
