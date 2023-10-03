export const template = `
<table width="640" border="0" cellspacing="0" style="font-family:Helvetica,sans-serif;color:rgb(0,0,0);font-size:medium">
<tbody>
<tr>
    <td width="53" style="display: block; margin-top: 5px;" class="image-container">
        <img width="43" src="{{logo}}" alt="{{alt}}" aria-label="{{aria}}">
    </td>
    <td width="587">
        <table width="565" border="0" cellspacing="0">
            <tbody>
                <tr>
                    <td width="565" style="font-family:Helvetica,sans-serif;font-size:17pt;font-weight:600;line-height: normal;">
                        <font color="#000000">{{name}}</font> <span style="font-family:Helvetica,sans-serif;font-size:12pt;font-weight:400;line-height: normal; vertical-align: middle;">({{gender}})</span>
                    </td>
                </tr>
                <tr height="32">
                    <td width="565" style="font-family:Helvetica,sans-serif;font-size:12pt;font-weight:600;">
                        <font color="#000000" style="display:inline-block; margin-bottom: 7px;">{{role}} | {{company}}</font>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>
<tr>
    <td height="4"></td>
</tr>
<tr>
    <td width="640" colspan="2">
        <table width="565" border="0" cellspacing="0">
            <tbody>
                <tr>
                    <td style="font-family:Helvetica,sans-serif;font-size:12pt;font-weight:400;">
                        <font color="#000000">{{contactSentence}}</font>
                    </td>
                </tr>
                <tr>
                    <td height="16"></td>
                </tr>
                <tr>
                    <td style="font-family:Helvetica,sans-serif;font-size:12pt;font-weight:400;">
                        <font color="#000000">Conocenos más en <a href="{{url}}?utm_source=signature&utm_medium=email" target="_blank">{{companyFooter}}</a> o seguinos en <a href="{{instagram}}" target="__blank">Instagram</a> o <a href="{{linkedin}}"
                                target="_blank">Linkedin</a>.</font>
                    </td>
                </tr>
                <tr class="image-container">
                    <td height="24"></td>
                </tr>
                <tr class="image-container">
                    <td colspan="2">
                        <img width="430" src="{{main-logo}}" alt="">
                    </td>
                </tr>
                <tr>
                    <td height="24"></td>
                </tr>
                <tr>
                    <td width="565" style="font-family:Helvetica,sans-serif;font-size:8pt;font-weight:400;">
                        <font color="#a9a9a9">
                            Si recibís un email fuera de tu horario, ignoralo y respondelo cuando sea conveniente. El descanso es fundamental para el bienestar físico y mental. Alva Creative House está comprometida con los <a href="https://www.weps.org/"
                                target="_blank">Principios de Empoderamiento de las Mujeres</a>, <a href="https://unglobalcompact.org/" target="_blank">Pacto Global</a> y no discrimina a las personas por ninguna condición. Esta firma de email fue
                            diseñada para ser accesible y sostenible. ¿Sabías que 30 emails equivalen a recorrer un kilómetro con un auto? El contenido de este correo es confidencial y privado. Evitá imprimirlo para minimizar su impacto.
                        </font>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>
</tbody>
</table>
`;