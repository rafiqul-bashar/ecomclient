import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'

export default function AddProduct({ isOpen, onClose }) {

  return (
    <div>
     <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody className='space-y-2'>
            <label>Product Title :</label>
            <Input type="text" placeholder='Product Title' />
            <label>Product Price :</label>
            <Input type="text" placeholder='Product Price' />
            <label>Product Category :</label>
            <Input type="text" placeholder='Product Category' />
            <label>Product Description :</label>
            <Input type="text" placeholder='Product Description' />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue'>Update Product</Button>
            <Button colorScheme='red' variant='outline' mx={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}
