import React from "react";
import { withRouter } from "react-router-dom";
import { matchPath } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import { InfoContainer, PostsSection } from "./ProfilePage.styles";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import CreatePost from "../../components/Post/CreatePost";
import PostList from "../../components/Post/PostList";
import AboutNew from "../../components/AboutForm/AboutNew";
import LastPhotos from "../../components/LastPhotos/LastPhotos";

const ProfilePage = history => {
  const match = matchPath(history.location.pathname, {
    path: "/profile/:username"
  });

  return (
    <div>
      {/* TODO: Connect ProfileHeader to user */}
      <Navbar displayName="Static username" />
      <ProfileHeader
        coverImage="https://www.w3schools.com/w3images/avatar2.png"
        profileImage="https://www.w3schools.com/w3images/avatar2.png"
        displayName="Static username"
      />
      <InfoContainer>
        <AboutNew />
        <PostsSection>
          <CreatePost
            name="Static username"
            profileImage="https://www.w3schools.com/w3images/avatar2.png"
          />
          <PostList username={match.params.username} />
        </PostsSection>
        <LastPhotos />
      </InfoContainer>
    </div>
  );
};

export default withRouter(ProfilePage);
