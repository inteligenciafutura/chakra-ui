import React from "react";
import { Box, Flex, Link, Icon } from "@chakra-ui/react";

export default function NavbarPrincipal() {
  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center">
        <Link href="/">
          <Icon name="home" />
          Home
        </Link>
        <Link href="about.html">
          <Icon name="info" />
          About
        </Link>
        <Link href="progress.html">
          <Icon name="mail" />
          Progress
        </Link>
        <Link href="spiner.html">
          <Icon name="mail" />
          Spiner
        </Link>
        <Link href="/toast">
          <Icon name="mail" />
          Toast
        </Link>
        <Link href="/alert">
          <Icon name="mail" />
          Alert
        </Link>
        <Link href="/drawer">
          <Icon name="mail" />
          Drawer
        </Link>
        <Link href="/modal">
          <Icon name="mail" />
          Modal
        </Link>
        <Link href="/avatar">
          <Icon name="mail" />
          Avatar
        </Link>
        <Link href="/images">
          <Icon name="mail" />
          Imagenes
        </Link>
        <Link href="/badges">
          <Icon name="mail" />
          Badges
        </Link>
        <Link href="/card">
          <Icon name="mail" />
          Cards
        </Link>
        <Link href="/stepper">
          <Icon name="mail" />
          Stepper
        </Link>
        <Link href="/button">
          <Icon name="mail" />
          Button
        </Link>
        <Link href="/grid">
          <Icon name="mail" />
          Grid
        </Link>
      </Flex>
    </Box>
  );
}