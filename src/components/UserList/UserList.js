import React, { useEffect, useState } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";

const UserList = ({ users, isLoading, fetchUsers }) => {
  const [hoveredUserId, setHoveredUserId] = useState();
  const [favorites, setFavorites] = useState([]);
  const [filter, setFilter] = useState([]);

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  const handleCheckboxClick = (country) => {
    if (!filter.includes(country)) {
      filter.push(country);
      fetchUsers(filter);
    } else {
      const countryIndex = filter.indexOf(country);
      filter.splice(countryIndex, 1);
      fetchUsers(filter);
      return;
    }
  };

  const handleFavorites = (user) => {
    if (favorites.includes(user)) {
      user.isFavorite = false;
      const noDuplicatesUsers = favorites.filter((u) => u.email !== user.email);
      setFavorites(noDuplicatesUsers);
    } else {
      user.isFavorite = true;
      setFavorites([...favorites, user]);
    }
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <S.UserList>
      <S.Filters>
        <CheckBox
          value="BR"
          label="Brazil"
          handleCheckboxClick={() => handleCheckboxClick("BR")}
        />
        <CheckBox
          value="AU"
          label="Australia"
          handleCheckboxClick={() => handleCheckboxClick("AU")}
        />
        <CheckBox
          value="CA"
          label="Canada"
          handleCheckboxClick={() => handleCheckboxClick("CA")}
        />
        <CheckBox
          value="DE"
          label="Germany"
          handleCheckboxClick={() => handleCheckboxClick("DE")}
        />
        <CheckBox
          value="GB"
          label="United Kingdom"
          handleCheckboxClick={() => handleCheckboxClick("GB")}
        />
      </S.Filters>
      <S.List>
        {users.map((user, index) => {
          return (
            <S.User
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <S.UserPicture src={user?.picture.large} alt="" />
              <S.UserInfo>
                <Text size="22px" bold>
                  {user?.name.title} {user?.name.first} {user?.name.last}
                </Text>
                <Text size="14px">{user?.email}</Text>
                <Text size="14px">
                  {user?.location.street.number} {user?.location.street.name}
                </Text>
                <Text size="14px">
                  {user?.location.city} {user?.location.country}
                </Text>
              </S.UserInfo>
              <S.IconButtonWrapper
                onClick={() => handleFavorites(user)}
                isVisible={user.isFavorite || index === hoveredUserId}
              >
                <IconButton>
                  <FavoriteIcon color="error" />
                </IconButton>
              </S.IconButtonWrapper>
            </S.User>
          );
        })}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
