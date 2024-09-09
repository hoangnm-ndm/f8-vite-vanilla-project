import Navigo from "navigo";
import AboutPage from "./src/pages/AboutPage";
import CategoryPage from "./src/pages/CategoryPage";
import HomePage from "./src/pages/HomePage";
import { NotFoundPage } from "./src/pages/NotFoundPage";
import "./style.css";
import DetailPage from "./src/pages/DetailPage";
import AdminPage from "./src/pages/AdminPage";
import ProductForm from "./src/pages/ProductEdit";

const router = new Navigo("/", { linksSelector: "a" });
const app = document.getElementById("app");

const render = async (target, content) => {
	// Đặt await trước các promise
	target.innerHTML = await content();
};

router.on("/home", () => render(app, HomePage));
router.on("/", () => router.navigate("/home"));
router.on("/category", () => render(app, CategoryPage));
router.on("/products/:id", (data) => render(app, () => DetailPage(data)));
router.on("/product-edit/:id", () => render(app, ProductForm));
router.on("/product-add", () => render(app, ProductForm));
router.on("/about", () => render(app, AboutPage));

router.on("/admin", () => render(app, AdminPage));
router.notFound(() => render(app, NotFoundPage));
router.resolve();
