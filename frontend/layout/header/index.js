import React, {useState} from "react";
import Link from 'next/link'
import {HeaderBody, InnerHeader, Nav, AuthButtons, HeaderWrapper, SidebarContainer, BodyDarker} from "./style";
import {Container, Flex} from "../../shared/layer/style";
import {AlignJustify, X} from "react-feather";
import {routes} from "./model.route";

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const sidebarToggleHandler = () => setSidebarOpen(!sidebarOpen)
    const closeSidebarHandler = () => setSidebarOpen(false)


    return (
        <>
            <HeaderBody>
                <Container>
                    <InnerHeader>
                        <Flex justify="space-between" align="center">
                            <div>
                                <Flex align="center">
                                    <h1>
                                        <Link href={"/"}>
                                            <a className="logo_h1">
                                                Mahdi Alipour
                                            </a>
                                        </Link>
                                    </h1>
                                </Flex>
                            </div>
                            <SidebarContainer>
                            <span onClick={sidebarToggleHandler}>
                                <AlignJustify size={24}/>
                            </span>
                            </SidebarContainer>
                            <HeaderWrapper open={sidebarOpen}>
                                <Flex align="center">
                                    <div className="sidebar-close-btn mt-30">
                                        <X size={30} color={'red'} onClick={closeSidebarHandler}/>
                                    </div>
                                    <Nav>
                                        <Flex>
                                            {
                                                routes.map(route => (
                                                    <li key={route.id}>
                                                        <Link href={route.path}>
                                                            <a>{route.title}</a>
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </Flex>
                                    </Nav>
                                    <AuthButtons>
                                        <Flex align={"center"}>
                                            <Link href={"/auth/login"}>
                                                <a className="login-btn"> ورود</a>
                                            </Link>
                                            <Link href={"/auth/register"}>
                                                <a className="register-btn">ثبت نام</a>
                                            </Link>
                                        </Flex>
                                    </AuthButtons>
                                </Flex>
                            </HeaderWrapper>
                        </Flex>
                    </InnerHeader>
                </Container>
            </HeaderBody>
            <BodyDarker sidebarOpen={sidebarOpen} onClick={closeSidebarHandler}/>
        </>
    );

};

export default Header;
