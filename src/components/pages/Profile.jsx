import { Avatar, Container } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { GreenButton } from "../MaterialComponents/ButtonStyled";
import ModalAddProduct from "../Profile/ModalAddProduct";
import ModalEditProfile from "../Profile/ModalEditProfile";
import Products from "../Profile/Products";
import './Profile.scss'

const Profile = () => {
  const user = useSelector(store => store.user)
  const [openEditProfile, setOpenEditProfile] = useState(false)
  const [openAddProduct, setOpenAddProduct] = useState(false)

  const handleAddProduct = () => {
    setOpenAddProduct(true)
  }
  const handleEditProfile = () => {
    setOpenEditProfile(true)
  }
  return (
    <Container >
      <section className="profile">
        <aside className="profile__information">
          <div>
            <Avatar
              sx={{ cursor: 'pointer', width: '150px', height: '150px' }}
              alt="Remy Sharp"
              src={user.photoURL}
            />
            <span className="profile__information__name">{user.name}</span>
          </div>
          <GreenButton
            onClick={handleEditProfile}
            sx={{ height: 'fit-content' }}>
            Editar Información
          </GreenButton>
        </aside>
        <aside className="profile__products">
          <div className="profile__products__head">
            <h3>Mis Productos</h3>
            <GreenButton onClick={handleAddProduct} >Agregar Producto</GreenButton>
          </div>
          <div className="profile__products__body">
            <Products />
          </div>
        </aside>
        <ModalEditProfile open={openEditProfile} setOpen={setOpenEditProfile} />
        <ModalAddProduct open={openAddProduct} setOpen={setOpenAddProduct} />
      </section>
    </Container>
  )
};

export default Profile;
