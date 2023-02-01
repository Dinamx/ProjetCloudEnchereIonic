import axios from 'axios';
import { useHistory } from 'react-router';


export function baseUrl(): string {
    return 'http://localhost:8080';
}
const apiUrl = 'http://localhost:8080';

// connexion
export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post('${apiUrl}/users/signin', { email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};

//    Format Json Inscription
//        {
//        "nom": "John",
//        "prenom": "Wick",
//        "email": "user1@example.com",
//        "mdp": "user1",
//    }

// inscription
export const useSignup = async (name: string, lastname: string, email: string, password: string) => {
    try {
        const history = useHistory();

        const users =
        {
            "nom": name,
            "prenom": lastname,
            "email": email,
            "mdp": password,
        }

        console.log("ok");

        const response = await axios.post(apiUrl + '/users/signup', users);

        alert('Response');
        history.push('/login', { direction: 'none' });

        return response.data;
    } catch (error) {
        alert(error);
        throw error;
    }
};

// Recherche avancée fa to tsy ho ilaina
export const useSearchCriteria = async (culteFrequence: { min: string, max: string, coefficient: string },
    salaire: { min: string, max: string, coefficient: string },
    taille: { min: string, max: string, coefficient: string },
    poids: { min: string, max: string, coefficient: string },
    age: { min: string, max: string, coefficient: string },
    bacc: { min: string, max: string, coefficient: string },
) => {
    try {
        console.log(apiUrl + '/searchCriteria');
        const response = await axios.post('http://localho   st:8080/searchCriteria', { culteFrequence, salaire, taille, poids, age, bacc });
    } catch (error) {
        throw error;
    }
};