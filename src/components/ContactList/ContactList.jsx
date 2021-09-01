import s from './ContactList.module.css';

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={s.contactItemsList}>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={s.contactItem}>
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            className={s.contactDelete}
            onClick={() => onDelete(id)}
          >
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  );
}
