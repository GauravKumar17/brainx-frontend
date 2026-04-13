import "./App.css";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TweetsContents from "./components/TweetsContents";
import VideoContents from "./components/VideoContents";
import DocContents from "./components/DocContents";
import ProtectedRoute from "./components/ProtectedRoute";
import LinksContents from "./components/LinksContents";
import PlaceholderPage from "./components/PlaceholderPage";
import AuthCallback from "./components/AuthCallback";
import SharePage from "./components/SharePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/tweets"
          element={
            <ProtectedRoute>
              <TweetsContents />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/videos"
          element={
            <ProtectedRoute>
              <VideoContents />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/docs"
          element={
            <ProtectedRoute>
              <DocContents />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/links"
          element={
            <ProtectedRoute>
              <LinksContents />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/tags"
          element={
            <ProtectedRoute>
              <PlaceholderPage
                title="Tags"
                description="Tag management is the next feature to wire up. Your core workspace flow is ready now."
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/settings"
          element={
            <ProtectedRoute>
              <PlaceholderPage
                title="Settings"
                description="Settings can be expanded next. Your session is already managed locally in the browser."
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/refer"
          element={
            <ProtectedRoute>
              <PlaceholderPage
                title="Refer"
                description="Referral sharing is still a placeholder, but the app is now set up to work as a real web workspace."
              />
            </ProtectedRoute>
          }
        />
        <Route path="/share/:shareLink" element={<SharePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
