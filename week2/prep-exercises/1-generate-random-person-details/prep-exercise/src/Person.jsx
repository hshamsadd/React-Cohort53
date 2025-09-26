const Person = ({ person }) => {
  if (!person) {
    return "";
  }
  return (
    <>
      <h1>Random User</h1>
      <ul
        style={{
          listStyle: "none",
          margin: "8px 0",
          padding: "8px 12px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <li>{person.first_name}</li>
        <li>{person.last_name}</li>
        <li>{person.email}</li>
        <img src={person.picture.large} />
      </ul>
    </>
  );
};

export default Person;
