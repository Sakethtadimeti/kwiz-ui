import React from "react";

import DynamicImport from "../common/dynamic-import";
const DynamicPage = (props) => (
  <DynamicImport
    load={() =>
      import(`../${props.filePath}`).catch((e) => {
        // window.location.reload(true);
        console.log(e);
      })
    }
  >
    {(Component) =>
      Component === null ? (
        <div className="page-loader" />
      ) : (
        <Component {...props} />
      )
    }
  </DynamicImport>
);

export default DynamicPage;
