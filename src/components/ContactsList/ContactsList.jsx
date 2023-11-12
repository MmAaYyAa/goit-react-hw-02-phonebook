const ContactListItem = ({ name, phone, onRemove }) => {
  return (
    <li>
      {name}: {phone} <button onClick={() => onRemove()}>Delete</button>{' '}
    </li>
  );
};

const ContactsList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) {
    return null;
  }
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem {...contacts} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default ContactsList;

// const ContactList = ({ contacts, onRemove }) =>
//   contacts.length > 0 && (
//     <ul>
//       {contacts.map(contact => (
//         <ContactListItem {...contacts} onRemove={onRemove} />
//       ))}
//     </ul>
//   );
