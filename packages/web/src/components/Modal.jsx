import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

const BaseModal = ({
  children,
  isOpen,
  onClose,
  submitProps,
  submitTitle,
  title,
  modalProps,
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} {...modalProps}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost' {...submitProps}>
              {submitTitle}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BaseModal;
