import styled from "styled-components";
import Image from "next/image";

export const BannerContainer = styled.div`
  width: 1450px;
  height: 450px;
  position: relative;
  margin: 0 auto;
  ${({ theme }) => theme.breakpoints.down("xl")} {
    max-width: 100%;
  }
`;

export const BannerImage = styled(Image)`
  object-fit: cover;
`;
