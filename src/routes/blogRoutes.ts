import { lazy, LazyExoticComponent, JSX } from "react";

interface IBlogRoutes {
  path: string;
  component: LazyExoticComponent<() => JSX.Element>;
}

const Dashboard = lazy(() => import("pages/Dashboard"));

export const blogRoutes: IBlogRoutes[] = [
  {
    path: "/",
    component: Dashboard,
  },
];
