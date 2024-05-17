// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Jack LeVasseur
// Created on: March 7 2024
// This file contains the JS functions for index.html

<script>
  function performDivision() {
    let dividend = parseInt(document.getElementById('dividend').value);
  let divisor = parseInt(document.getElementById('divisor').value);
  let quotient = 0;
  let remainder = dividend;

            while (remainder >= divisor) {
    remainder -= divisor;
  quotient++;
            }

  document.getElementById('result').innerHTML = `Quotient: ${quotient}, Remainder: ${remainder}`;
        }
</script>
