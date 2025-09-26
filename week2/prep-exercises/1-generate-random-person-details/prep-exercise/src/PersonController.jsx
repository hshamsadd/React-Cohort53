import { useState, useEffect } from "react";
import Person from "./Person.jsx";

const PersonController = () => {
  const [person, setPerson] = useState(null);

  const getPerson = async () => {
    const reponse = await fetch("https://www.randomuser.me/api?results=1");
    const data = await reponse.json();

    const person = data.results[0];
    console.log(person);

    const cleanedData = {
      first_name: person.name.first,
      last_name: person.name.last,
      email: person.email,
      picture: person.picture,
    };

    setPerson(cleanedData);
    console.log(cleanedData);
  };

  useEffect(() => {
    getPerson();
  }, []);

  return <Person person={person} />;
};
export default PersonController;
