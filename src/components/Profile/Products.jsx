import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import React from "react";
import { DeleteChip, EditChip } from "../MaterialComponents/ChipsStyled";
import './Products.scss'
const Products = () => {
  return (
    <>
      <Card sx={{ width: 250 }}>
        {/* <CardActionArea> */}
        <CardMedia
          component="img"
          height="140"
          image="https://res.cloudinary.com/dndzwn8jk/image/upload/v1668614600/Horiatiki-Salad_sikuog.webp"
          alt="green iguana"
        />
        <CardContent>
          <div className="card__info">
            <span>Nombre producto</span>
            <span>Tipo producto</span>
            <span>Peso/cantidad</span>
            <span>Region</span>
            <span>Precio</span>
            <div className="card__buttons">
              <EditChip label="Editar" />
              <DeleteChip label="Eliminar" />
            </div>
          </div>
        </CardContent>
        {/* </CardActionArea> */}
      </Card>
      <Card sx={{ width: 250 }}>
        {/* <CardActionArea> */}
        <CardMedia
          component="img"
          height="140"
          image="https://res.cloudinary.com/dndzwn8jk/image/upload/v1668614600/Horiatiki-Salad_sikuog.webp"
          alt="green iguana"
        />
        <CardContent>
          <div className="card__info">
            <span>Nombre producto</span>
            <span>Tipo producto</span>
            <span>Peso/cantidad</span>
            <span>Region</span>
            <span>Precio</span>
            <div className="card__buttons">
              <EditChip label="Editar" />
              <DeleteChip label="Eliminar" />
            </div>
          </div>
        </CardContent>
        {/* </CardActionArea> */}
      </Card>
      <Card sx={{ width: 250 }}>
        {/* <CardActionArea> */}
        <CardMedia
          component="img"
          height="140"
          image="https://res.cloudinary.com/dndzwn8jk/image/upload/v1668614600/Horiatiki-Salad_sikuog.webp"
          alt="green iguana"
        />
        <CardContent>
          <div className="card__info">
            <span>Nombre producto</span>
            <span>Tipo producto</span>
            <span>Peso/cantidad</span>
            <span>Region</span>
            <span>Precio</span>
            <div className="card__buttons">
              <EditChip label="Editar" />
              <DeleteChip label="Eliminar" />
            </div>
          </div>
        </CardContent>
        {/* </CardActionArea> */}
      </Card>
      <Card sx={{ width: 250 }}>
        {/* <CardActionArea> */}
        <CardMedia
          component="img"
          height="140"
          image="https://res.cloudinary.com/dndzwn8jk/image/upload/v1668614600/Horiatiki-Salad_sikuog.webp"
          alt="green iguana"
        />
        <CardContent>
          <div className="card__info">
            <span>Nombre producto</span>
            <span>Tipo producto</span>
            <span>Peso/cantidad</span>
            <span>Region</span>
            <span>Precio</span>
            <div className="card__buttons">
              <EditChip label="Editar" />
              <DeleteChip label="Eliminar" />
            </div>
          </div>
        </CardContent>
        {/* </CardActionArea> */}
      </Card>

    </>
  )
};

export default Products;
