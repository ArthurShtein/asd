import React, { useEffect, useState } from "react";
import UserList from "components/UserList";
import Text from "components/Text";
import * as S from "./style";

const Favorites = () => {
  const favsFromLocal = JSON.parse(localStorage.getItem("favorites"));
  const [favorites, setFavorites] = useState(favsFromLocal ? favsFromLocal : []);

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Favorites
          </Text>
        </S.Header>
        <UserList users={favorites} />
      </S.Content>
    </S.Home>
  );
};

export default Favorites;
