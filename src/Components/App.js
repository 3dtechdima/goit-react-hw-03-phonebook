import React, { Component } from "react";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import Contacts from "./contacts/Contacts";
import Check from "../check/Check";
import { AppStyle } from "./AppStules";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  newContact = (contact) => {
    try {
      Check(this.state.contacts, contact);
    } catch {
      return;
    }

    this.setState((prevState) => {
      return { contacts: [...prevState.contacts, contact] };
    });
  };

  onChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  Delete = (id) => {
    const idToDelete = id;
    const contactsAfterDel = this.state.contacts.filter(
      (contact) => idToDelete !== contact.id
    );

    this.setState({
      contacts: [...contactsAfterDel],
    });
  };

  render() {
    return (
      <>
        <AppStyle>
          <h2>Phonebook</h2>
          <Contacts getNewContact={this.newContact} />

          <h2>Contacts</h2>
          <Filter onChange={this.onChange} filterStr={this.state.filter} />
          {this.getFilteredContacts().length > 0 && (
            <ContactList
              contactsToRender={this.getFilteredContacts()}
              onDelete={this.Delete}
            />
          )}
        </AppStyle>
      </>
    );
  }
}

export default App;
