//jshint esversion:6

const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser")

const app = express()

app.set({"view engine":"ejs"})