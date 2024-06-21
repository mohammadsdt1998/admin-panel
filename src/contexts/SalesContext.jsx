import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:8000";

const SalesContext = createContext();

function SalesProvider({ children }) {
  const [clientsData, setClientsData] = useState([]);
  const [viewsData, setViewsData] = useState([]);
  const [organicData, setOrganicData] = useState([]);
  const [usersData, setUsersData] = useState([]);

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

  return (
    <SalesContext.Provider
      value={{ clientsData, viewsData, organicData, usersData }}
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
