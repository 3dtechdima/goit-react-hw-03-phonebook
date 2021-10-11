export default function checkContact(dataToCheck, state) {
  dataToCheck.forEach((el) => {
    if (el.name.toLowerCase() === state.name.toLowerCase()) {
      alert(`${el.name} is already in contacts.`);
      throw Error;
    }

    if (el.number.toLowerCase() === state.number.toLowerCase()) {
      alert(`${el.number} is already in contacts.`);
      throw Error;
    }
  });
}
