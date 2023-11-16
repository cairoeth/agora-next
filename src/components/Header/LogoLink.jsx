import Link from "next/link";
import logo from "@/assets/logo.svg";
import { HStack } from "../Layout/Stack";
import Image from "next/image";
import styles from "./header.module.scss";

export default function LogoLink({ instance_name }) {
  return (
    <HStack justifyContent="justify-between" className={styles.logo_link}>
      <Link href="/">
        <HStack className="gap-2" alignItems="items-center">
          <Image src={logo} alt="logo" width="16" height="16" />
          <span className="block">{`${instance_name} Agora`}</span>
        </HStack>
      </Link>
    </HStack>
  );
}