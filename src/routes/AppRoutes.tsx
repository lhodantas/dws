import { Suspense } from "react";
import { Navigate, Route, Routes, useSearchParams } from "react-router-dom";

import { Loading } from "components/Loading";

import { blogRoutes } from "./blogRoutes";

const AppRoutes = () => {
  const [URLSearchParams] = useSearchParams();

  const search = URLSearchParams.toString();

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {blogRoutes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
