import { useQuery } from "@tanstack/react-query";
import { notification } from "antd"; // Import notification instead of message
import { getAllEventsAPI } from "../../api/event/events_api";

export const useGetAllEvents = () => {
  return useQuery({
    queryKey: ["getAllEventsKey"],
    queryFn: getAllEventsAPI,
    onSuccess: ({ data }) => {
      console.log(data);
    },
    onError: (error) => {
      notification.warning({
        // Use notification instead of message
        message:
          error?.response?.data?.message ||
          "Login failed. Please check your connection or contact support.",
      });
    },
  });
};
