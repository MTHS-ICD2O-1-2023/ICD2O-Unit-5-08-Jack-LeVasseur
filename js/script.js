// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Jack LeVasseur
// Created on: Ma7 4, 2024
// This file contains the JS functions for index.html

function myButtonClicked() {
  // define numbers
  const firstNumber = parseFloat(document.getElementById("first-number").value)
  const secondNumber = parseFloat(document.getElementById("second-number").value)
  let dividend = firstNumber
  let divisor = secondNumber
  let remainder = 0
  // divide
  let numberOfLoops = 0
  let answer = 0
  while (true) {
    if (dividend < divisor) {
      remainder = dividend
      break
    }
    dividend = dividend - divisor
    numberOfLoops++
  }
  answer = numberOfLoops
  // print answer
  document.getElementById("answer").innerHTML = "Answer: " + answer + " R " + remainder}