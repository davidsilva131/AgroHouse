import { Button, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './LoginForm.scss';
import { schemaLogin } from '../../services/data'
import { yupResolver } from "@hookform/resolvers/yup";

import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useDispatch, useSelector } from "react-redux";
import { loginProviderAsync, userLoginAsync } from "../../redux/actions/userAction";

const LoginForm = ({ setOpen }) => {
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState()
  const { error } = useSelector(state => state.user)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaLogin)
  });
  const onSubmit = (data) => {
    dispatch(userLoginAsync(data.email, data.password))
    if (error) {
      console.log(error);
    } else {
      setOpen(false)
    }
  }

  const handleLoginGoogle = () => {
    dispatch(loginProviderAsync('google'))
  }
  const handleLoginFacebook = () => {
    dispatch(loginProviderAsync('facebook'))
  }

  return (
    <Container>
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <Typography mb='20px' textAlign='center' alignSelf='center' variant="h4" component="h4">
          Iniciar Sesión
        </Typography>
        <TextField
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
        <TextField
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
        <Button type="submit">Ingresar</Button>
        <div className="login__form__logos">
          <GoogleIcon onClick={handleLoginGoogle} sx={{ cursor: 'pointer' }} />
          <FacebookIcon onClick={handleLoginFacebook} sx={{ cursor: 'pointer' }} />
        </div>
      </form>
    </Container>
  )
};

export default LoginForm;
