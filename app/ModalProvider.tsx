"use client"

import { modalState } from "../atom/modalAtom";
import { useRecoilState } from "recoil"

interface Props {
  children: React.ReactNode;  
}

function ModalProvider({ children }: Props) {
  const [showModal, setShowModal] = useRecoilState(modalState)  

  return (
    <>
      {showModal && children}  
    </>
  )
}

export default ModalProvider