import { useEffect } from "react";

function RedirectToConf() {
  useEffect(() => {
    window.location.href = "http://conference.fosscu.org/";
  }, []);
  return null;
}

export default RedirectToConf;
