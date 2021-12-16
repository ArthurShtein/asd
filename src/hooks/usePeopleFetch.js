import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers(countrys) {
    let strCountrys = "";
    if (countrys) {
      strCountrys = countrys.join();
    }
    setIsLoading(true);
    const response = await axios.get(
      `https://randomuser.me/api/?nat=${strCountrys}&results=25&page=1`
    );

    setIsLoading(false);
    setUsers(response.data.results);
  }

  return { users, isLoading, fetchUsers };
};
