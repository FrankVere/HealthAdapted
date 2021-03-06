import React, { useEffect, useContext, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MealContext } from "../MealContext";
import { useAuth0 } from "@auth0/auth0-react";
import Homepage from "./Homepage";
import RecipeInfo from "./RecipeInfo";
import Profile from "./Profile";
import HeaderBar from "./HeaderBar";
import Navbar from "./Navbar";
import LikedRecipes from "./LikedRecipes";
import MealPlan from "./MealPlan";
import GlobalStyles from "./GlobalStyles";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const {
    actions: { getAllMeals, updateMealPlan },
  } = useContext(MealContext);

  //this will post user information to mongo//
  useEffect(() => {
    const postUser = async () => {
      fetch("/post-user/", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      });
    };
    //get user meal plan from mongodb and add it to our meal plan state so we don't lose recipes on relog//
    const getUserMealPlan = async () => {
      const userInfo = user.email;
      const res = fetch("/get-meal-plan/", {
        method: "POST",
        body: JSON.stringify({ userInfo }),
      });
      const data = res.json();
      updateMealPlan(data.data);
    };

    //this will trigger a rerender on the home page depending on the users currently saved prefences and show the user only the recipes they want to see //
    const updateHomepageRecipes = async () => {
      const res = await fetch(`/get-user-preferences/${user.email}`, {
        method: "GET",
      });
      const data = await res.json();

      await fetch(
        `/get-preference-recipes/?cuisine=${data.data.cuisine}&intolerances=${
          data.data.intolerances
        }&diet=${data.data.diet}&type=${data.data.type}&maxCarbs=${Number(
          data.data.maxCarbs
        )}&maxProtein=${Number(data.data.maxProtein)}&maxFat=${Number(
          data.data.maxFat
        )}&maxCaffeine=${Number(data.data.maxCaffeine)}&maxCalories=${Number(
          data.data.maxCalories
        )}&maxReadyTime=${Number(data.data.maxReadyTime)}`
      )
        .then((res) => res.json())
        .then((data) => {
          getAllMeals(data.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    // only when the user is logged in and authenticated will we run these following functions (described above) //
    if (isAuthenticated) {
      postUser();
      updateHomepageRecipes();
      getUserMealPlan();
    } else {
      fetch("/get-recipes/", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          getAllMeals(data.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isAuthenticated]);

  //here we have the padding bottom added to our app return so that our navbar doesnt conflict with the bottoms of our pages throughout the app //
  return (
    <div style={{ paddingBottom: "120px" }}>
      <BrowserRouter>
        <GlobalStyles />
        <HeaderBar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/:recipeName" element={<RecipeInfo />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/likedRecipes" element={<LikedRecipes />} />
          <Route exact path="/mealPlan" element={<MealPlan />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
