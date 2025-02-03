// src/components/MailboxList/MailboxList.jsx

import { Link } from 'react-router';

const MailboxList = (props) => {
    return (
        <>
        <h2>Mailbox List</h2>
        <ul>
          {props.mailbox.map((mail) => (
            <li key={mail._id}>
              <Link to={`/mailboxes/${mail._id}`}>{mail.boxOwner}</Link>
            </li> 
          ))}
        </ul>
      </>
    );
  };
  
  export default MailboxList;