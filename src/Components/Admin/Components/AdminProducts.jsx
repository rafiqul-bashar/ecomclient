import React from 'react'
import Loading from '../../Common/Loading'
import { products } from '../../../staticdata'
import { MdDeleteForever } from "react-icons/md"
import { AiOutlineEdit } from 'react-icons/ai'

import AddProduct from './AddProduct'
import EditProduct from './EditProduct'
import { useDisclosure } from '@chakra-ui/react'
import DeleteProduct from './DeleteProduct'
export default function AdminProducts() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalType, setModalType] = React.useState(null)
    const [currentProduct, setCurrentProduct] = React.useState({})

    const handleAddProduct = () => {
        onOpen()
        setModalType("addproduct")
    }
    const handleEdit = (product) => {
        onOpen()
        setCurrentProduct(product)
        setModalType("editproduct")

    }
    const handleDelete = (product) => {
        onOpen()
        setCurrentProduct(product)
        setModalType("deleteproduct")

    }

    const renderModal = () => {
        if (modalType === "addproduct") {
            return <AddProduct isOpen={isOpen} onClose={onClose} />
        }
        if (modalType === "editproduct") {
            return <EditProduct isOpen={isOpen} onClose={onClose} product={currentProduct} />
        }
        if (modalType === "deleteproduct") {
            return <DeleteProduct isOpen={isOpen} onClose={onClose} product={currentProduct} />
        }
    }


    const loading = false
    if (loading) {
        return <Loading />
    } else return (
        <section className='container py-6'>
            <div onClick={handleAddProduct} className='my-4 py-1 border-2 border-green font-bold tracking-wider text-black/70 text-center md:w-1/3 cursor-pointer'> Add New Product</div>
            {renderModal()}

            <div className='space-y-3'>
                {products.map((product, index) => (
                    <div key={index} className="grid grid-cols-5 py-2 border-b-2 border-black/60">
                        <img src={product?.image} alt={product.title} className="h-10 mx-auto" />
                        <div className='col-span-2 flex '>
                            <h1 className='font-semibold text-xl'>{product?.title}</h1>

                        </div>

                        <div className='col-span-2 flex items-center justify-around'>
                            <div className='flex items-center space-x-4 text-2xl'>
                                <AiOutlineEdit onClick={() => handleEdit(product)} className="text-black-70 cursor-pointer" />
                                <MdDeleteForever onClick={() => handleDelete(product)} className="text-red cursor-pointer" />
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}
