import gulp from "gulp";
import browserSync from "browser-sync";
import del from "del";
import path from "./config/path.js";
import app from "./config/app.js";

// задачи
import htmlTreatment from "./task/html.js";
import cssTreatment from "./task/css.js";
// import scssTreatment from "./task/scss.js";
import jsTreatment from "./task/js.js";
import imgTreatment from "./task/img.js";
import fontTreatment from "./task/font.js";
// удаление папки
const clear = () => {
	return del(path.root);
};
// Сервер
const server = () => {
	browserSync.init({
		server: {
			baseDir: path.root,
		},
	});
};

// Наблюдение
const watcher = () => {
	gulp.watch(path.html.watch, htmlTreatment).on("all", browserSync.reload);
	gulp.watch(path.css.watch, cssTreatment).on("all", browserSync.reload);
	// gulp.watch(path.scss.watch, scssTreatment).on("all", browserSync.reload);
	gulp.watch(path.js.watch, jsTreatment).on("all", browserSync.reload);
	gulp.watch(path.img.watch, imgTreatment).on("all", browserSync.reload);
	gulp.watch(path.font.watch, fontTreatment).on("all", browserSync.reload);
};

// режим сборки(production)
const build = gulp.series(
	clear,
	// scssTreatment
	gulp.parallel(
		htmlTreatment,
		cssTreatment,
		jsTreatment,
		imgTreatment,
		fontTreatment
	)
);
// режим разработки(development)
const dev = gulp.series(build, gulp.parallel(watcher, server));

export { htmlTreatment };
export { watcher };
export {cssTreatment};
// export { scssTreatment };
export { jsTreatment };
export { imgTreatment };
export { fontTreatment };

// Сборка разработка
export default app.isProd ? build : dev;
