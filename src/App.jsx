// src/App.jsx

import { useState } from 'react';
import {Route, Routes} from 'react-router';
import MailboxList from './components/MailboxList/MailboxList';
import NavBar from './components/NavBar/NavBar';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import MailboxForm from './components/MailboxForm/MailboxForm';

const initialState = [
  {
    _id: 1,
    boxSize: 'Small',
    boxOwner: 'Alex',
  }
];

const App = () => {
  const [mailbox, setMailbox] = useState(initialState);

  const addBox = (formData) => {
    formData._id = mailbox.length + 1
    setMailbox([...mailbox, formData])
  }
  return (
    <>
      <NavBar />
      <h1>Welcome To Mailbox Express</h1>
      
      <Routes>
        <Route path='/' element={<h2>Home Page</h2>} />
        <Route path='/mailboxes' element ={<MailboxList mailbox={mailbox} />} />
        <Route path='/new-mailbox' element={<MailboxForm addBox={addBox}/>} />
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailbox}/>}/>
        <Route path='*' element={<h2>Whoops, nothing here!</h2>} />
      </Routes>
    </>
  );
};

export default App;
