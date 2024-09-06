import { BrowserRouter } from "react-router-dom";

import AuthContextProvider from "./context/Auth.context.jsx";
import GlobalContextProvider from "./context/Global.context.jsx";

import AllRoutes from "./routes/Routes.routes.jsx";

const App = () => {

  return (
    
    // auth context
    <AuthContextProvider>
      {/* global context */}
      <GlobalContextProvider>
        <BrowserRouter>
          <AllRoutes/>
        </BrowserRouter>
      </GlobalContextProvider>
    </AuthContextProvider>
  )
}

export default App;
