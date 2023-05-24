import { useRouter } from "next/router";
import GlobalStyle from "../styles";
import { HabitsProvider } from "../components/HabitsContext/HabitsContext";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <GlobalStyle />
      <HabitsProvider>
        <Component {...pageProps} router={router} />
      </HabitsProvider>
    </>
  );
}

export default MyApp;
