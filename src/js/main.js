import { validateElem, deleteCrash } from "./module/form.js";

const body = document.querySelector("body");
const form = document.querySelector(".form");
const formRegistr = document.querySelector(".form-registr");
const formBtn = document.querySelector(".form-btn");
const shapeImg = document.querySelectorAll(".shape-img");

const firstName = document.getElementById("input-name");
const lastName = document.getElementById("input-lastname");
const nationality = document.getElementById("nationality");
const email = document.getElementById("input-email");

const yearSelect = document.getElementById("year");
const monthSelect = document.getElementById("month");
const daySelect = document.getElementById("day");

const password = document.getElementById("input-pass");
const passwordConf = document.getElementById("input-passwordconf");

const formInputItem = document.querySelectorAll(".form__input-item");
const formInputsRadio = document.querySelector(".form__inputs-radio");
const formInputsDate = document.querySelector(".form__inputs-date");

const state = {
	firstName: "",
	lastName: "",
	nationality: "",
	email: "",
	dayBirth: "",
	mounthBirth: "",
	yearBirth: "",
	gender: "",
	password: "",
	confirmPassword: "",
};



document.addEventListener("DOMContentLoaded", () => {
	formInputItem.forEach((item) => {
		item.classList.add("input-item-show");
	});

	formInputsRadio.classList.add("input-item-show");
	formInputsDate.classList.add("input-item-show");
});


// Реализация выбора даты рождения
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
// Months are always the same
(function populateMonths() {
	for (let i = 0; i < months.length; i++) {
		const option = document.createElement("option");
		option.textContent = months[i];
		monthSelect.appendChild(option);
	}
	monthSelect.value = "January";
})();
let previousDay;
function populateDays(month) {
	//Delete all of the children of the day dropdown
	//if they do exist
	while (daySelect.firstChild) {
		daySelect.removeChild(daySelect.firstChild);
	}
	//Holds the number of days in the month
	let dayNum;
	//Get the current year
	let year = yearSelect.value;
	if (
		month === "January" ||
		month === "March" ||
		month === "May" ||
		month === "July" ||
		month === "August" ||
		month === "October" ||
		month === "December"
	) {
		dayNum = 31;
	} else if (
		month === "April" ||
		month === "June" ||
		month === "September" ||
		month === "November"
	) {
		dayNum = 30;
	} else {
		//Check for a leap year
		if (new Date(year, 1, 29).getMonth() === 1) {
			dayNum = 29;
		} else {
			dayNum = 28;
		}
	}
	//Insert the correct days into the day <select>
	for (let i = 1; i <= dayNum; i++) {
		const option = document.createElement("option");
		option.textContent = i;
		daySelect.appendChild(option);
	}
	if (previousDay) {
		daySelect.value = previousDay;
		if (daySelect.value === "") {
			daySelect.value = previousDay - 1;
		}
		if (daySelect.value === "") {
			daySelect.value = previousDay - 2;
		}
		if (daySelect.value === "") {
			daySelect.value = previousDay - 3;
		}
	}
}
function populateYears() {
	//Get the current year as a number
	let year = new Date().getFullYear();
	//Make the previous 100 years be an option
	for (let i = 0; i < 101; i++) {
		const option = document.createElement("option");
		option.textContent = year - i;
		yearSelect.appendChild(option);
	}
}
populateDays(monthSelect.value);
populateYears();

yearSelect.onchange = function () {
	populateDays(monthSelect.value);
};
monthSelect.onchange = function () {
	populateDays(monthSelect.value);
};
daySelect.onchange = function () {
	previousDay = daySelect.value;
};
// конец реализации даты рождения

formBtn.addEventListener("click", () => {
	setTimeout(() => {
		deleteCrash(formBtn);
	}, 100);
});

for (let elem of form.elements) {
	let dataAtr = elem.dataset.element;
	if (
		!elem.classList.contains("select-item") &&
		!elem.classList.contains("input-radio") &&
		!elem.classList.contains("form-btn")
	) {
		elem.addEventListener("blur", () => {
			validateElem(elem, shapeImg, dataAtr);
			if (password.value !== passwordConf.value && passwordConf.value !== "") {
				elem.nextElementSibling.textContent = "Пароли не равны";
			}
		});
	}
}

body.addEventListener("input", (e) => {
	if (e.target.name === "firstName") {
		state.firstName = firstName.value;
	}
	if (e.target.name === "lastname") {
		state.lastName = lastName.value;
	}
	if (e.target.name === "select-nationality") {
		state.nationality = nationality.value;
	}
	if (e.target.name === "day") {
		state.dayBirth = daySelect.value;
	}
	if (e.target.name === "month") {
		state.mounthBirth = monthSelect.value;
	}
	if (e.target.name === "year") {
		state.yearBirth = yearSelect.value;
	}
	if (e.target.name === "email") {
		state.email = email.value;
	}
	if (e.target.name === "password") {
		state.password = password.value;
	}
	if (e.target.name === "passconf") {
		state.confirmPassword = passwordConf.value;
	}
});

document.addEventListener("change", (e) => (state.gender = e.target.value));

form.addEventListener("submit", (e) => {
	e.preventDefault();

	for (let elem of form.elements) {
		let dataAtr = elem.dataset.element;
		if (
			!elem.classList.contains("select-item") &&
			!elem.classList.contains("input-radio") &&
			!elem.classList.contains("form-btn")
		) {
			if (elem.value === "") {
				elem.nextElementSibling.textContent = "Заполните поле";
				formBtn.classList.add("form-btn-crash");
				shapeImg.forEach((shape) => {
					if (shape.dataset.element === dataAtr) {
						shape.classList.add("shape-img-none");
						elem.classList.add("error-span-border");
					}
				});
			} else if (
				password.value !== passwordConf.value &&
				passwordConf.value !== ""
			) {
				if (dataAtr === "input-pass" || dataAtr === "input-passconf") {
					elem.nextElementSibling.textContent = "Пароли не равны";
				}
			} else if (elem.value !== "") {
				validateElem(elem, shapeImg, dataAtr);
			} else {
				elem.nextElementSibling.textContent = "";
				elem.classList.remove("error-span-border");
			}
		}
	}

	if (
		state.firstName !== "" &&
		state.lastName !== "" &&
		state.nationality !== "" &&
		state.email !== "" &&
		state.dayBirth !== "" &&
		state.mounthBirth !== "" &&
		state.yearBirth !== "" &&
		state.gender !== "" &&
		state.password !== "" &&
		state.confirmPassword !== "" &&
		state.password === state.confirmPassword
	) {
		console.log(state);
		form.classList.add("form-class");
		formRegistr.classList.add("form-registr-class");
		firstName.value = "";
		lastName.value = "";
		email.value = "";
		yearSelect.value = "";
		monthSelect.value = "";
		daySelect.value = "";
		password.value = "";
		passwordConf.value = "";
	}
});

// анимация svg
const icon = new Vivus("my-svg", {
	type: "sync",
	duration: 300,
});
