import { Button } from "@/components/ui/button";
import React from "react";

function HeaderLogin() {
  return (
    <Button variant="outline" asChild>
      <button
        onClick={() => {
          document.getElementById("features")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        type="button"
        className="dark:bg-white dark:text-black"
      >
        Iniciar Sesión
      </button>
    </Button>
  );
}

export default HeaderLogin;
