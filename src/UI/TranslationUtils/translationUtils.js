import { translationsData } from "../../data/translationsData";

// функция принимает ключ и возвращает соответствующий перевод на текущем языке. 
// Она получает переводы из translationsData с использованием текущего языка currentLanguage.

export const getTranslation = (key, currentLanguage) => {

    //переменная translations содержит переводы на разных языках.
    const translate = translationsData

    const translation = translate[currentLanguage];
    return translation[key];
};
