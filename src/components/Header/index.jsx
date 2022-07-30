import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import styles from "./Header.module.scss";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuth } from "../../redux/slices/auth";
import Background from "../../images/blog3.jpg";

const sectionStyle = {
  width: "200px",
  height: "55px",
  borderRadius: "10px",
};

const imageStyle = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "200px 55px",
  borderRadius: "10px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.35)",
};

export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onClickLogout = () => {
    if (window.confirm("Ви дійсно хочете вийти?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };

  return (
    <>
      <div className={styles.root}>
        <Container maxWidth="lg">
          <div className={styles.inner}>
            <Link /* className={styles.logo} */ to="/">
              <section style={imageStyle}>
                <div style={sectionStyle}></div>
              </section>
            </Link>
            <div className={styles.buttons}>
              {isAuth ? (
                <>
                  <Link to="/add-post">
                    <Button variant="contained">Написати статтю</Button>
                  </Link>
                  <Button
                    onClick={onClickLogout}
                    variant="contained"
                    color="error"
                  >
                    Вийти
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="outlined">Увійти</Button>
                  </Link>
                  <Link to="/register">
                    <Button variant="contained">Створити аккаунт</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
