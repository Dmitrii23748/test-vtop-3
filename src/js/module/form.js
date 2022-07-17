const re =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const rePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

// удаление анимация crash
export const deleteCrash = (btn) => {
	btn.classList.remove("form-btn-crash");
};

const validateInput = (elemInput, arrShape, dataAtr) => {
	if (elemInput.value.trim() === "") {
		elemInput.nextElementSibling.textContent = "Заполните поле";
		arrShape.forEach((shape) => {
			if (shape.dataset.element === dataAtr) {
				shape.classList.add("shape-img-none");
				elemInput.classList.add("error-span-border");
			}
		});
	} else {
		elemInput.nextElementSibling.textContent = "";
		arrShape.forEach((shape) => {
			if (shape.dataset.element === dataAtr) {
				shape.classList.remove("shape-img-none");
				elemInput.classList.remove("error-span-border");
			}
		});
	}
};

const validateElentsShapeAdd = (shapeImgElem, elemInput, dataAtr) => {
	shapeImgElem.forEach((shape) => {
		if (shape.dataset.element === dataAtr) {
			shape.classList.add("shape-img-none");
			elemInput.classList.add("error-span-border");
		}
	});
};
const validateElentsShapeRemove = (shapeImgElem, elemInput, dataAtr) => {
	shapeImgElem.forEach((shape) => {
		if (shape.dataset.element === dataAtr) {
			shape.classList.remove("shape-img-none");
			elemInput.classList.remove("error-span-border");
		}
	});
};

export const validateElem = (elem, shapeImg, dataAtr) => {
	if (
		elem.dataset.element === "input-pass" ||
		elem.dataset.element === "input-passconf"
	) {
		if (!rePassword.test(elem.value)) {
			elem.nextElementSibling.textContent =
				"Пароль содержит 8 символов, заглавные,строчные буквы, цифры и только латинские символы";
			validateElentsShapeAdd(shapeImg, elem, dataAtr);
		} else {
			elem.nextElementSibling.textContent = "";
			validateElentsShapeRemove(shapeImg, elem, dataAtr);
		}
	}
	if (
		elem.dataset.element === "input-name" ||
		elem.dataset.element === "input-lastname"
	) {
		validateInput(elem, shapeImg, dataAtr);
	}
	if (elem.dataset.element === "input-email") {
		if (!re.test(elem.value)) {
			elem.nextElementSibling.textContent = "Не корректный email";
			validateElentsShapeAdd(shapeImg, elem, dataAtr);
		} else {
			elem.nextElementSibling.textContent = "";
			validateElentsShapeRemove(shapeImg, elem, dataAtr);
		}
	}
};
