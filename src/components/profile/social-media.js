import React from "react";
import { Box, useColorMode, Icon } from "@chakra-ui/core";
import { NavLink } from "react-router-dom";
import { MdLanguage } from "react-icons/md";
import {
  FiTwitter,
  FiFacebook,
  FiLinkedin,
  FiYoutube,
  FiInstagram,
} from "react-icons/fi";

import { color } from "../../utils/useTheme";

const SocialMedia = ({ website, socialmedia }) => {
  const { colorMode } = useColorMode();
  return (
    <Box mx="auto" mt="2rem">
      {website && (
        <NavLink to={{ pathname: website }} target="_blank">
          <Icon
            mx="0.3rem"
            as={MdLanguage}
            color={color[colorMode]}
            size={["20px", "24px"]}
          />
        </NavLink>
      )}
      {socialmedia && socialmedia.twitter && (
        <NavLink to={{ pathname: socialmedia.twitter }} target="_blank">
          <Icon
            mx="0.3rem"
            as={FiTwitter}
            color={color[colorMode]}
            size={["20px", "24px"]}
          />
        </NavLink>
      )}
      {socialmedia && socialmedia.facebook && (
        <NavLink to={{ pathname: socialmedia.facebook }} target="_blank">
          <Icon
            mx="0.3rem"
            as={FiFacebook}
            color={color[colorMode]}
            size={["20px", "24px"]}
          />
        </NavLink>
      )}
      {socialmedia && socialmedia.linkedin && (
        <NavLink to={{ pathname: socialmedia.linkedin }} target="_blank">
          <Icon
            mx="0.3rem"
            as={FiLinkedin}
            color={color[colorMode]}
            size={["20px", "24px"]}
          />
        </NavLink>
      )}
      {socialmedia && socialmedia.youtube && (
        <NavLink to={{ pathname: socialmedia.youtube }} target="_blank">
          <Icon
            mx="0.3rem"
            as={FiYoutube}
            color={color[colorMode]}
            size={["20px", "24px"]}
          />
        </NavLink>
      )}
      {socialmedia && socialmedia.instagram && (
        <NavLink to={{ pathname: socialmedia.instagram }} target="_blank">
          <Icon
            mx="0.3rem"
            as={FiInstagram}
            color={color[colorMode]}
            size={["20px", "24px"]}
          />
        </NavLink>
      )}
    </Box>
  );
};

export default SocialMedia;
