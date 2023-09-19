export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#E5E5E5",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            fontFamily: "sans-serif",
            color: "#FCA311",
          }}
        >
          Site em construção 🚧
        </h1>
        <p
          style={{
            fontSize: "30px",
            fontFamily: "sans-serif",
            color: "#14213D",
          }}
        >
          Acesse minhas redes:
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "300px",
          }}
        >
          <a
            href="https://www.linkedin.com/in/ericomarshall/"
            target="blank"
            style={{
              fontSize: "30px",
              fontFamily: "sans-serif",
              color: "#14213D",
              textDecoration: "none",
            }}
          >
            Linkedin
          </a>
          <a
            href="https://github.com/egmarshall"
            target="blank"
            style={{
              fontSize: "30px",
              fontFamily: "sans-serif",
              color: "#14213D",
              textDecoration: "none",
            }}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
