import axios from "axios";

export const getBulkActions = () => {
  return axios.get(`${process.env.API_BASE_URL}/bulk-actions`);
};

export const createBulkAction = (data) => {
  return axios.post(`${process.env.API_BASE_URL}/bulk-actions`, data);
};

export const getBulkActionStatus = (actionId) => {
  return axios.get(`${process.env.API_BASE_URL}/bulk-actions/${actionId}`);
};

export const getBulkActionStats = (actionId) => {
  return axios.get(
    `${process.env.API_BASE_URL}/bulk-actions/${actionId}/stats`
  );
};
