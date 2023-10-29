/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useConnect } from "wagmi";
import { InjectedConnector } from "@wagmi/core/connectors";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Container, Nav, Button, Offcanvas } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { menuItems } from "@src/constants/menuItems";
import useMediaQuery from "@src/hooks/useMediaQuery";
import { setUser } from "@slices/authenticationSlice";
import { setModalOpen } from "@slices/gameModalSlice";
import { fetchUserInfo } from "@slices/userSlice";
import { AppDispatch } from "@store/index";
import { MdSettings, MdQueryStats } from "react-icons/md";
import { BsQuestionCircleFill } from "react-icons/bs";
import GameStaticticsModal from "@src/components/games/modals/GameStaticticsModal";
import GameSettingsModal from "@src/components/games/modals/GameSettingsModal";
import GameInformationModal from "@src/components/games/modals/GameInformationModal";
import { useAccount } from "wagmi";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showStatisticsModal, setShowStatisticsModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showInformationModal, setShowInformationModal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const [userAddress, setUserAddress] = useState("");
  const { address, isConnected } = useAccount();

  const handleClose = () => setMenuOpen(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [hideConnectBtn, setHideConnectBtn] = useState(false);
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  useEffect(() => {
    if ((window as any).ethereum && (window as any).ethereum.isMiniPay) {
      setHideConnectBtn(true);
      connect();
    }
  }, []);

  useEffect(() => {
    if (isConnected && address) {
      setUserAddress(address);
    }
  }, [address, isConnected]);

  /*   async function connectUser() {
    if ((window as any).ethereum) {
      await (window as any).ethereum.request({ method: "eth_requestAccounts" });
    } else {
      dispatch(
        setModalOpen([
          "Attention",
          "The request was unsuccessful, is Metamask installed on your browser? If it is, try again. If you think that there is another problem, contact us.",
        ])
      );
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (typeof (window as any).ethereum !== "undefined") {
        if ((window as any).ethereum.selectedAddress !== null) {
          setSelectedAddress((window as any).ethereum.selectedAddress);
          dispatch(setUser((window as any).ethereum.selectedAddress));
          dispatch(fetchUserInfo((window as any).ethereum.selectedAddress));
        } else if ((window as any).ethereum.selectedAddress === null) {
          setSelectedAddress((window as any).ethereum.selectedAddress);
        }
      }
    }
  }, []); */

  /*   //When the connection situation changes, run this
  if (typeof window !== "undefined") {
    if (typeof (window as any).ethereum !== "undefined") {
      (window as any).ethereum.on("accountsChanged", () => {
        setSelectedAddress((window as any).ethereum.selectedAddress);
        if ((window as any).ethereum.selectedAddress !== null) {
          dispatch(setUser((window as any).ethereum.selectedAddress));
          dispatch(fetchUserInfo((window as any).ethereum.selectedAddress));
        }
      });
    }
  } */

  const handleInfoModalOpen = () => {
    setShowInformationModal(true);
  };

  const handleAnalyticsModalOpen = () => {
    setShowStatisticsModal(true);
  };

  const handleSettingsModalOpen = () => {
    setShowSettingsModal(true);
  };

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        expand={false}
        style={{ borderBottom: "1px solid dimgrey" }}
      >
        <Container fluid className="flex">
          <Navbar.Brand href="/">
            <Image
              src="/3j.png"
              width={40}
              height={40}
              alt="logo"
              style={{ backgroundColor: "transparent" }}
            ></Image>
          </Navbar.Brand>
          <div className="flex-1 flex justify-end gap-2 px-2">
            <BsQuestionCircleFill
              className="hover:scale-105 transition-all"
              onClick={handleInfoModalOpen}
              style={{ color: "white", fontSize: "32px", cursor: "pointer" }}
            ></BsQuestionCircleFill>
            <MdQueryStats
              className="hover:scale-105 transition-all"
              onClick={handleAnalyticsModalOpen}
              style={{ color: "white", fontSize: "32px", cursor: "pointer" }}
            ></MdQueryStats>
            <MdSettings
              className="hover:scale-105 transition-all"
              onClick={handleSettingsModalOpen}
              style={{ color: "white", fontSize: "32px", cursor: "pointer" }}
            ></MdSettings>
          </div>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand`}
            onClick={toggleMenu}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="end"
            show={menuOpen}
            onHide={toggleMenu}
          >
            <Offcanvas.Header
              closeButton
              style={{ backgroundColor: "MidnightBlue" }}
            >
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                <Navbar.Brand href="/">
                  <Image
                    src="/3j.png"
                    width={40}
                    height={40}
                    alt="logo"
                  ></Image>
                </Navbar.Brand>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="md:bg-[color:#212529]">
              <Nav className="flex flex-1 justify-end items-center">
                {menuItems.map((item) => {
                  return (
                    <Link
                      className="px-2 mx-1 no-underline hover:text-gray-300 text-[color:black] md:text-[color:white] w-full md:w-auto 
                    border-gray-700  border-b-2 md:border-b-0 text-3xl md:text-lg py-2 md-py-0"
                      key={item.label}
                      href={`${item.link}`}
                      onClick={handleClose}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </Nav>
              <div className="flex flex-col justify-center items-center">
                {isConnected && (
                  <div className="text-center font-size:10px font-weight: bold">
                  
                    Connected Address: {userAddress.substring(0,7).toLowerCase()}...{userAddress.substring(userAddress.length-5,userAddress.length).toLowerCase()}
                  </div>
                )}
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <GameStaticticsModal
        show={showStatisticsModal}
        setShow={setShowStatisticsModal}
      ></GameStaticticsModal>
      <GameSettingsModal
        show={showSettingsModal}
        setShow={setShowSettingsModal}
      ></GameSettingsModal>
      <GameInformationModal
        show={showInformationModal}
        setShow={setShowInformationModal}
      ></GameInformationModal>
    </>
  );
}
