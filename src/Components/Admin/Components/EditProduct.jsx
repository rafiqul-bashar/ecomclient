import React from 'react'
import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
export default function EditProduct({ isOpen, onClose, product }) {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody className='space-y-2'>
            <label>Product Title :</label>
            <Input type="text" defaultValue={product?.title} />
            <label>Product Price :</label>
            <Input type="text" defaultValue={product?.price} />
            <label>Product Category :</label>
            <Input type="text" defaultValue={product?.category} />
            <label>Product Description :</label>
            <Input type="text" defaultValue={product?.description} />
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
