import React, { ReactElement, useEffect, useState } from "react";
import axios from "axios";
import ip from "../../config/ip";

interface Props {}
function APItest({}: Props): ReactElement {
  const [state, setState] = useState<any>();
  useEffect(() => {
    axios.get(`${ip}/user/login`).then((res) => {
      console.log(res);
      setState(res.data.data);
    });
  });

  return <div>{state}</div>;
}

export default APItest;
