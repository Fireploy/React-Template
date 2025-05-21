import { useNavigate } from "react-router";

function InitialContent() {

    const navigate = useNavigate();

  return (
    <button
      style={{
        backgroundColor: "#1976d2",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px",
      }}
      onClick={() => navigate("/last")}
    >
      Inicia tu viaje en Fireploy
    </button>
  );
}

export default InitialContent;
