import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOwnProductsAsync } from "../../redux/actions/allProductsAction";
import { DeleteChip, EditChip } from "../MaterialComponents/ChipsStyled";
import ModalEditProduct from "./ModalEditProduct";
import ModalEditProfile from "./ModalEditProfile";
import './Products.scss'


const Products = () => {
  const { uid } = useSelector(store => store.user)
  const dispatch = useDispatch()
  const ownProducts = useSelector(store => store.allProducts)
  const [productToEdit, setProductToEdit] = useState()
  const [openEditProduct, setOpenEditProduct] = useState(false)

  useEffect(() => {
    dispatch(getOwnProductsAsync(uid))
  }, []);

  const handleEdit = (product) => {
    setProductToEdit(product)
    setOpenEditProduct(true)
  }

  return (
    <>
      {
        ownProducts !== []
          ? ownProducts.map((product, index) =>
            <Card key={index} sx={{ width: 250, height: 'fit-content' }}>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <div className="card__info">
                  <span>{product.name}</span>
                  <span>Tipo: {product.type}</span>
                  <span>Cantidad: {product.quantity}</span>
                  <span>Region: {product.region}</span>
                  <span>${product.price}</span>
                  <div className="card__buttons">
                    <EditChip onClick={() => handleEdit(product)} label="Editar" />
                    <DeleteChip label="Eliminar" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
          : <div>No hay productos</div>
      }
      <ModalEditProduct open={openEditProduct} setOpen={setOpenEditProduct} product={productToEdit} />

    </>
  )
};

export default Products;
