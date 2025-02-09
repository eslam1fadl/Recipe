import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Mealdetails() {
  const { id } = useParams();
  const [mealdetails, setMealDetails] = useState([]);
  const [errorMessage,setErrorMessage]= useState([]);

  const getMealDetails = async (id) => {
    try {
      const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      if(data.meals===null){
        throw new Error("No meal found by this ID");
      }
      setMealDetails(data.meals);

      
    } catch (error) {
      setErrorMessage(error.message)
    }
  };

  useEffect(() => {
    getMealDetails(id);

  }, []);

  return (
    <>
      <div className='min-h-dvh'>
        {/* {errorMessage && <p className='bg-red-500 text-white py-3 text-center'>{errorMessage}</p>} */}
        {mealdetails?.map((meal) => (
          <div key={meal.idMeal} className='pt-2'>
            <h1 className='text-4xl text-left m-5 font-bold'>{meal.strMeal}</h1>
            <div className='flex justify-between'>
              <div className='flex flex-col w-[35%] h-[50%] ml-5'>
              <img src={meal.strMealThumb} className='w-full rounded-2xl' alt={meal.strMeal} />
              <div className='flex gap-2 m-4'>
              {meal.strYoutube && (
                <Link className=' bg-red-600 text-white px-5 py-2 block w-fit h-fit rounded-xl' href={meal.strYoutube} target="_blank" rel="noopener noreferrer">
                  YouTube
                </Link>
              )}
              {meal.strSource && (
                <Link className=' px-6 py-2 bg-green-600  text-white block w-fit h-fit  rounded-xl' href={meal.strSource} target="_blank" rel="noopener noreferrer">
                  Source
                </Link>
              )}

            </div>
              </div>

              <p className='mx-5 w-[40%] mr-5'>{meal.strInstructions}</p>
            </div>
          


          </div>
        ))}
      </div>
    </>
  );
}
