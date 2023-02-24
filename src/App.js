import Login from './pages/login/Login';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ResponseInterceptor } from './services/interceptors/ResponseInterceptor';
import Auth from './pages/auth/Auth';
import { AuthProvider } from './contexts/AuthProvider';
import UserSelect from './pages/user-select/User-Select';
import ProtectedRoute from './contexts/ProtectedRoute';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <ResponseInterceptor />
          <Routes>
            <Route path="/" exact element={<ProtectedRoute><UserSelect /></ProtectedRoute>} />
            <Route path="/ata" exact element={<ProtectedRoute>{<>ta</>}</ProtectedRoute>} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/auth" exact element={<Auth />} />

          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div >
  );
}

export default App;