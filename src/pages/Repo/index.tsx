import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  BreadCrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from "./styles";

const Repo: React.FC = () => {
  return (
    <Container>
      <BreadCrumb>
        <RepoIcon />
        <Link className={"username"} to={"/aguiarrdev"}>
          aguiarrdev
        </Link>
        <span>/</span>
        <Link className={"reponame"} to={"/aguiarrdev/github-clone"}>
          github-clone
        </Link>
      </BreadCrumb>

      <p>This is a Github clone made with ReactJS</p>

      <Stats>
        <li>
          <StarIcon />
          <b>5</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>1</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={"https://github.com/aguiarrdev/github-clone"}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
