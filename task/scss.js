import gulp from "gulp";
import path from "../config/path.js";

// Плагины
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import rename from "gulp-rename";
import size from "gulp-size";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import gulpSass from "gulp-sass";
import dartSass from 'sass';
import webpCss from "gulp-webp-css";

const sass = gulpSass(dartSass)

// обработка scss
const scssTreatment = () => {
	return gulp.src(path.scss.src)
		.pipe(
			plumber({
				errorHandler: notify.onError(),
			})
		)
		.pipe(sass())
		.pipe(webpCss())
		.pipe(autoprefixer())
		.pipe(groupCssMediaQueries())
		.pipe(size({ title: "main.css" }))
		.pipe(gulp.dest(path.scss.dest))
		.pipe(rename({ suffix: ".min" }))
		.pipe(csso())
		.pipe(size({ title: "main.min.css" }))
		.pipe(gulp.dest(path.scss.dest));
};

export default scssTreatment;
