import { Route, Routes as RoutesReactRouter, BrowserRouter } from "react-router-dom";
import App from "../App";

export default function Routes() {
  return (
    <BrowserRouter>
      <RoutesReactRouter>
        <Route path="/" element={ <App /> } />
      </RoutesReactRouter>
    </BrowserRouter>
  );
}