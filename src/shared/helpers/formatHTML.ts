import { resultCodeOptions } from "../constants";

// Библиотека подключается в head, функция html_beatify доступна глобально, вот только линтеру на это похер
export default function(htmlTemplate: string) {
    //@ts-ignore
    return html_beautify(htmlTemplate, resultCodeOptions);
}
