import {useParams} from 'react-router'

const MailboxDetails = (props) => {
    const {mailboxId} = useParams();

    const selectedBox = props.mailboxes.find((mailbox) => (
        mailbox._id === Number(mailboxId)
     ));

if (!selectedBox) return <h3>Mailbox not found!</h3>;

    return (
        <>
        <h2>Mailbox Details</h2>
        <h3>{selectedBox.boxOwner} (ID: {mailboxId})</h3>
        <dl>
            <dt>Box Size:</dt>
            <dd>{selectedBox.boxSize}</dd>
        </dl>
        </>
    )
}


export default MailboxDetails;