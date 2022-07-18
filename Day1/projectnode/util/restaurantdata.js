const fs = require("fs");

const express = require("express");

const uuid = require("uuid");

const path = require("path");

const filepath = path.join(__dirname, "data", "restaurants.json");

function getstoredrestaurants() {
  const filedata = fs.readFileSync(filepath);

  const storedrestaurants = JSON.parse(filedata);

  return storedrestaurants;
}

function storedrestaurants(stor) {
  return fs.writeFileSync(filepath, JSON.stringify(stor));
}

module.exports = {
  getstoredrestaurants: getstoredrestaurants,
  storedrestaurants: storedrestaurants,
};
