import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SliceFunctions } from "../store/slices";
import { fetchStatusActions } from "../store/fetchStatus";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(SliceFunctions.addItems(items));
      });
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;
