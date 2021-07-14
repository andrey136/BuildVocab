import { createSlice, nanoid } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'vocab',
    initialState: {
        "Fruit":[
            {id: nanoid(), "span-word": "manzana", "eng-trans": "apple", "rus-trans": "яблоко", "span-indef-art": "una", "span-def-art": "la"},
            {id: nanoid(), "span-word": "pera", "eng-trans": "pear", "rus-trans": "груша", "span-indef-art": "una", "span-def-art": "la"},
            {id: nanoid(), "span-word": "sandía", "eng-trans": "watermelon", "rus-trans": "арбуз", "span-indef-art": "una", "span-def-art": "la"}
        ],
        "School":[
            {id: nanoid(), "span-word": "padre", "eng-trans": "father", "rus-trans": "отец", "span-indef-art": "un", "span-def-art": "el"},
            {id: nanoid(), "span-word": "madre", "eng-trans": "mother", "rus-trans": "мать", "span-indef-art": "una", "span-def-art": "la"}
        ],
    },
    reducers: {
        addWord: {

        }
    }
})

export default slice.reducer