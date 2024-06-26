import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:8000";

const SalesContext = createContext();

function SalesProvider({ children }) {
  const [clientsData, setClientsData] = useState([]);
  const [viewsData, setViewsData] = useState([]);
  const [organicData, setOrganicData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchClientsData() {
      const res = await fetch(`${BASE_URL}/clients`);
      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }
      const data = await res.json();
      setClientsData(data);
    }

    fetchClientsData();
  }, []);

  useEffect(function () {
    async function fetchViewsData() {
      const res = await fetch(`${BASE_URL}/pageviews`);
      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }
      const data = await res.json();
      setViewsData(data);
    }

    fetchViewsData();
  }, []);

  useEffect(function () {
    async function fetchOrganicData() {
      const res = await fetch(`${BASE_URL}/organic`);
      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }
      const data = await res.json();
      setOrganicData(data);
    }

    fetchOrganicData();
  }, []);

  useEffect(function () {
    async function fetchUsersData() {
      const res = await fetch(`${BASE_URL}/users`);
      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }

      const data = await res.json();
      setUsersData(data);
    }

    fetchUsersData();
  }, []);

  async function addUser(newUser) {
    setIsLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        throw new Error(`HTTP error : ${res.status}`);
      }
      const data = await res.json();
      setUsersData((prevData) => [...prevData, data]);
    } catch (err) {
      setError("There was an error creating the user...");
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteUser(id) {
    setIsLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/users/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        throw new Error(`HTTP error : ${res.status}`);
      }
      setUsersData((prevData) => prevData.filter((user) => user.id !== id));
    } catch (err) {
      setError("There was an error deleting the user...");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <SalesContext.Provider
      value={{
        clientsData,
        viewsData,
        organicData,
        usersData,
        addUser,
        deleteUser,
      }}
    >
      {children}
    </SalesContext.Provider>
  );
}

function useSales() {
  const context = useContext(SalesContext);
  if (context === undefined) {
    throw new Error("SalesContext was used outside of SalesProvider");
  }
  return context;
}

export { useSales, SalesProvider };
