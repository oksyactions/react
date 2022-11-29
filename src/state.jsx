import { useResolvedPath } from "react-router-dom";

const user ={
    name: "Иван",
    email: "ivan@ya.ru",
    id: 1,
    about: "Тут рассказываю о себе ...",
    avatar: "https://www.seekpng.com/png/full/356-3562377_personal-user.png",
};

const users = {
    0:{name: "Оксана", lastname: "Самородова"},
    1:{name: "Денис", lastname: "Цебин"},
    2:{name: "Дарья", lastname: "Михайлова"},
    3:{name: "Евгений", lastname: "Чужой"},
    4:{name: "Мария", lastname: "Беглова"},
}

export function getUser(){
return user;
}
export function getUsers(){
    return users;
}