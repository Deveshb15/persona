'use client'

import { useState } from "react";
import { configs, Config } from "@/utils/constants";


export default function Page() {
  const [configSelected, setConfigSelected] = useState<Config>(configs[0]);

  return (
    <div className={"grow flex flex-col"}>
      

    </div>
  );
}
