import MoviesPage from "../pages/MoviesPage";
import MovieDetailPage from "../pages/MovieDetailPage";

// pendaftaran router yang dikirim ke app.js
const routes = [
  {
    path: "/",
    component: MoviesPage,
  },
  {
    path: "/:id",
    component: MovieDetailPage,
  },
];

export default routes;
