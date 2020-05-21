import { useEffect } from "react";
import { useDispatch } from "react-redux";
//Get data from api send to store
export function GetAPI() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      try {
        const requestUrl = "/api.json";
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();

        const { data } = responseJSON;

        dispatch({
          type: "ADD_DATA_API",
          data: data,
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  });
}
