import styled, { css } from "styled-components";
import { RiBookMarkLine, RiStarLine } from "react-icons/ri";
import { AiOutlineFork } from "react-icons/ai";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  border: solid 1px var(--border);
  border-radius: 6px;
`;

export const TopSide = styled.div`
  > header {
    display: flex;
    align-items: center;

    > a {
      margin-left: 8px;
      font-weight: 600;
      font-size: 14px;
      color: var(--link);
      text-decoration: none;

      &:hover :focus {
        text-decoration: underline;
      }
    }
  }

  > p {
    margin: 8px 0 16px;
    font-size: 12px;
    color: var(--gray);
    letter-spacing: 0.1px;
  }
`;

export const BotSide = styled.div`
  > ul {
    display: flex;
    align-items: center;

    > li {
      display: flex;
      align-items: center;

      margin-right: 16px;

      > span {
        margin-left: 5px;
        font-size: 16px;
        color: var(--gray);
      }
    }
  }

  .language {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    flex-shrink: 0;

    &.other {
      background: var(--other-laguage);
    }

    &.javascript {
      background: var(--javascript);
    }

    &.typescript {
      background: var(--typescript);
    }
  }
`;

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const RepoIcon = styled(RiBookMarkLine)`
  ${iconCSS}
`;

export const StarIcon = styled(RiStarLine)`
  ${iconCSS}
`;

export const ForkIcon = styled(AiOutlineFork)`
  ${iconCSS}
`;
