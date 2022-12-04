import { InputAdornment, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import EmailIcon from '@mui/icons-material/Email';
import '../Home/RegisterForm'
import PersonIcon from '@mui/icons-material/Person';
import { fileUpLoad } from "../../services/fileUpload";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { GreenButton } from "../MaterialComponents/ButtonStyled";
import { CssTextField } from "../MaterialComponents/TextFieldStyled";
import { updateUserAsync, updateUserEmailAsync } from "../../redux/actions/userAction";

const EditProfileForm = ({ setOpen }) => {
  const user = useSelector(store => store.user)
  const dispatch = useDispatch()
  const { error } = useSelector((store) => store.user);

  const { register, handleSubmit, formState: { errors } } = useForm();

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
    console.log(user);
    if (data.email !== user.email) {
      dispatch(updateUserEmailAsync(data.email))
    }
    if (data.image.length === 1) {
      const photoURL = await onUploadImage(data.image[0])
      const newUser = {
        name: data.name,
        photoURL
      }
      dispatch(updateUserAsync(newUser))
    } else {
      if (data.name !== user.name) {
        const newUser = {
          name: data.name,
          photoURL: user.photoURL
        }
        dispatch(updateUserAsync(newUser))
      }
    }
    if (error) {
      Swal.fire({
        position: 'bottom-end',
        icon: 'error',
        title: 'El usuario no se pudo actualizar',
        showConfirmButton: false,
        timer: 1500
      })

    } else {
      setOpen(false)
      Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: 'Usuario actualizado exitosamente!!',
        showConfirmButton: false,
        timer: 1500
      })
    }

    // const photoUrl = await onUploadImage(data.image[0])
    // const newUser = {
    //   name: data.name,
    //   email: data.email,
    //   // avatar: photoUrl
    // }
    // if (error) {
    //   Swal.fire({
    //     position: 'bottom-end',
    //     icon: 'error',
    //     title: 'El usuario no se pudo crear',
    //     showConfirmButton: false,
    //     timer: 1500
    //   })

    // } else {
    //   setOpen(false)
    //   Swal.fire({
    //     position: 'bottom-end',
    //     icon: 'success',
    //     title: 'Usuario creado exitosamente!!',
    //     showConfirmButton: false,
    //     timer: 1500
    //   })
    // }
  }
  return (
    <Container>
      <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
        <Typography mb='20px' textAlign='center' alignSelf='center' variant="h4" component="h4">
          Información
        </Typography>
        <CssTextField
          type='email'
          placeholder="Correo"
          variant="standard"
          defaultValue={user.email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
          {...register('email')}
          error={!!errors?.email}
          helperText={errors?.email ? errors.email.message : null}
        />
        <CssTextField
          type='text'
          placeholder="Nombre"
          variant="standard"
          defaultValue={user.name}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
          {...register('name')}
          error={!!errors?.name}
          helperText={errors?.name ? errors.name.message : null}
        />
        <CssTextField fullWidth type="file" {...register("image")} />
        <GreenButton type="submit">Editar</GreenButton>
      </form>
    </Container>
  )
};

export default EditProfileForm;
