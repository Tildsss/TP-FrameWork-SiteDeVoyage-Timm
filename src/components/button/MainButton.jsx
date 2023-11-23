function MainButton({ children, icon }) {
  return (
    <>
      <label>
        <button className="MainButton">
          <img src={icon} />
          {children}
        </button>
      </label>
    </>
  );
}

export default MainButton;
