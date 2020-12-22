import { Modal, Message } from './styles';

export default function ClosedModal({ message }) {
  return <Modal>{message && <Message>{message}</Message>}</Modal>;
}
