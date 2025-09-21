
import { useRouteError, useNavigate } from "react-router-dom";

function GlobalErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  // Редирект на /login при ошибке 401 или Unauthorized
  if (
    error?.status === 401 ||
    error?.message === "Unauthorized" ||
    (typeof error === "object" && error?.error === "Unauthorized")
  ) {
    navigate("/login", { replace: true });
    return null;
  }

  return (
    <div>
      <h1>GlobalErrorPage</h1>
      <pre>{error?.message || JSON.stringify(error)}</pre>
    </div>
  );
}

export default GlobalErrorPage;
