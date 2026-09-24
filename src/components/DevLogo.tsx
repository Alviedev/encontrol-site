import { useState } from "react";
import type { Developer } from "../data/common";

// Developer logo. If it's missing or fails to load, shows the name's initial
// instead (or nothing, with initial={false}).
function DevLogo({
  dev,
  className,
  initial = true,
}: {
  dev: Developer;
  className?: string;
  initial?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (dev.logoUrl && !failed) {
    return (
      <img
        src={dev.logoUrl}
        alt=""
        className={className}
        // some hosts (YouTube, Naver) refuse images requested from other sites
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
      />
    );
  }
  return initial ? <div className={className}>{dev.name[0]}</div> : null;
}

export default DevLogo;
