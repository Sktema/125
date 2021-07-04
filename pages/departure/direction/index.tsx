import * as React from "react";

import { useRouter } from "next/router";

import { Layout } from "app/components/Layout";
import { Directions } from "app/pages/Departure/Directions";

const Direction: React.FC = () => {
  const router = useRouter();
  const {
    query: { to },
  } = router;

  React.useEffect(() => {
    if (!to || typeof to !== "string") {
      router.push("/departure");
    }
  }, []);

  if (!to || typeof to !== "string") {
    return <></>;
  }

  const getDataByName = (name: string) => {
    return [
      {
        id: 0,
        path: `/departure/direction/${name}`,
        title: `Это моковый эвент для - ${name}`,
      },
    ];
  };

  return (
    <Layout>
      <Directions data={getDataByName(to)} />
    </Layout>
  );
};

export default Direction;
