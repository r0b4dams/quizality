import { Provider } from "react-redux";

import { store } from "./store";
import { AppRouter } from "./AppRouter";

export const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
