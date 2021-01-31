import HYDiscover from "@/pages/discover";
import HYRecommend from "../pages/discover/cpages/recommend";
import HYRanking from "../pages/discover/cpages/ranking";
import HYMine from "@/pages/mine";
import HYFriend from "@/pages/friends";
import { Redirect } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => {
      <Redirect to="/discover"/>
    }
  },
  {
    path: "/discover",
    exact: true,
    component: HYDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend"/>
        )
      },
      {
        path: "/discover/recommend",
        component: HYRecommend
      },
      {
        path: "/discover/ranking",
        component: HYRanking
      },
    ]  
  },
  {
    path: "/mine",
    exact: true,
    component: HYMine
  },
  {
    path: "/friend",
    exact: true,
    component: HYFriend
  },
]

export default routes;