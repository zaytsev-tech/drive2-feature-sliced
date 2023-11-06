import type { AppProps } from "next/app";
import "shared/styles/normalize.css";
import "shared/styles/globals.css";
import "shared/styles/fonts.css";
import { Provider } from "react-redux";
import { persistor, store } from "shared/store/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
