const Header = () => {
  const headerStyle = {
    padding: "20ox 0",
    lineHeight: "1.5em",
  }
  return (
    <header style={headerStyle}>
      <h1 style={{
        fontSize: "6rem",
        fontWeight: "600",
        marginBottom: "2rem",
        lineHeight: "1em",
        color: "#ececec",
        textTransform: "lowercase",
        textAlign: "center",
      }}>
        To-Do
      </h1>
    </header>
  );
}

export default Header;