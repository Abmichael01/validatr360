import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import DashboardLayout from './layouts/DashboardLayout';
import { Overview } from './pages/Dashboard/Overview';
import AuthLayout from './layouts/AuthLayout';
import { Login } from './pages/Auth/Login';
import { Signup } from './pages/Auth/Signup';
import { ForgotPassword } from './pages/Auth/ForgotPassword';
import { VerifyOTP } from './pages/Auth/VerifyOtp';
import { ResetPassword } from './pages/Auth/ResetPassword';
import { FormsOverview } from './pages/Dashboard/Forms/Overview';
import FunnelsList from './pages/Dashboard/Forms/List';
import CreateFunnel from './pages/Dashboard/Forms/CreateForm';
import EditFunnel from './pages/Dashboard/Forms/EditForm';
import AIFormBuilder from './components/Dashboard/Forms/EditForm/AIFormBuilder';
import FormBuilder from './pages/Dashboard/Forms/FormBuilder';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>

          <Route path="/" element={<DashboardLayout />}>
            <Route path="dashboard" element={<Overview />} />
            <Route path='forms'>
              <Route index element={<FormsOverview />} />
              <Route path="list" element={<FunnelsList />} />
              <Route path="create-form" element={<CreateFunnel />} />
              <Route path=":id/edit" element={<EditFunnel />} />
              <Route path=":id/edit/form-builder" element={<FormBuilder />} />
              <Route path=":id/edit/ai-form-builder" element={<AIFormBuilder />} />
            </Route>

          </Route>

          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="verify-otp" element={<VerifyOTP />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
