import TextBox from "../Components/TextBox";

function Home() {
  const center = {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  };

  return (
    <div style={center}>
      <TextBox />
    </div>
  );
}

export default Home;
