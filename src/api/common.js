import axios from "axios";
import { getApiUrl } from "./utils";

async function makePostRequest(url, headers, payload) {
  try {
    const res = await axios.post(url, payload, { headers });
    return res;
  } catch (error) {
    const { status, statusText } = error.response;
    return {
      statusCode: status,
      message: statusText,
    };
  }
}

async function makeGetRequest(url, headers) {
  try {
    const res = await axios.get(url, { headers });
    return res;
  } catch (error) {
    const { status, statusText } = error.response;
    return {
      statusCode: status,
      message: statusText,
    };
  }
}

async function makePutRequest(url, headers, payload) {
  try {
    const res = await axios.put(url, payload, { headers });
    return res;
  } catch (error) {
    const { status, statusText } = error.response;
    return {
      statusCode: status,
      message: statusText,
    };
  }
}

async function makeDeleteRequest(url, headers) {
  try {
    const res = await axios.delete(url, { headers });
    return res;
  } catch (error) {
    const { status, statusText } = error.response;
    return {
      statusCode: status,
      message: statusText,
    };
  }
}

export function getHeaders(auth) {
  let headers = {
    "Content-type": "application/json",
  };
  if (auth) {
    headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
  }
  return headers;
}

export function getPerfectUrl(endpoint) {
  return `${getApiUrl()}${endpoint}`;
}

export function makeApiRequest(emdpoint, requestType, auth, payload) {
  const URL = getPerfectUrl(emdpoint);
  const header = getHeaders(auth);
  switch (requestType) {
    case "post":
      return makePostRequest(URL, header, payload);
    case "delete":
      return makeDeleteRequest(URL, header);
    case "put":
      return makePutRequest(URL, header, payload);
    case "get":
      return makeGetRequest(URL, header);
    default:
      break;
  }
}
