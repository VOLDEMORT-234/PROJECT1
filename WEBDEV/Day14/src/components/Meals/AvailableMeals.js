import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
// fetching meals data from firebase

const AvailableMeals = () => {
  const [meals, setmeals] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const [httpError, setHttpError] = useState(null); // no value initially

  useEffect(() => {
    const fetchmeals = async () => {
      // setisLoading(true);
      const response = await fetch(
        "https://deepesh-agrawal-default-rtdb.firebaseio.com/meals.json "
      ); //fetch return a promise

      if (!response.ok) {
        // setHttpError(true);
        throw new Error("something went wrong");
      }
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          price: responseData[key].price,
          description: responseData[key].description,
        });
      }
      setmeals(loadedMeals);
      setisLoading(false);
    };

    fetchmeals().catch((error) => {
      setisLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
