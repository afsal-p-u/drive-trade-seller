import { Route, Routes } from "react-router-dom";
import { ChangePassword, Dashboard, ForgotPassword1, ForgotPassword2, SignIn, SignUp, Vehicle, Vehicles } from "./pages";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />} >
        <Route path="/" element={<Dashboard />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/vehicle" element={<Vehicle />} />
      </Route>
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/forgot-password1' element={<ForgotPassword1 />} />
      <Route path='/forgot-password2' element={<ForgotPassword2 />} />
      <Route path='/change-password' element={<ChangePassword />} />
    </Routes>
  );
}

export default App;
