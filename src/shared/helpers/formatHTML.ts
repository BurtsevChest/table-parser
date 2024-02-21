/**
 * Опции для js-beautify. Библиотека форматирует финальный результат по заданным опциям
 */
const resultCodeOptions = {
    "indent_size": "3",
    "indent_char": " ",
    "max_preserve_newlines": "-1",
    "preserve_newlines": false,
    "keep_array_indentation": false,
    "break_chained_methods": false,
    "indent_scripts": "keep",
    "brace_style": "collapse",
    "space_before_conditional": true,
    "unescape_strings": false,
    "jslint_happy": false,
    "end_with_newline": false,
    "wrap_line_length": "0",
    "indent_inner_html": false,
    "comma_first": false,
    "e4x": false,
    "indent_empty_lines": false
 };
 

// Библиотека подключается в head, функция html_beatify доступна глобально, вот только линтеру на это похер
export default function (htmlTemplate: string) {
    //@ts-ignore
    return html_beautify(htmlTemplate, resultCodeOptions);
}
