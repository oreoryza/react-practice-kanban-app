import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = `http://localhost:3000`;

const useDb = ({ column }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/${column}`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  const postData = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/${column}`, data);
      console.log("Data success submitted:", response.data);
      await fetchData();
    } catch (error) {
      console.error("Error posting task:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteData = async (id) => {
    setLoading(true);
    try {
      const response = await axios.delete(`${API_URL}/${column}/${id}`);
      console.log("Data deleted:", response.data);
      await fetchData();
    } catch (error) {
      console.error("Error delete task:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, fetchData, postData, deleteData };
};

export default useDb;
