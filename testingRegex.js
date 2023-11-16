function replaceSymbol(innerHTML) {
    return innerHTML.replace(/>(s*?)(-)(s*?)</g, ">$1&#8209;$3<");
}

console.log(
    replaceSymbol(`
    <tr>
        <td class="sbis&#8209;ru__Articles__table&#8212;scroll-tr-td">Регистрация в&#160;системе маркировки</td>
        <td colspan="2" class="sbis&#8209;ru__Articles__table&#8212;scroll-tr-td">1&#160;сентября 2023</td>
    </tr>`
)
);  