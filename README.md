# Commit Kings - Components repository

This is the Components repository for a Gomoku game

## Installation

If you don't have this repository lacally alredy, here is the steps you can follow to clone it.If you don’t already have this repository locally, here are the steps you can follow to clone it.

1. Go to your git bash

2. Make sure you're in the correct directory of where you want to clone the repo (repository)

3. git clone (URL)

4. go to main by doing this steps: cd ck-Components

If you already have the repo locally:

1. Go to your git bash

2. Make sure you are in the tight project ck-Components and that you're standing in main

3. Use git pull, this will pull down all of the recent changes that are made, if there are any to you locally.

4. Use git status to make sure that you have pull everything correctly

## Usage guide
Simple guide of how to use this repo.

## Running the Application

1. Install dependencies
 npm install

2. Start the development server:
 npm run dev

3. Open your browser and navigate to http://localhost:3000 (or the port specified in the console)

### Playing Gomoku
* Choose your player, 1 or 2. Then choose your color and click on "Start Game"
* Players alternate turns
* The objective is to be the first to form an unbroken chain of five dots horizontally, vertically or diagonally
* The game will automatically detect wins and display the winner

### Game Rules
#### Basic Rules
* Two players take turns placing dots on the intersections of the grid
* The first player to align exactly 5 dots in a row (horizontally, vertically or diagonally) wins
* If the board fills up without a winner, the game is a draw

### Victory conditions
* Horizontal: Five dots in a row across
Vertical: Five dots in a row up and down
Diagonal: Five stones in a row diagonally

### Features
* Interactive game board with click-to-play functionality
* Win detection for all victory conditions
* Turn indicator showing current player
* Game reset functionality

## Acknoledgments
* Thanks to all contributors
* Inspired by the classic Gomoku game

