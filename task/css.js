import gulp from "gulp";
import path from "../config/path.js";

// Плагины
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import concatCss from "gulp-concat";
import cssImport from "gulp-cssimport";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import rename from "gulp-rename";
import size from "gulp-size";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import webpCss from "gulp-webp-css";

// обработка css
const cssTreatment = () => {
	return gulp.src(path.css.src)
		.pipe(
			plumber({
				errorHandler: notify.onError(),
			})
		)
		.pipe(concatCss("main.css"))
		.pipe(cssImport())
		.pipe(webpCss())
		.pipe(autoprefixer())
		.pipe(groupCssMediaQueries())
		.pipe(size({ title: "main.css" }))
		.pipe(gulp.dest(path.css.dest))
		.pipe(rename({ suffix: ".min" }))
		.pipe(csso())
		.pipe(size({ title: "main.min.css" }))
		.pipe(gulp.dest(path.css.dest));
};

export default cssTreatment;
