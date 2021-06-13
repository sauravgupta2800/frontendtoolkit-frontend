import { useEffect, useState } from "react";
import { Input } from "antd";
import Icon from "../Common/Icon/Icon";
import axios from "axios";
import { ICONS } from "../../../shared/endpoints";
import { Spin } from "antd";
import EmptyState from "../Common/EmptyState/EmptyState";
import IconCards from "./IconCards";

const OpenIconsDetails = () => {
  const [state, setState] = useState({
    list: [],
    filteredList: [],
    query: "",
    loading: true,
  });

  useEffect(() => {
    console.log("first call");
    const fetchIcons = async () => {
      setStateWith("loading", true);
      try {
        const { data } = await axios.get(ICONS.ICONS_LIST);
        console.log(data);
        const { data: list } = data;
        setStateWith("list", list);
        setStateWith("filteredList", list);
      } catch {
        //
      } finally {
        setStateWith("loading", false);
      }
    };
    fetchIcons();
  }, []);

  useEffect(() => {
    const query = state.query.trim().toLowerCase();
    const filteredList = state.list.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
    setStateWith("filteredList", filteredList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.query]);

  const setStateWith = (key, value) => {
    setState((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };
  const addOnAfter = () => {
    return (
      <div
        className="d-flex align-items-center justify-content-center px-2 cursor-pointer  rounded-end ft-bg-prime93"
        style={{
          height: "40px",
        }}
        onClick={() => {}}
      >
        <Icon id="search" iconClass="ft-color-dark2" size="sm" />
      </div>
    );
  };
  return (
    <div className="ft-icon-details w-100 h-100">
      <div className="ft-icon-details__header d-flex justify-content-between align-items-center">
        <div className="fs-5 d-flex align-items-center">
          {!state.loading && (
            <>
              <div className="fs-4 d-flex me-3">Showing Results: </div>
              <div className="fs-3 d-flex ft-color-dark2">{`${state.filteredList.length} / ${state.list.length}`}</div>
            </>
          )}
        </div>
        <Input
          placeholder="Search Icons"
          addonAfter={addOnAfter()}
          value={state.query}
          size="large"
          defaultValue="mysite"
          onChange={(event) => setStateWith("query", event.target.value)}
          className="custom-color-input w-40"
        />
      </div>
      <div className="ft-icon-details__details">
        {state.loading ? (
          <div className="w-100 h-100 d-flex align-items-center justify-content-center">
            <Spin size="large" />
          </div>
        ) : !state.filteredList.length ? (
          <div className="w-100 h-100 d-flex align-items-center justify-content-center">
            <EmptyState
              iconId="emoji-expresseionless"
              title="No matching icons available"
            />
          </div>
        ) : (
          <div className="w-100 h-100 overflow-auto">
            <IconCards list={state.filteredList} />
          </div>
        )}
      </div>
    </div>
  );
};

export default OpenIconsDetails;
