import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Header.module.scss";
import { logout, selectIsAuth } from "../../redux/slices/auth";
import Background from "../../images/bitcoin.jpg";

const sectionBackgroundStyle = {
  width: "100%",
  height: "95vh",
  borderRadius: "20px",
};

const backgroundStyle = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "100% 95vh",
  borderRadius: "10px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.35)",
  marginBottom: "40px",
  border: "1px solid #fff",
};

export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onClickLogout = () => {
    if (window.confirm("Do you really want to log out?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };

  return (
    <>
      <section style={backgroundStyle}>
        <div style={sectionBackgroundStyle}>
          <div className={styles.wrapper}>
            <div className="animate__animated animate__fadeInLeft animate__slow	2s">
              <Link className={styles.logo} to="/">
                Blog
              </Link>
            </div>
            <br />
            <div className={styles.links}>
              {isAuth ? (
                <>
                  <div className="animate__animated animate__fadeInLeft animate__slow	2s">
                    <Link className={styles.logo} to="/add-post">
                      <span variant="contained">Write an article</span>
                    </Link>
                  </div>
                  <br />
                  <div className="animate__animated animate__fadeInLeft animate__slow	2s">
                    <span
                      className={styles.logout}
                      onClick={onClickLogout}
                      variant="contained"
                      color="error"
                    >
                      Logout
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="animate__animated animate__fadeInLeft animate__slow	2s">
                    <Link className={styles.logo} to="/login">
                      <span variant="outlined">Login</span>
                    </Link>
                  </div>
                  <br />
                  <div className="animate__animated animate__fadeInLeft animate__slow	2s">
                    <Link className={styles.logo} to="/register">
                      <span variant="contained">Register</span>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
