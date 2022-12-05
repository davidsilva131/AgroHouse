import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import '../Home/RegisterForm'
import { fileUpLoad } from "../../services/fileUpload";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { GreenButton } from "../MaterialComponents/ButtonStyled";
import { CssTextField } from "../MaterialComponents/TextFieldStyled";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaAddProduct } from "../../services/data";
import { addProductAsync } from "../../redux/actions/productAction";
import { getOwnProductsAsync } from "../../redux/actions/allProductsAction";

const AddProductForm = ({ setOpen }) => {
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
    const photoURL = await onUploadImage(data.image[0])
    const newProduct = {
      name: data.name,
      type: data.type,
      quantity: quantity,
      region: data.region,
      price: price,
      image: photoURL,
      owner: user.uid
    }
    dispatch(addProductAsync(newProduct))
    console.log(newProduct);
    if (error) {
      Swal.fire({
        position: 'bottom-end',
        icon: 'error',
        title: 'No se pudo añadir el producto',
        showConfirmButton: false,
        timer: 1500
      })

    } else {
      setOpen(false)
      Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: 'Producto agregado exitosamente!!',
        showConfirmButton: false,
        timer: 1500
      })
      dispatch(getOwnProductsAsync(user.uid))
    }

  }
  return (
    <Container>
      <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
        <Typography mb='20px' textAlign='center' alignSelf='center' variant="h4" component="h4">
          Agregar Producto
        </Typography>
        <CssTextField
          type='text'
          placeholder="Nombre"
          variant="standard"
          {...register('name')}
          error={!!errors?.name}
          helperText={errors?.name ? errors.name.message : null}
        />
        <CssTextField
          type='text'
          placeholder="Tipo de producto"
          variant="standard"
          {...register('type')}
          error={!!errors?.type}
          helperText={errors?.type ? errors.type.message : null}
        />
        <CssTextField
          type='number'
          placeholder="Cantidad"
          variant="standard"
          {...register('quantity')}
          error={!!errors?.quantity}
          helperText={errors?.quantity ? errors.quantity.message : null}
        />
        <CssTextField
          type='text'
          placeholder="Region"
          variant="standard"
          {...register('region')}
          error={!!errors?.region}
          helperText={errors?.region ? errors.region.message : null}
        />
        <CssTextField
          type='number'
          placeholder="Precio"
          variant="standard"
          {...register('price')}
          error={!!errors?.price}
          helperText={errors?.price ? errors.price.message : null}
        />
        <CssTextField fullWidth type="file"
          {...register("image", { required: true, message: 'La imagen del producto es obligatoria' })}
          error={!!errors?.image}
          helperText={errors?.image ? errors.image.message : null}
        />
        <GreenButton type="submit">Agregar Producto</GreenButton>
      </form>
    </Container>
  )
};

export default AddProductForm;
