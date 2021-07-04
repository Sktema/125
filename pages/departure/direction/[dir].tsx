import * as React from "react";

import { useRouter } from "next/router";
import { Layout } from "app/components/Layout";
import { Fire } from "app/pages/Departure/Directions/Fire";

const DirItem: React.FC = () => {
  const router = useRouter();
  const {
    query: { dir },
  } = router;

  switch (dir) {
    case "fire":
      return (
        <Layout>
          <Fire />
        </Layout>
      );
    default:
      return <></>;
  }
};

export default DirItem;
