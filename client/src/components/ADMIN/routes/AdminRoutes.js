import eventRoutes from "../Events/eventRoutes";
import blogRoutes from "../Blogs/blogRoutes";
import projectRoutes from "../Projects/projectRoutes";
import homeRoutes from "../Home/homeRoutes";
import careerRoutes from "../Career/careerRoutes";
const routes = [...eventRoutes, ...blogRoutes, ...projectRoutes, ...homeRoutes,...careerRoutes];
export default routes;
