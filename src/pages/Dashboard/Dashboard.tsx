import { PageTemplate } from "templates/PageTemplate/PageTemplate";

import { useGetPosts } from "services/dws-api-react-query/useGetPosts";

export const Dashboard = () => {
  const { data } = useGetPosts();
  console.log("data", data);

  return (
    <PageTemplate>
      <h1>Dashboard</h1>
    </PageTemplate>
  );
};
