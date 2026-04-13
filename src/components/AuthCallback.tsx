import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function AuthCallback() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    const username = searchParams.get("username");

    if (token) {
      localStorage.setItem("token", token);
    }

    if (username) {
      localStorage.setItem("username", username);
    }

    navigate(token ? "/home" : "/", { replace: true });
  }, [navigate, searchParams]);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center text-xl">
      Completing sign in...
    </div>
  );
}

export default AuthCallback;
