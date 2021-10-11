import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { ContactsStyle } from "./ContactsStyle";

class Contacts extends Component {
  state = {
    name: "",
    number: "",
  };

  onChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;

    const contact = { name: name, number: number, id: uuidv4() };

    this.props.getNewContact(contact);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <ContactsStyle>
        <form className="contactsForm" onSubmit={this.onSubmit}>
          <label>Name </label>
          <input
            className="contactsFormInput"
            onChange={this.onChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            autoComplete="off"
          />

          <label className="contactsFormLabel">Number </label>
          <input
            className="contactsFormInput"
            onChange={this.onChange}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            autoComplete="off"
          />

          <button className="contactsFormBtn" type="submit">
            Add contact
          </button>
        </form>
      </ContactsStyle>
    );
  }
}

Contacts.propTypes = {
  getNewContact: PropTypes.func.isRequired,
};
export default Contacts;
