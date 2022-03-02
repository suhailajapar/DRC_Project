const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const pool = require("./database/index");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const { createToken, validateToken } = require("./JWT");

app.get("/api", (req, res) => {
  res.send("Welcome to Hikers' API");
});

app.use(cors());
app.use(cookieParser());

app.use(express.static("./public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/register", async (req, res) => {
  const { username, fullname, email, password, date_joined } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  const userInfo = [username, fullname, email, hashPassword, date_joined];
  console.log(userInfo);

  const sqlRegister =
    "INSERT INTO hikers.users (username, full_name, email, password, date_joined) VALUES ($1, $2, $3, $4, $5)";
  pool.connect((err, db, done) => {
    if (err) {
      return console.log(err);
    } else {
      db.query(sqlRegister, [...userInfo], (err, result) => {
        done();
        if (err) {
          console.log(err);
          return res.send({ err: err });
        } else {
          console.log("REGISTER SUCCESS");
          return res.status(200).send({ message: "Welcome Hikers" });
        }
      });
    }
  });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  // if (!email || !password) {
  //   return res.send({ message: "Blackpink in the house" });
  // }

  const sqlLogin = "SELECT * FROM hikers.users WHERE email = $1";
  pool.connect((err, db, done) => {
    if (err) {
      return console.log(err);
    } else {
      db.query(sqlLogin, [email], async (err, result) => {
        done();
        if (result.rowCount < 1) {
          return res
            .status(400)
            .send({ message: "Wrong email/password combination!" });
        }

        const checkPassword = await bcrypt.compare(
          password,
          result.rows[0].password
        );

        if (err) {
          return res.send({ err: err });
        }

        if (!checkPassword) {
          return res
            .status(400)
            .send({ message: "Wrong email/password combination!" });
        }

        if (result.rowCount > 0) {
          const email = result.rows[0].email;
          const loginid = result.rows[0].loginid;
          const access_token = createToken(email, loginid);

          //Store access-token in cookiie
          // res.cookie("access-token", access_token, {
          //   maxAge: 86400 * 1000, //expired in 1 day (ms)
          //   httpOnly: true,
          // });

          const { password, ...filtered_result } = result.rows[0];
          console.log(filtered_result);

          return res
            .status(200)
            .send({ token: access_token, ...filtered_result });
        }
      });
    }
  });
});

app.get("/api/profile", validateToken, (req, res) => {
  res.json("profile");
});

//Image uploading section -----------------------------
//! Use of Multer
const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "./public/images/"); // './public/images/' directory name where save the file
  },
  filename: (req, file, callBack) => {
    callBack(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

//Configuration for Multer
// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public");
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split("/")[1];
//     cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
//   },
// });

// Multer Filter
// const multerFilter = (req, file, cb) => {
//   if (
//     ["png", "jpg", "jpeg", "gif", "bmp"].includes(file.mimetype.split("/")[1])
//   ) {
//     cb(null, true);
//   } else {
//     cb(new Error("Not a PDF File!!"), false);
//   }
// };

// const upload = multer({
//   storage: multerStorage,
//   fileFilter: multerFilter,
// });

//route for post image
app.post("/api/upload", upload.single("image"), (req, res) => {
  // const loginid = req.user_id[0];
  if (!req.file) {
    console.log("No file upload");
  } else {
    const imgsrc = "http://127.0.0.1:3000/images/" + req.file.filename;
    // URL of the Image
    const insertImage =
      "UPDATE hikers.users SET user_img = $1  WHERE loginid = $2 RETURNING *";
    pool.connect((err, db) => {
      if (err) {
        return console.log(err);
      } else {
        db.query(insertImage, [imgsrc, loginid], (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log("file uploaded");
            console.log(result);
            // res.status(200).send(result);
          }
        });
      }
    });
  }
});

// PORT LISTENING
app.listen(3001, () => {
  console.log("running on port 3001");
});
