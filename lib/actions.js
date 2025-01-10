'use server'

import { redirect } from "next/navigation";
import { saveMeal } from "./meals"
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
    return !text || text.trim() === '';
}

export async function shareMeal(preState , formData) {

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    };

    // console.log(meal)

    // server validation

    if(isInvalidText(meal.title) || 
        isInvalidText(meal.summary) || 
        isInvalidText(meal.instructions) || 
        isInvalidText(meal.creator_email) ||
        isInvalidText(meal.creator) ||
        !meal.creator_email.includes('@') || 
        !meal.image || meal.image.size === 0 ){
        
            // another way to give error response
            // throw new Error('Invalid input');

            return {
                message: 'Invalid input.'
            }

    }

    await saveMeal(meal);

    // revalidatePath('/meals', 'layout'); // to revalidated all the nexted page
    // revalidatePath('/', 'layout'); // to revalidate the entire webapp

    // Because we are interested in revalidating only the share page
    revalidatePath('/meals');
    redirect('/meals');
    
    


}







