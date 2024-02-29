import useSWR from "swr";

export const baseUrl = "http://178.154.203.119";

// https://www.smashingmagazine.com/2020/06/introduction-swr-react-hooks-remote-data-fetching/
export const useRequest = (path: string, name?: string) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const url = name ? baseUrl + path + "/" + name : baseUrl + path;
  const data = useSWR(url);

  return data;
};
