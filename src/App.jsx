import { BrowserRouter } from "react-router-dom";

import AuthContextProvider from "./context/Auth.context.jsx";
import AllRoutes from "./routes/Routes.routes.jsx";

const App = () => {

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <AllRoutes/>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App;
