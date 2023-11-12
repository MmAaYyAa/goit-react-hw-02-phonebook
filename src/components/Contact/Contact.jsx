const Contact = ({ contact, deleteContacts }) => {
  return (
    <div>
      <li>
        {contact.name}: {contact.number}
      </li>
      <button type="button" onClick={() => deleteContacts(contact.id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
