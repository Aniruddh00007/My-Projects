import axios from "axios";

const BASE_URL = "http://localhost:8080/api/metrics";

// GET latest metric
export const getLatestMetric = async () => {
  const res = await axios.get(`${BASE_URL}/latest`);
  return res.data;
};

// GET all metrics
export const getAllMetrics = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

// POST collect (manual trigger)
export const collectMetric = async () => {
  const res = await axios.post(`${BASE_URL}/collect`);
  return res.data;
};