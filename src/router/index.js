import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import MovieDetail from "@/components/MovieDetail";
const routes = [{
        path: "/",
        component: Home,
    },
    {
        path: "/movie/:id",
        component: MovieDetail,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;