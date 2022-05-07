import React, { Fragment, useState } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import LayoutTwo from "../layouts/LayoutTwo";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import Modal from "../components/window-modal/modal";
import styled from "styled-components";

const LoginRegister = () => {
  const [estadoModal, cambiarEstadoModal] = useState(false);

  return (
    <Fragment>
      <MetaTags>
        <title>Howard | Login</title>
        <meta
          name="description"
          content="Login page of React JS Crypto Currency Template."
        />
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="LOGIN - REGISTER" />
        {/* login register content */}
        <div className="dg__account section-padding--xl">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tab.Container defaultActiveKey="login">
                  <Nav
                    variant="pills"
                    className="acount__nav justify-content-center"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="login">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="register">Register</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="login">
                      <div className="single__account">
                        <div className="input__box">
                          <span>Email Address</span>
                          <input type="text" />
                        </div>
                        <div className="input__box">
                          <span>Password</span>
                          <input type="password" />
                        </div>
                        <Link
                          className="forget__pass"
                          href={process.env.PUBLIC_URL + "/"}
                        >
                          Lost your password?
                        </Link>
                        <button className="account__btn">Login</button>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="register">
                      <div className="single__account">
                        <div className="input__box">
                          <span>First Name</span>
                          <input type="text" />
                        </div>
                        <div className="input__box">
                          <span>Last Name</span>
                          <input type="text" />
                        </div>
                        <div className="input__box">
                          <span>Email address</span>
                          <input type="email" />
                        </div>
                        <div className="input__box">
                          <span>Password</span>
                          <input type="password" />
                        </div>
                        <button className="account__btn">Register</button>
                        <div className="conectar">
                          <button
                            onClick={() => cambiarEstadoModal(!estadoModal)}
                            className="account__btn emerg__wnds"
                          >
                            Conectar
                          </button>
                          <Modal
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}>
        
                            <Contenido>
                              <button id="connect">
                                <div className="lg__-meta">
                                  <img
                                    src={
                                      process.env.PUBLIC_URL +
                                      "/images/brand/metamask-fox.svg"
                                    }
                                    alt="Logo Metamask"
                                  />
                                </div>
                                <div className="txt__lg_meta">
                                  <h1>Metamask</h1>
                                </div>
                              </button>
                            </Contenido>
                          </Modal>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </LayoutTwo>
    </Fragment>
  );
};

export default LoginRegister;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    display: inline-block;
    justify-content: space-between;

    background-color: #74b9ff;
    border: none;
    outline: none;
    text-transform: uppercase;
    color: #fff;
    width: 60%;
    height: 50%;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 2px;
    border-radius: 1rem;
    cursor: pointer;
    -moz-box-shadow: 0 0px 20px rgb(255, 230, 0, 0.3);
    -webkit-box-shadow: 0 15px 20px rgba(178, 190, 195, 0.5);

    &:hover {
      transition: 1s;
      box-shadow: 0 0 30px rgba(9, 132, 227, 1);
      background-color: #0984e3;
    }
    &:active {
      transform: rotateX(20deg) scale(0.9);
    }
  }

  .txt__lg_meta h1 {
    color: #fff;
    font-size: 100%;
    font-weight: 700;
    margin: 5px 0 5px 0;
  }

  .lg__-meta img {
    margin-top: 10px;
    height: 100%;
  }
`;
