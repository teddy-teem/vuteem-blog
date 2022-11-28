import Application from "./App"
import { store } from "../store";
import { Provider } from 'react-redux';

// const A = dynamic(() => import("../component/A"), { ssr: false });
export default function App() {
  return (
    <Provider store={store}>
      <Application />
    </Provider>
  );
}
