import React from 'react'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
export default function DeleteProduct({ isOpen, onClose }) {
    
    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Delete Product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody className='space-y-2'>
                        <h1>Are you sure you want to delete?</h1>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='red'>Delete</Button>
                        <Button variant='outline' mx={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}
