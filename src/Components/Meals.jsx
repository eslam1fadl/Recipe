import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';

export default function Meals() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [meals, setMeals] = useState([]);

  async function getAllCategories() {
    try {
      const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`);
      setCategories(data.meals || []);
    } catch (error) {
      console.log(error);
    }
  }

  async function getMeals(selectedCategory) {
    try {
      setLoading(true);
      const { data } = await axios.get(
        selectedCategory === 'All'
          ? `https://www.themealdb.com/api/json/v1/1/search.php?s=`
          : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
      );
      setMeals(data.meals || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllCategories();
    getMeals(selectedCategory);
  }, []);

  useEffect(() => {
    getMeals(selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <div className='min-h-dvh'>
        <h1 className='learn font-bold text-3xl pt-2.5 my-3.5'>Learn, Cook, Eat Your Food</h1>
        <ul className='flex flex-wrap gap-x-2.5 gap-y-1.5 text-xl'>
          <li
              className={`cat border-1  py-1 px-1.5 rounded-2xl p-2.5 cursor-pointer ${selectedCategory === 'All'? 'active' : ''}`}
              onClick={() => setSelectedCategory('All')}
          >
            All
          </li>

          {categories?.map((category, index) => (
            <li
              onClick={() => setSelectedCategory(category.strCategory)}
              className={`cat border-1  text-gray-500 border-gray-300 py-1 px-1.5 rounded-2xl p-2.5 cursor-pointer ${selectedCategory === category.strCategory ? 'active' : ''}`}
              key={index}
            >
              {category.strCategory}
            </li>
          ))}
        </ul>
        <br />
        <hr className=' text-gray-300' />
        {loading ? (
          <BounceLoader className='mx-auto' />
        ) : (
          <div className='flex flex-wrap py-10'>
            {meals?.map((meal) => (
              <div key={meal.idMeal} className='sm:w-full md:w-[50%] lg:w-[33.333%] xl:w-[25%] text-center p-3'>
                <div className="inner py-4 bg-white rounded-2xl hover:scale-110 ransition-transform duration-300  ">

                <img src={meal.strMealThumb} className='rounded-full w-[50%] mx-auto hover:rotate-180 transition-transform duration-500' alt={meal.strMeal} />
                <h2 className='text-lg font-medium mt-2'>{meal.strMeal}</h2>
                {meal.strArea!==undefined && <h3 className=' text-green-600' >{meal.strArea}</h3> }
                <Link to={`/mealdetails/${meal.idMeal}`} className='bg-green-700 block w-fit mx-auto my-1 p-3 rounded-2xl text-white'>View Recipe</Link>
                </div>
                
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
