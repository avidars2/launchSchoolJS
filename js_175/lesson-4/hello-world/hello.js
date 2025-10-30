const express = require('express');
const morgan = require('morgan');
const app = express();
const COUNTRY_DATA = [
  {
    path: "/english",
    flag: "flag-of-United-States-of-America.png",
    alt: "US Flag",
    title: "Go to US English site",
  },
  {
    path: "/french",
    flag: "flag-of-France.png",
    alt: "Drapeau de la france",
    title: "Aller sur le site français",
  },
  {
    path: "/serbian",
    flag: "flag-of-Serbia.png",
    alt: "Застава Србије",
    title: "Идите на српски сајт",
  },
];

const LANGUAGE_CODES = {
  english: "en-US",
  french: "fr-FR",
  serbian: "sr-Cryl-rs",
};

let now = new Date().getSeconds();
app.set("views", "./views");
app.set("view engine", "pug");
 
app.use(express.static("public"));
app.use(morgan("common"));

app.locals.currentPathClass = (path, currentPath) => {
  return path === currentPath ? "current" : "";
};

app.locals.currentPage = (path) => {
  return (COUNTRY_DATA.reduce(
    (acc, el, idx) => {
      if (el.path === path) acc = idx;
      return acc;
    },
    ''
  ) + 1);
}

app.locals.doFunkyStuff = (path) => {
  if (typeof path === "string") {
    return path.split('').map(char => char + char).join('');
  } else return "aabb"
}

const HelloWorld = (view, language) => {
  return (req, res) => {
    res.render(view, {
      currentPath: req.path,
      language: language,
      countries: COUNTRY_DATA,
    });
  }
  
}

app.get("/", (req, res) => {
  res.redirect("/english");
});

app.get("/:language", (req, res) => {
  const language = req.params.language;
  res.render(`hello-world-${language}`, {
    countries: COUNTRY_DATA,
    currentPath: req.path,
    language: LANGUAGE_CODES[language],
  });
});

app.get("/kannada", HelloWorld("hello-world-kn", "en-US"));

// app.get("/french", (req, res) => {
//   res.render("hello-world-french", {
//     currentPath: req.path,
//     language: "fr-FR",
//     countries: COUNTRY_DATA,
//   });
// });

// app.get("/serbian", (req, res) => {
//   res.render("hello-world-serbian", {
//     currentPath: req.path,
//     language: "sr-Cyrl-rs",
//     countries: COUNTRY_DATA,
//   });
// });

// app.get("/kannada", (req, res) => {
//   res.render("hello-world-kn",
//     { currentPath: req.path,
//       countries: COUNTRY_DATA
//      }
//   );
// })

app.get("/test", (req, res) => {
  res.render("test.pug");
})

app.listen(3000, "localhost", () => {
  console.log('Listening to port 3000.', now);
})