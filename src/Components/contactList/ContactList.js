import React from "react";
import PropTypes from "prop-types";
import { ContactListStyle } from "./ContactListStyle";

const ContactList = ({ contactsToRender, onDelete }) => {
  return (
    <ContactListStyle>
      <ul>
        {contactsToRender.map((props) => {
          const { name, number, id } = props;
          const funcDel = () => onDelete(id);
          return (
            <li className="contactItem" key={id} data-id={id}>
              {`${name}: ${number}`}
              <button type="button" onClick={funcDel}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </ContactListStyle>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contactsToRender: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
export default ContactList;
