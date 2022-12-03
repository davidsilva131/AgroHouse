import { Avatar, Container } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { GreenButton } from "../MaterialComponents/ButtonStyled";
import ModalEditProfile from "../Profile/ModalEditProfile";
import './Profile.scss'

const Profile = () => {
  const user = useSelector(store => store.user)
  const [openEditProfile, setOpenEditProfile] = useState(false)

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
        <ModalEditProfile open={openEditProfile} setOpen={setOpenEditProfile} />
      </section>
    </Container>
  )
};

export default Profile;
