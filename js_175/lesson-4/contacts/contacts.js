const express = require("express");
const morgan = require("morgan");
const { body, validationResult } = require("express-validator");

const app = express();

let contactData = [
  {
    firstName: "Mike",
    lastName: "Jones",
    phoneNumber: "281-330-8004",
  },
  {
    firstName: "Jenny",
    lastName: "Keys",
    phoneNumber: "768-867-5309",
  },
  {
    firstName: "Max",
    lastName: "Entiger",
    phoneNumber: "214-748-3647",
  },
  {
    firstName: "Alicia",
    lastName: "Keys",
    phoneNumber: "515-489-4608",
  },
];

const sortContacts = contacts => {
  return contacts.slice().sort((contactA, contactB) => {
    if (contactA.lastName < contactB.lastName) {
      return -1;
    } else if (contactA.lastName > contactB.lastName) {
      return 1;
    } else if (contactA.firstName < contactB.firstName) {
      return -1;
    } else if (contactA.firstName > contactB.firstName) {
      return 1;
    } else {
      return 0;
    }
  });
};

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }))
app.use(morgan("common"));

app.get("/", (req, res) => {
  res.redirect("/contacts");
});

app.get("/contacts", (req, res) => {
  res.render("contacts", {
    contacts: sortContacts(contactData),
  });
});

app.get("/contacts/new", 
  (req, res, next) => {
    res.locals.someData = [1, 2, 3];
    next();

  }, (req, res) => {
  res.render("new-contact", {
    someData: res.locals.someData,
    inputData: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
    }
  });
});

const phoneSegmentIsValid = (input, length) => {
  if (input.length !== length) return false;
  return input.split('').every(numChar => {
    return !(Number.isNaN(Number(numChar)))
  })

}

const validateInput = (input, type) => {
  if (type === "phone") {
    let phoneArr;
    try {
      phoneArr = input.split("-");
    } catch (e) {
      return "Phone # must be formatted ###-###-####";
    }

    let validNumber = phoneArr.every((phoneSegment, idx) => {
      console.log(phoneSegment)
      if (idx === 0 || idx === 1) return phoneSegmentIsValid(phoneSegment, 3);
      if (idx === 2) return phoneSegmentIsValid(phoneSegment, 4);
      if (idx > 2) return false;
    })

    console.log(`Valid number ${validNumber}`)

    if (validNumber) {
      return null;
    } else return "Phone # must be formatted ###-###-####";
  }

  if (type === "name") {
    if (input.length === 0) return "name is required.";
    if (input.length > 25) return "name max length is 25 characters.";
    return null;
  }
}

const isDuplicate = (inputs) => {
  return (contactData.some(contactObj => {
    return (JSON.stringify(contactObj) === JSON.stringify(inputs))
  }));
}


app.post("/contacts/new",
  (req, res, next) => {
    res.locals.errorMessages = [];
    res.locals.inputData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
    }
    next();
  },
  (req, res, next) => {
    let errorMessage = validateInput(req.body.firstName, "name"); 
    if (errorMessage) {
      res.locals.errorMessages.push(`First ${errorMessage}`);
    }

    next();
  },
  (req, res, next) => {
    let errorMessage = validateInput(req.body.lastName, "name"); 
    if (errorMessage) {
      res.locals.errorMessages.push(`Last ${errorMessage}`);
    }

    next();
  },
  (req, res, next) => {
    let errorMessage = validateInput(req.body.phoneNumber, "phone"); 
    if (req.body.phoneNumber.length === 0) {
      res.locals.errorMessages.push(errorMessage);
    }

    if(errorMessage) {
      res.locals.errorMessages.push(errorMessage);
    }

    next();
  },
  (req, res, next) => {
    if (isDuplicate(res.locals.inputData)) {
      res.locals.errorMessages.push("No duplicate entries")
    }

    next();
  },
  (req, res, next) => {
    if (res.locals.errorMessages.length > 0) {
      res.render("new-contact", {
        errorMessages: res.locals.errorMessages,
        inputData: res.locals.inputData,
      });
    } else {
      next();
    }
  },
  (req, res) => {
    contactData.push({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
    });

    res.redirect("/contacts");
  }
);

app.listen(3000, "localhost", () => {
  console.log("Listening to port 3000.");
});