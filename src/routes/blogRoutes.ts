import { lazy, LazyExoticComponent, JSX } from "react";

interface IBlogRoutes {
  path: string;
  component: LazyExoticComponent<() => JSX.Element>;
}

const Dashboard = lazy(() => import("pages/Dashboard"));
const BlogPost = lazy(() => import("pages/BlogPost"));

export const blogRoutes: IBlogRoutes[] = [
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/post/:postId",
    component: BlogPost,
  },
];
