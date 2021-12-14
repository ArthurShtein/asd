import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers(countrys) {
    setIsLoading(true);
    const response = await axios.get(
      `https://randomuser.me/api/?nat=${countrys}&results=25&page=1`
    );
    setIsLoading(false);
    setUsers(response.data.results);
    console.log('users >>> ',users  )
  }

  return { users, isLoading, fetchUsers };
};
