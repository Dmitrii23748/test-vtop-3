import gulp from "gulp";
import path from "../config/path.js";
import app from "../config/app.js";

// Плагины
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import babel from "gulp-babel";
// не нужен, потому что есть webpack
// import uglify from "gulp-uglify";
import webpack from "webpack-stream";

// обработка js
const jsTreatment = () => {
	return (
		gulp.src(path.js.src)
			.pipe(
				plumber({
					errorHandler: notify.onError(),
				})
			)
			.pipe(babel())
			.pipe(webpack(app.webpack))
			// .pipe(uglify())
			.pipe(gulp.dest(path.js.dest))
	);
};

export default jsTreatment;
