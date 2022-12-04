import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { getOwnProductsAsync } from "../../redux/actions/allProductsAction";
import { updateProdutAsync } from "../../redux/actions/productAction";
import { schemaAddProduct } from "../../services/data";
import { fileUpLoad } from "../../services/fileUpload";
import { GreenButton } from "../MaterialComponents/ButtonStyled";
import { CssTextField } from "../MaterialComponents/TextFieldStyled";

const EditProdutcForm = ({ setOpen, product }) => {
  const user = useSelector(store => store.user)
  const dispatch = useDispatch()
  const { error } = useSelector((store) => store.user);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaAddProduct)
  });

  const onUploadImage = async (image) => {
    const url = await fileUpLoad(image);
    if (url) {
      return url;
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'No se ha podido cargar la imagen',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
  const onSubmit = async (data) => {
    const price = parseInt(data.price)
    const quantity = parseInt(data.quantity)
    let photoURL
    if (data.image.length === 1) {
      photoURL = await onUploadImage(data.image[0])
    } else {
      photoURL = product.image
    }
    const newProduct = {
      name: data.name,
      type: data.type,
      quantity: quantity,
      region: data.region,
      price: price,
      image: photoURL,
      owner: user.uid
    }
    console.log(newProduct);
    dispatch(updateProdutAsync(newProduct, product.id))
    if (error) {
      Swal.fire({
        position: 'bottom-end',
        icon: 'error',
        title: 'No se pudo actualizar el producto',
        showConfirmButton: false,
        timer: 1500
      })

    } else {
      setOpen(false)
      Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: 'Producto actualizado exitosamente!!',
        showConfirmButton: false,
        timer: 1500
      })
    }
    dispatch(getOwnProductsAsync(user.uid))
  }
  return (
    <Container>
      <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
        <CssTextField
          label="Nombre"
          type='text'
          placeholder="Nombre"
          defaultValue={product.name}
          variant="standard"
          {...register('name')}
          error={!!errors?.name}
          helperText={errors?.name ? errors.name.message : null}
        />
        <CssTextField
          label="Tipo de producto"
          type='text'
          placeholder="Tipo de producto"
          variant="standard"
          defaultValue={product.type}
          {...register('type')}
          error={!!errors?.type}
          helperText={errors?.type ? errors.type.message : null}
        />
        <CssTextField
          label="Cantidad"
          type='number'
          placeholder="Cantidad"
          variant="standard"
          defaultValue={product.quantity}
          {...register('quantity')}
          error={!!errors?.quantity}
          helperText={errors?.quantity ? errors.quantity.message : null}
        />
        <CssTextField
          label="Region"
          type='text'
          placeholder="Region"
          variant="standard"
          defaultValue={product.region}
          {...register('region')}
          error={!!errors?.region}
          helperText={errors?.region ? errors.region.message : null}
        />
        <CssTextField
          label="Precio"
          type='number'
          placeholder="Precio"
          variant="standard"
          defaultValue={product.price}
          {...register('price')}
          error={!!errors?.price}
          helperText={errors?.price ? errors.price.message : null}
        />
        <CssTextField fullWidth type="file"
          {...register("image")}
        />
        <GreenButton type="submit">Editar Producto</GreenButton>
      </form>
    </Container>
  )
};

export default EditProdutcForm;
