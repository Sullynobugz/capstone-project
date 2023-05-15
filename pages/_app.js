import { useRouter } from "next/router";
import GlobalStyle from "../styles";
import { HabitsProvider } from "../components/HabitsContext/HabitsContext";

export default function App({ Component, pageProps }) {
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
