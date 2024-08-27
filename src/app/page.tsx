import { HiOutlineUser } from "react-icons/hi";
import styles from "./page.module.css";
import { Button, Flex, Text, Image, Spacer, IconButton } from "@chakra-ui/react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { NavBar } from "@/components/navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
    </main>
  );
}
