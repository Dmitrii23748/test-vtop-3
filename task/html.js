import gulp from 'gulp';
import path from "../config/path.js";
import app from "../config/app.js";

// Плагины
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import fileInclude from "gulp-file-include";
import htmlMin from "gulp-htmlmin";
import size from "gulp-size";
import webpHtml from "gulp-webp-html";

// обработка HTML
const htmlTreatment = () => {
	return gulp.src(path.html.src)
		.pipe(
			plumber({
				errorHandler: notify.onError(),
			})
		)
		.pipe(fileInclude())
		.pipe(webpHtml())
		.pipe(size({ title: "index.html" }))
		.pipe(htmlMin(app.htmlMin))
		.pipe(size({ title: "index.html" }))
		.pipe(gulp.dest(path.html.dest));
};

export default htmlTreatment;
