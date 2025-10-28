import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../Store/itemsSlice";
import { fetchStatusActions } from "../Store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  console.log(fetchStatus)

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchFinished());
        dispatch(itemsActions.addInitialItems(items));
      });

    return () => {
      console.log("Cleaning up UseEffect.");
      controller.abort();
    };
  }, [fetchStatus.fetchDone]);

  return (
    <>
    </>
  );
};

export default FetchItems;
