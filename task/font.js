import gulp from "gulp";
import path from "../config/path.js";
import app from "../config/app.js";


// Плагины
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import newer from "gulp-newer";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";


// обработка font
const fontTreatment = () => {
	return gulp.src(path.font.src)
		.pipe(
			plumber({
				errorHandler: notify.onError(),
			})
		)
		.pipe(newer(path.font.dest))
		.pipe(fonter(app.fonter))
		.pipe(gulp.dest(path.font.dest))
		.pipe(ttf2woff2())
		.pipe(gulp.dest(path.font.dest));
};

export default fontTreatment;
