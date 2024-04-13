import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal";


export default function Root() {
    return (
        <>
            <Modal />
            <Header />
            
            <Outlet />

        </>
    )
}