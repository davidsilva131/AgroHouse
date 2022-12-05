import { yupResolver } from "@hookform/resolvers/yup";
import { IconButton, InputAdornment, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { schemaRegister } from "../../services/data";
import EmailIcon from '@mui/icons-material/Email';
import './RegisterForm.scss'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { fileUpLoad } from "../../services/fileUpload";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterAsync } from "../../redux/actions/userAction";
import Swal from "sweetalert2";
import { GreenButton } from "../MaterialComponents/ButtonStyled";
import { CssTextField } from "../MaterialComponents/TextFieldStyled";

const RegisterForm = ({ setOpenRegister }) => {
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch()
  const { error } = useSelector((store) => store.user);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaRegister)
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
    const photoUrl = await onUploadImage(data.image[0])
    const newUser = {
      name: data.name,
      email: data.email,
      password: data.password,
      avatar: photoUrl
    }
    dispatch(userRegisterAsync(newUser))
    if (error) {
      Swal.fire({
        position: 'bottom-end',
        icon: 'error',
        title: 'El usuario no se pudo crear',
        showConfirmButton: false,
        timer: 1500
      })

    } else {
      setOpenRegister(false)
      Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: 'Usuario creado exitosamente!!',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
  return (
    <Container>
      <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
        <Typography mb='20px' textAlign='center' alignSelf='center' variant="h4" component="h4">
          Registrate
        </Typography>
        <CssTextField
          type='email'
          placeholder="Correo"
          variant="standard"
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
        <CssTextField
          type={showPassword ? 'text' : 'password'}
          placeholder='Contraseña'
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <IconButton
                arial-label="toogle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <VisibilityIcon />}
              </IconButton>
            ),
          }}
          {...register('password')}
          error={!!errors?.password}
          helperText={errors?.password ? errors.password.message : null}
        />
        <CssTextField fullWidth type="file" {...register("image")} />
        <GreenButton type="submit">Registrarse</GreenButton>
      </form>
    </Container>
  )
};

export default RegisterForm;
