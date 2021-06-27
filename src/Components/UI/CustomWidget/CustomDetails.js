import { useEffect, useState } from "react";
import { Spin } from "antd";

const CustomDetails = ({ url, subTitle }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 700);
  }, []);
  return (
    <div className="w-100 h-100">
      {loading ? (
        <div className="w-100 h-100 border mt-2 rounded-3 ft-style-2-shadow d-flex align-items-center justify-content-center">
          <Spin size="large" />
        </div>
      ) : (
        <iframe
          src={url}
          allow="clipboard-write"
          className="w-100 h-100 border mt-2 rounded-3 ft-style-2-shadow"
          title={subTitle}
        />
      )}
    </div>
  );
};

export default CustomDetails;
