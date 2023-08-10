#!/bin/bash

npx hardhat compile --force

rm -rf ../frontend/typechain-types

cp -r ./typechain-types ../frontend/